import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const textVariants = cva(" ", {
  variants: {
    level: {
      1: "text-[22px] leading-[28px]  ",
      2: "text-[20px] leading-[26px]",
      3: "text-[18px] leading-[26px]",
      4: "text-[16px] leading-[24px]",
      5: "text-[14px] leading-[20px]",
    },
    weight: {
      medium: "font-medium",
      regular: "font-normal",
    },
  },
  defaultVariants: {
    level: 1,
    weight: "regular",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children: any;
  level?: 1 | 2 | 3 | 4 | 5;
  weight?: "medium" | "regular";
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, level, weight, children, ...props }) => {
    return (
      <p
        className={cn(
          textVariants({ className, level: level, weight: weight })
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default Text;
