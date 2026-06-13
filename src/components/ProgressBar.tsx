"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--color-divider)] z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--color-accent-2)] to-[var(--color-accent)]"
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 220, damping: 30 }}
      />
    </div>
  );
}
