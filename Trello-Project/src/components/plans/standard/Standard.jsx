import { Link } from 'react-router-dom'
import i1 from '../../../assets/article1.png'
import i2 from '../../../assets/article2.png'
import i3 from '../../../assets/article3.png'
import i4 from '../../../assets/article4.png'
import i5 from '../../../assets/article5.png'

import img1 from '../../../assets/aside-1.png'
import img2 from '../../../assets/aside-2.png'
import img3 from '../../../assets/aside-3.png'
import img4 from '../../../assets/aside-4.png'

import headerimg from '../../../assets/img1.png'
import NavBar from '../../NavBar.jsx'
import UniversalFooter from '../../UniversalFooter.jsx'
import CardSlider2 from "../standard/slider1/CardSlider2.jsx";
import Pws from './Pws.jsx'



function Standard() {
  return <>
    <NavBar/>
    <header className=" border-red-500 h-[437px] pl-47 pt-34 flex gap-18 bg-[#f5f6f7]">
      <div className=" h-70 w-105 pl-2 " >
        <h1 className=" text-[48px] font-medium">Trello Standard</h1>
        <p className="text-[20px] font-normal tracking-normal">Everything you need to get more done with advanced Planner features, unlimited boards, and more automation for just <span className="font-bold"> $5 a month.</span></p><br />
        <div className="">
          <button className=" h-[50px] w-[90px] rounded-[5px] bg-blue-600 text-white text-[16px] hover:bg-blue-900 hover:cursor-pointer">Sign up</button>&nbsp;&nbsp;
          <a href="" className="underline text-blue-900">or log in!</a>
        </div>
      </div>
      <div>
        <img className='h-[350px] w-[640px]  mt-[-60px]' src={headerimg} alt="" />
      </div>
    </header>
    <div className=' h-[400px]'>
      <div className=" h-[36xpx] flex pl-[205px] pt-[73px]">
        <div>
          <h1 className="text-[36px] font-medium">A community of <br /> millions</h1>
          <h2 className="text-[24px] font-medium">of teams</h2>
          <p className="text-[20px] font-normal">around the world use Trello to track <br /> their daily to-dos and projects</p>

        </div>
        <div className="">
          <h1 className="text-[36px] font-medium">80%</h1>
          <h2 className="text-[24px] font-medium">of Fortune 500</h2>
          <p className="text-[20px] font-normal">use Trello to improve efficiency.</p>
        </div>
      </div>
    </div>
    <div> <Pws /></div>

    <div className=" h-[385px] flex bg-blue-600 pl-[200px] pt-[76px]">
      <div>
        <div className="h-[144px] w-[442px]">
          <p className="text-[36px] text-white">With Trello Standard you’ll get everything you love in our free version, plus:</p>
        </div><br /><br />
        <button className="h-[50px] w-[130px] rounded-[5px] bg-white hover:bg-grey-300 hover:cursor-pointer">Sign up today</button>
      </div>
      <div className='flex pl-[40px]'>
        <div>
          <div className='h-[60px] w-[250px] flex text-[20px] text-white'><img src={img1} alt="" />Unlimited boards</div>
          <div className='h-[64px] w-[253px]'></div>
          <div className='h-[60px] w-[250px] flex text-[20px] text-white'><img src={img2} alt="" />Custom Fields</div>
        </div>
        <div className='pl-[35px]'>
          <div className='h-[60px] w-[250px] flex text-[20px] text-white'><img src={img3} alt="" />Advanced Planner</div>
          <div className='h-[64px] w-[253px]'></div>
          <div className='h-[60px] w-[250px] flex text-[20px] text-white'><img src={img4} alt="" />Advanced <br /> checklists</div>
        </div>
      </div>
    </div>
    <div className='h-[500px] pt-[80px] pl-[360px]'>
      <p className='text-[20px] font-normal'>Join a community of millions of users globally who are using Trello to get more done.</p><br /><br />

      <div className='flex pl-[123px]'>
        <img className='w-[162px] h-[80px]' src={i1} alt="" />
        <img className='w-[162px] h-[109px]' src={i2} alt="" />
        <img className='w-[162px] h-[80px]' src={i3} alt="" />
      </div><br />
      <div className='flex pl-[200px]'>
        <img className='w-[162px] h-[80px]' src={i4} alt="" />
        <img className='w-[162px] h-[80px]' src={i5} alt="" />
      </div>
    </div>
    <div className="h-[397px] bg-[#403294] text-white pl-[480px]">
      <div className="h-[397px] w-[570px] pt-[80px] ">
        <h1 className="text-[36px] font-medium pl-[70px]">Haven't tried Trello before?</h1><br />
        <p className="text-[20px] font-normal pl-[10px]">Sign up for free and join a community of millions of users <span className="pl-[32px]"> worldwide who are using Trello to get more done.</span></p><br />
        <div className="flex gap-[20px] pl-[40px]">
          <input className="h-[49.6px] w-[376px] rounded-[4.8px] pl-[10px] bg-white" type="email" placeholder="Email" />
          <button className="w-[89px] h-[49px] bg-white rounded-[5px] text-black hover:bg-grey-300 hover:cursor-pointer">Sign up</button>
        </div><br />
        <p className="pl-[37px]">By entering my email, I acknowledge the <span className="underline"> <Link to='/legal/privacy-policy#privacy-policy-overview'>Atlassian Privacy Policy</Link></span></p>
      </div>
    </div>
    <UniversalFooter/>
  </>
}
export default Standard