import React, { FC } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./Header.scss";
import { HOME_ROUTE, СONTACTS_ROUTE } from "../../utils/consts";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={HOME_ROUTE}>
          <img src="./images/logo.svg" alt="logo-company" />
        </Link>
      </div>
      <div className="header__group-button">
        <Link to={СONTACTS_ROUTE}>Контакты</Link>
        <Button text="Войти" styleCss="button__header" />
      </div>
    </header>
  );
};

export default Header;
