import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../components/ui/input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
export const disabledInput = Template.bind({});
export const displayInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultInput.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
};

disabledInput.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
  disabled: true,
};

displayInput.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
  value: "Field Value",
  variant: "display",
  readOnly: true,
};
