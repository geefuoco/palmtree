import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";

const Element: React.FC = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const obj = {
    backgroundColor: "lightgreen",
    fontSize: "2rem",
    width: "600px",
    margin: "4rem auto",
    borderRadius: "20px",
    cursor: "pointer",
    padding: "1rem",
    color: "orange"
  };

  return (
    <>
      {children}
      <div data-testid="test-div" ref={elementRef} style={obj}>
        Hover me
      </div>
      <Tooltip
        parentRef={elementRef}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id felis sed elit dictum porta. Aliquam in neque "
        direction={"RIGHT"}
      />
    </>
  );
};
export default {
  title: "Palmtree/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <Element>
        <Story />
      </Element>
    )
  ]
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
