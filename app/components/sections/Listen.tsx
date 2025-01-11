import React from "react";

export default function Listen() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 h-40 md:h-full">
      <div className="w-full max-w-2xl">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/66ZFkT7x6SfS1Z7nivsuvy?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
