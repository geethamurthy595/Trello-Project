import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../taskManagement/AtlassianFooter'
import HubSpotLogo from "../../../../assets/HubSpotLogo.svg" 
import Unito from "../../../../assets/unito.svg" 
import UnitoDown from "../../../../assets/unitodown.svg"
import PrivacyPolicy from "../../../../assets/hubspotPrivacyPolicy.svg"
import ContactSupport from "../../../../assets/hubspotContactSupport.svg"
import DataPrivacy from "../../../../assets/hubspotDataPrivacy.svg"
import Testimonial from "../../../../assets/hubspotTestimonial.webp"

import { Link } from 'react-router-dom'

const Hubspot = () => {
  return (
        <>
            <NavBar />
            <div className='mt-6'><a href="" className='ml-[300px] hover:underline cursor-pointer pr-2'>Power-Ups</a>/<a className='hover:underline cursor-pointer pl-2'>HubSpot + Trello Two-Way Sync</a></div>            
            <section className='w-[900px] flex flex-row justify-between mt-8 gap-16 m-auto'  >
                <div className='h-[750px] sticky top-10 transition-all'>
                    <img src={HubSpotLogo} alt="" className='w-60' />
                    <div className='flex gap-2 items-center w-[160px] text-[14px] mt-4 text-black/80'>
                        <img src={Unito} className='h-[16px] w-[16px]' alt="" />
                        <p>Made by Unito</p>
                    </div>
                    <div className='bg-gray-100 w-30 text-black/60 rounded-sm flex gap-2 mt-2 justify-center items-center'>
                        <img src={UnitoDown} className='h-[16px] w-[16px]'  alt="" />
                        <p>1,000 +</p>
                    </div>
                    <p className='border-[1px] border-gray-300 mt-3 mb-3'></p>
                    <h1 className='font-semibold text-[17px]'>Categories</h1>
                    <div className='flex flex-col justify-center mt-3 gap-2'>
                        <Link to="/power-ups/category/automation" className='bg-none border border-gray-200 text-black/80 text-[12px] h-8 w-22 rounded-sm  p-1 px-2 hover:bg-gray-200'>Automation</Link>
                        <Link to="/power-ups/category/communication-collaboration" className=' bg-none border border-gray-200 text-black/80 text-[12px] h-8 w-50 rounded-sm p-1 px-2 hover:bg-gray-200'>Communication&Collabaration</Link>
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
                        <p className='text-[14px] tracking-wide'>HubSpot + Trello Two-Way Sync stores personal data and is in compliance with <Link to="/legal/privacy-policy" className='text-blue-600 underline hover:cursor-pointer'>Trello's data and privacy practices.</Link></p>
                    </div>
                </div>
                <div className='w-170 '>
                    <div className='flex justify-between gap-10'>
                        <h1 className='text-[25px] font-bold text-black/80 '>HubSpot + Trello Two-Way Sync</h1>
                        <button className='bg-blue-700 rounded-sm px-2 border-none text-white hover:bg-blue-800 cursor-pointer'>Add Power-Up</button>
                    </div>
                    <p className='text-[23px] font-[500] mt-3 text-gray-800'>Integrate HubSpot with Trello to share automated 2-way updates between cards and tasks, deals or tickets.</p>
                    <p className='mt-3 text-[15px]'>Unito lets you sync Trello cards to HubSpot tasks, deals, or tickets with live 2-way updates automatically.</p>
                    <p className='mt-3 text-[15px]'>Stay aligned with support for key fields including due dates, assignees, test fields, custom fields, and much more.</p>

                    <h1 className='text-[23px] font-[500] mt-9 text-gray-800'>How does Unito's HubSpot - Trello integration work?</h1>
                    <p className='mt-3 text-[15px]'>Updates in Trello will automatically appear in HubSpot and vice versa.</p>
                    <p className='mt-3 text-[15px]'>The details of your Trello cards and HubSpot tickets, deals, and tasks become mappable fields that can be synced together in real-time.</p>
                    <p className='mt-3 text-[15px]'>Follow our <Link className='text-blue-600 underline hover:no-underline transition-transform'>step-by-step guide to connect HubSpot and Trello</Link> with Unito.</p>

                    <h1 className='text-[23px] font-[500] mt-9 text-gray-800'>What do Unito users think?</h1>
                    <p className='mt-3 text-[15px]'>“In just two weeks of using Unito, I’ve seen more HubSpot work getting crossed off and completed. We got an immediate sense of the difference.” - Milan Soekhai, Digital Marketing Manager, Krijgsman Retail Services</p>
                    <p className='mt-3 text-[15px]'>“Unito's easy to set up, and it syncs updates from HubSpot tasks and deals to other tools and back. It's a great solution for teams of all sizes.” - Scott Brinker, VP Platform Ecosystem, HubSpot</p>
                    <p className='border-[1px] border-gray-300 mt-7 mb-7'></p>

                    <img src={Testimonial} alt="" />
                    <p className='mt-3 text-[15px] font-bold text-black/80'>— Michael Pryor, Co-founder and Head of Product at Trello</p>

                    <h1 className='text-[23px] font-[500] mt-9 text-gray-800'>FAQ</h1>
                    <p className='text-[19px] font-[500] mt-6'>Does Unito connect with other tools?</p>
                    <p className='mt-3 text-[15px] w-[570px]'>Absolutely! You can sync Trello with Asana, Jira, Wrike, Google Sheets, Microsoft Excel, Airtable, GitLab, ClickUp, Azure DevOps, HubSpot, Salesforce, Notion, and <Link className='text-blue-600 underline hover:no-underline transition-transform'>many more apps!</Link></p>

                    <p className='text-[19px] font-[500] mt-6'>Do I need multiple Unito Power-ups to sync my other tools?</p>
                    <p className='mt-3 text-[15px]'>No! You only need one Power-Up to sync Trello cards with work items in any other tool we support.</p>

                    <p className='text-[19px] font-[500] mt-6'>Is Unito a free Power-Up?</p>
                    <p className='mt-3 text-[15px]'>Unito is free to try for 14 days, no credit card required. After that, you'll need to subscribe to one of our paid plans.</p>

                    <p className='text-[19px] font-[500] mt-6'>I'm having an issue, where can I turn to?</p>
                    <p className='mt-3 text-[15px] w-[570px]'>Our <Link className='text-blue-600 underline hover:no-underline transition-transform'>Help Center</Link> has troubleshooting guides for common Unito issues, information on all our integrations, and more!</p>

                    <p className='text-[19px] font-[500] mt-6'>Does Unito support custom fields?</p>
                    <p className='mt-3 text-[15px]'>We do! You can sync custom fields with Unito during your free trial. After that, you'll need to subscribe to one of our paid plans.</p>

                    <p className='text-[23px] font-[500] mt-6'>Get started for free now!</p>
                    <p className='mt-3 text-[15px]'>Start your free Unito trial through this power-up, or head to <Link className='text-blue-600 underline hover:no-underline transition-transform'>unito.io</Link> to learn more about our <Link className='text-blue-600 underline hover:no-underline transition-transform'>Trello - HubSpot integration</Link>.</p>
                </div>
            </section><br /><br />
           <AtlassianFooter/>
        </>
    )
}

export default Hubspot