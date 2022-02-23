import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from "./Container";

export default {
  title: "Palmtree/Container",
  component: Container
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return (
    <Container {...args}>
      <h2>Hello World</h2>
      <button>Random Button</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum
        exercitationem laudantium maxime necessitatibus quibusdam doloribus
        quis, nemo in quasi?
      </p>
    </Container>
  );
};
export const Default = Template.bind({});
Default.args = {};
