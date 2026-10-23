import Image from "next/image";
import ElevationGallery from "./components/ElevationGallery";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryModal from "./components/EnquiryModal";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import { About, ConfigurationCards, Connectivity, Eyebrow, Highlights } from "./components/Sections";

// NOTE: figures and copy below are placeholders — replace with approved project details.
const highlights = [
  {
    title: "Sky-High Views",
    text: "Open skyline vistas from every residence.",
    icon: "M3 20h18M6 20V9l6-5 6 5v11M10 20v-5h4v5",
  },
  {
    title: "Curated Amenities",
    text: "A full floor of leisure and wellness.",
    icon: "M12 3l2.600 5.600 6.100.700-4.500 4.200 1.200 6L12 16.600 6.600 19.500l1.200-6L3.300 9.300l6.100-.700L12 3Z",
  },
  {
    title: "Prime Connectivity",
    text: "Minutes from the highway and metro.",
    icon: "M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Zm0-9a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5Z",
  },
];

const stats = [
  { value: "40+", label: "Storeys of Grandeur", image: "/images/elevation-street.jpg" },
  { value: "2 & 3", label: "BHK Sky Residences", image: "/images/residence-living.jpg" },
  { value: "25+", label: "Lifestyle Amenities", image: "/images/amenity-pool.jpg" },
];

const amenities = [
  { name: "Infinity Pool", tag: "Leisure", image: "/images/amenity-pool.jpg" },
  { name: "Fitness Studio", tag: "Wellness", image: "/images/amenity-gym.jpg" },
  { name: "Spa & Salon", tag: "Rejuvenate", image: "/images/amenity-spa.jpg" },
  { name: "Clubhouse", tag: "Social", image: "/images/amenity-clubhouse.jpg" },
  { name: "Garden Deck", tag: "Nature", image: "/images/amenity-garden.jpg" },
];

const residenceFeatures = [
  "Floor-to-ceiling windows with skyline views",
  "Sun-washed living rooms and private decks",
  "Imported marble flooring and premium fittings",
  "Vastu-friendly, thoughtfully planned layouts",
];

