"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { practiceAreas } from "@/lib/content";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-parchment py-28 text-ink-800 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[13px] uppercase tracking-[0.2em] text-gold-dim">
              Practice areas
            </p>
            <h2 className="max-w-xl font-display text-4xl font-medium leading-tight sm:text-[2.75rem]">
              Five areas of practice, one standard of preparation.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-800/60">
            Select an area to read how we approach it — every case still gets
            a conversation with Nicholas directly before it goes further.
          </p>
        </div>

        <div className="border-t border-line-light">
          {practiceAreas.map((area, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={area.number} className="border-b border-line-light">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 py-7 text-left"
                >
                  <span className="font-display text-sm text-gold-dim">
                    {area.number}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl font-medium sm:text-3xl">
                      {area.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-800/55">
                      {area.summary}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-ink-800/20"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-11 pr-10 text-[15px] leading-relaxed text-ink-800/70 sm:pl-[3.75rem]">
                        {area.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
