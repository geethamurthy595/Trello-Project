import React from "react";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const UniversalFooter = () => {
  return (
    <div>
      <footer className="bg-[#091E42] text-gray-200 px-6 pt-0 pb-6 m-0 left-0 w-full">
        <div className="max-w-7xl mx-auto gap-10">
          {/* Top Logo + Login + Links */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
            {/* Logo + Login */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                {/*} <span className="bg-white text-blue-900 px-2 py-1 rounded-sm font-extrabold">
                </span>
                Trello*/}
                <Link to="/"><Logo /></Link>
              </h2>
              <Link
                to="/login"
                className="inline-flex text-white no-underline hover:underline"
              >
                Login
              </Link>
            </div>

            {/* Links */}
            <div className="flex items-center justify-evenly">
              {/* About Trello */}
              <Link to="/en/about" className="p-3 hover:bg-blue-950 transition-colors duration-200 cursor-pointer h-[100px] w-65 flex flex-col justify-center">
                <p className="font-semibold mb-2">About Trello</p>
                <p className="text-gray-300 text-sm">
                  What's behind the boards.
                </p>
              </Link>

              {/* Jobs */}
              <div className="p-3 hover:bg-blue-950 transition-colors duration-200 cursor-pointer h-[100px] w-65 flex flex-col justify-center">
                <p className="text-md font-semibold mb-2">Jobs</p>
                <p className="text-gray-300 text-sm">
                  Learn about open roles on the Trello team.
                </p>
              </div>

              {/* Apps */}
              <Link to="/platforms" className="p-3 hover:bg-blue-950 transition-colors duration-200 cursor-pointer h-[100px] w-65 flex flex-col justify-center">
                <p className="text-md font-semibold mb-2">Apps</p>
                <p className="text-gray-300 text-sm">
                  Download the Trello App for your Desktop or Mobile devices.
                </p>
              </Link>

              {/* Contact */}
              <div className="p-3 rounded-md hover:bg-blue-950 transition-colors duration-200 cursor-pointer h-[100px] w-65 flex flex-col justify-center">
                <p className="text-md font-semibold mb-2">Contact us</p>
                <p className="text-gray-300 text-sm">
                  Need anything? Get in touch and we can help.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Language */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-gray-300">
                <TbWorld className="text-2xl " />
                <select className="bg-[#091E42] text-2xl w-32">
                  <option>English</option>
                  <option>Espan`ol</option>
                  <option>Franc`ias</option>
                  <option>French</option>
                </select>
              </div>

              {/* Links */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="flex space-x-6 text-sm mr-7">
                  <a href="#" className="hover:underline text-white">
                    Notice at Collection
                  </a>
                  <br />
                  <a href="#" className="hover:underline text-white">
                    Privacy Policy
                  </a>
                  <br />
                  <a
                    href="#"
                    className="text-white no-underline hover:underline"
                  >
                    Terms
                  </a>
                  <br />
                  <span>Copyright © 2024 Atlassian</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl text-gray-300">
              <a
                href="#"
                className="hover:text-white text-white transform transition-all duration-200 hover:p-2 hover:shadow-inner rounded-full border h-7 w-7 flex justify-center items-center "
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-white text-white transform transition-all duration-200 hover:p-2 hover:shadow-inner rounded-full border h-7 w-7 flex justify-center items-center "
              >
                <CiFacebook />
              </a>
              <a
                href="#"
                className="hover:text-white text-white transform transition-all duration-200 hover:p-2 hover:shadow-inner rounded-full border h-7 w-7 flex justify-center items-center "
              >
                <CiLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-white text-white transform transition-all duration-200 hover:p-2 hover:shadow-inner rounded-full border h-7 w-7 flex justify-center items-center "
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="hover:text-white text-white transform transition-all duration-200 hover:p-2 hover:shadow-inner rounded-full border h-7 w-7 flex justify-center items-center "
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UniversalFooter;
