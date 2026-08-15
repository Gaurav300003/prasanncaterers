import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Check, MapPin, Phone, Mail, Clock } from "lucide-react";
import about from "@/assets/about.jpg";
import g5 from "@/assets/g5.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prasann Caterers | 41 Years of Trusted Catering Excellence" },
      {
        name: "description",
        content:
          "Prasann Caterers by Bansi Maharaj Sweets - 41 years of trusted catering excellence in Ahilyanagar. Fresh ingredients, hygienic kitchen, experienced chefs, customized menus.",
      },
      { property: "og:title", content: "About Prasann Caterers | 41 Years of Excellence" },
      {
        property: "og:description",
        content:
          "Since 1985 | 41 Years of Trusted Catering Excellence. Fresh ingredients, hygienic kitchen, experienced chefs, affordable packages.",
      },
    ],
  }),
  component: About,
});

const whyChooseUs = [
  { icon: "fresh", title: "Fresh & Premium Ingredients", description: "Using only the freshest, premium quality ingredients for every dish" },
  { icon: "hygiene", title: "Hygienic Kitchen", description: "Maintaining the highest standards of hygiene in our kitchen and preparation" },
  { icon: "chefs", title: "Experienced Chefs", description: "Our team of experienced chefs brings decades of culinary expertise" },
  { icon: "menu", title: "Customized Menu", description: "Tailored menus to suit your specific event needs and preferences" },
  { icon: "service", title: "Timely Service", description: "Prompt and reliable service ensuring your event runs smoothly" },
  { icon: "affordable", title: "Affordable Packages", description: "Competitive pricing without compromising on quality or service" },
  { icon: "staff", title: "Professional Staff", description: "Trained, courteous staff dedicated to making your event memorable" },
  { icon: "quality", title: "Quality Assurance", description: "Rigorous quality checks at every stage of food preparation and service" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        subtitle="Since 1985 | 41 Years of Trusted Catering Excellence"
        image={about}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <img
              src={logo}
              alt="Prasann Caterers Logo"
              width={816}
              height={816}
              className="h-24 w-24 object-contain"
            />
            <div className="text-center">
              <h2 className="font-display text-4xl sm:text-5xl text-gold-gradient">PRASANN CATERERS</h2>
              <p className="mt-2 text-sm tracking-[0.42em] text-muted-foreground uppercase">by Bansi Maharaj Sweets</p>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            At Prasann Caterers by Bansi Maharaj Sweets, we have been creating memorable
            dining experiences for over 41 years. Whether it's an intimate family gathering, a
            grand wedding celebration, a corporate event, or a festive occasion, we are committed
            to serving exceptional food with warm hospitality.
          </p>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Using only fresh ingredients, maintaining the highest standards of hygiene and
            backed by our experienced chefs and dedicated team, we ensure that every meal is
            crafted with care and every event is truly unforgettable.
          </p>
          <p className="mt-6 font-display text-2xl text-gold-gradient">
            41 Years of Legacy. Countless Celebrations. One Trusted Name - Prasann Caterers.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">
              <span className="text-gold-gradient">Excellence in Every Detail</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="surface-lux h-full rounded-lg p-6 transition-transform duration-500 hover:-translate-y-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <h3 className="text-xl font-light text-gold-gradient">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="text-center">
          <p className="eyebrow">Contact & Location</p>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">
            Get in <span className="text-gold-gradient">Touch</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={100}>
            <div className="surface-lux h-full rounded-lg p-6 transition-transform duration-500 hover:-translate-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-light text-gold-gradient">Our Location</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Station Road, Savedi, Ahilyanagar, Maharashtra 414001
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="surface-lux h-full rounded-lg p-6 transition-transform duration-500 hover:-translate-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-light text-gold-gradient">Phone</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                +91 98220 54321<br />+91 241 2345678
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="surface-lux h-full rounded-lg p-6 transition-transform duration-500 hover:-translate-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-light text-gold-gradient">Email</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                contact@prasannacaterers.in
              </p>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="surface-lux h-full rounded-lg p-6 transition-transform duration-500 hover:-translate-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-light text-gold-gradient">Hours</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Mon–Sun, 8:00 AM – 9:00 PM
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 text-center">
          <Link to="/contact" className="btn-gold">
            Book Your Event
          </Link>
        </Reveal>
      </section>
    </>
  );
}
