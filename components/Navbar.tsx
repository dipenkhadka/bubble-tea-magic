"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#happy-hour", label: "Happy Hour" },
  { href: "#rewards", label: "Rewards" },
  { href: "#catering", label: "Catering" },
  { href: "#location", label: "Visit Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#b8d8b8]/95 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]"
          : "bg-[#b8d8b8]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 focus-ring rounded-lg">
          <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-36">
            <Image
              src="/images/logo.png"
              alt="Bubble Tea Magic logo"
              fill
              sizes="144px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-cream tracking-tight">
            Bubble Tea Magic
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded text-sm font-semibold text-cream/80 transition-colors hover:text-caramel"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.doorDashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-espresso px-5 py-2.5 text-sm font-bold text-cream shadow-sm transition-transform hover:scale-105 hover:bg-espresso-deep"
          >
            Order on DoorDash
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded-lg p-2 text-cream lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-cream/10 bg-espresso lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-3 py-3 text-base font-semibold text-cream hover:bg-caramel/20"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={business.doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 rounded-full bg-espresso px-5 py-3 text-center text-base font-bold text-cream"
              >
                Order on DoorDash
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
