"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-parchment py-28 text-ink-800 lg:py-36">
      <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <p className="mb-5 text-[13px] uppercase tracking-[0.2em] text-gold-dim">
            Contact
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-[2.75rem]">
            Speak with the firm directly.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-800/65">
            Consultations are handled personally by Nicholas Edwards. Call,
            write, or send the details of your matter using the form and
            you&apos;ll hear back within one business day.
          </p>

          <div className="mt-10 space-y-6 border-t border-line-light pt-10">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 text-[15px] transition-colors hover:text-gold-dim"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-gold-dim" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 text-[15px] transition-colors hover:text-gold-dim"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-gold-dim" />
              {site.email}
            </a>
            <div className="flex items-start gap-4 text-[15px]">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dim" />
              <span className="max-w-[220px] leading-relaxed">
                {site.address}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-[380px] flex-col justify-center border border-line-light px-8 py-12">
              <p className="font-display text-2xl font-medium">
                Message received.
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-800/65">
                Thank you for reaching out. Nicholas or a member of the team
                will call you back within one business day — sooner for
                urgent matters.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-5 gap-y-6">
              <label className="col-span-2 flex flex-col gap-2 text-sm sm:col-span-1">
                Full name
                <input
                  required
                  type="text"
                  name="name"
                  className="border border-line-light bg-transparent px-4 py-3 text-[15px] outline-none transition-colors focus:border-gold-dim"
                />
              </label>
              <label className="col-span-2 flex flex-col gap-2 text-sm sm:col-span-1">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  className="border border-line-light bg-transparent px-4 py-3 text-[15px] outline-none transition-colors focus:border-gold-dim"
                />
              </label>
              <label className="col-span-2 flex flex-col gap-2 text-sm">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="border border-line-light bg-transparent px-4 py-3 text-[15px] outline-none transition-colors focus:border-gold-dim"
                />
              </label>
              <label className="col-span-2 flex flex-col gap-2 text-sm">
                What&apos;s your matter about?
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="resize-none border border-line-light bg-transparent px-4 py-3 text-[15px] outline-none transition-colors focus:border-gold-dim"
                />
              </label>
              <div className="col-span-2 mt-2 space-y-3">
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-ink-800 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-parchment transition-colors hover:bg-gold-dim hover:text-ink-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Request a consultation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
