interface Client {
  name: string[];
  sub: string;
  nameSize: number;
  hot?: boolean;
  subSize?: number;
}

const clients: Client[] = [
  { name: ["NCAA"], sub: "Arena tours", nameSize: 22 },
  { name: ["ESPN"], sub: "Broadcast", nameSize: 22 },
  { name: ["amazon"], sub: "Corporate", nameSize: 22 },
  { name: ["Microsoft"], sub: "Product events", nameSize: 19 },
  { name: ["NYFW"], sub: "New York", nameSize: 22, hot: true },
  { name: ["Capitol Hill", "Block Party"], sub: "Seattle", nameSize: 15 },
  { name: ["EADN"], sub: "London", nameSize: 22 },
  { name: ["Polymarket"], sub: "Seahawks SB · via Complex", nameSize: 19, hot: true, subSize: 10 },
];

export function Clients() {
  return (
    <div id="clients" style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 32px", scrollMarginTop: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34, gap: 24, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(34px,5vw,48px)", textTransform: "uppercase", lineHeight: 0.95, margin: 0 }}>
          Booked across<br />the map
        </h2>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#86847c", textAlign: "right" }}>
          brands · leagues · stages<br />Seattle → London
        </div>
      </div>

      <div
        className="kosi-clients"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "2px solid #15130f", borderLeft: "2px solid #15130f" }}
      >
        {clients.map((c, i) => (
          <div
            key={i}
            className="kosi-cell"
            style={{
              borderRight: "2px solid #15130f",
              borderBottom: "2px solid #15130f",
              padding: "24px 16px",
              minHeight: 124,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              textAlign: "center",
              ...(c.hot ? { background: "#FF3B1D", color: "#fff" } : {}),
            }}
          >
            <div
              style={{
                fontFamily: "'Archivo Expanded','Archivo',sans-serif",
                fontWeight: 800,
                fontSize: c.nameSize,
                letterSpacing: c.name.length > 1 ? "-0.01em" : "-0.02em",
                lineHeight: c.name.length > 1 ? 1.12 : undefined,
              }}
            >
              {c.name.map((line, j) => (
                <span key={j}>
                  {j > 0 && <br />}
                  {line}
                </span>
              ))}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: c.subSize ?? 10.5,
                color: c.hot ? "rgba(255,255,255,0.8)" : "#86847c",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {c.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