const marquee = ["Go Grand", "Vaishno Vyom", "Malad (E)", "Sky Residences", "Live Above"];

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-white">
      <div>
        <div className="relative">
          <Navbar />

          {/* ───────── Hero ───────── */}
          <section id="home" className="relative scroll-mt-28">
            <div className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-gold/15 blur-3xl" />

            <div className="container-wide relative grid gap-[clamp(32px,4vw,80px)] pb-10 pt-10 lg:grid-cols-[45fr_55fr] lg:pt-14">
            <div className="relative flex min-w-0 flex-col justify-center">
              <div className="animate-fade-up">
                <Eyebrow>CODENAME · GO GRAND</Eyebrow>
              </div>
              <h1
                className="animate-fade-up mt-5 font-display text-[clamp(48px,6vw,104px)] leading-[1.04] text-brown"
                style={{ animationDelay: "120ms" }}
              >
                Rise Above.
                <br />
                Live <span className="text-gold-gradient">Grand.</span>
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "240ms" }}
              >
                Sky-high residences in Malad (East), where golden sunsets, generous
                homes and curated luxuries come together — all in one address.
              </p>

              <div
                className="animate-fade-up mt-9 flex flex-wrap items-center gap-5"
                style={{ animationDelay: "360ms" }}
              >
                <a href="#overview" className="btn btn-dark">
                  Explore the Tower <span aria-hidden>→</span>
                </a>
                <a href="#amenities" className="group flex items-center gap-3 text-sm font-semibold text-brown">
                  <span className="relative grid size-12 place-items-center rounded-full border border-gold/60 transition group-hover:bg-gold group-hover:text-white">
                    <span className="absolute inset-0 animate-ping rounded-full border border-gold/50 [animation-duration:2.500s]" />
                    <svg viewBox="0 0 24 24" className="ml-0.5 size-4 fill-current text-gold-deep group-hover:text-brown" aria-hidden>
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </span>
                  View Amenities
                </a>
              </div>

              <div
                className="animate-fade-up mt-12 grid gap-6 sm:grid-cols-3"
                style={{ animationDelay: "480ms" }}
              >
                {highlights.map((h) => (
                  <div key={h.title} className="group flex gap-3 sm:block">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream transition duration-500 group-hover:-translate-y-1 group-hover:bg-gold/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 fill-none stroke-gold-deep"
                        strokeWidth="1.600"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d={h.icon} />
                      </svg>
                    </span>
                    <div className="sm:mt-3">
                      <p className="text-sm font-bold text-brown">{h.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up relative mt-8 min-w-0 lg:mt-0 lg:self-center" style={{ animationDelay: "200ms" }}>
              <HeroSlider />
              {/* Floating Go Grand lockup */}
              <div className="animate-float pointer-events-none absolute -left-3 -top-8 w-36 sm:-left-12 sm:-top-10 sm:w-52">
                <Image
                  src="/images/go-grand.png"
                  alt="Codename Go Grand"
                  width={1400}
                  height={1024}
                  sizes="210px"
                  className="animate-glow h-auto w-full"
                  preload
                />
              </div>
            </div>
            </div>
          </section>

          {/* ───────── Enquiry bar ───────── */}
          <section id="enquire" className="scroll-mt-28">
            <Reveal className="container-wide">
              <div className="rounded-[28px] border border-gold/25 bg-white p-5 shadow-[0_24px_60px_-30px_rgba(53,21,0,0.35)] sm:p-6 lg:rounded-full lg:py-4 lg:pl-6 lg:pr-4">
                <EnquiryForm />
              </div>
            </Reveal>
          </section>

          {/* ───────── Stats ───────── */}
          <section className="mt-6 bg-cream/70">
            <Reveal delay={100} className="container-wide">
              <div className="grid divide-y divide-gold/25 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-6">
                {stats.map((s) => (
                  <div key={s.label} className="group flex items-center justify-between gap-4 py-5 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
                    <div>
                      <p className="font-numeral text-5xl font-bold leading-none tracking-wide text-brown">
                        {s.value}
                      </p>
                      <p className="mt-1.5 text-xs font-medium text-muted">{s.label}</p>
                    </div>
                    <div className="relative h-16 w-24 overflow-hidden rounded-2xl shadow-md">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="100px"
                        className="object-cover transition duration-700 group-hover:scale-125"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* ───────── The Tower (elevations) ───────── */}
          <section id="overview" className="scroll-mt-24 py-20 sm:py-28">
            <Reveal className="container-wide">
              <ElevationGallery />
            </Reveal>
          </section>

          <About />
          <Highlights />

          {/* ───────── Marquee ───────── */}
          <div className="overflow-hidden border-y border-gold/25 bg-cream/60 py-4">
            <div className="animate-marquee flex w-max">
              {[0, 1].map((dup) => (
                <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
                  {[...marquee, ...marquee].map((word, i) => (
                    <span key={i} className="flex items-center font-numeral text-3xl tracking-[0.12em] text-gold/80 sm:text-4xl">
                      <span className="px-6 sm:px-9">{word}</span>
                      <span className="text-lg text-brown/40">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ───────── Amenities ───────── */}
          <section id="amenities" className="scroll-mt-24 py-20 sm:py-28">
            <div className="container-wide">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow>SIGNATURE AMENITIES</Eyebrow>
                  <h2 className="mt-3 font-display text-4xl leading-[1.1] text-brown sm:text-5xl">
                    Every indulgence, <span className="text-gold-gradient">elevated</span>
                  </h2>
                </div>
                <a href="#enquire" className="btn btn-ghost">
                  View All <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-12 px-3 py-8 lg:grid lg:grid-cols-5 lg:gap-9">
              {amenities.map((a, i) => (
                <Reveal key={a.name} delay={i * 110} className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.34rem)] lg:w-auto">
                  <article className={`group text-center ${i % 2 ? "lg:translate-y-10" : ""}`}>
                    <div className="capsule aspect-[5/8]">
                      <div className="relative size-full overflow-hidden rounded-full">
                        <Image
                          src={a.image}
                          alt={a.name}
                          fill
                          sizes="(min-width: 1024px) 18vw, 210px"
                          className="object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brown/75 via-brown/5 to-transparent" />
                        <span className="absolute inset-x-0 bottom-9 font-label text-[10px] tracking-[0.3em] text-gold-light">
                          {a.tag.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-7 font-display text-xl text-brown">{a.name}</h3>
                    <span className="mx-auto mt-2 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                  </article>
                </Reveal>
              ))}
            </div>
            </div>
          </section>

          {/* ───────── Configuration (dark) ───────── */}
          <section id="configuration" className="scroll-mt-24">
            <div className="relative overflow-hidden bg-brown text-cream">
              <div className="brand-border" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                <Image src="/images/pattern.png" alt="" fill sizes="100vw" className="object-cover" />
              </div>
              <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-gold/20 blur-[110px]" />

              <div className="container-wide relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
                <Reveal>
                  <Eyebrow light>CONFIGURATION</Eyebrow>
                  <h2 className="mt-3 font-display text-4xl leading-[1.1] sm:text-5xl">
                    Homes crafted for a <span className="text-gold-gradient">grander</span> life
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/70">
                    Spacious 2 &amp; 3 BHK sky residences, planned around light, air
                    and the view — with finishes as refined as the life you lead.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {residenceFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-cream/90">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-[11px] font-bold text-brown">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#enquire" className="btn btn-gold mt-10">
                    Request Floor Plans <span aria-hidden>→</span>
                  </a>
                </Reveal>

                <Reveal delay={150} className="relative mx-auto flex w-full max-w-md justify-center gap-8 py-6 sm:gap-10">
                  <div className="group w-1/2">
                    <div className="capsule aspect-[5/9]">
                      <div className="relative size-full overflow-hidden rounded-full">
                        <Image
                          src="/images/residence-living.jpg"
                          alt="Living room"
                          fill
                          sizes="240px"
                          className="object-cover transition duration-[1200ms] group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group mt-16 w-1/2">
                    <div className="capsule aspect-[5/9]">
                      <div className="relative size-full overflow-hidden rounded-full">
                        <Image
                          src="/images/residence-bath.jpg"
                          alt="Bathroom"
                          fill
                          sizes="240px"
                          className="object-cover transition duration-[1200ms] group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="animate-float-slow absolute -bottom-2 left-1/2 w-28 -translate-x-1/2 sm:w-32">
                    <Image
                      src="/images/vaishno-vyom-badge.png"
                      alt="Vaishno Vyom, Malad (E)"
                      width={600}
                      height={847}
                      sizes="130px"
                      className="h-auto w-full drop-shadow-2xl"
                    />
                  </div>
                </Reveal>
              </div>
              <ConfigurationCards />
              <div className="brand-border" />
            </div>
          </section>

          <Connectivity />

          {/* ───────── CTA banner ───────── */}
          <section id="contact" className="scroll-mt-24">
            <Reveal>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/elevation-reveal.jpg"
                  alt="The grand unveiling of the tower"
                  fill
                  sizes="100vw"
                  className="animate-kenburns object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-plum/95 via-plum/70 to-plum/20" />
                <div className="container-wide relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
                  <div className="max-w-xl">
                    <Eyebrow light>CONTACT US</Eyebrow>
                    <h2 className="mt-3 font-display text-4xl leading-[1.1] text-white sm:text-5xl">
                      Let&rsquo;s <span className="text-gold-gradient">Go Grand</span> together
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
                      Register your interest for priority access, launch offers and a
                      private walkthrough of Vaishno Vyom.
                    </p>
                  </div>
                  <a href="#enquire" className="btn btn-gold shrink-0">
                    Schedule a Site Visit <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ───────── Footer ───────── */}
            <footer className="container-wide flex flex-col items-center gap-6 pb-6 pt-14 text-center">
              <Image
                src="/images/vaishno-vyom-full.png"
                alt="Vaishno Vyom, Malad (E)"
                width={600}
                height={538}
                sizes="140px"
                className="h-auto w-32"
              />
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[13px] font-medium text-brown/80">
                <a href="#overview" className="hover:text-gold-deep">Overview</a>
                <a href="#about" className="hover:text-gold-deep">About Us</a>
                <a href="#highlights" className="hover:text-gold-deep">Highlights</a>
                <a href="#amenities" className="hover:text-gold-deep">Amenities</a>
                <a href="#configuration" className="hover:text-gold-deep">Configuration</a>
                <a href="#connectivity" className="hover:text-gold-deep">Connectivity</a>
                <a href="#contact" className="hover:text-gold-deep">Contact Us</a>
              </nav>
              <div className="brand-border w-full max-w-md opacity-80" />
              <p className="max-w-2xl text-[11px] leading-relaxed text-muted">
                Images are artist&rsquo;s impressions and stock photographs for
                representational purposes only. Specifications and amenities are
                indicative and subject to change.
              </p>
              <p className="font-label text-[11px] tracking-[0.25em] text-gold-deep">
                © VAISHNO VYOM · MALAD (E), MUMBAI
              </p>
            </footer>
          </section>
        </div>
      </div>

      <EnquiryModal />
    </div>
  );
}
