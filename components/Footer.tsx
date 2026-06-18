import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#happy-hour", label: "Happy Hour" },
  { href: "#rewards", label: "Rewards" },
  { href: "#catering", label: "Catering" },
  { href: "#location", label: "Visit Us" },
];

export default function Footer() {
  return (
    <footer className="relative py-8 text-cream/70 overflow-hidden">
      <Image
        src="/images/boba-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-espresso-deep/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 shrink-0 rounded-xl bg-white p-1">
              <Image
                src="/images/logo.png"
                alt="Bubble Tea Magic logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-cream">Bubble Tea Magic</p>
              <p className="text-xs text-cream/60 mt-0.5">{business.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="focus-ring rounded hover:text-cream transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-caramel hover:text-espresso"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-caramel hover:text-espresso"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.4C15.7 5.3 14.7 5.2 13.6 5.2c-2.4 0-4 1.4-4 4v2H7v2.8h2.6V21h3.9z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bubble.tea.magic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-caramel hover:text-espresso"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-cream/10 pt-4 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Bubble Tea Magic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
