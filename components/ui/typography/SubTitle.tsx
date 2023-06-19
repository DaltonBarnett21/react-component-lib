import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";

const titleVariants = cva(" ", {
  variants: {
    level: {
      1: " text-[26px] leading-[34px] ",
      2: "text-[24px] leading-[30px] ",
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

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  children: any;
  level: 1 | 2;
}

const SubTitle = React.forwardRef<HTMLElement, SubTitleProps>(
  ({ className, level, weight, children, ...props }) => {
    return (
      <span
        className={cn(titleVariants({ className, level: level, weight }))}
        {...props}
      >
        {children}
      </span>
    );
  }
);

export default SubTitle;
