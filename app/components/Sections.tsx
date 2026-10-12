import Image from "next/image";
import Reveal from "./Reveal";

// NOTE: all copy, figures and travel times in this file are placeholders —
// replace with approved project details before going live.

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-label text-xs tracking-[0.35em] ${
        light ? "text-gold-light" : "text-gold-deep"
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

function Icon({ d, className = "size-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

/* ───────── About Us ───────── */

const values = [
  { title: "Thoughtful Design", text: "Every home planned around light, air and the view." },
  { title: "Lasting Quality", text: "Materials and finishes chosen to age gracefully." },
  { title: "Trust & Transparency", text: "Clear commitments, honoured at every step." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white pb-20 sm:pb-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(53,21,0,0.65)]">
            <Image
              src="/images/elevation-dusk.jpg"
              alt="Vaishno Sky at dusk"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[35%_center] transition duration-[1500ms] hover:scale-105"
            />
          </div>
          <div className="group absolute -bottom-10 -right-2 w-32 sm:-right-8 sm:w-40">
            <div className="capsule aspect-[5/8] bg-white p-1.5">
              <div className="relative size-full overflow-hidden rounded-full">
                <Image
                  src="/images/balcony.jpg"
                  alt="Skyline view from a residence"
                  fill
                  sizes="160px"
                  className="object-cover object-[75%_center]"
                />
              </div>
            </div>
          </div>
          <div className="animate-float-slow absolute -left-3 top-8 rounded-2xl bg-brown px-5 py-4 text-center shadow-xl sm:-left-8">
            <p className="font-numeral text-4xl font-bold leading-none text-gold-light">GO</p>
            <p className="mt-1 font-label text-[9px] tracking-[0.3em] text-gold">GRAND</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>ABOUT US</Eyebrow>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] text-brown sm:text-5xl">
            Building homes that <span className="text-gold-gradient">stand tall</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            Vaishno Sky is conceived as a landmark for Malad (East) — a single,
            striking tower where considered architecture meets everyday comfort.
            Our promise is simple: a grander way of living, delivered with care.
          </p>
          <div className="mt-9 space-y-5">
            {values.map((v, i) => (
              <div key={v.title} className="group flex items-start gap-5">
                <span className="font-numeral text-3xl font-bold leading-none text-gold/50 transition-colors duration-500 group-hover:text-gold-deep">
                  0{i + 1}
                </span>
                <div className="border-l border-gold/40 pl-5">
                  <p className="text-sm font-bold text-brown">{v.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Highlights ───────── */

const highlightCards = [
  {
    title: "Landmark High-Rise",
    text: "A slender tower that redefines the Malad (East) skyline.",
    icon: "M9 21V4l6-1v18M4 21h16M12 8h.01M12 12h.01M12 16h.01",
  },
  {
    title: "Retail High Street",
    text: "Curated shopping and dining at the podium, steps from home.",
    icon: "M4 9l1-5h14l1 5M4 9v11h16V9M4 9h16M9 20v-6h6v6",
  },
  {
    title: "Vertical Greens",
    text: "Landscaped planters woven through the façade and podium.",
    icon: "M12 21v-9m0 0c0-4 3-7 8-7 0 5-3 8-8 7Zm0 3c0-3-2-5-7-5 0 4 3 6 7 5Z",
  },
  {
    title: "Rooftop Leisure",
    text: "Sky-level spaces to unwind with the city at your feet.",
    icon: "M3 18h18M5 18a7 7 0 0 1 14 0M12 4v3M4.5 8.5l2 2M19.5 8.5l-2 2",
  },
  {
    title: "Grand Arrival",
    text: "A double-height lobby that sets the tone the moment you enter.",
    icon: "M4 21V8l8-5 8 5v13M9 21v-7h6v7M4 21h16",
  },
  {
    title: "Safe & Secure",
    text: "Multi-tier security with round-the-clock surveillance.",
    icon: "M12 3l8 3v6c0 4.5-3.200 8-8 9-4.800-1-8-4.500-8-9V6l8-3Zm-3 9l2 2 4-4",
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="scroll-mt-24 border-t border-gold/25">
      <div className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-center text-center">
            <Eyebrow>PROJECT HIGHLIGHTS</Eyebrow>
            <h2 className="mt-3 font-display text-4xl leading-[1.1] text-brown sm:text-5xl">
              Six reasons to <span className="text-gold-gradient">Go Grand</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlightCards.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) * 120}>
                <article className="group relative h-full overflow-hidden rounded-[26px] border border-gold/25 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgba(53,21,0,0.45)]">
                  <span className="absolute -right-2 -top-4 font-numeral text-8xl font-bold text-cream transition-colors duration-500 group-hover:text-gold/25">
                    0{i + 1}
                  </span>
                  <span className="relative grid size-14 place-items-center rounded-full border border-gold/50 text-gold-deep transition duration-500 group-hover:bg-brown group-hover:text-gold-light">
                    <Icon d={h.icon} className="size-6" />
                  </span>
                  <h3 className="relative mt-6 font-display text-2xl text-brown">{h.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-relaxed text-muted">{h.text}</p>
                  <span className="relative mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Configuration cards (used inside the dark section) ───────── */

const configurations = [
  {
    type: "2 BHK",
    name: "Sky Residence",
    area: "Carpet area on request",
    points: ["2 bedrooms · 2 baths", "Living + dining with deck", "Ideal for young families"],
  },
  {
    type: "3 BHK",
    name: "Grand Residence",
    area: "Carpet area on request",
    points: ["3 bedrooms · 3 baths", "Expansive living with deck", "Corner homes with dual views"],
    featured: true,
  },
  {
    type: "Retail",
    name: "High-Street Spaces",
    area: "Sizes on request",
    points: ["Podium-level frontage", "High visibility location", "Flexible unit sizes"],
  },
];

export function ConfigurationCards() {
  return (
    <div className="container-x relative grid gap-5 pb-16 md:grid-cols-3 lg:pb-20">
      {configurations.map((c, i) => (
        <Reveal key={c.type} delay={i * 120}>
          <article
            className={`group flex h-full flex-col rounded-[26px] border p-7 transition duration-500 hover:-translate-y-2 ${
              c.featured
                ? "border-gold bg-gradient-to-b from-gold/25 to-gold/5"
                : "border-gold/30 bg-white/[0.04] hover:border-gold"
            }`}
          >
            <div className="flex items-start justify-between">
              <p className="font-numeral text-6xl font-bold leading-none text-gold-light">{c.type}</p>
              {c.featured && (
                <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brown">
                  Popular
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-2xl text-cream">{c.name}</h3>
            <p className="mt-1 text-xs text-gold">{c.area}</p>
            <ul className="mt-5 flex-1 space-y-2.5 border-t border-gold/25 pt-5">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13px] text-cream/80">
                  <span className="size-1.5 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#enquire"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-light transition-all group-hover:gap-4"
            >
              Get Price &amp; Plan <span aria-hidden>→</span>
            </a>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ───────── Connectivity ───────── */

const places = [
  {
    group: "Transit",
    icon: "M6 17V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v11M6 17h12M6 17l-2 4M18 17l2 4M6 11h12M9 14h.01M15 14h.01",
    items: [
      { name: "Western Express Highway", time: "5 min" },
      { name: "Metro Line 7", time: "7 min" },
      { name: "Malad Railway Station", time: "12 min" },
    ],
  },
  {
    group: "Lifestyle",
    icon: "M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2",
    items: [
      { name: "Oberoi Mall", time: "10 min" },
      { name: "Infiniti Mall, Malad", time: "15 min" },
      { name: "Sanjay Gandhi National Park", time: "20 min" },
    ],
  },
  {
    group: "Essentials",
    icon: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Zm0-14v6m-3-3h6",
    items: [
      { name: "Schools & Colleges", time: "5 min" },
      { name: "Multi-speciality Hospitals", time: "10 min" },
      { name: "Mumbai International Airport", time: "30 min" },
    ],
  },
];

export function Connectivity() {
  return (
    <section id="connectivity" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>CONNECTIVITY</Eyebrow>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] text-brown sm:text-5xl">
            The city, <span className="text-gold-gradient">minutes away</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Malad (East) keeps you close to everything that matters — highways,
            metro, schools, malls and green escapes.
          </p>

          <div className="mt-9 space-y-7">
            {places.map((g) => (
              <div key={g.group} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-cream/60 text-gold-deep">
                  <Icon d={g.icon} />
                </span>
                <div className="flex-1">
                  <p className="font-label text-[11px] tracking-[0.3em] text-gold-deep">
                    {g.group.toUpperCase()}
                  </p>
                  <ul className="mt-2">
                    {g.items.map((p) => (
                      <li
                        key={p.name}
                        className="group flex items-baseline gap-3 border-b border-gold/20 py-2.5 text-sm text-brown"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {p.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-gold/50" />
                        <span className="font-numeral text-xl font-bold tracking-wide text-gold-deep">
                          {p.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative min-w-0">
          <div className="relative overflow-hidden rounded-[32px] border border-gold/40 shadow-[0_40px_80px_-40px_rgba(53,21,0,0.55)]">
            <iframe
              title="Vaishno Sky location — Malad (East), Mumbai"
              src="https://www.google.com/maps?q=Malad+East,+Mumbai&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full sepia-[0.35] sm:h-[520px]"
            />
          </div>
          <div className="animate-float-slow absolute -bottom-6 left-6 flex items-center gap-3 rounded-full bg-brown py-2.5 pl-3 pr-6 shadow-xl">
            <span className="relative grid size-10 place-items-center rounded-full bg-gold text-brown">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
              <Icon d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Zm0-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" className="relative size-5" />
            </span>
            <span>
              <span className="block font-label text-[10px] tracking-[0.25em] text-gold">VAISHNO SKY</span>
              <span className="block text-sm font-semibold text-cream">Malad (East), Mumbai</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
