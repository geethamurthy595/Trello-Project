import React from 'react'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
import UniversalFooter from '../../../UniversalFooter'
import AtlassianFooter from '../AtlassianFooter'
const SlackCard = () => {
    return (
        <>
            <NavBar />

            <section className='w-[900px] flex flex-row gap-6 m-auto mt-15 '  >


                <div id="left" className='h-[750px] pt-10 sticky top-10 transition-all'>
                    <p>
                        <a href="" className=' '>Power-Ups/Slack</a></p>
                    <img src="https://pi-cdn.atl-paas.net/trello-slack/slack-logo-power-up-listing.svg" alt="" className='w-60 mt-10' /><br />
                    <p>Made by Trello Inc</p>
                    <p className='bg-gray-100 w-25 rounded-sm'>1,000,000 +</p><br />
                    <hr />
                    <h1 className='font-semibold '>Categories</h1>
                    <button className='bg-none border-1 h-8 w-30 rounded-sm mt-5'>Automation</button><br />
                    <button className=' bg-none border-1 h-8 w-70 rounded-sm mt-4 mb-5'>Communication&Collabaration</button>
                    <hr /><br />
                    <a href="https://support.atlassian.com/contact/#/" className='mb-5'>Contact Support</a><br />
                    <a href="">Privacy Policy</a><br /><br /><hr />

                    <p className='mt-4 mb-5'>Slack is in compliance with <a href="https://www.atlassian.com/legal/privacy-policy">Trello's data and privacy practices.</a></p>
                    <hr />




                </div>
                <div id="right" className='w-230 '>
                    <div className='flex gap-100'>
                        <h1 className='text-3xl font-medium '>Slack</h1>
                        <button className='bg-blue-500 rounded-sm h-10 w-30 mb-10'>Add Power-Up</button>
                    </div>
                    <p>Turn Slack into a productivity powerhouse with the Slack Power-Up for Trello. No matter where <br /> your team is working, the Slack Power-Up for Trello makes it simple to keep your communication <br /> and collaboration apps connected so that no brilliant ideas or important tasks fall through the <br /> cracks.</p>
                    <ul className="list-disc ml-10 space-y-1">
                        <li>Share information with your team or get feedback on a project by sending Trello cards to <br /> Slack channels or direct messages.</li>
                        <li>Setup configurable alerts to automatically notify Slack channels for activity in Trello at the <br /> board, list, and card level.</li>
                        <li>Get reminders for cards when you need them in Slack, or set reminders for another <br />teammate, so that no important tasks are ever forgotten.</li>
                        <li>Turn brainstorms in Slack into actionable items in Trello by attaching Slack conversation to <br />cards.</li>
                        <li>Bring even more functionality to the Slack Power-Up with the <a href="https://trello.com/platforms/slack" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Trello for Slack app</a>.</li>
                    </ul><br />
                    <img src="https://trello-slack.services.atlassian.com/power-up/images/screenshots/Slack_1.jpg" alt="" className='w-170 rounded-sm' /><br />
                    <img src="https://trello-slack.services.atlassian.com/power-up/images/screenshots/Slack_2.jpg" alt="" className='w-170 rounded-sm' /><br />
                    <img src="https://trello-slack.services.atlassian.com/power-up/images/screenshots/Slack_3.jpg" alt="" className='w-170 rounded-sm' /><br />
                    <img src="https://trello-slack.services.atlassian.com/power-up/images/screenshots/Slack_4.jpg" alt="" className='w-170 rounded-sm' /><br />
                    <img src="https://trello-slack.services.atlassian.com/power-up/images/screenshots/Slack_5.jpg" alt="" className='w-170 rounded-sm' /><br />
                </div>
            </section><br /><br />
           <AtlassianFooter/>
        </>
    )
}

export default SlackCard