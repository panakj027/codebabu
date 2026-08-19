import { ImageResponse } from "next/og";

export const alt = "CodeBabu — Web Development & Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(145deg, #060910 0%, #0b1220 55%, #16103a 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #5b8aff, #8b6cff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {"CB"}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              <span>Code </span>
              <span style={{ fontWeight: 400 }}>Babu</span>
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 15,
                letterSpacing: 3,
                color: "#95a4be",
                textTransform: "uppercase",
              }}
            >
              Digital Experiences
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Building Digital Experiences That Move Businesses Forward.
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#93a0b8" }}>
          Web · Mobile · Software · UI/UX · E-commerce · WordPress · AI
        </div>
      </div>
    ),
    size,
  );
}
