"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FormulaProps {
  children: ReactNode;
  label?: string;
  delay?: number;
  highlight?: boolean;
}

/** Tarjeta de fórmula legible, en mono, con etiqueta opcional. */
export default function Formula({ children, label, delay = 0, highlight = false }: FormulaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-xl border px-6 py-4 backdrop-blur-sm ${
        highlight
          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
          : "border-[var(--color-divider)] bg-[var(--color-bg-card)]/60"
      }`}
    >
      {label && (
        <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          {label}
        </div>
      )}
      <div className="font-mono text-2xl md:text-3xl leading-tight text-[var(--color-text-primary)]">
        {children}
      </div>
    </motion.div>
  );
}

/** Subíndice y exponente helpers para fórmulas. */
export const Sub = ({ children }: { children: ReactNode }) => (
  <sub className="text-[0.65em]">{children}</sub>
);
export const Sup = ({ children }: { children: ReactNode }) => (
  <sup className="text-[0.65em]">{children}</sup>
);
