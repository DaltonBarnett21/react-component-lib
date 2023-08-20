import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModelClose,
} from "@/components/ui/modal";

import React from "react";
import Text from "@/components/ui/typography/Text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { Radio, RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { DatePicker } from "@/components/ui/DatePicker";
import { X } from "lucide-react";

const FormExample2 = () => {
  enum typeEnum {
    ALL = "all",
    MENTIONS = "mentions",
    NONE = "none",
  }

  const formSchema = z.object({
    dateSingle: z.string().optional(),
    type: z.enum([typeEnum.ALL, typeEnum.MENTIONS, typeEnum.NONE]),
    airplaneMode: z.boolean().optional(),
  });

  const defaultValues = {
    dateSingle: "",
    type: typeEnum.NONE,
    airplaneMode: true,
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className=" h-screen flex justify-center mt-10">
      <Modal>
        <ModalTrigger asChild>
          <Text className=" text-blue-300 cursor-pointer" level={4}>
            Click to open Form Modal
          </Text>
        </ModalTrigger>
        <ModalContent className="sm:max-w-[450px]">
          <ModalHeader className="">
            <div className="flex items-center justify-between">
              <ModalTitle className="">Edit profile</ModalTitle>
              <ModelClose>
                <X />
              </ModelClose>
            </div>

            <ModalDescription>
              Make changes to your profile here. Click save when you're done.
            </ModalDescription>
          </ModalHeader>
          <Form {...form}>
            <form className="  " onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className=" flex col-span-2 space-x-4 mt-4">
                    <Text level={4}>Choose Option:</Text>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <Radio value="all" label="All" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <Radio value="mentions" label="mentions" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <Radio disabled value="none" label="none" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateSingle"
                render={({ field }) => (
                  <FormItem className=" grid grid-cols-2">
                    <FormControl>
                      <DatePicker
                        label="Date Single"
                        size="small"
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
              <FormField
                control={form.control}
                name="airplaneMode"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormControl className="flex items-center h-full">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Text level={4}>Airplane Mode</Text>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <ModalFooter className=" grid grid-cols-2">
                <ModelClose>
                  <Button
                    type="reset"
                    size={"small"}
                    variant={"secondary"}
                    className="mt-4"
                  >
                    Back
                  </Button>
                </ModelClose>

                <Button size={"small"} className="mt-4" type="submit">
                  Save changes
                </Button>
              </ModalFooter>
            </form>
          </Form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FormExample2;
