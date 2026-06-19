"use client";

import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export function Reveal({ children, delay = 0, className, direction = "up" }: RevealProps) {
  const prefersReduced = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: prefersReduced ? 0.01 : 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
