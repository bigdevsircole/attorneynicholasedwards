"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      setAnimDir(dir);
      setVisible(false);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setVisible(true);
      }, 300);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      next();
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="bg-ink-900 py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-[13px] uppercase tracking-[0.2em] text-gold-light">
              Client testimonials
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-parchment sm:text-[2.75rem]">
              Heard from those we&apos;ve served.
            </h2>
          </div>
          {/* Arrow controls */}
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              id="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-parchment/50 transition-colors hover:border-gold/60 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowLeft />
            </button>
            <button
              id="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-parchment/50 transition-colors hover:border-gold/60 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Slide area */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative overflow-hidden"
        >
          {/* Gold accent bar */}
          <div className="mb-10 h-px w-16 bg-gold" />

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : animDir === "next"
                  ? "translateY(12px)"
                  : "translateY(-12px)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
          >
            <blockquote className="max-w-3xl font-display text-2xl font-medium italic leading-snug text-parchment sm:text-[1.85rem] sm:leading-tight lg:text-[2.1rem]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
                {t.name}
              </p>
              <p className="mt-1 text-sm text-parchment/45">{t.context}</p>
            </footer>
          </div>
        </div>

        {/* Dot indicators */}
        <div
          className="mt-12 flex items-center gap-2"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              className={[
                "h-[3px] rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold",
                i === current
                  ? "w-8 bg-gold"
                  : "w-4 bg-parchment/20 hover:bg-parchment/40",
              ].join(" ")}
            />
          ))}

          {/* Mobile arrows */}
          <div className="ml-auto flex gap-3 sm:hidden">
            <button
              id="testimonial-prev-mobile"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-parchment/50 transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              <ArrowLeft />
            </button>
            <button
              id="testimonial-next-mobile"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-parchment/50 transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
