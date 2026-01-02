import React from 'react'
import { Link } from 'react-router-dom'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'
import NavBar from '../../../../NavBar'

const SlasCard = () => {
    return (
        <>
            <NavBar />

            <section className='w-[900px] flex flex-row m-auto mt-15 gap-15  '  >


                <div id="left" className='h-[100%]  w-[35%]  pt-10 sticky top-10 transition-all '>
                    <p>
                        <a href="" className=' '>Power-Ups/SLAs for Trello</a></p>
                    <img src="https://emgoto.github.io/trello-sla/img/hourglass.png" alt="" className=' mt-10' /><br />
                    <p>Made by Emma Goto</p>
                    <p className='bg-gray-100 w-25 rounded-sm'>5,000 +</p><br />
                    <hr />
                    <h1 className='font-semibold '>Categories</h1>
                    <div className='flex flex-col'>
                        <Link to='/power-ups/category/it-project-management' className='border-1 h-8 w-55 rounded-sm mb-[-15px]'>IT & Project Management</Link><br />
                        <Link to='/power-ups/category/automation' className=' bg-none border h-8 w-30 rounded-sm  '>Automation</Link>
                    </div>
                    <hr /><br />
                    <a href="https://support.atlassian.com/contact/#/" className='mb-5 hover:underline hover:text-blue-500'>Contact Support</a><br />
                    <a href="" className='hover:underline hover:text-blue-500'>Privacy Policy</a><br /><br /><hr />

                    <p className='mt-4 mb-5'>SLAs for Trello is in compliance with<Link className="text-blue-500 underline" to="https://www.atlassian.com/legal/privacy-policy" >Trello's data and privacy <br /> practices.</Link></p>
                    <hr />




                </div>
                <div id="right" className='w-[65%] '>
                    <div className='flex gap-80 w-200 '>
                        <h1 className='text-3xl font-medium '>SLAs for Trello</h1>
                        <Link to='/power-ups/5decb67ce9bafb579ed0e794/enable' className='bg-blue-500 rounded-sm h-10 w-40 text-white text-center pt-2 mb-10'>Add Power-Up</Link>
                    </div>
                    <p className='p-5'>This free Power-Up allows you to see at a glance whether cards on your board are <br /> meeting their service-level agreements by showing currently running SLAs on the front of <br /> the card:</p>
                    <img className='h-[273px] w-[591px]' src="https://raw.githubusercontent.com/emgoto/trello-sla/master/docs/img/card-front.png" alt="" />
                    <p className='p-5' >Create start and stop conditions for your SLAs based off which list a card is in:</p>
                    <img className='h-[273px] w-[591px]' src="https://emgoto.github.io/trello-sla/img/sla-settings.png" alt="" />
                    <p className='p-5'>See both running and stopped SLAs on the back of the card:</p>
                    <img className='h-[273px] w-[591px]' src="https://emgoto.github.io/trello-sla/img/card-back.png" alt="" />
                    <p className='p-5'>To get started, install this Power-Up and click the SLAs button in the top right corner of <br /> your board:</p>
                    <img className='h-[273px] w-[591px]' src="https://emgoto.github.io/trello-sla/img/getting-started.png" alt="" />
                    <p className='p-5'>This Power-Up is no longer in active development!</p>
                </div>
            </section><br /><br />

            <AtlassianFooter />

        </>
    )
}

export default SlasCard