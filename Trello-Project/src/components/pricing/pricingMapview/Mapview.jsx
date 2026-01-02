import Pink from "../../../assets/Pink.svg";
import Potential from "../../../assets/Potential.webp";
import Map2 from "../../../assets/Map2.webp";
import World from "../../../assets/World.webp";
import UniversalFooter from "../../UniversalFooter";
import NavBar from "../../NavBar";
import { Link } from "react-router-dom";
let Mapview = () => {
    return (
        <>
        <NavBar/>
       <div className="flex gap-25">
        <div className="mt-40 pl-50">
            <h1 className="font-bold text-4xl">Trello Map view</h1>
            <p className="mt-6 text-gray-500 text-xl">Have a better direction of where your work is <br /> headed by knowing where it’s located</p>
            <Link to="/free-trial" className="mt-5 inline-flex items-center justify-center border h-10 w-30 rounded border-red-400 hover:bg-pink-100">Get Started</Link>
        </div>
        <div>
            <img className="w-130 mt-20" src={Pink} alt="" />
        </div>
       </div>
       <div className="w-full h-230 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-center ">
       <div className="py-20">
        <h1 className="font-bold text-3xl">Know where work is located</h1>
        <p className="text-[20px] mt-3">Track and coordinate projects, clients, and properties across cities, states, <br /> and countries with easy add-on location-based data straight to your cards. <br /> You can view Maps when it matters most too—in the Trello app while you’re</p>
        <h3 className="text-[20px] ">on the move.</h3>
        </div>
       <div className="flex items-center justify-center mt-[-30px]">
          <img className="w-220" src={Potential} alt="" />
       </div>
       </div>
       <div className="flex gap-20">
        <div>
            <h1 className="text-3xl font-semibold pl-40 mt-20">See every place on a map</h1>
            <p className="leading-relaxed mt-5 pl-40 text-[20px]">From event planning to real estate <br /> management, visualize the information on an  <br />interactive map to help you improve the <br /> coordination of all logistics.</p>
        </div>
        <div>
            <img className="w-130 mt-20" src={Map2} alt="" />
        </div>
       </div>
        <div className="flex gap-20">
            <div className="pl-30">
            <img className="w-130 mt-20" src={World} alt="" />
        </div>
        <div>
            <h1 className="text-3xl font-semibold pl-10 mt-20">Share where it’s happening</h1>
            <p className="leading-relaxed mt-5 pl-10 text-[20px]">Make a Map view public and share it to ensure <br /> everyone on the crew is on the right track and <br /> never misses a gig.</p>
        </div>
       </div> <br /><br /> <br /> <br />
        <div className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 py-14 text-center">
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">
        Always know where work is located
      </h2>
      <p className="text-lg  mb-8">
        Start a free trial today
      </p>
      <Link to="/free-trial" className="bg-white text-blue-900 font-semibold py-2 px-6 rounded border border-red-500 shadow hover:bg-blue-50 transition">
        Get started
      </Link>
    </div>
    <UniversalFooter/>
        </>

    )
}
export default Mapview