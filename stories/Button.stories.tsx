import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import H1 from "../components/ui/typography/TItle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "disabled",
  disabled: true,
  children: "Disabled Button",
};

export const DisabledWithDifferentVariants = Template.bind({});

DisabledWithDifferentVariants.args = {
  variant: "destructive",
  disabled: true,
  children: "Disabled Button",
};

export const WithIcons = Template.bind({});

WithIcons.args = {
  variant: "secondary",
  children: (
    <>
      <span>Button</span>
      <PlusCircle size={20} />
    </>
  ),
};

export const TextButton = Template.bind({});

TextButton.args = {
  variant: "text",
  children: "Text Button",
};

export const Link = Template.bind({});

Link.args = {
  variant: "link",
  children: "Link",
};
