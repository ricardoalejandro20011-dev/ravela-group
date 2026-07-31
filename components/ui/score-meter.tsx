"use client";

import { motion } from "framer-motion";

export function ScoreMeter({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-cloud/80">{label}</span>
        <span className="font-heading font-semibold text-cloud">{value}/100</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cloud/10">
        <motion.div
          className="gradient-brand h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
