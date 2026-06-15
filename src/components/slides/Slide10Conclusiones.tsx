"use client";

import { motion } from "motion/react";
import { CheckCircle2, Magnet, Activity, AlertTriangle } from "lucide-react";

const puntos = [
  {
    icon: CheckCircle2,
    title: "Relación medianamente cercana medido vs. calculado",
    body: "Los valores de L, C y Z obtenidos de las mediciones se aproximan a los teóricos del modelo RLC serie en ambos casos, dentro del error experimental.",
  },
  {
    icon: Magnet,
    title: "El núcleo de hierro aumenta V_L y X_L",
    body: "La tensión inductiva V_L sube de 0,12 V a 0,78 V y la reactancia X_L de 2,51 Ω a 16,32 Ω, elevando el desfase de 0,092° a 3,43°.",
  },
  {
    icon: Activity,
    title: "Circuito casi resistivo puro",
    body: "Con R = 274,4 Ω dominante frente a reactancias muy pequeñas, el desfase es mínimo y la tensión total queda casi en fase con la corriente.",
  },
  {
    icon: AlertTriangle,
    title: "Fuentes de error",
    body: "Las diferencias se atribuyen a limitaciones de los equipos, errores de medición y ruido en las señales.",
  },
];

export default function Slide10Conclusiones() {
  return (
    <section className="relative w-screen h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-hidden px-16 pt-12 pb-16 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,50,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,50,79,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full blur-[130px] opacity-25 bg-[var(--color-accent)]" />

      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-4 font-mono text-sm uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
      >
        <span className="text-[var(--color-accent)]">10</span>
        <span className="h-px w-10 bg-[var(--color-divider)]" />
        <span>Conclusiones</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mt-5 text-center font-black leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl"
      >
        Lo que <span className="text-[var(--color-accent)]">demostramos</span>
      </motion.h2>

      <div className="relative z-10 mt-auto mb-auto grid w-full max-w-6xl mx-auto grid-cols-2 gap-6">
        {puntos.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="flex gap-4 rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg-card)]/50 p-6 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-[var(--color-text-secondary)]">{p.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="relative z-10 mt-6 flex items-end justify-between gap-8"
      >
        <div className="font-mono text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
          <div className="mb-1 uppercase tracking-[0.22em] text-[var(--color-accent)]">Bibliografía</div>
          <div>Eisberg · Lerner — <span className="italic">Física: Fundamentos y Aplicaciones</span>. McGraw-Hill, 1988.</div>
          <div>Grant · Phillips — <span className="italic">Electromagnetismo</span>, 2.ª ed. Wiley, 1990.</div>
        </div>
        <div className="shrink-0 text-right font-mono text-sm uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
          <div>Grupo 5 · UTN FRRE · 2026</div>
          <div className="text-[var(--color-accent)]">Laboratorio N°8 — RLC serie</div>
        </div>
      </motion.div>
    </section>
  );
}
