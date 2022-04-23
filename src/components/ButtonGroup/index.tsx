import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, СONTACTS_ROUTE } from "../../utils/consts";
import { UseTypedSelector } from "../hooks/useTypedSelector";
import "./ButtonGroup.scss";

interface ButtonGroupProps {
  textActivBtn: string;
  textDisebledBtn: string;
  activFirst: boolean;
  activSecond: boolean;
}

const ButtonGroup = ({
  textActivBtn,
  textDisebledBtn,
  activFirst,
  activSecond,
}: ButtonGroupProps) => {
  const dispatch = useDispatch();
  const { isAuth } = UseTypedSelector((state) => state.user);

  const handleOpen = () => {
    dispatch({ type: "CONTROL_MODAL", payload: true });
  };

  return (
    <div className="main-content__button-group">
      {isAuth ? (
        <Link to={ADMIN_ROUTE}>
          <button
            className={
              activFirst
                ? "main-content__button-group_color_activ"
                : "main-content__button-group_color_disabled"
            }
          >
            Личный кабинет
          </button>
        </Link>
      ) : (
        <button
          className={
            activFirst
              ? "main-content__button-group_color_activ"
              : "main-content__button-group_color_disabled"
          }
          onClick={() => {
            handleOpen();
          }}
        >
          {textActivBtn}
        </button>
      )}

      <Link to={СONTACTS_ROUTE}>
        <button
          className={
            activSecond
              ? "main-content__button-group_color_activ"
              : "main-content__button-group_color_disabled"
          }
        >
          {textDisebledBtn}
        </button>
      </Link>
    </div>
  );
};

export default ButtonGroup;
