import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site.config";

export const alt = siteConfig.title.default;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded OpenGraph card generated at the edge — no static asset to maintain. */
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
          background: "linear-gradient(135deg, #07070c 0%, #0a0a12 60%, #14102a 100%)",
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
            background: "radial-gradient(circle, rgba(124,92,255,0.35), transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 84, fontWeight: 700, color: "#f5f6f8", letterSpacing: -3 }}>
          Dira<span style={{ color: "#a78bfa" }}>Studio</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#9ca3b8", textAlign: "center", maxWidth: 820 }}>
          Websites that turn visitors into customers
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 18,
            fontSize: 22,
            color: "#b8bdcc",
          }}
        >
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)" }}>More calls</div>
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)" }}>More WhatsApp enquiries</div>
          <div style={{ padding: "10px 26px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)" }}>More customers</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
