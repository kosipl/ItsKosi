export function Hero() {
  return (
    <div id="top" style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px 36px" }}>
      <div
        className="kosi-stack"
        style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 48, alignItems: "center" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FF3B1D",
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#FF3B1D",
                display: "inline-block",
                animation: "kosi-blink 1.4s infinite",
              }}
            />
            Seattle-based · travels worldwide
          </div>

          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(58px,9.2vw,134px)",
              lineHeight: 0.82,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Genre<br />Has No<br />
            <span style={{ color: "#FF3B1D" }}>Curfew.</span>
          </h1>

          <p style={{ maxWidth: 520, fontSize: 18, lineHeight: 1.55, color: "#3a3833", margin: "30px 0 0", fontWeight: 500 }}>
            Kosi <span style={{ color: "#86847c" }}>(ISOK)</span> is a Seattle-based, frequently-traveling open-format DJ &amp; content
            creator — Hip-Hop, R&amp;B, Afrobeats, Dancehall, House, edits, you name it — woven into one seamless, room-reading set,
            wherever the night is.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
            <a
              href="#mixes"
              className="kosi-btn"
              style={{ background: "#15130f", color: "#fff", padding: "16px 28px", borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: "none" }}
            >
              Hear a set ▸
            </a>
            <a
              href="#book"
              className="kosi-btn"
              style={{ border: "2px solid #15130f", padding: "14px 26px", borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: "none", color: "#15130f" }}
            >
              Book Kosi
            </a>
          </div>
        </div>

        <div className="kosi-hero-photo" style={{ position: "relative" }}>
          <div style={{ position: "relative", border: "2px solid #15130f", borderRadius: 6, overflow: "hidden", boxShadow: "12px 12px 0 #15130f" }}>
            <img
              src="/assets/kosi-gasworks.jpeg"
              alt="Kosi (ISOK) DJing at golden hour at Gas Works Park, Seattle"
              style={{ display: "block", width: "100%", height: 560, objectFit: "cover", objectPosition: "center 30%" }}
            />
            <span
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "#F4F1EA",
                border: "1px solid #15130f",
                padding: "6px 10px",
              }}
            >
              Gas Works Park · Seattle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
