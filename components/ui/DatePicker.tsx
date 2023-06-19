"use client";

import * as React from "react";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "./input";

export function DatePicker() {
  const [date, setDate] = React.useState<any>({
    from: "",
    to: "",
  });
  //kinda hackey solution, I couldn't get the focus state to work in tailwind so I can up with this for now
  const [isPickerTriggered, setIsPicketTriggered] = React.useState(false);
  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <div
          className={cn(
            "w-[300px] justify-center text-left font-normal relative",
            !date && "text-muted-foreground"
          )}
        >
          <div className="flex items-center relative h-12">
            <Input
              className={` ${date && " placeholder:text-black-300"}`}
              placeholder={`${
                date?.from
                  ? date.to
                    ? format(date.from, "P") + " - " + format(date.to, "P")
                    : format(date.from, "P")
                  : "Pick a date"
              }`}
            />
            <div className=" absolute px-2">{}</div>

            <PopoverTrigger
              className={`  ${
                isPickerTriggered
                  ? "border-2 border-blueInteraction-400"
                  : "border-gray-400 border"
              }   h-full w-[15%]

             `}
              asChild
              onClick={() => setIsPicketTriggered(true)}
            >
              <CalendarIcon className=" h-5 w-4 p-2  absolute right-0 cursor-pointer text-blueInteraction-400" />
            </PopoverTrigger>
          </div>
        </div>

        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <button onClick={() => alert(JSON.stringify(date))}>SUBMIT</button>
    </div>
  );
}
