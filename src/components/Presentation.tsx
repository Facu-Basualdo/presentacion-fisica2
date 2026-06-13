"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import type { Slide } from "@/types";
import ProgressBar from "./ProgressBar";

import Slide01Cover from "./slides/Slide01Cover";
import Slide02Objetivos from "./slides/Slide02Objetivos";
import Slide03TeoriaCA from "./slides/Slide03TeoriaCA";
import Slide04Impedancia from "./slides/Slide04Impedancia";
import Slide05DiagramasTeoria from "./slides/Slide05DiagramasTeoria";
import Slide06Montaje from "./slides/Slide06Montaje";
import Slide07ResultadosSin from "./slides/Slide07ResultadosSin";
import Slide08ResultadosCon from "./slides/Slide08ResultadosCon";
import Slide09DiagramasExp from "./slides/Slide09DiagramasExp";
import Slide10Conclusiones from "./slides/Slide10Conclusiones";

const slides: Slide[] = [
  { id: "cover", label: "Portada", component: Slide01Cover },
  { id: "objetivos", label: "Objetivos", component: Slide02Objetivos },
  { id: "teoria-ca", label: "Corriente alterna", component: Slide03TeoriaCA },
  { id: "impedancia", label: "Impedancia", component: Slide04Impedancia },
  { id: "diagramas-teoria", label: "Diagramas (teoría)", component: Slide05DiagramasTeoria },
  { id: "montaje", label: "Montaje experimental", component: Slide06Montaje },
  { id: "resultados-sin", label: "Resultados sin núcleo", component: Slide07ResultadosSin },
  { id: "resultados-con", label: "Resultados con núcleo", component: Slide08ResultadosCon },
  { id: "diagramas-exp", label: "Diagramas experimentales", component: Slide09DiagramasExp },
  { id: "conclusiones", label: "Conclusiones", component: Slide10Conclusiones },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = slides.length;

  const onNext = useCallback(() => setCurrentSlide((c) => Math.min(c + 1, total - 1)), [total]);
  const onPrev = useCallback(() => setCurrentSlide((c) => Math.max(c - 1, 0)), []);
  const onReset = useCallback(() => setCurrentSlide(0), []);

  useKeyboardShortcuts({ onNext, onPrev, onReset });

  const slide = slides[currentSlide];
  const SlideComponent = slide.component;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <ProgressBar current={currentSlide} total={total} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* navegación */}
      <div className="fixed bottom-6 left-8 z-40 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] pointer-events-none">
        <span className="hidden md:inline">← → navegar</span>
        <span className="text-[var(--color-divider)]">·</span>
        <span>F pantalla completa</span>
      </div>

      <div className="fixed bottom-6 right-8 z-40 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-secondary)] pointer-events-none">
        <span className="text-[var(--color-accent)]">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1 text-[var(--color-divider)]">/</span>
        {String(total).padStart(2, "0")}
      </div>
    </main>
  );
}
