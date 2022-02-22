import React from "react";
import { screen, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const setup = () => render(<Button label="Hello World" />);

  it("should render the component", () => {
    setup();
    expect(screen.getByText(/Hello World/)).toBeTruthy();
  });
});
