import { readFileSync } from "fs";
import { join } from "path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const logoData = readFileSync(
  join(process.cwd(), "public/images/isotipo-transparent.png")
);
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export function renderOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A1A3C",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={140} height={124} alt="" />
      <div
        style={{
          marginTop: 32,
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        Universoft Systems
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 28,
          color: "#1E66F5",
        }}
      >
        Desarrollo de Software a Medida
      </div>
    </div>
  );
}
