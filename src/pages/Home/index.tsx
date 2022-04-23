import React, { FC } from "react";
import AuthModal from "../../components/AuthModal";
import ButtonGroup from "../../components/ButtonGroup";
import Header from "../../components/Header";
import SnackBarError from "../../components/SnackBarError";
import "./Home.scss";

const Home: FC = () => {
  return (
    <div className="content">
      <Header />
      <AuthModal />
      <SnackBarError />
      <div className="main">
        <div className="main-content">
          <h1>Место для получения медицинской помощи</h1>
          <ButtonGroup
            textActivBtn="Войти"
            textDisebledBtn="Контакты"
            activFirst={false}
            activSecond={false}
          />
          <div className="main-content__cards-list">
            <div className="main-content__card">
              <img src="./images/heart-logo.svg" alt="heart" />
              <h3>Онлайн-прием</h3>
              <p>Рыба текст</p>
            </div>
            <div className="main-content__card">
              <img src="./images/med-logo.svg" alt="med" />
              <h3>Экстренный Случай</h3>
              <p>Рыба текст</p>
            </div>
            <div className="main-content__card">
              <img src="./images/table-logo.svg" alt="table" />
              <h3>Лечение рака</h3>
              <p>Рыба текст</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
