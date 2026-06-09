import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, var(--parchment) 0%, var(--cream) 100%)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "20%", left: "6%", fontSize: "1rem", color: "var(--gold)", opacity: 0.4 }} className="twinkle">✦</div>
        <div style={{ position: "absolute", bottom: "20%", right: "8%", fontSize: "1.3rem", color: "var(--gold)", opacity: 0.3 }} className="twinkle-2">✦</div>

        <div className="section-tag" style={{ marginBottom: "1rem" }}>
          ✦ &nbsp; Wisdom & Knowledge &nbsp; ✦
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--deep-brown)",
            fontWeight: 500,
            marginBottom: "1rem",
          }}
        >
          The Numerology Blog
        </h1>
        <p
          style={{
            color: "var(--text-light)",
            fontSize: "0.95rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Deep dives into numerology, astrology, and spiritual guidance. 
          Expand your understanding of the ancient science of numbers.
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 6rem" }}>
        {blogs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔮</div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                color: "var(--deep-brown)",
                marginBottom: "0.5rem",
              }}
            >
              Coming Soon
            </h3>
            <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
              New articles on numerology and spiritual guidance are being prepared.
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            <div style={{ marginBottom: "3rem" }}>
              <div className="section-tag" style={{ marginBottom: "1rem" }}>
                ✦ &nbsp; Featured Post
              </div>
              <Link href={`/blogs/${blogs[0].slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="card-hover featured-blog"
                  style={{
                    background: "var(--parchment)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(212, 184, 150, 0.3)",
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                  }}
                >
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${blogs[0].color || "var(--warm-tan)"} 0%, var(--parchment) 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "5rem",
                      minHeight: "240px",
                    }}
                  >
                    {blogs[0].emoji || "🔢"}
                  </div>
                  <div style={{ padding: "2.5rem" }}>
                    <div className="section-tag" style={{ marginBottom: "0.6rem" }}>
                      {blogs[0].category}
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.8rem",
                        color: "var(--deep-brown)",
                        fontWeight: 600,
                        marginBottom: "1rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {blogs[0].title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-light)",
                        lineHeight: 1.8,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {blogs[0].excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--terracotta)",
                          fontWeight: 600,
                        }}
                      >
                        Read Article →
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>
                        {blogs[0].date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Rest of blogs */}
            {blogs.length > 1 && (
              <>
                <div className="section-tag" style={{ marginBottom: "1.5rem" }}>
                  ✦ &nbsp; All Articles
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {blogs.slice(1).map((blog) => (
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
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            background: `linear-gradient(135deg, ${blog.color || "var(--warm-tan)"} 0%, var(--parchment) 100%)`,
                            height: "140px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "3.5rem",
                          }}
                        >
                          {blog.emoji || "🔢"}
                        </div>
                        <div
                          style={{
                            padding: "1.5rem",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div className="section-tag" style={{ marginBottom: "0.5rem" }}>
                            {blog.category}
                          </div>
                          <h3
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.2rem",
                              color: "var(--deep-brown)",
                              fontWeight: 600,
                              marginBottom: "0.6rem",
                              lineHeight: 1.4,
                              flexGrow: 1,
                            }}
                          >
                            {blog.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--text-light)",
                              lineHeight: 1.7,
                              marginBottom: "1rem",
                            }}
                          >
                            {blog.excerpt}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.75rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--terracotta)",
                                fontWeight: 600,
                              }}
                            >
                              Read →
                            </span>
                            <span style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>
                              {blog.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .featured-blog { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}