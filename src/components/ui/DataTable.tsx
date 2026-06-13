"use client";

import { motion } from "motion/react";

export interface DataItem {
  k: string;
  v: string;
  hot?: boolean; // destacar
}

interface DataTableProps {
  title: string;
  items: DataItem[];
  baseDelay?: number;
  accent?: string; // css var
}

export default function DataTable({ title, items, baseDelay = 0.4, accent = "--color-accent" }: DataTableProps) {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: baseDelay }}
        className="mb-3 font-mono text-xs uppercase tracking-[0.22em]"
        style={{ color: `var(${accent})` }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((it, i) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.06 + i * 0.05 }}
            className={`flex items-center justify-between rounded-lg border px-4 py-2.5 ${
              it.hot
                ? "border-[var(--color-warn)] bg-[var(--color-warn)]/10"
                : "border-[var(--color-divider)] bg-[var(--color-bg-card)]/40"
            }`}
          >
            <span className="font-mono text-sm text-[var(--color-text-secondary)]">{it.k}</span>
            <span className={`font-mono text-base font-semibold ${it.hot ? "text-[var(--color-warn)]" : "text-[var(--color-text-primary)]"}`}>
              {it.v}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
