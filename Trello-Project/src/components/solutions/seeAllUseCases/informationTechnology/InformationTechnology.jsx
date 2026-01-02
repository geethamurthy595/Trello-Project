import React from 'react'
import NavBar from '../../../NavBar'
import slack from "../../../../assets/Slack_Mark.png";
import figma from "../../../../assets/Figma-Icon.png";
import Jira from "../../../../assets/Jira-icon.png";
import google from "../../../../assets/Google_Drive.png";
import zapier from "../../../../assets/zapier.png";
import UniversalFooter from '../../../UniversalFooter';
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsFillCalendarXFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';


function InformationTechnology() {
    return (
        <div className='font-sans'>
            <NavBar />
            <section className='bg-linear-to-b from-[#E8FDFF] to-[#FFFFFF]  h-210'>
                <div className=''>
                    <img className='m-auto w-167 pt-17 ' src="https://images.ctfassets.net/rz1oowkt5gyp/2lAYfTsDMNAd7SGPAVblWN/4821232122b7c684b3f1c4f75c6744f0/IT-Hero_2x.png?w=1336&fm=webp" alt="" />
                    <p className='text-5xl font-medium text-center  w-200 m-auto pt-8 '>Trello for Information Technology <br /> (IT)</p>
                    <p className='w-200 m-auto text-center text-[21px] pt-6'>Information technology teams manage all kinds of technology, ranging from <br /> laptops, to servers, to business-critical software applications. Trello’s <br /> customizable system for managing projects takes queues from “intake” to <br /> “done” in record time, so your teams stay on time and on budget.</p>
                    <div className='flex justify-center'>
                        <Link to="/signup" className='bg-blue-600  hover:bg-[#0747A6] transition-all duration-500 ease-in-out text-center pt-2  h-12 w-28 rounded text-[17px] text-white mt-9'>Try it free</Link>
                    </div>
                </div>
            </section>
            <section>
                <p className='text-4xl font-medium  w-200 m-auto pt-8 '>Manage all your IT requests in one place</p>
                <img className='w-230 m-auto pt-4' src="https://images.ctfassets.net/rz1oowkt5gyp/4SidXH3z3wXIWn6719Q8ck/b0d7a8c8f727eefcebd29d5548f3b83c/Product_Hero_Illo.png?w=1824&fm=webp" alt="" />
                <p className='text-4xl font-medium text-center  w-200 m-auto pt-16 '>More projects, <span className='line-through'>more</span> no problem</p>
                <p className='w-200 m-auto text-center text-[21px] pt-6'>From design to support to software asset management, today’s IT teams are <br /> covering a sprawling variety of work. Trello helps you manage the end-to- <br />end delivery of IT services to customers efficiently and on time, with <br /> <Link to="/trust" className='underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6]' href="">enterprise-grade security</Link></p>
            </section>
            <section className=' ml-50 mr-50 overflow-hidden mt-30 mb-30'>
                <div className="grid grid-cols-2 gap-x-48 gap-y-10 ">
                    <div className=" ">
                        <p className='text-4xl font-medium  w-200 pt-8 pb-8 '>Intake made easy</p>
                        <hr />
                        <p className='w-200   text-[21px] pt-6'>Whether your customers use email, Slack, or <br />another tool to ask for help, Trello makes it <br /> easy to collect all requests in one place. <br /> Customizable labels make for easy triage and <br />tracking. Free Trello Power-Ups like <Link to="/power-ups/6048e897c73d032a983e2a7c/dashcards" className='underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6]' href="" >Dashcards</Link> <br /> keep an eye on the numbers in your queue and <br />alert you if things need your attention.</p>
                    </div>
                    <div className="">
                        <img className='h-100' src="https://images.ctfassets.net/rz1oowkt5gyp/6hRlecqI0XkjWFfvQ6DZVO/a0d9f31d80cd234c2d68387f6baf0015/Ui_Illo__Dash_cards.png?w=1108&fm=webp" alt="" />
                    </div>
                    <div className="">
                        <img className='h-100' src="https://images.ctfassets.net/rz1oowkt5gyp/5JyAi4TrKOhWpEpi9JHpvu/be515d59b2dfb11a01f28fb874e35433/Timeline_View.png?w=908&fm=webp" alt="" />
                    </div>
                    <div className="">
                        <p className='text-4xl font-medium   w-200 pt-8 pb-8 '>Align business priorities</p>
                        <hr />
                        <p className='w-200 text-[21px] pt-6'>Whether you’re managing one or hundreds of <br /> moving parts, Trello can help tame the chaos. <br /> <Link to="/views" className='underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6]' href="">Trello’s Timeline, Table, and Dashboard views </Link><br />provide visibility and reporting across your <br /> organization's work, so you see the status of <br /> all work in progress, all at once.</p>
                    </div>

                    <div className="">
                        <p className='text-4xl font-medium   w-200 pt-8 pb-8 '>Move work forward, auto- <br />magically</p>
                        <hr />
                        <p className='w-200  text-[21px] pt-6'>Trello  <Link to="/butler-automation" className='underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6]' href="">automates</Link> repeatable tasks, so you can focus on <br /> solving the real problems. Keep communication flowing <br /> with teammates and clients no matter where they are, <br /> by automating comments on Trello cards and messages <br />in Slack once actions are taken.</p>
                    </div>
                    <div className="">
                        <img className='h-100' src="https://images.ctfassets.net/rz1oowkt5gyp/1hIdAzDfG1d3MOPBcFxA5G/0d709dc16778a76212d9bd2d1af5872f/Ui_Illo__Automation_Rules.png?w=1108&fm=webp" alt="" />
                    </div>
                </div>

            </section>
            <section className='bg-linear-to-b from-[#EBE7FF] to-[#FEFEFF] pb-5'>
                <div className='ml-50 mr-50 bg-linear-to-b from-[#EBE7FF] to-[#FEFEFF]'>
                    <p className='w-200  text-[20px] pt-18 font-medium '>Trello for Information Technology</p>
                    <p className='text-4xl font-medium   w-200 pt-3 '>Keep the tools you love</p>
                    <p className='w-200  text-[21px] pt-6'>Trello Power-Ups connect your favorite apps directly to Trello for a single <br /> source of truth with zero additional effort. Want more niche features in <br />Trello? You can add those too. With our gallery of <Link to="/power-ups" className='underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6]' href="">200+ Power-Ups,</Link> building a <br />bespoke IT project management system is effortless.</p>
                </div>
            </section>

            <section className="flex flex-col w-[73%] m-auto gap-10 mt-6">
                <div className="flex gap-10">
                    <Link to="/power-ups/55a5d917446f51777421000a" className=" h-[379px] w-[345px] rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#403294] rounded-t-[10px]"></div>
                        <img src={slack} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">Slack</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">Communication & <br /> Collabaration</h2>
                            <p className="text-[16px] font-normal mt-2 tracking-wide">Connect your chat and <br /> collaboration apps so you dont <br /> miss a single brilliant idea.</p>
                        </div>
                    </Link>

                    <Link to="/power-ups/586be37142f94dc0871fbcbb/confluence-cloud" className=" h-[379px] w-[345px]  rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#00C7E5] rounded-t-[10px]"></div>
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/DKHlDMKy8sWKveJJAtn2i/441bd07c113f0d3217e284ef8889d313/confluence-icon-gradient-blue-64x64.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">Confluence</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">Communication & <br /> Collabaration</h2>
                            <p className="text-[16px] font-normal mt-2 tracking-wide">Pull Confluence pages into your <br /> Trello board of the knowledge <br />documentation, or created a <br /> new page. </p>
                        </div>
                    </Link>

                    <Link to="/power-ups/55a5d916446f517774210006" className="h-[379px] w-[345px]  rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#2684ff]  rounded-t-[10px]"></div>
                        <img src={google} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
                            <p className="text-[16px] font-normal mt-2 tracking-wide">Search Google Drive right from  <br /> Trello and attach relavant files <br /> directly to their corresponding <br /> tasks for richer context.</p>
                        </div>
                    </Link>
                </div>

                <div className="flex gap-10">
                    <Link to="/power-ups" className=" h-[379px] w-[345px]  rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#0052cc] rounded-t-[10px]"></div>
                        <img src={Jira} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">Jira</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">Developer Tools</h2>
                            <p className="text-[16px] font-normal mt-2 tracking-wide">Connect and Jira and Trello to help all your teams work better together</p>
                        </div>
                    </Link>

                    <Link to="/power-ups/5decb67ce9bafb579ed0e794" className=" h-[379px] w-[345px]  rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/59uIbABNhvD3z9nIXwqvQq/8df4feae404339a907438861e7383a1e/slas-logo.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">SLAs for Trello</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">IT & Project Management</h2>
                            <p className="text-[16px] font-normal mt-2">Track the time your cards <br /> spend in lists against SLA <br /> goals.</p>
                        </div>
                    </Link>

                    <Link to="/power-ups/6048e897c73d032a983e2a7c" className=" h-[379px] w-[345px] rounded-[10px] hover:cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div className=" h-[96px] bg-[#ff7452] rounded-t-[10px]"></div>
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/31gN5aOkHOn8OGcixe1jM0/d48608a3c09efa3cb1faf1f7f73d3e8c/dash-cards-logo.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                        <div className="p-[24px]">
                            <h1 className="text-[24px] font-medium mb-1">Dashcards</h1>
                            <h2 className="text-[16px] font-normal text-gray-500">Analytics & reporting</h2>
                            <p className="text-[16px] font-normal mt-2 tracking-wide">Set filters and track the <br /> progress of that specific set of <br /> work across the all the Trello <br /> board.</p>
                        </div>
                    </Link>

                </div>
                <Link to="/use-cases/power-ups/category/it-project-management" className='text-[21px] m-auto pb-20 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] '>See more IT Power-Ups</Link>
            </section>
            <section className='mr-40 ml-50 '>
                <p className='text-4xl font-medium  w-200 pt-8 pb-8 '>There’s a template for that</p>
                <p className='text-[21px]' >Why start from scratch when there’s expertise that you can trust? Trello <br /> <Link to="/templates" className='text-[21px] m-auto pb-20 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] ' href="">templates</Link> get you going quickly with a pre-built Trello board that you can <br /> customize for your needs. In addition to IT templates, you’ll also find a Trello <br /> board for everything from <Link to="/templates/team-management" className='text-[21px] m-auto pb-20 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] ' href="">Team Management</Link> to <Link to="/templates/productivity" className='text-[21px] m-auto pb-20 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] ' href="">Personal Productivity.</Link></p>

                <div className="grid grid-cols-2  gap-0  ">
                    <div className="bg-white p-6 rounded-2xl ">
                        <img className='h-60' src="https://images.ctfassets.net/rz1oowkt5gyp/6rwgUB0B9ZafQNvc4OAnL/d31961d58c108092d9cad48c2ea22da5/Work_Request_Template_2x.png?w=1108&fm=webp" alt="" />
                    </div>

                    <div className="bg-white p-6 rounded-2xl">
                        <img className='h-60' src="https://images.ctfassets.net/rz1oowkt5gyp/79oGaelt6Y8OeHZ4WD43lS/27a70f45541adc6f3f28536627fcc340/Template_Support_Ticket_2x.png?w=1108&fm=webp" alt="" />
                    </div>

                    <div className="bg-white p-6 rounded-2xl ">
                        <Link to="/templates/project-management/work-request-and-intake-process-BGbKiKKA" className="text-2xl font-semibold mb-2 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] ">Work request and intake process</Link>
                        <p className=" text-[21px]">This board details the Google Forms, automation rules, <br />and Trello Power-Ups that optimize the way that you <br /> manage stakeholder requests.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl ">
                        <Link to="/templates/support/support-ticket-management-ErT4heCl" className="text-2xl font-semibold mb-2 underline decoration-blue-500 text-blue-500 hover:text-[#0747A6] transition-all duration-500 ease-in-out hover:decoration-[#0747A6] ">Support ticket management</Link>
                        <p className=" text-[21px]">Funnel email requests directly to your Trello board for an <br /> easy way to manage incoming IT requests without <br /> clogging your inbox.</p>
                    </div>
                </div>

            </section>
            <section>
                <p className='text-center pt-20 pb-12 text-[21px]'>Join a community of millions of users globally who are using Trello to get more done.</p>
                <img className='m-auto' src="https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg" alt="" />
            </section>

            <section className='bg-[#EAE6FF] mt-17'>
                <div className=' font-sans  p-10 mx-auto w-[80%] '>
                    <p className='text-2xl font-medium mb-2 mt-10'>Teamwork and work management tips from the pros.</p>
                    <p className='text-[21px] mb-10'>Read the Trello blog to learn ways you can improve team health, <br /> productivity, and collaboration.</p>
                    <div >
                        <div className="max-w-6xl grid md:grid-cols-2 gap-10">
                            {/* Card 1 */}
                            <div className="flex gap-4  rounded-2xl p-4">
                                <div className="text-4xl"><FaRegFaceSmile /></div>
                                <div>
                                    <Link to="/blog" className="text-blue-700 font-semibold  underline cursor-pointer mb-3 text-2xl hover:text-blue-800">
                                        Forget big data: how tiny data drives customer happiness
                                    </Link>
                                    <p className=" text-[21px]">
                                        Our support team leveraged user feedback <br /> surveys in order to connect with Trello users
                                        on a more human level. Here’s what they learned.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex gap-4  p-4">
                                <div className="text-4xl"><BsFillCalendarXFill /></div>
                                <div>
                                    <Link to="/blog/project-management/most-common-project-blockers" className="text-blue-700 font-semibold underline cursor-pointer mb-3 text-2xl hover:text-blue-800">
                                        The most common project blockers and ways to eliminate them
                                    </Link>
                                    <p className=" text-[21px]">
                                        Project blockers come in all shapes and sizes. <br /> The key to delivering work on time
                                        is knowing <br /> your project blockers or impediments.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex gap-4  p-4">
                                <div className="text-4xl"><HiOutlineUserGroup /></div>
                                <div>
                                    <Link to="/blog/teamwork/introverts-and-extroverts-workplace-collaboration" className="text-blue-700 font-semibold  underline cursor-pointer mb-3 text-2xl hover:text-blue-800">
                                        What introverts want extroverts to know about workplace collaboration
                                    </Link>
                                    <p className=" text-[21px]">
                                        In or out of the workplace, cooperation and <br /> communication are challenging —especially for <br /> people with very different  personalities. How do <br /> you design a workplace that allows everyone to <br />feel heard?
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="flex gap-4  p-4">
                                <div className="text-4xl"><TfiHeadphoneAlt /></div>
                                <div>
                                    <Link to="/blog/trello/6-team-management-trello-templates" className="text-blue-700 font-semibold  underline cursor-pointer mb-3 text-2xl hover:text-blue-800">
                                        Six tips for leading your team like a boss
                                    </Link>
                                    <p className=" text-[21px]">
                                        Whether you are a new manager or have been <br /> leading teams for decades, here are six easy tips <br />
                                        (and ready-made templates!) for improving team <br /> happiness and ways of working.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>




            <UniversalFooter />
        </div>

    )
}

export default InformationTechnology