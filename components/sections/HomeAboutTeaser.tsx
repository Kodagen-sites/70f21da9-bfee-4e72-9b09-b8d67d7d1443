"use client";

import Link from "next/link";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import ImageRevealMask from "@/components/motion/ImageRevealMask";

/**
 * About teaser — alternating image-left.
 */
export default function HomeAboutTeaser() {
  const image = (assetManifest as any)?.images?.["section-about-hero"];
  const { eyebrow, heading, paragraphs, ctaLabel, ctaHref } = siteConfig.aboutTeaser;

  return (
    <section id="about-teaser" className="relative w-full bg-bg section-pad">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            {image ? (
              <ImageRevealMask
                src={image}
                alt="The Travel24hr desk at dusk"
                aspectClass="aspect-[4/5]"
                className="w-full"
              />
            ) : (
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-navy via-accent to-navy" />
            )}
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <FadeUp>
              <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
                {eyebrow}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="mt-4 font-display leading-[1.02] tracking-[-0.01em] text-navy"
                style={{ fontSize: "clamp(36px, 4.8vw, 56px)" }}
              >
                {heading}
              </h2>
            </FadeUp>
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <FadeUp key={i} delay={0.15 + i * 0.06}>
                  <p className="text-navy/78 text-[16px] leading-[1.7]">{p}</p>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.4}>
              <Link
                href={ctaHref}
                className="group mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-navy hover:text-accent"
              >
                {ctaLabel}
                <span aria-hidden className="inline-block h-px w-8 bg-navy/60 transition-all group-hover:w-14" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
