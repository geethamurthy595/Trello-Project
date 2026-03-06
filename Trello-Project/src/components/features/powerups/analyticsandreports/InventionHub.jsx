import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from "../../../../assets/inventionhubimg1.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'


const InventionHub = () => {
    const m=[{
        p:'Click the Power-Up on your Trello card.',
        img:img1
    },
{
    p:'A new idea will be created in your Invention Hub account and will be populated with the information, drawings and attachments associated with that Trello card.',
    img:img1
},
{
    p:'Use Invention Hub to embellish the idea and collaborate with team members, so you can move it toward patent or trade secret.',
    img:img1
}]
  return (
    <>
      <NavBar />
      {/* <h1>Card aging</h1> */}
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Invention Hub</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto   ">
        <div class="flex w-90 h-130 justify-start sticky top-35">
          <div class="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-48 h-48"
            />
            <p className="mt-2">Made by Turbo Patent</p>
            <p className="bg-gray-100">500+</p>
            {/* <div class="inline-block w-1/2 p-2 bg-gray-200"></div> */}
            <br />
            <hr class="border-t border-gray-300"></hr>
            <br></br>

            <h1 class="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div class="flex space-x-2">
              <a
                href="Analytic&reporting"
                class="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Analytic & Reporting
              </a>
              <a
                href="Board utilities"
                className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                Product & design
              </a>
            </div>
            <br />
            <hr class="border-t border-gray-300"></hr>

            <div className="flex items-center">
              <CiMail />
              <a
                href="Contact Support"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Contact Support
              </a>
              <br />
            </div>
            <div className="flex items-center">
              <MdOutlinePrivacyTip />
              <a
                href=" Privacy Policy"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Privacy Policy
              </a>
              <br />
            </div>
            <hr class="border-t border-gray-300"></hr>
          <div>
            <br />
  <p>Invention Hub is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Invention Hub</h1>

    
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div>

          <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Capture and protect more of your intellectual property as you develop your product and technical plans in Trello. This Power-Up easily migrates potential inventive material — in the form of product and technical descriptions — to Invention Hub — a free idea management platform that helps you source more IP from engineers and guide each idea toward patent application or trade secret. Invention Hub makes it easy to capture and track your company’s IP, and convert ideas into protected assets.
          </p>
          <h1 className='text-2xl font-semibold'>Instructions</h1>
          {
            m.map(({p,img})=>{
                return(
                    <div key={img} className='flex flex-col gap-2'>
                        <p className='font-light'>{p}</p>
                        <img className='w-50 m-auto' src={img} alt="" />
                    </div>
                )
            })
          }
          
        </div>
      </section>
      <AtlassianFooter/>
    </>
  )
}

export default InventionHub
