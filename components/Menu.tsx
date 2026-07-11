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
          className="rounded-full bg-caramel/15 px-4 py-1.5 text-sm font-semibold text-espresso ring-1 ring-caramel/20"
        >
          {flavor}
        </span>
      ))}
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-10 sm:py-14 scroll-mt-32" style={{backgroundColor: "#F0E6D8"}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-espresso">
            The Menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
            Something delicious for every craving
          </h2>
        </motion.div>

        {/* Featured boba image */}
        <div className="mt-10 overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/boba shot.jpg"
            alt="Signature boba milk tea"
            width={1200}
            height={500}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center"
          />
        </div>

        {/* Category cards overview */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-espresso/10 transition-colors hover:bg-white/80 hover:ring-caramel/40"
            >
              {cat.title === "Milk Tea" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src="/images/milk tea.png"
                    alt="Milk Tea"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : cat.title === "Fruit Tea" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src="/images/fruite tea.png"
                    alt="Fruit Tea"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : cat.title === "Slushy" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src="/images/slushy.png"
                    alt="Slushy"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : cat.title === "Shaved Ice" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ice drink.png"
                    alt="Shaved Ice"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : cat.title === "Fresh Juices" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/fresh juice.png" alt="Fresh Juices" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Coffee & Vietnamese Coffee" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/vietnam tea.png" alt="Vietnamese Coffee" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Bubble Waffles" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/bubble waffle.png" alt="Bubble Waffles" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Ice Blend & Smoothies" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/smoothie.png" alt="Smoothies" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Chocolate Dipped" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/chocolate dipped.jpg" alt="Chocolate Dipped" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Himalayan Momo" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/momo.jpeg" alt="Himalayan Momo" fill sizes="80px" className="object-cover" />
                </div>
              ) : cat.title === "Ramen" ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                  <Image src="/images/ramen.jpg" alt="Ramen" fill sizes="80px" className="object-cover" />
                </div>
              ) : (
                <div className="text-4xl">{cat.emoji}</div>
              )}
              <h3 className="mt-4 font-display text-xl font-bold text-espresso">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Specialty Drink - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl overflow-hidden bg-white ring-1 ring-espresso/10"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-80 lg:h-auto lg:w-1/2 shrink-0 overflow-hidden">
              <Image
                src="/images/mangonada11.png"
                alt="Mango Nada"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="font-mono text-sm font-semibold uppercase tracking-widest text-espresso/50">Featured Drink</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-espresso sm:text-4xl">Mango Nada</h3>
              <p className="mt-3 text-espresso/70 text-base leading-relaxed">
                A bold Mexican-inspired drink with chamoy, tajín, fresh mango, and our signature boba — sweet, spicy & refreshing.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-espresso">$7.99</span>
                <a
                  href="#location"
                  className="rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all hover:opacity-80"
                  style={{backgroundColor: "#C4956A"}}
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Milk Tea */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/milk tea.png" alt="Milk Tea" fill sizes="64px" className="object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Milk Tea Flavors</h3>
          </div>
          <p className="mt-2 text-sm text-espresso/60">
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
          className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/fruite tea.png" alt="Fruit Tea" fill sizes="64px" className="object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Fruit Tea Flavors</h3>
          </div>
          <p className="mt-2 text-sm text-espresso/60">
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
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src="/images/slushy.png" alt="Slushy" fill sizes="64px" className="object-cover" />
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Slushy</h3>
            </div>
            <p className="mt-2 text-sm text-espresso/60">
              Medium {sizesPricing.slushy.medium} &middot; Large {sizesPricing.slushy.large}
            </p>
            <FlavorPills flavors={slushyFlavors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src="/images/ice drink.png" alt="Shaved Ice" fill sizes="64px" className="object-cover" />
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Shaved Ice</h3>
            </div>
            <p className="mt-2 text-sm text-espresso/60">$4.99 — Popping or Jelly extra $0.99</p>
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
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src="/images/smoothie.png" alt="Ice Blend" fill sizes="64px" className="object-cover" />
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Ice Blend</h3>
            </div>
            <p className="mt-2 text-sm text-espresso/60">
              Medium {sizesPricing.iceBlend.medium} &middot; Large {sizesPricing.iceBlend.large}
            </p>
            <FlavorPills flavors={iceBlendFlavors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src="/images/smoothie.png" alt="Smoothie" fill sizes="64px" className="object-cover" />
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Smoothie</h3>
            </div>
            <p className="mt-2 text-sm text-espresso/60">
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
          className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-espresso/10 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/vietnam tea.png" alt="Coffee" fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Coffee & Vietnamese Coffee</h3>
              <p className="text-sm text-espresso/60 mt-1">Hot & iced — crafted to order</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {coffeeMenu.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-3 rounded-xl bg-[#F0E6D8] px-4 py-3">
                <p className="text-sm font-semibold text-espresso">{item.name}</p>
                <span className="shrink-0 font-mono text-sm font-bold text-espresso">{item.price}</span>
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
          className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-caramel/30 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/fresh juice.png" alt="Fresh Juices" fill sizes="64px" className="object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Fresh Juices</h3>
          </div>
          <p className="mt-2 text-sm text-espresso/60">
            Cold-pressed daily — never from concentrate.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freshJuices.map((juice) => (
              <div
                key={juice.name}
                className="flex items-center justify-between gap-3 rounded-xl bg-espresso/5 px-4 py-3 ring-1 ring-espresso/10"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥤</span>
                  <p className="font-semibold text-espresso">{juice.name}</p>
                </div>
                <span className="font-mono text-sm text-espresso">
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
            className="rounded-3xl bg-white ring-1 ring-espresso/10 overflow-hidden"
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
                <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">
                  Bubble Waffles
                </h3>
                <p className="text-sm text-espresso font-semibold">Crispy. Creamy. Dreamy.</p>
              </div>
            </div>
            <div className="p-6 sm:p-10">
              <div className="space-y-4">
                {bubbleWaffles.map((w) => (
                  <div key={w.name} className="flex items-start justify-between gap-4 border-b border-cream/10 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-espresso">{w.name}</p>
                      <p className="mt-1 text-xs text-espresso/60">{w.desc}</p>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-espresso">
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
            className="rounded-3xl bg-white ring-1 ring-espresso/10 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/images/momo_ramen.png"
                alt="Himalayan Momo and Ramen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-display text-2xl font-bold text-espresso sm:text-3xl">
                  Himalayan Momo & Ramen
                </h3>
                <p className="text-sm text-espresso font-semibold">Steamed to Perfection. Warm Bowl. Happy Soul.</p>
              </div>
            </div>
            <div className="p-6 sm:p-10">
              <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {[...momoAndRamen.momo, ...momoAndRamen.ramen].map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3 py-1.5">
                    <p className="text-sm text-espresso/80">{item.name}</p>
                    <span className="shrink-0 font-mono text-sm text-espresso">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chocolate Dipped + Toppings */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                <Image src="/images/chocolate dipped.jpg" alt="Chocolate Dipped" fill sizes="48px" className="object-cover" />
              </div>
              <h3 className="font-display text-xl font-bold text-espresso">Chocolate Dipped</h3>
            </div>
            <div className="mt-4 space-y-3">
              {chocolateDipped.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-3">
                  <p className="text-sm text-espresso/80">{c.name}</p>
                  <span className="shrink-0 font-mono text-xs text-espresso">{c.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="rounded-3xl bg-white p-6 ring-1 ring-espresso/10"
          >
            <h3 className="font-display text-xl font-bold text-espresso">
              ✨ Toppings — {toppings.price}
            </h3>
            <p className="mt-4 text-sm text-espresso/70">{toppings.poppings}</p>
            <p className="mt-2 text-sm text-espresso/70">{toppings.jelly}</p>
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