import React from 'react'
import NavBar from '../../../../NavBar'
import { Link } from 'react-router-dom'
import logo1 from '../../../../../assets/logo1.svg'
import logo2 from '../../../../../assets/logo2.svg'
import logo3 from '../../../../../assets/logo3.svg'
import logo5 from '../../../../../assets/logo5.svg'
import AtlassianFooter from '../../../taskManagement/AtlassianFooter'


const Intercom = () => {
  return (
    <>
      <NavBar />
        <div className='h-230 w-200 m-auto mt-8'>
                <div className='font-normal text-gray-900 text-xs tracking-wider cursor-pointer'>
                    <a href="" className=' hover:underline'>Power-Ups</a> / <a className=' hover:underline'> Intercom</a>
                </div>
                <div className='flex flex-wrap justify-between '>
                    < div className='h-160 sticky top-16 w-50 mt-10'>
                        <img src="hjuytt" alt="" height={25} width={200} className='border-gray-300 '/>
                        <div className='mt-3 flex flex-wrap '>
                            <img src={logo1} alt="" height={3} width={15} /> <span className='text-xs p-1'>Made by  Intercom</span>
                        </div>
                        <div className='  flex flex-wrap justify-around bg-blue-50 rounded mt-2  w-20'>
                            <img src={logo2} alt="" className=' h-5 w-5 relative left-1' /> <span className='text-xs relative right-0 pt-0.5 '>25,000+</span>
                        </div><br /><hr className='border-gray-300 -mt-4' />
                        <p className='mt-2 font-semibold "text-gray-700 '>Categories</p>
                        <div className='mt-2 -ml-2'>
                          
                            <button className="px-2 ml-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50"> Communication & colloboration</button>
                            <button className="px-2 ml-2 mt-2 py-1 border-1 border-gray-300 text-xs rounded-md hover:cursor-pointer hover:bg-blue-50 ">Sales & support</button>
                        </div>
                        <hr className='border-gray-300 mt-5' />
                        <img src={logo3} alt="" className='h-4 w-7 relative top-3' />
                        <Link className="text-xs font-sans no-underline relative -top-2.5 left-7  hover:text-blue-800 hover:underline">Contact support</Link><br />
                        <hr className='border-gray-300' />
                        <img src={logo5} alt="" className='h-5 w-8 relative top-6 right-2' />
                        <p className='text-xs  w-100 relative -top-3 left-6  '>Intercom is in compliance with <br /> <span className='" text-blue-600 underline hover:cursor-pointer "'>Trello's data and privacy <br />
                            practices.</span></p>
                        <hr className='border-gray-300 mt-2' />

                    </div>
                     <div className=' h-200 w-135  mt-6'>
                        <div><h1 className='text-2xl font-semibold w-40 mt-2 text-gray-900'> Intercom </h1> <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700  transition  ml-108 relative  -top-10 text-xs font-semibold hover:cursor-pointer">Add Power-Up</button></div>
                        
                        <p className="text-gray-900 text-xs w-130   leading-relaxed mb-2 font-medium tracking-wide">The Intercom Power-Up helps your team add context to the feature requests and issues you're tracking in Trello. Quickly find and attach conversations, users and companies from Intercom directly to cards for easy reference.</p>
                        <p className="text-gray-900 text-xs w-128  leading-relaxed mb-2 font-medium tracking-wide">The Intercom Power-Up for Trello makes it easy to add context from Intercom to the issues and requests development teams are tracking in Trello. With conversations, users, and companies attached directly to individual cards, your customers will always be represented in the process.</p>
                        <p className="text-gray-900 text-xs w-130   leading-relaxed mb-2 font-medium tracking-wide">Add customer conversations about specific feature requests or bug issues to relevant Trello cards to help engineers and product teams get more context on the customer goals and frustrations that triggered these requests without the need to leave the tool they’re already using. Having those conversations on hand within the context of the larger feature request, development history, and other key details makes building customer-focused solutions that much easier.</p>
                        <p className="text-gray-900 text-xs w-130   leading-relaxed mb-2 font-medium tracking-wide">Attach conversations, users, and companies to Trello cards to:</p>
                        <ul className='list-inside  list-disc pl-3'>
                            <li className="text-gray-900 text-xs w-120  leading-relaxed mb-2 font-medium">Assess the priority of a request by seeing how many customers have requested a <br/> &nbsp; &nbsp;&nbsp;&nbsp;specific feature.</li>
                            <li className="text-gray-900 text-xs w-125  leading-relaxed mb-2 font-medium">Understand the context behind a feature request or bug report by seeing the <br/> &nbsp; &nbsp;&nbsp; conversations that triggered it.</li>
                            <li className="text-gray-900 text-xs w-125  leading-relaxed mb-2 font-medium">See which customers requested a feature or reported a bug, so you can follow up with <br/> &nbsp; &nbsp;&nbsp; them once the feature is live or the bug has been fixed.</li>
                        </ul>

                        <h2 className='mt-5  text-base text-gray-900 font-semibold'>Screenshots</h2><br />
                        <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-35">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p className='text-xs text-gray-700 mt-1 font-medium'>Preview unavailable</p>
      </div><br />
                         
                    </div> 
                </div>
        </div>
        <AtlassianFooter/> 

    </>
  )
}

export default Intercom
