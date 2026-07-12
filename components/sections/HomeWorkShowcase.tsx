"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";

const items = siteConfig.work.slice(0, 3);

export default function HomeWorkShowcase() {
  return (
    <section id="work-showcase" className="relative w-full bg-bg section-pad border-t border-navy/10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
                Recent journeys
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="mt-4 font-display leading-[1.02] tracking-[-0.01em] text-navy"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Recent journeys.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-navy hover:text-accent"
            >
              See all work
              <span aria-hidden className="inline-block h-px w-8 bg-navy/60 transition-all group-hover:w-14" />
            </Link>
          </FadeUp>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <CardTiltLayer>
                <article className="group flex h-full flex-col overflow-hidden border border-navy/12 bg-bg transition-colors">
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-navy to-accent" />
                    )}
                  </div>
                  <div className="p-6 md:p-7">
                    <h3
                      className="font-display text-navy leading-[1.15]"
                      style={{ fontSize: "clamp(22px, 2vw, 26px)" }}
                    >
                      {item.title}
                    </h3>
                    <div className="mt-2 text-[12px] uppercase tracking-[0.24em] text-navy/55">
                      {item.subtitle}
                    </div>
                    <div className="mt-4 border-t border-navy/14" />
                    <p className="mt-4 text-sm leading-relaxed text-navy/72">{item.body}</p>
                  </div>
                </article>
              </CardTiltLayer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
