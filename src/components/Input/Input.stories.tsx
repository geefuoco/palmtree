import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Palmtree/Input",
  component: Input
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "test-input",
  required: true,
  type: "password",
  showPasswordButton: true
};

export const Number = Template.bind({});

Number.args = {
  name: "Number",
  required: false,
  type: "number"
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  name: "checkbox",
  required: false,
  type: "checkbox"
};
