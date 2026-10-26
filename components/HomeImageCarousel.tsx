"use client";

import { useEffect, useState } from "react";
import type { HomeSideImage } from "@/data/home";

type HomeImageCarouselProps = {
  images: HomeSideImage[];
  intervalMs?: number;
};

export default function HomeImageCarousel({
  images,
  intervalMs = 5000,
}: HomeImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  const active = images[activeIndex];

  return (
    <div className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-[3/4] shadow-xl bg-slate-900">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.url}
            src={image.url}
            alt={image.caption ?? ""}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {active.caption && (
          <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-sm text-slate-200 bg-gradient-to-t from-slate-950/90 to-transparent">
            {active.caption}
          </p>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-slate-300"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
