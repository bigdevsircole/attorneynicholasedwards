"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink-800/90 backdrop-blur-md border-b border-line-dark"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Attorney Nicholas Edwards"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-lg tracking-tight text-parchment">
            Attorney Nicholas Edwards
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] uppercase tracking-[0.14em] text-parchment/75 transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[13px] uppercase tracking-[0.12em] text-gold-light transition-colors hover:bg-gold hover:text-ink-800"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2} />
            {site.phone}
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-parchment lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line-dark bg-ink-800 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm uppercase tracking-[0.12em] text-parchment/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-sm uppercase tracking-[0.12em] text-gold-light"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
