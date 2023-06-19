import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const captionVariants = cva(" ", {
  variants: {
    level: {
      1: "text-[12px] leading-[18px]  ",
      2: "text-[10px] leading-[14px]",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export interface CaptionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof captionVariants> {
  children: any;
  level: 1 | 2;
}

const Caption = React.forwardRef<HTMLElement, CaptionProps>(
  ({ className, level, children, ...props }) => {
    return (
      <p
        className={cn(captionVariants({ className, level: level }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default Caption;
