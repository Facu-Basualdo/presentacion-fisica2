"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import SlideShell from "../ui/SlideShell";
import ImpedanceTriangle from "../diagrams/ImpedanceTriangle";
import VoltagePhasor from "../diagrams/VoltagePhasor";

function CaseColumn({
  title,
  z,
  x,
  phi,
  vr,
  vl,
  vc,
  vTotal,
  warn,
  delay,
}: {
  title: string;
  z: string;
  x: string;
  phi: string;
  vr: number;
  vl: number;
  vc: number;
  vTotal: string;
  warn?: boolean;
  delay: number;
}) {
  const accent = warn ? "--color-warn" : "--color-accent";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}
      className="rounded-2xl border bg-[var(--color-bg-card)]/50 p-5 flex flex-col"
      style={{ borderColor: warn ? "var(--color-warn)" : "var(--color-divider)" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: `var(${accent})` }}>{title}</h3>
        <span className="font-mono text-base font-semibold" style={{ color: `var(${accent})` }}>φ = {phi}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-1">
        <div className="h-44">
          <ImpedanceTriangle r="R" x={x} z={z} phi={phi} sign={1} />
        </div>
        <div className="h-44">
          <VoltagePhasor vr={vr} vl={vl} vc={vc} vTotal={vTotal} scale={warn ? 9 : 11} />
        </div>
      </div>
      <div className="mt-1 flex justify-around font-mono text-xs text-[var(--color-text-secondary)]">
        <span>Impedancia</span>
        <span>Tensiones</span>
      </div>
    </motion.div>
  );
}

export default function Slide09DiagramasExp() {
  return (
    <SlideShell eyebrow="Diagramas vectoriales · experimentales" index="09">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-4 font-black leading-[0.95] tracking-[-0.03em] text-4xl md:text-5xl"
      >
        El desfase crece de <span className="text-[var(--color-accent)]">0,092°</span>
        <ArrowRight className="inline mx-3 mb-1" size={36} />
        <span className="text-[var(--color-warn)]">3,43°</span>
      </motion.h2>

      <div className="mt-auto grid grid-cols-2 gap-6">
        <CaseColumn
          title="Sin núcleo"
          z="264,4 Ω" x="0,42 Ω" phi="0,092°"
          vr={12.45} vl={0.12} vc={0.1} vTotal="12,64 V"
          delay={0.4}
        />
        <CaseColumn
          title="Con núcleo de hierro"
          z="263,6 Ω" x="14,65 Ω" phi="3,43°"
          vr={11.69} vl={0.78} vc={0.08} vTotal="12,60 V"
          warn
          delay={0.55}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        className="mt-5 flex items-center gap-5 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-bg-card)]/50 px-6 py-4"
      >
        <div className="shrink-0 font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Cálculo teórico
        </div>
        <div className="h-8 w-px bg-[var(--color-divider)]" />
        <p className="text-base text-[var(--color-text-secondary)] leading-snug">
          Con los valores nominales, X<sub>C</sub> = 14,47 Ω &gt; X<sub>L</sub> = 3,45 Ω → reactancia neta negativa y
          desfase <span className="text-[var(--color-accent)]">φ ≈ −2,3°</span>: el circuito es teóricamente
          <span className="text-[var(--color-accent)]"> capacitivo</span>. En ambos casos domina V<sub>R</sub>,
          así que V queda casi sobre el eje de corriente.
        </p>
      </motion.div>
    </SlideShell>
  );
}
