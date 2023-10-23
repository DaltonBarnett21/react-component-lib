import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import InputMask from "react-input-mask";

import { useFormField } from "./Form";

import { Text } from "./typography/Text";
import { NumericFormat, PatternFormat } from "react-number-format";
import { inputVariants } from "../lib/component-variants";
import { cn } from "../lib/utils";
import { Caption } from "./typography/Caption";

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "disabled" | "readOnly"
    >,
    VariantProps<typeof inputVariants> {
  label: string;
  assertiveText?: string;
  size?: any;
  disabled?: boolean;
  readonly?: boolean;
  focusedClassName?: string;
  format?: "phoneNumber" | "currency" | null;
  allowNegative?: boolean;
  onChange?: any;
  value?: any;
  onKeyDown?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      readOnly,
      size,
      assertiveText,
      label,
      variant,
      type,
      focusedClassName,
      allowNegative,
      format,
      ...props
    },
    ref
  ) => {
    const { error } = useFormField();

    return (
      <div className="w-full flex flex-col justify-center">
        <Text level={size === "small" ? 5 : 4}>{label}</Text>
        {error ? (
          <>
            <input
              type={type}
              className={cn(
                inputVariants({ variant: "error", size, className })
              )}
              ref={ref}
              autoComplete="false"
              {...props}
            />
          </>
        ) : format === "phoneNumber" ? (
          <>
            <PatternFormat
              className={cn(
                inputVariants({ variant, className, size, disabled, readOnly }),
                " focus:" + focusedClassName
              )}
              disabled={disabled}
              readOnly={readOnly!}
              autoComplete="false"
              placeholder={props.placeholder}
              onValueChange={(val: any) => {
                const { value } = val;
                props.onChange(value);
              }}
              format="+1 (###) ### ####"
              mask="_"
              value={props.value}
              name={props.name}
              onKeyDown={props.onKeyDown}
            />
            <Caption className=" text-grayNeutral-400 " level={1}>
              {assertiveText}
            </Caption>
          </>
        ) : format === "currency" ? (
          <>
            <NumericFormat
              decimalScale={2}
              prefix={"$"}
              thousandSeparator=","
              className={cn(
                inputVariants({ variant, className, size, readOnly, disabled }),
                "focus:" + focusedClassName,
                error && "border-red-400 bg-red-50"
              )}
              placeholder={props.placeholder}
              onValueChange={(val: any) => {
                const { value } = val;
                props.onChange(value);
              }}
              onKeyDown={props.onKeyDown}
              value={props.value}
              allowNegative={allowNegative}
            />
            <Caption className=" text-grayNeutral-400 " level={1}>
              {assertiveText}
            </Caption>
          </>
        ) : (
          <>
            <input
              type={type}
              className={cn(
                inputVariants({ variant, className, size, disabled, readOnly }),
                " focus:" + focusedClassName
              )}
              ref={ref}
              disabled={disabled}
              readOnly={readOnly!}
              autoComplete="false"
              {...props}
            />

            <Caption className=" text-grayNeutral-400 " level={1}>
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
