import React from "react";
import NavImg from "../assets/regulation.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mx-4 lg:mx-0 my-4">
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              My Booking
            </NavLink>
              
            </li>
            <li><NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Blog
            </NavLink></li>
            <li><NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Contact
            </NavLink></li>
          </ul>

          {/* Logo Section */}
          <div className="flex items-center ml-4">
            <img src={NavImg} alt="Navbar logo" className="h-8 w-8" />
            <h2 className="lg:text-3xl text-xl font-bold">Law.BD</h2>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-xl text-[#0F0F0FB3]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#09982F] underline" : "text-gray-700"} hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="rounded-4xl px-6 py-2 overflow-hidden group bg-[#0EA106] relative hover:bg-gradient-to-r hover:from-[#0EA106] hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative text-xl cursor-pointer">Contact Now</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
