"use client";

import Image from "next/image";
import { useState } from "react";

const views = [
  {
    src: "/images/elevation-day.jpg",
    label: "Day View",
    caption: "A slender silhouette of warm terracotta and stone against the Mumbai sky.",
  },
  {
    src: "/images/elevation-dusk.jpg",
    label: "Dusk View",
    caption: "As evening rolls in, the façade lights up into a glowing city beacon.",
  },
  {
    src: "/images/elevation-street.jpg",
    label: "Street View",
    caption: "A landscaped podium and high-street retail welcome you home.",
  },
  {
    src: "/images/elevation-clouds.jpg",
    label: "Aerial View",
    caption: "On misty mornings, the upper residences float above the clouds.",
  },
  {
    src: "/images/elevation-boulevard.jpg",
    label: "Boulevard View",
    caption: "A new landmark rising over a green, tree-lined avenue.",
  },
];

export default function ElevationGallery() {
  const [index, setIndex] = useState(0);
  const view = views[index];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      {/* Main stage */}
      <div className="relative min-w-0">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(53,21,0,0.65)] sm:aspect-square">
          {views.map((v, i) => (
            <Image
              key={v.src}
              src={v.src}
              alt={`Vaishno Sky elevation — ${v.label}`}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className={`object-cover transition-all duration-[1200ms] ease-out ${
                i === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white">
            <div key={index} className="animate-fade-up">
              <p className="font-label text-[11px] tracking-[0.3em] text-gold-light">
                ELEVATION · {String(index + 1).padStart(2, "0")} / {String(views.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-3xl">{view.label}</p>
            </div>
            <div className="flex gap-2">
              {[-1, 1].map((step) => (
                <button
                  key={step}
                  type="button"
                  aria-label={step < 0 ? "Previous view" : "Next view"}
                  onClick={() => setIndex((i) => (i + step + views.length) % views.length)}
                  className="grid size-11 place-items-center rounded-full border border-white/60 bg-white/15 pb-0.5 text-xl backdrop-blur transition hover:bg-gold hover:text-brown"
                >
                  {step < 0 ? "‹" : "›"}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Rotating gold seal */}
        <div className="absolute -right-4 -top-6 hidden size-28 place-items-center rounded-full bg-plum shadow-xl sm:grid">
          <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full">
            <defs>
              <path id="seal" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
            </defs>
            <text className="fill-gold-light font-label text-[9px] tracking-[0.32em]">
              <textPath href="#seal">VAISHNO SKY · MALAD (E) · GO GRAND ·</textPath>
            </text>
          </svg>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={400}
            height={374}
            className="w-11"
          />
        </div>
      </div>

      {/* Copy + capsule thumbnails */}
      <div className="min-w-0">
        <p className="font-label text-xs tracking-[0.35em] text-gold-deep">OVERVIEW</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.1] text-brown sm:text-5xl">
          An icon on the <span className="text-gold-gradient">Malad skyline</span>
        </h2>
        <p key={index} className="animate-fade-up mt-5 min-h-[3.5rem] max-w-md text-[15px] leading-relaxed text-muted">
          {view.caption}
        </p>

        <div className="no-scrollbar -mx-2 mt-8 flex gap-5 overflow-x-auto px-2 py-4">
          {views.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className="group shrink-0 text-center"
            >
              <span
                className={`capsule block h-28 w-[4.5rem] transition-transform duration-500 ${
                  i === index ? "-translate-y-2" : "opacity-70 hover:opacity-100"
                }`}
              >
                <span className="relative block size-full overflow-hidden rounded-full">
                  <Image src={v.src} alt="" fill sizes="80px" className="object-cover" />
                </span>
              </span>
              <span
                className={`mt-4 block text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  i === index ? "text-gold-deep" : "text-muted"
                }`}
              >
                {v.label.replace(" View", "")}
              </span>
            </button>
          ))}
        </div>

        <a href="#enquire" className="btn btn-dark mt-6">
          Book a Site Visit <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
