import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms — Travel24hr",
  description: "Booking terms, cancellation policy, and liability for Travel24hr Ltd.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative w-full bg-bg section-pad pt-40 md:pt-48">
      <div className="mx-auto w-full max-w-[720px] px-6 md:px-8">
        <div className="font-body text-[11px] uppercase tracking-[0.32em] text-navy/55">
          Terms
        </div>
        <h1
          className="mt-4 font-display leading-[1.05] tracking-[-0.01em] text-navy"
          style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
        >
          Terms of service.
        </h1>
        <p className="mt-4 font-body text-[13px] text-navy/60">
          Last updated: April 2026
        </p>

        <div className="mt-10 space-y-6 text-navy/80 text-[16px] leading-[1.75]">
          <p>
            These terms govern any booking, quote or consular submission handled by{" "}
            {siteConfig.company.fullName}. By instructing us to book on your behalf,
            you accept them.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Quotes and payment</h2>
          <p>
            Every quote is flat-fee and itemised before you pay. Airline fares
            are held for the period stated on the quote. Payment confirms the
            booking; unpaid holds may release without notice if the airline
            changes availability.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Cancellation and changes</h2>
          <p>
            Airline, hotel and consular rules apply first. Where a supplier
            refund is available, we pass it back in full. Our own booking fee is
            refunded if we cancel the service; otherwise it is non-refundable
            once work has begun.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Consular submissions</h2>
          <p>
            We advise on eligibility and prepare documentation, but the decision
            rests entirely with the consulate. A refusal is not grounds for
            refund of the consular fee, biometric fee, or our submission fee. We
            resubmit at cost when the file allows.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Liability</h2>
          <p>
            {siteConfig.company.name} acts as agent for scheduled airlines,
            hotels and licensed transport suppliers. Our liability for supplier
            failure is limited to the fees we received. We maintain professional
            indemnity cover as required by our IATA licence.
          </p>

          <h2 className="mt-8 font-display text-navy text-[22px]">Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria. Disputes are heard in Lagos.
          </p>
        </div>
      </div>
    </section>
  );
}
