import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SubTitle from "../components/ui/typography/SubTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SubTitle",
  component: SubTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SubTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args} />
);

export const s1 = Template.bind({});
export const s2 = Template.bind({});
export const s1MediumFontWeight = Template.bind({});
export const s2MediumFontWeight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
s1.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 1,
};

s2.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 2,
};

s1MediumFontWeight.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 1,
  weight: "medium",
};

s2MediumFontWeight.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
  level: 2,
  weight: "medium",
};
