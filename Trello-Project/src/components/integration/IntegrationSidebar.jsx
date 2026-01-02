import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const IntegrationSidebar = () => {

    const activeClass =
        "rounded flex items-center justify-start bg-purple-300 px-2 py-2 mb-2 cursor-pointer font-semibold";
    const normalClass =
        "rounded flex items-center justify-start px-2 py-2 mb-2 cursor-pointer font-semibold hover:bg-purple-300";

    return (
        <>
            <div className="p-4 m-2 gap-5 w-[100%]">
                <div className="relative">
                    <IoSearchOutline className="absolute left-52 text-gray-500 top-3.5 " />
                    <input
                        className="border-1 border-slate-500 rounded px-3 mb-2 py-2 w-60"
                        type="text"
                        placeholder="Search all Integration"
                    />
                </div>

                <h1 className="text-gray-400 mb-2">Filter by:</h1>

                <div className="w-56">

                    <NavLink
                        to="/integrations"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        All integrations
                    </NavLink>

                    <NavLink
                        to="/integrations/analytics-reporting"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Analytics & reporting
                    </NavLink>

                    <NavLink
                        to="/integrations/automation"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Automation
                    </NavLink>

                    <NavLink
                        to="/integrations/board-utilities"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Board utilities
                    </NavLink>

                    <NavLink
                        to="/integrations/communication-collaboration"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Communication & collaboration
                    </NavLink>

                    <NavLink
                        to="/integrations/developer-tools"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Developer tools
                    </NavLink>

                    <NavLink
                        to="/integrations/file-management"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        File management
                    </NavLink>

                    <NavLink
                        to="/integrations/hr-operations"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        HR & operations
                    </NavLink>

                    <NavLink
                        to="/integrations/it-project-management"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        IT & project management
                    </NavLink>

                    <NavLink
                        to="/integrations/marketing-social-media"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Marketing & social media
                    </NavLink>

                    <NavLink
                        to="/integrations/product-design"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Product & design
                    </NavLink>

                    <NavLink
                        to="/integrations/sales-support"
                        className={({ isActive }) => (isActive ? activeClass : normalClass)}
                    >
                        Sales & support
                    </NavLink>
                </div>

                <div className="pt-4 pr-0 pb-4 pl-2">
                    <p className="text-xs">
                        Power-Ups allow you to vote, track, attach
                        files, share designs, and much more.
                    </p>
                    <a className="text-blue-400 underline text-xs">
                        Check out our Power-Ups
                    </a>
                    <p className="text-xs pt-2">
                        Build integrations that connect your apps to Trello.
                    </p>
                    <a className="text-blue-400 underline text-xs">
                        Learn about Trello for developers
                    </a>
                </div>
            </div>
        </>
    )
}

export default IntegrationSidebar;
