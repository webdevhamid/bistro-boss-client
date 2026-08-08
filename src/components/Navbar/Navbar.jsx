import { Link, NavLink } from "react-router";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import "./Navbar.css";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [cart] = useCart();

  const menu = (
    <>
      <li>
        <NavLink to={"/"} className={`hover:text-[#eea000] bg-transparent transition`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"} className={`hover:text-[#eea000] bg-transparent transition`}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"} className={`hover:text-[#eea000] bg-transparent transition`}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to={"/our-menu"} className={`hover:text-[#eea000] bg-transparent transition`}>
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/our-shop/salads"}
          className={`hover:text-[#eea000] bg-transparent transition`}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`indicator hover:text-[#eea000] bg-transparent transition`}
          to="/dashboard/cart"
        >
          <span className="indicator-item badge badge-sm badge-secondary">+{cart.length}</span>
          <b>Cart</b>
          <FaCartPlus />
        </NavLink>
      </li>
    </>
  );

  // Logout user handler
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Logout",
          text: "User logged out successfully!",
          icon: "success",
        });
      })
      .error((err) => console.log(err));
  };
  return (
    <nav className="bg-black/30 text-white shadow-sm z-10 fixed top-0 w-full left-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-xl main-navbar"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="flex items-center justify-center gap-2 w-60">
            <div className="w-7">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="flex-1">
              <p className="uppercase text-xl font-semibold font-display!">Bistro Boss</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg uppercase main-navbar">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* <span>{user?.displayName}</span> */}
              <Link className="btn" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
