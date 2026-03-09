import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from "../../../../assets/habittrackimg1.svg"
import img2 from "../../../../assets/habittrackimg2.gif"
import img3 from "../../../../assets/habittrackimg3.gif"
import img4 from "../../../../assets/habittrackimg4.svg"
import img5 from "../../../../assets/habittrackimg5.svg"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'


const HabitTracker = () => {
    const about=['Habit Tracker by UpgradeYourBrain is a fully Trello-integrated habit tracker. Main tracker objective: to circumvent the inertia of the psyche and help performing new actions regularly. This tracker is perfect for those who use Trello for self-organization.',`The main difference between this tracker and the rest is its full compatibility with personal task management systems (like GTD) that have a “today's action list” or “next action list”. Habits will be added as cards to this list at the time you specify. You can also enable notifications for habits. Thus, you will not forget to perform these actions and you will not have to spend extra time filling out the tracker!`,`Due to its features, the tracker can be used for both typical habits, such as “Get up at 6:00”, and also for less frequent or work tasks, for example, “Plan for a month” or “Calculate quarterly bonuses.” That is, you can use it to remind of repeated tasks, and table data aggregation by weeks and months will show the progress more clearly.`,`This tracker will also help organize your morning ritual or daily routine if you use bullet journal system. In general, trello with this power-up can replace a paper bullet journal.`]
    const works=['Each habit is a card.','You determine when and in which list copies of this card will be created.','By moving these copies to the "Done" list, you indicate to the tracker which habits you are following.']
    const use=['Create a card for the habit you want to track. (We advise you to keep all habits cards in a separate list).',`Open a detailed card view and click “Repeat habit.”`,'Select a rule for this habit to repeat, as well as a list to add the habit card copy. You can also add a reminder.',`After the copy appears in the above list, move this card either to the “Done” list or to any other list, for example, “Reject”. If you set a reminder, you can mark the card as completed through a Trello mobile app notification.`,'Click on the “Habit Tracker” button in the upper right corner of the board (at the first launch, specify a list containing done cards).','Enjoy how much you have already been able to change your life, or vice versa, take measures to ensure that this happens :-)']

  return (
        <>
      <NavBar />
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Habit Tracker by UpgradeYourBrain</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto gap-16  ">
        <div class="flex w-90 h-130 justify-start sticky top-35">
          <div class="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by UpgradeYourBrain</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />5000+</p>
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
                Automation
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
  <p className='font-medium text-gray-600 text-left'>Habit Tracker by UpgradeYourBrain is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Habit Tracker by UpgradeYourBrain</h1>

    
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div>

          <div className='flex flex-col gap-3'>
            <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Good habits fuel your life success. Organize your perfect routine, track progress and free your mind for the most important things!
          </p>
          <h1 className='text-2xl font-semibold'>About Power-Up</h1>
          {
            about.map((para)=>{
                return(
                    <div key={para} className='flex flex-col gap-2'>
                        <p className='font-light'>{para}</p>
                    </div>
                )
            })
          }
          <h1 className='font-medium text-2xl'>How it works</h1>
          <ol className='flex flex-col gap-2 list-decimal'>
            {
            works.map((para)=>{
                return(
                   <li key={para} className='font-light'>{para}</li>
                )
            })
          }
          </ol>
          <h1 className='font-medium text-2xl'>How to use</h1>
          <ol className='flex flex-col gap-2 list-decimal'>
            {
            use.map((para)=>{
                return(
                   <li key={para} className='font-light'>{para}</li>
                )
            })
          }
          </ol>
          <img src={img2} alt="" />
          <h1>[image]</h1>
          <h1>[image]</h1>
          <img src={img3} alt="" />
          <h1 className='font-semibold text-2xl'>Contacts</h1>
          <p className='font-light'>You can ask any questions, as well as suggest ideas for improvement at </p>
          <p className='text-blue-600 underline hover:cursor-pointer'>support@upgradebrain.ru</p>
          <p className='text-blue-600 underline hover:cursor-pointer'>Terms of service</p>
          </div>
        </div>

      </section>
      <div className='mt-20'><AtlassianFooter/></div>
    </>
  )
}

export default HabitTracker
