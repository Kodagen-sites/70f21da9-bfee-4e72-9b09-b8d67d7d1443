import type { Metadata } from "next";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import HomeHero from "@/components/sections/HomeHero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import HomeServices from "@/components/sections/HomeServices";
import HomeWhyUs from "@/components/sections/HomeWhyUs";
import HomeAboutTeaser from "@/components/sections/HomeAboutTeaser";
import HomeWorkShowcase from "@/components/sections/HomeWorkShowcase";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeCta from "@/components/sections/HomeCta";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

const heroPoster = (assetManifest as any)?.images?.["scene-1-start"] ?? "";
const heroVideo = (assetManifest as any)?.videos?.["scene-1"] ?? "";

export default function HomePage() {
  return (
    <>
      <HomeHero poster={heroPoster} videoSrc={heroVideo} />
      <TrustMarquee items={[...siteConfig.trustBar]} />
      <HomeServices />
      <HomeWhyUs />
      <HomeAboutTeaser />
      <HomeWorkShowcase />
      <HomeTestimonials />
      <HomeCta />
    </>
  );
}
