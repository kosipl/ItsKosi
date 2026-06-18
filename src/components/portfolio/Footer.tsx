const socials = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/kosipl/" },
  { label: "TIKTOK", href: "https://www.tiktok.com/@kosipl" },
  { label: "SOUNDCLOUD", href: "https://soundcloud.com/iisokk" },
];

export function Footer() {
  return (
    <div style={{ background: "#15130f", color: "#F4F1EA" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "44px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Archivo Expanded','Archivo',sans-serif", fontWeight: 800, fontSize: 20 }}>IT'S KOSI</span>
        <div style={{ display: "flex", gap: 26, fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: "0.06em" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="kosi-social"
              style={{ color: "#F4F1EA", textDecoration: "none" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px 36px", fontFamily: "'Space Mono', monospace", fontSize: 11.5, color: "#5e5a53" }}>
        © 2026 Kosi (ISOK) · Seattle, WA · Open format, worldwide
      </div>
    </div>
  );
}
