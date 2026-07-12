"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

/**
 * TS2 pull-quote carousel — auto-advances every 7s, pauses on hover.
 */
export default function HomeTestimonials() {
  const quotes = siteConfig.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, [paused, quotes.length]);

  const q = quotes[i];

  return (
    <section
      id="testimonials"
      className="relative w-full section-pad"
      style={{ background: "var(--color-surface)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8 text-center">
        <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
          What travellers say
        </div>

        <div className="relative mt-10 min-h-[220px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl"
            >
              <p
                className="font-display italic text-navy leading-[1.28] tracking-[-0.005em]"
                style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="mt-8 font-body text-[12px] uppercase tracking-[0.28em] text-navy/60">
                {q.name} · {q.trip} · {q.city}
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1} of ${quotes.length}`}
              className={`h-[6px] w-[6px] rounded-full transition-all ${
                idx === i ? "bg-navy scale-[1.5]" : "bg-navy/30 hover:bg-navy/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
