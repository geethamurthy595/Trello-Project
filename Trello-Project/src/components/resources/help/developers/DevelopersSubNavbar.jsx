import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const DevelopersSubNavbar = () => {
  return (
    <>
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="h-12 flex items-center space-x-8 text-sm font-medium text-gray-700 ">
                <p href="#" className="font-bold h-full flex items-center">
                  Trello
                </p>
                <a
                  href="#"
                  className="hover:text-blue-600 h-full flex items-center"
                >
                  Guides
                </a>
                <div className="relative group">
                  <button className="flex items-center hover:text-blue-600">
                    Reference
                    <FaAngleDown className="ml-1 text-xs" />
                  </button>
                </div>
                <Link
                  to="changelog/"
                  className="hover:text-blue-600 h-full flex items-center"
                >
                  Changelog
                </Link>
              </nav>
            </div>
    </>
  )
}

export default DevelopersSubNavbar