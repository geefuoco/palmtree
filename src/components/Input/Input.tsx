import React, { Dispatch, SetStateAction, useState } from "react";
import { CustomClass } from "../../interfaces/customClass";
import "./Input.css";

export interface Props extends CustomClass {
  name: string;
  type: string;
  required: boolean;
  showPasswordButton?: boolean;
  onChange?: Dispatch<SetStateAction<unknown>>;
}

const Input: React.FC<Props> = ({
  name,
  type,
  required,
  onChange,
  customClass,
  showPasswordButton
}) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);

  const showPassword =
    type === "password" && showPasswordButton ? (
      <button
        className="palmtree--input-show-button"
        onClick={() => setIsPasswordShowing(!isPasswordShowing)}
      >
        Show
      </button>
    ) : null;

  return (
    <>
      <input
        name={name}
        id={name}
        type={isPasswordShowing ? "text" : type}
        required={required}
        onChange={onChange}
        className={`palmtree--input ${customClass || ""}`}
        data-testid="palmtree--input"
      />
      {showPassword}
    </>
  );
};

export default Input;
