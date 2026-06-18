interface Mix {
  genre: string;
  title: string;
  trackId: string;
  bars: { h: string; d: string }[];
}

const mixes: Mix[] = [
  {
    genre: "R&B · Neo Soul",
    title: "Unmixed Company Vol. 3",
    trackId: "2178291840",
    bars: [{ h: "50%", d: "1.1s" }, { h: "90%", d: "0.9s" }, { h: "40%", d: "1.3s" }, { h: "70%", d: "1s" }],
  },
  {
    genre: "House · Dance · Disco",
    title: "Club Cubicle 001",
    trackId: "2189018039",
    bars: [{ h: "70%", d: "1s" }, { h: "40%", d: "1.25s" }, { h: "88%", d: "0.85s" }, { h: "55%", d: "1.15s" }],
  },
  {
    genre: "Hip-Hop · Afro",
    title: "Unmixed Company Vol. 2 — The Pregame",
    trackId: "2150263374",
    bars: [{ h: "60%", d: "1.2s" }, { h: "90%", d: "0.95s" }, { h: "45%", d: "1.3s" }, { h: "75%", d: "1.05s" }],
  },
];

function scUrl(trackId: string) {
  return (
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
    trackId +
    "&color=%23FF3B1D&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
  );
}

export function Mixes() {
  return (
    <div id="mixes" style={{ background: "#15130f", color: "#F4F1EA", scrollMarginTop: 64 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34, gap: 24, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(34px,5vw,48px)", textTransform: "uppercase", margin: 0 }}>
            Latest mixes
          </h2>
          <a
            href="https://soundcloud.com/iisokk"
            target="_blank"
            rel="noopener noreferrer"
            className="kosi-social"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#FF3B1D", textDecoration: "none" }}
          >
            view all on SoundCloud ▸
          </a>
        </div>

        <div className="kosi-mixes" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {mixes.map((m) => (
            <div key={m.trackId} style={{ background: "#1f1c17", border: "1px solid #34302a", borderRadius: 6, padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 26, flex: "none", width: 54 }}>
                  {m.bars.map((b, i) => (
                    <span
                      key={i}
                      style={{ flex: 1, background: "#FF3B1D", height: b.h, animation: `kosi-eq ${b.d} infinite`, display: "block" }}
                    />
                  ))}
                </div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#928d83", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {m.genre}
                </span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2, marginBottom: 14 }}>{m.title}</div>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                style={{ borderRadius: 4, display: "block" }}
                src={scUrl(m.trackId)}
                title={m.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
