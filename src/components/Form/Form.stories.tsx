import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Form from "./Form";
import { Input } from "..";

export default {
  title: "Palmtree/Form",
  component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Test form",
  submitText: "Submit",
  action: "/home",
  method: "get",
  inputObjects: [
    {
      name: "Email",
      element: <input type="email" placeholder="Enter your email" />
    },
    {
      name: "Password",
      element: (
        <Input
          type="password"
          name="password"
          required={true}
          showPasswordButton={true}
        />
      )
    }
  ]
};
