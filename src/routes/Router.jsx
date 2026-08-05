import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/ContactUs/Contact";
import Login from "../pages/Login/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const DashboardRoute = () => {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact-us",
        Component: Contact,
      },
      {
        path: "dashboard",
        Component: DashboardRoute,
      },
      {
        path: "our-menu",
        Component: OurMenu,
      },
      {
        path: "our-shop/:category",
        Component: OurShop,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
