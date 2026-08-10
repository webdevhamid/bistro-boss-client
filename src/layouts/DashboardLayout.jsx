import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { TbStars } from "react-icons/tb";
import { NavLink, Outlet } from "react-router";
import "./DashboardLayout.css";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  const [cart] = useCart();
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Dashboard Left sidebar */}
      <div className="w-64 bg-secondary-500 min-h-screen pt-20">
        {/* Dashboard navigation list */}
        <ul className="flex flex-col items-start gap-6 pl-5 uppercase font-semibold dashboard-navbar">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaHome className="text-2xl" />
              </span>
              <span>User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaCalendarAlt className="text-2xl" />
              </span>
              <span>Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaWallet className="text-2xl" />
              </span>
              <span>Payment History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaShoppingCart className="text-2xl" />
              </span>
              <span>My Cart ({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addReview"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <TbStars className="text-2xl" />
              </span>
              <span>Add Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myBookings"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaCalendarCheck className="text-2xl" />
              </span>
              <span>My Bookings</span>
            </NavLink>
          </li>

          {/* Divider */}
          <div className="w-56">
            <div className="divider before:h-px! after:h-px! before:bg-white after:bg-white"></div>
          </div>

          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaHome className="text-2xl" />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-menu"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <IoMdMenu className="text-2xl" />
              </span>
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-shop/salads"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <FaShoppingBag className="text-2xl" />
              </span>
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className="flex items-center gap-2 text-md hover:text-white bg-transparent transition"
            >
              <span>
                <MdEmail className="text-2xl" />
              </span>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Right content  */}
      <div className="flex-1 bg-[#f8f8f8] h-screen overflow-y-scroll">
        <div className="container mx-auto p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
