"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import Text from "./typography/Text";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid ", className)}
      {...props}
      ref={ref}
    />
  );
});

interface Props
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
  indicatorClassName?: string;
}

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Props
>(
  (
    { indicatorClassName, label, disabled, className, children, ...props },
    ref
  ) => {
    return (
      <>
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(
            "aspect-square relative h-4 w-4  flex items-center justify-center rounded-full border border-blueInteraction-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blueInteraction-400 checked:bg-blueInteraction-400  before:bg-blueInteraction-200 before:disabled:bg-transparent hover:before:opacity-50 disabled:border-gray-400 disabled:cursor-not-allowed",
            className
          )}
          disabled={disabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle
              className={cn(
                `h-2.5 w-2.5 fill-current text-blueInteraction-400 ${
                  disabled && "text-gray-400 h-3 w-3"
                }`,
                indicatorClassName
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <Text className={`${disabled && "text-gray-400"}`} level={4}>
          {label}
        </Text>
      </>
    );
  }
);
Radio.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, Radio };
