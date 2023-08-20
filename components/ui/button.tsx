import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  " flex items-center shadow-xl rounded-md w-full  justify-center  space-x-2 font-semibold  transition-colors disabled:cursor-not-allowed disabled:shadow-none disabled:hover:none",
  {
    variants: {
      variant: {
        primary:
          "bg-blueInteraction-400 text-white-50 hover:bg-blueInteraction-600 hover:bg-blueInteraction-400 disabled:opacity-40  ",
        secondary:
          " border-2 border-blueInteraction-400 disabled:opacity-40 text-blueInteraction-400 hover:text-blueInteraction-700 ",
        destructive:
          "bg-red-500 text-white-50 hover:bg-red-600 disabled:opacity-40 disabled:hover:bg-red-500",
        disabled:
          "bg-grayNeutral-200 text-white-50 cursor-not-allowed shadow-none",
        text: " bg-white-50 text-blueInteraction-400 shadow-none hover:text-blueInteraction-700 hover:shadow-md hover:border ",
        link: "bg-white-50 text-blueInteraction-400 shadow-none underline hover:text-blueInteraction-700 ",
      },
      size: {
        default: " h-[50px] py-[12px] px-[28px] text-[22px] leading-[26px] ",
        small: "h-[38px] px-[20px] py-[8px] text-[18px] leading-[22px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
