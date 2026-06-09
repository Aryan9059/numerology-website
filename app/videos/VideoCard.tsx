"use client";

import type { Video } from "./page";

export function VideoCard({ video }: { video: Video }) {
  const date = new Date(video.published).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
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
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
          />
          {/* Play overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(61, 35, 20, 0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(61, 35, 20, 0.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(61, 35, 20, 0)")}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "rgba(196, 114, 74, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
            >
              ▶
            </div>
          </div>
        </div>
        <div style={{ padding: "1.2rem 1.4rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              color: "var(--deep-brown)",
              fontWeight: 600,
              lineHeight: 1.4,
              marginBottom: "0.6rem",
              flexGrow: 1,
            }}
          >
            {video.title}
          </h3>
          <div
            style={{
              fontSize: "0.72rem",
              color: "var(--text-light)",
              letterSpacing: "0.05em",
            }}
          >
            {date}
          </div>
        </div>
      </div>
    </a>
  );
}
