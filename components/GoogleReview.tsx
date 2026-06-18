"use client";

import { Star } from "lucide-react";

export default function GoogleReview() {
  return (
    <section className="py-10" style={{ backgroundColor: "#F0E6D8" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-white px-8 py-10 shadow-sm ring-1 ring-espresso/10">
          {/* Google logo area */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-bold">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-espresso sm:text-3xl">
            Loved your visit? Leave us a review!
          </h2>
          <p className="mt-3 text-espresso/70 text-base">
            Your feedback means the world to us. Help others discover Bubble Tea Magic by sharing your experience on Google.
          </p>

          <a
            href="https://www.google.com/maps/search/Bubble+Tea+Magic+1201+N+Main+St+%23300,+Euless,+TX+76039"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white transition-all hover:opacity-80"
            style={{ backgroundColor: "#C4956A" }}
          >
            <Star className="h-5 w-5 fill-white text-white" />
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
