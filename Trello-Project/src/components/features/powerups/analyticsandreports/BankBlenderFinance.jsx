import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img4 from "../../../../assets/timetrackerimg3.svg"
import img5 from "../../../../assets/timetrackerimg4.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const BankBlenderFinance = () => {
    const faqs=[
        {
            q:'Are new cards automatically added to your board when there is a transaction in one of your linked accounts?',
            a:`No. To get new transactions synced to your board, open the Power-Up's settings page, and click "Save & refresh".`
        },
        {
            q:'How to remove a linked acount',
            a:`Open the Power-Up's settings page, de-select the account, and click "Save & refresh". This won't delete any cards from your board, but it will "unlink" any cards created from transactions associated with the newly unlinked account.`
        },
        {
            q:'How to tell which cards on your board are linked to actual transactions',
            a:'Linked cards will have a "synced" badge on the card front. Try refreshing the page if the badges appear to be stale or incorrect.'
        }
    ]
  return (
    <div>
        <>
      <NavBar/>
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Bank Blender Finance</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto gap-16  ">
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="   rounded-lg    text-center">
            <img
              src=''
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Bank Blender</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />100+</p>
            <br />
            <hr className="border-t border-gray-300"></hr>
            <br></br>

            <h1 className="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div className="flex space-x-2 flex-col">
              <a
                href="Analytic&reporting"
                className="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Analytic & Reporting
              </a>
              <a
                href="IT & project management"
                className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                IT & project management
              </a>
            </div>
            <br />
            <hr className="border-t border-gray-300"></hr>

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
            <hr className="border-t border-gray-300"></hr>
          <div>
            <br />
  <p className='font-medium text-gray-600 text-left'>Bank Blender Finance stores personal data and is in compliance with </p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div className="w-full md:w-[70%] m-auto mb-6 ">
          <div className="flex justify-between items-center ">
           
            <h1 className="text-2xl font-bold text-black">Bank Blender Finance</h1>
            <a href="Power-up">
              <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <h1 className="text-2xl font-bold text-black">Bank Blender Finance lets you sync your bank and credit card transactions with your Trello board.</h1>

          <div className='flex flex-col gap-3'>
            <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Each synced transaction's name, date, amount, and acccount name are all saved to the card. This allows you to use Trello's native filtering, search and automation on the synced transactions.
          </p>
          <img className='w-xl h-50' src="" alt="" />
          <h1 className='text-2xl font-semibold'>Getting started</h1>
          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">Get started by connecting your bank and credit card accounts through our secure integration with Plaid. We'll create a card on your board for each transaction (see below).</p>
          <img className='w-xl h-50' src="" alt="" />
          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">Next, you’ll want to add a list for each spending category that you want. Create a card in each list titled Summary. That will allow you to see a total for all the cards in your list.</p>

          <h1 className='text-2xl font-bold'>FAQs</h1>
          <h1 className='text-xl font-medium'>Who made this Power-Up</h1>
          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">Me, Matt Wilson. Email me at <u className='underline text-blue-700'>matt@bankblender.com</u> if you need anything.</p>
          {
            faqs.map(({q,a})=>{
                return(
                    <div key={q} className='flex flex-col gap-2'>
                        <h1 className='text-xl font-medium'>{q}</h1>
                        <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">{a}</p>
                    </div>
                )
            })
          }
          <h1 className='text-xl font-medium'>Pricing</h1>
          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">It's free to connect one bank or credit card account, and 40 USD/year for unlimited accounts. You can purchase a subscription or manage an existing subscription from <u className='underline text-blue-700'>bankblender.com.</u></p>
          <h1 className='text-xl font-medium'>How do I export or print data?</h1>
          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">When you authorize Bank Blender, it gives you access to our standalone app as well. Head over to <u className='underline text-blue-700'>bankblender.com.</u> and submit the same email address you used for your Trello account. You'll get a sign in link via email. Once you are logged in, navigate to to the reports page to print and export data.</p>
          </div>
        </div>

      </section>
      <div className='mt-25'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default BankBlenderFinance
