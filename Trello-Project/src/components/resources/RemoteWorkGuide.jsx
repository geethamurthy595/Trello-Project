import React from 'react'
import NavBar from '../NavBar'
import heroastronaut from "../../assets/hero-astronaut.png";
import collaboration from '../../assets/collaboration-team.png';
import toolsMap from '../../assets/tools-map.png';
import culture from '../../assets/culture-team.png';
import interviews from '../../assets/interviews-beach.png';
import t1 from '../../assets/T1.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import UniversalFooter from '../UniversalFooter';
import ScrollProgressBar from '../solutions/productManagement/scan2Cad/ScrollProgressBar';


const RemoteWorkGuide = () => {
    return (
        <>
            <ScrollProgressBar />
            <NavBar />
            <section className='flex bg-gradient-to-r from-[#735BC2] to-[#ED97D9] justify-between py-12 items-center px-75'>
                <div>
                    <h1 className='text-[38px] text-white font-bold'>How to embrace remote work</h1>
                    <p className='text-white text-xl'>The complete guide to setting up your team for remote work success</p>
                </div>
                <img src={heroastronaut} width={400} alt="heroastronaut" />
            </section>
            <div className="flex w-full ">
                <div className="text-[14px]  pt-30 pl-50  w-[550px] shadow-gray-600 shadow-2xl ">
                    <nav className="pr-6 sticky top-[100px]">
                        <h1 className='text-2xl font-semibold mb-5'>How to embrace remote work</h1>
                        <ul className="space-y-1">
                            <li className='text-gray-800 font-semibold text-[15px] mb-5 hover:text-[#5243AA] cursor-pointer '>Dispelling remote work myths: tips & best practices</li>
                            <li className='text-gray-800 font-semibold text-[15px] mb-5 hover:text-[#5243AA] cursor-pointer '>How to build strong communication and collaboration with a remote team</li>
                            <li className='text-gray-800 font-semibold text-[15px] mb-5 hover:text-[#5243AA] cursor-pointer '>All the tools to make remote work cool</li>
                            <li className='text-gray-800 font-semibold text-[15px] mb-5 hover:text-[#5243AA] cursor-pointer '>How to create a remote team culture</li>
                            <li className='text-gray-800 font-semibold text-[15px] mb-5 hover:text-[#5243AA] cursor-pointer '>Find (and land) the perfect remote job</li>
                        </ul>
                    </nav>
                </div>

                {/* Dispelling remote */}
                <div className=" w-full pt-30 pl-30 pr-50">
                    <h1 className='text-2xl font-semibold'>Follow the tips, strategies, and advice from the world’s leading companies in order to empower a productive and collaborative remote team.</h1>
                    <h1 className='text-4xl pt-40 text-[#00A3BF] font-semibold'>Dispelling remote work myths—tips and best practices</h1>
                    <p className='text-[22px] pt-4'>When the topic of remote work comes up, it’s not uncommon for people to become immediately skeptical. Common narratives include:</p>

                    <div className='text-white mt-10'>
                        <div className='relative mb-10 md:ml-[45%] sm:ml-0'>
                            <p className='px-6 text-xl py-4 rounded-2xl bg-[#6554C0]'>“That could never work with our system.”</p>
                            <p className='w-5 h-5 absolute right-6 bottom-[-15px] rounded-bl-full bg-[#6554C0] '></p>
                        </div>
                        <div className='relative mb-10  md:w-[60%] sm:w-[100%]'>
                            <p className='px-6 text-xl py-4 rounded-2xl bg-[#B22865]'>“In theory it sounds good, but remote people can’t come to meetings and they never have all the information.”</p>
                            <p className='w-5 h-5 absolute left-6 bottom-[-15px] rounded-br-full bg-[#B22865] '></p>
                        </div>
                        <div className='relative mb-10 md:ml-[35%] sm:ml-0'>
                            <p className='px-6 text-xl py-4 rounded-2xl bg-[#6554C0]'>“Yeah, we tried that, but it didn’t really work and the remote people ended up getting fired.”</p>
                            <p className='w-5 h-5 absolute right-6 bottom-[-15px] rounded-bl-full bg-[#6554C0] '></p>
                        </div>
                        <div className='relative mb-10 md:w-[60%] sm:w-[100%]'>
                            <p className='px-6 text-xl py-4 rounded-2xl bg-[#B22865]'>“How do you know people aren’t slacking off?”</p>
                            <p className='w-5 h-5 absolute left-6 bottom-[-15px] rounded-br-full bg-[#B22865] '></p>
                        </div>
                    </div>
                    <p className='pt-10 text-xl text-gray-800'>Yikes.</p>
                    <p className='pt-10 text-xl text-gray-800'>All of these statements are working off of either wrong assumptions or process failures. Remote work is getting a bad name when in fact there are easily identifiable behaviors and policies that are causing the problems.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>Effective remote work starts at the top. When company culture leaders correct non-remote friendly behaviors and put inclusive processes in place, the effects trickle down into a successful experience for everyone.</p>
                    <a className='underline text-blue-700 text-xl hover:text-blue-800' href="#">Read more</a>

                    <hr className='text-gray-400 my-10' />
                    {/* How to build strong communication and collaboration with a remote team */}
                    <h1 className='text-4xl font-semibold text-[#00A3BF]'>How to build strong communication and collaboration with a remote teaml</h1>
                    <img src={collaboration} className='w-full' alt="" />
                    <p className='pt-10 text-xl text-gray-800'>Remote team communication requires two basic things: thoughtful consideration and some adaptations for the virtual office.</p>
                    <p className='pt-10 text-xl text-gray-800'>As more teams go digital and turn to remote work, it’s important to remember that the kinds of nuanced communication you get in an office setting don’t necessarily translate online.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>Setting some ground rules for team communication goes a long way in making sure your team is productive and happy.</p>
                    <a className='underline text-blue-700 text-xl hover:text-blue-800' href="#">Read more</a>

                    <hr className='text-gray-400 my-10' />
                    {/* Digital tools needed to work remotely */}
                    <h1 className='text-4xl font-semibold text-[#00A3BF]'>Digital tools needed to work remotely</h1>
                    <img src={toolsMap} className='w-full' alt="" />
                    <p className='pt-10 text-xl text-gray-800'>Tools matter more in remote work because they are the foundation for communication. You cannot walk up to someone’s desk to talk to them; you need to adapt tools to become your "virtual office." After all, if technology hadn’t advanced to what it is today, remote work wouldn’t even be possible.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>Here’s a roundup of the most important types of tools you need to consider for remote work, as well as some specific recommendations.</p>
                    <a className='underline text-blue-700 text-xl hover:text-blue-800' href="#">Read more</a>

                    {/* How to create a company culture as a remote team*/}
                    <hr className='text-gray-400 my-10' />
                    <h1 className='text-4xl font-semibold text-[#00A3BF]'>How to create a company culture as a remote team</h1>
                    <img src={culture} className='w-full' alt="" />
                    <p className='pt-10 text-xl text-gray-800'>One of the biggest concerns when considering remote-friendly work is the perceived culture hit. Workplaces have relied on co-location to build corporate culture for so long that it seems bleak to think of a December without the requisite tinsel-and-punch office holiday party.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>The key to building great remote relationships is intention. You need to try harder to find common interests, have meaningful meetings, and truly understand each person's perspective. The result can be a lasting network of true friends that you can depend on, no matter where your travels might take you.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>Creating a strong remote team culture depends on two things: <br /><br />
                        1. A clear set of "rules to live by" that have 100% buy-in across the company. <br />
                        2. A healthy system of meetings, events, and habits that keep people communicating. <br /><br />
                        Oh, and don't forget to use a lot of 😄 and 👍</p>
                    <a className='underline text-blue-700 text-xl hover:text-blue-800' href="#">Read more</a>

                    {/* Find and land the right remote job: tips & tricks for interviews & hiring*/}
                    <hr className='text-gray-400 my-10' />
                    <h1 className='text-4xl font-semibold text-[#00A3BF]'>Find and land the right remote job: tips & tricks for interviews & hiring</h1>
                    <img src={interviews} className='w-full' alt="" />
                    <p className='pt-10 text-xl text-gray-800'>In 2018, 56% of companies around the world allowed employees to work remotely.</p>
                    <p className='pt-10 mb-5 text-xl text-gray-800'>Remote opportunities aren’t just becoming easier to source, they are being developed by companies who are purposefully building a remote-friendly work culture (and looking for the right candidates to thrive in it).</p>
                    <a className='underline text-blue-700 text-xl hover:text-blue-800' href="#">Read more</a>
                    <hr className='text-gray-400 my-10' />
                    <div className='h-[60px]'>
                        <Link to="/remote-work/tips-best-practices" className=' float-end flex gap-3 items-center hover:gap-4 w-[500px]  transition-all bg-blue-600 hover:bg-[#0747A6] px-4 py-4 rounded text-white text-[18px]'>Dispelling remote work myths: tips & best practices <span><FaArrowRightLong /></span></Link>
                    </div>

                    <div className=' py-50 flex flex-col items-center text-center w-full'>
                        <img src={t1} alt="" />
                        <h3 className='text-xl mb-5 font-bold'>Trello has everything you need to get things <br /> done.</h3>
                        <p >Become one of the millions of people to fall in love with Trello.</p>
                        <Link to="/login" className='border border-violet-600 px-6 py-3 rounded mt-5 hover:bg-violet-200 transition-all delay-100 cursor-pointer hover:shadow'>Sign up-it's free</Link>
                    </div>
                </div>
            </div>
            <div className='  '>
                <div className='flex  justify-between bg-gradient-to-r from-[#B52B64] to-[#FC7153] mx-50 px-10 py-5 rounded my-10'>
                    <div className='text-white'>
                        <h1 className='text-2xl font-bold'>Your Hybrid Work hub</h1>
                        <p className='text-xl'>Explore curated resources on work-life balance, comms, and project management</p>
                    </div>
                    <div>
                        <button className='px-4 py-3 rounded bg-white hover:bg-gray-50 cursor-pointer text-[17px]'>Learn about Hybrid Work</button>
                    </div>
                </div>
            </div>
            <UniversalFooter />
        </>
    )
}

export default RemoteWorkGuide
