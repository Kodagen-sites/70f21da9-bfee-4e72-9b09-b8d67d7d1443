import type { Metadata } from "next";
import assetManifest from "@/content/asset-manifest.json";
import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutValues from "@/components/sections/AboutValues";
import AboutTeam from "@/components/sections/AboutTeam";
import HomeCta from "@/components/sections/HomeCta";

export const metadata: Metadata = {
  title: "About — the desk that stays lit",
  description:
    "Travel24hr is a small team of nine, rotating a 24-hour desk across Lagos, London and Dubai. Founded 2019.",
  alternates: { canonical: "/about" },
};

const heroImage = (assetManifest as any)?.images?.["section-about-hero"] ?? "";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Travel24hr"
        title="The desk that stays lit."
        image={heroImage}
        intro={`${siteConfig.company.fullName} — founded ${siteConfig.company.yearFounded}, ${siteConfig.company.licence}. A small team on a rotating rota so someone is always awake for you.`}
      />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <HomeCta />
    </>
  );
}
