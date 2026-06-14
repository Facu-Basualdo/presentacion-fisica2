# EXPLICACIÓN DESDE CERO — Lab N°8: Corriente Alterna · RLC serie

Leé esto una vez tranquilo y vas a poder defender **cualquier** parte, no solo tu slide.

---

## 1. ¿Qué es corriente alterna (CA)?

La corriente de tu casa **no es constante**: sube y baja muchas veces por segundo, formando una **onda** (un seno/coseno). Eso es la corriente alterna. En cambio la de una pila es **continua** (siempre el mismo valor).

- **ω (omega)** = "qué tan rápido oscila", se llama frecuencia angular. ω = 2·π·f. En el lab valía **314,16** (que corresponde a los 50 Hz de la red argentina).
- **Valor eficaz**: como la onda sube y baja, no tiene un único valor. El "valor eficaz" es el número útil que representa esa onda (el que marcan los instrumentos). Es el máximo dividido √2. **Cuando decimos I, V, V_R, etc., siempre son valores eficaces.**

---

## 2. Los 3 componentes del circuito (la R, la L y la C)

El circuito es **RLC en serie** = tres cosas conectadas en fila, una atrás de otra, así que **la misma corriente pasa por las tres**:

- **R = Resistencia** (270 Ω aprox). Se opone a la corriente de forma "normal", igual que en continua.
- **L = Bobina o inductancia** (un alambre enrollado). Se opone a los *cambios* de corriente. Como en CA la corriente cambia todo el tiempo, la bobina "estorba". Su estorbo se llama **reactancia inductiva X_L = ω·L**.
- **C = Capacitor o condensador**. Guarda y suelta carga. También estorba en CA: **reactancia capacitiva X_C = 1/(ω·C)**.

---

## 3. Las palabras clave (memorizá estas 4)

| Palabra | Qué es en criollo | Fórmula |
|---|---|---|
| **Reactancia (X)** | El "estorbo" de bobina y capacitor juntos | X = X_L − X_C |
| **Impedancia (Z)** | El estorbo TOTAL del circuito (R + reactancia) | Z = √(R² + X²) **o** Z = V/I |
| **Desfase (φ, "fi")** | Cuánto se atrasa/adelanta la corriente respecto de la tensión | φ = arctg(X/R) |
| **Fase** | Si las dos ondas (V e I) van "juntas" o "corridas" | φ = 0 → van juntas |

**La idea central:** en una resistencia sola, tensión y corriente van perfectamente sincronizadas (φ = 0, "en fase"). Cuando agregás bobina o capacitor, se **desincronizan** un poquito → aparece el desfase φ. Cuánto se desfasan depende de quién gane entre X_L y X_C.

- Si gana la bobina (X_L > X_C) → circuito **inductivo** → φ positivo.
- Si gana el capacitor (X_C > X_L) → circuito **capacitivo** → φ negativo.
- Si empatan → **resonancia** → φ = 0.

---

## 4. Qué hicimos en el lab (el experimento)

1. Armamos el circuito R-L-C en serie con una fuente de CA.
2. Medimos con instrumentos: la **corriente I** (con amperímetro) y las **caídas de tensión** en cada parte: V_R (resistencia), V_C (capacitor), V_L (bobina) y V (todo el conjunto), con voltímetro.
3. Con esos números medidos, **calculamos** Z, R, L, C, X_L, X_C y el ángulo φ usando las fórmulas.
4. Lo hicimos **dos veces**: una con la bobina normal, y otra metiéndole un **núcleo de hierro** adentro.

---

## 5. Los números que tenés que saber

**Sin núcleo de hierro:**
- I = 0,0478 A · V = 12,64 V → **Z = V/I = 264,43 Ω**
- X_L = 2,51 Ω y X_C = 2,09 Ω (casi iguales) → desfase casi nulo: **φ ≈ 0,092°**
- *Conclusión:* el circuito se portó casi como pura resistencia.

**Con núcleo de hierro:**
- I y Z casi no cambian.
- Pero la bobina se "potencia": V_L sube de 0,12 V → **0,78 V**, y X_L de 2,51 → **16,32 Ω**.
- Resultado: el desfase crece de 0,092° → **3,43°**.
- *Conclusión:* **el núcleo de hierro hace la bobina mucho más inductiva.** (El hierro concentra el campo magnético, por eso aumenta L y con ella X_L.)

---

## 6. Conclusión general (la frase de cierre)

- Lo medido y lo calculado teóricamente dieron **parecido** (no idéntico, por errores de equipos/medición/ruido).
- El **núcleo de hierro aumenta V_L y X_L** → más desfase.
- En los dos casos la **resistencia dominó** sobre las reactancias, así que el circuito fue **casi resistivo puro** (poco desfase).

---

## ⚠️ Un detalle honesto por si te preguntan

En el informe escrito, los **cálculos teóricos** daban el circuito **capacitivo** (φ negativo, −2,3°), pero los datos **medidos** dieron levemente **inductivo** (φ positivo). Esto pasa porque X_L y X_C son tan parecidos que cualquier pequeño error de medición cambia el signo. Si un profesor te marca la diferencia, la respuesta es:

> *"Las reactancias son casi iguales, el circuito está muy cerca de la resonancia, y por eso el signo del desfase es muy sensible al error experimental."*

La presentación usa los valores **medidos**, por eso muestra el circuito como prácticamente resistivo / levemente inductivo.
