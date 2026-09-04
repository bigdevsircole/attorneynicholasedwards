import CountUp from "./CountUp";
import { stats } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-ink-800 py-28 lg:py-36">
      <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-7">
          <p className="mb-5 text-[13px] uppercase tracking-[0.2em] text-gold-light">
            About the firm
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-parchment sm:text-[2.75rem]">
            Counsel that treats your case like it&apos;s the only one on the
            docket.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-parchment/70">
            <p>
              Nicholas Edwards founded this firm on a simple premise: clients
              deserve a lawyer who prepares every matter as though it will be
              argued in front of a jury, and who explains each decision in
              language they can actually use.
            </p>
            <p>
              That approach has carried the firm through personal injury
              claims, criminal defense, family law, and business disputes —
              always with the same standard of direct communication and
              disciplined preparation.
            </p>
          </div>
          <blockquote className="mt-10 border-l border-gold/50 pl-6 font-display text-xl italic text-parchment/90">
            &ldquo;A courtroom rewards preparation, not performance. My job is
            to have already won the argument before we ever step in front of
            a judge.&rdquo;
            <footer className="mt-3 font-body text-sm not-italic tracking-wide text-parchment/50">
              — Nicholas Edwards
            </footer>
          </blockquote>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <div className="rule mb-8 text-line-dark" />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl font-medium text-gold-light sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-2 text-sm leading-snug text-parchment/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="rule mt-2 text-line-dark" />
        </div>
      </div>
    </section>
  );
}
