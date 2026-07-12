import type { Metadata } from "next";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — the desk is open",
  description:
    "Any hour. Any timezone. Answered by a person. WhatsApp, phone, email or form.",
  alternates: { canonical: "/contact" },
};

const heroImage = (assetManifest as any)?.images?.["section-contact-hero"] ?? "";

export default function ContactPage() {
  const { channels, hours, heading, subline, formHeading } = siteConfig.contact;

  return (
    <>
      <PageHero
        eyebrow="Reach the desk"
        title={heading}
        image={heroImage}
        intro={subline}
      />

      {/* Form + channels split */}
      <section className="relative w-full bg-bg section-pad">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-14 md:px-8">
          {/* Form */}
          <div className="md:col-span-7">
            <FadeUp>
              <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
                Enquiry
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.01em] text-navy"
                style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
              >
                {formHeading}
              </h2>
            </FadeUp>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          {/* Channels + hours */}
          <div className="md:col-span-5">
            <FadeUp>
              <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
                Or reach us directly
              </div>
            </FadeUp>
            <ul className="mt-6 space-y-6">
              {channels.map((c, i) => (
                <FadeUp key={i} delay={0.06 + i * 0.05}>
                  <li className="border-t border-navy/15 pt-5">
                    <div className="font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                      {c.eyebrow}
                    </div>
                    <a
                      href={c.href}
                      className="mt-2 block font-display text-navy text-[22px] leading-tight hover:text-accent transition-colors"
                    >
                      {c.label}
                    </a>
                    <p className="mt-2 font-body text-[13px] text-navy/60">
                      {c.note}
                    </p>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <FadeUp delay={0.3}>
              <div className="mt-12 border-t border-navy/15 pt-6">
                <div className="font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                  Hours
                </div>
                <ul className="mt-4 space-y-3">
                  {hours.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-4 text-navy/80 text-[14.5px]"
                    >
                      <span>{h.day}</span>
                      <span className="font-display text-navy">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12 border-t border-navy/15 pt-6">
                <div className="font-body text-[11px] uppercase tracking-[0.28em] text-accent">
                  Registered office
                </div>
                <address className="mt-4 not-italic font-body text-[14.5px] text-navy/80 leading-relaxed">
                  {siteConfig.company.fullName}<br />
                  {siteConfig.company.address.street}<br />
                  {siteConfig.company.address.city}<br />
                  {siteConfig.company.address.country}
                </address>
                <p className="mt-4 font-body text-[12px] text-navy/55">
                  {siteConfig.company.licence}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
