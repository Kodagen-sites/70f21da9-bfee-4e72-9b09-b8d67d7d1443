import type { Metadata } from "next";
import Link from "next/link";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";
import ImageRevealMask from "@/components/motion/ImageRevealMask";
import HomeCta from "@/components/sections/HomeCta";

export const metadata: Metadata = {
  title: "Services — Travel24hr",
  description:
    "Flight bookings, visa assistance, holiday packages and airport transfers — handled by a 24-hour human desk.",
  alternates: { canonical: "/services" },
};

const heroImage = (assetManifest as any)?.images?.["section-services-hero"] ?? "";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What the desk handles"
        title="Four disciplines. One number."
        image={heroImage}
        intro="Flights, visas, holidays and transfers — each with a named agent and a flat fee quoted before you pay."
      />

      {/* SV1 alternating full-bleed grid */}
      <section id="services-grid" className="relative w-full bg-bg">
        {siteConfig.services.map((s, i) => {
          const src = resolveImage({
            src: s.image,
            industry: "consulting",
            keyword: s.name,
            brandColor: siteConfig.brand.primary,
          });
          const flip = i % 2 === 1;
          return (
            <div
              key={s.slug}
              className={`relative w-full section-pad ${i % 2 === 0 ? "bg-bg" : ""}`}
              style={i % 2 === 1 ? { background: "var(--color-surface)" } : undefined}
            >
              <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-8">
                <div className={`md:col-span-6 ${flip ? "md:order-2" : ""}`}>
                  <ImageRevealMask
                    src={src}
                    alt={s.name}
                    aspectClass="aspect-[4/5]"
                    className="w-full"
                  />
                </div>
                <div className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
                  <FadeUp>
                    <div className="font-body text-[11px] uppercase tracking-[0.32em] text-accent">
                      {s.eyebrow}
                    </div>
                  </FadeUp>
                  <FadeUp delay={0.08}>
                    <h2
                      className="mt-4 font-display leading-[1.08] tracking-[-0.01em] text-navy"
                      style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
                    >
                      {s.title}
                    </h2>
                  </FadeUp>
                  <FadeUp delay={0.16}>
                    <p className="mt-5 text-navy/72 leading-relaxed text-[16px]">
                      {s.valueProp}
                    </p>
                  </FadeUp>
                  <FadeUp delay={0.24}>
                    <ul className="mt-6 space-y-2">
                      {s.inclusions.slice(0, 4).map((line, li) => (
                        <li
                          key={li}
                          className="flex items-start gap-3 text-navy/80 text-[14.5px]"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-px w-4 bg-accent"
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </FadeUp>
                  <FadeUp delay={0.32}>
                    <div className="mt-8">
                      <Link
                        href={`/services/${s.slug}`}
                        className="group inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.28em] text-navy hover:text-accent transition-colors"
                      >
                        See the process
                        <span
                          aria-hidden
                          className="inline-block h-px w-8 bg-navy/60 transition-all group-hover:w-14"
                        />
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process — horizontal timeline on navy */}
      <section id="services-process" className="relative w-full bg-navy text-cream section-pad">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-cream/60">
              How the desk works
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="mt-4 max-w-3xl font-display leading-[1.05] tracking-[-0.01em] text-cream"
              style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
            >
              Four steps. Every enquiry. Every time.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {siteConfig.process.map((p, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <div className="border-t border-cream/20 pt-6">
                  <div className="font-display text-accent text-[14px] tracking-[0.2em]">
                    {p.step}
                  </div>
                  <h3 className="mt-3 font-display text-cream text-[22px] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-cream/70 text-[14.5px] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 font-display text-sm tracking-[0.06em] text-navy transition-colors hover:bg-cream/90"
            >
              Talk to the desk
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
