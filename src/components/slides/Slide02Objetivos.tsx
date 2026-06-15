"use client";

import { motion } from "motion/react";
import { Target, Calculator, Activity } from "lucide-react";
import SlideShell from "../ui/SlideShell";

const objetivos = [
  {
    icon: Activity,
    title: "Estudiar el circuito RLC serie en CA",
    body: "Analizar el comportamiento de tensión y corriente en un circuito con resistencia, inductancia y capacitancia conectadas en serie, alimentado por corriente alterna.",
  },
  {
    icon: Calculator,
    title: "Calcular L y C experimentalmente",
    body: "A partir de las tensiones y la corriente medidas, determinar la inductancia L y la capacitancia C reales de los componentes, contrastándolas con sus valores nominales.",
  },
];

export default function Slide02Objetivos() {
  return (
    <SlideShell eyebrow="Objetivos" index="02">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 text-center font-black leading-[0.95] tracking-[-0.03em] text-6xl md:text-7xl"
      >
        ¿Qué buscamos <span className="text-[var(--color-accent)]">verificar</span>?
      </motion.h2>

      <div className="mt-auto mb-auto grid w-full max-w-5xl mx-auto grid-cols-2 gap-8">
        {objetivos.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/60 p-8 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-tight">{o.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[var(--color-text-secondary)]">{o.body}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="mt-8 flex items-center gap-3 font-mono text-sm text-[var(--color-text-secondary)]"
      >
        <Target size={16} className="text-[var(--color-accent)]" />
        Contrastar valores medidos vs. calculados y evaluar las fuentes de error.
      </motion.div>
    </SlideShell>
  );
}
