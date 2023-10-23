import clsx from "clsx";
import { Check, Play } from "lucide-react";
import React from "react";
import {
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  MenuProps,
  OptionProps,
  components,
} from "react-select";
import { default as ReactSelect } from "react-select";
import { Text } from "./typography/Text";
import { useFormField } from "./Form";

import { VariantProps } from "class-variance-authority";
import { Option } from "./MultiSelect";
import { cn } from "../lib/utils";
import { inputVariants } from "../lib/component-variants";
import { Caption } from "./typography/Caption";

interface SelectProps
  extends React.HTMLAttributes<HTMLAllCollection>,
    VariantProps<typeof inputVariants> {
  options: Option[];
  value?: any;
  onChange: any;
  label: string;
  assertiveText?: string;
  disabled?: boolean;
  checkedClassName?: string;
  iconClassName?: string;
  readonly?: boolean;
  focusedClassName?: string;
}

export const Select = (props: SelectProps) => {
  const { readOnly, disabled, size, iconClassName, checkedClassName } = props;
  const [selectedOption, setSelectedOption] = React.useState("");
  const [iconDirection, setIconDirection] = React.useState("rotate(90deg)");
  const [isOpen, setIsOpen] = React.useState(false);

  const { error } = useFormField();

  const handleTypeSelect = (e: any) => {
    setSelectedOption(e.label);
    props.onChange(e.label);
  };

  React.useEffect(() => {
    if (isOpen) {
      setIconDirection("rotate(-90deg)");
    } else {
      setIconDirection("rotate(90deg)");
    }
  }, [isOpen]);

  const Menu = (props: MenuProps) => {
    return <components.Menu {...props}>{props.children}</components.Menu>;
  };

  const MultiValueContainer = ({ selectProps, data }: any) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex(
      (selected: any) => selected.label === label
    );
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? ` ` : ", ";
    const val = `${label}${labelSuffix}`;

    return val;
  };

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <Play
          style={{ transform: iconDirection }}
          size={size === "small" ? 15 : 18}
          className={cn(
            ` text-blue-400 cursor-pointer fill-blueInteraction-400 ${
              readOnly && " fill-gray-500 text-gray-500"
            }
          ${disabled && "fill-gray-500 text-gray-500"}
          `,
            iconClassName +
              `${readOnly || disabled ? "fill-gray-500 text-gray-500" : ""}`
          )}
        />
      </components.DropdownIndicator>
    );
  };

  const placeholderStyles = "text-muted-foreground";
  const MenuStyles = `w-[100px]  py-4 bg-white-50 mt-1  rounded-md border  bg-popover  text-popover-foreground shadow-md outline-none  `;
  const ValueContainerStyles =
    " max-w-[85%] whitespace-nowrap overflow-hidden overflow-ellipsis  ";
  const multiValueRemoveStyles = "text-white-50 hidden invisible";

  let indicatorsContainerStyles = " relative";

  const Option = (props: OptionProps) => {
    return (
      <components.Option {...props}>
        <div className="flex justify-between items-center cursor-pointer hover:bg-blue-50 px-2 py-[5px] ">
          {props.children}
          {props.isSelected && <Check size={20} />}
        </div>
      </components.Option>
    );
  };

  const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
    return (
      <span
        className={`${props.disabled ? "bg-gray-300" : "bg-gray-400"} 
        ${readOnly && "invisible"}
        
        self-stretch ${
          size === "small"
            ? "right-5 h-9 -bottom-2"
            : " h-12  -bottom-3 right-7"
        }   w-[1px] absolute  `}
        {...innerProps}
      />
    );
  };

  return (
    <div className="">
      <Text level={size === "small" ? 5 : 4}>{props.label}</Text>

      <ReactSelect
        options={props.options}
        hideSelectedOptions={false}
        unstyled
        isDisabled={props.disabled ? true : props.readOnly ? true : false}
        isReadOnly={props.readOnly}
        placeholder="- Select -"
        onChange={handleTypeSelect}
        styles={{
          input: (base, value) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
              display: "inline-block",
            },
          }),
          container: (base) => ({
            ...base,
          }),
          menu: (base) => ({
            ...base,
          }),

          valueContainer: (base) => ({
            ...base,
            whiteSpace: "nowrap",
            overflow: "hidden",
            flexWrap: "nowrap",
          }),
          multiValueLabel: (base) => ({
            ...base,
            whiteSpace: "normal",
            overflow: "visible",
          }),
          control: (base) => ({
            ...base,
            minHeight: props.size === "small" ? "30px" : "48px",
            transition: "none",
            whiteSpace: "nowrap",
          }),
        }}
        components={{
          //@ts-ignore
          DropdownIndicator,
          MultiValueContainer,
          //@ts-ignore
          IndicatorSeparator,
          //@ts-ignore
          Menu: Menu,
          //@ts-ignore
          Option: Option,
        }}
        classNames={{
          control: ({ isFocused }) =>
            cn(
              inputVariants({
                variant: props.variant,
                size: size,
                disabled: props.disabled,
                readOnly: props.readOnly,
              }),
              isFocused && !props.focusedClassName
                ? inputVariants({ variant: "available", size: size })
                : isFocused
                ? props.focusedClassName
                : "",
              error && inputVariants({ variant: "error", size: size }),
              props.className
            ),

          indicatorsContainer: () => indicatorsContainerStyles,
          menu: () => MenuStyles,
          valueContainer: () => ValueContainerStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          placeholder: () => placeholderStyles,
          input: () => cn("relative"),
        }}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
        blurInputOnSelect={false}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        value={props.options.filter(function (option: any) {
          return option.label === props.value;
        })}
      />
      {!error && (
        <Caption className=" text-grayNeutral-400 mt-1" level={1}>
          {props.assertiveText}
        </Caption>
      )}
    </div>
  );
};
