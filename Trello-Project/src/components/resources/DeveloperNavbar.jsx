import React from 'react'
import altassian from "../../assets/Atlassian.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const DeveloperNavbar = () => {
    return (
        <>
            <div className="h-16 flex items-center justify-between text-sm">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1.5 text-blue-800 border-r border-b-0 border-gray-300 pr-6 font-bold text-lg ">
                        <img
                            className="h-6 w-40"
                            src={altassian}
                            alt="Atlassian Logo"
                        />
                    </div>
                    <div className="text-xl font-medium text-gray-800 pr-6 ">
                        Developer
                    </div>
                    <div className="flex items-center space-x-8 text-base text-gray-700 font-normal">
                        <div className="group relative">
                            <button className="flex items-center hover:text-blue-600">
                                Documentation <FaAngleDown className="ml-1 text-xs" />
                            </button>
                        </div>
                        <div className="group relative">
                            <button className="flex items-center hover:text-blue-600">
                                Resources <FaAngleDown className="ml-1 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-6 text-base text-gray-800 font-normal">
                    <div className="flex items-center space-x-1 border-r border-b-0 border-gray-300 pr-6">
                        <a href="#" className="hover:text-blue-600 text-gray-700">
                            Get Support
                        </a>
                        <IoSearch className="text-lg" />
                    </div>
                    <div>
                        <a
                            href="#"
                            className="text-gray-800 font-bold border border-transparent hover:bg-gray-200 px-3 py-1 rounded hover:text-blue-600 transition duration-150"
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeveloperNavbar