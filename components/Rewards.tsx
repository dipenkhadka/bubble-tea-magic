"use client";

import { motion } from "framer-motion";
import { Gift, Star, Cake, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Earn Points on Every Purchase", desc: "Every cup brings you closer to your next reward." },
  { icon: Star, title: "Exclusive Member Offers", desc: "Get first access to seasonal drops and specials." },
  { icon: Cake, title: "Birthday Rewards", desc: "A free treat on us, every year." },
  { icon: Gift, title: "Free Drinks & Discounts", desc: "Redeem points for free drinks and exclusive savings." },
];

export default function Rewards() {
  return (
    <section id="rewards" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel">
              Loyalty Program
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
              Earn Rewards with Every Sip
            </h2>
            <p className="mt-5 max-w-md text-lg text-espresso/70">
              The more you sip, the more you save. Join our rewards program
              and start earning toward free drinks and member-only perks
              today.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-espresso">{f.title}</p>
                    <p className="mt-1 text-sm text-espresso/60">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rewards progress graphic */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-espresso/10 bg-white/70 p-8 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold text-espresso">
                Your Progress
              </p>
              <span className="font-mono text-sm font-semibold text-caramel">
                350 / 500 pts
              </span>
            </div>

            <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-espresso/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-caramel to-caramel-light"
              />
            </div>

            <p className="mt-3 text-sm text-espresso/60">
              150 points until your next free drink!
            </p>

            <div className="mt-6 grid grid-cols-5 gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-xl text-2xl ${
                    i < 3
                      ? "bg-caramel/20 text-caramel"
                      : "bg-espresso/5 text-espresso/20"
                  }`}
                >
                  🧋
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
