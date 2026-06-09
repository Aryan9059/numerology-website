"use client";

import { useState, useEffect } from "react";
import { VideoCard } from "./VideoCard";
import type { Video } from "./page";

const PER_PAGE = 15;

export function VideosPaginator({ videos }: { videos: Video[] }) {
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(true);

  const totalPages = Math.ceil(videos.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const pageVideos = videos.slice(start, start + PER_PAGE);

  // Build page number array with ellipsis logic
  function getPageNumbers(): (number | "…")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "…")[] = [1];
    if (page > 3) pages.push("…");
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("…");
    pages.push(totalPages);
    return pages;
  }

  function goTo(next: number) {
    if (next === page || next < 1 || next > totalPages) return;
    setVisible(false);
    setTimeout(() => {
      setPage(next);
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }

  if (videos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔮</div>
        <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
          Unable to load videos at this time. Please visit the{" "}
          <a
            href="https://www.youtube.com/@AstroGyanPrakash"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--terracotta)" }}
          >
            YouTube channel
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Count */}
      <p style={{
        fontSize: "0.78rem",
        color: "var(--text-light)",
        letterSpacing: "0.06em",
        marginBottom: "1.5rem",
        textTransform: "uppercase",
      }}>
        Showing {start + 1}–{Math.min(start + PER_PAGE, videos.length)} of {videos.length} videos
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {pageVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.4rem",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}>
          {/* Prev */}
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            style={navBtnStyle(page === 1)}
            aria-label="Previous page"
          >
            ← Prev
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((num, i) =>
            num === "…" ? (
              <span key={`ellipsis-${i}`} style={{ color: "var(--text-light)", padding: "0 0.25rem" }}>…</span>
            ) : (
              <button
                key={num}
                onClick={() => goTo(num)}
                style={pageBtnStyle(num === page)}
                aria-label={`Go to page ${num}`}
                aria-current={num === page ? "page" : undefined}
              >
                {num}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            style={navBtnStyle(page === totalPages)}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

function pageBtnStyle(active: boolean): React.CSSProperties {
  return {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: active ? "1px solid var(--terracotta)" : "1px solid rgba(212, 184, 150, 0.5)",
    background: active ? "var(--terracotta)" : "transparent",
    color: active ? "white" : "var(--text-medium)",
    fontSize: "0.82rem",
    fontFamily: "'Jost', sans-serif",
    fontWeight: active ? 600 : 400,
    cursor: active ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
  };
}

function navBtnStyle(disabled: boolean): React.CSSProperties {
  return {
    padding: "0.45rem 1rem",
    borderRadius: "50px",
    border: "1px solid rgba(212, 184, 150, 0.5)",
    background: "transparent",
    color: disabled ? "var(--text-light)" : "var(--text-medium)",
    fontSize: "0.78rem",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 500,
    letterSpacing: "0.04em",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "all 0.2s ease",
  };
}
