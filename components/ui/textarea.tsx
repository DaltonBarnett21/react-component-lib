import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { useFormField } from "./Form";
import Caption from "./typography/Caption";
import { AlertTriangle } from "lucide-react";

const textAreaVariants = cva(
  "w-full border mt-[5px] mb-[5px] rounded-md  transition-all duration-400 bg-transparent text-md p-[12px]  placeholder:text-muted-foreground   disabled:bg-gray-300 disabled:border-none  disabled:cursor-not-allowed disabled:opacity-50",
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label: string;
  assertiveText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, assertiveText, variant, className, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <div className="w-full mt-4 mb-4   ">
        <label className="">{label}</label>
        {error ? (
          <>
            <textarea
              rows={8}
              className={cn(textAreaVariants({ variant: "error", className }))}
              ref={ref}
              {...props}
            />
            <Caption className="flex items-center text-red-400" level={1}>
              <AlertTriangle size={20} className="mr-1" />
              {error?.message}
            </Caption>
          </>
        ) : (
          <>
            <textarea
              rows={8}
              className={cn(textAreaVariants({ variant, className }))}
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
Textarea.displayName = "Textarea";

export { Textarea };
