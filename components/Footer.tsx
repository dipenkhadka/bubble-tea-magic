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
    <footer className="bg-espresso-deep py-12 text-cream/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white p-1">
                <Image
                  src="/images/logo.jpeg"
                  alt="Bubble Tea Magic logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-display text-xl font-bold text-cream">
                Bubble Tea Magic
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm">{business.address}</p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-caramel-light">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring rounded hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-caramel-light">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bubble Tea Magic on Instagram"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-caramel hover:text-espresso"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bubble Tea Magic on Facebook"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-caramel hover:text-espresso"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.4C15.7 5.3 14.7 5.2 13.6 5.2c-2.4 0-4 1.4-4 4v2H7v2.8h2.6V21h3.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Bubble Tea Magic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
