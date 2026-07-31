import { cn } from "@/lib/utils/cn";

/**
 * Isotipo de Ravela Group: un círculo (marca de identidad, integridad del
 * proceso) atravesado por una onda (flujo de datos y automatización).
 * Colores vía CSS custom properties para heredar el tema automáticamente.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ravela-wave-gradient" x1="14" y1="70" x2="86" y2="30">
          <stop offset="0%" stopColor="var(--color-electric-violet)" />
          <stop offset="55%" stopColor="var(--color-cyber-blue)" />
          <stop offset="100%" stopColor="var(--color-soft-cyan)" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke="var(--color-cloud)"
        strokeWidth="7"
      />
      <path
        d="M17 60 C 30 38, 42 38, 50 52 C 58 66, 70 66, 83 44"
        stroke="url(#ravela-wave-gradient)"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
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
