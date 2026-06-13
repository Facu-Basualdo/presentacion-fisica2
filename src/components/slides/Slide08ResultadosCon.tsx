"use client";

import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";
import SlideShell from "../ui/SlideShell";
import DataTable, { type DataItem } from "../ui/DataTable";
import VoltagePhasor from "../diagrams/VoltagePhasor";

const medidos: DataItem[] = [
  { k: "I", v: "0,0478 A" },
  { k: "V_R", v: "11,69 V" },
  { k: "V_C", v: "0,08 V" },
  { k: "V_L", v: "0,78 V", hot: true },
  { k: "V", v: "12,60 V" },
];

const calculados: DataItem[] = [
  { k: "Z", v: "263,59 Ω" },
  { k: "R", v: "244,56 Ω" },
  { k: "L", v: "0,052 Hy", hot: true },
  { k: "C", v: "0,031 F" },
  { k: "X_L", v: "16,32 Ω", hot: true },
  { k: "X_C", v: "1,67 Ω" },
  { k: "φ", v: "≈ 3,43°", hot: true },
];

export default function Slide08ResultadosCon() {
  return (
    <SlideShell eyebrow="Resultados · con núcleo de hierro" index="08" accent="--color-warn">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Caso 2 — <span className="text-[var(--color-warn)]">con</span> núcleo de hierro
      </motion.h2>

      <div className="mt-auto grid grid-cols-[1fr_1.1fr_0.9fr] gap-8 items-start">
        <DataTable title="Datos medidos" items={medidos} baseDelay={0.4} accent="--color-accent-2" />
        <DataTable title="Valores calculados" items={calculados} baseDelay={0.55} accent="--color-warn" />

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-warn)]/50 bg-[var(--color-bg-card)]/50 p-4"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-warn)]">
            Diagrama de tensión · α = 3,43°
          </h3>
          <div className="h-44">
            <VoltagePhasor vr={11.69} vl={0.78} vc={0.08} vTotal="12,60 V" scale={11} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}
        className="mt-6 flex items-center gap-4 rounded-xl border border-[var(--color-warn)] bg-[var(--color-warn)]/10 px-6 py-3.5"
      >
        <TrendingUp size={28} className="shrink-0 text-[var(--color-warn)]" />
        <p className="text-lg text-[var(--color-text-primary)]">
          El núcleo de hierro <span className="font-semibold text-[var(--color-warn)]">aumenta la inductancia</span>:
          X<sub>L</sub> sube de 2,51 Ω a <span className="text-[var(--color-warn)]">16,32 Ω</span> y V<sub>L</sub> de 0,12 V a 0,78 V.
          El desfase crece de 0,092° a <span className="text-[var(--color-warn)]">≈ 3,43°</span>.
        </p>
      </motion.div>
    </SlideShell>
  );
}
