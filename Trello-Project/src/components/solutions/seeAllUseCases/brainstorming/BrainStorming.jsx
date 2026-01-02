import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'

import crm2 from "../../../../assets/crm2.png";
import crmlogo from "../../../../assets/crmlogo.svg";
import UniversalFooter from "../../../UniversalFooter";
const BrainStorming = () => {
    return (
        <>
            <div className='font-sans '>
                <NavBar />
                <section className='bg-linear-to-b from-[#E8FDFF] to-[#FFFFFF]  h-210'>
                    <div className=''>
                        <img className='m-auto w-167 pt-17 ' src="https://images.ctfassets.net/rz1oowkt5gyp/5iiz6n4aacogJ4h9qsm3Ps/d54c7b7458678d37e194db82ed9756fa/Illo_Use_Case_Solutions_-_Brainstorming-03.png?w=1920&fm=webp" alt="" />
                        <p className='text-5xl font-medium text-center  w-200 m-auto pt-8 mt-2'>Uncover actionable ideas by <br /> brainstorming with Trello, no <br /> matter where you’re located <br /></p>
                        <p className=' m-auto text-center text-[20px] pt-6 w-[727px] pl-4 pr-8'>A productive brainstorm helps your team identify innovative ideas and make decisions. Using Trello as a virtual whiteboard gets the creativity flowing. Whether you’re working in the same place or remotely, you can turn disruptive ideas into actionable projects.</p>
                        <div className='flex justify-center'>
                            <Link to="/signup" className='bg-blue-600  hover:bg-[#0747A6] transition-all duration-500 ease-in-out text-center pt-2  h-12 w-50 rounded text-[17px] text-white mt-9'>Get Started With Trello</Link>
                        </div>
                    </div>
                </section>
                <section className=" text-center  mt-10">
                    <h1 className="text-[32px]  text-gray-900 font-medium">How to structure a better brainstorm with Trello</h1><br />
                    <img src="https://embed-ssl.wistia.com/deliveries/2e3c2c65457092e09aae96de430711aa.webp?image_crop_resized=1280x720" alt="Trello Board" className="h-110 w-[800px] ml-90" />
                </section>

                <div>
                    <br /><br /><br />
                    <h1 className="text-[32px]  w-150 text-gray-900 font-medium ml-50">
                        Collaboration is the easy part with boards, lists, and cards - Trello’s tools for brainstorming

                    </h1><br /><br /><br /><br />
                </div>

                <div className="flex gap-50 items-center -mt-10">
                    <br /><br /><br /><br /><br />
                    <div className=" h-100 w-[510px]">
                        <h1 className="text-[31px]  text-gray-900 font-medium">Spark innovative ideas, quickly</h1>
                        <br />
                        <hr className="border-gray-300" />

                        <p className="text-[18px]  text-gray-900  mt-2 w-[440px] h-[180px] tracking-wide">Trello is the virtual (white)board for you and your team to use to brainstorm solutions or generate new ideas. It’s easy to get started – simply create a board and add cards as ideas flow. Give context to ideas with descriptions and attachments.</p>

                    </div>
                    <div>
                        <img src=" https://images.ctfassets.net/rz1oowkt5gyp/6hRlecqI0XkjWFfvQ6DZVO/a0d9f31d80cd234c2d68387f6baf0015/Ui_Illo__Dash_cards.png?w=1108&fm=webp" alt="Advanced Checklists" className="h-80 w-120 -ml-20 -mt-18" />

                    </div>
                </div><br /><br />


                <div className="flex w-[1000px] gap-40 items-center  ml-50 -mt-15">

                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/66nNRT2olhH8Iqo9vYMpIC/1d3276e4b0ef5e44428dc3d6bff98eb3/Brainstorming_-_Voting.png?w=947&fm=webp" alt="Customer List" className="h-90 w-150" />
                    <div className=" h-100   ">
                        <h1 className="text-[31px]   text-gray-900 ">Capture, organize, and prioritize</h1>
                        <br />
                        <hr className="border-gray-300" />

                        <p className="text-[18px] tracking-wide w-[440px] text-gray-900 mt-2 ">Brainstorming can happen async with comments and by tagging teammates. Everyone has a say; vote on a card to bring the best ideas to the top. Create a list to catalog the rest for further review.</p>
                        <br />
                        {/* <button className="text-[15px] rounded-md   text-gray-900 font-medium  border-1 border-blue-400 h-[49px] w-[220px] hover:cursor-pointer hover:bg-blue-100">Save time with automation</button> */}
                    </div>
                </div><br /><br />


                <div className="flex gap-40 items-center -mt-48 h-200 ml-50  ">

                    <div className=" h-100 w-[500px]  ">
                        <h1 className="text-[31px] text-gray-900 font-medium">Put your ideas to work</h1>
                        <br />
                        <hr className="border-gray-300" />

                        <p className="text-[18px]  mt-2 w-[470px]   text-gray-900 ">Keep the momentum after your brainstorming session – assign next steps, add owners, and due dates to explore what you’ve surfaced. No bad ideas and none go to waste.</p><br />
                        <br />
                        <Link to="/butler-automation" className="text-[17px] p-3 font-normal  text-gray-900 rounded-md border-1 border-blue-400 h-10 w-[20px] hover:cursor-pointer hover:bg-blue-100">Save time with Automation</Link>
                    </div>
                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/4b5Nbpcwuk55jkdGguvH9C/af4f02d963223e78e010d34a7d6bc579/automation_2x.png?w=1100&fm=webp" alt="Calendar View" className="h-80 w-110 -ml-20 -mt-20" />
                </div>


                <div className=" flex flex-col  h-250 w-full ">
                    <div className="bg-linear-to-b from-bg-linear-to-r from-[#DFEBFF] to-[#FEFFFF]">
                        <div className="h-90 w-230 ml-50 bg-gradient-to-b from-[rgb(230, 252, 255)] to-[rgb(255, 255, 255)] bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-transparent ">
                            <br /><br /><br />
                            <h1 className="text-[15px] font-medium  text-gray-900 ">Trello for Brainstorming</h1>
                            <h2 className="text-[22px] font-medium   text-gray-900 ">Trello + your favorite tools</h2>
                            <p className="text-[18px]  w-[727px] text-gray-900 ">Trello has 200+ integrations with the tools you know and love. Integrate the tools your team already uses with Trello to keep your work organized and in one place. Try a Trello Power-Up to connect all of your team’s (other) favorite apps to your boards.</p><br />
                            <Link to="/power-ups" className="text-[19px] font-normal   underline text-blue-800 hover:cursor-pointer  ">Go to Power-Ups gallery</Link>
                        </div><br />


                        <div className=" -mt-17  ml-50  flex gap-7">
                            {/* 1st box */}
                            <Link to="/power-ups/5893c2b56bde057070fbc1b7" className=" h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#FFAB00] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/miro-2.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px]  text-gray-900  font-medium mb-1">Miro</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Product & Design</h2>
                                    <p className="text-[15px]   text-gray-800 w-[280px] font-medium mt-2">Embed and access customer journey maps, flowcharts, UX charts and more on a Trello card.</p>
                                </div>
                            </Link>
                            {/* 2nd box */}
                            <Link to="/power-ups/596f2cb2d279152540b2bb31" className=" h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#D62688] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px] font-medium mb-1">InVision</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Product & Design</h2>
                                    <p className="text-[15px]  text-gray-800 w-[260px] font-medium mt-2">"Preview InVision prototypes in Trello cards to deliver better digital experiences.</p>
                                </div>
                            </Link>
                            {/* 3rd box */}
                            <Link to="/power-ups" className="h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#998DD9] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px] font-medium mb-1">Figma</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Integration</h2>
                                    <p className="text-[15px]  text-gray-800 font-medium mt-2"> Embed Figma files on Trello cards that update in real-time to keep teams in sync.</p>
                                </div>
                            </Link>

                        </div>


                        <div className="  mt-7 ml-50 flex gap-7">
                            {/* 4th box */}
                            <Link to="power-ups/5ba22bdcd58ada0595eadc98/zoho-desk" className=" h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#403294] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px] font-medium mb-1">Slack</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Automation</h2>
                                    <p className="text-[15px] w-[260px]  text-gray-800 font-medium mt-2">Keep your communication and collaboration apps connected.</p>
                                </div>
                            </Link>
                            {/* 5th box */}
                            <Link to="/power-ups/6052d130068a8c0de7b022b4" className=" h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#8777D9] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px] font-medium mb-1">Microsoft Teams</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Integration</h2>
                                    <p className="text-[15px] text-gray-800 font-medium mt-2">View your Trello boards in Microsoft Teams, and much more. </p>
                                </div>
                            </Link>
                            {/* 6th box */}
                            <Link to="/power-ups/586be37142f94dc0871fbcbb/confluence-cloud" className="h-[290px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
                                <div className=" h-[96px] bg-[#172B4D] rounded-t-[10px]"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/confluence-1.svg" alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                                <div className="p-[15px] -mt-2">
                                    <h1 className="text-[23px] font-medium mb-1">Confluence</h1>
                                    <h2 className="text-[14px] font-medium text-gray-500">Communication & Collaboration </h2>
                                    <p className="text-[15px] text-gray-800  mt-2">Pull Confluence pages into your meeting board, or start a new one from a card.</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <br /><br /><br /><br />

                <div className=" w-100%   -mt-18 mr-35 ml-40">

                    <h1 className="text-[36px] w-[823px]  text-gray-900 font-medium">No need to start from scratch. Use one of our customizable templates.</h1>
                    <p className="text-[21px] w-[823px]  text-gray-800  font-normal">Jumpstart your board with a well-proven <span className="text-blue-800 font-normal underline hover:cursor-pointer"> template </span> designed by our team. Customize it for yours.</p>
                    <br />
                    <div className=" flex gap-8 ">
                        <div className="">
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4dlxNRAQ4sV5Q66S3PWd8J/8f6ef9c69c1b61b2cb58cba4398562c1/Distributed_Team_Brainstorm.png?w=716&fm=webp" alt="eisenhower" className="h-[227px] w-[347px]" />
                            <h1 className="text-[20px]  text-gray-900 mt-2 font-medium">Distributed Team Brainstorming</h1>
                            <p className="text-[18px]  text-gray-800  font-normal mt-2 w-[347px] ">Not only is the board instantly ready to be the digital whiteboard for your brainstorm, it will guide you through the Disrupt Technique for getting unstuck and finding big ideas.</p><br />
                            <Link to="/templates/remote-work/distributed-team-brainstorming-fs1wCJ9r" className="text-[18px] font-normal  text-blue-800 underline hover:cursor-pointer">Try Template</Link>
                        </div>
                        <div className="">
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/27yf5OdkEaddcIngQYxkBs/7ce3fad3dd8c2f627f4dbfd09dd29819/Innovation_Weeks.png?w=716&fm=webp" alt="team" className="h-[227px] w-[347px]" />
                            <h1 className="text-[20px] mt-2  text-gray-900 font-medium">Innovation Weeks</h1>
                            <p className="text-[18px] text-gray-800 font-normal mt-2 w-[347px]">From Trello’s engineers to your team, a staple for planning those periods of time dedicated to exploring new products, features, and business models.</p><br />
                            <Link to="/templates/engineering/innovation-weeks-IpeVVi22" className="text-[18px] font-normal text-blue-800 underline hover:cursor-pointer">Try Template</Link>
                        </div>
                        <div>
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/6cKmvyKx6NxtM1FLgv1WmE/6861fad5c93a490b92977a455d7b61c9/Design_Sprint.png?w=716&fm=webp" alt="team" className="h-[227px] w-[347px]" />
                            <h1 className="text-[20px] mt-2  text-gray-900 font-medium">Design Sprint</h1>
                            <p className="text-[18px] text-gray-800 font-normal mt-2 w-[347px]">Prototype and test new ideas quickly, getting customer feedback and taking early concepts to the next stage of development.</p><br />
                            <Link to="/templates/design/design-sprint-6NanhvtF" className="text-[18px] font-normal text-blue-800 underline hover:cursor-pointer">Try Template</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-[128px] flex flex-col items-center">
                    <h1 className="text-[19px] text-gray-800 font-normal">Join a community of millions of users globally who are using Trello to get more done.</h1><br />
                    <img src={crmlogo} alt="logos" className="pl-10 w-220" />
                </div><br /><br /><br />

                <div className="bg-[#e6fcff] pl-52 pb-10"><br /><br /><br />
                    <div className="mt-9 ml-10">
                        <h1 className="text-[21px]  text-gray-900 font-medium">Insight on ideation</h1>
                        <p className=" mt-2 text-[18px]  text-gray-800 font-normal">Read the Trello blog to find ways to improve efficiency, productivity, and collaboration.</p>
                    </div><br /><br /><br />
                    <div className="flex  ml-13 -mt-5 gap-25">
                        <div className="flex gap-5 ">
                            <div>
                                {/* <img src="" alt="" className="h-[50px] w-[75px] mt-3" />   */}
                                <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 33 41"><path d="M20.26 38.154c0 2.086-2.542 3.13-4.029 1.656l-3.147-3.122a2.331 2.331 0 0 1-.691-1.655V21.568a2.35 2.35 0 0 1 2.36-2.341H17.9a2.35 2.35 0 0 1 2.36 2.34z" opacity=".5"></path><path d="M21.555 24.078a2.366 2.366 0 0 1-1.936 1.001h-6.585a2.366 2.366 0 0 1-1.936-1.001L.425 8.906A2.327 2.327 0 0 1 0 7.567V2.841A2.35 2.35 0 0 1 2.36.5h27.933a2.35 2.35 0 0 1 2.36 2.34v4.727c0 .479-.148.946-.424 1.34z"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1 font-medium">3 Ways Trello will change how your remote team brainstorms</h1>
                                <p className="text-[19px]  mt-2 text-gray-800 w-[420px] font-normal">You’ve got a topic you need to brainstorm and you’ve got your team on a video call… now what? Read this blog post to discover remote brainstorming techniques and how Trello can help you navigate your next session.</p><br />
                                <Link to="/blog/trello/how-to-use-trello-for-distributed-team-online-whiteboarding" className="text-blue-800 underline text-[18px] hover:cursor-pointer">Read more</Link>
                            </div>
                        </div>
                        <div className="flex gap-5 -ml-15">
                            <div>
                                {/* <img src="" alt="" className="h-[40px] w-[40px] mt-3" /> */}
                                <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 87 65"><path d="M86.855 16.099a9.429 9.429 0 0 0-9.426-9.245H43.714l-.12.002a2.571 2.571 0 0 0 .12 5.14H77.43l.138.003a4.286 4.286 0 0 1 4.147 4.283v9.714l-.002.14a4.286 4.286 0 0 1-4.283 4.146h-4.572v-2.571a3.429 3.429 0 0 0-3.428-3.429h-52A3.429 3.429 0 0 0 14 27.711v2.571H9.429l-.184.002A9.429 9.429 0 0 0 0 39.71v9.714l.002.183a9.429 9.429 0 0 0 9.427 9.246h34l.12-.003a2.571 2.571 0 0 0-.12-5.14h-34l-.14-.002a4.286 4.286 0 0 1-4.146-4.284V39.71l.002-.139a4.286 4.286 0 0 1 4.284-4.147H14v2.572a3.429 3.429 0 0 0 3.429 3.428h52a3.429 3.429 0 0 0 3.428-3.428v-2.572h4.572l.183-.002a9.429 9.429 0 0 0 9.245-9.427v-9.714z" opacity=".5"></path><path d="M69.429 47.71a3.429 3.429 0 0 1 3.428 3.43v10.285a3.429 3.429 0 0 1-3.428 3.429h-52A3.429 3.429 0 0 1 14 61.425V51.14a3.429 3.429 0 0 1 3.429-3.43zM69.429.854a3.429 3.429 0 0 1 3.428 3.428v10.286a3.429 3.429 0 0 1-3.428 3.428h-52A3.429 3.429 0 0 1 14 14.568V4.282A3.429 3.429 0 0 1 17.429.854z"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1 font-medium">Why your team's worst ideas are actually the best</h1>
                                <p className="text-[19px] mt-2 w-[410px] text-gray-800 font-normal ">Step by step, this blog will show you how to build a CRM with Trello, so you can easily manage your sales leads and customer contacts.</p><br />
                                <Link to="/blog/teamwork/team-brainstorm-worst-possible-ideas" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
                            </div>
                        </div>
                    </div><br /><br /><br />

                    <div className="flex  ml-13 -mt-6 gap-25">
                        <div className="flex  gap-5">
                            <div>

                                {/* <img src="" alt="" className="h-[40px] w-[40px] mt-3" /> */}
                                <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 63 65"><path d="M21.265 11.485C21.265 5.54 26.085.72 32.03.72s10.767 4.82 10.767 10.766v3.588h-5.384v-3.587a5.383 5.383 0 0 0-5.224-5.381l-.16-.003a5.383 5.383 0 0 0-5.382 5.384v3.587h-5.383zm13.757 20.336h27.514v25.72a7.178 7.178 0 0 1-7.178 7.178H8.105A7.178 7.178 0 0 1 .928 57.54v-25.72h28.71v3.888a2.692 2.692 0 1 0 5.383 0z"></path><path d="M62.536 22.252a7.178 7.178 0 0 0-7.178-7.178H8.105a7.178 7.178 0 0 0-7.177 7.178v9.57h28.71v-5.086a2.692 2.692 0 0 1 5.384 0v5.086h27.514z" opacity=".5"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1  font-medium">The relationship between team reflection and planning</h1>
                                <p className="text-[19px] mt-2 w-[410px]  text-gray-800 font-normal">This blog post uncovers the importance of team reflection and how it influences a team's ability to plan for a brighter future, as well as how to host successful team reflection and planning sessions.</p><br />
                                <Link to="/blog/teamwork/team-reflection-and-planning" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
                            </div>
                        </div>

                    </div><br /><br /><br />
                </div>
                <UniversalFooter />
            </div>


        </>
    )
}

export default BrainStorming