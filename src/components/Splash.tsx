import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Splash() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("pc-splash-seen")) {
      setGone(true);
      return;
    }
    setMounted(true);
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), 2400);
    const t2 = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("pc-splash-seen", "1");
      document.body.style.overflow = "";
    }, 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone || !mounted) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[999] flex items-center justify-center bg-background transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.06)" : "none",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_45%,oklch(0.32_0.1_20/60%),transparent_65%)]" />

      <svg
        className="absolute h-[340px] w-[340px] -rotate-90 sm:h-[440px] sm:w-[440px]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="var(--gold)"
          strokeWidth="0.4"
          strokeDasharray="320"
          style={{ animation: "ring-draw 2.4s cubic-bezier(0.4,0,0.2,1) both" }}
        />
      </svg>

      <div className="relative flex flex-col items-center">
        <img
          src={logo}
          alt="Prasanna Caterers"
          width={816}
          height={816}
          className="animate-rise h-40 w-40 object-contain sm:h-56 sm:w-56"
          style={{ filter: "drop-shadow(0 12px 40px oklch(0.82 0.13 84 / 35%))" }}
        />
        <p
          className="animate-rise eyebrow mt-4"
          style={{ animationDelay: "600ms" }}
        >
          Est. 1998 &middot; Bengaluru
        </p>
        <h1
          className="animate-rise shimmer mt-3 text-center text-4xl font-light tracking-[0.12em] sm:text-6xl"
          style={{ animationDelay: "800ms" }}
        >
          PRASANNA
        </h1>
        <p
          className="animate-rise mt-2 text-[0.7rem] tracking-[0.5em] text-muted-foreground"
          style={{ animationDelay: "1000ms" }}
        >
          CATERERS
        </p>
        <div
          className="animate-rise hairline mt-8 w-52"
          style={{ animationDelay: "1300ms" }}
        />
        <p
          className="animate-rise mt-4 text-xs tracking-[0.3em] text-muted-foreground"
          style={{ animationDelay: "1500ms" }}
        >
          SETTING THE TABLE FOR YOUR CELEBRATIONS
        </p>
      </div>
    </div>
  );
}
