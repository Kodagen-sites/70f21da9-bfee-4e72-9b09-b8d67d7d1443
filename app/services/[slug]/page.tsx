import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";
import HomeCta from "@/components/sections/HomeCta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = siteConfig.services.find((x) => x.slug === slug);
  if (!s) return { title: "Service — Travel24hr" };
  return {
    title: `${s.name} — Travel24hr`,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const heroImage = resolveImage({
    src: service.image,
    industry: "consulting",
    keyword: service.name,
    brandColor: siteConfig.brand.primary,
  });

  const related = siteConfig.services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        image={heroImage}
        intro={service.description}
      />

      {/* Overview + inclusions */}
      <section className="relative w-full bg-bg section-pad">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <FadeUp>
              <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
                What you get
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="mt-4 font-display leading-[1.08] tracking-[-0.01em] text-navy"
                style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
              >
                {service.valueProp}
              </h2>
            </FadeUp>
          </div>
          <div className="md:col-span-5">
            <FadeUp delay={0.16}>
              <div className="border-t border-navy/15 pt-6">
                <div className="font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                  Inclusions
                </div>
                <ul className="mt-5 space-y-3">
                  {service.inclusions.map((line, i) => (
                    <li key={i} className="flex items-start gap-3 text-navy/80 text-[15px]">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-px w-4 bg-accent"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process — 3 steps */}
      <section
        className="relative w-full section-pad"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              How it runs
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="mt-4 max-w-2xl font-display leading-[1.05] tracking-[-0.01em] text-navy"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
            >
              Three steps, timed and named.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {service.process.map((p, i) => (
              <FadeUp key={i} delay={0.12 + i * 0.08}>
                <div className="border-t border-navy/20 pt-6">
                  <div className="font-display text-accent text-[14px] tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-navy text-[24px] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-navy/72 text-[15px] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative w-full bg-bg section-pad">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              Also handled by the desk
            </div>
          </FadeUp>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r, i) => {
              const src = resolveImage({
                src: r.image,
                industry: "consulting",
                keyword: r.name,
                brandColor: siteConfig.brand.primary,
              });
              return (
                <FadeUp key={r.slug} delay={0.08 + i * 0.08}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[5/4] w-full overflow-hidden bg-navy/5">
                      <img
                        src={src}
                        alt={r.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-4 font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                      {r.eyebrow}
                    </div>
                    <h3 className="mt-2 font-display text-navy text-[22px] leading-tight">
                      {r.name}
                    </h3>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <div className="mt-12">
            <MagneticButton
              as="a"
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-navy/25 px-6 py-3 font-body text-[12px] uppercase tracking-[0.28em] text-navy hover:bg-navy hover:text-cream transition-colors"
            >
              All services
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
