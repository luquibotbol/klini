"use client";

import { useEffect, useState } from "react";

const links: [string, string][] = [
  ["Cómo funciona", "#how"],
  ["Funcionalidades", "#features"],
  ["Precios", "#pricing"],
  ["FAQ", "#faq"],
];

function KliniLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/klini-logo.png"
      alt="Klini"
      style={{ display: "block", width: "80px", height: "80px" }}
    />
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav ${scrolled ? "scrolled" : ""} ${
        mobileOpen ? "mobile-open" : ""
      }`}
    >
      <div className="container">
        <div className="nav-inner">
          <a href="#top" aria-label="Klini · ir al inicio">
            <KliniLogo />
          </a>
          <div className="nav-links">
            {links.map(([l, h]) => (
              <a key={l} className="nav-link" href={h}>
                {l}
              </a>
            ))}
          </div>
          <a className="btn btn-primary nav-cta-desktop" href="#demo">
            Pedir demo
          </a>
          <button
            className="nav-mobile-toggle"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
        <div className="nav-mobile-menu">
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMobileOpen(false)}>
              {l}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="#demo"
            style={{ marginTop: 10 }}
            onClick={() => setMobileOpen(false)}
          >
            Pedir demo
          </a>
        </div>
      </div>
    </nav>
  );
}
