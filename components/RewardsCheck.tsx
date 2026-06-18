"use client";

import { useState } from "react";
import { Gift, Phone } from "lucide-react";

export default function RewardsCheck() {
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
    <section id="rewards-check" className="py-10" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F0E6D8] px-8 py-10 shadow-sm ring-1 ring-espresso/10 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "#C4956A" }}>
              <Gift className="h-7 w-7 text-white" />
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-espresso sm:text-3xl">
            Check Your Rewards
          </h2>
          <p className="mt-2 text-espresso/70 text-sm">
            Enter your phone number to check your rewards balance or sign up.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-espresso/20">
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
                className="mt-4 w-full rounded-2xl py-3 text-base font-bold text-white transition-all hover:opacity-80"
                style={{ backgroundColor: "#C4956A" }}
              >
                Check Balance
              </button>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl bg-white px-6 py-6 ring-1 ring-espresso/10">
              <p className="text-lg font-bold text-espresso">Thanks! 🎉</p>
              <p className="mt-2 text-sm text-espresso/70">
                We found your number <span className="font-semibold">{phone}</span>. Visit us in store or call us to check your rewards balance.
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
      </div>
    </section>
  );
}
