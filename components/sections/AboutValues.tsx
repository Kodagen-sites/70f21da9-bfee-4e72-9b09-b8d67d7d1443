"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextScramble from "@/components/motion/TextScramble";

export default function AboutValues() {
  return (
    <section
      id="values"
      className="relative w-full section-pad"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              What we hold to
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.01em] text-navy"
              style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
            >
              What we hold to.
            </h2>
          </FadeUp>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-navy/12"
        >
          {siteConfig.values.map((v, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="border-t border-navy/12 pt-8 md:border-t-0 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0 pb-8 md:pb-0"
            >
              <TextScramble
                as="div"
                className="font-body text-[11px] uppercase tracking-[0.32em] text-accent"
                trigger="view"
              >
                {v.eyebrow}
              </TextScramble>
              <h3
                className="mt-4 font-display text-navy leading-[1.15]"
                style={{ fontSize: "clamp(22px, 2vw, 28px)" }}
              >
                {v.title}
              </h3>
              <p className="mt-4 text-navy/72 leading-relaxed text-[15px]">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
