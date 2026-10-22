import { useState } from "react";
import "./LiteYouTube.css";

// Shows the video's thumbnail with a play button and only loads YouTube's
// player (about 1 MB) when the visitor clicks. Accepts a normal embed URL.
export default function LiteYouTube({ src, title, className = "", iframeProps = {} }) {
  const [playing, setPlaying] = useState(false);
  const match = /(?:embed\/|youtu\.be\/|v=)([\w-]{11})/.exec(src || "");
  const id = match ? match[1] : null;

  if (!id) return null;

  if (playing) {
    const url = new URL(`https://www.youtube.com/embed/${id}`);
    url.searchParams.set("autoplay", "1");
    return (
      <iframe
        src={url.toString()}
        title={title}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        {...iframeProps}
      />
    );
  }

  return (
    <button
      type="button"
      className={`lite-yt ${className}`}
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      <span className="lite-yt-play" aria-hidden="true" />
    </button>
  );
}
