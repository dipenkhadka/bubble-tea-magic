"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function HappyHour() {
  return (
    <section id="happy-hour" className="relative overflow-hidden bg-cream py-20 sm:py-28 scroll-mt-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-caramel via-caramel-light to-caramel px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20"
        >
          {/* Decorative pearls */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-espresso"
                style={{
                  width: `${20 + (i % 3) * 10}px`,
                  height: `${20 + (i % 3) * 10}px`,
                  left: `${(i * 9.7) % 100}%`,
                  top: `${(i * 13.3) % 100}%`,
                  animation: `pearl-bob ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-1.5 text-sm font-bold text-cream">
              <Clock className="h-4 w-4" />
              Daily Special
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-espresso sm:text-6xl">
              Happy Hour
              <br />
              Every Day — 20% Off
            </h2>
            <p className="mt-4 text-2xl font-bold text-espresso/80">
              12:00 PM &ndash; 3:00 PM
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base text-espresso/70">
              Enjoy special savings on your favorite drinks during our daily
              Happy Hour. Every day, no coupon needed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
