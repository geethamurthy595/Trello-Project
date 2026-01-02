import React from 'react'
import NavBar from '../../NavBar'
import { FiGlobe } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import UniversalFooter from '../../UniversalFooter';
import { Link } from 'react-router-dom';

const WorkspaceTableView = () => {
  return (
    <>
      <NavBar />

      <section className='flex mt-10 justify-center items-center h-[480px] font-sans '>
        <div>
          <h1 className='text-5xl font-medium mb-5'>Trello Workspace <br /> views</h1>
          <p className='text-[22px] mb-5'>Select tasks across multiple Trello boards to <br /> bring together the work that matters most to <br /> you with Workspace Table and Calendar <br /> views.</p>
          <Link to="/free-trial" className="border border-violet-600 p-3 rounded-sm hover:bg-violet-100 transition duration-300">Get Started</Link>
        </div>
        <div>
          <img className='w-[600px]' src="https://images.ctfassets.net/rz1oowkt5gyp/IzP5x6h6ah349q3zW89n8/0b0cc5b8660b2b36bd7324e5d5f9e780/UI_Illo__Workspace_Views_2x.png?w=1304&fm=webp" alt="" />
        </div>
      </section>

      <section className='h-[900px] bg-gradient-to-b from-pink-400 to-purple-800 text-white '>
        <h1 className='text-4xl font-medium text-center mb-5 pt-25'>Create customized overviews of work</h1>
        <p className='text-center text-[20px]'>Save your preferred Workspace view settings and come back to what’s <br /> urgent with a specific overview of work and eliminate the risk of tasks falling <br /> through the cracks. Make your saved views available for teammates to track  <br />or keep them private.</p>
        <video className="h-[600px] aspect-[3/2] rounded-lg  mx-auto" src="https://videos.ctfassets.net/rz1oowkt5gyp/4fN9xob1pPWdh8sze3SJqQ/8526f4c2b7f5ed129c841719c5a7118f/WorkspaceViews_SetUpCalendarView.mp4" autoPlay muted loop></video>
      </section>

      <section className="grid grid-cols-2 grid-rows-2 gap-4 mt-15 ml-50 mb-16 mr-30">

        <div className="p-4">
          <h1 className='text-4xl font-medium mb-8'>Organize several projects <br />into a single list</h1>
          <p className='text-[20px]'>Use spreadsheet-style views to create custom <br /> task lists across multiple Workspace boards. <br /> Filter the information you want by member, <br />label, due date and more.</p>
        </div>
        <div className="p-4">
          <img className='h-70' src="https://images.ctfassets.net/rz1oowkt5gyp/7cpa0rqi3PJIi79Ut7cjqa/fd630aeadcc09686ffc7bfde9280490d/WorkspaceViews_FeatureSection_1_2x.png?w=1304&fm=webp" alt="" />
        </div>
        <div className="p-4 "><img className='h-70' src="https://images.ctfassets.net/rz1oowkt5gyp/DJdG2y9Cu7VPxNDRBjZjJ/af8f5017958bfa8fad653e58fff9be99/WorkspaceViews_FeatureSection_2_2x.png?w=1304&fm=webp" alt="" /></div>
        <div className="p-4 ">
          <h1 className='text-4xl font-medium mb-8'>See what lies ahead across <br /> your entire Workspace</h1>
          <p className='text-[20px]'>Manage all of the scheduled work across <br /> team projects and initiatives with Workspace <br /> Calendar. Visualize due dates and deadlines<br /> across  multiple boards in one snapshot and <br /> get granular information with filter options.</p>
        </div>
      </section>

      <section className='h-[250px] bg-gradient-to-b from-[#3B318A] to-[#091E42] text-white '>
        <h1 className='text-center pt-15 text-4xl font-medium'>Master work management and collaboration with Workspace views</h1>
        <p className='text-[20px] text-center mt-6'>Start a free trial today</p>
        <Link to="/free-trial" className="ml-[46%] p-3 w-30 mt-6 rounded-sm bg-white text-black hover:bg-purple-100 transition duration-300">Get Started</Link>
        <div className='flex gap-20 ml-50   mt-19'></div>
          </section>
      
      <UniversalFooter/>
    </>
  )
}

export default WorkspaceTableView