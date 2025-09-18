import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define card styles using cva
const cardVariants = cva("bg-white rounded-lg shadow-lg transition-shadow", {
  variants: {
    variant: {
      default: "shadow-lg hover:shadow-xl",
      elevated: "shadow-xl hover:shadow-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const cardContentVariants = cva("p-6", {
  variants: {},
  defaultVariants: {},
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardContentVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return <div className={cardVariants({ variant, className })} {...props} />;
}

function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cardContentVariants({ className })} {...props} />;
}

export { Card, CardContent };