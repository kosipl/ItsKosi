const links = [
  { label: "Mixes", href: "#mixes" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Reach", href: "#reach" },
];

export function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,241,234,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "2px solid #15130f",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 32px",
        }}
      >
        <a
          href="#top"
          className="kosi-link"
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#15130f" }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#15130f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FF3B1D",
              fontFamily: "'Anton', sans-serif",
              fontSize: 17,
            }}
          >
            K
          </span>
          <span style={{ fontFamily: "'Archivo Expanded','Archivo',sans-serif", fontWeight: 800, letterSpacing: "-0.01em", fontSize: 15 }}>
            IT'S KOSI
          </span>
        </a>

        <div
          className="kosi-nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            fontWeight: 600,
            fontSize: 13.5,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="kosi-link"
              style={{ textDecoration: "none", color: "#15130f" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="kosi-btn"
            style={{ background: "#FF3B1D", color: "#fff", padding: "11px 20px", borderRadius: 100, fontWeight: 700, textDecoration: "none" }}
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}
