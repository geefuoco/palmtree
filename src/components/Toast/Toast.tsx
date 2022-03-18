import React, { useState } from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Toast.css";

export interface Props extends CustomClass {
  text: string;
  type?: "warning" | "danger";
}

const Toast: React.FC<Props> = ({ text, customClass, type }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const className = `palmtree--toast ${
    type === "warning" ? "palmtree--warning" : ""
  } ${type === "danger" ? "palmtree--danger" : ""} ${customClass || ""}`;
  return (
    (isActive && (
      <div data-testid="palmtree--toast" className={className}>
        <div
          className="palmtree--close-menu"
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
        </div>
        <p className="palmtree--toast-text">{text}</p>
      </div>
    )) ||
    null
  );
};

export default Toast;
