"use client";

import { motion } from "motion/react";
import SlideShell from "../ui/SlideShell";
import Formula, { Sub, Sup } from "../ui/Formula";

export default function Slide04Impedancia() {
  return (
    <SlideShell eyebrow="Fundamento teórico · II" index="04" accent="--color-accent-2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 text-center font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Reactancias e <span className="text-[var(--color-accent)]">impedancia</span>
      </motion.h2>

      <div className="mt-auto mx-auto grid w-full max-w-4xl grid-cols-2 gap-x-10 gap-y-5">
        <Formula label="Reactancia inductiva" delay={0.35}>
          X<Sub>L</Sub> = ω·L
        </Formula>
        <Formula label="Reactancia capacitiva" delay={0.45}>
          X<Sub>C</Sub> = 1 / (ω·C)
        </Formula>
        <Formula label="Reactancia neta" delay={0.55}>
          X = X<Sub>L</Sub> − X<Sub>C</Sub>
        </Formula>
        <Formula label="Ángulo de desfase" delay={0.65}>
          φ = arctg(X / R)
        </Formula>
        <Formula label="Módulo de impedancia" delay={0.75} highlight>
          |Z| = V / I
        </Formula>
        <Formula label="Módulo de impedancia · forma desarrollada" delay={0.85} highlight>
          Z = √(R<Sup>2</Sup> + (ωL − 1/(ωC))<Sup>2</Sup>)
        </Formula>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="mt-7 mb-auto mx-auto grid w-full max-w-4xl grid-cols-3 gap-4 text-center font-mono text-sm"
      >
        <div className="rounded-lg border border-[var(--color-divider)] bg-[var(--color-bg-card)]/40 py-3 text-[var(--color-text-secondary)]">
          X &gt; 0 → <span className="text-[var(--color-accent-2)]">inductivo</span>
        </div>
        <div className="rounded-lg border border-[var(--color-divider)] bg-[var(--color-bg-card)]/40 py-3 text-[var(--color-text-secondary)]">
          X = 0 → <span className="text-[var(--color-success)]">resonancia</span>
        </div>
        <div className="rounded-lg border border-[var(--color-divider)] bg-[var(--color-bg-card)]/40 py-3 text-[var(--color-text-secondary)]">
          X &lt; 0 → <span className="text-[var(--color-warn)]">capacitivo</span>
        </div>
      </motion.div>
    </SlideShell>
  );
}
