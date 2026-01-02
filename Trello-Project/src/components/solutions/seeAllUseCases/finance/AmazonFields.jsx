import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../taskManagement/AtlassianFooter'
import { IoRocketOutline } from "react-icons/io5";
import powerup from '../../../../assets/powersups.png'
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import themostamaxingpowerup from '../../../../assets/themostamaxingpowerup.png'

const AmazonFields = () => {
    return (
        <>
            <NavBar/>

            <section className='w-[900px] flex flex-row m-auto mb-18 justify-center '  >
                <div id="left" className='h-[750px] pt-10 sticky top-10 mt-[-16px]  transition-all  w-[35%]'>
                    <p>
                        <a href="" className='text-[14px] '>Power-Ups / Amazing Fields</a></p>
                    <img src='https://www.amazingpowerups.com/images/trello/amazing_fields_icon.svg' alt="" className='w-60 mt-8' /><br />
                    <p className='flex items-center gap-2 text-[14px]'> <IoRocketOutline />  Made by Amazing PowerUps</p>
                    <p className='bg-gray-100 w-26 rounded-sm text-[12px] flex gap-1 p-1 pl-3 pr-1'> <img className='h-[16px] w-[16px]' src={powerup} alt="" /> 1,000,000 +</p><br />
                    <hr className='w-60 border-b-0.5 border-gray-300' />
                    <h1 className='font-semibold mt-5'>Categories</h1>
                    <div className='flex items-center gap-2 mt-[-10px] mb-5'>
                      <button className='bg-none border-1 border-gray-300 rounded-sm mt-5 text-[12px] pt-[4px] pl-[8px] pr-[8px] pb-[4px]'>Board utilities</button><br />
                    <button className=' bg-none border-1 border-gray-300 rounded-sm mt-4  text-[12px] pt-[4px] pl-[8px] pr-[8px] pb-[4px]'>Analytics & reporting</button>
                    </div>
                    <hr className='w-60 border-b-0.5 border-gray-300'/><br />
                    <a href="https://support.atlassian.com/contact/#/" className=' flex items-center gap-2 text-gray-500 '><CiMail /> Contact Support</a><br />
                    <a href="" className='flex items-center gap-2 mt-[-20px]  text-gray-500'> <IoIosInformationCircleOutline />Privacy Policy</a><br /><br />
                    <hr className='w-60 border-b-0.5 border-gray-300 mt-[-25px]'/>
                    <div className='flex justify-center items-center gap-4 mt-4'>
                      <img className='h-[16px] w-[16px]' src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg" alt="" />
                      <div className='text-[14px] pr-15'>
                      <h1 className=''>Amazing Fields stores personal data and is in compliance with <br /> <a href="" className='text-[#0052cc] underline'>Trello's data and privacy <br />  practices.</a> </h1>
                    </div>
                    </div>
                    <hr className='w-60 border-b-0.5 border-gray-300 mt-4 ' />
                    
                </div>
                <div className='w-[65%] mt-[70px] ml-[-10px]'>
                 <div className='flex justify-between '>
                   <h1 className='text-[24px] font-bold '>Amazing Fields</h1>
                  <button className='bg-[#1558BC] text-white pl-2 pr-2 rounded'>Add Power-Up</button>
                 </div>
                 <h1 className='text-[27px] text-[#292A2E] font-semibold'>Custom Fields, Progress Bars, And More</h1>
                 <p className='text-[14px] mt-4'>The most trusted Power-Up for adding structured data and progress bars to Trello cards.</p>
                  <img className='mt-6 rounded' src="https://api.amazingpowerups.com/api/status/amazing-fields?page=powerup_listing" alt="" />
                  <div className='flex text-[12px] flex-wrap font-mono mt-6 gap-0.5'>
                    <p className='flex items-center gap-2 border-1 border-gray-400 rounded shrink-0 bg-[#F0F1F2] pl-2 pr-2 h-[20px] '><FaStar className='text-[#E1BC37]' />Featured by Trello</p>
                    <p className='flex items-center gap-2 border-1 border-gray-400 rounded shrink-0 bg-[#F0F1F2] pl-2 pr-2 h-[20px] ml-1'>🏆 250,000+ boards </p>
                    <p className='flex items-center gap-2 border-1 border-gray-400 rounded shrink-0 bg-[#F0F1F2] pl-2 pr-2 h-[20px] ml-1'>🚀 Fastest growing Power-Up of 2022</p>
                    <p className='flex items-center gap-2 border-1 border-gray-400 rounded shrink-0 bg-[#F0F1F2] pl-2 pr-2 h-[20px] '>🎖️ #1 New Trello Power-Up of 2021</p>
                    <p className='flex items-center gap-2 border-1 border-gray-400 rounded shrink-0 bg-[#F0F1F2] pl-2 pr-2 h-[20px] ml-1'>💙 Community Favorite</p>
                  </div>
                   <hr className='border-b-1 border-gray-300 mt-8' />
                   <div>
                     <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-8'>Getting Started</h1>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>My New Favorite Trello Power-Up: Amazing Fields Tutorial</p>
                     <img className='m-auto rounded mt-6' src={themostamaxingpowerup} alt="" />
                     <p className='mt-5'>
                      There are a few short steps to get started using the Amazing Fields Power-Up. See the Amazing Fields docs site for a tutorial: <a className='text-[#0052cc] underline' href="https://docs.amazingpowerups.com/article/18-getting-started">Getting Started</a>
                     </p>
                   </div>
                   <div className='mb-8'>
                     <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-8'>The Amazing Features</h1>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🗃️ Add Custom Fields (Free)</p>
                     <p className='mt-5'>
                      Important data gets lost in descriptions and comments. Add fields for text, checkboxes, dropdowns, numbers, date, time, and progress bars that stay visible.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_custom-fields.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🧮 Create Calculated Fields</p>
                     <p className='mt-5'>
                      Use formulas just like you would in a spreadsheet to calculate field values. Supports 100+ of the most common spreadsheet functions.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_formulas.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>📊 Use Built-In Progress Bars</p>
                     <p className='mt-5'>
                      See progress at a glance. Configure the style, width, range and more. Link a progress bar to a checklist to show progress on a task.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_progress-bars.svg' alt="" />
                   </div>
                    <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🗂️ Group Fields With Tabs & Headers</p>
                     <p className='mt-5'>
                      Neatly organize any number of fields. Use tabs and headers to separate fields to quickly find relevant data.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_tabbed-sections.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>👀 Control Field Visibility & Permissions</p>
                     <p className='mt-5'>
                      Configure which fields show on the front or back of cards. Also manage permissions to set who can see a specific field. Restrict who can edit or view any field. Built on top of the existing Trello permissions model, Amazing Fields lets you determine who view/edit each field. You can specify a user type or individual user.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_field-visibility.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🎨 Set Rule-Based Coloring</p>
                     <p className='mt-5'>
                      Signal priority and status with formatting rules that set the color of a field based on their value.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_rule-based-coloring.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🔗 Reference Cards & Team Members</p>
                     <p className='mt-5'>
                      Connect cards across boards. Have your fields reference customer cards or project team members. Build your boards as databases that connect in any way you need.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_reference-cards.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🔏 Set Input Validation</p>
                     <p className='mt-5'>
                      Restrict text input to specific formats like email, phone numbers, URLs, time durations, part numbers, ticket id, etc. Amazing Fields comes with preset options and lets you define your own as needed.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_input-validation.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🔁 Combine With Trello Custom Fields</p>
                     <p className='mt-5'>
                      Amazing Fields integrates with Trello’s Custom Fields (on paid plans) to enable automation, native filtering, Trello mobile app capabilities, and more.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_custom-fields.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>🚦 Create Dropdown Lists</p>
                     <p className='mt-5'>
                      Create a single-select or multi-select dropdown list of color-coded options. Useful for card tags, workflow stages, categories, ratings, and more.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_multi-select.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>📋 Table View & Export Card Data</p>
                     <p className='mt-5'>
                      View all cards at a glance, and export the board – including fields – to a CSV file ready to use in Excel, Google Sheets, or other spreadsheet software.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_export.svg' alt="" />
                   </div>
                   <div className='mb-8'>
                     <p className='text-[25px] text-[#292A2E] font-semibold'>♻️ Backup Your Boards</p>
                     <p className='mt-5'>
                      Automatically backup for your board and all field data. Keep everything safe and secure within your Trello account for easy disaster recovery and archival.
                     </p>
                     <img className='m-auto rounded mt-6' src='https://www.amazingpowerups.com/images/listing/listing_board-backup.svg' alt="" />
                   </div>

                   <div>
                    <hr  className='border-b-1 border-gray-300 mt-8'  />
                    <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>Make Trello Fit Your Workflow Needs</h1>
                      <p className='font-semibold'>How Does It Help You?</p>
                      <ul className='list-disc pl-4 text-[14px] text-justify pr-8 p-2'>
                        <li className='mb-1'>⚙️ <span className='font-semibold'>Customize</span> Trello to work in the way you need: use Amazing Fields to make Trello work for your workflow leveraging easy to use customization.</li>
                        <li>🗃️ <span className='font-semibold'>Organize data in ways that make sense to you and your team</span> : keep your data and information organized without sacrificing the power of Trello.</li>
                        <li>🪄 <span className='font-semibold'>Add fields with better visuals and more customization than Trello alone</span>: choose from hundreds of different combinations and features to build exactly what you need.</li>
                        <li>🔎 <span className='font-semibold'>Collect field data on the Trello free plan</span>: allows fields and customization for free on both Trello free and premium plans.</li>
                      </ul>
                    </div>
                    <hr  className='border-b-1 border-gray-300 mt-8'  />
                     <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>Join Over 252,000+ Happy Users</h1>
                      <p className='font-semibold'>Testimonials sent in by users:</p>
                      <ul className='list-disc pl-4 text-[14px] text-justify pr-8 p-2 text-[#292A2E]'>
                        <li className='mb-1'>"It offers to customize EVERYTHING on the fields, it is <strong>what Trello was missing</strong>." - Ana H</li>
                        <li>"I appreciate the continuing updates and responses to my questions from the maintainer.  It <strong> wasn't just a power-up that was made and forgotten about.</strong>" - Michael E</li>
                        <li>"It <strong>answered my most annoying problems</strong> with the Trello workflow." - <strong>Ville K</strong></li>
                        <li>"I can't believe there aren't more apps that offer these features -- <strong>so well done</strong> and thank you so much for developing this!!" - <strong>Cathi B</strong></li>
                        <li>"This is <strong>one of the best powerups on Trello</strong> I have found in my last 10+ years of using Trello boards. Simply Amazing!!!" - <strong>Yogesh B</strong></li>
                        <li>"Your Power Up is awesome! It should be named <strong>Awesome</strong> Fields!!" - <strong>Gisele P</strong></li>
                      </ul>
                    </div>
                    <hr  className='border-b-1 border-gray-300 mt-8'  />

                    <div className='text-[#292A2E]'>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>Awards & Recognition</h1>
                      <p className='mb-2' >🚀 Awarded Fastest growing PowerUp of 2022!!</p>
                      <p className='mb-2'  >🎖️ Awarded #1 New Trello PowerUp of 2021!!</p>
                      <p className='mb-2' >ℹ️ Referenced {'>100 times by the Trello community'}</p>
                      <p className='mb-2'   >🗣️ Featured frequently on How I Trello</p>
                    </div>
                   </div>
                    <hr  className='border-b-1 border-gray-300 mt-8'  />
                   <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>What Sets Amazing Fields Apart</h1>
                      <p >I built and refined Amazing Fields based upon feedback from users.  I think this has set Amazing Fields apart from other Trello powerups.</p>
                      <ul className='list-disc pl-4 text-[14px] text-justify pr-8 p-2 text-[#292A2E]'>
                        <li className='mb-1'> <strong>Project Activity:</strong>Amazing Fields is under active development. It was not released and then forgotten about. There are frequent updates providing new fixes and features based upon user feedback.  See the Amazing Fields Changelog.</li>
                        <li><strong> Cost.</strong>I want as many people to use Amazing Fields as possible. It is <strong>freely available for use on as many boards and workspaces</strong> as you need.  See the Supporters section below for more details.</li>
                        <li> <strong>Support:</strong> My goal is to provide the best support of any Trello powerup.  The Amazing Fields documentation site has a wide range of articles with more added all the time.  You can also contact me through the support widget in the powerup or email directly at support@amazingpowerups.com.</li>
                        <li><strong>Security and Data Protection</strong>Your data is safe and secure on the Trello trusted servers.  I have no remote access to your boards or data.</li>
                      </ul>
                    </div>
                   <hr className='border-b-1 border-gray-300 mt-8' />
                  
                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>🏗️ Templates & Examples</h1>
                      <p >See what is possible with Amazing Fields. Click on "Create board from template" after you open the links and then click on the "Fields" board button to see the Amazing Fields settings.</p>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>Feature Examples</h1>
                      <p className='flex flex-col'>
                        <a href="">🗃️ Field Features</a>
                      <a href="">🗃️ Progress Bars</a>
                      <a href="">🗃️ Formula Calculations</a>
                      </p>
                      
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-2'>Working Examples</h1>
                      <p className='flex flex-col'>
                        <a href="">🗃️ Personal Todo</a>
                      <a href="">🗃️ Amazing Kanban</a>
                      </p>
                  </div>
                  <hr className='border-b-1 border-gray-300 mt-8' />
                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>🤹 A Full Feature Set</h1>
                      <p >All the options you always wanted to customize Trello but didn’t know to ask. Break free of the limits of the standard workflow and limited data options.</p>
                      <p>Amazing Fields has all the features we have grown to expect from other tools similar to Trello. Like formulas, customized formatting, conditional styling, selectable icons, easy exports, and even progress bars.</p>
                      <p>When you try Amazing Fields for the first time, take advantage of a 14-day trial of free and Supporter-only features to decide what suits your use case.</p>
                  </div>


                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>🆓 Free Core Features</h1>
                      <p >🔗 <a href=""  className='text-[#0052CC] underline hover:no-underline'>Click here for a full breakdown of free and Supporter features</a></p>
                      <p>Amazing Fields has a rich feature set for free users that meets most needs:</p>
                      <p>When you try Amazing Fields for the first time, take advantage of a 14-day trial of free and Supporter-only features to decide what suits your use case.</p>
                      <p>✅ Text Fields</p>
                      <p>✅ Number Fields</p>
                      <p>✅ Date Fields</p>
                      <p>✅ Single-Select Dropdown</p>
                      <p>✅ Checkbox Fields</p>
                      <p>✅ Front & Back Display Settings</p>
                      <p>✅ Conditional Styling</p>
                      <p>✅ Progress Bars</p>
                      <p>✅ Advanced Field Templates</p>
                      <p>✅ Automatic Board Backup</p>
                  </div>
                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>🤝 Supporter Features</h1>
                      <p >Upgrade when you need advanced functionality and automation-friendly configuration:</p>
                     
                      <p>✅ All Free Core Features</p>
                      <p>✅ Link Progress Bars to Checklists</p>
                      <p>✅ Multi-Select Dropdown</p>
                      <p>✅ Field Formulas</p>
                      <p>✅ Conditional Styling</p>
                      <p>✅ Section Headers & Tabs</p>
                      <p>✅ Copy Board Configuration</p>
                      <p>✅ Data Input Validation</p>
                      <p>✅ Card Reference Fields</p>
                      <p>✅ Card & Field Table View</p>
                      <p>✅ Excel & Google Sheets Export</p>
                      <p>✅ Set Field View & Edit Permissions</p>
                      <p>✅ API Access</p>
                  </div>
                  <hr className='border-b-1 border-gray-300 mt-8' />

                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>Links</h1>
                      <p className='text-[#0052CC] underline hover:no-underline'><a href="">🔗 Product Page</a></p>
                      <p className='text-[#0052CC] underline hover:no-underline'><a href="">🔗 Documentation / Support</a></p>
                      <p className='text-[#0052CC] underline hover:no-underline'><a href="">🔗 Privacy Policy</a></p>
                  </div>
                  <hr className='border-b-1 border-gray-300 mt-8' />
                  <div>
                      <h1 className='text-[27px] text-[#292A2E] font-semibold mt-8 mb-4'>Contact</h1>
                      <p >To get help or suggest a new feature, please contact us directly at</p>
                      <p ><a href="support@amazingpowerups.com."className='text-[#0052CC] underline hover:no-underline'>support@amazingpowerups.com. </a> We love feedback and will get back to you as quickly as possible.</p>
                  </div>
                </div>
            </section>
           <div className='mb-10'>
            <AtlassianFooter />
           </div>
        </>
    )
}

export default AmazonFields