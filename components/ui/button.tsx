import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-deep-space disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "gradient-brand text-cloud shadow-lg shadow-electric-violet/20 hover:brightness-110 active:brightness-95",
        secondary:
          "border border-cloud/20 bg-cloud/5 text-cloud hover:border-cloud/40 hover:bg-cloud/10",
        ghost: "text-cloud/80 hover:bg-cloud/10 hover:text-cloud",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function Button({
  className,
  variant,
  size,
  href,
  onClick,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
}
