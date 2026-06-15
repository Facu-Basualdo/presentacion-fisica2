"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";

const integrantes = [
  "Juan Ignacio Drose",
  "Almarza Leandro Germán",
  "Basualdo Facundo",
  "Sánchez Maximiliano",
  "Costa Peralta Lautaro",
  "Gómez Franco",
];

export default function Slide01Cover() {
  return (
    <section className="relative w-screen h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-hidden flex flex-col justify-center px-20">
      {/* grilla + halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,50,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,50,79,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 30% 50%, black 30%, transparent 100%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -top-32 right-10 h-[560px] w-[560px] rounded-full blur-[140px] opacity-30 bg-[var(--color-accent-2)]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-[130px] opacity-20 bg-[var(--color-accent)]" />

      {/* dos ondas desfasadas: corriente (cian) y tensión (azul) */}
      <svg aria-hidden viewBox="0 0 1200 200" className="pointer-events-none absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.16]">
        <motion.path
          d="M0 100 Q75 -20 150 100 T300 100 T450 100 T600 100 T750 100 T900 100 T1050 100 T1200 100"
          stroke="var(--color-accent)" strokeWidth="3" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 100 Q75 220 150 100 T300 100 T450 100 T600 100 T750 100 T900 100 T1050 100 T1200 100"
          stroke="var(--color-accent-2)" strokeWidth="3" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>

      {/* fasor rotatorio decorativo (arriba a la derecha) */}
      <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute top-20 right-28 h-56 w-56 opacity-50">
        <circle cx="100" cy="100" r="78" fill="none" stroke="var(--color-divider)" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="100" cy="100" r="4" fill="var(--color-accent)" />
        <motion.g
          style={{ originX: "100px", originY: "100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <line x1="100" y1="100" x2="178" y2="100" stroke="var(--color-accent)" strokeWidth="3" />
          <circle cx="178" cy="100" r="6" fill="var(--color-accent)" />
        </motion.g>
      </svg>

      {/* partículas de "corriente" subiendo */}
      {[
        { left: "12%", delay: 0, dur: 5, color: "--color-accent" },
        { left: "24%", delay: 1.4, dur: 6, color: "--color-accent-2" },
        { left: "68%", delay: 0.6, dur: 5.5, color: "--color-accent" },
        { left: "82%", delay: 2.1, dur: 6.5, color: "--color-accent-2" },
        { left: "90%", delay: 1, dur: 5, color: "--color-accent" },
      ].map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute bottom-0 h-1.5 w-1.5 rounded-full"
          style={{ left: p.left, background: `var(${p.color})`, boxShadow: `0 0 12px var(${p.color})` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -800, opacity: [0, 1, 1, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* corchetes técnicos en las esquinas */}
      <div aria-hidden className="pointer-events-none absolute left-8 top-8 h-14 w-14 border-l-2 border-t-2 border-[var(--color-accent)]/40" />
      <div aria-hidden className="pointer-events-none absolute right-8 bottom-8 h-14 w-14 border-b-2 border-r-2 border-[var(--color-accent)]/40" />

      {/* badges flotantes con magnitudes clave */}
      {[
        { txt: "Z = √(R²+X²)", top: "26%", right: "8%", delay: 1.1, accent: "--color-accent" },
        { txt: "ω = 314 rad/s", top: "44%", right: "16%", delay: 1.35, accent: "--color-accent-2" },
        { txt: "φ → desfase", top: "62%", right: "9%", delay: 1.6, accent: "--color-warn" },
      ].map((b) => (
        <motion.div
          key={b.txt}
          aria-hidden
          className="pointer-events-none absolute z-10 rounded-lg border bg-[var(--color-bg-card)]/70 px-4 py-2 font-mono text-sm backdrop-blur-sm"
          style={{ top: b.top, right: b.right, borderColor: `color-mix(in srgb, var(${b.accent}) 45%, transparent)`, color: `var(${b.accent})` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: b.delay },
            scale: { duration: 0.5, delay: b.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: b.delay },
          }}
        >
          {b.txt}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center gap-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]"
      >
        <motion.span
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <Zap size={18} className="fill-[var(--color-accent)]" />
        </motion.span>
        <span>Laboratorio N°8 · Electromagnetismo</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mt-6 font-black leading-[0.92] tracking-[-0.03em] text-[clamp(56px,7.5vw,118px)]"
      >
        Corriente Alterna
        <br />
        <span className="text-[var(--color-accent)]">Circuito RLC</span> en Serie
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mt-8 max-w-3xl text-2xl text-[var(--color-text-secondary)] leading-snug"
      >
        Estudio experimental de impedancia, reactancias y desfase — y el efecto del
        núcleo de hierro sobre la inductancia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 mt-12 flex flex-col gap-3"
      >
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Grupo 5</span>
        <div className="grid grid-cols-3 gap-x-8 gap-y-1.5 text-base text-[var(--color-text-primary)]">
          {integrantes.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 mt-8 font-mono text-sm uppercase tracking-[0.22em] text-[var(--color-text-secondary)]"
      >
        UTN · Facultad Regional Resistencia · 2026
      </motion.div>
    </section>
  );
}
