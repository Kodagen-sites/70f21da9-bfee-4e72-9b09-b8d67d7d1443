"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * Header #1 — PILL FLOATING
 * Glassy rounded pill centered at top, floats ~20px from edge.
 * Logo left, nav center, CTA right. All inside one pill.
 *
 * Best for: tech, AI, modern SaaS, premium
 */
export default function HeaderPillFloating() {
  const scrolled = useScrollState(20);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full border backdrop-blur-2xl transition-all duration-500
          ${scrolled
              ? "bg-[#0E1C33]/90 border-white/10 shadow-[0_10px_40px_-10px_rgba(14,28,51,0.35)]"
              : "bg-[#0E1C33]/40 border-white/15"
          }`}
          style={{ padding: "6px 8px" }}
        >
          <Link
            href="/"
            className="px-3 md:px-4 py-2 font-display tracking-[0.16em] uppercase text-xs md:text-sm text-cream"
          >
            {siteConfig.company.name}
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-1 mx-2">
              {NAV_LINKS.slice(1).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      active ? "text-cream" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="pill-active"
                        className="absolute inset-0 bg-cream/10 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          {!isMobile ? (
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-cream text-navy text-xs font-display tracking-[0.08em] hover:brightness-105 transition-all"
            >
              Talk to the desk
            </Link>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 rounded-full flex items-center justify-center text-cream hover:bg-cream/10"
            >
              <Menu size={18} />
            </button>
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-navy md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display tracking-[0.16em] uppercase text-sm text-cream">
          {siteConfig.company.name}
        </div>
        <button onClick={onClose} className="text-cream" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {NAV_LINKS.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-cream hover:text-cream/70 transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="absolute bottom-6 inset-x-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="block text-center w-full px-5 py-4 rounded-full bg-cream text-navy font-display"
        >
          Talk to the desk →
        </Link>
      </div>
    </motion.div>
  );
}
