import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.6rem",
            color: "var(--deep-brown)",
            fontWeight: 600,
            marginTop: "2.5rem",
            marginBottom: "1rem",
            borderBottom: "1px solid rgba(212, 184, 150, 0.3)",
            paddingBottom: "0.5rem",
          }}
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem",
            color: "var(--medium-brown)",
            fontWeight: 600,
            marginTop: "1.8rem",
            marginBottom: "0.6rem",
          }}
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      // Collect consecutive list items
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      i--; // backtrack since the outer loop will increment
      elements.push(
        <ul
          key={key++}
          style={{
            margin: "1rem 0",
            paddingLeft: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {items.map((item, idx) => {
            // Bold text between **
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li
                key={idx}
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-medium)",
                  lineHeight: 1.7,
                  listStyleType: "none",
                  paddingLeft: "1rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--terracotta)",
                    fontSize: "0.7rem",
                    top: "5px",
                  }}
                >
                  ✦
                </span>
                {parts.map((part, pIdx) =>
                  pIdx % 2 === 1 ? (
                    <strong key={pIdx} style={{ color: "var(--deep-brown)", fontWeight: 600 }}>
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </li>
            );
          })}
        </ul>
      );
    } else {
      // Regular paragraph — handle **bold**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p
          key={key++}
          style={{
            fontSize: "0.95rem",
            color: "var(--text-medium)",
            lineHeight: 1.9,
            margin: "0.8rem 0",
          }}
        >
          {parts.map((part, idx) =>
            idx % 2 === 1 ? (
              <strong key={idx} style={{ color: "var(--deep-brown)", fontWeight: 600 }}>
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) notFound();

  const allBlogs = await getAllBlogs();
  const related = allBlogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Article header */}
      <div
        style={{
          background: `linear-gradient(160deg, ${blog.color || "var(--parchment)"} 0%, var(--cream) 100%)`,
          padding: "5rem 2rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>{blog.emoji || "🔢"}</div>
          <div className="section-tag" style={{ marginBottom: "1rem" }}>
            {blog.category}
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "var(--deep-brown)",
              fontWeight: 500,
              lineHeight: 1.3,
              marginBottom: "1.5rem",
            }}
          >
            {blog.title}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              fontSize: "0.78rem",
              color: "var(--text-light)",
              letterSpacing: "0.05em",
            }}
          >
            <span>By {blog.author || "Astro Gyan Prakash"}</span>
            <span>·</span>
            <span>{blog.date}</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Back link */}
        <Link
          href="/blogs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--terracotta)",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "2.5rem",
          }}
        >
          ← Back to Blogs
        </Link>

        {/* Content */}
        <article
          style={{
            background: "var(--parchment)",
            borderRadius: "20px",
            padding: "3rem",
            border: "1px solid rgba(212, 184, 150, 0.3)",
          }}
        >
          {renderContent(blog.content)}
        </article>

        {/* Share */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--deep-brown)",
            borderRadius: "16px",
            textAlign: "center",
            color: "var(--cream)",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
            }}
          >
            Enjoyed this article?
          </div>
          <p style={{ fontSize: "0.83rem", color: "rgba(245, 240, 232, 0.6)", marginBottom: "1.2rem" }}>
            Watch more numerology content on YouTube
          </p>
          <a
            href="https://www.youtube.com/@AstroGyanPrakash"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--terracotta)",
              color: "white",
              padding: "0.6rem 1.6rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ▶ &nbsp;Watch on YouTube
          </a>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div style={{ marginTop: "3rem" }}>
            <div className="section-tag" style={{ marginBottom: "1rem" }}>
              ✦ &nbsp; Related Articles
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="related-grid">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blogs/${rel.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="card-hover"
                    style={{
                      background: "var(--parchment)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid rgba(212, 184, 150, 0.3)",
                      display: "flex",
                      gap: "0",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${rel.color || "var(--warm-tan)"} 0%, var(--parchment) 100%)`,
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      {rel.emoji || "🔢"}
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <h4
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "0.95rem",
                          color: "var(--deep-brown)",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {rel.title}
                      </h4>
                      <span style={{ fontSize: "0.72rem", color: "var(--terracotta)", fontWeight: 600 }}>
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}