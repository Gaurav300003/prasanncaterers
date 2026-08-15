import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, UtensilsCrossed, Flame, Sparkles, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prasanna Caterers | Wedding & Event Catering in Bengaluru" },
      {
        name: "description",
        content:
          "Prasanna Caterers serves authentic South Indian and multi-cuisine feasts for weddings, corporate events and celebrations across Bengaluru since 1998.",
      },
      { property: "og:title", content: "Prasanna Caterers | Bengaluru Catering" },
      {
        property: "og:description",
        content:
          "Authentic South Indian and multi-cuisine catering for weddings, corporate events and celebrations in Bengaluru.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Flame,
    title: "Cooked On Site",
    text: "Every dish is prepared fresh at your venue by our own kitchen brigade — never reheated.",
  },
  {
    icon: UtensilsCrossed,
    title: "500+ Dish Repertoire",
    text: "Udupi classics, North Indian, Chettinad, Continental and live counters, all under one roof.",
  },
  {
    icon: Sparkles,
    title: "Styled Service",
    text: "Brass and banana leaf or contemporary plated fine dining — we set the mood as well as the menu.",
  },
  {
    icon: HeartHandshake,
    title: "Family Run Since 1998",
    text: "Three generations, 4,200 events, and one promise: your guests leave full and happy.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Traditional South Indian banquet spread served on banana leaf with brass vessels"
          width={1920}
          height={1088}
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/72" />
        <div className="absolute inset-0 [background:linear-gradient(to_bottom,oklch(0.16_0.02_30/70%),transparent_35%,oklch(0.16_0.02_30)_98%)]" />

        <div className="relative z-10 px-5 text-center">
          <p className="animate-rise eyebrow">Bengaluru &middot; Since 1998</p>
          <h1
            className="animate-rise mt-6 text-6xl leading-[0.95] font-light tracking-[0.02em] sm:text-8xl"
            style={{ animationDelay: "150ms" }}
          >
            <span className="text-gold-gradient">Prasanna</span>
            <span className="mt-2 block text-2xl tracking-[0.42em] text-foreground sm:text-3xl">
              CATERERS
            </span>
          </h1>
          <div
            className="animate-rise hairline mx-auto mt-8 w-56"
            style={{ animationDelay: "350ms" }}
          />
          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            style={{ animationDelay: "450ms" }}
          >
            Feasts cooked fresh at your venue. Weddings, receptions, corporate
            gatherings and house functions — served the way your family would.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <Link to="/contact" className="btn-gold">
              Request a Quote
            </Link>
            <Link to="/services" className="btn-ghost-gold">
              Our Menus
            </Link>
          </div>
        </div>

        <ChevronDown
          className="animate-float absolute bottom-8 z-10 text-gold"
          size={26}
        />
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-border bg-card/40 py-4">
        <div className="flex gap-12 whitespace-nowrap text-[0.68rem] tracking-[0.3em] text-muted-foreground uppercase">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-12">
              {[
                "Weddings",
                "Receptions",
                "Corporate Dining",
                "Naming Ceremonies",
                "Live Counters",
                "Festive Feasts",
                "Housewarmings",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-gold">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-5 py-28">
        <Reveal className="text-center">
          <p className="eyebrow">Why Prasanna</p>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">
            Hospitality, <span className="text-gold-gradient">measured in memories</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="surface-lux group h-full rounded-lg p-8 transition-transform duration-500 hover:-translate-y-2">
                <p.icon className="text-gold transition-transform duration-500 group-hover:scale-110" size={28} />
                <h3 className="mt-6 text-2xl font-light">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story split */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-28 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={about}
              alt="Chef plating an Indian dish in the Prasanna Caterers kitchen"
              loading="lazy"
              width={1200}
              height={912}
              className="rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-4 surface-lux rounded-lg px-8 py-6 text-center">
              <p className="font-display text-4xl text-gold-gradient">4,200+</p>
              <p className="mt-1 text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                Events Served
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="eyebrow">Our Kitchen</p>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">
            Recipes passed down,<br />
            <span className="text-gold-gradient">standards pushed forward</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            It began with a single vessel of bisi bele bath at a Malleshwaram
            wedding. Today our team of 90 travels across Karnataka with mobile
            kitchens, grinding masalas fresh each morning and cooking in front of
            your guests.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pure vegetarian by heritage, contemporary by craft — with FSSAI
            certified hygiene at every station.
          </p>
          <Link to="/about" className="btn-ghost-gold mt-8">
            Our Story
          </Link>
        </Reveal>
      </section>

      {/* Gallery teaser */}
      <section className="mx-auto max-w-7xl px-5 pb-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Glimpses</p>
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">From recent tables</h2>
          </div>
          <Link to="/gallery" className="btn-ghost-gold">
            View Gallery
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { src: g1, alt: "Outdoor wedding reception dining setup at dusk" },
            { src: g2, alt: "Assorted Indian sweets served on brass trays" },
            { src: g3, alt: "Live chaat counter with chef serving guests" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 120}>
              <div className="group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Dates fill fast</p>
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">
              Let's plan your <span className="text-gold-gradient">feast</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Share your date and guest count — we'll send a tasting invite and a
              custom menu within 24 hours.
            </p>
            <Link to="/contact" className="btn-gold mt-9">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
