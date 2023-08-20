import Link from "next/link";
import React from "react";
import CodeSnippet from "./internal-app-only/CodeSnippet";
import Text from "@/components/ui/typography/Text";
import Title from "@/components/ui/typography/TItle";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { DatePicker } from "@/components/ui/DatePicker";

const DatePickerExample = () => {
  const formSchema = z.object({
    dateRange: z.object({
      from: z.string().nonempty("Required"),
      to: z.string().nonempty("Required"),
    }),
    dateSingle: z.string().nonempty({ message: "Required" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: {
        from: "",
        to: "",
      },
      dateSingle: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };
  return (
    <main className=" border border-gray-400 shadow-md p-4 ">
      <Title className="mb-4" level={4}>
        DatePicker
      </Title>
      <div className=" ">
        <Form {...form}>
          <form
            className="grid grid-cols-6 gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <DatePicker
                      label="Date Range"
                      assertiveText="assertiveText"
                      onSelect={(value: string) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <DatePicker
                      label="Date Range"
                      disabled
                      assertiveText="assertiveText"
                      onSelect={(value: string) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <DatePicker
                      label="Date Range"
                      variant="available"
                      size="small"
                      assertiveText="assertiveText"
                      onSelect={(value: string) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateSingle"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <DatePicker
                      label="Date Single"
                      single={true}
                      assertiveText="assertiveText"
                      onSelect={(value: string) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <Text level={4} className="mt-4 mb-4 text-center">
        Note. All input elements need to be in the context of a form! To see a
        full example on constructing a form see{" "}
        <Link href={"/forms"}>
          <Text level={4} weight="medium" className=" text-blue-300">
            Forms
          </Text>
        </Link>
      </Text>
      <CodeSnippet
        code={`
        <DatePicker
          label="Date Range"
          assertiveText="assertiveText"
          onSelect={(value: string) => {
           field.onChange(value);
          }}
        />
        <DatePicker
         label="Date Range"
         disabled
         assertiveText="assertiveText"
         onSelect={(value: string) => {
          field.onChange(value);
        }}
       />
       <DatePicker
         label="Date Range"
         variant="available"
         size="small"
         assertiveText="assertiveText"
         onSelect={(value: string) => {
            field.onChange(value);
         }}
        />
        <DatePicker
         label="Date Single"
         single={true}
         assertiveText="assertiveText"
         onSelect={(value: string) => {
           field.onChange(value);
         }}
        />
      


        `}
      />
    </main>
  );
};

export default DatePickerExample;
