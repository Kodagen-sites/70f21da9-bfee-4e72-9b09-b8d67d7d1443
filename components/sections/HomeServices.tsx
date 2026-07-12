"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import ServiceCard from "@/components/ServiceCard";
import FadeUp from "@/components/motion/FadeUp";

/**
 * SV3 3-column image-top + CV5 editorial card
 * 2×2 grid on cream (4 services fit 2×2 better than 3-col orphan).
 */
export default function HomeServices() {
  return (
    <section id="services" className="relative w-full bg-bg section-pad">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
              {siteConfig.servicesEyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="mt-5 font-display leading-[1.02] tracking-[-0.01em] text-navy"
              style={{ fontSize: "clamp(36px, 5.2vw, 64px)" }}
            >
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-xl text-base text-navy/72 md:text-lg leading-relaxed">
              {siteConfig.servicesSubhead}
            </p>
          </FadeUp>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10"
        >
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <ServiceCard service={service} index={i} imageSrc={service.image} variant="on-cream" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
