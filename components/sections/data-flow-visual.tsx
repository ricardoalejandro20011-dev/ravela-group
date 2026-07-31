"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "a", x: 60, y: 70, r: 5, color: "var(--color-electric-violet)" },
  { id: "b", x: 260, y: 30, r: 4, color: "var(--color-cyber-blue)" },
  { id: "c", x: 340, y: 130, r: 6, color: "var(--color-soft-cyan)" },
  { id: "d", x: 150, y: 170, r: 4, color: "var(--color-cyber-blue)" },
  { id: "e", x: 400, y: 40, r: 3, color: "var(--color-electric-violet)" },
  { id: "f", x: 30, y: 180, r: 3, color: "var(--color-soft-cyan)" },
];

const edges: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["a", "d"],
  ["d", "c"],
  ["b", "e"],
  ["a", "f"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

/**
 * Fondo decorativo ambiental para el hero: nodos y líneas que sugieren
 * datos, automatización y flujo de información (ver sección 8 del brief
 * de marca). Deliberadamente sutil — no compite con el copy.
 */
export function DataFlowVisual({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 430 210" className="h-full w-full" fill="none">
        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#data-flow-gradient)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 1.4, delay: i * 0.15, ease: "easeOut" }}
            />
          );
        })}
        <defs>
          <linearGradient id="data-flow-gradient" x1="0" y1="0" x2="430" y2="210">
            <stop offset="0%" stopColor="var(--color-electric-violet)" />
            <stop offset="55%" stopColor="var(--color-cyber-blue)" />
            <stop offset="100%" stopColor="var(--color-soft-cyan)" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
