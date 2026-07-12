"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";

/**
 * Why us — 4 bullets, editorial serif headings, 2×2 grid on warm surface.
 */
export default function HomeWhyUs() {
  return (
    <section
      id="why-us"
      className="relative w-full section-pad"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              Why the desk works
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="mt-5 font-display leading-[1.02] tracking-[-0.01em] text-navy"
              style={{ fontSize: "clamp(36px, 5.2vw, 60px)" }}
            >
              Why travellers choose the after-hours desk.
            </h2>
          </FadeUp>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-16 md:gap-y-16"
        >
          {siteConfig.whyUs.map((item) => (
            <motion.div
              key={item.number}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="border-t border-navy/12 pt-8"
            >
              <div className="flex items-start gap-8">
                <div
                  className="font-display text-accent leading-none"
                  style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
                >
                  {item.number}
                </div>
                <div>
                  <h3 className="font-display text-navy leading-[1.15] text-[24px] md:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-navy/72 text-[15px] leading-relaxed max-w-md">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
