import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  const setup = () =>
    render(<Input type={"password"} required={true} name="test-input" />);

  it("should render the input element", () => {
    setup();
    expect(screen.getByTestId("palmtree--input"));
  });
});
