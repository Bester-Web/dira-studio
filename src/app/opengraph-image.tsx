import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site.config";

export const alt = siteConfig.title.default;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded OpenGraph card generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f7f3e9 0%, #f0e9d8 60%, #e6dcc4 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 380,
            width: 640,
            height: 480,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(160,138,87,0.3), transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 84, fontWeight: 700, color: "#262115", letterSpacing: -3 }}>
          Dira<span style={{ color: "#806b3f" }}>Studio</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#6e6551", textAlign: "center", maxWidth: 820 }}>
          Websites that turn visitors into customers
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 18,
            fontSize: 22,
            color: "#514935",
          }}
        >
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(74,62,36,0.25)", background: "rgba(255,255,255,0.5)" }}>More calls</div>
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(74,62,36,0.25)", background: "rgba(255,255,255,0.5)" }}>More WhatsApp enquiries</div>
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(74,62,36,0.25)", background: "rgba(255,255,255,0.5)" }}>More customers</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
