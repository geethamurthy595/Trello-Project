import React from 'react'
import NavBar from '../../../../NavBar'
import { Link } from 'react-router-dom'
import logo1 from '../../../../../assets/logo1.svg'
import logo2 from '../../../../../assets/logo2.svg'
import logo3 from '../../../../../assets/logo3.svg'
import logo4 from '../../../../../assets/logo4.svg'
import logo5 from '../../../../../assets/logo5.svg'
import zoho_img from '../../../../../assets/zoho_img.png'
import zoho_video1 from '../../../../../assets/zoho_video1.jpg'
import zoho_video2 from '../../../../../assets/zoho_video2.jpg'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'



const Zohodesk = () => {
  return (
    <>
        <NavBar />
        <div className='h-230 w-200 m-auto mt-8'>
                <div className='font-normal text-gray-900 text-xs tracking-wider cursor-pointer'>
                    <a href="" className=' hover:underline'>Power-Ups</a> / <a className=' hover:underline'>Zoho Desk</a>
                </div>
                <div className='flex flex-wrap justify-between '>
                    < div className='h-160 sticky top-16 w-60 mt-6'>
                        <img src={zoho_img} alt="" height={255} width={240} />
                        <div className='mt-3 flex flex-wrap '>
                            <img src={logo1} alt="" height={3} width={15} /> <span className='text-xs p-1'>Made by Zoho</span>
                        </div>
                        <div className='  flex flex-wrap justify-around bg-blue-50 rounded mt-2  w-20'>
                            <img src={logo2} alt="" className=' h-5 w-5 relative left-1' /> <span className='text-xs relative right-0 pt-0.5 '>25,000+</span>
                        </div><br /><hr className='border-gray-300 -mt-4' />
                        <p className='mt-2 font-semibold "text-gray-700 '>Categories</p>
                        <div className='mt-2 -ml-2'>
                          
                            <button className="px-2 ml-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50"> Sales & support</button>
                            <button className="px-2 ml-2 mt-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50 ">IT & project management</button>
                        </div>
                        <hr className='border-gray-300 mt-5' />
                        <img src={logo3} alt="" className='h-4 w-7 relative top-3' />
                        <Link className="text-xs font-sans no-underline relative -top-2.5 left-7  hover:text-blue-800 hover:underline">Contact support</Link><br />
                        <img src={logo4} alt="" className='h-4 w-7 relative -top-1.5' />
                        <Link className="text-xs no-underline  relative -top-7 left-7 hover:text-blue-800  hover:underline">Privacy policy</Link>
                        <hr className='border-gray-300 -mt-2.5' />
                        <img src={logo5} alt="" className='h-5 w-8 relative top-6 right-2' />
                        <p className='text-xs  w-100 relative -top-3 left-6  '>Zoho Desk is in compliance with <br /> <span className='" text-blue-600 underline hover:cursor-pointer "'>Trello's data and privacy <br />
                            practices.</span></p>
                        <hr className='border-gray-300 mt-2' />

                    </div>
                     <div className=' h-300 w-135  mt-6'>
                        <div><h1 className='text-2xl font-semibold w-40 mt-2 text-gray-900'>Zoho Desk</h1> <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700  transition  ml-108 relative  -top-10 text-xs font-semibold hover:cursor-pointer">Add Power-Up</button></div>
                        
                        <p className="text-gray-900 text-xs w-120  leading-relaxed mb-3 font-medium">If you use Trello to manage everyday tasks, and Zoho Desk for your support activities, this extension can boost productivity and collaboration within your teams. The Zoho Desk Power-Up brings context and clarity to your everyday tasks and projects. You can now attach tickets and custom views to Trello cards, and see relevant summaries at a glance. Know when a ticket is due, what problem needs to be solved, and who the ticket owner is, without leaving Trello even for a minute. Collaborating with your customer service team has never been easier!</p>
                        <p className="text-gray-900 text-xs leading-relaxed mb-2 font-medium tracking-wide">Here are some things you can do with it:</p>
                        <ul className='list-inside  list-disc pl-3'>
                            <li className="text-gray-900 text-xs w-125  leading-relaxed mb-2 font-medium">Track and organize tickets according to tasks within the team, across departments</li>
                            <li className="text-gray-900 text-xs w-125  leading-relaxed mb-2 font-medium">Collaborate with your customer service team on tickets, and solve issues as they occur.</li>
                            <li className="text-gray-900 text-xs w-125  leading-relaxed mb-2 font-medium">Keep an eye on several tickets at once, by adding custom 'views' from Zoho Desk.</li>
                        </ul>

                        <h2 className='mt-5  text-base text-gray-900 font-semibold'>Attach tickets and ticket views to your Trello cards.</h2><br />
                        <img src={zoho_video1} alt="" /><br />
                         <h2 className='mt-5  text-base text-gray-900 font-semibold'>View and perform actions on attached tickets and ticket views.</h2><br />
                        <img src={zoho_video2} alt="" /><br />
                    </div> 
                </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <AtlassianFooter/> 
    </>
  )
}

export default Zohodesk
