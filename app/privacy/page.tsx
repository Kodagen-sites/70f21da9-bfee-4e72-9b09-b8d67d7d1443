import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy — Travel24hr",
  description: "How Travel24hr handles your data, bookings, and consular submissions.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="relative w-full bg-bg section-pad pt-40 md:pt-48">
      <div className="mx-auto w-full max-w-[720px] px-6 md:px-8">
        <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
          Privacy
        </div>
        <h1
          className="mt-4 font-display leading-[1.05] tracking-[-0.01em] text-navy"
          style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
        >
          Privacy policy.
        </h1>
        <p className="mt-4 font-body text-[13px] text-navy/60">
          Last updated: April 2026
        </p>

        <div className="mt-10 space-y-6 text-navy/80 text-[16px] leading-[1.75]">
          <p>
            {siteConfig.company.fullName} operates a 24-hour travel desk. To do that,
            we handle personal data — passports, visas, itineraries and payment
            details. This page explains what we collect, why, and how long we
            keep it.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">What we collect</h2>
          <p>
            Names, contact details, dates of birth, passport numbers, visa
            submissions, travel preferences, and payment references. We only
            collect what is required to book flights, submit consular
            applications, or dispatch an airport transfer.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Why we hold it</h2>
          <p>
            To carry out your booking, share it with airlines, consulates and
            authorised suppliers, and respond to schedule or consular changes on
            your behalf. We do not sell your data.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">How long</h2>
          <p>
            Booking records: seven years, as required by IATA and NCAA reporting.
            Consular files: destroyed six months after the visa decision unless
            you request otherwise. Marketing contact: only if you opt in.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Your rights</h2>
          <p>
            You can request a copy of the data we hold, ask us to correct it, or
            ask us to delete it (subject to statutory retention). Email {" "}
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="underline decoration-accent underline-offset-4"
            >
              {siteConfig.company.email}
            </a>{" "}
            and a named agent will handle the request within seven days.
          </p>
        </div>
      </div>
    </section>
  );
}
