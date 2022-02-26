import "regenerator-runtime";
import React, { useRef } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  const Element: React.FC = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <div data-testid="test-div" ref={elementRef}>
          Hover me
        </div>
        <Tooltip parentRef={elementRef} text="Testing the tooltip" />
      </>
    );
  };

  const setup = () => {
    render(<Element />);
  };

  it("should render the tooltip component", async () => {
    setup();

    expect(screen.queryByText(/testing the tooltip/i)).toBeFalsy();

    fireEvent.mouseEnter(screen.getByText(/Hover me/i));

    await waitFor(() => screen.queryByText(/tooltip/i));
    expect(screen.queryByText(/Testing the tooltip/i)).toBeTruthy();
  });
});
