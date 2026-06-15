"use client";

import { motion } from "motion/react";

interface ImpedanceTriangleProps {
  /** valores para etiquetar */
  r: string;
  x: string;
  z: string;
  phi: string;
  /** signo de la reactancia: +1 inductivo (X arriba), -1 capacitivo (X abajo) */
  sign?: 1 | -1;
}

/**
 * Triángulo de impedancia. Cateto horizontal = R, vertical = X, hipotenusa = Z.
 * Se "dibuja" en orden R → X → Z y luego marca el ángulo φ.
 */
export default function ImpedanceTriangle({ r, x, z, phi, sign = 1 }: ImpedanceTriangleProps) {
  // geometría (px). Origen en (60, 200).
  const ox = 60;
  const oy = 200;
  const w = 280; // R
  const h = sign === 1 ? -150 : 150; // X (arriba si inductivo)
  const topY = oy + h;

  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  };

  return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      {/* R */}
      <motion.line
        x1={ox} y1={oy} x2={ox + w} y2={oy}
        stroke="var(--color-text-primary)" strokeWidth="4"
        {...draw} transition={{ duration: 0.7 }}
      />
      {/* X */}
      <motion.line
        x1={ox + w} y1={oy} x2={ox + w} y2={topY}
        stroke="var(--color-accent-2)" strokeWidth="4"
        {...draw} transition={{ duration: 0.7, delay: 0.7 }}
      />
      {/* Z */}
      <motion.line
        x1={ox} y1={oy} x2={ox + w} y2={topY}
        stroke="var(--color-accent)" strokeWidth="4"
        {...draw} transition={{ duration: 0.8, delay: 1.4 }}
      />

      {/* arco φ */}
      <motion.path
        d={
          sign === 1
            ? `M ${ox + 48} ${oy} A 48 48 0 0 0 ${ox + 44} ${oy - 18}`
            : `M ${ox + 48} ${oy} A 48 48 0 0 1 ${ox + 44} ${oy + 18}`
        }
        stroke="var(--color-warn)" strokeWidth="2.5" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
      />

      {/* etiquetas */}
      <text x={ox + w / 2} y={oy + 26} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="18" fontFamily="var(--font-mono)">R = {r}</text>
      <text x={ox + w - 12} y={(oy + topY) / 2} textAnchor="end" fill="var(--color-accent-2)" fontSize="18" fontFamily="var(--font-mono)">X = {x}</text>
      <text x={ox + w / 2 - 7} y={(oy + topY) / 2 + (sign === 1 ? -8 : 8)} textAnchor="end" fill="var(--color-accent)" fontSize="18" fontFamily="var(--font-mono)">Z = {z}</text>
      <text x={ox + 56} y={oy + (sign === 1 ? -22 : 30)} fill="var(--color-warn)" fontSize="16" fontFamily="var(--font-mono)">φ = {phi}</text>
    </svg>
  );
}
