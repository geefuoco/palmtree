import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Palmtree/Navbar",
  component: Navbar
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  logo: { content: "Logo", url: "/home" },
  links: [
    {
      text: "About me",
      url: "/about-me"
    },
    {
      text: "Contact",
      url: "/contact"
    }
  ]
};

export const Long = Template.bind({});
Long.args = {
  logo: { content: "ASuperLongLogo", url: "/" },
  links: [{ text: "About", url: "/about" }]
};
