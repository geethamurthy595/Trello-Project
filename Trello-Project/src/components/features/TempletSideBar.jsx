import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const TempletSideBar = () => {
  const [activeLink, setActiveLink] = useState("/templates");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="">
      <div className="text-[14px] pl-50  w-[450px] rounded ">
        <nav className="pr-6 sticky top-[100px]">
          <input
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
            type="text"
            placeholder="Find template"
          />
          <ul className="space-y-1">
            <Link to="/templates">
              <li
                onClick={() => handleLinkClick("/templates")}
                className={`py-1 px-8 ${
                  activeLink === "/templates"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 font-semibold rounded cursor-pointer flex items-center`}
              >
                <FaRegStar />
                Featured
              </li>
            </Link>
            <Link to="/templates/business">
              <li
                onClick={() => handleLinkClick("/templates/business")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/business"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Business
              </li>
            </Link>
            <Link to="/templates/design">
              <li
                onClick={() => handleLinkClick("/templates/design")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/design"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Design
              </li>
            </Link>
            <Link to="/templates/education">
              <li
                onClick={() => handleLinkClick("/templates/education")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/education"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Education
              </li>
            </Link>
            <Link to="/templates/engineering">
              <li
                onClick={() => handleLinkClick("/templates/engineering")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/engineering"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Engineering
              </li>
            </Link>
            <Link to="/templates/marketing">
              <li
                onClick={() => handleLinkClick("/templates/marketing")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/marketing"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Marketing
              </li>
            </Link>
            <Link to="/templates/operations-hr">
              <li
                onClick={() => handleLinkClick("/templates/operations-hr")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/operations-hr"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                HR & Operations
              </li>
            </Link>
            <Link to="/templates/personal">
              <li
                onClick={() => handleLinkClick("/templates/personal")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/personal"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Personal
              </li>
            </Link>
            <Link to="/templates/productivity">
              <li
                onClick={() => handleLinkClick("/templates/productivity")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/productivity"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Productivity
              </li>
            </Link>
            <Link to="/templates/product-management">
              <li
                onClick={() => handleLinkClick("/templates/product-management")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/product-management"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Product management
              </li>
            </Link>
            <Link to="/templates/project-management">
              <li
                onClick={() => handleLinkClick("/templates/project-management")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/project-management"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Project management
              </li>
            </Link>
            <Link to="/templates/remote-work">
              <li
                onClick={() => handleLinkClick("/templates/remote-work")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/remote-work"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Remote work
              </li>
            </Link>
            <Link to="/templates/sales">
              <li
                onClick={() => handleLinkClick("/templates/sales")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/sales"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Sales
              </li>
            </Link>
            <Link to="/templates/support">
              <li
                onClick={() => handleLinkClick("/templates/support")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/support"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Support
              </li>
            </Link>
            <Link to="/templates/team-management">
              <li
                onClick={() => handleLinkClick("/templates/team-management")}
                className={`py-1 px-8 ${
                  activeLink === "/templates/team-management"
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700"
                } hover:bg-gray-400 rounded cursor-pointer`}
              >
                Team management
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TempletSideBar;
