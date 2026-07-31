import { type VariantProps, cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-cloud/10 text-cloud/80",
        violet: "bg-electric-violet/15 text-electric-violet",
        cyan: "bg-soft-cyan/15 text-soft-cyan",
        alta: "bg-electric-violet/15 text-electric-violet",
        media: "bg-cyber-blue/15 text-cyber-blue",
        baja: "bg-cloud/10 text-cloud/60",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
