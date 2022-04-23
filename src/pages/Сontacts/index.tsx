import React, { FC } from "react";
import AuthModal from "../../components/AuthModal";
import Header from "../../components/Header";
import "./Concats.scss";

const Сontacts: FC = () => {
  return (
    <div className="concats-page">
      <Header />
      <div className="concats-page__main">
        <div className="concats-page__main-information">
          <AuthModal />
          <h1>Контакты</h1>
        </div>
      </div>
    </div>
  );
};

export default Сontacts;
