import React from 'react'
import DeveloperNavbar from '../../DeveloperNavbar'
import { Outlet } from "react-router-dom";
import DevelopersSubNavbar from './DevelopersSubNavbar';

const DevelopersHome = () => {
  return (
    <>
        <div className='ml-5 mr-5'>
            <DeveloperNavbar/>
        </div>
        <div className=''>
            <div>
                <DevelopersSubNavbar/>
            </div>
            <Outlet/>
        </div>
    </>
  )
}

export default DevelopersHome