import type { Metadata } from "next";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import HomeCta from "@/components/sections/HomeCta";
import HomeTestimonials from "@/components/sections/HomeTestimonials";

export const metadata: Metadata = {
  title: "Work — Journeys handled by the desk",
  description:
    "Real trips, real reissues, real visas. A selection of journeys handled by Travel24hr in the last year.",
  alternates: { canonical: "/work" },
};

const heroImage =
  (assetManifest as any)?.images?.["section-work-1"] ??
  (assetManifest as any)?.images?.["section-services-hero"] ??
  "";

export default function WorkPage() {
  const items = siteConfig.work;

  return (
    <>
      <PageHero
        eyebrow="Journeys handled"
        title="A year at the desk."
        image={heroImage}
        intro="A selection of trips the desk handled — visas, reissues, group builds and airport meets."
      />

      {/* T5 image mosaic 6-up */}
      <section className="relative w-full bg-bg section-pad">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-6">
            {items.map((w, i) => {
              const src = resolveImage({
                src: w.image,
                industry: "consulting",
                keyword: w.title,
                brandColor: siteConfig.brand.primary,
              });
              // Mosaic pattern: tile 0 spans 4 cols (large), 1 spans 2, 2 spans 3, 3 spans 3, 4 spans 2, 5 spans 4
              const span = [
                "md:col-span-4",
                "md:col-span-2",
                "md:col-span-3",
                "md:col-span-3",
                "md:col-span-2",
                "md:col-span-4",
              ][i % 6];
              const aspect = [
                "aspect-[16/10]",
                "aspect-[4/5]",
                "aspect-[5/4]",
                "aspect-[5/4]",
                "aspect-[4/5]",
                "aspect-[16/10]",
              ][i % 6];
              return (
                <FadeUp key={i} delay={0.05 + (i % 3) * 0.08} className={span}>
                  <div className="group relative overflow-hidden">
                    <div className={`relative w-full ${aspect} overflow-hidden bg-navy/5`}>
                      <img
                        src={src}
                        alt={w.title}
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-70"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                        <div className="font-body text-[11px] uppercase tracking-[0.28em] text-cream/80">
                          {w.subtitle}
                        </div>
                        <h3
                          className="mt-2 font-display text-cream leading-tight"
                          style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
                        >
                          {w.title}
                        </h3>
                        <p className="mt-3 max-w-md text-cream/75 text-[14px] leading-relaxed">
                          {w.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <HomeTestimonials />
      <HomeCta />
    </>
  );
}
