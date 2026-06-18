const genres = ["Hip-Hop", "R&B", "Afrobeats", "Dancehall", "House", "Edits", "Open Format"];

function MarqueeRun() {
  return (
    <>
      {genres.map((g) => (
        <span key={g} style={{ display: "contents" }}>
          <span style={{ padding: "0 22px" }}>{g}</span>
          <span style={{ padding: "0 22px", color: "#FF3B1D" }}>✱</span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <>
      {/* Genre marquee */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "2px solid #15130f",
          borderBottom: "2px solid #15130f",
          background: "#15130f",
          padding: "14px 0",
          marginTop: 28,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "kosi-marquee 26s linear infinite",
            fontFamily: "'Anton', sans-serif",
            fontSize: 26,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#F4F1EA",
          }}
        >
          <MarqueeRun />
          <MarqueeRun />
        </div>
      </div>

      {/* Travel strip */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
          borderBottom: "2px solid #15130f",
        }}
      >
        <span
          style={{
            fontFamily: "'Archivo Expanded','Archivo',sans-serif",
            fontWeight: 800,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            flex: "none",
          }}
        >
          Have decks, will travel
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#56544d", letterSpacing: "0.02em" }}>
          Seattle · NYC · San Francisco · North Carolina · London · Norway
        </span>
      </div>
    </>
  );
}
