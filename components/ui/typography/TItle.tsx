import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";

const titleVariants = cva(" ", {
  variants: {
    variant: {
      1: "text-6xl font-bold ",
      2: "text-5xl font-bold",
      3: "text-4xl font-bold",
      4: "text-3xl font-medium",
      5: "text-2xl font-medium",
      6: "text-xl font-medium",
    },
  },
  defaultVariants: {
    variant: 1,
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  children: any;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = React.forwardRef<HTMLElement, TitleProps>(
  ({ className, level, children, ...props }) => {
    const Heading: any = `h${level}`;

    return (
      <Heading
        className={cn(titleVariants({ className, variant: level }))}
        {...props}
      >
        {children}
      </Heading>
    );
  }
);

export default Title;
