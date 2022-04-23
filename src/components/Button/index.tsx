import React from "react";
import { useDispatch } from "react-redux";
import { UseTypedSelector } from "../hooks/useTypedSelector";
import "./Button.scss";

interface ButtonProps {
  text: string;
  styleCss: string;
  width?: string;
  height?: string;
}

const Button = ({ text, width, height, styleCss }: ButtonProps) => {
  const dispatch = useDispatch();
  const { isAuth } = UseTypedSelector((state) => state.user);

  const handleOpen = () => {
    dispatch({ type: "CONTROL_MODAL", payload: true });
  };

  const AuthLoginExit = () => {
    dispatch({ type: "AUTH_LOGIN", payload: false });
  };

  return (
    <button
      style={{ width, height }}
      className={styleCss}
      onClick={() => (isAuth ? AuthLoginExit() : handleOpen())}
    >
      {isAuth ? "Выйти" : text}
    </button>
  );
};

export default Button;
