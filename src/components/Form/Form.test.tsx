import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  const setup = () =>
    render(
      <Form
        action={"get"}
        method={"get"}
        title="Test"
        inputObjects={[{ name: "input", element: <input type="text" /> }]}
        submitText="search"
      />
    );

  it("should render the form component", () => {
    setup();
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
