import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/typography/Text";
import MultiSelect from "@/components/ui/MultiSelect";
import Range from "@/components/ui/range";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "../components/ui/select";
import { DatePicker } from "@/components/ui/DatePicker";
import { RadioGroup, Radio } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import React, { useEffect } from "react";
import Chip from "@/components/ui/chip";
import { Chips, typeEnum } from "./internal-app-only/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import ButtonGroup from "@/components/ui/button-group";

const multiSelectOptions = [
  { value: 0, label: "Sports" },
  { value: 1, label: "Music" },
  { value: 2, label: "Woodwork" },
  { value: 3, label: "Outdoors" },
];

const paymentTypeOptions = [
  { value: "A", label: "Type A" },
  { value: "B", label: "Type B" },
  { value: "C", label: "Type C" },
  { value: "D", label: "Type D" },
];

const singleSelectOptions = [
  { value: 0, label: "d@gmail.com" },
  { value: 1, label: "d@yahoo.com" },
  { value: 2, label: "d@mail.com" },
];

const FormExample: any = () => {
  const formSchema = z.object({
    username: z.string().optional(),
    phoneNumber: z.string().optional(),
    paymentType: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .array()
      .optional(),
    interests: z
      .object({
        value: z.number(),
        label: z.string(),
      })
      .array()
      .optional(),
    dateRange: z
      .object({
        from: z.string().optional(),
        to: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        //@ts-ignore
        const start = new Date(data?.from);
        //@ts-ignore
        const end = new Date(data?.to);

        if (end < start) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["dateRange"],
            message: "End Date cannot be less than Start Date",
          });
        }
      }),
    createdDate: z
      .object({
        from: z.string().optional(),
        to: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        //@ts-ignore
        const start = new Date(data?.from);
        //@ts-ignore
        const end = new Date(data?.to);

        if (end < start) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["dateRange"],
            message: "End Date cannot be less than Start Date",
          });
        }
      }),
    dateSingle: z.string().optional(),
    email: z.string().nonempty({ message: "Email is Required" }),
    type: z.enum([typeEnum.ALL, typeEnum.MENTIONS, typeEnum.NONE], {
      required_error: "You need to select a notification type.",
    }),
    paymentAmount: z
      .object({
        single: z.string().optional(),
        min: z.string().optional(),
        max: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        const min = Number(data.min ? data.min!.replace(",", "") : "");
        const max = Number(data.max ? data.max!.replace(",", "") : "");

        if (min > max) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            //may cause issues with multiple, test it later
            path: ["paymentAmount"],
            message: "Min cannot be greater than max",
          });
        }

        if (max && !min) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["paymentAmount"],
            message: "Min is Required",
          });
        }
      }),
    pendingBalance: z
      .object({
        single: z.string().optional(),
        min: z.string().optional(),
        max: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        const min = Number(data.min ? data.min!.replace(",", "") : "");
        const max = Number(data.max ? data.max!.replace(",", "") : "");

        if (min > max) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            //may cause issues with multiple, test it later
            path: ["paymentAmount"],
            message: "Min cannot be greater than max",
          });
        }

        if (max && !min) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["paymentAmount"],
            message: "Min is Required",
          });
        }
      }),
    airplaneMode: z.boolean(),
  });

  const defaultValues = {
    username: "",
    interests: multiSelectOptions,
    email: singleSelectOptions[0].label,
    dateRange: {
      from: "",
      to: "",
    },
    createdDate: {
      from: "",
      to: "",
    },
    dateSingle: "",
    type: typeEnum.NONE,
    paymentAmount: {
      single: "",
      min: "",
      max: "",
    },
    airplaneMode: true,
    phoneNumber: "",
    paymentType: paymentTypeOptions,
    pendingBalance: {
      single: "",
      min: "",
      max: "",
    },
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };

  const [chips, setChips] = React.useState<Chips>(defaultValues);

  const convertArrayToString = (array: any) => {
    let string = "";
    array?.map((val: any, index: number, data: any) => {
      if (index + 1 !== data.length) {
        string = string + val.label + ", ";
      } else {
        string = string + val.label;
      }
    });
    return string;
  };

  const interests = convertArrayToString(chips.interests);
  const paymentTypes = convertArrayToString(chips.paymentType);

  //can be customized for your needs
  const deleteTag = (chipName: any) => {
    // change this based on your needs and data shape
    if (chipName === "interests" || chipName === "paymentType") {
      form.setValue(chipName, []);
      setChips({ ...chips, [chipName]: [] });
    } else if (chipName === "email") {
      form.setValue(chipName, "");
      setChips({ ...chips, [chipName]: "" });
    } else {
      form.resetField(chipName);
      //@ts-ignore
      setChips({ ...chips, [chipName]: defaultValues[chipName] });
    }
  };

  useEffect(() => {
    setChips({
      ...chips,
      paymentType: [{ value: 0, label: "All" }],
      interests: [{ value: 0, label: "All" }],
    });
  }, []);

  return (
    <Card>
      <Form {...form}>
        <form className="  " onSubmit={form.handleSubmit(onSubmit)}>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            atque pariatur aspernatur ipsam quo nesciunt, fugiat, at culpa nulla
            consectetur laboriosam esse architecto sed natus ratione excepturi
            doloremque, commodi maxime.
          </CardDescription>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label="UserName"
                        size="small"
                        assertiveText="assertiveText"
                        focusedClassName="border-blue-300"
                        placeholder="UserName"
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLInputElement>
                        ) => {
                          if (e.key === "Tab") {
                            setChips({ ...chips, username: field.value });
                          }
                          if (e.key === "Backspace") {
                            setChips({ ...chips, username: "" });
                          }
                        }}
                        onChange={field.onChange}
                        name={field.name}
                        onBlur={() => {
                          field.onBlur();
                          setChips({ ...chips, username: field.value });
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label="Phone Number"
                        size="small"
                        format={"phoneNumber"}
                        assertiveText="assertiveText"
                        focusedClassName="border-blue-300"
                        placeholder="phoneNumber"
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLInputElement>
                        ) => {
                          if (e.key === "Tab") {
                            setChips({ ...chips, phoneNumber: field.value });
                          }
                          if (e.key === "Backspace") {
                            setChips({ ...chips, phoneNumber: "" });
                          }
                        }}
                        onChange={field.onChange}
                        name={field.name}
                        onBlur={() => {
                          field.onBlur();
                          setChips({ ...chips, phoneNumber: field.value });
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
                        iconClassName="fill-blue-300 text-blue-300  "
                        focusedClassName="border-blue-300"
                        checkedClassName=" border-blue-300 checked:bg-blue-300 checked:border-blue-300  "
                        size="small"
                        label="Interests"
                        assertiveText="assertiveText"
                        onChange={(selected: any) => {
                          const values = selected.map((val: any) => {
                            return val;
                          });

                          field.onChange(values);
                          setChips({
                            ...chips,
                            interests:
                              values.length === multiSelectOptions.length
                                ? [{ value: 0, label: "All" }]
                                : values,
                          });
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
                name="paymentType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <MultiSelect
                        options={paymentTypeOptions}
                        iconClassName="fill-blue-300 text-blue-300  "
                        focusedClassName="border-blue-300"
                        checkedClassName=" border-blue-300 checked:bg-blue-300 checked:border-blue-300  "
                        size="small"
                        label="Payment Type"
                        assertiveText="assertiveText"
                        onChange={(selected: any) => {
                          const values = selected.map((val: any) => {
                            return val;
                          });
                          field.onChange(values);
                          setChips({
                            ...chips,
                            paymentType:
                              values.length === paymentTypeOptions.length
                                ? [{ value: 0, label: "All" }]
                                : values,
                          });
                        }}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div></div>
              <div></div>
              <div></div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        label="Email"
                        size="small"
                        iconClassName=" text-blue-300 fill-blue-300"
                        focusedClassName="border-blue-300"
                        assertiveText="assertiveText"
                        options={singleSelectOptions}
                        defaultValue={field.value}
                        onChange={(val: string) => {
                          field.onChange(val);
                          setChips({ ...chips, email: val });
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
                  <FormItem>
                    <FormControl>
                      <DatePicker
                        label="Date Single"
                        size="small"
                        iconClassName=" text-blue-300"
                        focusedClassName="border-blue-300"
                        single={true}
                        assertiveText="assertiveText"
                        onSelect={(value: string) => {
                          field.onChange(value);
                          setChips({ ...chips, dateSingle: value });
                        }}
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLInputElement>
                        ) => {
                          if (e.key === "Tab") {
                            setChips({ ...chips, dateSingle: field.value });
                          }
                          if (e.key === "Backspace") {
                            setChips({ ...chips, dateSingle: "" });
                          }
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
                  <FormItem>
                    <FormControl>
                      <DatePicker
                        label="Date Range"
                        iconClassName=" text-blue-300"
                        focusedClassName="border-blue-300"
                        size="small"
                        assertiveText="assertiveText"
                        onSelect={(value: string) => {
                          field.onChange(value);
                          setChips({ ...chips, dateRange: value });
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
                name="createdDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <DatePicker
                        label="Created Date"
                        iconClassName=" text-blue-300"
                        focusedClassName="border-blue-300"
                        size="small"
                        assertiveText="assertiveText"
                        onSelect={(value: string) => {
                          field.onChange(value);
                          setChips({ ...chips, createdDate: value });
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
                name="paymentAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Range
                        size="small"
                        onChange={(value: any) => {
                          field.onChange(value);
                          setChips({ ...chips, paymentAmount: value });
                        }}
                        assertiveText="assertiveText"
                        iconClassName=" text-blue-300"
                        focusedClassName="border-blue-300"
                        MenuClasses={{
                          inputs: "focus:border-blue-300",
                          clearButton:
                            "border-blue-300 text-blue-300 hover:text-blue-400",
                          setButton: "bg-blue-300 hover:bg-blue-300",
                        }}
                        label="Payment Amount"
                        value={field.value}
                        placeholder="Payment Amount"
                        allowNegative
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pendingBalance"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Range
                        size="small"
                        onChange={(value: any) => {
                          field.onChange(value);
                          setChips({ ...chips, pendingBalance: value });
                        }}
                        assertiveText="assertiveText"
                        iconClassName=" text-blue-300"
                        focusedClassName="border-blue-300"
                        MenuClasses={{
                          inputs: "focus:border-blue-300",
                          clearButton:
                            "border-blue-300 text-blue-300 hover:text-blue-400",
                          setButton: "bg-blue-300 hover:bg-blue-300",
                        }}
                        label="Pending balance"
                        value={field.value}
                        placeholder="Pending balance"
                        allowNegative
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex my-5 flex-wrap gap-1">
              <Chip
                label="interests"
                value={interests}
                deleteTag={() => deleteTag("interests")}
              />
              <Chip
                label="Payment Type"
                value={paymentTypes}
                deleteTag={() => deleteTag("paymentType")}
              />
              <Chip
                label="UserName"
                value={chips.username}
                deleteTag={() => deleteTag("username")}
              />
              <Chip
                label="PhoneNumber"
                value={chips.phoneNumber}
                deleteTag={() => deleteTag("phoneNumber")}
              />
              <Chip
                label="Email"
                value={chips.email}
                deleteTag={() => deleteTag("email")}
              />
              <Chip
                label="Date Single"
                value={chips.dateSingle}
                deleteTag={() => deleteTag("dateSingle")}
              />
              <Chip
                label="Date Range"
                value={`${chips.dateRange.from && chips.dateRange.from + "~"}${
                  chips.dateRange.to && chips.dateRange.to
                }`}
                deleteTag={() => deleteTag("dateRange")}
              />
              <Chip
                label="Created Date"
                value={`${
                  chips.createdDate.from && chips.createdDate.from + "~"
                }${chips.createdDate.to && chips.createdDate.to}`}
                deleteTag={() => deleteTag("createdDate")}
              />
              <Chip
                label="Payment Amount"
                value={`${
                  chips.paymentAmount.single
                    ? chips.paymentAmount.single
                    : chips.paymentAmount.min
                    ? chips.paymentAmount.min + "~" + chips.paymentAmount.max
                    : ""
                }`}
                deleteTag={() => deleteTag("paymentAmount")}
              />
              <Chip
                label="Pending Balance"
                value={`${
                  chips.pendingBalance.single
                    ? chips.pendingBalance.single
                    : chips.pendingBalance.min
                    ? chips.pendingBalance.min + "~" + chips.pendingBalance.max
                    : ""
                }`}
                deleteTag={() => deleteTag("pendingBalance")}
              />
            </div>
          </CardContent>
          <CardFooter>
            <ButtonGroup>
              <Button
                size={"small"}
                disabled={!form.formState.isDirty || !form.formState.isValid}
                type="submit"
                className="bg-blueInteraction-300 hover:bg-blue-300"
              >
                Filter
              </Button>
              <Button
                size={"small"}
                variant={"secondary"}
                disabled={!form.formState.isDirty}
                type="reset"
                className="border-blueInteraction-300 text-blueInteraction-300 hover:text-blue-300"
                onClick={() => {
                  form.reset(defaultValues);
                  setChips({ ...chips, ...defaultValues });
                }}
              >
                Clear
              </Button>
            </ButtonGroup>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default FormExample;
