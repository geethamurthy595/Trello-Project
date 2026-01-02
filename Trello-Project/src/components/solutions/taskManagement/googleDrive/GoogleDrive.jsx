import React from 'react'
import icon from "../../../../assets/trelloIcon.svg" 
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom';
import AtlassianFooter from '../AtlassianFooter';
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TrelloLock from "../../../../assets/Trello_Lock.svg"

const GoogleDrive = () => {
    
  return (
    <>
        <NavBar />
        <section className='w-[1050px] m-auto p-10'>
            <div>
                <Link to="/power-ups" className='hover:underline'>Power-Ups</Link>
                <span>  /  </span>
                <a href="" className='hover:underline'>Google Drive</a>
            </div>
            <div className='flex justify-between pt-7'>
                <div className=' w-[730px]'>
                    <img src="https://google-drive.trello.services/images/drive.png" alt="" height={240} width={240} />
                    <div className='flex'>
                        <img src={icon} alt="" height={16} width={16}/>
                        <p className='py-3 text-[16px] pl-2'>Made by Trello Inc</p>
                    </div>
                    <div className='flex border-1 border-gray-400 rounded-sm px-2 text-xs font-thin bg-gray-200 w-[100px]'>
                        <img src={icon} alt="" height={16} width={16}/>
                        <button className='pl-1'>2,000,000 +</button>
                    </div> <br />
                    
                    <hr  className="pb-3 w-full  text-gray-400" /> 
                    <h3 className='py-2'>Categories</h3>
                    <button className='border-1 border-gray-400 rounded-sm px-3 py-1 text-xs font-normal hover:bg-gray-200'><a href="">Communication & colloboration</a></button> <br />
                    <button className='border-1  border-gray-400 rounded-sm px-3 py-1 text-xs font-normal hover:bg-gray-200 mt-2'><a href="">File management</a></button>  <br /><br />
                    
                    <hr  className="pb-3 text-gray-400" />
                    <a className='px-1 text-sm flex items-center font-normal hover:underline' href=""> <CiMail /> &nbsp; Contact support</a>
                    <a className='px-1 pb-3 text-sm flex items-center font-normal hover:underline' href=""> <IoIosInformationCircleOutline /> &nbsp; Privacy policy</a> 
                    <hr  className="pb-3 text-gray-400" />
                    <div className='flex gap-2 items-center'>
                        <img src={TrelloLock} width={15} alt="" />
                        <div className='pb-6'>
                            <p>Google Drive is in compliance with</p>
                            <a href="" className=' underline text-blue-500'>Trello's data and privacy practices.</a>
                        </div>
                    </div>
                    <hr className='pb-22 text-gray-400' />
                    
                </div>
                <div className='pl-10 '>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-medium'>Google Drive</h1>
                        <button className='border-2 rounded-md px-2 text-1xl font-medium bg-blue-500 text-white'><a href="">Add Power-Up</a></button>
                    </div>
                    <p className='pt-3 text-gray-700'>The Google Drive Power-Up for Trello brings your files and folders to Trello cards. Search Google Drive right from Trello 
                        and attach relevant files and folders. See real-time previews and details and click back into Google Drive.
                    </p>
                    <ul className='list-disc pl-6 text-gray-700'>
                        <li>Built in file search lets you attach folders and files from Google Drive to a Trello card on any version of Trello.</li>
                        <li>See real-time information and previews for any Google Drive files or folders attached to cards.</li>
                    </ul>
                    <img src="https://google-drive.trello.services/images/screenshots/Google_Drive_5.jpg" alt="" className='rounded-md h-[300px] w-[600px] pt-5' />
                </div>
            </div>
            <AtlassianFooter/>
        </section>
    </>
  )
}

export default GoogleDrive