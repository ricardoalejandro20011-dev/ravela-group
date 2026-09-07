import { ImageResponse } from "next/og";
export const alt = "Ravela Group — Automatización e IA para PYMEs mexicanas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f3f5ef",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#202522",
      }}
    >
      <div style={{ fontSize: 26 }}>RAVELA GROUP · MÉXICO</div>
      <div style={{ fontSize: 68, letterSpacing: -3, maxWidth: 950 }}>
        Automatizamos el trabajo que hoy tu equipo hace a mano.
      </div>
      <div style={{ fontSize: 24, color: "#315b4d" }}>
        Automatización · Inteligencia Artificial · Datos
      </div>
    </div>,
    size,
  );
}
