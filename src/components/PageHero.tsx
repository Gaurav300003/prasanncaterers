import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[58vh] min-h-[380px] items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/78" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_60%,transparent,oklch(0.16_0.02_30)_78%)]" />
      <div className="relative px-5 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-5xl font-light tracking-[0.04em] sm:text-7xl">
            <span className="text-gold-gradient">{title}</span>
          </h1>
          <div className="hairline mx-auto mt-6 w-40" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
