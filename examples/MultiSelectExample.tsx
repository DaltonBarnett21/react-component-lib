import Title from "@/components/ui/typography/TItle";
import Text from "@/components/ui/typography/Text";
import Link from "next/link";
import React from "react";
import CodeSnippet from "./internal-app-only/CodeSnippet";
import MultiSelect from "@/components/ui/MultiSelect";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const multiSelectOptions = [
  { value: 0, label: "Sports" },
  { value: 1, label: "Music" },
  { value: 2, label: "Woodwork" },
  { value: 3, label: "Outdoors" },
];

const MultiSelectExample = () => {
  const formSchema = z.object({
    interests: z
      .object({
        value: z.number(),
        label: z.string(),
      })
      .array()
      .min(1, {
        message: "Interests are required",
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };
  return (
    <main className=" border border-gray-400 shadow-md p-4">
      <Title className="mb-4" level={4}>
        MultiSelect
      </Title>
      <div className=" ">
        <div></div>
        <Form {...form}>
          <form
            className="grid grid-cols-6 gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiSelect
                      options={multiSelectOptions}
                      size="small"
                      onChange={(selected: any) => {
                        field.onChange(
                          selected.map((val: any) => {
                            return val;
                          })
                        );
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
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiSelect
                      options={multiSelectOptions}
                      size="small"
                      variant={"available"}
                      onChange={(selected: any) => {
                        field.onChange(
                          selected.map((val: any) => {
                            return val;
                          })
                        );
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
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiSelect
                      options={multiSelectOptions}
                      size="small"
                      variant={"display"}
                      onChange={(selected: any) => {
                        field.onChange(
                          selected.map((val: any) => {
                            return val;
                          })
                        );
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
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiSelect
                      options={multiSelectOptions}
                      size="small"
                      disabled
                      onChange={(selected: any) => {
                        field.onChange(
                          selected.map((val: any) => {
                            return val;
                          })
                        );
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
     const multiSelectOptions = [
       { value: 0, label: "Sports" },
       { value: 1, label: "Music" },
       { value: 2, label: "Woodwork" },
       { value: 3, label: "Outdoors" },
     ];
     <MultiSelect
        options={multiSelectOptions}
        size="small"
        onChange={(selected: any) => {
            field.onChange(
              selected.map((val: any) => {
              return val;
              })
           );
        }}
        value={field.value}
      />
      <MultiSelect
        options={multiSelectOptions}
        size="small"
        variant={"available"}
        onChange={(selected: any) => {
        field.onChange(
          selected.map((val: any) => {
            return val;
          })
        );
      }}
      value={field.value}
    />
    <MultiSelect
      options={multiSelectOptions}
      size="small"
      variant={"display"}
      onChange={(selected: any) => {
        field.onChange(
            selected.map((val: any) => {
                return val;
            })
          );
        }}
      value={field.value}
      />
    <MultiSelect
      options={multiSelectOptions}
      size="small"
      disabled
      onChange={(selected: any) => {
        field.onChange(
          selected.map((val: any) => {
            return val;
          })
        );
      }}
      value={field.value}
    />

    
  `}
      />
    </main>
  );
};

export default MultiSelectExample;
