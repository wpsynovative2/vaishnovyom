"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About Us" },
  { href: "#highlights", label: "Highlights" },
  { href: "#amenities", label: "Amenities" },
  { href: "#configuration", label: "Configuration" },
  { href: "#connectivity", label: "Connectivity" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the link for the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-gold/25 bg-white/85 shadow-[0_10px_40px_-18px_rgba(53,21,0,0.35)] backdrop-blur-md">
      <div className="container-wide flex items-center justify-between py-2.5 xl:grid xl:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="flex shrink-0 items-center gap-3 whitespace-nowrap xl:justify-self-start">
          <Image
            src="/images/logo-mark.png"
            alt="Vaishno Sky"
            width={400}
            height={374}
            className="h-10 w-auto sm:h-11"
            preload
          />
          <span className="font-label leading-none">
            <span className="block text-[15px] tracking-[0.2em] text-gold-deep">
              VAISHNO SKY
            </span>
            <span className="mt-1 block text-[10px] tracking-[0.34em] text-gold">
              MALAD (E)
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-[clamp(20px,2vw,40px)] xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold-deep 2xl:text-xs ${
                active === l.href ? "text-gold-deep" : "text-brown/80"
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-500 ${
                  active === l.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 xl:justify-self-end">
          <div className="hidden sm:block">
            <a href="#enquire" className="btn btn-dark py-3">
              Enquire Now
              <span aria-hidden>→</span>
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-gold/50 text-brown xl:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 xl:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="container-wide overflow-hidden">
          <nav className="mb-3 flex flex-col gap-1 rounded-3xl border border-gold/25 bg-white/95 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-medium text-brown hover:bg-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="btn btn-dark mt-3"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
