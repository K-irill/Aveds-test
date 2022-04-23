import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Сontacts from "../../pages/Сontacts";
import { HOME_ROUTE, СONTACTS_ROUTE, ADMIN_ROUTE } from "../../utils/consts";

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: <Profile />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Element: <Home />,
  },
  {
    path: СONTACTS_ROUTE,
    Element: <Сontacts />,
  },
];
