import React, { RefObject, useEffect, useRef, useState } from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Tooltip.css";

export enum DIRECTION {
  TOP = "top",
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom"
}
type DirectionKeys = keyof typeof DIRECTION;

export interface Props extends CustomClass {
  text: string;
  parentRef: RefObject<HTMLElement>;
  direction?: DirectionKeys;
}

const Tooltip: React.FC<Props> = ({
  customClass,
  text,
  parentRef,
  direction
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const showTooltip = () => {
    setIsShowing(true);
  };

  const hideTooltip = () => {
    setIsShowing(false);
  };

  const setTooltipPosition = (e: MouseEvent, element: HTMLElement) => {
    const mousePadding = 40;
    const style = window.getComputedStyle(element);
    const width = Number(style.width.replace("px", "")) + mousePadding;
    const height = Number(style.height.replace("px", "")) + mousePadding;
    const x = e.clientX;
    const y = e.clientY;
    if (element.classList.contains("RIGHT")) {
      element.style.top = `${y}px`;
      element.style.left = `${x + width / 2}px`;
    } else if (element.classList.contains("LEFT")) {
      element.style.top = `${y}px`;
      element.style.left = `${x - width / 2}px`;
    } else if (element.classList.contains("BOTTOM")) {
      element.style.top = `${y + 20}px`;
      element.style.left = `${x}px`;
    } else {
      element.style.top = `${y - height}px`;
      element.style.left = `${x}px`;
    }
  };

  useEffect(() => {
    if (!parentRef) return;
    const { current } = parentRef;
    if (!current) return;

    const eventWrapper = (e: MouseEvent) => {
      const tooltipCurrent = tooltipRef.current;
      if (tooltipCurrent) {
        setTooltipPosition(e, tooltipCurrent);
      }
    };

    current.style.position = "relative";
    current.addEventListener("mouseenter", showTooltip);
    current.addEventListener("mouseleave", hideTooltip);
    window.addEventListener("mousemove", eventWrapper);
    return () => {
      current.removeEventListener("mouseenter", showTooltip);
      current.removeEventListener("mouseleave", hideTooltip);
      current.removeEventListener("mouseleave", eventWrapper);
    };
  }, [parentRef, tooltipRef]);

  return (
    (isShowing && (
      <div
        className={`palmtree--tooltip ${direction || ""} ${customClass || ""}`}
        ref={tooltipRef}
      >
        {text}
      </div>
    )) ||
    null
  );
};

export default Tooltip;
