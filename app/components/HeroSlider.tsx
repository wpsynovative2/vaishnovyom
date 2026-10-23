"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/elevation-clouds.jpg",
    alt: "Vaishno Vyom tower rising above the clouds",
    title: "A Home Above the Clouds",
    note: "The Vaishno Vyom tower, Malad (East)",
    position: "object-center",
  },
  {
    src: "/images/balcony.jpg",
    alt: "Golden-hour skyline view from a Vaishno Vyom residence",
    title: "The Sky Deck View",
    note: "Golden-hour skyline, every evening",
    position: "object-[70%_center]",
  },
  {
    src: "/images/elevation-boulevard.jpg",
    alt: "Vaishno Vyom seen from the boulevard",
    title: "A New City Landmark",
    note: "Standing tall over a tree-lined avenue",
    position: "object-[62%_center]",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (step: number) =>
    setIndex((i) => (i + step + slides.length) % slides.length);

  return (
    <div
      className="relative h-full min-h-[460px] overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(53,21,0,0.6)] sm:min-h-[560px] lg:h-[min(78vh,760px)] lg:min-h-[460px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`animate-kenburns object-cover ${s.position}`}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/65 via-transparent to-brown/10" />

      {/* Prev / next */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 sm:right-5">
        {[
          { step: -1, label: "Previous image", glyph: "‹" },
          { step: 1, label: "Next image", glyph: "›" },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={() => go(b.step)}
            className="grid size-10 place-items-center rounded-full bg-white/90 pb-0.5 text-xl text-brown shadow-lg transition hover:scale-110 hover:bg-gold-light"
          >
            {b.glyph}
          </button>
        ))}
      </div>

      {/* Floating info card */}
      <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[310px]">
        <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-md">
          <p className="flex items-center gap-2 font-label text-[11px] tracking-[0.25em] text-gold-deep">
            <svg viewBox="0 0 24 24" className="size-4 fill-gold" aria-hidden>
              <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.800 7-13a7 7 0 0 0-7-7Zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5Z" />
            </svg>
            MALAD (E), MUMBAI
          </p>
          <p
            key={index}
            className="animate-fade-up mt-2 font-display text-2xl leading-tight text-brown"
          >
            {slides[index].title}
          </p>
          <p className="mt-1 text-[13px] text-muted">{slides[index].note}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-gold" : "w-3 bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <a
              href="#enquire"
              aria-label="Enquire about this residence"
              className="grid size-10 place-items-center rounded-full bg-brown text-lg text-gold-light transition hover:rotate-90"
            >
              +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
