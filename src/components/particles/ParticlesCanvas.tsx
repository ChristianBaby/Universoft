import { useEffect, useRef } from "react";
import { Renderer, Program, Geometry, Mesh } from "ogl";

interface Props {
  className?: string;
  color?: [number, number, number];
}

const VERTEX = /* glsl */ `
  attribute vec2 position;
  uniform vec2 uResolution;
  uniform float uSize;
  void main() {
    vec2 clip = (position / uResolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = uSize;
  }
`;

const FRAGMENT = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, a * uAlpha);
  }
`;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ParticlesCanvas({ className = "", color = [0.145, 0.388, 0.922] }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 40 : 110;

    const renderer = new Renderer({ canvas, alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let positions = new Float32Array(count * 2);

    const seed = (w: number, h: number) => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: 1.5 + Math.random() * 3,
        alpha: 0.25 + Math.random() * 0.5,
      }));
    };

    const geometry = new Geometry(gl, {
      position: { size: 2, data: positions },
    });

    const program = new Program(gl, {
      vertex: VERTEX,
      fragment: FRAGMENT,
      transparent: true,
      uniforms: {
        uResolution: { value: [1, 1] },
        uSize: { value: 2 * renderer.dpr },
        uColor: { value: color },
        uAlpha: { value: 1 },
      },
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
      if (particles.length === 0) seed(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let running = false;

    const draw = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
        positions[i * 2] = p.x;
        positions[i * 2 + 1] = p.y;
      }
      geometry.attributes.position.data = positions;
      geometry.attributes.position.needsUpdate = true;
      renderer.render({ scene: mesh });
    };

    const loop = () => {
      if (!running) return;
      draw();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (canvas.getBoundingClientRect().bottom > 0) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    draw();

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
