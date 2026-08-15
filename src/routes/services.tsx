import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import g4 from "@/assets/g4.jpg";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g6 from "@/assets/g6.jpg";
import g5 from "@/assets/g5.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Catering Services | Weddings, Corporate & Live Counters" },
      {
        name: "description",
        content:
          "Wedding banquets, corporate dining, live counters, house functions and dessert stations — full-service catering by Prasanna Caterers, Bengaluru.",
      },
      { property: "og:title", content: "Catering Services | Prasanna Caterers" },
      {
        property: "og:description",
        content:
          "Wedding banquets, corporate dining, live counters and house functions across Bengaluru.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    img: g1,
    title: "Wedding Banquets",
    text: "Muhurtham lunches, reception dinners and mehendi brunches for 100 to 3,000 guests, with décor-matched service styling.",
    points: ["Banana leaf or buffet", "Menu tasting included", "Dedicated event captain"],
  },
  {
    img: g4,
    title: "Corporate Dining",
    text: "Conference lunches, product launches and office festivals with punctual service and packed-meal options.",
    points: ["Timed service slots", "Continental & Indian", "GST invoicing"],
  },
  {
    img: g3,
    title: "Live Counters",
    text: "Chaat, dosa, pasta, tandoor and mocktail bars where our chefs cook right in front of your guests.",
    points: ["12 counter themes", "Chef-led stations", "Custom signage"],
  },
  {
    img: g5,
    title: "House Functions",
    text: "Naming ceremonies, housewarmings and shraddha meals served traditionally with brass and banana leaf.",
    points: ["From 30 guests", "Traditional serving", "On-site cooking"],
  },
  {
    img: g6,
    title: "Celebration Catering",
    text: "Birthdays and anniversaries with grazing tables, tiered cakes and curated canapé menus.",
    points: ["Themed styling", "Dessert tables", "Late-night snacks"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services"
        subtitle="From a thirty-guest naming ceremony to a three-thousand-plate wedding — one team, cooked fresh on site."
        image={g4}
      />

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-24">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={60}>
            <article
              className={`surface-lux group grid overflow-hidden rounded-lg lg:grid-cols-2 ${
                i % 2 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-full min-h-[280px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </figure>
              <div className="p-10 lg:p-14">
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                  <span className="text-gold-gradient">{s.title}</span>
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="text-gold">◆</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal className="pt-8 text-center">
          <Link to="/contact" className="btn-gold">
            Enquire Now
          </Link>
        </Reveal>
      </section>
    </>
  );
}
