import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Mixes", href: "#mixes" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl md:text-2xl font-light text-ink hover:text-brand transition-colors"
        >
          It's Kosi
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs uppercase tracking-[0.15em] text-subtle hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@itskosi.com?subject=Booking%20inquiry"
            className="font-body font-medium text-sm rounded-lg px-5 py-2 bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}
