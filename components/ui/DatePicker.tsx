"use client";

import * as React from "react";

import { CalendarDays, Calendar as CalendarIcon } from "lucide-react";
import {
  DateRange,
  SelectRangeEventHandler,
  useInput,
  SelectSingleEventHandler,
} from "react-day-picker";
import { format, isAfter, isBefore, isMatch, isValid, parse } from "date-fns";
import { cn } from "../../lib/utils";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Text from "./typography/Text";
import Caption from "./typography/Caption";
import { useFormField } from "./Form";
import InputMask from "react-input-mask";
import { MultiValueGeneric } from "react-select/dist/declarations/src/components/MultiValue";
import { inputVariants } from "@/lib/component-variants";
import { VariantProps } from "class-variance-authority";

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "disabled" | "readOnly">,
    VariantProps<typeof inputVariants> {
  assertiveText?: string;
  label?: string;
  onSelect: any;
  disabled?: true;
  single?: boolean;
  readOnly?: boolean;
  value?: any;
  iconClassName?: string;
  focusedClassName?: string;
  onKeyDown?: any;
}

export function DatePicker({
  className,
  assertiveText,
  label,
  onSelect,
  variant,
  size,
  disabled,
  readOnly,
  single = false,
  value,
  iconClassName,
  focusedClassName,
  onKeyDown,
}: Props) {
  const [selectedRange, setSelectedRange] = React.useState<DateRange>();
  const [fromValue, setFromValue] = React.useState<string>("");
  const [toValue, setToValue] = React.useState<string>("");
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [isBlured, setIsBlured] = React.useState<boolean>(false);
  const { error } = useFormField();

  const handleFromChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);

    const date = parse(e.target.value, "MM/dd/yyyy", new Date());

    setSelectedRange({ from: date, to: selectedRange?.to });
    onSelect({ from: e.target.value, to: toValue });

    // if (!isValid(date)) {
    //   onSelect({ from: "", to: toValue });
    //   return setSelectedRange({ from: undefined, to: undefined });
    // }
  };

  const handleToChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, "MM/dd/y", new Date());
    setSelectedRange({ from: selectedRange?.from, to: date });
    onSelect({ to: e.target.value, from: fromValue });

    // if (!isValid(date)) {
    //   onSelect({ to: "", from: fromValue });
    //   return setSelectedRange({ from: selectedRange?.from, to: undefined });
    // }
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range);

    if (range?.from) {
      setFromValue(format(range.from, "MM/dd/y"));

      onSelect({ from: format(range.from, "MM/dd/y"), to: toValue });
    } else {
      onSelect({ from: "", to: "" });
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "MM/dd/y"));
      onSelect({ to: format(range.to, "MM/dd/y"), from: fromValue });
    } else {
      onSelect({ from: "", to: "" });
      setToValue("");
    }

    setIsFocused(false);
  };

  React.useEffect(() => {
    if (value.from === "" && value.to === "") {
      setFromValue("");
      setToValue("");
      setSelectedRange(undefined);
    }
  }, [value?.from]);

  //single date mode handlers and state
  const [selected, setSelected] = React.useState<Date>();
  const [dateValue, setDateValue] = React.useState<string>();

  const handleSingleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);

    onSelect(e.target.value);
    const date = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (date) {
      setSelected(date);
      onSelect(e.target.value);

      if (!isValid(date)) {
        onSelect("");
        return setSelected(undefined);
      }
    } else {
      onSelect("");
      setDateValue("");
    }
  };

  const handleSingleSelectChange: SelectSingleEventHandler = (
    date: Date | undefined
  ) => {
    setSelected(date);

    setIsFocused(false);

    if (date) {
      setDateValue(format(date, "MM/dd/y"));
      const formattedDate = format(date, "MM/dd/y");
      onSelect(formattedDate);
    } else {
      onSelect("");
      setDateValue("");
    }
  };

  React.useEffect(() => {
    if (value === "") {
      setDateValue("");
    }
  }, [value]);

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(" w-full", className)}
    >
      <Text level={size === "small" ? 5 : 4}>{label}</Text>

      <Popover>
        <div className="flex items-center w-full relative">
          {single ? (
            <>
              <InputMask
                type="text"
                mask={"99/99/9999"}
                maskPlaceholder={null}
                className={cn(
                  inputVariants({
                    variant: "default",
                    size,
                    disabled,
                    readOnly,
                  }),
                  "focus:" + focusedClassName
                )}
                placeholder="mm/dd/yyyy"
                value={dateValue}
                onChange={handleSingleDateChange}
                onKeyDown={onKeyDown}
                disabled={disabled || readOnly}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {size === "small" ? (
                <div
                  className={` border-l ${disabled && "border-gray-300"}
                  ${readOnly && "border-none"}
                   border-gray-400 h-9 right-7 absolute`}
                ></div>
              ) : (
                <div
                  className={` border-l ${disabled && "border-gray-300"}
                  ${readOnly && "border-none"}
                  
                  border-gray-400 h-12  right-10 absolute`}
                ></div>
              )}
            </>
          ) : (
            <div
              className={cn(
                inputVariants({
                  variant: error ? "error" : isFocused ? "available" : variant,
                  size,
                  disabled,
                  readOnly,
                }),
                "focus-within:" + focusedClassName,
                error && "focus-within:border-red-400"
              )}
            >
              <InputMask
                type="text"
                mask={"99/99/9999"}
                maskPlaceholder={null}
                className={`w-[35%]  bg-transparent outline-none placeholder:text-muted-foreground    text-[14px] ${
                  error ? "bg-red-50" : ""
                } `}
                placeholder="mm/dd/yyyy"
                value={value?.from}
                onChange={handleFromChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <span className="">~</span>

              <InputMask
                type="text"
                mask={"99/99/9999"}
                maskPlaceholder={null}
                className={` w-[45%] px-1   bg-transparent outline-none placeholder:text-muted-foreground  disabled:mr-2 text-[14px]      ${
                  error ? "bg-red-50" : ""
                }
             
                 `}
                placeholder="mm/dd/yyyy"
                value={toValue}
                onChange={handleToChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {size === "small" ? (
                <div
                  className={` border-l ${disabled && "border-gray-300"}
                  ${readOnly && "border-none"}
                   border-gray-400 h-8 bottom-2 right-7 absolute`}
                ></div>
              ) : (
                <div
                  className={` border-l ${disabled && "border-gray-300"}
                  ${readOnly && "border-none"}
                  
                  border-gray-400 h-12 bottom-2  right-10 absolute`}
                ></div>
              )}
            </div>
          )}

          {disabled || readOnly ? (
            <CalendarDays
              size={size === "small" ? 18 : 22}
              className={cn(` text-blueInteraction-400  absolute ${
                size === "small" ? "top-3 right-1.5" : " right-2.5"
              }    
              ${disabled && "  text-gray-500"}
              ${readOnly && "  text-gray-500"}
               ${
                 iconClassName +
                 `${readOnly || disabled ? " text-gray-500" : ""}`
               }
              
              `)}
            />
          ) : (
            <PopoverTrigger asChild>
              <CalendarDays
                size={size === "small" ? 18 : 22}
                className={cn(` text-blueInteraction-400 cursor-pointer absolute ${
                  size === "small" ? "top-3 right-1.5" : " right-2.5"
                }    
              ${disabled && "  text-gray-500"}
              ${readOnly && "  text-gray-500"}
              ${
                iconClassName +
                `${readOnly || disabled ? " text-gray-500" : ""}`
              }
              
              `)}
              />
            </PopoverTrigger>
          )}
        </div>

        {single ? (
          <PopoverContent className="w-auto p-0 mt-4 mr-40  " align="center">
            <Calendar
              selected={new Date(value)}
              onSelect={handleSingleSelectChange}
              mode="single"
              numberOfMonths={single ? 1 : 2}
              defaultMonth={value ? new Date(value) : new Date()}
            />
          </PopoverContent>
        ) : (
          <PopoverContent className="w-auto p-0 mt-4 ml-10 " align="center">
            <Calendar
              selected={selectedRange}
              onSelect={handleRangeSelect}
              numberOfMonths={2}
              defaultMonth={fromValue ? new Date(fromValue) : new Date()}
            />
          </PopoverContent>
        )}
      </Popover>

      {!error && (
        <Caption className=" text-grayNeutral-400" level={1}>
          {assertiveText}
        </Caption>
      )}
    </div>
  );
}
