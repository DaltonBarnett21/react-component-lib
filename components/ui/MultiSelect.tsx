import React, { useState, useRef, useEffect } from "react";
import Select, {
  default as ReactSelect,
  components,
  InputAction,
  DropdownIndicatorProps,
  MenuProps,
  MultiValueGenericProps,
  MultiValueProps,
  IndicatorSeparatorProps,
} from "react-select";
import styles from "../../styles/styles.module.css";
import { clsx } from "clsx";
import Caption from "./typography/Caption";
import { Play, Variable } from "lucide-react";
import { useFormField } from "./Form";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { Checkbox } from "./checkbox";
import Text from "./typography/Text";
import { inputVariants } from "@/lib/component-variants";

export type Option = {
  value: number | string;
  label: string;
};

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
  onKeyDown?: any;
}

const MultiSelect = (props: SelectProps) => {
  const { readOnly, disabled, size, iconClassName, checkedClassName } = props;
  const [selectInput, setSelectInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const isAllSelected = useRef<boolean>(false);
  const [iconDirection, setIconDirection] = useState("rotate(90deg)");
  const selectAllLabel = useRef<string>("Select All");
  const allOption = { value: "*", label: selectAllLabel.current };
  const [all, setAll] = React.useState("");
  const { error } = useFormField();

  const placeholderStyles = "text-muted-foreground";
  const MenuStyles = `w-[100px]  bg-white-50 mt-1  rounded-md border bg-popover  text-popover-foreground shadow-md outline-none  `;
  const ValueContainerStyles = ` max-w-[85%] whitespace-nowrap overflow-hidden overflow-ellipsis  ${
    all === "All" ? "text-transparent" : ""
  } `;
  const multiValueRemoveStyles = "text-white-50 hidden invisible";
  let indicatorsContainerStyles = " relative";

  useEffect(() => {
    if (isOpen) {
      setIconDirection("rotate(-90deg)");
      // indicatorsContainerStyles =
      //   " p-2 border-blue-400 border flex justify-center rounded-none transition-all";
    } else {
      setIconDirection("rotate(90deg)");
      // indicatorsContainerStyles =
      //   " p-2 border-gray-400 border-l flex justify-center rounded-none transition-all";
    }
  }, [isOpen]);

  const filterOptions = (options: Option[], input: string) =>
    options?.filter(({ label }: Option) =>
      label.toLowerCase().includes(input.toLowerCase())
    );

  const comparator = (v1: Option, v2: Option) =>
    (v1.value as number) - (v2.value as number);

  let filteredOptions = filterOptions(props.options, selectInput);
  let filteredSelectedOptions = filterOptions(props.value, selectInput);

  useEffect(() => {
    if (filteredSelectedOptions.length === filteredOptions.length) {
      setAll("All");
    } else {
      setAll("");
    }
  }, [filteredSelectedOptions]);

  const Option = (props: any) => (
    <components.Option className="flex items-centers" {...props}>
      {props.value === "*" &&
      !isAllSelected.current &&
      filteredSelectedOptions?.length > 0 ? (
        <Checkbox
          key={props.value}
          id={props.value}
          ref={(input) => {
            if (input) input.indeterminate = true;
          }}
          label={props.label}
          className={checkedClassName}
        />
      ) : (
        <Checkbox
          key={props.value}
          id={props.value}
          checked={props.isSelected || isAllSelected.current}
          label={props.label}
          onChange={() => {}}
          className={checkedClassName}
        />
      )}
    </components.Option>
  );

  const Input = (props: any) => {
    console.log(props.options.length - 1);
    console.log(filteredSelectedOptions.length);

    return (
      <>
        {selectInput.length === 0 ? (
          <components.Input autoFocus={props.selectProps.menuIsOpen} {...props}>
            {props.children}
          </components.Input>
        ) : (
          <div style={{ border: "1px dotted gray" }}>
            <components.Input
              autoFocus={props.selectProps.menuIsOpen}
              {...props}
            >
              {props.children}
            </components.Input>
          </div>
        )}
      </>
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

  const customFilterOption = ({ value, label }: Option, input: string) =>
    (value !== "*" && label.toLowerCase().includes(input.toLowerCase())) ||
    (value === "*" && filteredOptions?.length > 0);

  const onInputChange = (
    inputValue: string,
    event: { action: InputAction }
  ) => {
    if (event.action === "input-change") setSelectInput(inputValue);
    else if (event.action === "menu-close" && selectInput !== "")
      setSelectInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === " " || e.key === "Enter") && !selectInput)
      e.preventDefault();
    // props.onKeyDown(e);
  };

  const handleChange = (selected: Option[]) => {
    if (
      selected.length > 0 &&
      !isAllSelected.current &&
      (selected[selected.length - 1].value === allOption.value ||
        JSON.stringify(filteredOptions) ===
          JSON.stringify(selected.sort(comparator)))
    )
      return props.onChange(
        [
          ...(props.value ?? []),
          ...props.options.filter(
            ({ label }: Option) =>
              label.toLowerCase().includes(selectInput?.toLowerCase()) &&
              (props.value ?? []).filter((opt: Option) => opt.label === label)
                .length === 0
          ),
        ].sort(comparator)
      );
    else if (
      selected.length > 0 &&
      selected[selected.length - 1].value !== allOption.value &&
      JSON.stringify(selected.sort(comparator)) !==
        JSON.stringify(filteredOptions)
    )
      return props.onChange(selected);
    else
      return props.onChange([
        ...props.value?.filter(
          ({ label }: Option) =>
            !label.toLowerCase().includes(selectInput?.toLowerCase())
        ),
      ]);
  };

  if (props.options.length !== 0) {
    isAllSelected.current =
      JSON.stringify(filteredSelectedOptions) ===
      JSON.stringify(filteredOptions);

    if (filteredSelectedOptions?.length > 0) {
      if (filteredSelectedOptions?.length === filteredOptions?.length)
        selectAllLabel.current = `All`;
    } else selectAllLabel.current = "Select All";

    allOption.label = selectAllLabel.current;

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

    const Menu = (props: MenuProps) => {
      return (
        <components.Menu {...props}>
          <Text level={5}>{props.children}</Text>
        </components.Menu>
      );
    };

    const MultiValueContainer = ({ selectProps, data, ...props }: any) => {
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

    return (
      <div className="w-full relative">
        <Text level={size === "small" ? 5 : 4}>{props.label}</Text>
        {all === "All" && (
          <p
            className={` absolute ${
              size === "small" ? "top-[30px]" : "top-[40px]"
            }  left-2`}
          >
            All
          </p>
        )}
        <Select
          {...props}
          isMulti
          closeMenuOnSelect={false}
          isClearable={false}
          hideSelectedOptions={false}
          unstyled
          isDisabled={props.disabled ? true : props.readOnly ? true : false}
          placeholder="- Select -"
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
            Option: Option,
            Input: Input,
            DropdownIndicator,
            MultiValueContainer,
            Menu: Menu,
            IndicatorSeparator,
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
                error && inputVariants({ variant: "error", size: size })
              ),

            indicatorsContainer: () => indicatorsContainerStyles,
            menu: () => MenuStyles,
            valueContainer: () => ValueContainerStyles,
            multiValueRemove: () => multiValueRemoveStyles,
            placeholder: () => placeholderStyles,
            input: () => cn("relative"),
          }}
          inputValue={selectInput}
          onInputChange={onInputChange}
          onKeyDown={onKeyDown}
          options={[allOption, ...props.options]}
          //@ts-ignore
          onChange={handleChange}
          filterOption={customFilterOption}
          tabSelectsValue={false}
          backspaceRemovesValue={true}
          blurInputOnSelect={false}
          onMenuOpen={() => setIsOpen(true)}
          onMenuClose={() => setIsOpen(false)}
        />
        {!error && (
          <Caption className=" text-grayNeutral-400" level={1}>
            {props.assertiveText}
          </Caption>
        )}
      </div>
    );
  }
};

export default MultiSelect;
