import { VideosPaginator } from "./VideosPaginator";

const CHANNEL_ID = "UCeLm0GOnAuMXQDcLoAbOdcA";
const API_KEY = process.env.YOUTUBE_API_KEY!;
const BASE = "https://www.googleapis.com/youtube/v3";

export interface Video {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  link: string;
  description: string;
}

/** Step 1 — get the channel's uploads playlist ID */
async function getUploadsPlaylistId(): Promise<string> {
  const url = `${BASE}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 86400 } }); // cache 24 h
  if (!res.ok) throw new Error(`Channels API error: ${res.status}`);
  const data = await res.json();
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? "";
}

/** Step 2 — paginate through ALL videos in the uploads playlist */
async function fetchVideos(): Promise<Video[]> {
  try {
    const playlistId = await getUploadsPlaylistId();
    if (!playlistId) return [];

    const videos: Video[] = [];
    let pageToken: string | undefined;

    do {
      const params = new URLSearchParams({
        part: "snippet",
        playlistId,
        maxResults: "50",
        key: API_KEY,
        ...(pageToken ? { pageToken } : {}),
      });

      const res = await fetch(`${BASE}/playlistItems?${params}`, {
        next: { revalidate: 3600 }, // revalidate every hour
      });

      if (!res.ok) throw new Error(`PlaylistItems API error: ${res.status}`);
      const data = await res.json();

      for (const item of data.items ?? []) {
        const snippet = item.snippet;
        const videoId: string = snippet?.resourceId?.videoId ?? "";
        if (!videoId) continue;

        // Skip deleted / private videos (title becomes "Deleted video" / "Private video")
        const title: string = snippet.title ?? "";
        if (title === "Deleted video" || title === "Private video") continue;

        videos.push({
          id: videoId,
          title,
          published: snippet.publishedAt ?? "",
          thumbnail:
            snippet.thumbnails?.medium?.url ??
            snippet.thumbnails?.default?.url ??
            `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
          link: `https://www.youtube.com/watch?v=${videoId}`,
          description: (snippet.description ?? "").slice(0, 140) + "...",
        });
      }

      pageToken = data.nextPageToken;
    } while (pageToken);

    return videos;
  } catch (err) {
    console.error("YouTube API fetch error:", err);
    return [];
  }
}


export default async function VideosPage() {
  const videos = await fetchVideos();
  const categories = [
    "All Videos",
    "Monthly Predictions",
    "Mulank Readings",
    "Mobile Numerology",
    "Karmic Numbers",
    "Life Path",
    "Business Numerology",
  ];

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Page Header */}
      <div
        style={{
          background: "linear-gradient(160deg, var(--parchment) 0%, var(--cream) 100%)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "15%", left: "5%", fontSize: "1rem", color: "var(--gold)", opacity: 0.4 }} className="twinkle">✦</div>
        <div style={{ position: "absolute", top: "30%", right: "8%", fontSize: "0.8rem", color: "var(--gold)", opacity: 0.3 }} className="twinkle-2">✦</div>

        <div className="section-tag" style={{ marginBottom: "1rem" }}>
          ✦ &nbsp; YouTube Channel &nbsp; ✦
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
          Watch &amp; Learn
        </h1>
        <p style={{ color: "var(--text-light)", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
          Explore hundreds of numerology videos — from monthly predictions to deep 
          dives into karmic numbers, mobile numerology, and life path wisdom.
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
            padding: "0.75rem 1.8rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          ▶ &nbsp;Subscribe on YouTube
        </a>
      </div>

      {/* Videos Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        <VideosPaginator videos={videos} />
      </div>
    </div>
  );
}