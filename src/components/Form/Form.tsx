import React from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Form.css";

export interface Props extends CustomClass {
  title: string;
  action: string;
  method: string;
  inputObjects: { name: string; element: JSX.Element }[];
  submitText: string;
}

const Form: React.FC<Props> = ({
  action,
  method,
  customClass,
  inputObjects,
  submitText,
  title
}) => {
  const formData = inputObjects.map((io) => {
    return (
      <div className="palmtree--form-item" key={io.name}>
        <label htmlFor={io.name}>{io.name}</label>
        {io.element}
      </div>
    );
  });

  return (
    <form
      aria-label="form"
      action={action}
      method={method}
      className={`palmtree--form ${customClass || ""}`}
    >
      <h3 className="palmtree--form-title">{title}</h3>
      {formData}
      <button
        type="submit"
        aria-label="submit"
        className="palmtree--form-submit"
      >
        {submitText}
      </button>
    </form>
  );
};

export default Form;
