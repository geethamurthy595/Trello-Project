import React from 'react'
import NavBar from "../../NavBar";
import small3 from '../../../assets/small3.svg';
import small4 from '../../../assets/small4.gif'
import small5 from '../../../assets/small5.gif'
import { Link } from 'react-router-dom'; 
import small1 from '../../../assets/small1.png'
import small6 from '../../../assets/small6.svg'
import small2 from '../../../assets/small2.png'

import { FiInfo } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
const ListLimit = () => {
    return (
    <>
    <NavBar />
        <div className=" p-6 ml-60 mb--10"><Link to="/power-ups">Power-Ups</Link>/ <a href="">List Limits</a></div>
    <section className=" border-red-500 h-[140vh]  flex justify-center">
        <div className="  border-green-500 w-[300px] h-200 p-5 sticky top-10">
            <div  className='mt-3 flex'>
            <img src={small3} height={50}></img>
            </div>
            <div className='flex'><img src={small1} height={50}></img><span className='text-xs p-1'>Made by Atlassian</span></div>
            <div className=' border-solid flex p-2'>
                <img src={small1} alt=""  className="bg-gray-200"/><button className='text-xs bg-gray-200'>100,000+</button>
            </div>
            <hr /><br />
            <p>Categories</p><br />
            <button className="px-3 py-1  border-1 text-sm rounded-md">IT  & project management</button> <br />
            <button className="px-3 py-1 border-1 text-sm rounded-md mt-2.5 mb-4.5">Board utilities</button>
            <hr />
            <div className="flex mt-5 "><MdOutlineMailOutline className="m-1 " />
        <Link to="/login"
            className="text-sm  hover:text-blue-800 ">
            Contact support
        </Link></div>
            <div className="flex"><FiInfo  className='mt-2'/>
                <p className=" ">privacy policy</p><br /></div><br />
                <hr />
            
            <div className='flex mt-3'><img src={small6} className="h-10 w-3 mt-5 mr-2" alt="logo" /><p className=" ">List Limits is in compliance with 
                <span className="text-blue-800 underline">Trello's data and privacy practices.</span></p></div><br /><hr />
            </div><hr />
        
        <div className=" border-blue-500 w-[700px] h-[145vh] px-10 pt-3">
            <div className="flex justify-between ">
                <h1 className="text-2xl font-semibold ">List Limits</h1>
                <button className="bg-blue-600 text-white p-2  rounded-xl">Add power-up</button>
            </div><br />
            <p>Set a limit on your lists and we'll highlight the list if the number of cards in it passes this limit.</p>
            <br />
            <img src={small4} alt="logo" /><br />
            <img src={small5} alt="logo" /><br />
            <Link className='underline text-blue-400'>Check out this blog to find out how to optimize your team's process with work-in-progress limits.</Link>
        </div> 
        </section>
        <div className="pt-5  flex justify-center mt-10">
            <ul className="flex gap-4 mb-2 mt-0">
                <li><Link to="/templates" className="underline">Templates</Link></li>
                <li><Link to="/pricing" className="underline">Pricing</Link></li>
                <li><Link to="/platforms" className="underline">Apps</Link></li>
                <li><Link to="/company/careers" className="underline">Jobs</Link></li>
                <li><Link to="/blog" className="underline">Blog</Link></li>
                <li><Link to="/cloud/trello/" className="underline">Developer</Link></li>
                <li><Link to="/about" className="underline">About</Link></li>
                <li><Link to="/trello/" className="underline">Help</Link></li>
                <li><Link to="/legal/atlassian-customer-agreement#intro"className="underline">Legal</Link></li>
                <li><Link to="/legal/privacy-policy" className="underline">Privacy</Link></li>
                <li><Link to="/integrations" className="underline">Integrations</Link></li>
                <li><Link to="/contact/" className="underline">Contact us</Link></li>
                <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Terms</Link></li>
            </ul>
        </div>
        <footer>
        <div className="m-auto flex flex-wrap justify-center w-120">
            <img src={small2} alt="" width={170} />
            <p className="text-xs font-medium  text-gray-700 pt-1  pl-3"> © Copyright 2025. All rights reserved.</p>
        </div>
    </footer>
    <br /><br /><br />
    </>
    )
}

export default ListLimit

