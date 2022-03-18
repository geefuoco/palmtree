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
  text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quo error. Hic explicabo consequuntur temporibus adipisci doloribus id eveniet qui esse ea nostrum inventore nam eligendi deserunt quaerat, dolorem sint repudiandae illo ipsam, necessitatibus animi dolorum saepe amet? Quis amet pariatur veritatis soluta? Numquam, reiciendis aut minima voluptatem ad quia distinctio, nam, possimus alias culpa cupiditate cumque quo sit aliquid totam omnis placeat neque vel facilis rerum architecto quod quos dolore atque! Ut hic asperiores optio sapiente fugiat, exercitationem architecto expedita facilis esse, modi nam. Libero ab cumque alias? Consequuntur!`
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger !",
  type: "danger"
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning !!",
  type: "warning"
};
