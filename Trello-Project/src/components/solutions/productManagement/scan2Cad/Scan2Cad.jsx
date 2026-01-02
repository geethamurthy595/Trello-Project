import React from 'react'
import NavBar from '../../../NavBar'
import Swaglogo from "../../../../assets/Scan2Cad_logo.webp";
import Swag2 from "../../../../assets/Swag2.webp";
import { ImQuotesLeft } from "react-icons/im";
import Swag3 from "../../../../assets/Swag3.webp";
import Coin from "../../../../assets/coinbase.svg";
import John from "../../../../assets/johnDeere.svg";
import Grand from "../../../../assets/Grand1.svg";
import Visa from "../../../../assets/visa.svg";
import Zoom from "../../../../assets/Zoom.webp";
import ScrollProgressBar from './ScrollProgressBar'
import UniversalFooter from '../../../UniversalFooter'
import { Link } from 'react-router-dom';

const Scan2Cad = () => {
  return (
    <>
      <ScrollProgressBar />
      <NavBar />
      <section>
        <section
          className=" h-60 w-full bg-gradient-to-r from-[#403294] to-[#4B99FE]"
        >
          <h1 className="text-white font-bold text-4xl text-center p-20">
            Scan2Cad + Trello
          </h1>
          <p className="text-white  text-xl font-semibold text-center -mt-15">
            Converting Customer Files And Company Workflows
          </p>
        </section>{" "}
        <br /> <br />
          <div className='flex justify-center'>
            <img className="h-15 w-70" src={Swaglogo} alt="" />
          </div>
        <section className='flex justify-center'>
          <section className="w-180 ">
            <br />
            <br />
            <h3 className="font-bold text-[22px]">
              How Scan2CAD uses Trello to grow with simplicity, flexibility, and visibility
            </h3>
            <p className="text-xl text-gray-800 leading-8">
              For most companies, growth leads to more staff, more processes, more complexity, and more headaches. But Scan2CAD, the world's leading conversion software for architectural and engineering designs, is defying this trend with the help of Trello.
              <br /><br />
              Scan2CAD is committed to scaling while simplifying. While other orgs might have impulsively added staff and square footage as their customer base grew to 90,000+, Scan2CAD’s team remains small (fewer than 25 people, including contractors!) and distributed. While other firms might rush to introduce new products and markets, Scan2CAD is keeping laser focused on one product for two core audiences.
              <br /><br />
              And while others may pile on more systems and tools, Scan2CAD is doubling down on Trello, using it in creative ways to meet all of their project administration, sales, and product management needs.
            </p>{" "}
            <br />
            <h3 className="text-2xl font-semibold">
              Bridging The Gap Between Physical And Digital
            </h3>{" "}
            <br />
            <p className="text-xl text-gray-700 leading-8">
              Scan2CAD helps architects and engineers bring their projects and products to life. Their software makes it easy to convert scanned blueprints and images in traditional file types to CAD- (computer-assisted drawing) and CAM-friendly (computer-assisted manufacturing) files for editing and documentation purposes. This smart technology and its underlying mission were front of mind for CEO Luke Kennedy when he acquired the company in 2010.
              <br /><br />
              Luke was new to the role of owner, but hardly new to the company. His father had founded Scan2CAD over 20 years earlier. The firm was acquired after he retired, but when that acquirer wanted to take the firm in a different direction years later, Luke jumped at the chance to acquire it back and continue his father’s legacy.
              <br /><br />
              As soon as Luke assumed the role of CEO, he saw opportunities to simplify, increase productivity, and improve visibility. “We know our customers use us for one thing – converting files – so I wanted to make it as simple as possible for them to do that one thing,” he explains. “Then I started thinking, ‘How can we simplify our business too?’”
              <br /><br />
              In the spirit of streamlining, Luke set out to find a single flexible system that would keep his team organized in the present and grow with them in the future. So he opened his trusty personal Trello board and introduced its magic to his Scan2CAD colleagues.
            </p>{" "}
            <br /> <br /><br />
            <h3 className="text-2xl font-semibold mr-55">
              One Tool, Endless Uses
            </h3>{" "}
            <br />
            <div className='flex items-center gap-4'>
              <ImQuotesLeft className=" text-cyan-500 text-6xl" />
              <h2 className="text-xl font-semibold text-gray-700 ">
                If it weren’t for Trello, we’d probably rely on 10 separate apps...We’ve saved hours of time and pain, plus a lot of money.
              </h2>
            </div>
            <br /><br />
            <p className="text-xl text-gray-700 leading-8">
              As Luke coordinated with each team, he shared ideas for ways they could use Trello to manage everything from simple to-do lists to complex workflows. Over time, employees took those ideas and ran with them. Eventually, the entire company adopted Trello for all their critical processes (including sales and hiring, content ideation and creation, software development, and bug tracking) and consolidated several tools into one. “If it weren’t for Trello, we’d probably rely on 10 separate apps,” Luke says. “By only using one, we’ve saved hours of time and pain, plus a lot of money.”
              <br /><br />
              For example, Scan2CAD’s content team uses Trello to brainstorm ideas for help articles and customer resources. They create a new card for each topic or deliverable, then organize the cards by month and assign authors. The author moves their cards from Draft to Editing to Launch as they work through the process. Editors also rely on Trello’s Card Repeater Power-Up and Checklist feature to make sure no editing tasks slip through the cracks.
              <br /><br />
              Scan2CAD’s sales team uses Trello in a similar way. Whenever action is required for a new lead or existing customer, the sales rep creates a card on the “Deals” Trello board to ensure follow-through.
              <br /><br />
              Scan2CAD’s developers have adapted Trello to their needs too, rather than adding another tool into the mix. Although they use scripts for automated testing, deployment still requires a lot of manual input. To reduce mental load and ensure every task is completed, the development team creates Trello cards for every release, then uses the Checklist feature to auto-populate checklists for deployment and launch.
              <br /><br />
              Developers also rely on Trello to track and resolve bugs. They create cards for each bug, assign specific users to work on it (which also reduces noise for the rest of the team), and communicate about the issue through card comments. Luke reports that this workflow has been so helpful for the team, their success now depends on it. “We wouldn’t make a release without it,” he proclaims. “And because we only assign people to cards they need to know about, they can stay focused and know exactly what they’re responsible for. There’s a balance between transparency and [not] overwhelming people.”


            </p>
            <br />


            <h3 className="text-2xl font-semibold">
              A Simple, Flexible System That Brings Data And Dreams Alive
            </h3>
            <br />
            <div className='flex items-center gap-5'>
              <h3>
                <ImQuotesLeft className="text-6xl text-cyan-500" />
              </h3>
              <h2 className="text-2xl font-semibold text-gray-700 leading-8">
                Trello is our one ‘source of truth.’
              </h2>
            </div>
            <br />
            <p className="text-xl text-gray-700 leading-8">
              From very linear processes (such as content creation) to those that are more iterative (like bug tracking), Scan2CAD has found Trello is flexible enough to fit all of their critical workflows.
              <br /><br />
              The company has also improved visibility and collaboration across their worldwide, fully remote team with the help of Trello. Luke explains, “It’s our ‘one source of truth.’ Anyone on the team, including new employees who are onboarding, can look in Trello and have access to everything they need.”
              <br /><br />
              Luke credits Scan2CAD’s wide adoption of and success with Trello to its intuitive design and flexibility. No matter how tech savvy someone is, they can learn to use it quickly without training and adapt boards to their specific needs. He says, “Trello is as flexible as a spreadsheet, but more powerful. It can be used as a bulleted list in its simplest form, or as a complete app that’s integrated with other systems to drive entire parts of your business.”
              <br /><br />
              As Scan2CAD has expanded Trello from a single personal board to a company-wide system, Luke and his team have come to rely on it to bring their ideas to life. “Trello has become a file type for us. It’s not really comparable to other apps,” Luke says. “We use Trello because our data becomes alive. A bullet point list turns into real tasks that are assigned to real people with due dates and connections to our other apps. The power in that is fantastic.”
            </p>
            <br />
            <br />
            <div className="h-100 w-250  flex ">
              <p className="text-xl font-medium text-gray-700">
                Join over 2,000,000 teams worldwide who are using Trello to get more
                done.
              </p>{" "}
              <br />
              <img className="absolute left-120 mt-20" src={Coin} alt="" />
              <img className="absolute left-167 mt-20" src={John} alt="" />
              <img className="absolute left-218 mt-20" src={Grand} alt="" />
              <img className="absolute mt-50 left-150" src={Visa} alt="" />
              <img className="h-20 absolute  left-200 mt-50" src={Zoom} alt="" />
            </div>{" "}
            <br />
          </section>
        </section>
        <section className='flex  justify-center'>
          <div class="bg-blue-950 h-35 w-280 text-white p-6 rounded-lg shadow-md leading-8 ">
            <h3 class="text-sm uppercase tracking-wider font-semibold ml-10">
              Now Available
            </h3>
            <p class="text-[20px] mt-2 ml-10 font-semibold ">
              A 14-Day Free Trial of Premium! <br />
            </p>
            <p className="ml-10">
              Get unlimited boards, Trello views, and limitless automation, plus a
              lot more.
            </p>
            <Link to="/free-trial" class=" -mt-15 float-end bg-white  cursor-pointer hover:bg-blue-200 text-blue-950 ml-220  font-semibold py-2 px-4 rounded-md">
              Try it today
            </Link>
          </div>
        </section>
        <Link to="/free-trial" className="m-12 inline-flex items-center justify-center cursor-pointer h-13 ml-250 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-800">
          Trello customer case studies
        </Link>
      </section>
      <UniversalFooter />
    </>
  )
}

export default Scan2Cad
