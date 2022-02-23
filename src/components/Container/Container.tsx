import React from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Container.css";

const Container: React.FC<CustomClass> = ({ customClass, children }) => {
  return (
    <div
      data-testid="palmtree--container"
      className={`palmtree--container ${customClass || ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
