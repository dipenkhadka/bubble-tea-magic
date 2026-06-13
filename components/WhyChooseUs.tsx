"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Award,
  ChefHat,
  Smile,
  ListOrdered,
  MapPin,
  Heart,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const icons = [Leaf, Award, ChefHat, Smile, ListOrdered, MapPin, Heart];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel">
            Why Bubble Tea Magic
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
            Why Choose Bubble Tea Magic
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-espresso">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
