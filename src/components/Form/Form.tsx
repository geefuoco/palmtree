import React from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Form.css";

export interface Props extends CustomClass {
  title: string;
  action: string;
  method: string;
  inputObjects?: { name: string; element: JSX.Element }[];
  submitText: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<Props> = ({
  action,
  method,
  customClass,
  inputObjects,
  submitText,
  title,
  children,
  onSubmit
}) => {
  const formData = inputObjects
    ? inputObjects.map((io) => {
        return (
          <div className="palmtree--form-item" key={io.name}>
            <label htmlFor={io.name}>{io.name}</label>
            {io.element}
          </div>
        );
      })
    : null;

  return (
    <form
      onSubmit={onSubmit}
      aria-label="form"
      action={action}
      method={method}
      className={`palmtree--form ${customClass || ""}`}
    >
      <h3 className="palmtree--form-title">{title}</h3>
      {formData}
      {children}
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
