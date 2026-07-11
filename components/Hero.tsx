"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/lib/data";

const slides = [
  { src: "/images/slide1.png", alt: "Slide 1" },
  { src: "/images/slide2.png", alt: "Slide 2" },
  { src: "/images/slide3.png", alt: "Slide 3" },
  { src: "/images/momo.png", alt: "Himalayan Momo" },
  { src: "/images/ramen.png", alt: "Ramen" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-caramel" : "w-2 bg-cream/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
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
            className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            Freshly Crafted
            <br />
            <span className="text-caramel-light">Bubble Tea</span> in Euless
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 max-w-md text-base text-cream/85"
          >
            Premium bubble tea, fresh juices, Vietnamese coffee, bubble waffles
            &amp; more — made fresh, every single cup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
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
