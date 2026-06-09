import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

// Decorative SVG elements
function SunMoon() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Outer ring */}
      <circle cx="150" cy="150" r="130" fill="none" stroke="var(--warm-tan)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
      <circle cx="150" cy="150" r="110" fill="none" stroke="var(--warm-tan)" strokeWidth="0.3" opacity="0.2" />
      
      {/* Sun face */}
      <circle cx="180" cy="130" r="55" fill="var(--parchment)" stroke="var(--warm-tan)" strokeWidth="1" />
      {/* Sun rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 180 + Math.cos(rad) * 58;
        const y1 = 130 + Math.sin(rad) * 58;
        const x2 = 180 + Math.cos(rad) * 72;
        const y2 = 130 + Math.sin(rad) * 72;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="1.5" opacity="0.6" />
        );
      })}
      {/* Sun face details */}
      <ellipse cx="170" cy="126" rx="5" ry="6" fill="var(--medium-brown)" opacity="0.6" />
      <ellipse cx="190" cy="126" rx="5" ry="6" fill="var(--medium-brown)" opacity="0.6" />
      <path d="M 168 140 Q 180 150 192 140" fill="none" stroke="var(--medium-brown)" strokeWidth="1.5" opacity="0.6" />
      <path d="M 180 115 L 180 108" stroke="var(--warm-tan)" strokeWidth="1" opacity="0.5" />
      
      {/* Moon */}
      <path d="M 85 160 Q 120 110 115 175 Q 80 210 85 160 Z" fill="var(--parchment)" stroke="var(--warm-tan)" strokeWidth="1" />
      {/* Stars around */}
      <text x="100" y="100" fontSize="10" fill="var(--gold)" opacity="0.6">✦</text>
      <text x="230" y="200" fontSize="8" fill="var(--gold)" opacity="0.5">✦</text>
      <text x="130" y="230" fontSize="6" fill="var(--gold)" opacity="0.4">✦</text>
      <text x="250" y="100" fontSize="7" fill="var(--gold)" opacity="0.5">✦</text>
      <text x="60" y="200" fontSize="9" fill="var(--gold)" opacity="0.4">✦</text>
      
      {/* Clouds / ornamental swirls */}
      <path d="M 90 230 Q 100 220 115 225 Q 120 215 135 220 Q 145 210 155 218 Q 165 208 175 215" fill="none" stroke="var(--warm-tan)" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function NumberCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div
      className="card-hover"
      style={{
        background: "var(--parchment)",
        borderRadius: "12px",
        padding: "2rem",
        textAlign: "center",
        border: "1px solid rgba(212, 184, 150, 0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          fontSize: "80px",
          fontFamily: "'Cormorant Garamond', serif",
          color: "var(--warm-tan)",
          opacity: 0.08,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {number}
      </div>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--warm-tan), var(--terracotta))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.3rem",
          color: "white",
          fontWeight: 600,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem",
          color: "var(--deep-brown)",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.7 }}>
        {desc}
      </p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  cta,
  bg,
}: {
  icon: string;
  title: string;
  description: string;
  cta: string;
  bg: string;
}) {
  return (
    <div
      className="card-hover"
      style={{
        background: bg,
        borderRadius: "16px",
        padding: "2.5rem 2rem",
        border: "1px solid rgba(212, 184, 150, 0.3)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: "2.5rem" }}>{icon}</div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.5rem",
          color: "var(--deep-brown)",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-light)",
          lineHeight: 1.8,
          flexGrow: 1,
        }}
      >
        {description}
      </p>
      <span
        style={{
          fontSize: "0.78rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--terracotta)",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {cta} →
      </span>
    </div>
  );
}

function TestimonialCard({
  name,
  location,
  mulank,
  text,
}: {
  name: string;
  location: string;
  mulank: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "rgba(245, 240, 232, 0.8)",
        borderRadius: "16px",
        padding: "2rem",
        border: "1px solid rgba(212, 184, 150, 0.3)",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          color: "var(--warm-tan)",
          opacity: 0.4,
          fontFamily: "Georgia, serif",
          lineHeight: 0.8,
          marginBottom: "0.5rem",
        }}
      >
        "
      </div>
      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--text-medium)",
          lineHeight: 1.8,
          fontStyle: "italic",
          marginBottom: "1.5rem",
        }}
      >
        {text}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--warm-tan), var(--terracotta))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "white",
            fontWeight: 600,
          }}
        >
          {mulank}
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              color: "var(--deep-brown)",
              fontWeight: 600,
            }}
          >
            {name}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-light)", letterSpacing: "0.05em" }}>
            {location} · Mulank {mulank}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const blogs = await getAllBlogs();
  const recentBlogs = blogs.slice(0, 3);

  const services = [
    {
      icon: "🔢",
      title: "Mulank Readings",
      description:
        "Discover what your birth date reveals about your personality, strengths, challenges, and life purpose through the ancient science of numerology.",
      cta: "Explore Mulank",
      bg: "#fdf5e8",
    },
    {
      icon: "🌙",
      title: "Life Path Analysis",
      description:
        "Uncover your soul's journey through a deep analysis of your Life Path Number, Expression Number, and Soul Urge Number.",
      cta: "Find Your Path",
      bg: "#f5ede8",
    },
    {
      icon: "📱",
      title: "Mobile Numerology",
      description:
        "Did you know your mobile number vibrates with energy? Find out if your number is bringing luck or blocking your progress.",
      cta: "Check Your Number",
      bg: "#edf5ed",
    },
    {
      icon: "💼",
      title: "Business Numerology",
      description:
        "Choose the right business name, launch date, and location using numerology to align with powerful cosmic energies for success.",
      cta: "Build Your Success",
      bg: "#edeaf5",
    },
    {
      icon: "❤️",
      title: "Compatibility Check",
      description:
        "Understand the numerological compatibility between you and your partner, friend, or business associate for harmonious relationships.",
      cta: "Check Compatibility",
      bg: "#f5eaea",
    },
    {
      icon: "✍️",
      title: "Name Correction",
      description:
        "Your name carries a numerical vibration. Small corrections can make a massive difference to your luck, health, and success.",
      cta: "Correct Your Name",
      bg: "#f5f0e0",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      mulank: "6",
      text:
        "Astro Gyan Prakash ji predicted my career shift to the exact month. His mulank readings are incredibly accurate. My life changed after the name correction he suggested!",
    },
    {
      name: "Rajesh Verma",
      location: "Delhi",
      mulank: "3",
      text:
        "I was skeptical at first, but after watching his YouTube videos about Mulank 3, everything resonated deeply. Got a personal consultation and it was life-changing.",
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      mulank: "8",
      text:
        "Changed my mobile number based on his advice and within 3 months I got a new job opportunity! His explanations of karmic debt numbers are unmatched.",
    },
    {
      name: "Suresh Kumar",
      location: "Bangalore",
      mulank: "1",
      text:
        "The business name he suggested for my startup has brought tremendous growth. Over 200K subscribers trust his guidance, and now I know why.",
    },
    {
      name: "Meena Joshi",
      location: "Pune",
      mulank: "9",
      text:
        "His weekly numerology guidance videos have become a ritual for me. He explains complex concepts so simply and his predictions have been spot on for my family.",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      mulank: "5",
      text:
        "Got a vehicle number consultation — picked a number he recommended and my business travel has been smooth. Deeply grateful for this knowledge.",
    },
  ];

  const mulankDescriptions = [
    { number: "1", title: "The Leader", desc: "Sun-ruled pioneers with natural authority and independence" },
    { number: "2", title: "The Diplomat", desc: "Moon-influenced peacekeepers with deep intuition" },
    { number: "3", title: "The Creator", desc: "Jupiter-blessed communicators bursting with creativity" },
    { number: "4", title: "The Builder", desc: "Rahu-guided planners who construct lasting foundations" },
    { number: "5", title: "The Explorer", desc: "Mercury-driven adventurers who thrive on freedom" },
    { number: "6", title: "The Nurturer", desc: "Venus-touched caregivers devoted to harmony and love" },
    { number: "7", title: "The Seeker", desc: "Ketu-blessed mystics drawn to spiritual wisdom" },
    { number: "8", title: "The Achiever", desc: "Saturn-ruled powerhouses destined for great success" },
    { number: "9", title: "The Humanitarian", desc: "Mars-energized leaders serving humanity with wisdom" },
  ];

  return (
    <div style={{ background: "var(--cream)" }}>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, var(--cream) 0%, var(--parchment) 60%, #e8d8c8 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
        }}
      >
        {/* Background decorative patterns */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(196, 114, 74, 0.06) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(201, 169, 110, 0.08) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating star elements */}
        <div
          className="twinkle"
          style={{ position: "absolute", top: "15%", left: "8%", fontSize: "1.2rem", color: "var(--gold)", opacity: 0.5 }}
        >
          ✦
        </div>
        <div
          className="twinkle-2"
          style={{ position: "absolute", top: "25%", right: "12%", fontSize: "0.8rem", color: "var(--gold)", opacity: 0.4 }}
        >
          ✦
        </div>
        <div
          className="twinkle-3"
          style={{ position: "absolute", bottom: "30%", left: "15%", fontSize: "1rem", color: "var(--terracotta)", opacity: 0.3 }}
        >
          ✦
        </div>
        <div
          className="twinkle"
          style={{ position: "absolute", top: "60%", right: "8%", fontSize: "1.5rem", color: "var(--warm-tan)", opacity: 0.3 }}
        >
          ✦
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div>
            <div className="section-tag" style={{ marginBottom: "1.5rem" }}>
              ✦ &nbsp; Ancient Numerology Wisdom &nbsp; ✦
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 500,
                color: "var(--deep-brown)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Find Peace of Mind &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>
                Know Yourself
              </em>{" "}
              Better
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-light)",
                lineHeight: 1.9,
                maxWidth: "460px",
                marginBottom: "2.5rem",
              }}
            >
              Your trusted source for Numerology Predictions, Life Path Wisdom, and
              Spiritual Guidance based on ancient number science. Discover what your
              numbers reveal about your destiny.
            </p>

            {/* Channel stats */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "2.5rem",
                padding: "1.2rem 1.8rem",
                background: "rgba(255,255,255,0.6)",
                borderRadius: "12px",
                border: "1px solid rgba(212, 184, 150, 0.3)",
                backdropFilter: "blur(8px)",
                width: "fit-content",
              }}
            >
              {[
                { label: "Subscribers", value: "200K+" },
                { label: "Videos", value: "500+" },
                { label: "Predictions", value: "10K+" },
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "var(--terracotta)",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginTop: "3px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://www.youtube.com/@AstroGyanPrakash"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--terracotta)",
                  color: "white",
                  padding: "0.85rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 8px 24px rgba(196, 114, 74, 0.3)",
                }}
              >
                ▶ &nbsp;Watch on YouTube
              </a>
              <Link
                href="/videos"
                style={{
                  background: "transparent",
                  color: "var(--deep-brown)",
                  padding: "0.85rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  border: "1.5px solid var(--warm-tan)",
                }}
              >
                All Videos
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div
            className="float-1"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "420px", height: "420px", maxWidth: "100%" }}>
              <SunMoon />
            </div>
            {/* Floating orbs */}
            <div
              className="float-2"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #6b9eff 0%, #3b6bcc 100%)",
                opacity: 0.7,
                boxShadow: "0 0 20px rgba(107, 158, 255, 0.4)",
              }}
            />
            <div
              className="float-3"
              style={{
                position: "absolute",
                bottom: "15%",
                right: "8%",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--dusty-rose) 0%, var(--terracotta) 100%)",
                opacity: 0.8,
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: 0.5,
          }}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--warm-tan), transparent)",
            }}
          />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* ── INTRO / ABOUT ── */}
      <section
        id="about"
        style={{
          background: "var(--deep-brown)",
          color: "var(--cream)",
          padding: "6rem 2rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ color: "var(--warm-tan)", marginBottom: "1.5rem" }}>
            ✦ &nbsp; About the Channel &nbsp; ✦
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              marginBottom: "2rem",
              color: "var(--cream)",
            }}
          >
            Because we believe it's time for us to give a{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              second look
            </em>{" "}
            at what we already have in our life
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(245, 240, 232, 0.7)", marginBottom: "1.5rem" }}>
            🔮 Welcome to Astro Gyan Prakash — your trusted source for Numerology Predictions, 
            Life Path Wisdom, and Spiritual Guidance based on ancient number science. 
            Curious about how your birth number, name, or even mobile number shapes your life?
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(245, 240, 232, 0.7)" }}>
            Whether you're new to numerology or a seasoned believer, Astro Gyan Prakash 
            will guide you towards clarity, purpose, and transformation through divine number energy.
          </p>
        </div>
      </section>

      {/* ── MULANK NUMBERS ── */}
      <section
        id="mulank"
        style={{
          padding: "6rem 2rem",
          background: "var(--parchment)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ marginBottom: "0.8rem" }}>
              ✦ &nbsp; The Nine Sacred Numbers &nbsp; ✦
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--deep-brown)",
                fontWeight: 500,
              }}
            >
              Choose a way to know your future
            </h2>
            <p style={{ color: "var(--text-light)", marginTop: "0.8rem", fontSize: "0.9rem", maxWidth: "500px", margin: "0.8rem auto 0" }}>
              Simply put, numerology is the art of analyzing the vibration of numbers to interpret 
              personality characteristics and predict future happenings.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {mulankDescriptions.map((m) => (
              <NumberCard key={m.number} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{
          padding: "6rem 2rem",
          background: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ marginBottom: "0.8rem" }}>
              ✦ &nbsp; What You'll Discover &nbsp; ✦
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--deep-brown)",
                fontWeight: 500,
              }}
            >
              Ancient Wisdom. Modern Guidance.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(160deg, var(--parchment) 0%, var(--cream) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background number decoration */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "400px",
            fontFamily: "'Cormorant Garamond', serif",
            color: "var(--warm-tan)",
            opacity: 0.03,
            lineHeight: 1,
            userSelect: "none",
            zIndex: 0,
          }}
        >
          9
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ marginBottom: "0.8rem" }}>
              ✦ &nbsp; Testimonials &nbsp; ✦
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--deep-brown)",
                fontWeight: 500,
              }}
            >
              Lives Transformed by Numbers
            </h2>
            <p style={{ color: "var(--text-light)", marginTop: "0.8rem", fontSize: "0.9rem" }}>
              Real stories from people whose lives changed after embracing numerology.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "var(--parchment)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.5rem", color: "var(--warm-tan)", opacity: 0.4, fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: "1rem" }}>"</div>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--deep-brown)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            You cannot change your future. But you can change your habits. And 
            surely your habits will change your future.
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ height: "1px", width: "40px", background: "var(--warm-tan)", opacity: 0.4 }} />
            <span style={{ fontSize: "0.8rem", color: "var(--text-light)", letterSpacing: "0.1em" }}>A.P.J. Abdul Kalam</span>
            <div style={{ height: "1px", width: "40px", background: "var(--warm-tan)", opacity: 0.4 }} />
          </div>
        </div>
      </section>

      {/* ── RECENT BLOGS ── */}
      {recentBlogs.length > 0 && (
        <section
          style={{
            padding: "6rem 2rem",
            background: "var(--cream)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <div className="section-tag" style={{ marginBottom: "0.5rem" }}>
                  ✦ &nbsp; Latest Wisdom &nbsp; ✦
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "var(--deep-brown)",
                    fontWeight: 500,
                  }}
                >
                  From the Blog
                </h2>
              </div>
              <Link
                href="/blogs"
                style={{
                  color: "var(--terracotta)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  borderBottom: "1px solid var(--terracotta)",
                  paddingBottom: "2px",
                }}
              >
                View All Posts →
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {recentBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card-hover"
                    style={{
                      background: "var(--parchment)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(212, 184, 150, 0.3)",
                    }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${blog.color || "var(--warm-tan)"} 0%, var(--parchment) 100%)`,
                        height: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "3rem",
                      }}
                    >
                      {blog.emoji || "🔢"}
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <div className="section-tag" style={{ marginBottom: "0.5rem" }}>
                        {blog.category}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.2rem",
                          color: "var(--deep-brown)",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                        }}
                      >
                        {blog.title}
                      </h3>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-light)", lineHeight: 1.7 }}>
                        {blog.excerpt}
                      </p>
                      <div
                        style={{
                          marginTop: "1rem",
                          fontSize: "0.72rem",
                          color: "var(--text-light)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {blog.date}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "var(--deep-brown)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(201, 169, 110, 0.07) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(196, 114, 74, 0.07) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ color: "var(--warm-tan)", marginBottom: "1.5rem" }}>
            ✦ &nbsp; Start Your Journey &nbsp; ✦
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--cream)",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            Ready to unlock the power of your numbers?
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(245, 240, 232, 0.6)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Subscribe to Astro Gyan Prakash on YouTube and get weekly numerology 
            predictions, life path guidance, and spiritual wisdom delivered to you.
          </p>
          <a
            href="https://www.youtube.com/@AstroGyanPrakash"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--terracotta)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.88rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
              boxShadow: "0 12px 32px rgba(196, 114, 74, 0.4)",
            }}
          >
            ▶ &nbsp;Subscribe Now — It's Free
          </a>
        </div>
      </section>
    </div>
  );
}