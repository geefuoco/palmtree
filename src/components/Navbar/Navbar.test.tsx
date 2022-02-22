import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const links = [
    { text: "About Me", url: "/about-me" },
    { text: "Contact", url: "/contact" }
  ];
  const setup = () => render(<Navbar links={links} />);

  it("should render a navigation", () => {
    setup();
    expect(screen.getByRole("navigation")).toBeTruthy();
  });

  it("should contain an about me link", () => {
    setup();
    expect(screen.getByText(/about me/i)).toBeTruthy();
  });
});
