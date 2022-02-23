import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Palmtree/Image",
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop",
  alt: "A red sports car",
  width: 100,
  height: 60,
  fit: true
};
