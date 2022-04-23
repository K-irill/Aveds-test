import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { HOME_ROUTE, СONTACTS_ROUTE } from "../../utils/consts";
import "./Profile.scss";

const Profile: FC = () => {
  const dispatch = useDispatch();

  const AuthLoginExit = () => {
    dispatch({ type: "AUTH_LOGIN", payload: false });
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-page__main">
        <div className="profile-page__main-information">
          <h1>{"Привет, " + localStorage.getItem("name")}</h1>
          <div className="profile-page__button-group">
            <Link to={HOME_ROUTE}>
              <button onClick={() => AuthLoginExit()}>Выйти из аккаунта</button>
            </Link>
            <Link to={СONTACTS_ROUTE}>
              <button>Перейти в контакты</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
