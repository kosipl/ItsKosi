interface Stat {
  value: string;
  label: string;
  hot?: boolean;
}

const stats: Stat[] = [
  { value: "1.4M+", label: "Views · past year", hot: true },
  { value: "15K+", label: "Followers" },
  { value: "5K+", label: "Creators used his sounds" },
  { value: "200K+", label: "SoundCloud plays · 12mo" },
];

export function Reach() {
  return (
    <div id="reach" style={{ borderTop: "2px solid #15130f", scrollMarginTop: 64 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34, gap: 24, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(34px,5vw,48px)", textTransform: "uppercase", lineHeight: 0.95, margin: 0 }}>
            The reach
          </h2>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#86847c", textAlign: "right", lineHeight: 1.5, maxWidth: 360 }}>
            1.4M+ views this past year — one clip<br />alone crossed 100K · 20K+ likes · 1K+ comments
          </div>
        </div>

        <div
          className="kosi-reach"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "2px solid #15130f", borderLeft: "2px solid #15130f" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                borderRight: "2px solid #15130f",
                borderBottom: "2px solid #15130f",
                padding: "34px 18px",
                textAlign: "center",
                ...(s.hot ? { background: "#FF3B1D", color: "#fff" } : {}),
              }}
            >
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px,5vw,54px)", lineHeight: 0.9 }}>{s.value}</div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: s.hot ? "rgba(255,255,255,0.82)" : "#86847c",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: 8,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
