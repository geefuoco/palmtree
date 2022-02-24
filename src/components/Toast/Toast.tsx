import React, { useState } from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Toast.css";

export interface Props extends CustomClass {
  text: string;
}

const Toast: React.FC<Props> = ({ text, customClass }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    (isActive && (
      <div
        data-testid="palmtree--toast"
        className={`palmtree--toast ${customClass || ""}`}
      >
        <div
          className="palmtree--close-menu"
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
        </div>
        {text}
      </div>
    )) ||
    null
  );
};

export default Toast;
