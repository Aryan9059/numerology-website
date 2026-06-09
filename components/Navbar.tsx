"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/videos", label: "Videos" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(245, 240, 232, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 184, 150, 0.3)" : "none",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1.5px solid var(--warm-tan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(201, 169, 110, 0.1)",
              }}
            >
              <svg viewBox="0 0 40 40" width="24" height="24">
                <circle cx="20" cy="20" r="8" fill="none" stroke="var(--gold)" strokeWidth="1" />
                <circle cx="20" cy="20" r="3" fill="var(--gold)" opacity="0.7" />
                <path d="M20 4 L22 15 L20 12 L18 15 Z" fill="var(--gold)" opacity="0.5" />
                <path d="M20 36 L22 25 L20 28 L18 25 Z" fill="var(--gold)" opacity="0.5" />
                <path d="M4 20 L15 22 L12 20 L15 18 Z" fill="var(--gold)" opacity="0.5" />
                <path d="M36 20 L25 22 L28 20 L25 18 Z" fill="var(--gold)" opacity="0.5" />
                <path d="M7 7 L15 16" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
                <path d="M33 7 L25 16" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
                <path d="M7 33 L15 24" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
                <path d="M33 33 L25 24" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--deep-brown)",
                  lineHeight: 1.1,
                }}
              >
                Astro Gyan Prakash
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  fontWeight: 500,
                }}
              >
                Numerology & Astrology
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                color:
                  pathname === link.href
                    ? "var(--terracotta)"
                    : "var(--text-medium)",
                borderBottom:
                  pathname === link.href
                    ? "1px solid var(--terracotta)"
                    : "1px solid transparent",
                paddingBottom: "2px",
                transition: "all 0.3s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@AstroGyanPrakash"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--terracotta)",
              color: "white",
              padding: "0.5rem 1.4rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--medium-brown)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--terracotta)")
            }
          >
            Subscribe
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "var(--deep-brown)",
              marginBottom: "5px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "var(--deep-brown)",
              marginBottom: "5px",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "var(--deep-brown)",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(245, 240, 232, 0.98)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem 2rem",
            borderTop: "1px solid rgba(212, 184, 150, 0.3)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                textDecoration: "none",
                color:
                  pathname === link.href
                    ? "var(--terracotta)"
                    : "var(--text-medium)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                borderBottom: "1px solid rgba(212, 184, 150, 0.2)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@AstroGyanPrakash"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              background: "var(--terracotta)",
              color: "white",
              padding: "0.6rem 1.5rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Subscribe
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}