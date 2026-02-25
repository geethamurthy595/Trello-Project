import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import NavBar from '../../NavBar';
import UniversalFooter from '../../UniversalFooter';
import CompanyLogo from '../../../assets/CompanyLogo';
import PowerUpsSidebar from './PowerUpsSidebar';
import Featured from './Featured';
import { Outlet } from 'react-router-dom';
import AtlassianFooter from '../../solutions/taskManagement/AtlassianFooter';

const PowerUps = () => {
    return (
        <>
            <NavBar />
            <section className='w-full sticky  flex bg-[#1F1F21] text-[#BFC1C4] h-[100vh]'>
                <PowerUpsSidebar/>
                <Outlet/>
            </section>
            <footer className='bg-[#1F1F21]  items-center w-full h-[100%] text-[#BFC1C4]'>
                <div className='flex gap-4 items-center justify-center pt-50'>
                    <p>Templates</p>
                    <p>Pricing</p>
                    <p>AppsJobs</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>About</p>
                    <p>Help</p>
                    <p>Legal</p>
                    <p>Privacy</p>
                    <p>Integrations</p>
                    <p>Contact us</p>
                    <p>Terms</p>
                </div>
                <div className=' bg-[#1F1F21] pb-20 flex items-center gap-3 justify-center'>
                    <p><CompanyLogo/></p>
                    <p>© Copyright 2025. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default PowerUps
