"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  slug: string;
  name: string;
  description: string;
  eyebrow?: string;
  image?: string;
};

type Props = {
  service: Service;
  index?: number;
  imageSrc?: string;
  variant?: "on-cream" | "on-navy";
};

/**
 * Editorial service card (V1 heritage voice).
 * Image top · tracked eyebrow · serif title · hairline divider · Lato body · CTA glyph.
 */
export default function ServiceCard({ service, index, imageSrc, variant = "on-cream" }: Props) {
  const eyebrow = service.eyebrow ?? `0${(index ?? 0) + 1} — ${service.name}`;
  const img = imageSrc ?? service.image ?? "";

  const isDark = variant === "on-navy";
  const bg = isDark ? "bg-navy" : "bg-bg";
  const border = isDark ? "border-cream/12" : "border-navy/12";
  const eyebrowText = isDark ? "text-cream/60" : "text-navy/60";
  const titleText = isDark ? "text-cream" : "text-navy";
  const bodyText = isDark ? "text-cream/72" : "text-navy/72";
  const hairline = isDark ? "border-cream/16" : "border-navy/14";

  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex h-full flex-col overflow-hidden border ${border} ${bg} transition-colors`}
      >
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          {img ? (
            <img
              src={img}
              alt={service.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-accent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className={`font-body text-[11px] uppercase tracking-[0.28em] ${eyebrowText}`}>
            {eyebrow}
          </div>

          <h3 className={`mt-3 font-display text-[26px] leading-[1.15] ${titleText}`}>
            {service.name}
          </h3>

          <div className={`mt-4 border-t ${hairline}`} />

          <p className={`mt-4 text-sm leading-relaxed ${bodyText}`}>
            {service.description}
          </p>

          <div className={`mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] ${eyebrowText} group-hover:text-current transition-colors`}>
            <span className={isDark ? "text-cream" : "text-navy"}>Read more</span>
            <span aria-hidden className={`inline-block h-px w-6 ${isDark ? "bg-cream/60" : "bg-navy/60"} transition-all group-hover:w-10`} />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
