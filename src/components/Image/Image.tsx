import React from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Image.css";

export interface Props extends CustomClass {
  width?: number;
  height?: number;
  alt: string;
  src: string;
  fit?: boolean;
}

const Image: React.FC<Props> = ({
  width,
  height,
  alt,
  src,
  customClass,
  fit
}) => {
  return (
    <div className="palmtree--image-container">
      <img
        className={`${fit ? "palmtree--image" : ""} ${customClass || ""}`}
        src={src}
        alt={alt}
        width={width ? `${width}px` : ""}
        height={height ? `${height}px` : ""}
        role="img"
        aria-label="image"
      />
    </div>
  );
};

export default Image;
