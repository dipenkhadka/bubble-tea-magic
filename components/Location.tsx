"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { business } from "@/lib/data";

export default function Location() {
  return (
    <section id="location" className="bg-cream py-20 sm:py-28 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-caramel">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
            Find Us in Euless
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl ring-1 ring-espresso/10"
          >
            <iframe
              title="Bubble Tea Magic location map"
              src={business.mapsEmbed}
              className="h-[340px] w-full sm:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <h3 className="font-display text-2xl font-bold text-espresso">
              Bubble Tea Magic
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
              <p className="text-espresso/80">{business.address}</p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
              <a
                href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
                className="focus-ring rounded text-espresso/80 hover:text-caramel"
              >
                {business.phone}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
              <a
                href={`mailto:${business.email}`}
                className="focus-ring rounded text-espresso/80 hover:text-caramel"
              >
                {business.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
              <div className="space-y-1 text-espresso/80">
                {business.hours.map((h) => (
                  <p key={h.day}>
                    <span className="font-semibold">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-8 py-4 text-base font-bold text-cream shadow-lg transition-transform hover:scale-105 hover:bg-espresso-deep"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
