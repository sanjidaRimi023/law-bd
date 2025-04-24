import React from "react";
import FooterImg from "../assets/nf.png";
import { Link } from "react-router";

import { AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal bg-[#0F0F0F] footer-center p-10">
        <div className="flex items-center text-white gap-2">
          <img src={FooterImg} alt="Footer image" />
          <h2 className="text-3xl font-bold">Law.BD</h2>
        </div>
        <div>
          <ul className="lg:flex gap-10 text-lg text-white">
            <li>
              <Link to="/" className="hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-green-500">My Booking</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-500">Blog</Link>
            </li>
            <li>
              <Link to="/errorpage" className="hover:text-green-500">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="border-t border-dashed border-gray-300 w-full" />
        <ul className="flex gap-4">
          <li>
            <Link to="https://www.facebook.com/profile.php?id=61554696036982" className="text-white text-3xl">
              <AiOutlineFacebook></AiOutlineFacebook>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/sanjida-akter-rimi-171086350/" className="text-white text-3xl">
              <FaLinkedin></FaLinkedin>
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/@SanjidaAkterRimi-r6i" className="text-white text-3xl">
              <FaYoutubeSquare></FaYoutubeSquare>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/sanjidaRimi023" className="text-white text-3xl">
              <FaGithub></FaGithub>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
