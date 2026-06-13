"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  menuCategories,
  freshJuices,
  milkTeaFlavors,
  fruitTeaFlavors,
  slushyFlavors,
  iceBlendFlavors,
  smoothieFlavors,
  coffeeMenu,
  bubbleWaffles,
  momoAndRamen,
  chocolateDipped,
  specialtyDrinks,
  toppings,
  sizesPricing,
  business,
} from "@/lib/data";

function FlavorPills({ flavors }: { flavors: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2.5">
      {flavors.map((flavor) => (
        <span
          key={flavor}
          className="rounded-full bg-caramel/15 px-4 py-1.5 text-sm font-semibold text-caramel-light ring-1 ring-caramel/20"
        >
          {flavor}
        </span>
      ))}
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-espresso py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel-light">
            The Menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Something delicious for every craving
          </h2>
        </motion.div>

        {/* Category cards overview */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 transition-colors hover:bg-cream/10 hover:ring-caramel/40"
            >
              <div className="text-4xl">{cat.emoji}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-cream">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Milk Tea */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            🧋 Milk Tea Flavors
          </h3>
          <p className="mt-2 text-sm text-cream/50">
            Medium {sizesPricing.milkTea.medium} &middot; Large {sizesPricing.milkTea.large} &mdash; choose any flavor below
          </p>
          <FlavorPills flavors={milkTeaFlavors} />
        </motion.div>

        {/* Fruit Tea */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            🥭 Fruit Tea Flavors
          </h3>
          <p className="mt-2 text-sm text-cream/50">
            Medium {sizesPricing.fruitTea.medium} &middot; Large {sizesPricing.fruitTea.large}
          </p>
          <FlavorPills flavors={fruitTeaFlavors} />
        </motion.div>

        {/* Slushy + Shaved Ice */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              🍹 Slushy
            </h3>
            <p className="mt-2 text-sm text-cream/50">
              Medium {sizesPricing.slushy.medium} &middot; Large {sizesPricing.slushy.large}
            </p>
            <FlavorPills flavors={slushyFlavors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              🍧 Shaved Ice
            </h3>
            <p className="mt-2 text-sm text-cream/50">$4.99 — Popping or Jelly extra $0.99</p>
            <FlavorPills flavors={["Pina Colada", "Tiger's Blood", "Raspberry", "Strawberry", "Grape", "Mango"]} />
          </motion.div>
        </div>

        {/* Ice Blend + Smoothie */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              🍦 Ice Blend
            </h3>
            <p className="mt-2 text-sm text-cream/50">
              Medium {sizesPricing.iceBlend.medium} &middot; Large {sizesPricing.iceBlend.large}
            </p>
            <FlavorPills flavors={iceBlendFlavors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              🥤 Smoothie
            </h3>
            <p className="mt-2 text-sm text-cream/50">
              Medium {sizesPricing.smoothie.medium} &middot; Large {sizesPricing.smoothie.large} — Popping or Jelly extra $0.99
            </p>
            <FlavorPills flavors={smoothieFlavors} />
          </motion.div>
        </div>

        {/* Coffee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            ☕ Coffee &amp; Vietnamese Coffee
          </h3>
          <div className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {coffeeMenu.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-3 py-1.5 border-b border-cream/10">
                <p className="text-sm text-cream/80">{item.name}</p>
                <span className="shrink-0 font-mono text-sm text-caramel-light">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fresh Juices */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl bg-caramel/10 p-6 ring-1 ring-caramel/20 sm:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-caramel-light sm:text-3xl">
            🥤 Fresh Juices
          </h3>
          <p className="mt-2 text-sm text-cream/60">
            Cold-pressed daily — never from concentrate.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freshJuices.map((juice) => (
              <div
                key={juice.name}
                className="flex items-center justify-between gap-3 rounded-xl bg-cream/5 px-4 py-3 ring-1 ring-cream/10"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥤</span>
                  <p className="font-semibold text-cream">{juice.name}</p>
                </div>
                <span className="font-mono text-sm text-caramel-light">
                  {juice.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bubble Waffles + Momo/Ramen */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-cream/5 ring-1 ring-cream/10 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/images/waffle.png"
                alt="Bubble Waffle Ice Cream"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                  🧇 Bubble Waffles
                </h3>
                <p className="text-sm text-caramel-light font-semibold">Crispy. Creamy. Dreamy.</p>
              </div>
            </div>
            <div className="p-6 sm:p-10">
              <div className="space-y-4">
                {bubbleWaffles.map((w) => (
                  <div key={w.name} className="flex items-start justify-between gap-4 border-b border-cream/10 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-cream">{w.name}</p>
                      <p className="mt-1 text-xs text-cream/50">{w.desc}</p>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-caramel-light">
                      {w.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              🥟 Himalayan Momo &amp; 🍜 Ramen
            </h3>
            <div className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {[...momoAndRamen.momo, ...momoAndRamen.ramen].map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3 py-1.5">
                  <p className="text-sm text-cream/80">{item.name}</p>
                  <span className="shrink-0 font-mono text-sm text-caramel-light">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chocolate Dipped + Specialty + Toppings */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10"
          >
            <h3 className="font-display text-xl font-bold text-cream">
              🍓 Chocolate Dipped
            </h3>
            <div className="mt-4 space-y-3">
              {chocolateDipped.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-3">
                  <p className="text-sm text-cream/80">{c.name}</p>
                  <span className="shrink-0 font-mono text-xs text-caramel-light">{c.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10"
          >
            <h3 className="font-display text-xl font-bold text-cream">
              🥭 Specialty
            </h3>
            <div className="mt-4 space-y-3">
              {specialtyDrinks.map((s) => (
                <div key={s.name} className="flex items-center justify-between gap-3">
                  <p className="text-sm text-cream/80">{s.name}</p>
                  <span className="shrink-0 font-mono text-xs text-caramel-light">{s.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="rounded-3xl bg-cream/5 p-6 ring-1 ring-cream/10"
          >
            <h3 className="font-display text-xl font-bold text-cream">
              ✨ Toppings — {toppings.price}
            </h3>
            <p className="mt-4 text-sm text-cream/70">{toppings.poppings}</p>
            <p className="mt-2 text-sm text-cream/70">{toppings.jelly}</p>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={business.doorDashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-caramel px-8 py-4 text-base font-bold text-espresso shadow-lg transition-transform hover:scale-105"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}