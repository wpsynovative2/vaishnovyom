"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";

const perks = [
  {
    title: "Priority Access",
    text: "First pick of floors and views before the public launch.",
    icon: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z",
  },
  {
    title: "Launch Offers",
    text: "Pre-launch pricing reserved for registered guests.",
    icon: "M4 12V5h7l9 9-7 7-9-9Zm4.5-3.5h.01",
  },
  {
    title: "Private Walkthrough",
    text: "A one-on-one tour of the tower, at a time that suits you.",
    icon: "M5 6h14v14H5V6Zm0 4h14M9 3v4m6-4v4",
  },
];

const residences = ["2 BHK", "3 BHK", "Not sure yet"];

const labelClass = "block font-label text-[10px] tracking-[0.22em] text-muted";
const inputClass =
  "mt-2 w-full rounded-2xl border border-gold/30 bg-cream/40 px-4 py-3 text-sm font-semibold text-brown transition placeholder:font-medium placeholder:text-brown/35 focus:border-gold focus:bg-white focus:outline-none focus:ring-4 focus:ring-gold/20";

// Opens for every `#enquire` link on the page, so CTAs stay plain anchors
// (and still jump to the inline enquiry bar when JavaScript is unavailable).
export default function EnquiryModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href="#enquire"]');
      if (!link) return;
      e.preventDefault();
      if (!dialog.open) {
        dialog.showModal();
        document.documentElement.style.overflow = "hidden";
      }
    };
    const onClose = () => {
      document.documentElement.style.overflow = "";
      setSent(false);
    };

    document.addEventListener("click", onClick);
    dialog.addEventListener("close", onClose);
    return () => {
      document.removeEventListener("click", onClick);
      dialog.removeEventListener("close", onClose);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const close = () => dialogRef.current?.close();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the enquiry to your CRM / email service. Nothing is submitted yet.
    setSent(true);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-transparent backdrop:bg-plum/75 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex min-h-full items-center justify-center p-3 sm:p-6"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="animate-fade-up relative grid w-full max-w-[940px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-gold/40 [animation-duration:0.6s] md:grid-cols-[0.82fr_1fr] sm:rounded-[36px]">
          <button
            type="button"
            onClick={close}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-gold/40 bg-white/90 text-brown transition duration-300 hover:rotate-90 hover:bg-gold"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          {/* ───────── Brand panel ───────── */}
          <aside className="relative hidden flex-col overflow-hidden bg-plum text-cream md:flex">
            <Image
              src="/images/elevation-reveal.jpg"
              alt=""
              fill
              sizes="420px"
              className="animate-kenburns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-plum/80 via-plum/85 to-brown/95" />
            <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-gold/25 blur-[90px]" />

            <div className="relative flex flex-1 flex-col p-9">
              <Image
                src="/images/logo-badge.png"
                alt="Vaishno Sky, Malad (E)"
                width={600}
                height={847}
                sizes="80px"
                className="h-auto w-16 drop-shadow-2xl"
              />
              <p className="mt-8 font-label text-[11px] tracking-[0.3em] text-gold-light">
                CODENAME · GO GRAND
              </p>
              <p className="mt-3 font-display text-[2rem] leading-[1.12] text-white">
                Your sky-high address <span className="text-gold-gradient">awaits</span>
              </p>

              <ul className="mt-9 space-y-6">
                {perks.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-white/5">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-[18px] fill-none stroke-gold-light"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d={p.icon} />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{p.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-cream/70">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-10 font-label text-[10px] tracking-[0.3em] text-gold/80">
                VAISHNO SKY · MALAD (E), MUMBAI
              </p>
            </div>
            <div className="brand-border relative" />
          </aside>

          {/* ───────── Form panel ───────── */}
          <div className="relative p-6 pt-8 sm:p-9">
            {sent ? (
              <div className="animate-fade-up flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <span className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-gold-deep via-gold-light to-gold text-3xl text-brown shadow-[0_18px_40px_-12px_rgba(205,164,84,0.9)]">
                  ✓
                </span>
                <h2 id="enquiry-modal-title" className="mt-7 font-display text-3xl text-brown">
                  Thank you — your enquiry is <span className="text-gold-gradient">noted.</span>
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Our team will reach out to schedule your private preview.
                </p>
                <button type="button" onClick={close} className="btn btn-dark mt-9">
                  Continue Exploring <span aria-hidden>→</span>
                </button>
              </div>
            ) : (
              <>
                <p className="flex items-center gap-3 font-label text-[11px] tracking-[0.3em] text-gold-deep">
                  <span className="h-px w-8 bg-gold" />
                  ENQUIRE NOW
                </p>
                <h2
                  id="enquiry-modal-title"
                  className="mt-3 pr-10 font-display text-3xl leading-[1.12] text-brown sm:text-4xl"
                >
                  Let&rsquo;s <span className="text-gold-gradient">Go Grand</span> together
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Share a few details and our team will arrange your private preview.
                </p>

                <form onSubmit={onSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className={labelClass}>FULL NAME *</span>
                    <input name="name" required autoComplete="name" placeholder="Full name" className={inputClass} />
                  </label>
                  <label>
                    <span className={labelClass}>MOBILE NUMBER *</span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+ ]{10,14}"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </label>
                  <label>
                    <span className={labelClass}>EMAIL ADDRESS</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </label>
                  <label>
                    <span className={labelClass}>PREFERRED SITE VISIT</span>
                    <input name="date" type="date" className={inputClass} />
                  </label>

                  <fieldset className="sm:col-span-2">
                    <legend className={labelClass}>INTERESTED IN</legend>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {residences.map((r, i) => (
                        <label key={r} className="cursor-pointer">
                          <input
                            type="radio"
                            name="residence"
                            value={r}
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />
                          <span className="block rounded-full border border-gold/40 px-5 py-2.5 text-xs font-semibold text-brown transition hover:border-gold peer-checked:border-brown peer-checked:bg-brown peer-checked:text-gold-light peer-focus-visible:ring-4 peer-focus-visible:ring-gold/30">
                            {r}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="sm:col-span-2">
                    <span className={labelClass}>MESSAGE (OPTIONAL)</span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us what you're looking for…"
                      className={`${inputClass} resize-none`}
                    />
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 text-[11px] leading-relaxed text-muted sm:col-span-2">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      defaultChecked
                      className="mt-0.5 size-4 shrink-0 accent-gold-deep"
                    />
                    I agree to be contacted by the Vaishno Sky team via phone, WhatsApp, SMS or email.
                  </label>

                  <button type="submit" className="btn btn-gold w-full py-4 sm:col-span-2">
                    Send Enquiry <span aria-hidden>→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
