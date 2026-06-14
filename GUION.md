# GUION — Defensa Lab N°8: Corriente Alterna · Circuito RLC serie

**Duración objetivo:** ~9–10 min · **6 expositores** · ~1:30 cada uno
**Grupo 5 · UTN FRRE · 2026**

> Quien maneja el teclado avanza con **→**. Cada persona habla mientras se ve SU slide.
> Navegación: **← →** mover · **Esc** volver al inicio · **F** pantalla completa.

---

## 🎙️ PERSONA 1 — *Slides 01 (Portada) + 02 (Objetivos)* — ~1:20

> **[Slide 01 – Portada]**

"Buenos días. Somos el Grupo 5 y vamos a presentar el Trabajo de Laboratorio N°8, sobre **corriente alterna**, donde estudiamos un **circuito RLC en serie**. El grupo está integrado por Juan Drose, Leandro Almarza, Facundo Basualdo, Maximiliano Sánchez, Lautaro Costa Peralta y Franco Gómez."

> **[avanza → Slide 02 – Objetivos]**

"Nuestros objetivos fueron dos: primero, **estudiar cómo se comporta un circuito RLC en serie alimentado con corriente alterna**; y segundo, usar las mediciones para **calcular el valor de la inductancia L y la capacitancia C** del circuito. Para entender los resultados, primero repasamos la teoría. Sigue [Persona 2]."

---

## 🎙️ PERSONA 2 — *Slide 03 (Corriente alterna y resistencia óhmica)* — ~1:30

> **[Slide 03]**

"En corriente alterna la tensión no es constante: varía como una onda, según **v(t) = Vₘ·cos(ωt)**. Si en el circuito solo hay una **resistencia pura**, la corriente sigue exactamente la misma forma: sube y baja al mismo ritmo que la tensión. Eso es lo que muestra el gráfico: las dos ondas **en fase**, sin retraso entre ellas — el ángulo de desfase φ es cero."

"Un detalle importante: los instrumentos no miden el valor máximo de la onda, sino el **valor eficaz**, que es el máximo dividido raíz de dos. De ahí en adelante, cuando decimos I o V, hablamos de valores eficaces. Con esto entra L para hablar de qué pasa cuando agregamos bobina y capacitor."

---

## 🎙️ PERSONA 3 — *Slides 04 (Impedancia) + 05 (Diagramas teoría)* — ~1:40

> **[Slide 04]**

"Cuando además de la resistencia hay una **bobina (L)** y un **capacitor (C)**, aparece la **reactancia**, que es como una 'resistencia' propia de cada uno frente a la alterna. La bobina aporta la reactancia inductiva **X_L = ω·L** y el capacitor la capacitiva **X_C = 1/(ωC)**. La resta de ambas es la reactancia neta X."

"Combinando la resistencia con la reactancia obtenemos la **impedancia Z**, que es la oposición total del circuito: **Z = √(R² + X²)**. Y según quién gane, el circuito es **inductivo** (X positiva), **capacitivo** (X negativa) o está en **resonancia** (X cero)."

> **[avanza → Slide 05 – Diagramas teóricos]**

"Esto se representa con dos triángulos: el de **impedancia**, que relaciona R, X y Z con el ángulo φ; y el de **tensiones**, donde la tensión total sale de combinar la de la resistencia, la bobina y el capacitor. Con la teoría clara, [Persona 4] explica cómo lo armamos."

---

## 🎙️ PERSONA 4 — *Slide 06 (Montaje experimental)* — ~1:20

> **[Slide 06]**

"Para la parte práctica armamos el circuito **RLC en serie**: una resistencia, una bobina y un capacitor conectados uno detrás del otro, alimentados por una fuente de corriente alterna. Con un **amperímetro** medimos la corriente que circula, y con un **voltímetro** medimos por separado la caída de tensión en cada elemento: V_R en la resistencia, V_C en el capacitor, V_L en la bobina, y V en el conjunto."

"Hicimos la experiencia en **dos situaciones**: primero con la bobina sola, y después metiéndole un **núcleo de hierro** adentro, para ver cómo cambia su comportamiento. [Persona 5] muestra los resultados."

---

## 🎙️ PERSONA 5 — *Slides 07 (sin núcleo) + 08 (con núcleo)* — ~1:50

> **[Slide 07 – Sin núcleo]**

"Primer caso, **sin núcleo de hierro**. Medimos una corriente de **0,0478 A** y una tensión total de **12,64 V**. Con eso calculamos la impedancia como Z = V/I, dando **264,43 Ω**. Lo interesante es que X_L y X_C dan casi iguales, así que la reactancia neta es mínima y el **desfase es prácticamente cero: 0,092°**. O sea, el circuito se comporta casi como una resistencia pura."

> **[avanza → Slide 08 – Con núcleo]**

"Segundo caso, **con el núcleo de hierro** dentro de la bobina. La corriente y la impedancia casi no cambian, pero la bobina se vuelve mucho más fuerte: la tensión inductiva V_L salta de 0,12 V a **0,78 V**, y la reactancia X_L de 2,51 a **16,32 Ω**. Eso hace que el **desfase crezca de 0,092° a 3,43°**. El núcleo de hierro potencia el efecto inductivo. [Persona 6] cierra con los diagramas y conclusiones."

---

## 🎙️ PERSONA 6 — *Slides 09 (Diagramas experimentales) + 10 (Conclusiones)* — ~1:40

> **[Slide 09 – Diagramas experimentales]**

"Acá llevamos nuestros datos reales a los diagramas. En el de tensiones se ve cómo con el núcleo de hierro el vector V_L crece y el ángulo se abre — pasa de casi plano a 3,43°. Coincide con lo que predecía la teoría."

> **[avanza → Slide 10 – Conclusiones]**

"Para cerrar, cuatro conclusiones: **uno**, los valores medidos y los calculados teóricamente dan razonablemente cercanos, dentro del error experimental. **Dos**, el núcleo de hierro aumenta claramente V_L y X_L, y con eso el desfase. **Tres**, en ambos casos la resistencia domina, así que el circuito quedó casi resistivo puro. Y **cuatro**, las diferencias se deben a limitaciones de los equipos, errores de medición y ruido en las señales. Con esto cumplimos los objetivos del trabajo. Muchas gracias."

---

## Reparto rápido (chuleta)

| Persona | Slides | Tema |
|---|---|---|
| 1 | 01 + 02 | Portada y objetivos |
| 2 | 03 | Teoría: CA y resistencia pura |
| 3 | 04 + 05 | Teoría: reactancias, impedancia y diagramas |
| 4 | 06 | Montaje experimental |
| 5 | 07 + 08 | Resultados sin / con núcleo |
| 6 | 09 + 10 | Diagramas experimentales y conclusiones |
