import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image", () => {
  const setup = () =>
    render(<Image alt="test" src="" width={100} height={60} />);

  it("should render an image", () => {
    setup();
    expect(screen.getByRole("img")).toBeTruthy();
  });
});
