import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import Caption from "./typography/Caption";
import { useFormField } from "./Form";
import { AlertTriangle } from "lucide-react";

const inputVariants = cva(
  "flex w-full mt-[5px] mb-[5px] rounded-md  transition-all duration-400  p-[12px]  bg-transparent text-md   placeholder:text-muted-foreground   disabled:bg-gray-300 disabled:border-none  disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "border-gray-400 focus:ring-blueInteraction-400 focus:border-blueInteraction-400 border  focus:ring-2",
        available:
          "border-blueInteraction-400 focus:ring-blueInteraction-400 focus:border-blueInteraction-400 border  focus:ring-2",
        display:
          " outline-none ring-0  read-only:focus:border-none read-only:focus:ring-0 ",
        error: "bg-red-50 border-2 border-red-400  outline-none  ring-0  ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  assertiveText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, assertiveText, label, variant, type, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <div className="w-full mt-4 mb-4   ">
        <label className="">{label}</label>
        {error ? (
          <>
            <input
              type={type}
              className={cn(inputVariants({ variant: "error", className }))}
              ref={ref}
              {...props}
            />
            {/* <Caption className="flex items-center text-red-400" level={1}>
              <AlertTriangle size={20} className="mr-1" />
              {error?.message}
            </Caption> */}
          </>
        ) : (
          <>
            <input
              type={type}
              className={cn(inputVariants({ variant, className }))}
              ref={ref}
              {...props}
            />
            <Caption className=" text-grayNeutral-400" level={1}>
              {assertiveText}
            </Caption>
          </>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
