"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Quality Ingredients",
    desc: "Real tea leaves, fresh fruit, and house-made pearls — no shortcuts.",
  },
  {
    title: "Freshly Made Drinks",
    desc: "Every order is shaken, blended, or brewed to order, just for you.",
  },
  {
    title: "Friendly Service",
    desc: "A warm welcome and a smile, whether it's your first visit or your fiftieth.",
  },
  {
    title: "Unique Flavors",
    desc: "Classic favorites alongside creative seasonal specials you won't find elsewhere.",
  },
];

export default function About() {
  return (
    <section className="bg-cream py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
              A neighborhood favorite, made one cup at a time
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/70">
              Bubble Tea Magic is Euless&rsquo; destination for refreshing
              drinks and desserts that bring people together. From our
              signature milk teas to our fresh-pressed juices and bubble
              waffles, every item is crafted with quality ingredients and a
              whole lot of care. We&rsquo;re proud to be a part of the
              community — stop by and taste why your neighbors keep coming
              back.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-espresso">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
