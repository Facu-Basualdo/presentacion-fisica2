import type { ComponentType } from "react";

// Un id por diapositiva. En orden de presentación.
export type SlideId =
  | "cover"
  | "objetivos"
  | "teoria-ca"
  | "impedancia"
  | "diagramas-teoria"
  | "montaje"
  | "resultados-sin"
  | "resultados-con"
  | "diagramas-exp"
  | "conclusiones";

export interface Slide {
  id: SlideId;
  label: string;
  component: ComponentType;
}

export interface KeyboardShortcutHandlers {
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
}
