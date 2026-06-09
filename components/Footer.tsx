"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--deep-brown)",
        color: "rgba(245, 240, 232, 0.85)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top border */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--gold), var(--warm-tan), var(--gold), transparent)",
        }}
      />

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "5%",
          opacity: 0.06,
          fontSize: "180px",
          fontFamily: "'Cormorant Garamond', serif",
          color: "var(--gold)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        ☽
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "5%",
          opacity: 0.06,
          fontSize: "160px",
          fontFamily: "'Cormorant Garamond', serif",
          color: "var(--gold)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        ☀
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}
            >
              Astro Gyan Prakash
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--warm-tan)",
                marginBottom: "1.2rem",
              }}
            >
              Numerology & Spiritual Guidance
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "rgba(245, 240, 232, 0.6)",
                maxWidth: "280px",
              }}
            >
              Unlock the hidden power of numbers. Discover your life path, 
              destiny, and spiritual purpose through ancient numerology wisdom.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem" }}>
              <a
                href="https://www.youtube.com/@AstroGyanPrakash"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201, 169, 110, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--warm-tan)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  fontSize: "0.85rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--terracotta)";
                  e.currentTarget.style.borderColor = "var(--terracotta)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201, 169, 110, 0.3)";
                  e.currentTarget.style.color = "var(--warm-tan)";
                }}
                title="YouTube"
              >
                ▶
              </a>
              <a
                href="https://wa.me/919876543210"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201, 169, 110, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--warm-tan)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  fontSize: "0.85rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--terracotta)";
                  e.currentTarget.style.borderColor = "var(--terracotta)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201, 169, 110, 0.3)";
                  e.currentTarget.style.color = "var(--warm-tan)";
                }}
                title="WhatsApp"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--gold)",
                marginBottom: "1.2rem",
                fontWeight: 600,
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/videos", label: "Videos" },
                { href: "/blogs", label: "Blogs" },
                { href: "/#services", label: "Services" },
                { href: "/#testimonials", label: "Testimonials" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(245, 240, 232, 0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--warm-tan)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245, 240, 232, 0.6)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--gold)",
                marginBottom: "1.2rem",
                fontWeight: 600,
              }}
            >
              Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                "Mulank Readings",
                "Life Path Analysis",
                "Name Correction",
                "Mobile Number Check",
                "Business Numerology",
                "Compatibility",
              ].map((service) => (
                <span
                  key={service}
                  style={{
                    color: "rgba(245, 240, 232, 0.6)",
                    fontSize: "0.85rem",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--gold)",
                marginBottom: "1.2rem",
                fontWeight: 600,
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--terracotta)", fontSize: "1rem", marginTop: "1px" }}>✦</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--warm-tan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>YouTube</div>
                  <a
                    href="https://www.youtube.com/@AstroGyanPrakash"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(245, 240, 232, 0.7)", fontSize: "0.85rem", textDecoration: "none" }}
                  >
                    @AstroGyanPrakash
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--terracotta)", fontSize: "1rem", marginTop: "1px" }}>✦</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--warm-tan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Email</div>
                  <a
                    href="mailto:astrogyanprakash@gmail.com"
                    style={{ color: "rgba(245, 240, 232, 0.7)", fontSize: "0.85rem", textDecoration: "none" }}
                  >
                    astrogyanprakash@gmail.com
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--terracotta)", fontSize: "1rem", marginTop: "1px" }}>✦</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--warm-tan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>WhatsApp</div>
                  <a
                    href="https://wa.me/919876543210"
                    style={{ color: "rgba(245, 240, 232, 0.7)", fontSize: "0.85rem", textDecoration: "none" }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--terracotta)", fontSize: "1rem", marginTop: "1px" }}>✦</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--warm-tan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Location</div>
                  <span style={{ color: "rgba(245, 240, 232, 0.7)", fontSize: "0.85rem" }}>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ornamental divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.3), transparent)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(245, 240, 232, 0.4)" }}>
            © {new Date().getFullYear()} Astro Gyan Prakash. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(245, 240, 232, 0.4)", textAlign: "center" }}>
            ✦ &nbsp; Numbers hold the secrets of the universe &nbsp; ✦
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}