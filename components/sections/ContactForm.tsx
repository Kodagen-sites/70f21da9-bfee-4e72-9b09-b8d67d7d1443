"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Field = {
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
};

const FIELDS: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "WhatsApp or phone", type: "tel" },
  { name: "subject", label: "What do you need — flight, visa, holiday, transfer?" },
  { name: "message", label: "Tell us the trip", as: "textarea", required: true },
];

export default function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-navy/15 pt-8"
      >
        <div className="font-body text-[11px] uppercase tracking-[0.28em] text-accent">
          Received
        </div>
        <h3 className="mt-4 font-display text-navy text-[26px] leading-tight">
          The desk has your note.
        </h3>
        <p className="mt-4 text-navy/72 text-[15px] leading-relaxed">
          A named agent will reply within 15 minutes, day or night. If it&rsquo;s urgent,
          WhatsApp us on {" "}
          <a href="https://wa.me/2348000002447" className="underline decoration-accent underline-offset-4">
            +234 800 000 2447
          </a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      {FIELDS.map((f, i) => {
        const commonProps = {
          id: f.name,
          name: f.name,
          value: values[f.name] ?? "",
          onChange: set(f.name),
          required: f.required,
          className:
            "peer w-full bg-transparent border-0 border-b border-navy/25 pb-3 pt-6 font-body text-[16px] text-navy placeholder:text-transparent focus:border-accent focus:outline-none transition-colors",
        };
        return (
          <div key={f.name} className="relative">
            {f.as === "textarea" ? (
              <textarea
                {...(commonProps as any)}
                rows={4}
                placeholder={f.label}
              />
            ) : (
              <input
                {...(commonProps as any)}
                type={f.type ?? "text"}
                placeholder={f.label}
              />
            )}
            <label
              htmlFor={f.name}
              className="pointer-events-none absolute left-0 top-6 font-body text-[13px] uppercase tracking-[0.22em] text-navy/50 transition-all peer-focus:top-0 peer-focus:text-[10.5px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10.5px] peer-[:not(:placeholder-shown)]:text-accent"
            >
              {f.label}
            </label>
          </div>
        );
      })}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 font-display text-sm tracking-[0.06em] text-cream transition-colors hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send to the desk"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
