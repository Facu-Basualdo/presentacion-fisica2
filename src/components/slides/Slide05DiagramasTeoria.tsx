"use client";

import { motion } from "motion/react";
import SlideShell from "../ui/SlideShell";
import ImpedanceTriangle from "../diagrams/ImpedanceTriangle";
import VoltagePhasor from "../diagrams/VoltagePhasor";
import { Sup } from "../ui/Formula";

export default function Slide05DiagramasTeoria() {
  return (
    <SlideShell eyebrow="Diagramas vectoriales · teoría" index="05">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="mt-5 text-center font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Triángulos de <span className="text-[var(--color-accent)]">impedancia</span> y tensiones
      </motion.h2>

      <div className="mt-auto mb-auto grid grid-cols-[0.7fr_1.15fr_1.15fr] gap-6 items-stretch">
        {/* fórmulas de cálculo realmente usadas en el informe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] p-5 flex flex-col"
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            De la medición al cálculo
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-2 font-mono text-base text-[var(--color-text-primary)]">
            {[
              ["Z", "V / I"],
              ["φ", "arctg((VL−VC)/VR)"],
              ["R", "VR / I"],
              ["L", "VL / (ω·I)"],
              ["XL", "VL / I"],
              ["XC", "VC / I"],
              ["C", "I / (ω·VC)"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2">
                <span className="text-[var(--color-accent)] w-7">{k}</span>
                <span className="text-[var(--color-divider)]">=</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-5 flex flex-col"
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Triángulo de impedancia
          </h3>
          <div className="h-64 flex-1">
            <ImpedanceTriangle r="R" x="X" z="|Z|" phi="arctg(X/R)" sign={1} />
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            R y X componen la hipotenusa <span className="text-[var(--color-accent)]">Z</span>;
            el ángulo entre R y Z es φ.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-5 flex flex-col"
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Triángulo de tensiones
          </h3>
          <div className="h-64 flex-1">
            <VoltagePhasor vr={4} vl={7} vc={3} vTotal="√(VR²+(VL−VC)²)" scale={13} />
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            V = √(V<sub className="text-[0.7em]">R</sub><Sup>2</Sup> + (V<sub className="text-[0.7em]">L</sub> − V<sub className="text-[0.7em]">C</sub>)<Sup>2</Sup>)
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
