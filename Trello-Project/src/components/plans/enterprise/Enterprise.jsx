import React from 'react'
import Hero11 from '../../../assets/Hero1.png';
import Hero from '../../../assets/Hero.webp'
import IntegrationsImg from "../../../assets/integrations.webp";
import SecurityImg from "../../../assets/security.webp";
import ContentImg from "../../../assets/content.png";
import Coinbase from "../../../assets/coinbase.png";
import JohnDeere from "../../../assets/john-deere.svg";
import GrandHyatt from "../../../assets/grand-hyatt.svg";
import Google from "../../../assets/google.svg";
import Visa from "../../../assets/visa.svg";
import Zoom from "../../../assets/zoom.webp";
import PricingCalculator from './Pricingcalculator';
import FocusIcon from "../../../assets/focus.svg";
import PuzzleIcon from "../../../assets/puzle.svg";
import RobotIcon from "../../../assets/robot.svg";
import UsersIcon from "../../../assets/users.svg";
import ControlsIcon from "../../../assets/control.svg";
import KeyIcon from "../../../assets/key.svg";
import Pricingcalculator from './Pricingcalculator';
import NavBar from '../../NavBar';
import UniversalFooter from '../../UniversalFooter';
import {Link} from "react-router-dom"
const Enterprise = () => {
  return (
    <>
      {/*Hero 1  */}
      <NavBar/>
      <div className=" bg-gradient-to-b from-pink-900 to-blue-900 px-10 py-20 flex flex-col lg:flex-row items-center justify-evenly">
        <div className="text-white lg:w-1/2 mb-10 lg:mb-0 mt-10 ml-30">
          <h1 className="text-5xl font-bold mb-6">Trello Enterprise</h1>
          <p className="text-lg">
            Add enterprise-grade security and control. This
          </p>
          <p className='text-lg'>
            plan includes Atlassian Guard Standard and
          </p>
          <p className="text-lg mb-2">
            24/7 Enterprise Admin support.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200">
            Contact Sales
          </button>
        </div>


        <div className=" mr-30">
          <img src={Hero11} alt="Trello Enterprise Screenshot" className="w-200  h-80" />
        </div>
      </div>

      {/* Heor 2 */}
      <div className=' bg-gradient-to-b from-blue-950 to-blue-800    flex justify-center items-center flex-col font-bold'>
        <div className='flex justify-center items-center flex-col pt-10 '>
          <h1 className='text-[36px] text-[#ffffff]'>Trello is where productivity meets enterprise at </h1>
          <h1 className='text-[36px] text-[#ffffff]'>  scale</h1>
          <p className='text-[20px] text-[#ffffff]' >From Product to Marketing to Support to… you get the idea. All organized in</p>
          <p className='text-[20px] text-[#ffffff]'>one central Admin Dashboard.</p>
        </div>
        <div className="h-120  w-150 bg-blue-900  bg-cover mt-15" style={{ backgroundImage: `url(${Hero})` }}></div>

      </div>

      {/* Feature-Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[24px] font-bold text-[#000000] mb-6">Enhanced Productivity</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <img src={FocusIcon} alt="Focus" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold text-[16px]">Focus on what matters</h3>
                <p className="text-[#091E42]  text-[24px]">
                  Summarize scattered to-dos across your notes, emails, Slack, and
                  Teams using the AI-powered Quick Capture feature to save them as
                  Trello cards in your Inbox. Organize your saved cards and block
                  out focus time to avoid distractions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={PuzzleIcon} alt="Puzzle" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold  text-[16px] ">
                  Integrate with the tools you care about
                </h3>
                <p className="text-[#091E42]  text-[24px]">
                  Access hundreds of Power-Ups to integrate Trello Enterprise with
                  Slack, Confluence, Google Drive, and more!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={RobotIcon} alt="Automation" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold  text-[16px]">
                  Goodbye manual tasks, hello automation
                </h3>
                <p className="text-[#091E42]  text-[24px]">
                  Enjoy Trello’s automation to update cards, assign members, and
                  help keep the team on-track with due dates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-bold mb-6">Admins</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <img src={UsersIcon} alt="Users" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold  text-[16px]">Manage users across the org</h3>
                <p className="text-[#091E42]  text-[24px]">
                  Leverage one central Admin Dashboard to manage permissions,
                  security, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={ControlsIcon} alt="Controls" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold  text-[16px]">
                  Membership & organization controls
                </h3>
                <p className="text-[#091E42]  text-[24px]">
                  Manage access at the individual, board, or company-wide level.
                  Keep sensitive work private while collaborating easily.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={KeyIcon} alt="Key" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="font-semibold  text-[16px]">
                  Single sign-on made easy with Atlassian Access
                </h3>
                <p className="text-[#091E42] text-[24px]">
                  Set up SAML SSO for your teams with{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Atlassian Access
                  </a>
                  , available across all Atlassian products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Componiers section */}
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-900 py-16 flex justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Powering productivity for millions of users
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
            worldwide,  at companies like
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
            <img src={Coinbase} alt="Coinbase" className="h-8" />
            <img src={JohnDeere} alt="John Deere" className="h-25" />
            <img src={GrandHyatt} alt="Grand Hyatt" className="h-6" />
            <img src={Google} alt="Google" className="h-8" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src={Visa} alt="Visa" className="h-8" />
            <img src={Zoom} alt="Zoom" className="h-8" />
          </div>
        </div>
      </div>


      {/*Enterprise Section   */}
      <div className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1d2256] text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img src={IntegrationsImg} alt="Integrations" className="w-48 mb-6" />
              <h2 className="text-xl font-semibold mb-4">
                Top-tier integrations. Top-rated by users.
              </h2>
              <p className="text-gray-200 mb-6">
                Power your work with 200+ Power-Ups. Connect Trello to your chat
                tools, marketing tools, support tools, and anything else your
                business runs on.
              </p>
              <button className="bg-white text-[#1d2256] font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
                Explore our Power-Ups
              </button>
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img src={SecurityImg} alt="Security" className="w-60 mb-6" />
              <h2 className="text-xl font-semibold mb-4">
                Enterprise-Grade Security You Can Trust
              </h2>
              <p className="text-gray-200 mb-6">
                Manage users and control permissions with just a few clicks. With
                99.99% uptime and industry-leading compliance certifications, we’ll
                never leave you hanging.
              </p>
              <Link to="/trust" className="bg-white text-purple-700 font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
                Learn more
              </Link>
            </div>
          </div>

          <div>

            <div className=" text-white  flex flex-row  max-w-2xl mx-auto">
              <div> <img src={ContentImg} alt="Curated Content" className="max-w-3xl h-75 " /></div>
              <div className=" max-w-3xl h-75 pl-20" >
                <h2 className="text-3xl font-medium text-[#091E42] ">
                  Curated content for
                </h2>
                <h2 className="text-3xl font-medium text-[#091E42]   mb-2">
                  businesses and teams
                </h2>
                <p className=" mb-6 text-[#091E42] font-medium text-20">
                  Read to discover the latest in productivity hacks, leadership
                  insight, and tips for <br />successful remote work.
                </p>
                <button className="bg-blue-900 text-white-900 font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
                  Explore the blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Calculator */}
      <Pricingcalculator />

      {/*Enterprise Contact Form  */}
      <h3 className="text-[24px] text-[#091E42] text-center font-bold mb-10">Need help ? Contact us.</h3>
      <div className="  min-h-screen bg-white flex items-start pl-50  mb-10  ">
        <div className="  max-w-8xl  grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="   md:col-span-1 flex justify-center max-w-6xl ">
            <div className="w-[200%] bg-blue-50  rounded-2xl p-6 shadow-sm">
              <h3 className="text-[24px] font-bold text-slate-800 mb-3">Contact sales</h3>
              <p className="font-semibold text-[#091E42] text-[16px] mb-4">
                Ready to learn more? Get in touch with one of our sales representatives to discuss Trello Enterprise options that might be right for your business needs.
              </p>

              <form action="#" method="post" className="space-y-3">
                <label className="block text-[16px] font-medium text-slate-700">
                  * First name
                  <input
                    name="firstName"
                    required
                    className="mt-1 block w-full bg-white  rounded-md border border-slate-200 px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <label className="block text-[16px] font-medium text-slate-700">
                  Last name
                  <input
                    name="lastName"
                    className="mt-1 block w-full bg-white  rounded-md border border-slate-200 px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <label className="block text-[16px] font-medium text-slate-700">
                  * Work email
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full bg-white rounded-md border border-slate-200 px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="name@company.com"
                  />
                </label>

                <label className="block text-[16px] font-medium text-slate-700">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    pattern="[0-9+()\-\s]*"
                    className="mt-1 block w-full bg-white  rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Optional"
                  />
                </label>

                <label className="block text-[16px] font-medium text-slate-700">
                  * Job title
                  <input
                    name="jobTitle"
                    required
                    className="mt-1 block w-full bg-white  rounded-md border border-slate-200 px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <label className="block text-[16px] font-medium text-slate-700">
                  * Company size
                  <select
                    name="companySize"
                    required
                    className="mt-1 block bg-white  w-full rounded-md border border-slate-200 px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="">Select...</option>
                    <option value="1-10">1 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-1000">201 - 1000</option>
                    <option value=">1000">1000+</option>
                  </select>
                </label>

                <label className="block text-[16px]  font-medium text-slate-700">
                  Comments
                  <textarea
                    name="comments"
                    rows={4}
                    className="mt-1 block w-full bg-white   rounded-md border border-slate-200 px-3 py-2 text-[16px]  focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <p className="text-[12px] text-slate-500">
                  By signing up on this form, I acknowledge receipt of Atlassian's Privacy Policy.
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact sales
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="   md:col-span-2 flex flex-col items-start justify-start gap-6 pt-2">
            <div className="w-full max-w-sm bg-yellow-50 border border-yellow-300 rounded-2xl p-5 shadow-sm">
              <h4 className="text-[16px] font-semibold text-[#091E42] mb-2">
                Trello Enterprise is for businesses with 50 seats or more, so if you are a smaller team you may be a fit for Trello Premium.
              </h4>
              <button className="mt-3 inline-block rounded-md border border-yellow-400 px-3 py-1text-[11.2px] font-medium">
                Check out Premium
              </button>
            </div>

            <div className="w-full max-w-sm bg-purple-50 border border-purple-300 rounded-2xl p-5 shadow-sm">
              <h4 className="text-[24px] font-semibold text-[#091E42]  mb-3">Customer support</h4>
              <p className="text-[16px] font-semibold text-[#091E42]  mb-3">
                Already a customer? For specific account or billing questions, security concerns, or answers not available on our help site, we’re happy to help.
              </p>
              <button className="inline-block rounded-md border border-purple-400 px-3 py-1 text-[16px] font-medium">
                Contact customer support
              </button>
            </div>
          </div>
        </div>
      </div>
      <UniversalFooter/>
    </>
  )
}

export default Enterprise