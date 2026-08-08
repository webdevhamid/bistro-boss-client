import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/ContactUs/Contact";
import Login from "../pages/Login/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Cart from "./../pages/Dashboard/Cart/Cart";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import UserHome from "./../pages/Dashboard/UserHome/UserHome";
import PaymentHistory from "./../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "./../pages/Dashboard/AddReview/AddReview";
import MyBookings from "./../pages/Dashboard/MyBookings/MyBookings";

const DashboardRoute = () => {
  return (
    <PrivateRoute>
      <DashboardLayout />
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
    path: "dashboard",
    // Private Dashboard route
    Component: DashboardRoute,
    children: [
      {
        path: "userHome",
        Component: UserHome,
      },
      {
        path: "reservation",
        Component: Reservation,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "addReview",
        Component: AddReview,
      },
      {
        path: "myBookings",
        Component: MyBookings,
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
