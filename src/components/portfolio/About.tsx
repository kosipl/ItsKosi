const stats = [
  { value: "200+", label: "events played" },
  { value: "∞", label: "open format" },
  { value: "SEA", label: "home base" },
];

export function About() {
  return (
    <div id="about" style={{ borderTop: "2px solid #15130f", scrollMarginTop: 64 }}>
      <div
        className="kosi-stack"
        style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div style={{ position: "relative", borderRight: "2px solid #15130f", minHeight: 560, overflow: "hidden" }}>
          <img
            src="/assets/kosi-wide.jpeg"
            alt="Kosi (ISOK) performing at Gas Works Park, Seattle, at golden hour"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 58%" }}
          />
        </div>

        <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF3B1D", fontWeight: 700, marginBottom: 18 }}>
            / about
          </div>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px,4.4vw,44px)", textTransform: "uppercase", lineHeight: 0.98, margin: "0 0 22px" }}>
            More than<br />a playlist
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a3833", margin: "0 0 18px" }}>
            Kosi reads the room and builds the night — blending genres and eras so the dancefloor never stalls. Open format by
            instinct: the same set can move from Afrobeats to house to a hip-hop edit without ever breaking the energy.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a3833", margin: "0 0 18px" }}>
            Home base is Seattle — but the calendar runs through NYC, San Francisco, North Carolina, London and Norway. A travel
            DJ in the truest sense.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a3833", margin: 0 }}>
            Off the decks, he creates content with the same instinct: fast, current, and built for the moment.
          </p>

          <div style={{ display: "flex", gap: 42, marginTop: 34, borderTop: "2px solid #15130f", paddingTop: 24, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 40 }}>{s.value}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11.5, color: "#86847c", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
