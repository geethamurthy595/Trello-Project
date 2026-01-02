import React from 'react'
import { Link } from 'react-router-dom'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'
import NavBar from '../../../../NavBar'

const DashCard = () => {
    return (
        <>

<NavBar/>
            <section className='w-[900px] flex flex-row m-auto mt-15 gap-15  '  >


                <div id="left" className='h-[100%]  w-[35%]  pt-10 sticky top-10 transition-all '>
                    <p>
                        <a href="" className=' '>Power-Ups/Dashcards</a></p>
                    <img src="https://trellegi.services.atlassian.com/dynamicIcon?doy=1" alt="" className=' mt-10' /><br />
                    <p>Made by Trello Inc.</p>
                    <p className='bg-gray-100 w-25 rounded-sm'>100,000 +</p><br />
                    <hr />
                    <h1 className='font-semibold '>Categories</h1>
                    <div className='flex gap-1 p-5'>
                        <Link to='/power-ups/category/automation' className='border-1 h-6 w-41 rounded-sm mb-[-15px] text-center hover:bg-gray-200 transition duration-200 text-[13px]'>Analytics & reporting</Link><br />
                        <Link to='/power-ups/category/board-utilities' className=' bg-none border h-6 w-30 rounded-sm  text-center hover:bg-gray-200 transition duration-200 text-[13px]'>Board utilities</Link>
                    </div>
                    <hr /><br />
                    <a href="https://support.atlassian.com/contact/#/" className='mb-5 hover:underline hover:text-blue-500'>Contact Support</a><br />
                    <a href="" className='hover:underline hover:text-blue-500'>Privacy Policy</a><br /><br /><hr />

                    <p className='mt-4 mb-5'>SLAs for Trello is in compliance with<Link className="text-blue-500 underline" to="https://www.atlassian.com/legal/privacy-policy" >Trello's data and privacy <br /> practices.</Link></p>
                    <hr />




                </div>
                <div id="right" className='w-[73%] '>
                    <div className='flex gap-80 w-200 '>
                        <h1 className='text-3xl font-medium '>Dashcards</h1>
                        <Link to='/power-ups/5decb67ce9bafb579ed0e794/enable' className='bg-blue-500 rounded-sm h-10 w-40 text-white text-center pt-2 mb-10'>Add Power-Up</Link>
                    </div>
                    <p className='p-5'>Dashcards are a new Trello card type that helps keep track of what you and your teams <br /> are doing.</p>
                    <img className='h-[273px] w-[591px]' src="https://trellegi.services.atlassian.com/static/screenshot.png" alt="" />
                    <p className='p-5'>Dashcards allows you to track any set of tasks across all the boards where you work.</p>
                    <ul className='list-disc'>
                        <li>Select the cards you want to track by a combination of filters: label, assignee, list, etc, <br /> or select one of the templates that solve common needs.</li>
                        <li>The number of cards matched is shown on a Dashcard on your board. Dashcards <br />update automatically as the cards change.</li>
                        <li>Click on a Dashcard to see the cards that match the filters, and further explore them.</li>
                        <li>Create multiple Dashcards to track tasks in different stages of progress.</li>
                    </ul>
                    <p className='pb-7 pt-3'>A Dashcard is like any other card, so you can arrange them on your boards for maximum <br /> visibility as you work. You can also assign Dashcards to members of your team and <br /> comment on them as with any other card.</p>
                    <hr />
                    <p className='pt-7'>We hope Dashcards will become an important building block in making the state of your <br /> work more visible and manageable, regardless of the way you choose to organize it.</p>
                </div>
            </section><br /><br />

            <AtlassianFooter />

        </>
    )
}

export default DashCard