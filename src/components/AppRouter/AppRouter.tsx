import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../../pages/Page404";
import { UseTypedSelector } from "../hooks/useTypedSelector";
import { adminRoutes, publicRoutes } from "./routes";

const AppRouter: FC = () => {
  const { isAuth } = UseTypedSelector((state) => state.user);

  return (
    <Routes>
      {isAuth &&
        adminRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      <Route path="*" element={<Page404 />} />;
    </Routes>
  );
};

export default AppRouter;
