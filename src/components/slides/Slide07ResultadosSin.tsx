"use client";

import { motion } from "motion/react";
import SlideShell from "../ui/SlideShell";
import DataTable, { type DataItem } from "../ui/DataTable";
import VoltagePhasor from "../diagrams/VoltagePhasor";

const medidos: DataItem[] = [
  { k: "I", v: "0,0478 A" },
  { k: "V_R", v: "12,45 V" },
  { k: "V_C", v: "0,10 V" },
  { k: "V_L", v: "0,12 V" },
  { k: "V", v: "12,64 V" },
];

const calculados: DataItem[] = [
  { k: "Z", v: "264,43 Ω" },
  { k: "R", v: "260,46 Ω" },
  { k: "L", v: "7,99×10⁻³ Hy" },
  { k: "C", v: "3,82×10⁻³ F" },
  { k: "X_L", v: "2,51 Ω" },
  { k: "X_C", v: "2,09 Ω" },
  { k: "φ", v: "≈ 0,092°" },
];

export default function Slide07ResultadosSin() {
  return (
    <SlideShell eyebrow="Resultados · sin núcleo de hierro" index="07">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Caso 1 — <span className="text-[var(--color-accent)]">sin</span> núcleo de hierro
      </motion.h2>

      <div className="mt-auto grid grid-cols-[1fr_1.1fr_0.9fr] gap-8 items-start">
        <DataTable title="Datos medidos" items={medidos} baseDelay={0.4} accent="--color-accent-2" />
        <DataTable title="Valores calculados" items={calculados} baseDelay={0.55} accent="--color-accent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-4"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Diagrama de tensión
          </h3>
          <div className="h-44">
            <VoltagePhasor vr={12.45} vl={0.12} vc={0.1} vTotal="12,64 V" scale={11} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="mt-6 rounded-xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/40 px-6 py-3.5 text-lg text-[var(--color-text-secondary)]"
      >
        X<sub>L</sub> &gt; X<sub>C</sub> con valores muy próximos → reactancia neta mínima y desfase casi nulo de
        <span className="text-[var(--color-accent)]"> ≈ 0,092°</span>. El circuito es prácticamente resistivo puro.
      </motion.div>
    </SlideShell>
  );
}
