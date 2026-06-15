"use client";

import { motion } from "motion/react";

interface VoltagePhasorProps {
  vr: number; // magnitudes en V (se escalan)
  vl: number;
  vc: number;
  vTotal: string; // etiqueta del total
  scale?: number; // px por volt (eje horizontal · VR)
  scaleY?: number; // px por volt (eje vertical · VL/VC); por defecto = scale
}

/**
 * Diagrama de fasores de tensión. Eje de corriente horizontal (referencia).
 * VR en fase (→), VL adelantada 90° (↑), VC atrasada 90° (↓).
 * V = VR + (VL − VC) como suma vectorial.
 * `scaleY` permite exagerar la escala vertical cuando VL y VC son muy pequeñas.
 */
export default function VoltagePhasor({ vr, vl, vc, vTotal, scale = 14, scaleY }: VoltagePhasorProps) {
  const sy = scaleY ?? scale;
  const ox = 70;
  const oy = 160;
  const rx = ox + vr * scale; // punta de VR
  const netY = oy - (vl - vc) * sy; // componente reactiva neta (hacia arriba si inductivo)
  const vyTop = oy - vl * sy;
  const vyBot = oy - (-vc) * sy; // vc hacia abajo

  const arrow = (
    x1: number, y1: number, x2: number, y2: number, color: string, delay: number, width = 3.5
  ) => (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth={width}
      markerEnd="url(#vh)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    />
  );

  return (
    <svg viewBox="0 0 380 300" className="w-full h-full" fill="none">
      <defs>
        <marker id="vh" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
          <path d="M0 0 L7 3 L0 6 Z" fill="context-stroke" />
        </marker>
      </defs>

      {/* ejes */}
      <line x1="40" y1={oy} x2="360" y2={oy} stroke="var(--color-divider)" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1={ox} y1="30" x2={ox} y2="290" stroke="var(--color-divider)" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="352" y={oy - 8} fill="var(--color-text-secondary)" fontSize="13" fontFamily="var(--font-mono)">I</text>

      {/* VR → */}
      {arrow(ox, oy, rx, oy, "var(--color-text-primary)", 0.2)}
      <text x={(ox + rx) / 2} y={oy + 22} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="14" fontFamily="var(--font-mono)">VR</text>

      {/* VL ↑ */}
      {arrow(ox, oy, ox, vyTop, "var(--color-accent-2)", 0.5)}
      <text x={ox - 14} y={vyTop + 14} textAnchor="end" fill="var(--color-accent-2)" fontSize="14" fontFamily="var(--font-mono)">VL</text>

      {/* VC ↓ */}
      {arrow(ox, oy, ox, vyBot, "var(--color-warn)", 0.8)}
      <text x={ox - 14} y={vyBot - 6} textAnchor="end" fill="var(--color-warn)" fontSize="14" fontFamily="var(--font-mono)">VC</text>

      {/* V resultante */}
      {arrow(ox, oy, rx, netY, "var(--color-accent)", 1.3, 4.5)}
      <text x={rx + 8} y={netY + (netY < oy ? -4 : 16)} fill="var(--color-accent)" fontSize="15" fontFamily="var(--font-mono)">V = {vTotal}</text>
    </svg>
  );
}
