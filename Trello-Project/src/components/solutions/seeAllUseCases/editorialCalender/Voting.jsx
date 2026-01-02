import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../taskManagement/AtlassianFooter'
import VotingIcon from "../../../../assets/VotingIcon.svg" 
import UnitoDown from "../../../../assets/unitodown.svg"
import PrivacyPolicy from "../../../../assets/hubspotPrivacyPolicy.svg"
import ContactSupport from "../../../../assets/hubspotContactSupport.svg"
import DataPrivacy from "../../../../assets/hubspotDataPrivacy.svg"
import { IoIosHeart } from "react-icons/io";
import { Link } from 'react-router-dom'
import Voting1 from "../../../../assets/Voting1.jpg"
import Voting2 from "../../../../assets/Voting2.jpg"
import Voting3 from "../../../../assets/Voting3.jpg"

const Voting = () => {
  return (
        <>
            <NavBar />
            <div className='mt-6'><a href="" className='ml-[300px] hover:underline cursor-pointer pr-2'>Power-Ups</a>/<a className='hover:underline cursor-pointer pl-2'>Voting</a></div>            
            <section className='w-[900px] flex flex-row justify-between mt-8 gap-13 m-auto'  >
                <div className='h-[750px] sticky top-10 transition-all'>
                    <img src={VotingIcon} alt="" className='w-60' />
                    <div className='flex gap-2 items-center w-[160px] text-[14px] mt-4 text-black/80'>
                        <img src={UnitoDown} className='h-[16px] w-[16px]' alt="" />
                        <p>Made by Trello Inc</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-[12px] bg-gray-100 w-23 ml-2 text-black/60 rounded-sm flex gap-2 mt-2 justify-center items-center'>
                            <img src={UnitoDown} className='h-[16px] w-[16px]'  alt="" />
                            <p>500,000 +</p>
                        </div>
                        <div className='text-[12px] bg-gray-100 w-23 text-black/60 rounded-sm flex gap-2 mt-2 justify-center items-center'>
                            <IoIosHeart className='h-[16px] w-[16px] text-red-500' />
                            <p>Staff pick</p>
                        </div>
                    </div>
                    <p className='border-[1px] border-gray-300 mt-3 mb-3'></p>
                    <h1 className='font-semibold text-[17px]'>Categories</h1>
                    <div className='flex flex-col justify-center mt-3 gap-2'>
                        <Link to="/power-ups/category/board-utilities" className='bg-none border border-gray-200 text-black/90 text-[12px] h-8 w-23 rounded-sm  p-1 px-2 hover:bg-gray-200'>Board utilities</Link>
                        <Link to="/power-ups/category/communication-collaboration" className=' bg-none border border-gray-200 text-black/90 text-[12px] h-8 w-50 rounded-sm p-1 px-2 hover:bg-gray-200'>Communication&Collabaration</Link>
                    </div>
                    <p className='border-[1px] border-gray-300 mt-3 mb-3'></p>
                    <div className='flex gap-2 items-center w-[160px] text-[14px] mt-4 text-black'>
                        <img src={ContactSupport} className='h-[16px] w-[16px]' alt="" />
                        <p className='hover:text-blue-600 cursor-pointer hover:underline'>Contact support</p>
                    </div>
                    <div className='flex gap-2 items-center w-[160px] text-[14px] mt-4 text-black'>
                        <img src={PrivacyPolicy} className='h-[16px] w-[16px]' alt="" />
                        <p className='hover:text-blue-600 cursor-pointer hover:underline'>Privacy policy</p>
                    </div> 
                    <p className='border-[1px] border-gray-300 mt-3 mb-3'></p>
                    <div className='flex gap-2 items-center w-[230px] text-[14px] mt-4 text-black'>
                        <img src={DataPrivacy} className='h-[16px] w-[16px]' alt="" />
                        <p className='text-[14px] tracking-wide'>Voting is in compliance with <Link to="/legal/privacy-policy" className='text-blue-600 underline hover:cursor-pointer'>Trello's data and privacy practices.</Link></p>
                    </div>
                </div>
                <div className='w-170 '>
                    <div className='flex justify-between gap-10'>
                        <h1 className='text-[25px] font-bold text-black/80 '>Voting</h1>
                        <button className='bg-blue-700 rounded-sm px-2 border-none text-white hover:bg-blue-800 cursor-pointer'>Add Power-Up</button>
                    </div>
                    <p className='mt-4 text-[15px]'>The Voting Power-Up for Trello lets you collect votes on Trello cards from your team, customers, and community,
                        making it easy to prioritize cards. Whether you are organizing a vacation with your friends, planning next week’s sprint, or crowdsourcing
                        input from your users on a public roadmap, use the Voting Power-Up to see in a glance what cards have the most votes across your entire board.</p>
                    <ul className="list-disc ml-10 mt-1 space-y-1">
                        <li className='text-[15px]'>Allow board, Workspace, or public members of Trello to vote on cards.</li>
                        <li className='text-[15px]'>Vote tallies display as card badges on the front of cards.</li>
                        <li className='text-[15px]'>See which members voted on cards to make follow-up a cinch.</li>
                        <li className='text-[15px]'>The Voting Power-Up is supported on the web and iOS and Android mobile devices.</li>
                    </ul><br />
                    <img src={Voting1} alt="" className='w-170 rounded-sm' /><br />
                    <img src={Voting2} alt="" className='w-170 rounded-sm' /><br />
                    <img src={Voting3} alt="" className='w-170 rounded-sm' /><br />
                </div>
            </section><br /><br />
           <AtlassianFooter/>
        </>
    )
}

export default Voting