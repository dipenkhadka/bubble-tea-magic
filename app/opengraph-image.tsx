import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bubble Tea Magic | Premium Bubble Tea in Euless, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(201,162,39,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(61,40,23,0.06)",
            display: "flex",
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: 96, marginBottom: 24, display: "flex" }}>🧋</div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#2a1a0f",
            letterSpacing: "-1px",
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Bubble Tea Magic
        </div>

        {/* Caramel underline accent */}
        <div
          style={{
            width: 120,
            height: 4,
            borderRadius: 2,
            background: "#c9a227",
            margin: "20px 0",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#8b5a3c",
            textAlign: "center",
            fontWeight: 600,
            display: "flex",
          }}
        >
          Premium Bubble Tea · Euless, TX
        </div>

        {/* Pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["🥭 Fruit Tea", "☕ Vietnamese Coffee", "🧇 Bubble Waffles", "🥟 Momo"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "#fff8f0",
                  border: "1px solid #e8b86d",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: 20,
                  color: "#3d2817",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "rgba(61,40,23,0.35)",
            display: "flex",
          }}
        >
          bubbleteamagics.com
        </div>
      </div>
    ),
    { ...size }
  );
}
