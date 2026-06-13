# CLAUDE.md

Presentación interactiva de defensa académica: **Laboratorio N°8 — Corriente Alterna, Circuito RLC en serie** (Grupo 5, UTN FRRE, 2026). Es un deck full-screen navegable con teclado, pensado para proyectar en 1080p.

## Comandos

```bash
npm run dev      # servidor de desarrollo (http://localhost:3000)
npm run build    # build de producción
npm start        # servir el build
npx tsc --noEmit # chequeo de tipos sin emitir
```

Navegación en pantalla: **← →** / Espacio / PageUp-Down para moverse, **Esc** vuelve al inicio, **F** alterna pantalla completa.

## Stack

- **Next.js 15** (App Router) + **React 19**, TypeScript strict.
- **Tailwind CSS v4** — configurado por `@import "tailwindcss"` + bloque `@theme {}` en `globals.css` (CSS-first; **no** hay `tailwind.config.js`).
- **Motion** (`motion/react`) para toda la animación.
- **lucide-react** para íconos.
- Fuentes vía `next/font/google`: Inter (sans), Space Grotesk (display), JetBrains Mono (mono).

## Arquitectura

El contrato que mantiene el deck escalable:

- [src/components/Presentation.tsx](src/components/Presentation.tsx) es el **controlador**: posee la navegación y el array ordenado `slides[]` (`{ id, label, component }`). Renderiza el cross-fade con `AnimatePresence`, la `ProgressBar` y el contador.
- [src/hooks/useKeyboardShortcuts.ts](src/hooks/useKeyboardShortcuts.ts) maneja el teclado (ignora eventos cuando el foco está en un input/textarea).
- **Cada slide** ([src/components/slides/](src/components/slides/)) es un componente `"use client"` auto-contenido que renderiza un `<section>` de viewport completo y anima su propio contenido al montar. **No sabe nada de la navegación.**

Para **agregar / quitar / reordenar** una diapositiva tocás solo dos lugares:
1. el array `slides[]` en [Presentation.tsx](src/components/Presentation.tsx),
2. el union `SlideId` en [src/types/index.ts](src/types/index.ts).

Nunca pongas lógica de navegación dentro de una slide.

## Componentes compartidos

Reutilizables, para mantener las slides limpias y consistentes:

- [src/components/ui/SlideShell.tsx](src/components/ui/SlideShell.tsx) — marco común: fondo oscuro con grilla técnica + halo de acento + eyebrow numerado.
- [src/components/ui/Formula.tsx](src/components/ui/Formula.tsx) — tarjeta de fórmula en mono (+ helpers `Sub`/`Sup`).
- [src/components/ui/DataTable.tsx](src/components/ui/DataTable.tsx) — tabla medidos/calculados; `hot: true` resalta un dato en ámbar.
- [src/components/diagrams/CircuitRLC.tsx](src/components/diagrams/CircuitRLC.tsx) — circuito RLC serie con pulso de corriente animado (`withCore` muestra el núcleo de hierro).
- [src/components/diagrams/ImpedanceTriangle.tsx](src/components/diagrams/ImpedanceTriangle.tsx) — triángulo R/X/Z con ángulo φ (`sign` = inductivo/capacitivo).
- [src/components/diagrams/VoltagePhasor.tsx](src/components/diagrams/VoltagePhasor.tsx) — fasores de tensión (VR →, VL ↑, VC ↓, V resultante).

## Diseño

Paleta tecnológica oscura, definida como tokens `@theme` en [src/app/globals.css](src/app/globals.css) — re-tematizás todo el deck cambiando ahí:

- `--color-bg-primary` `#0A0F1E` · `--color-bg-card` `#16213D`
- `--color-accent` `#22D3EE` (cian — corriente) · `--color-accent-2` `#3B82F6` (azul — tensión)
- `--color-warn` `#F59E0B` (ámbar — núcleo de hierro / dato destacado)

Convenciones de animación: las slides animan **solo al montar** (el controlador hace la transición entre slides); stagger con `delay` incremental; easing de entrada `[0.4, 0, 0.2, 1]`; diagramas con `repeat: Infinity` para que el concepto se siga demostrando. Titulares `font-black tracking-[-0.03em]`; eyebrows `font-mono uppercase tracking-[0.22em]`.

## Contenido (datos del laboratorio)

Los valores experimentales viven dentro de cada slide de resultados, no en un archivo de datos central:

- **Sin núcleo** ([Slide07ResultadosSin.tsx](src/components/slides/Slide07ResultadosSin.tsx)): I=0,0478A · Z=264,43Ω · XL=2,51Ω · φ≈0,092°.
- **Con núcleo de hierro** ([Slide08ResultadosCon.tsx](src/components/slides/Slide08ResultadosCon.tsx)): I=0,0478A · Z=263,59Ω · XL=16,32Ω · φ≈3,43° (datos destacados con `hot`).

Si cambian los datos medidos, editá los arrays `medidos`/`calculados` de esas dos slides (y los fasores en [Slide09DiagramasExp.tsx](src/components/slides/Slide09DiagramasExp.tsx) si querés que los diagramas reflejen los nuevos valores).

## Notas de entorno

- En Windows el binario nativo `@next/swc-win32-x64-msvc` puede quedar corrupto; Next cae al fallback WASM (funciona, arranca algo más lento). Para forzar el nativo: `Remove-Item node_modules/@next/swc-win32-x64-msvc -Recurse -Force; npm install`.
