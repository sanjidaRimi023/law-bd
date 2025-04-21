import React from "react";

import FooterImg from "../assets/nf.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal bg-[#0F0F0F] footer-center p-10">
        <div className="flex items-center text-white gap-2">
          <img src={FooterImg} alt="Footer image" />
          <h2 className="text-3xl font-bold">Law.BD</h2>
        </div>
        <div>
          <ul className="flex gap-10 text-lg text-white">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/booking">My Booking</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/errorpage">Contact</NavLink>
            </li>
          </ul>
        </div>
        <hr className="border-t border-dashed border-gray-300 w-full" />

        

      </footer>
    </div>
  );
};

export default Footer;
