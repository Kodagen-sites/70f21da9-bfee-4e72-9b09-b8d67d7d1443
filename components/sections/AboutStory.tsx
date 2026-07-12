"use client";

import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function AboutStory() {
  const { dropcap, paragraphs } = siteConfig.aboutStory;
  return (
    <section id="about-story" className="relative w-full bg-bg section-pad">
      <div className="mx-auto w-full max-w-[720px] px-6 md:px-8">
        <FadeUp>
          <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
            Our story
          </div>
        </FadeUp>
        <TextReveal
          as="h2"
          className="mt-5 font-display leading-[1.05] tracking-[-0.01em] text-navy text-[clamp(32px,4.6vw,56px)]"
        >
          How a 24-hour desk got built.
        </TextReveal>

        <div className="mt-10 space-y-6 text-navy/80 text-[17px] leading-[1.75]">
          {paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.08 + i * 0.06}>
              <p>
                {i === 0 && (
                  <span
                    className="mr-3 float-left font-display text-accent leading-[0.85]"
                    style={{ fontSize: "clamp(72px, 8vw, 96px)" }}
                  >
                    {dropcap}
                  </span>
                )}
                {p}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
