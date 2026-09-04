"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-800">
      <Image
        src="/hero-justice.png"
        alt="Bronze statue of Lady Justice in a legal library"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-800 via-ink-800/85 to-ink-800/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-ink-800/40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-content px-6 pt-24 lg:px-10"
      >
        <motion.p
          variants={item}
          className="mb-6 text-[13px] uppercase tracking-[0.2em] text-gold-light"
        >
          {site.tagline}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-2xl font-display text-5xl font-medium leading-[1.08] text-parchment sm:text-6xl lg:text-7xl"
        >
          Experienced &amp; trusted legal representation
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-md text-lg leading-relaxed text-parchment/70"
        >
          Dedicated to protecting your rights and your interests, from the
          first consultation through the final verdict.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="group flex items-center gap-2.5 bg-gold px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-800 transition-colors hover:bg-gold-light"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={site.phoneHref}
            className="text-[13px] uppercase tracking-[0.12em] text-parchment/80 underline decoration-gold/50 underline-offset-8 transition-colors hover:text-gold-light"
          >
            {site.phone}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-parchment/50 lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
