"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SlideShellProps {
  eyebrow: string;
  index: string; // "03"
  children: ReactNode;
  accent?: string; // css var name fragment, e.g. "--color-accent"
}

/** Marco común a todas las diapositivas: fondo oscuro con grilla técnica + eyebrow numerado. */
export default function SlideShell({ eyebrow, index, children, accent = "--color-accent" }: SlideShellProps) {
  return (
    <section className="relative w-screen h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-hidden px-16 pt-12 pb-16 flex flex-col">
      {/* grilla técnica de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,50,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,50,79,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      {/* halo de acento */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-[120px] opacity-25"
        style={{ background: `var(${accent})` }}
      />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-4 font-mono text-sm uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
      >
        <span className="text-[var(--color-accent)]">{index}</span>
        <span className="h-px w-10 bg-[var(--color-divider)]" />
        <span>{eyebrow}</span>
      </motion.div>

      <div className="relative z-10 flex-1 min-h-0 flex flex-col">{children}</div>
    </section>
  );
}
