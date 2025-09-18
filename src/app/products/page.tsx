import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define badge styles using cva
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-amber-100 text-amber-800",
        secondary: "bg-emerald-100 text-emerald-700",
        outline: "border border-gray-200 bg-transparent text-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={badgeVariants({ variant, className })} {...props} />;
}

export { Badge, badgeVariants };