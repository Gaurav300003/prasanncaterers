import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Prasanna Caterers Events & Feasts" },
      {
        name: "description",
        content:
          "Photographs from Prasanna Caterers events — wedding banquets, live counters, banana leaf feasts, dessert tables and corporate dining in Bengaluru.",
      },
      { property: "og:title", content: "Gallery | Prasanna Caterers" },
      {
        property: "og:description",
        content:
          "Wedding banquets, live counters, banana leaf feasts and dessert tables from recent events.",
      },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: hero, alt: "Grand banana leaf banquet spread with brass vessels", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "Outdoor wedding reception dining setup at dusk", span: "" },
  { src: g2, alt: "Indian sweets on brass trays", span: "" },
  { src: g3, alt: "Live chaat counter with chef serving", span: "md:col-span-2" },
  { src: g6, alt: "Birthday celebration dessert and canapé table", span: "" },
  { src: g5, alt: "Guests served a traditional banana leaf meal", span: "" },
  { src: g4, alt: "Corporate event buffet with chafing dishes", span: "md:col-span-2" },
  { src: about, alt: "Chef plating a dish in the catering kitchen", span: "" },
];

function Gallery() {
  const [active, setActive] = useState<null | { src: string; alt: string }>(null);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Gallery"
        subtitle="Tables we have set, counters we have run, and plates that came back empty."
        image={g1}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={(i % 4) * 90} className={`${s.span} h-full`}>
              <button
                onClick={() => setActive(s)}
                className="group h-full w-full overflow-hidden rounded-lg"
                aria-label={`View ${s.alt}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 p-6 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-gold"
            aria-label="Close image"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="animate-rise max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
