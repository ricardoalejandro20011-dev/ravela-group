import { cn } from "@/lib/utils/cn";

/**
 * Isotipo provisional de Ravela Group: nodos conectados por líneas,
 * representando datos, automatización y flujo de información.
 * Ver sección 8 del brief de marca — diseño minimalista, sin exceso
 * de detalle, apto para favicon y monograma.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ravela-mark-gradient" x1="2" y1="4" x2="30" y2="28">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        d="M7 23L16 8L25 23"
        stroke="url(#ravela-mark-gradient)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 15H20.5"
        stroke="url(#ravela-mark-gradient)"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="2.75" fill="#22D3EE" />
      <circle cx="7" cy="23" r="2.75" fill="#7C3AED" />
      <circle cx="25" cy="23" r="2.75" fill="#2563EB" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className={markClassName} />
      <span className="font-heading text-lg font-semibold tracking-tight text-cloud">
        RAVELA<span className="text-soft-cyan">GROUP</span>
      </span>
    </span>
  );
}
