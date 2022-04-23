import React, { FC } from "react";
import Header from "../../components/Header";
import "./Page404.scss";

const Page404: FC = () => {
  return (
    <div className="page404-page">
      <Header />
      <div className="page404__main">
        <div className="page404-information">
          <h1>404</h1>
          <p>Данной страницы не сушествует</p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
