"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, disabled, checked, className, ...props }, ref) => (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-2 "
        htmlFor={id}
        data-ripple-dark="true"
      >
        <input
          type="checkbox"
          className={cn(
            `peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blueInteraction-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blueInteraction-400 checked:bg-blueInteraction-400 checked:disabled:bg-gray-400 before:bg-blueInteraction-200 before:disabled:bg-transparent hover:before:opacity-50 disabled:border-gray-400 disabled:cursor-not-allowed`,
            className
          )}
          id={id}
          ref={ref}
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="white"
            stroke="white"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
      <label className={`${disabled && "text-gray-400"}`}>{label}</label>
    </div>
  )
);

export { Checkbox };
