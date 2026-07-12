"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";

/**
 * CTA — full-bleed navy with atmospheric image at low opacity + dust canvas.
 */
export default function HomeCta() {
  const { headline, body, primary, secondary, image } = siteConfig.cta;

  return (
    <section
      id="home-cta"
      className="relative w-full overflow-hidden bg-navy text-cream section-pad"
    >
      {image && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-8 text-center">
        <FadeUp>
          <h2
            className="font-display leading-[1.05] tracking-[-0.01em] text-cream"
            style={{ fontSize: "clamp(40px, 6.5vw, 80px)" }}
          >
            {headline}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-6 text-cream/78 text-base md:text-lg leading-relaxed">
            {body}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <MagneticButton
              as="a"
              href={primary.href}
              className="inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 font-display text-sm tracking-[0.06em] text-navy transition-colors hover:bg-cream/90"
            >
              {primary.label}
              <span aria-hidden>→</span>
            </MagneticButton>
            <Link
              href={secondary.href}
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-cream/80 hover:text-cream"
            >
              {secondary.label}
              <span aria-hidden className="inline-block h-px w-8 bg-cream/60 transition-all group-hover:w-14" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
