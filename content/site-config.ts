/**
 * Variation Manifest fingerprint
 * archetype: G (loop)   style: S3 (locked palette override to Deep Navy & Cream)
 * voice: V1 heritage    header: pill-floating   footer: FT2 (asymmetric editorial)
 * card: CV5 editorial   hero_overlay: HO2 bottom-left + H2 bottom-anchored serif
 * hero_entrance: E3 two-tone-fade
 */

import assetManifest from "@/content/asset-manifest.json";

const img = (slot: string, fallback = ""): string =>
  (assetManifest as any)?.images?.[slot] || fallback;

export const siteConfig = {
  company: {
    name: "Travel24hr",
    fullName: "Travel24hr Ltd",
    tagline: "The concierge that never sleeps.",
    description:
      "A 24-hour travel desk handling flights, visas, holidays and airport transfers — answered by a person, any hour, any timezone.",
    email: "desk@travel24hr.com",
    phone: "+234 800 000 2447",
    whatsapp: "+234 800 000 2447",
    location: "Lagos · London · Dubai",
    address: {
      street: "12 Adeola Odeku Street",
      city: "Victoria Island, Lagos",
      country: "Nigeria",
    },
    yearFounded: 2019,
    licence: "IATA agent · Registered NCAA travel operator",
  },

  brand: {
    primary: "#1F3252",
    accent: "#1F3252",
    bg: "#FAF6EE",
    surface: "#E8DFCF",
    contrast: "#0E1C33",
    logo: { primary: "" },
    favicon: "/favicon.ico",
  },

  typography: {
    display: "Playfair Display",
    body: "Lato",
  },

  seo: {
    siteUrl: "https://travel24hr.com",
    title: "Travel24hr — The concierge that never sleeps.",
    description:
      "A 24-hour travel desk for flights, visas, holidays and airport transfers. Answered by a person, any hour, any timezone.",
    ogImage: img("og-image"),
    locale: "en_NG",
  },

  socials: {
    instagram: "https://instagram.com/travel24hr",
    facebook: "https://facebook.com/travel24hr",
    linkedin: "https://linkedin.com/company/travel24hr",
    whatsapp: "https://wa.me/2348000002447",
  },

  headerVariant: "pill-floating" as const,
  footerVariant: "FT2" as const,

  motion: {
    intensity: "low" as const,
    scrollProgress: true,
    cursorFollower: false,
  },

  hero: {
    eyebrow: "The 24-hour travel desk",
    headlineLines: ["The concierge", "that never sleeps."],
    subline:
      "Flights, visas, holidays, transfers. Answered in minutes — any hour, any timezone.",
    primaryCta: { label: "Talk to the desk", href: "/contact" },
    secondaryCta: { label: "See our services", href: "/services" },
  },

  trustBar: [
    "IATA registered agent",
    "Est. 2019 — seven years operating",
    "NCAA licensed",
    "Lagos · London · Dubai · Casablanca",
    "24-hour human desk",
    "Fixed fees, quoted before you pay",
  ],

  servicesHeading: "Four ways we handle the journey.",
  servicesEyebrow: "The desk",
  servicesSubhead: "One number. Four disciplines. Always answered.",

  services: [
    {
      slug: "flight-bookings",
      name: "Flight Bookings",
      title: "Flight bookings, priced and reissued at any hour.",
      eyebrow: "01 — Flights",
      description:
        "IATA access to every scheduled airline, plus emergency reissue and same-day rerouting when a plan changes at 2am.",
      valueProp:
        "You call once. A named agent finds fares, holds seats, watches for schedule changes, and reissues without a call-centre queue if the airline moves you.",
      inclusions: [
        "IATA airline access across four continents",
        "Emergency reissue and same-day reroute",
        "Group bookings (10+ travellers)",
        "Fare monitoring after purchase",
        "Named agent from enquiry to landing",
      ],
      process: [
        { title: "Options costed", body: "Within 60 minutes of your call, three fare options with total cost quoted." },
        { title: "Held and confirmed", body: "Seats held while you decide; ticket issued when you approve. No hidden markup." },
        { title: "Watched and reissued", body: "If the airline moves your schedule, we reissue before you notice. Any hour." },
      ],
      image: img("service-flight-bookings"),
    },
    {
      slug: "visa-assistance",
      name: "Visa Assistance",
      title: "Consular routes we know by name.",
      eyebrow: "02 — Visas",
      description:
        "Full-service consular handling: documents, forms, appointments, courier and escalation for UK, Schengen, US, UAE, Canada and more.",
      valueProp:
        "We track appointment availability, submit the paperwork, and stand in the queue so you don't. Turnaround estimated honestly.",
      inclusions: [
        "UK, Schengen, US, UAE, Canada, GCC, Nordic",
        "Document checklist and pre-review",
        "Biometric appointment booking",
        "Courier collection and return",
        "Expedited routes where they exist",
      ],
      process: [
        { title: "Eligibility checked", body: "Same day: we confirm the right visa category and list every document required." },
        { title: "Submitted and tracked", body: "We book the biometric slot, submit the file, and share the reference number." },
        { title: "Delivered, escalated if needed", body: "Passport returned by courier; we escalate through liaison if anything stalls." },
      ],
      image: img("service-visa-assistance"),
    },
    {
      slug: "holiday-packages",
      name: "Holiday Packages",
      title: "Fixed-fee holiday builds, no surprises.",
      eyebrow: "03 — Holidays",
      description:
        "Bespoke itineraries costed as a single flat fee: flights, hotel, transfers, activities, insurance — all before you pay.",
      valueProp:
        "You get one number, one document, one point of contact. Every line item quoted before booking; nothing added after.",
      inclusions: [
        "Bespoke itinerary builds",
        "Umrah, family, honeymoon, luxury",
        "Hotels vetted individually",
        "In-destination local contact",
        "Travel insurance included",
      ],
      process: [
        { title: "Brief taken", body: "A 20-minute conversation — dates, taste, budget, non-negotiables." },
        { title: "Two options costed", body: "48 hours: two itineraries, each with a flat total and every line item shown." },
        { title: "Trip supported end-to-end", body: "You have our number on the ground; we handle changes, upgrades, escalations." },
      ],
      image: img("service-holiday-packages"),
    },
    {
      slug: "airport-transfers",
      name: "Airport Transfers",
      title: "Meet-and-greet you can trust at 3am.",
      eyebrow: "04 — Transfers",
      description:
        "Vetted drivers, waiting cars, and meet-and-greet at every terminal we serve. Flight-tracked so a delay never leaves you stranded.",
      valueProp:
        "One booking, tracked against your flight. If the plane is late, the driver waits — no surcharge and no phone calls at midnight.",
      inclusions: [
        "Flight-tracked pickup",
        "Meet-and-greet at arrivals",
        "Vetted local drivers",
        "Sedan, SUV, or people-mover",
        "Standing account for corporates",
      ],
      process: [
        { title: "Booked with your flight number", body: "Driver assigned; flight monitored automatically." },
        { title: "Waiting on landing", body: "Meet-and-greet at arrivals with your name on the board." },
        { title: "One number if anything changes", body: "24-hour dispatch reachable in a single call." },
      ],
      image: img("service-airport-transfers"),
    },
  ],

  whyUs: [
    {
      number: "01",
      title: "24-hour human desk",
      body: "Not a bot. Not a call-back queue. A named agent picks up at 3am on a Sunday.",
    },
    {
      number: "02",
      title: "Consular routes we know by name",
      body: "We book the same visa windows every week. We know which slots open Tuesdays.",
    },
    {
      number: "03",
      title: "One agent from enquiry to landing",
      body: "You speak to one person. They know your file, your dates, and your preferences.",
    },
    {
      number: "04",
      title: "Fixed-fee holiday builds",
      body: "Every line item quoted before you pay. Nothing added after. Ever.",
    },
  ],

  process: [
    { step: "01", title: "Enquiry lodged", body: "You call, WhatsApp, or send a form. We answer within minutes." },
    { step: "02", title: "Options costed", body: "Within an hour, three options with real totals — no draft-then-revise." },
    { step: "03", title: "Confirmed and documented", body: "We book, issue documents, and send a single itinerary PDF." },
    { step: "04", title: "Trip supported end-to-end", body: "We watch schedules, handle changes, and are one call away on the ground." },
  ],

  aboutTeaser: {
    eyebrow: "About the desk",
    heading: "A small team, wide awake.",
    paragraphs: [
      "Travel24hr was built after a founder's flight was cancelled at 1am in Frankfurt and no agent answered a phone for six hours. Seven years later, the desk is still open.",
      "We rotate a five-person team across three timezones — Lagos, London and Dubai — so when one shift signs off, another has already read the file. The person answering at 4am is the person answering at noon: a named agent, not a triage script.",
      "Every quote is flat-fee. Every consular submission is tracked. Every airport transfer is watched against the flight. We built the model we wanted to be a customer of.",
    ],
    ctaLabel: "Read our story",
    ctaHref: "/about",
  },

  aboutStory: {
    dropcap: "S",
    paragraphs: [
      "Some businesses start as a plan. Travel24hr started as a stranding — a founder trapped in a Frankfurt transit hall at 1am in November 2019, watching a departure board flick red without a single human available to answer a phone.",
      "It cost seventeen hours, six coffees and one missed wedding to get on another plane. The idea was written on a napkin between two flights: someone should just answer. Every hour. Every timezone. A person, not a bot.",
      "The desk opened in Lagos in April 2020 with three agents and a single line. Seven years later we are a team of nine — five agents on rotating shifts across Lagos, London and Dubai; two consular specialists; one dispatcher; and a founder who still takes the 3am calls when the roster asks.",
      "We are still small on purpose. Small enough that you speak to the person who knows your file. Large enough that when your visa stalls in a Warsaw consulate on a Friday, we already know who to ring.",
    ],
  },

  values: [
    { eyebrow: "Answer", title: "Answer within minutes", body: "Not hours. Not a call-back window. A person, on the line, before your kettle boils." },
    { eyebrow: "Quote", title: "Name every fee before you pay", body: "Flat totals. Every line item shown. Nothing added after you approve." },
    { eyebrow: "Stay", title: "One agent, start to landing", body: "You get one name, one number. They know your file. They stay with it." },
  ],

  team: [
    {
      slot: "team-founder",
      name: "Adaeze Okafor",
      role: "Founder",
      bio: "Started the desk after a bad Frankfurt night. Still takes the 3am shift once a week.",
      image: img("team-founder"),
      invented: true,
    },
    {
      slot: "team-consular",
      name: "Fatima Bello",
      role: "Head of Consular",
      bio: "Twelve years handling UK, Schengen and Gulf visas. Knows every consulate liaison by name.",
      image: img("team-consular"),
      invented: true,
    },
    {
      slot: "team-nightshift",
      name: "Marcus Idris",
      role: "Night-shift Lead",
      bio: "Runs the desk from 10pm to 8am WAT. Answers before the third ring. Every time.",
      image: img("team-nightshift"),
      invented: true,
    },
    {
      slot: "team-concierge",
      name: "Chiamaka Eze",
      role: "Airport Concierge",
      bio: "Meets travellers at MMIA, LHR and DXB. Never lost a bag she was responsible for.",
      image: img("team-concierge"),
      invented: true,
    },
  ],

  work: [
    {
      title: "Lagos → Dubai",
      subtitle: "Umrah package · 12 travellers · March 2026",
      body: "Group visa, Umrah-certified accommodation in Makkah and Madinah, Ziyarah tours, and a single group airport transfer at both ends.",
      image: img("service-holiday-packages"),
    },
    {
      title: "Abuja → London",
      subtitle: "Business visa + long-haul · 48-hour turnaround",
      body: "UK business visa collected within 48 hours through an expedited liaison route, plus flights and Heathrow meet-and-greet.",
      image: img("section-work-2"),
    },
    {
      title: "Lagos → Maldives",
      subtitle: "Honeymoon · 10 nights · seaplane included",
      body: "Overwater villa, private seaplane transfer, and a diving day handled entirely by a single named agent from brief to landing.",
      image: img("section-work-3"),
    },
    {
      title: "Lagos → Casablanca",
      subtitle: "Business trip · 3-day turnaround",
      body: "Schengen-adjacent business visa, direct flight, private driver on arrival, and hotel vetted by our Casablanca contact.",
      image: img("section-work-1"),
    },
    {
      title: "Port Harcourt → Dubai",
      subtitle: "Family holiday · 8 nights · desert day",
      body: "Four-star hotel on JBR, family-only desert safari with children's guide, and airport transfer both ways.",
      image: img("service-airport-transfers"),
    },
    {
      title: "Abuja → Amsterdam",
      subtitle: "Schengen · 5 days · reissued twice",
      body: "Schengen tourist visa, flight reissued twice when carrier cancelled the outbound, no fee to client, no missed conference.",
      image: img("service-flight-bookings"),
    },
  ],

  testimonials: [
    {
      quote:
        "The desk answered at 2am when British Airways cancelled the Lagos-London leg. Reissued through Casablanca before I finished my coffee. I stopped using anyone else that morning.",
      name: "Uche N.",
      trip: "Business travel · Lagos → London",
      city: "Ikoyi",
    },
    {
      quote:
        "Our Umrah group was twelve people, three of them elderly. Travel24hr coordinated the visas, the seating, and a wheelchair at every terminal. I did not chase a single detail.",
      name: "Halima B.",
      trip: "Umrah package · Lagos → Jeddah",
      city: "Kaduna",
    },
    {
      quote:
        "A visa refusal on Thursday. New submission Friday. Approved Monday. I would not have known which door to knock. They did.",
      name: "Emmanuel A.",
      trip: "Schengen visa · Warsaw",
      city: "Abuja",
    },
  ],

  cta: {
    headline: "The next flight can wait. The call can't.",
    body: "Reach the desk any hour — WhatsApp, phone, or form.",
    primary: { label: "Talk to the desk", href: "/contact" },
    secondary: { label: "See our services", href: "/services" },
    image: img("section-cta"),
  },

  contact: {
    heading: "The desk is open.",
    subline: "Any hour. Any timezone. Answered by a person.",
    formHeading: "Send an enquiry.",
    channels: [
      {
        eyebrow: "WhatsApp",
        label: "+234 800 000 2447",
        href: "https://wa.me/2348000002447",
        note: "Response within 5 minutes, any hour",
      },
      {
        eyebrow: "Phone",
        label: "+234 800 000 2447",
        href: "tel:+2348000002447",
        note: "Answered within 3 rings, 24/7",
      },
      {
        eyebrow: "Email",
        label: "desk@travel24hr.com",
        href: "mailto:desk@travel24hr.com",
        note: "Reply within 15 minutes, day or night",
      },
    ],
    hours: [
      { day: "Monday–Sunday", value: "24 hours" },
      { day: "Public holidays", value: "24 hours" },
      { day: "Emergency reissue", value: "24 hours" },
    ],
  },

  scrollHero: {
    assetMode: "live-generate" as const,
    scrollDistance: 3,
  },
} as const;

export type SiteConfig = typeof siteConfig;
