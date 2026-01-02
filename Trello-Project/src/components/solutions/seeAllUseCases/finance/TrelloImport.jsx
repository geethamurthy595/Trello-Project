import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../taskManagement/AtlassianFooter'
import { IoRocketOutline } from "react-icons/io5";
import powerup from '../../../../assets/powersups.png'
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import themostamaxingpowerup from '../../../../assets/themostamaxingpowerup.png'
import trelloImport from '../../../../assets/trelloimport.png'


const TrelloImport = () => {

    

    return (
        <>
            <NavBar />
                    
            <p className='ml-[320px] pt-[35px] mb-[-35px]'><a href="" className='text-[14px] '>Power-Ups / Import to Trello by Blue Cat (CSV, Excel)</a></p>
            <section className='w-[900px] flex flex-row m-auto mb-18 justify-center font-sans '  >
                <div id="left" className='h-[750px] pt-10 sticky top-10 mt-[-16px]  transition-all  w-[35%]'>
                    <img src={trelloImport} alt="" className='w-60 mt-8 mb-[-10px]' /><br />
                    <p className='flex items-center gap-2 text-[14px]'> <IoRocketOutline />  Made by Blue Cat</p>
                    <p className='bg-gray-100 w-26 rounded-sm text-[12px] flex gap-1 p-1 pl-3 pr-1'> <img className='h-[16px] w-[16px]' src={powerup} alt="" /> 100,000 +</p><br />
                    <hr className='w-60 border-b-0.5 border-gray-300' />
                    <h1 className='font-semibold mt-5'>Categories</h1>
                    <div className='flex items-center gap-2 mt-[-10px] mb-5'>
                        <button className='bg-none border-1 border-gray-300 rounded-sm mt-5 text-[12px] pt-[4px] pl-[8px] pr-[8px] pb-[4px]'>Board utilities</button><br />
                        <button className=' bg-none border-1 border-gray-300 rounded-sm mt-4  text-[12px] pt-[4px] pl-[8px] pr-[8px] pb-[4px]'>Analytics & reporting</button>
                    </div>
                    <hr className='w-60 border-b-0.5 border-gray-300' /><br />
                    <a href="https://support.atlassian.com/contact/#/" className=' flex items-center gap-2 text-gray-700 text-[14px] mt-[-10px]'><CiMail /> Contact Support</a><br />
                    <a href="" className='flex items-center gap-2 mt-[-25px]  text-gray-700 text-[14px]'> <IoIosInformationCircleOutline />Privacy Policy</a><br /><br />
                    <hr className='w-60 border-b-0.5 border-gray-300 mt-[-35px]' />
                    <div className='flex justify-center items-center gap-4 mt-4'>
                        <img className='h-[16px] w-[16px]' src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg" alt="" />
                        <div className='text-[14px] pr-15'>
                            <h1 className=''>Import to Trello by Blue Cat (CSV, Excel) is in compliance <br/>with <a href="" className='text-[#0052cc] underline'>Trello's data and privacy <br />  practices.</a> </h1>
                        </div>
                    </div>
                    <hr className='w-60 border-b-0.5 border-gray-300 mt-4 ' />

                </div>
                <div className='w-[65%] mt-[70px] ml-[-10px]'>
                    <div className='flex justify-between '>
                        <h1 className='text-[24px] font-bold '>Import to Trello by Blue Cat (CSV, Excel)</h1>
                        <button className='bg-[#1558BC] text-white pl-2 pr-2 rounded'>Add Power-Up</button>
                    </div>
                    <p className='text-[14px] mt-4'>Trello Import by <a href="" className='text-[#0052cc] underline hover:no-underline'>Blue Cat</a> lets you import cards from CSV or Excel spreadsheets directly into your Trello boards.</p>
                    <p>Hey! we're one of the <a href="" className='text-[#0052cc] underline hover:no-underline'>fastest growing power-ups of 2022</a> and <a href="" className='text-[#0052cc] underline hover:no-underline'>2023!</a></p>
                    
                    <div>
                        <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-8'>Watch the video!</h1>
                        <p className='text-[#292A2E] '>We're very happy that Brittany from <a href="" className='text-[#0052cc] underline hover:no-underline'>How I Trello</a> created this short video showing how to use the power-up. <a href="" className='text-[#0052cc] underline hover:no-underline'>Watch it here.</a></p>
                        <img className='m-auto rounded mt-6' src='https://imports.bluecatreports.com/listing/imports_youtube.png' alt="" />
                        
                    </div>
                    <div className='mb-8 mt-8'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>How to import into Trello</p>
                        <img className='m-auto rounded mt-6' src='https://imports.bluecatreports.com/listing/select-file.png' alt="" />
                        <ol className='flex flex-col gap-1 list-decimal ml-5 mt-5'>
                            <li>Add the Trello Import Power-Up to your board</li>
                            <li>Open the CSV or Excel file you want to import</li>
                            <li>Select how to map your data into Trello</li>
                            <li>Click the import button and wait as we create all your cards for you</li>
                        </ol>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Select how we map your data into Trello</p>
                        <img className='m-auto rounded mt-6' src='https://imports.bluecatreports.com/listing/mappings.png' alt="" />
                        <p className='text-[14px] text-[#292A2E]'>
                            For each column in your spreadsheet, you can select how we will import it into your Trello board. For data you don't want to match to a specific field in Trello you can simply add it to the card description.
                        </p>

                        <p className='text-[14px] text-[#292A2E]'>
                            If there is data we cannot import we will show that here so you can see what the issue is. You can expand sections to get additional information. To correct these errors you will either need to create the matching List/Label/Custom Field/etc on your Trello board or update your spreadsheet to change those values to match Trello. Or, you can ignore those issues and import the spreadsheet without that data.
                        </p>
                    </div>

                    <div className='mb-8 mt-8 flex flex-col gap-3 text-[14px] text-[#292A2E]'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Importing CSV, Excel and Google Sheets data to Trello</p>
                        <p className='text-[14px] text-[#292A2E]'>
                            Excel files saved as XLSX can be opened and imported. To import from Google Sheets you will need to save your file as a CSV file from google sheets, which can then be opened and imported.
                        </p>

                        <p >
                            The first row of the spreadsheet is used as headings so we know how to map the data into Trello.
                        </p>
                        <p >
                            You can take a look at a <a title='https://imports.bluecatreports.com/listing/Example%20Import%20Spreadsheet.csv' href="https://imports.bluecatreports.com/listing/Example%20Import%20Spreadsheet.csv" download="Example Import Spreadsheet.csv" className='text-[#0052cc] underline hover:no-underline'>simple example spreadsheet here</a> or any export created from in Trello can be imported using this power-up
                        </p>
                        <p className='pr-10'>We can handle all of these field names, they will be mapped into Trello as described below.</p>
                         <ul className='list-disc ml-6 mt-[-4px]'>
                            <li>name, title or card name: Any of these will be mapped to the <strong>card name</strong></li>
                            <li>description, card description or desc: Any of these will map to the <strong>card description</strong></li>
                            <li>list: the <strong>name of the list</strong> we should import this card into. If we cannot find that list the card is created in the first list on the board</li>
                            <li>members: the names of the members to assign this card to</li>
                            <li>labels: the names and/or colours of the labels to add to this card</li>
                            <li>due or due date: maps to the card due date</li>
                            <li><strong>Checklists</strong>
                                    <ul class="list-none ml-2">
                                        <li class="before:content-['◯'] before:text-[6px] before:mr-2 before:text-gray-600">Checklist: The <strong>Checklist name</strong> to import this checklist item into</li>
                                        <li class="before:content-['◯'] before:text-[6px] before:mr-2 before:text-gray-600">Checklist item: The <strong>Checklist item name</strong></li>
                                        <li class="before:content-['◯'] before:text-[6px] before:mr-2 before:text-gray-600">Checklist item due: The <strong>due date</strong> for this checklist item</li>
                                        <li class="before:content-['◯'] before:text-[6px] before:mr-2 before:text-gray-600">Checklist item member: The <strong>assigned member</strong> for this checklist item</li>

                                    </ul>
                            </li>
                         </ul>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Errors in your spreadsheets</p>
                        <p className='text-[14px] text-[#292A2E]'>
                           We will let you know if any of the data cannot be mapped into Trello, if you are happy with that then you can ignore the warnings and import. If there are issues during the import those will be reported once the import is complete.
                        </p>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Import a backup file to Trello</p>
                        <p className='text-[14px] text-[#292A2E]'>
                            If you take a backup of your Boards using Trello's export feature you can then use our free import tool to recreate any lost or changed data. Either import the entire spreadsheet to recreate everything, or edit it beforehand to select just the cards you want to recreate.
                        </p>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Pricing</p>
                        <p className='text-[14px] text-[#292A2E]'>
                                Imports by Blue Cat is free for your first 10 imports, after that it costs $19/month (or $190/year) for unlimited imports.
                        </p>
                    </div>

                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px] text-[#292A2E] font-semibold'>Once you're done importing check out our other great tools</p>
                        <p className='text-[#0052cc] text-[22px] font-semibold underline hover:no-underline'>Blue Cat Reports </p>
                        <p className='text-[14px] text-[#292A2E]'>
                            Our Reporting Power-Up is the number one reporting tool for Trello. There is a fully-featured 7-day free trial so give it a go and see the sort of reports you can create now all your data is in Trello. You can <a href="https://trello.com/power-ups/5d9c90aa18965066fcd44730/reports-by-blue-cat" className='text-[#0052cc] underline hover:no-underline'>check it out here</a>.
                        </p>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[#0052cc] text-[22px] font-semibold underline hover:no-underline'>Forms by Blue Cat </p>
                        <p className='text-[14px] text-[#292A2E]'>
                                Do you need a way for people to fill out forms and get cards created in Trello? Then look no further. Our <a href="https://trello.com/power-ups/6139de588901011c01baf52f/forms-by-blue-cat" className='text-[#0052cc] underline hover:no-underline'>Forms Power-Up</a> does just that, integrates with all the standard and custom Trello fields as well as attachments.                        </p>
                    </div>
                    <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[#0052cc] text-[22px] font-semibold underline hover:no-underline'>Exports for Trello</p>
                        <p className='text-[14px] text-[#292A2E]'>
                            Export your data from Trello, manually for free or pay to get scheduled exports direct to your inbox. Our <a href="https://trello.com/power-ups/6139de588901011c01baf52f/forms-by-blue-cat" className='text-[#0052cc] underline hover:no-underline'>Exports for Trello</a> does just that.  
                         </p>
                    </div>
                     <div className='mb-8 mt-8 flex flex-col gap-5'>
                        <p className='text-[22px]'>Our Trello guides</p>
                        <p className='text-[14px] text-[#292A2E]'>
                           See our guide to <a href="https://trello.com/power-ups/6139de588901011c01baf52f/forms-by-blue-cat" className='text-[#0052cc] underline hover:no-underline'>every free Trello power-up</a> does just that.  
                         </p>
                          <p className='text-[14px] text-[#292A2E]'>
                          Check out our reviews of <a href="https://trello.com/power-ups/6139de588901011c01baf52f/forms-by-blue-cat" className='text-[#0052cc] underline hover:no-underline'> every Trello reporting power-up</a> does just that.  
                         </p>
                    </div>

                </div>
            </section>
            <div className='mb-10'>
                <AtlassianFooter />
            </div>
        </>
    )
}

export default TrelloImport