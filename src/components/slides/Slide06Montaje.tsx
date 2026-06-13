"use client";

import { motion } from "motion/react";
import SlideShell from "../ui/SlideShell";
import CircuitRLC from "../diagrams/CircuitRLC";

const componentes = [
  { label: "Capacitancia", value: "C = 0,00022 F" },
  { label: "Inductancia", value: "L = 0,011 Hy" },
  { label: "Frecuencia angular", value: "ω = 314,16 rad/s" },
  { label: "Resistencia", value: "R = 270 Ω" },
  { label: "Resist. del inductor", value: "R_L = 4,4 Ω" },
  { label: "Resistencia total", value: "R_t = 274,4 Ω" },
];

export default function Slide06Montaje() {
  return (
    <SlideShell eyebrow="Montaje experimental" index="06" accent="--color-accent-2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Circuito y <span className="text-[var(--color-accent)]">mediciones</span>
      </motion.h2>

      <div className="mt-auto grid grid-cols-[1.2fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-6"
        >
          <div className="h-64">
            <CircuitRLC />
          </div>
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Fuente CA · R · L · C en serie
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="text-lg text-[var(--color-text-secondary)] leading-relaxed"
          >
            Se mide la corriente <span className="text-[var(--color-accent)]">I</span> con amperímetro
            y las tensiones <span className="text-[var(--color-text-primary)]">V<sub>R</sub>, V<sub>C</sub>, V<sub>L</sub> y V</span> con voltímetro.
          </motion.div>

          <div className="grid grid-cols-1 gap-2.5">
            {componentes.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between rounded-lg border border-[var(--color-divider)] bg-[var(--color-bg-card)]/40 px-5 py-3"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">{c.label}</span>
                <span className="font-mono text-lg text-[var(--color-accent)]">{c.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
