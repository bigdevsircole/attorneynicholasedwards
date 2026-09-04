import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink-900 py-14">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Attorney Nicholas Edwards"
            width={36}
            height={36}
            className="h-8 w-8 object-contain"
          />
          <div>
            <p className="font-display text-base text-parchment">
              {site.name}
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-gold-light/70">
              {site.tagline}
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.12em] text-parchment/50 transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-xs leading-relaxed text-parchment/40">
          <p>{site.address}</p>
          <p className="mt-1">{site.phone}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-content px-6 lg:px-10">
        <div className="rule text-line-dark" />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-relaxed text-parchment/35">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/privacy-policy"
                className="text-[11px] uppercase tracking-[0.12em] text-parchment/35 transition-colors hover:text-gold-light"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="text-[11px] uppercase tracking-[0.12em] text-parchment/35 transition-colors hover:text-gold-light"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
