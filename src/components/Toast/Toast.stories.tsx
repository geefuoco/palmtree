import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "./Toast";

export default {
  title: "Palmtree/Toast",
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is a test of a toast!"
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Warning !!",
  customClass: "warning"
};
