"use client";

import { motion } from "motion/react";

/**
 * Circuito RLC serie: fuente de CA → R → L → C, en lazo.
 * La "corriente" se anima como un pulso que recorre el lazo.
 */
export default function CircuitRLC({ withCore = false }: { withCore?: boolean }) {
  return (
    <svg viewBox="0 0 520 300" className="w-full h-full" fill="none">
      {/* lazo */}
      <motion.rect
        x="60"
        y="50"
        width="400"
        height="200"
        rx="6"
        stroke="var(--color-divider)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />

      {/* pulso de corriente recorriendo el lazo */}
      <motion.circle r="6" fill="var(--color-accent)">
        <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath href="#loop-path" />
        </animateMotion>
      </motion.circle>
      <path
        id="loop-path"
        d="M66 50 H454 V250 H66 Z"
        fill="none"
        stroke="none"
      />

      {/* Fuente CA (izquierda) */}
      <circle cx="60" cy="150" r="22" fill="var(--color-bg-card)" stroke="var(--color-accent-2)" strokeWidth="3" />
      <path d="M50 150 q5 -10 10 0 t10 0" stroke="var(--color-accent-2)" strokeWidth="2.5" fill="none" />

      {/* Resistencia R (arriba) */}
      <g transform="translate(150,50)">
        <rect x="0" y="-13" width="70" height="26" rx="3" fill="var(--color-bg-card)" stroke="var(--color-text-primary)" strokeWidth="2.5" />
        <text x="35" y="-22" textAnchor="middle" className="fill-[var(--color-text-secondary)]" fontSize="15" fontFamily="var(--font-mono)">R</text>
      </g>

      {/* Inductor L (arriba derecha) */}
      <g transform="translate(290,50)">
        <path
          d="M0 0 q8 -16 16 0 t16 0 t16 0 t16 0"
          stroke={withCore ? "var(--color-warn)" : "var(--color-text-primary)"}
          strokeWidth="3"
          fill="none"
        />
        {withCore && (
          <>
            <line x1="0" y1="-13" x2="64" y2="-13" stroke="var(--color-warn)" strokeWidth="2.5" />
            <line x1="0" y1="-17" x2="64" y2="-17" stroke="var(--color-warn)" strokeWidth="2.5" />
          </>
        )}
        <text x="32" y="-26" textAnchor="middle" fill={withCore ? "var(--color-warn)" : "var(--color-text-secondary)"} fontSize="15" fontFamily="var(--font-mono)">
          L{withCore ? " ⊟" : ""}
        </text>
      </g>

      {/* Capacitor C (derecha) */}
      <g transform="translate(460,140)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--color-text-primary)" strokeWidth="2.5" />
        <line x1="-12" y1="8" x2="12" y2="8" stroke="var(--color-text-primary)" strokeWidth="3" />
        <line x1="-12" y1="16" x2="12" y2="16" stroke="var(--color-text-primary)" strokeWidth="3" />
        <line x1="0" y1="16" x2="0" y2="24" stroke="var(--color-text-primary)" strokeWidth="2.5" />
        <text x="22" y="16" textAnchor="middle" className="fill-[var(--color-text-secondary)]" fontSize="15" fontFamily="var(--font-mono)">C</text>
      </g>

      {/* etiqueta I */}
      <text x="250" y="278" textAnchor="middle" fill="var(--color-accent)" fontSize="15" fontFamily="var(--font-mono)">
        ← I
      </text>
    </svg>
  );
}
