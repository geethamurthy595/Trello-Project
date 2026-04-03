import React from 'react'
import img1 from '../../../../assets/walletimg1.png'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img2 from "../../../../assets/walletimg2.png"
import img4 from "../../../../assets/timetrackerimg3.svg"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const WalletIncomeAndExpences = () => {
    const onlineBusiness=[
        '🔗 Affiliate marketers',
        '🛒 E-commerce sellers (Shopify, Etsy, Amazon, etc.)',
        '🎥 YouTube and TikTok video creators',
        '📚 Book authors (Kindle, Gumroad, self-published)',
        '💻 SaaS & software developers',
        '📱 App creators',
        '🧑‍🏫 Course and info-product creators'
    ]
    const features=[
        <>Two auto-created boards: <button className='p-2 text-xs bg-gray-200 border rounded-xl text-gray-400'>💼 Wallet</button>  and <button className='p-2 text-xs bg-gray-200 border rounded-xl text-gray-400'>🤝 Online Business</button></>,
        <>Track monthly income, expenses, and net profit</>,
        <>View live badges on cards showing totals</>,
        <>Use <button className='p-2 text-xs bg-gray-200 border rounded-xl text-gray-400'>Summary</button> cards to see totals for any date range (e.g. <button className='p-2 text-xs bg-gray-200 border rounded-xl text-gray-400'>July - December</button>  )</>,
        <>Track online income in per-program cards</>,
        <>Freemium model with optional upgrade</>
    ]
    const howItWorks=[
        'Each Wallet card tracks monthly summaries.',
        'Online Busines cards contain lines like:'
    ]
    const perfectFor=[
        <>Creators who want a <strong>lightweight finance tool</strong> right inside Trello</>,
        <>Teams who manage multiple income streams and platforms</>,
        <>Businesses looking to <strong>track affiliate and direct revenue</strong> in one place</>
    ]
    const pricing=[
        'You can use the wallet for free with the "upgrade" badge on the cards.',
        'To use it without the "upgrade" badge, you can purchase a plan:',
        '$49 yearly',
        '$5,99 monthly.'
    ]
    const troubleShooting=[
        'DO: create additional online business cards (copy card), change amounts of expenses and income, delete months from cards if you start later than January, refresh page for updated summary.',
        `DON'T: change syntax, write anything in total.`
    ]
  return (
    <div>
      <>
      <NavBar/>
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Wallet Income & Expences Best for Online Business</Link>
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
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Eve Levi.</p>
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
                board Utitlities
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
  <p className='font-medium text-gray-600 text-left'>Wallet Income & Expences Best for Online Business is in compliance with </p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Wallet Income & Expences Best for Online Business</h1>
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <img src={img2} alt="" /> <br />
          <h1 class="text-2xl font-bold text-black">💼 Wallet & Online Business Including</h1> <br />
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-medium'>Affiliate Tracker for Online Business</h1>
                <p><b>Track your income, expenses, and affiliate programs — all inside Trello.</b></p>
                <p>This Power-Up is designed for online businesses of all kinds, including:</p>
                <ul className='list-disc ml-10'>
                    {
                    onlineBusiness.map((para)=>{
                        return <li key={para}>{para}</li>
                    })
                }
                </ul>
            </div> <br />
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-medium'>✨ Features</h1>
                <ul className='list-disc ml-5'>
                    {
                    features.map((para)=>{
                        return <li key={para}>{para}</li>
                    })
                }
                </ul>
            </div> <br />
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-medium'>🔧 How It Works</h1>
                <ul className='list-disc ml-10'>
                    {
                    howItWorks.map((para)=>{
                        return <li key={para}>{para}</li>
                    })
                }
                </ul>
            </div> <br />
            <p>July: 500:200 (first number is income, second  number is expences)</p>
            <p>To create additional cards use Trello native "copy card" functionality</p>
            <p>→ Trello badges automatically display income, expenses, and totals.</p>
            <li><button className='p-2 text-xs bg-gray-200 border rounded-xl text-gray-400'>Summary</button> card shows totals for selected month ranges like:</li>
            <p>July - December</p>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-medium'>💡 Perfect For</h1>
                <ul className='list-disc ml-10'>
                    {
                    perfectFor.map((para)=>{
                        return <li key={para}>{para}</li>
                    })
                }
                </ul>
            </div>
            <p>Start visualizing your online revenue like never before — without leaving your workflow.</p>
          </div><br />
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Pricing</h1>
            {
                    pricing.map((para)=>{
                        return <p key={para}>{para}</p>
                    })
            }
          </div> <br />
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Troubleshooting</h1>
            {
                    troubleShooting.map((para)=>{
                        return <p key={para}>{para}</p>
                    })
            }
          </div>
        </div>

      </section>
      <div className='mt-20'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default WalletIncomeAndExpences
