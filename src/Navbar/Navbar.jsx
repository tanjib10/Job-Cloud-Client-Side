import userDefault from "../assets/user.png";
import logo from "../assets/profile.png";
// import { Link, NavLink } from "react-router-dom";
// import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have been successfully logged out!",
        });
      })
      .catch();
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-xl"
              : isActive
              ? "active text-xl underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-xl"
              : isActive
              ? "active text-xl  underline"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-xl"
              : isActive
              ? "active text-xl  underline"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-[#D2E3C8]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            <img className="w-8 rounded-full" src={logo} alt="" />
            Job Cloud
          </Link>
        </div>
        <div className="text-xl navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-center gap-2">
              <p className="text-white">{user.displayName}</p>
              <img className="w-8" src={user.photoURL} alt="" />
            </div>
          ) : (
            <img className="w-8" src={userDefault} alt="" />
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="text-xl font-semibold btn btn-ghost"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="text-xl font-semibold btn btn-ghost ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
