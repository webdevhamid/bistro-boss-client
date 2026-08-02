import { Link } from "react-router";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <Link to={"/"} className="hover:text-[#eea000] bg-transparent transition">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/contact-us"} className="hover:text-[#eea000] bg-transparent transition">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to={"/dashboard"} className="hover:text-[#eea000] bg-transparent transition">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={"/our-menu"} className="hover:text-[#eea000] bg-transparent transition">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to={"/our-shop/salads"} className="hover:text-[#eea000] bg-transparent transition">
          Our Shop
        </Link>
      </li>
      <li>
        <Link className="indicator hover:text-[#eea000] bg-transparent transition" to="/cart">
          <span className="indicator-item badge badge-secondary">100+</span>
          <b>Cart</b>
          <FaCartPlus />
        </Link>
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
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-xl"
            >
              {menu}
            </ul>
          </div>
          <Link tp="/" className="w-[60px]">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg uppercase">{menu}</ul>
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
