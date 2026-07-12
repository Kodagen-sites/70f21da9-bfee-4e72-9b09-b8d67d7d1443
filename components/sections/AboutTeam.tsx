"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import FadeUp from "@/components/motion/FadeUp";

export default function AboutTeam() {
  return (
    <section
      id="team"
      className="relative w-full section-pad"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              The desk
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.01em] text-navy"
              style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
            >
              Nine people. Three cities. One number.
            </h2>
          </FadeUp>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
        >
          {siteConfig.team.map((m, i) => {
            const src = resolveImage({
              src: m.image,
              industry: "consulting",
              keyword: "professional portrait warm office",
              brandColor: siteConfig.brand.primary,
            });
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy/5 ring-1 ring-navy/10">
                  <img
                    src={src}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-body text-[12.5px] leading-snug text-cream">
                      {m.bio}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-display text-navy text-[19px] leading-tight">{m.name}</div>
                  <div className="mt-1 font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                    {m.role}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
