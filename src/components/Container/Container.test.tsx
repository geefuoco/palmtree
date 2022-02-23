import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  const setup = () => render(<Container />);

  it("should render a container component", () => {
    setup();
    expect(screen.getByTestId("palmtree--container")).toBeTruthy();
  });
});
