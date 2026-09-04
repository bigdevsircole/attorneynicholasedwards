import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Section {
  heading: string;
  body: string | string[];
}

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: Section[];
}

export default function LegalPageLayout({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-800 pb-24 pt-28">
        {/* Hero banner */}
        <div className="relative overflow-hidden bg-ink-900 py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(184,145,47,0.12),transparent)]"
          />
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-parchment/50 transition-colors hover:text-gold-light"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
            <p className="text-xs uppercase tracking-[0.18em] text-gold-light">
              Legal
            </p>
            <h1 className="mt-2 font-display text-3xl font-medium text-parchment sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-parchment/40">
              Effective date: {effectiveDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-3xl px-6 lg:px-10">
          {/* Rule */}
          <div className="rule mb-10 text-line-dark" />

          {/* Intro paragraph */}
          <p className="text-base leading-8 text-parchment/70">{intro}</p>

          {/* Sections */}
          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <section key={i} aria-labelledby={`section-${i}`}>
                <h2
                  id={`section-${i}`}
                  className="mb-3 font-display text-lg font-medium text-gold-light"
                >
                  {i + 1}. {section.heading}
                </h2>
                {Array.isArray(section.body) ? (
                  <ul className="space-y-2 pl-4">
                    {section.body.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-7 text-parchment/65"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-8 text-parchment/65">
                    {section.body}
                  </p>
                )}
                <div className="mt-8 rule text-line-dark" />
              </section>
            ))}
          </div>

          {/* Contact callout */}
          <div className="mt-12 border border-line-dark bg-ink-900/60 px-7 py-7">
            <p className="text-sm leading-7 text-parchment/60">
              Questions about this document? Contact us at{" "}
              <a
                href="mailto:info@attorneynicholasedwards.com"
                className="text-gold-light underline-offset-4 hover:underline"
              >
                info@attorneynicholasedwards.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+13195041058"
                className="text-gold-light underline-offset-4 hover:underline"
              >
                +1 (319) 504-1058
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
