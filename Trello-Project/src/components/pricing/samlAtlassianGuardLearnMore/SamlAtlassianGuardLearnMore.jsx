import React from 'react'
import NavAtlassianLogo from "../../../assets/atlassianLogoWhite.svg" 
import NavGuard from "../../../assets/NavGuard.svg" 
import { IoSearch } from "react-icons/io5";
import BgImg from "../../../assets/safeGuardBgImg.svg"
import AnimateImg from "../../../assets/atlassianGuardAnimate.png"
import AnimateBgImg from "../../../assets/animateBgImg.svg"
import PlayBlueBtn from "../../../assets/playBlueBtn.png"
import PlayBtn from "../../../assets/playBtn.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import FirstStar  from "../../../assets/firstStars.svg"
import SecondStar  from "../../../assets/secondStars.svg"
import Lock from "../../../assets/lock.png"
import Video from "../../../assets/videogaurd.mp4"
import VideoBg from "../../../assets/videoBg.svg"
import BookGuide from "../../../assets/bookGuide.svg"
import Keyguard from "../../../assets/keyGuard.svg"
import Profile from "../../../assets/profile.svg"
import Percentage from "../../../assets/percentage75.svg"
import Software from "../../../assets/softwareAGLogo.svg"
import RockwellAutomation from "../../../assets/rockwellAutomationLogo.svg"
import Zoom from "../../../assets/zoomLogo.svg"
import Castlight from "../../../assets/CastlightLogo.svg"
import Software2 from "../../../assets/softwareAGLogo2.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import Microsoft from "../../../assets/microsoftGuard.svg"
import AtlassianMiniIcon from "../../../assets/atlassianMiniIcon.svg"
import BlueTopAngle from "../../../assets/blueTopAngle.svg"
import PurpleSafe from "../../../assets/purpleSafe.png"
import { GrLanguage } from "react-icons/gr";

