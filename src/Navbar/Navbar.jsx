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
            isPending ? "pending" : isActive ? "active underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active underline" : ""
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active underline" : ""
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBids"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active underline" : ""
          }
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active underline" : ""
          }
        >
          Bid Requests
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow text-white bg-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-sm lg:text-2xl"
          >
            <img className="w-10 lg:w-12 rounded-full" src={logo} alt="" />
            Job Cloud
          </Link>
        </div>
        <div className="text-xl navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-center gap-2">
              <p className="text-green-800">{user.displayName}</p>
              <img className="w-8 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <img className="w-10 rounded-full" src={userDefault} />
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="pl-2 btn-ghost text-sm lg:text-lg font-semibold"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link to="/login">
                <button className="px-2 text-sm lg:text-lg font-semibold">
                  Login
                </button>
              </Link>{" "}
              /
              <Link to="/register">
                <button className="text-sm lg:text-lg pl-2 font-semibold">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
