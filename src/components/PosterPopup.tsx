"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PosterPopup() {
  const [open, setOpen] = useState(true);

  // Bug fix 4: Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  if (!open) return null;

  return (
    // Bug fix 5: Clicking the backdrop closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
      onClick={() => setOpen(false)}
    >
      {/* Modal — stop clicks from bubbling to backdrop */}
      <div
        className="relative overflow-hidden rounded-lg max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bug fix 4: aria-label for accessibility */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 
                     bg-black/70 text-white 
                     rounded-full w-8 h-8 
                     flex items-center justify-center
                     hover:bg-black/90 transition-colors"
        >
          ✕
        </button>

        {/* Bug fix 1 & 2: Use a sized container with fill, so Next.js
            Image respects max-w/max-h constraints correctly */}
        {/* Bug fix 3: priority so it loads eagerly (it's above the fold) */}
        <Image
          src="/poster.png"
          alt="Offer"
          priority
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain block"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}