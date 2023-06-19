import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "../components/ui/textarea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Textarea",
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const TextArea = Template.bind({});
export const disabledTextarea = Template.bind({});
export const displayInputarea = Template.bind({});

TextArea.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
};

disabledTextarea.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
  disabled: true,
};

displayInputarea.args = {
  placeholder: "PlaceHolder",
  label: "Field Label",
  assertiveText: "Assertive Text",
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  variant: "display",
  readOnly: true,
};