const SamlAtlassianGuardLearnMore = () => {

    let data = [
        {
            img : BookGuide,
            ht : 105,
            wth : 78,
            head : "Why zero trust?",
            desc : "Learn why zero trust matters and how you can implement it.",
            blueline : "Download the whitepaper",
        },
        {
            img : Keyguard,
            ht : 105,
            wth : 94,
            head : "Explore capabilities",
            desc : "See Guard capabilities that strengthen your Atlassian cloud security posture.",
            blueline : "Learn more",
        },
        {
            img : Profile,
            ht : 105,
            wth : 122,
            head : "Why zero trust?",
            desc : "Learn why zero trust matters and how you can implement it.",
            blueline : "Register now",
        }
    ]
    
  return (
   <>
    <nav className='w-full flex fixed top-0 bg-white z-100'>
        <div className='bg-blue-700 w-[68px] h-[68px] flex justify-center items-center'><img src={NavAtlassianLogo} alt="" className='invert brightness-0 w-[32px] h-[33px]' /> </div>
        <div className='flex w-[60%] justify-center gap-8 items-center ml-[-130px] font-[25px] text-[17px]'>
            <img src={NavGuard} alt="" className='h-[24px] w-[91px] hover:cursor-pointer' />
            <a href="" className=' hover:cursor-pointer hover:text-blue-500'>Capabilities</a>
            <a href="" className=' hover:cursor-pointer hover:text-blue-500'>Pricing</a>
            <a href="" className=' hover:cursor-pointer hover:text-blue-500'>Guide</a>
            <a href="" className=' hover:cursor-pointer hover:text-blue-500'>Demo</a>            
        </div>
        <div className='flex justify-center items-center gap-7 ml-[200px]'>
            <button className='bg-blue-700 text-white font-bold px-7 py-2 rounded-[50px] hover:bg-blue-950 hover:cursor-pointer'>Try it free</button>
            <IoSearch className='w-[23px] h-[23px] font-bold' />
            <a href="" className='font-bold hover:text-blue-500 border-l-2 pl-[27px] border-gray-200'>Sign in</a>
        </div>
    </nav>

    <section style={{ backgroundImage: `url(${BgImg})` }}>
        <div className='flex flex-col h-[600px] items-center'>
            <h1 className='text-[65px]/15 text-center font-black text-white w-[50%] pt-[150px]'>Safeguard your next breakthrough</h1>
            <p className='text-white text-center text-xl w-[50%] pt-[50px]'>Atlassian Guard, a cloud security add-on for data protection and threat detection</p>
            <button className='bg-yellow-500 mt-10 py-2 px-5 rounded-[40px] font-semibold text-gray-800  hover:bg-yellow-600'>Try it free</button>
        </div>
    </section>

    <div className="relative flex flex-col items-center justify-center mt-[-80px] mb-0">
        <img src={AnimateBgImg} alt="Background Animation" className="absolute h-[400px] w-[816px] object-contain z-0"/>
        <img src={AnimateImg} alt="Animated Graphic" className="relative h-[375px] w-[666px] z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer"/>
        <img src={PlayBtn} alt="Play Button" className="absolute h-[70px] w-[70px] invert brightness-0 z-20 hover:cursor-pointer"/>
        <div className="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-500 mt-6 hover:cursor-pointer z-20">
            <img src={PlayBlueBtn} alt="Play icon" className="h-[22px] w-[22px]" />
            <p>Watch the video</p>
        </div>
    </div>


    <div className="relative bg-black h-[360px] overflow-hidden mt-10">
        <h1 className="text-white text-4xl font-extrabold w-[30%] mx-auto pt-[100px] text-center">Meet Guard Premium</h1>
        <p className="text-white text-md w-[30%] mx-auto pt-5 text-center">Defend your priority projects with our most advanced security capabilities and stop threats before they become incidents.</p>
        <div className="flex items-center justify-center gap-2 pt-5 group hover:cursor-pointer">
            <a href="#" className="text-blue-300 text-md font-[14px] group-hover:underline">Learn more about Guard Premium</a>
            <FaArrowRightLong className="text-blue-300 w-[12px] transition-transform duration-500 ease-in-out group-hover:translate-x-1.5"/>
        </div>
        <img src={FirstStar} alt="" className="absolute top-[60px] left-[140px] w-[95px] h-[289px]"/>
        <img src={Lock} alt=""className='w-[225px] h-[239px] absolute top-[120px] left-[250px]' />
        <img src={SecondStar} alt="" className="absolute top-[80px] right-[160px] w-[183px] h-[263px]"/>
    </div>

    <section>
        <div className='w-[35%] m-auto mt-[70px]'>
            <h1 className='font-[1000] text-[34px] text-center'>Don’t get caught off guard</h1>
            <p className='text-center text-[18px] tracking-wide mt-2 text-gray-800'>Enlist Atlassian Guard to protect your most valuable assets</p>
            <div className="flex gap-4 ml-[50px] mt-[50px]">
                <button className="px-8 py-2 rounded-full bg-blue-600 text-white text-[20px] hover:cursor-pointer">Protect</button>
                <button className="px-8 py-2 rounded-full bg-gray-100 text-black text-[20px] hover:border-1 transition-transform cursor-pointer">Detect</button>
                <button className="px-8 py-2 rounded-full bg-gray-100 text-black text-[20px] hover:border-1 transition-transform cursor-pointer">Respond</button>
            </div>
        </div>
        <div className='flex gap-10 w-full h-[672px] m-[40px] mt-[70px]'>
            <div className='h-[240px] w-[500px] flex flex-col justify-center'>
                <h1 className='text-4xl font-bold mt-[250px] w-[400px]'>Double down on data protection</h1>
                <p className='mt-[15px] tracking-wider text-[17px]'>Enforce security policies to proactively defend against data loss across Atlassian cloud. </p>
                <div className='flex items-center gap-2 group w-[150px] mt-5'>
                    <p className='text-blue-600 tracking-wide transition-transform duration-500 group-hover:underline cursor-pointer '>See capabilities</p>
                    <FaArrowRightLong className='text-blue-500 transition-transform duration-500 group-hover:translate-x-1.5 cursor-pointer'/>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${VideoBg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"scroll" }} className='h-[620px] w-[927px] relative' >
                <video src={Video} autoPlay muted loop className='w-[848px] h-[477px] absolute top-[45px] left-[30px]'></video>
            </div>
        </div>
    </section>

    <section className='w-[75%] m-auto'>
        <h1 className='text-center text-4xl font-bold'>Resources</h1>
        <div className='flex justify-between items-center mt-[80px] border-b-1 border-gray-300 pb-[70px]'>
            {data.map(({img,ht,wth,head,desc,blueline})=>{
                return(
                    <div className='flex flex-col h-[310px] w-[368px] shadow-2xs'>
                        <div className='h-[140px] w-[365px] p-[16px] flex justify-center bg-gray-100 '>
                            <img src={img} alt="" height={ht} width={wth} className='align-middle'/>
                        </div>
                        <div className='h-[142px] w-[365px] p-[16px]'>
                            <h1 className='text-2xl font-bold'>{head}</h1>
                            <p className='text-gray-900 tracking-wide mt-3'>{desc}</p>
                            <div className='flex gap-2 items-center mt-5 group'>
                                <a href="" className='text-blue-600 transition-transform duration-500 group-hover:underline cursor-pointer'>{blueline}</a>
                                <FaArrowRightLong className='text-blue-600 transition-transform duration-500 group-hover:translate-x-1.5 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className='flex flex-col items-center relative'>
            <h1 className='mt-22 text-center text-4xl tracking-tight font-bold w-[50%]'>75% of our enterprise cloud customers use Guard</h1>
            <div className='flex items-center gap-2 mt-5 w-[250px] group'>
                <p className='text-blue-600 tracking-wider transition-transform duration-500 group-hover:underline cursor-pointer'>Explore customer stories</p>
                <FaArrowRightLong className='text-blue-600 transition-transform duration-500 group-hover:translate-x-1.5 cursor-pointer'/>
            </div>
            <img src={Percentage} alt="" className='absolute top-[60px] left-[306px]' />
            <div className='mt-17 flex gap-[40px]'>
                <img src={Software} alt="" />
                <img src={RockwellAutomation} alt="" />
                <img src={Zoom} alt="" />
                <img src={Castlight} alt="" />
            </div>
            <div className='w-[85%] mt-14 flex gap-10 p-4 shadow-[0_0_7px_rgba(0,0,0,0.3)] '>
                <div>
                    <img src={Software2} alt="" height={235} width={267} />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between mt-2 relative'>
                        <p>1/4</p>
                        <button className='h-[30px] w-[30px] bg-gray-800 text-white/80 rounded-sm flex items-center justify-center absolute left-[515px]'><FaArrowLeftLong/></button>
                        <button className='h-[30px] w-[30px] bg-gray-800 text-white/80 rounded-sm flex items-center justify-center'><FaArrowRightLong/></button>
                    </div>
                    <p className='w-[587px] text-[17px] tracking-wide'>
                        “Atlassian Guard is a crucial component in ensuring enterprise-wide, regulated access 
                        management in the cloud. It’s a significant advantage over our previous on-premise 
                        instances as we are able to apply security policies in a simplified way.”
                    </p>
                    <h1 className='text-xl font-bold tracking-tight text-gray-800'>Radoslav Danchev, VP of Collaboration, Workplace, and Support</h1>
                    <p className='text-[17px] tracking-wide'>Software AG</p>
                    <div className='flex items-center text-blue-700 gap-2 group w-[150px]'>
                        <p className='text-[16px] transition-transform duration-500 group-hover:underline cursor-pointer'>Read the story</p>
                        <FaArrowRightLong className='transition-transform duration-500 group-hover:translate-x-1.5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='mt-14 bg-[rgb(248,248,248)] flex flex-col items-center'>
        <h1 className='text-center text-[40px] tracking-tight font-bold mt-[80px]'>Strengthen your security portfolio</h1>
        <p className='text-center text-[16px] tracking-wide mt-[10px]'>Integrate Guard with your existing solutions to extend security policies and enhance alerts with Atlassian cloud data.</p>
        <div className='flex gap-4 mt-7'>
            <img src={Microsoft} alt="" />
        </div>
        <div><img src={BlueTopAngle} alt="" className='mt-[120px] w-[1500px]' /></div>
        <div className='w-full h-[326px] bg-[#1868DB] flex gap-10 justify-center'>
            <div className='w-[30%] flex flex-col justify-center items-start'>
                <h1 className='text-white text-[35px] font-bold tracking-tight'>Get started with Guard</h1>
                <p className='text-white mt-5 mb-5'>Try Guard free for 30 days. </p>
                <button className='bg-yellow-500 px-4 py-2 rounded-4xl font-semibold text-gray-800 hover:bg-yellow-600 cursor-pointer'>Start free trail</button>
            </div>
            <div className='w-[30%] flex justify-center items-center'>
                <img src={PurpleSafe} alt="" className='h-[255px] w-[350px]' />
            </div>
        </div>
    </section>
        
    <footer className="bg-[#f9fafb] h-[451px] w-[1140px] p-8 m-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="mb-4">
            <img src={AtlassianMiniIcon} alt="" className='h-[26px] w-[26px]' />
          </div>
          <ul className="text-sm font-bold text-gray-900 flex flex-col gap-4 mt-8">
            <li>Company</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>Investor Relations</li>
            <li>Atlassian Foundation</li>
            <li>Press kit</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold  text-gray-900 text-[14px] tracking-wider">PRODUCTS</h3>
          <ul className="text-[14px] text-gray-900 flex flex-col gap-4 mt-8">
            <li>Rovo</li>
            <li>Jira</li>
            <li>Jira Align</li>
            <li>Jira Service Management</li>
            <li>Confluence</li>
            <li>Loom</li>
            <li>Trello</li>
            <li>Bitbucket</li>
          </ul>
          <div className='group flex items-center relative mt-12'>
            <p className='transition-transform duration-500 group-hover:underline cursor-pointer text-[15px]'>See all products</p>
            <FaArrowRightLong className='w-[12px] absolute left-[112px] top-1 transition-transform duration-500 group-hover:translate-x-1.5'/>
          </div>
        </div>

        
        <div>
          <h3 className="font-bold  text-gray-900 text-[14px] tracking-wider">RESOURCES</h3>
          <ul className="text-[14px] text-gray-900 flex flex-col gap-4 mt-8">
            <li>Technical support</li>
            <li>Purchasing & licensing</li>
            <li>Atlassian Community</li>
            <li>Knowledge base</li>
            <li>Marketplace</li>
            <li>My account</li>
          </ul>
          <div className='group flex items-center relative mt-30'>
            <p className='transition-transform duration-500 group-hover:underline cursor-pointer text-[15px]'>Create support ticket</p>
            <FaArrowRightLong className='w-[12px] absolute left-[146px] top-1 transition-transform duration-500 group-hover:translate-x-1.5'/>
          </div>
        </div>

        {/* Learn */}
        <div>
          <h3 className="font-bold  text-gray-900 text-[14px] tracking-wider">LEARN</h3>
          <ul className="text-[14px] text-gray-900 flex flex-col gap-4 mt-8">
            <li>Partners</li>
            <li>Training & certification</li>
            <li>Documentation</li>
            <li>Developer resources</li>
            <li>Enterprise services</li>
          </ul>
          <div className='group flex items-center relative mt-39'>
            <p className='transition-transform duration-500 group-hover:underline cursor-pointer text-[15px]'>See all resources</p>
            <FaArrowRightLong className='w-[12px] absolute left-[118px] top-1 transition-transform duration-500 group-hover:translate-x-1.5'/>
          </div>
        </div>
      </div>
      <div className='flex justify-around gap-60 mt-24 text-gray-800'>
        <h1>Copyright © 2025 Atlassian</h1>
        <div className='flex gap-4'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms</a>
            <a href="" className='hover:underline'>Impressum</a>
            <div className='flex  justify-center items-center'>
                <GrLanguage className='text-black'/>
                <select className="hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Choose language</option>
                    <option>Deutsch</option>
                    <option selected disabled>English</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>Italiano</option>
                    <option>한국어</option>
                    <option>Nederlands</option>
                    <option>日本語</option>
                    <option>Polski</option>
                    <option>Português</option>
                    <option>русский</option>
                    <option>中文</option>
                </select>
            </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default SamlAtlassianGuardLearnMore