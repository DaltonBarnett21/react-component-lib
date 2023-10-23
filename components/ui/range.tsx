import React, { useEffect, useRef } from "react";
import { NumericFormat } from "react-number-format";

import { InputProps } from "./input";
import { Text } from "./typography/Text";
import { ListFilter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { FormMessage, useFormField } from "./Form";

import { VariantProps } from "class-variance-authority";
import { inputVariants } from "../lib/component-variants";
import { cn } from "../lib/utils";
import { Caption } from "./typography/Caption";

interface MenuClasses {
  inputs?: string;
  clearButton?: string;
  setButton?: string;
}

interface Props
  extends Omit<
      React.AllHTMLAttributes<HTMLDivElement>,
      "disabled" | "readOnly" | "size"
    >,
    VariantProps<typeof inputVariants> {
  onChange?: any;
  className?: string;
  assertiveText?: string;
  label: string;
  placeholder?: string;
  iconClassName?: string;
  focusedClassName?: string;
  value: any;
  allowNegative?: boolean;
  size: "small" | "large";
  MenuClasses?: MenuClasses;
}

export const Range = ({
  onChange,
  className,
  size,
  assertiveText,
  label,
  variant,
  disabled,
  readOnly,
  placeholder,
  iconClassName,
  focusedClassName,
  value,
  allowNegative = false,
  MenuClasses,
}: Props) => {
  const [min, setMin] = React.useState<string>();
  const [max, setMax] = React.useState<string>();
  const [rangePlaceHolder, setRangePlaceHolder] = React.useState<string>();
  const [single, setSingle] = React.useState<string>();
  const [isFocused, setIsFocused] = React.useState<boolean>();
  const { error } = useFormField();

  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace("$", "");
    setSingle(value.replace(",", ""));
    onChange({ single: value, min: "", max: "" });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace("$", "");

    setMax(value.replace(",", ""));
    onChange({ single: "", max: value, min: min });
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace("$", "");
    setMin(value.replace(",", ""));
    onChange({ single: "", max: max, min: value });
  };

  const handleSet = () => {
    setRangePlaceHolder("$" + min + " to " + "$" + max);
  };

  const handleClear = () => {
    setRangePlaceHolder("");
    setMin("");
    setMax("");
    onChange({ single: "", max: "", min: "" });
  };

  useEffect(() => {
    if (value.min === "" && value.max === "") {
      setRangePlaceHolder("");
      setMin("");
      setMax("");
    }
  }, [value]);

  return (
    <Popover>
      <div className="">
        <Text level={size === "small" ? 5 : 4}>{label}</Text>
        <div className="flex relative">
          {rangePlaceHolder && value.min && value.max ? (
            <input
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setRangePlaceHolder("");
                  setMin("");
                  setMax("");
                  onChange({ single: "", max: "", min: "" });
                }
              }}
              type="text"
              value={rangePlaceHolder}
              className={cn(inputVariants({ variant, className, size }))}
            />
          ) : (
            <NumericFormat
              decimalScale={2}
              prefix={"$"}
              thousandSeparator=","
              className={cn(
                inputVariants({ variant, className, size, readOnly, disabled }),
                "focus:" + focusedClassName,
                error && "border-red-400 bg-red-50"
              )}
              placeholder={placeholder}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={handleSingleChange}
              value={value.single}
              allowNegative={allowNegative}
            />
          )}
          {size === "small" ? (
            <div className=" border-l border-gray-400 h-[80%] right-7 top-1 absolute"></div>
          ) : (
            <div className=" border-l border-gray-400 h-[80%] right-10 top-1.5 absolute"></div>
          )}

          <PopoverTrigger
            className={cn(
              ` text-blueInteraction-400 cursor-pointer absolute  ${
                size === "small" ? "right-1.5 top-3" : " right-2 bottom-5"
              } `,
              iconClassName
            )}
            asChild
          >
            <ListFilter size={size === "small" ? 18 : 23} />
          </PopoverTrigger>
        </div>
        <Caption className=" text-grayNeutral-400 mt-1 " level={1}>
          {assertiveText}
        </Caption>

        <PopoverContent className="mt-3 absolute w-[15.5rem] -right-2 max-w-[265px]">
          <Text level={2} weight="medium">
            Range
          </Text>
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <NumericFormat
                decimalScale={2}
                prefix={"$"}
                thousandSeparator=","
                className={cn(
                  inputVariants({ size: "small" }),
                  MenuClasses?.inputs
                )}
                onChange={handleMinChange}
                value={value.min}
                allowNegative={allowNegative}
              />
            </div>
            <div>
              <NumericFormat
                decimalScale={2}
                prefix={"$"}
                thousandSeparator=","
                className={cn(
                  inputVariants({ size: "small" }),
                  MenuClasses?.inputs
                )}
                onChange={handleMaxChange}
                value={value.max}
                allowNegative={allowNegative}
              />
            </div>
          </div>
          {max && <FormMessage className="mt-1" />}

          <div className=" grid grid-cols-3 gap-2 mt-2">
            <div></div>
            <Button
              className={cn(MenuClasses?.clearButton)}
              onClick={handleClear}
              size="small"
              variant="secondary"
            >
              Clear
            </Button>

            <Button
              className={cn(MenuClasses?.setButton)}
              disabled={
                !value.min ||
                !value.max ||
                //@ts-ignore
                error?.range?.message
              }
              onClick={handleSet}
              size="small"
            >
              Set
            </Button>
          </div>
        </PopoverContent>
      </div>
    </Popover>
  );
};
