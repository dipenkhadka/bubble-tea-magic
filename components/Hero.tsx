"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Freshly made bubble tea with boba pearls"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1.5 text-sm font-semibold text-cream ring-1 ring-cream/20 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-caramel text-caramel" />
              Rated Local Favorite
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1.5 text-sm font-semibold text-cream ring-1 ring-cream/20 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-caramel" />
              Serving Euless, Bedford &amp; Irving
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
          >
            Freshly Crafted
            <br />
            <span className="text-caramel-light">Bubble Tea</span> in Euless
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-cream/85"
          >
            Premium bubble tea, fresh juices, Vietnamese coffee, bubble waffles
            &amp; more — made fresh, every single cup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={business.doorDashUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full bg-caramel px-8 py-4 text-center text-base font-bold text-espresso shadow-lg shadow-black/20 transition-transform hover:scale-105"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="focus-ring rounded-full border-2 border-cream px-8 py-4 text-center text-base font-bold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-espresso"
          
            >
              View Menu
         </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}