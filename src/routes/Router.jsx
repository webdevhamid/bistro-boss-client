import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/ContactUs/Contact";

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
        Component: Dashboard,
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
]);

export default router;
