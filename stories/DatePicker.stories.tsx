import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { DatePicker } from "../components/ui/DatePicker";
import { toast } from "../components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  useFormField,
} from "../components/ui/Form";
import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";
import { Calendar } from "../components/ui/calendar";
import { DateRange } from "react-day-picker";

export default {
  title: "Example/DatePicker",
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DatePicker> = (args: any) => (
  <DatePicker {...args} />
);

export const DatePickerSingle = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [isPickerTriggered, setIsPicketTriggered] = React.useState(false);

  const FormSchema = z.object({
    dateRange: z.object({
      from: z.date(),
      to: z.date().optional(),
    }),
  });
  const form = useForm<any>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: any) {
    alert(JSON.stringify(data));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex">
        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <div
                  className={cn(
                    "w-[300px] relative justify-center text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center h-12">
                    <Input
                      className={`  ${date && " placeholder:text-black-300"}`}
                      placeholder={`${
                        date?.from
                          ? date.to
                            ? format(date.from, "P") +
                              " - " +
                              format(date.to, "P")
                            : format(date.from, "P")
                          : "Pick a date"
                      }`}
                    />

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
                      <CalendarIcon className=" h-5 w-4 p-2  absolute right-0  cursor-pointer text-blueInteraction-400" />
                    </PopoverTrigger>
                  </div>
                </div>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="range"
                    selected={date}
                    onSelect={(item) => {
                      setDate(item);
                      field.onChange(item);
                    }}
                    numberOfMonths={1}
                    defaultMonth={date?.from}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
