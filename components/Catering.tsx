"use client";

import { motion } from "framer-motion";
import { Building2, PartyPopper, GraduationCap, Users } from "lucide-react";

const events = [
  { icon: Building2, label: "Corporate Events" },
  { icon: PartyPopper, label: "Birthday Parties" },
  { icon: GraduationCap, label: "School Events" },
  { icon: Users, label: "Community Gatherings" },
  { icon: PartyPopper, label: "Private Celebrations" },
];

export default function Catering() {
  return (
    <section id="catering" className="bg-latte/10 py-20 sm:py-28 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel">
              Catering
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
              Bubble Tea Catering for Any Event
            </h2>
            <p className="mt-5 max-w-md text-lg text-espresso/70">
              Bring the Bubble Tea Magic experience to your next gathering.
              We cater drinks and desserts for groups of all sizes across the
              DFW area.
            </p>
            <a
              href="#location"
              className="focus-ring mt-8 inline-flex rounded-full bg-espresso px-8 py-4 text-base font-bold text-cream shadow-lg transition-transform hover:scale-105 hover:bg-espresso-deep"
            >
              Request Catering Information
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {events.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`flex flex-col items-start gap-3 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-espresso/5 ${
                  i === events.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                  <e.icon className="h-6 w-6" />
                </div>
                <p className="font-display text-lg font-bold text-espresso">
                  {e.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
