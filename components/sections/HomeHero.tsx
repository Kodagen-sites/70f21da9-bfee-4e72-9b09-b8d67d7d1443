"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import MagneticButton from "@/components/motion/MagneticButton";

type Props = { poster?: string; videoSrc?: string };

/**
 * HO2 bottom-left + H2 bottom-anchored serif + E3 two-tone-fade.
 * Archetype G Mode 1 loop — <video autoPlay loop muted playsInline>.
 */
export default function HomeHero({ poster, videoSrc }: Props) {
  const lines = [...siteConfig.hero.headlineLines];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            poster={poster || undefined}
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : poster ? (
          <img src={poster} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#0E1C33] via-[#1F3252] to-[#0E1C33]" />
        )}
        {/* Two-tone fade — supports HO2 bottom-left overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24">
        <div className="mx-auto flex w-full max-w-7xl">
          <div className="max-w-[820px]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] uppercase tracking-[0.32em] text-cream/70"
            >
              {siteConfig.hero.eyebrow}
            </motion.div>

            <h1 className="mt-6 font-display leading-[0.98] tracking-[-0.01em] text-cream">
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + i * 0.2,
                  }}
                  className="block"
                  style={{ fontSize: "clamp(48px, 8.5vw, 128px)" }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="mt-8 max-w-xl text-base leading-[1.6] text-cream/75 md:text-lg"
            >
              {siteConfig.hero.subline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <MagneticButton
                as="a"
                href={siteConfig.hero.primaryCta.href}
                className="inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 font-display text-sm tracking-[0.06em] text-navy transition-colors hover:bg-cream/90"
              >
                {siteConfig.hero.primaryCta.label}
                <span aria-hidden>→</span>
              </MagneticButton>

              <Link
                href={siteConfig.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-cream/80 hover:text-cream"
              >
                {siteConfig.hero.secondaryCta.label}
                <span aria-hidden className="inline-block h-px w-8 bg-cream/60 transition-all group-hover:w-14" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
