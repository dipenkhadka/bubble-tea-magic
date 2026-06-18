"use client";

import { motion } from "framer-motion";
import { Gift, Star, Cake, Sparkles, Phone } from "lucide-react";
import { useState } from "react";

function CheckBalance() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-caramel/15">
          <Gift className="h-7 w-7 text-caramel" />
        </div>
      </div>
      <p className="font-display text-xl font-bold text-espresso">Check Your Rewards Balance</p>
      <p className="mt-2 text-sm text-espresso/60">Enter your phone number to check your points.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex items-center gap-2 rounded-2xl bg-espresso/5 px-4 py-3 ring-1 ring-espresso/20">
            <Phone className="h-5 w-5 shrink-0 text-espresso/40" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(555) 000-0000"
              className="flex-1 bg-transparent text-espresso placeholder-espresso/30 outline-none text-base"
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-2xl py-3 text-base font-bold text-white bg-caramel transition-all hover:opacity-80"
          >
            Check Balance
          </button>
        </form>
      ) : (
        <div className="mt-6 rounded-2xl bg-caramel/10 px-6 py-6">
          <p className="text-lg font-bold text-espresso">Thanks! 🎉</p>
          <p className="mt-2 text-sm text-espresso/70">
            We found <span className="font-semibold">{phone}</span>. Visit us in store to check your rewards balance.
          </p>
          <button
            onClick={() => { setSubmitted(false); setPhone(""); }}
            className="mt-4 text-sm font-semibold underline text-espresso/60 hover:text-espresso"
          >
            Check another number
          </button>
        </div>
      )}
    </div>
  );
}

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

          {/* Check Rewards Balance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-espresso/10 bg-white/70 p-8 shadow-sm"
          >
            <CheckBalance />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
