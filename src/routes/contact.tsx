import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import g5 from "@/assets/g5.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Prasanna Caterers | Book Your Event in Bengaluru" },
      {
        name: "description",
        content:
          "Call +91 98450 22110 or send your event date and guest count — Prasanna Caterers replies with a custom menu and tasting invite within 24 hours.",
      },
      { property: "og:title", content: "Contact Prasanna Caterers" },
      {
        property: "og:description",
        content:
          "Share your date and guest count for a custom menu and tasting invite within 24 hours.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-md border border-input bg-card/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title="Contact Us"
        subtitle="Tell us the date, the place and how many plates — we'll take it from there."
        image={g5}
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">Reach Us</p>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">
            We answer <span className="text-gold-gradient">every enquiry</span>
          </h2>

          <ul className="mt-10 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+91 98450 22110 · +91 80 2331 4477" },
              { icon: Mail, label: "Email", value: "hello@prasannacaterers.in" },
              {
                icon: MapPin,
                label: "Office",
                value: "14, Sampige Road, Malleshwaram, Bengaluru 560003",
              },
              { icon: Clock, label: "Hours", value: "Mon–Sun, 8:00 AM – 9:00 PM" },
            ].map((c) => (
              <li key={c.label} className="flex gap-4">
                <span className="surface-lux flex h-11 w-11 shrink-0 items-center justify-center rounded-md">
                  <c.icon size={18} className="text-gold" />
                </span>
                <span>
                  <span className="block text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-sm">{c.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="surface-lux rounded-lg p-8 sm:p-10">
            {sent ? (
              <div className="animate-rise flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold">
                  <Check className="text-gold" size={30} />
                </span>
                <h3 className="mt-6 text-3xl font-light text-gold-gradient">Thank you</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Your enquiry has reached our team. We'll call you within 24 hours
                  with a custom menu and a tasting invite.
                </p>
                <button className="btn-ghost-gold mt-8" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="text-2xl font-light">Request a quote</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input className={field} placeholder="Your name" required />
                  <input className={field} placeholder="Phone number" required />
                </div>
                <input className={field} type="email" placeholder="Email address" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <input className={field} type="date" required aria-label="Event date" />
                  <input className={field} type="number" min="20" placeholder="Guest count" required />
                </div>
                <select className={field} defaultValue="" required aria-label="Event type">
                  <option value="" disabled>
                    Type of event
                  </option>
                  {["Wedding", "Reception", "Corporate", "House function", "Birthday", "Other"].map(
                    (o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ),
                  )}
                </select>
                <textarea
                  className={`${field} min-h-32 resize-none`}
                  placeholder="Tell us about your celebration…"
                />
                <button type="submit" className="btn-gold w-full">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
