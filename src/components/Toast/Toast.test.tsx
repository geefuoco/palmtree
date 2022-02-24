import React from "react";
import { render, screen } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast", () => {
  const setup = () => render(<Toast text={"A toast has popped up"} />);

  it("should render a Toast", () => {
    setup();
    expect(screen.getByTestId("palmtree--toast")).toBeTruthy();
  });
});
