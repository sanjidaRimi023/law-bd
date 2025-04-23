import React from "react";

import NavImg from "../assets/regulation.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mx-4 lg:mx-0 my-4">
        <div className="flex items-center gap-2">
          <img src={NavImg} alt="Navbar image" />
          <h2 className="lg:text-3xl text-xl font-bold">Law.BD</h2>
        </div>
        <ul className="hidden  md:flex gap-10 text-xl text-[#0F0F0FB3] ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#09982F] underline" : "text-gray-700"
                } hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#09982F] underline" : "text-gray-700"
                } hover:underline hover:text-green-400 transition duration-200`
              }
            >
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#09982F] underline" : "text-gray-700"
                } hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/errorpage"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#09982F] underline" : "text-gray-700"
                } hover:underline hover:text-green-400 transition duration-200`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Link className="rounded-4xl px-6 py-2 overflow-hidden group bg-[#0EA106] relative hover:bg-gradient-to-r hover:[#0EA106] hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative text-xl cursor-pointer">Contact Now</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
