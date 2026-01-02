import React from 'react'
import NavBar from '../../../../NavBar'
import { Link } from 'react-router-dom'
import logo1 from '../../../../../assets/logo1.svg'
import logo2 from '../../../../../assets/logo2.svg'
import logo3 from '../../../../../assets/logo3.svg'
import logo4 from '../../../../../assets/logo4.svg'
import logo5 from '../../../../../assets/logo5.svg'
import pipedrive_img from '../../../../../assets/pipedrive_img.png'
import pipedrive_video from '../../../../../assets/pipedrive_video.gif'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'





const Pipedrive = () => {
  return (
    <div>
        <NavBar />
        <div className='h-230 w-200 m-auto mt-8'>

                <div className='font-normal text-gray-900 text-xs tracking-wider cursor-pointer'>
                    <a href="" className=' hover:underline'>Power-Ups</a> / <a className=' hover:underline'>Pipedrive</a>
                </div>
                <div className='flex flex-wrap justify-between '>
                    < div className='h-160 sticky top-16 w-60 mt-6'>
                        <img src={pipedrive_img} alt="" height={255} width={240} />
                        <div className='mt-3 flex flex-wrap '>
                            <img src={logo1} alt="" height={3} width={15} /> <span className='text-xs p-1'>Made by Pipedrive Inc</span>
                        </div>
                        <div className='  flex flex-wrap justify-around bg-blue-50 rounded mt-2  w-20'>
                            <img src={logo2} alt="" className=' h-5 w-5 relative left-1' /> <span className='text-xs relative right-0 pt-0.5 '>10,000+</span>
                        </div><br /><hr className='border-gray-300 -mt-4' />
                        <p className='mt-2 font-semibold "text-gray-700 '>Categories</p>
                        <div className='mt-2'>
                            <button className="px-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50 ">HR & operations</button>
                            <button className="px-2 ml-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50"> Sales & support</button>
                        </div>
                        <hr className='border-gray-300 mt-5' />
                        <img src={logo3} alt="" className='h-4 w-7 relative top-3' />
                        <Link className="text-xs font-sans no-underline relative -top-2.5 left-7  hover:text-blue-800 hover:underline">Contact support</Link><br />
                        <img src={logo4} alt="" className='h-4 w-7 relative -top-1.5' />
                        <Link className="text-xs no-underline  relative -top-7 left-7 hover:text-blue-800  hover:underline">Privacy policy</Link>
                        <hr className='border-gray-300 -mt-2.5' />
                        <img src={logo5} alt="" className='h-5 w-8 relative top-6 right-2' />
                        <p className='text-xs  w-100 relative -top-3 left-6  '>Pipedrive is in compliance with <br /> <span className='" text-blue-600 underline hover:cursor-pointer "'>Trello's data and privacy <br />
                            practices.</span></p>
                        <hr className='border-gray-300 mt-2' />

                    </div>
                     <div className=' h-220 w-135  mt-6'>
                        <div><h1 className='text-2xl font-semibold w-40 mt-2 text-gray-900'>Pipedrive</h1> <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700  transition  ml-108 relative  -top-10 text-xs font-semibold hover:cursor-pointer">Add Power-Up</button></div>
                        
                        <p className="text-gray-900 text-xs w-125  leading-relaxed mb-3 font-medium">The <span className=" text-blue-600 underline hover:no-underline  cursor-pointer">Pipedrive</span>  Power-Up automatically creates Trello cards when you start, close or move a deal to a selected stage in your sales pipeline. It also lets you pull deal information straight into Trello from Pipedrive, ensuring automatic and faultless handover between sales and the rest of your organization.</p>
                        <p className="text-gray-900 text-xs leading-relaxed mb-3 font-medium tracking-wide">To get started, enable the Power-Up, then go to settings and customize.</p>
                        <h2 className='mt-5  text-base text-gray-900 font-semibold '>Screenshot</h2><br />
                        <img src={pipedrive_video} alt=""  /><br />
                    </div> 
                </div>
        </div>
        <AtlassianFooter/> 
    </div>
  )
}

export default Pipedrive



