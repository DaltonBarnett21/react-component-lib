import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Caption from "../components/ui/typography/Caption";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Caption",
  component: Caption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Caption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args} />
);

export const c1 = Template.bind({});
export const c2 = Template.bind({});

c1.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 1,
};

c2.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 2,
};
