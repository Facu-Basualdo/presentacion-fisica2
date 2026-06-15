"use client";

import { motion } from "motion/react";
import SlideShell from "../ui/SlideShell";
import Formula, { Sub } from "../ui/Formula";

export default function Slide03TeoriaCA() {
  return (
    <SlideShell eyebrow="Fundamento teórico · I" index="03">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 text-center font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Corriente alterna y resistencia <span className="text-[var(--color-accent)]">óhmica</span>
      </motion.h2>

      <div className="mt-auto mb-auto grid grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-4">
          <Formula label="Tensión aplicada" delay={0.35}>
            v(t) = V<Sub>m</Sub>·cos(ωt)
          </Formula>
          <Formula label="Corriente en R pura" delay={0.5}>
            i(t) = (V<Sub>m</Sub>/R)·cos(ωt)
          </Formula>
          <div className="grid grid-cols-2 gap-4">
            <Formula label="Valor eficaz · corriente" delay={0.65}>
              I = I<Sub>m</Sub>/√2
            </Formula>
            <Formula label="Valor eficaz · tensión" delay={0.78}>
              V = V<Sub>m</Sub>/√2
            </Formula>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
            className="mt-2 text-lg text-[var(--color-text-secondary)] leading-relaxed"
          >
            En una resistencia pura <span className="text-[var(--color-accent)]">no hay desfase</span>:
            tensión y corriente alcanzan su máximo al mismo tiempo (φ = 0).
          </motion.p>
        </div>

        {/* gráfico v(t) e i(t) en fase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-6"
        >
          <svg viewBox="0 0 360 220" className="w-full h-auto">
            <line x1="20" y1="110" x2="345" y2="110" stroke="var(--color-divider)" strokeWidth="1.5" />
            <line x1="30" y1="20" x2="30" y2="200" stroke="var(--color-divider)" strokeWidth="1.5" />
            <motion.path
              d="M30 110 Q70 20 110 110 T190 110 T270 110 T350 110"
              stroke="var(--color-accent-2)" strokeWidth="3.5" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.7 }}
            />
            <motion.path
              d="M30 110 Q70 50 110 110 T190 110 T270 110 T350 110"
              stroke="var(--color-accent)" strokeWidth="3.5" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.9 }}
            />
            <text x="300" y="40" fill="var(--color-accent-2)" fontSize="14" fontFamily="var(--font-mono)">v(t)</text>
            <text x="300" y="180" fill="var(--color-accent)" fontSize="14" fontFamily="var(--font-mono)">i(t)</text>
          </svg>
          <p className="mt-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            v e i en fase
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
