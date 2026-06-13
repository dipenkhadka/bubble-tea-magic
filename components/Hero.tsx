"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { business } from "@/lib/data";

const pearlDelays = [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-caramel-light/20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-espresso/5 px-3 py-1.5 text-sm font-semibold text-espresso ring-1 ring-espresso/10">
              <Star className="h-4 w-4 fill-caramel text-caramel" />
              Rated Local Favorite
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-espresso/5 px-3 py-1.5 text-sm font-semibold text-espresso ring-1 ring-espresso/10">
              <MapPin className="h-4 w-4 text-caramel" />
              Serving Euless, Bedford &amp; Irving
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl"
          >
            Freshly Crafted
            <br />
            <span className="text-caramel">Bubble Tea</span> in Euless
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-espresso/70"
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
              className="focus-ring rounded-full bg-espresso px-8 py-4 text-center text-base font-bold text-cream shadow-lg shadow-espresso/20 transition-transform hover:scale-105 hover:bg-espresso-deep"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="focus-ring rounded-full border-2 border-espresso px-8 py-4 text-center text-base font-bold text-espresso transition-colors hover:bg-espresso hover:text-cream"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Signature visual: pearls settling into a cup */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="relative h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]">
            <CupIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function CupIllustration() {
  return (
    <svg
      viewBox="0 0 400 480"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a bubble tea cup filling with tapioca pearls"
    >
      <defs>
        <linearGradient id="teaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8b86d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.4" />
        </linearGradient>
        <clipPath id="cupClip">
          <path d="M70 130 L330 130 L294 430 Q292 450 272 450 L128 450 Q108 450 106 430 Z" />
        </clipPath>
      </defs>

      {/* Straw */}
      <motion.rect
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        x="245"
        y="20"
        width="18"
        height="130"
        rx="6"
        fill="#e8b86d"
        transform="rotate(10 254 85)"
      />

      {/* Cup outline */}
      <path
        d="M70 130 L330 130 L294 430 Q292 450 272 450 L128 450 Q108 450 106 430 Z"
        fill="#fffaf2"
        stroke="#3d2817"
        strokeWidth="6"
      />

      {/* Tea fill */}
      <rect x="70" y="180" width="260" height="270" fill="url(#teaFill)" clipPath="url(#cupClip)" />

      {/* Pearls settling at bottom */}
      <g clipPath="url(#cupClip)">
        {[
          { cx: 150, cy: 410, r: 18 },
          { cx: 195, cy: 425, r: 18 },
          { cx: 240, cy: 408, r: 18 },
          { cx: 280, cy: 420, r: 18 },
          { cx: 172, cy: 380, r: 18 },
          { cx: 218, cy: 378, r: 18 },
          { cx: 260, cy: 384, r: 18 },
          { cx: 130, cy: 388, r: 18 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#3d2817"
            initial={{ y: -260, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.6 + pearlDelays[i],
              ease: [0.34, 1.56, 0.64, 1],
            }}
          />
        ))}
      </g>

      {/* Lid */}
      <rect x="55" y="105" width="290" height="32" rx="14" fill="#c9a227" stroke="#3d2817" strokeWidth="6" />
    </svg>
  );
}
