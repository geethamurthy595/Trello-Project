import { useState } from 'react'
import React from 'react'
import Sidebar from './SideBar'
import { CgTemplate } from "react-icons/cg";
import icons from "../../assets/icon.svg"

const BoardsMain = () => {
  const [template, setTemplate] = useState("")

  return (
    <>
      <Sidebar />
      <div>

        <h1 className=' h-20 w-
        flex items-center space-x-4 gap-3 mt-[-700px] ml-70'> <CgTemplate className="h-6 w-6" />Most Popular Templates</h1>

        <h1 className='font-bold text-2xl  w-100 flex items-center space-x-4 gap-3 mt-[-700px] ml-70'> <CgTemplate className="h-6 w-6" />Most Popular Templates</h1>
        <p className='mt-7 ml-70'>Get going fast with a template from the Trello community or   
         <select className="border w-60 h-11 border-gray-800 rounded-md p-2 ml-3"> value={template} onChange={(e)=> setTemplate(e.target.value)}
           
          <option value=""> Choose a Category </option>
          <option value="Popular"> Popular </option>
          <option value="Small Business"> Small business  </option>
          <option value="Design"> Design </option>
          <option value="Education"> Education </option>
          <option value="Engineering-IT"> Engineering-IT </option>
          <option value="Marketing"> Marketing </option>
          <option value="Human Resources"> Human Resources </option>
          <option value="Operations">Operations </option>
          <option value="Sales CRM">Sales CRM</option>
      </select> </p>


     <div className='flex gap-3'> 
       <div className='ml-70 shadow rounded-2xl border border-gray-300 w-60 h-35   mt-6'>
        <img className='h-20 w-60 rounded-t-2xl' src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg" alt="" />
        <p className='ml-6 mt-2'>Kanban Template</p>
       
      </div>
      <div className=' shadow rounded-2xl border border-gray-300 w-60 h-35  space-x-10 mt-6'>
        <img className='h-20 w-60 rounded-t-2xl' src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/b50115e302bd82e4e556ce43909ffb4d/photo-1589932527534-77a1546ac3e5.jpg" alt="" />
        <p className='ml-6 mt-2'>Daily Task Management <br />Template|Trello</p>
        
      </div>
      <div className=' shadow rounded-2xl border border-gray-300 w-60 h-35  space-x-10 mt-6'>
        <img className='h-20 w-60 rounded-t-2xl' src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b10c8bd87b80f7abeb56820f50c4db66/photo-1474487548417-781cb71495f3.jpg" alt="" />
        <p className='ml-6 mt-2'>Remote Team Hub</p>
        
      </div>
     </div>
      <br />
      <div>
      <a href="" className='ml-70 underline font-medium    text-blue-600 underline-decoration-blue-600'>Browse the full template gallery</a>
      <br />
      <br />
      <h2 className='ml-70 font-bold text-xl'>YOUR WORKSPACES</h2>
      <br />
      <p className='ml-70'>You aren't a member of any workspace yet. <a className='underline font-medium    text-blue-600 underline-decoration-blue-600' href="">Create a Workspace</a></p>
      <br />
     <div className='flex gap-2'>
       <h2 className='ml-70 font-bold text-xl'>Guest Workspaces</h2>
        <img className='h-5 w-5 mt-1' src={icons} alt="" />
     </div>
     <br /><br />
     <div className='flex gap-2'>
      <div className='font-bold text-2xl text-white ml-70 border rounded bg-green-600 h-9 w-9 text-center'>T</div>
      <h1 className=' font-bold text-xl'>Trello Workspace</h1>
     </div>
      <div className='ml-70 shadow rounded-2xl border border-gray-300 w-60 h-35  space-x-10 mt-6'>
        <img className='h-20 w-60 rounded-t-2xl' src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b10c8bd87b80f7abeb56820f50c4db66/photo-1474487548417-781cb71495f3.jpg" alt="" />
        <p className='ml-6 mt-2'>Remote Team Hub</p>
        
      </div>
      </div>

      </div>
    </>
  )
}

export default BoardsMain
