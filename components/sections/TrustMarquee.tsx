"use client";

import Marquee from "@/components/motion/Marquee";

type Props = { items: string[] };

export default function TrustMarquee({ items }: Props) {
  return (
    <section
      aria-label="Trust anchors"
      className="relative w-full bg-navy text-cream border-y border-cream/12"
    >
      <div className="py-4">
        <Marquee speed={70} pauseOnHover gap="gap-14">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-14 whitespace-nowrap">
              <span className="font-body text-[12px] uppercase tracking-[0.32em] text-cream/70">
                {item}
              </span>
              <span aria-hidden className="text-cream/40">
                ✦
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
