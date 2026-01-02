import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../../assets/Logo-footer.svg";
import { PiCopyrightLight } from "react-icons/pi";
import HelpNavbar from "./HelpNavbar";
let Documentation = () => {
    return (
        <>
        <HelpNavbar/>
        <div className="mt-20 pl-33">
           <div className="flex gap-3 text-gray-500 font-semibold ">
             <button className="border border-white bg-gray-200 rounded w-6 h-7 text-black hover:bg-gray-300 text-xl font-bold"><HiOutlineBars3BottomLeft /></button>
            <a className="hover:underline" href="">Atlassian Support</a>
            <h1>/</h1>
            <a className="hover:underline" href="">Trello</a>
            <h1 className="font">Trello Resources</h1>
           </div>
        </div>

         <div className=" py-10 max-w-4xl mx-45 font-sans text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Trello resources</h1>
        <p className="text-gray-800">Collaborate visually on any project</p>
      </header>
      <div className="mb-12">
        <input
          type="search"
          placeholder="Tell us what you're looking for"
          className="w-140 border border-gray-300 rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
      </div>
      <section>
        <h2 className="text-3xl font-semibold mb-4 mt-[-25px]">Documentation</h2>
        <article className="mb-8 ">
          <h3 className="font-semibold mb-1 text-xl">Getting started</h3>
          <p className="mb-2 text-gray-700">
            Learn the basics, expand your Trello knowledge, and get organized with Trello.
          </p>
          <ul className="space-y-1   text-blue-600">
            <li><a href="#" className="hover:underline">Get started with the Trello guide</a></li>
            <li><a href="#" className="hover:underline">Which Trello plan is best for me?</a></li>
            <li><a href="#" className="hover:underline">How to use Trello like a pro</a></li>
            <li><a href="#" className="hover:underline">What is Trello?</a></li>
          </ul>
        </article>
        <article className="mt-[-15px] ">
          <h3 className="font-semibold mb-1 text-xl">Using Trello</h3>
          <p className="mb-2 text-gray-700">
            Create, customize, and collaborate with others on a Trello board.
          </p>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Add and customize cards and lists</a></li>
            <li><a href="#" className="hover:underline">Configure board permissions</a></li>
            <li><a href="#" className="hover:underline">Create and customize a board</a></li>
            <li><a href="#" className="hover:underline">Invite people to a board or card</a></li>
            <li><a href="#" className="hover:underline">Keyboard shortcuts in Trello</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>
        <article className="mt-5 ">
          <h3 className="font-semibold mb-1 text-xl">Account settings, billing, and security</h3>
          <p className="mb-1 text-gray-700">
            Update Trello profile, security, and billing settings.
          </p>
          <ul className="space-y-1 text-blue-600">
            <li><a href="#" className="hover:underline">Delete your Trello profile</a></li>
             <li><a href="#" className="hover:underline">Billing</a></li>
              <li><a href="#" className="hover:underline">Privacy,security, and legal</a></li>
               <li><a href="#" className="hover:underline">Update your profile, account, and settings</a></li>
          </ul>
        </article>

         <article className="mt-5 ">
          <h3 className="font-semibold mb-1 text-xl">Atlassian administration</h3>
          <p className="mb-1 text-gray-700">
            Connect Trello to your Atlassian organization for advanced user management and single sign-on.
          </p>
          <ul className="space-y-1 text-blue-600">
            <li><a href="#" className="hover:underline">Managed Atlassian accounts for Trello</a></li>
             <li><a href="#" className="hover:underline">How to manage Trello in your organization</a></li>
              <li><a href="#" className="hover:underline">Configure SSO for Trello with Atlassian Guard</a></li>
               <li><a href="#" className="hover:underline">Manage Shadow IT in Trello</a></li>
          </ul>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Manage an Enterprise</h3>
          <p className="mb-2 text-gray-700">
            Manage Enterprise users, Workspaces, and security settings as a Trello Enterprise admin.
          </p>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Organization insightsOrganization insights</a></li>
            <li><a href="#" className="hover:underline">Organization visible boards</a></li>
            <li><a href="#" className="hover:underline">Claim and manage Enterprise Workspaces</a></li>
            <li><a href="#" className="hover:underline">Configure Enterprise settings and security</a></li>
            <li><a href="#" className="hover:underline">Get started as a Trello Enterprise admin</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Manage a Workspace</h3>
          <p className="mb-2 text-gray-700">
            Invite Workspace members, configure permissions, and control Workspace boards as a Workspace admin.
          </p>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Why can't I edit my Trello board?</a></li>
            <li><a href="#" className="hover:underline">Create and configure a Workspace</a></li>
            <li><a href="#" className="hover:underline">Get started as a Workspace admin</a></li>
            <li><a href="#" className="hover:underline">Manage Workspace members and boards</a></li>
            <li><a href="#" className="hover:underline">View cards from multiple boards</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Troubleshooting</h3>
          <p className="mb-2 text-gray-700">
            Identify and fix specific errors and common issues in Trello.
          </p>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Recover a deleted description or card name</a></li>
            <li><a href="#" className="hover:underline">Reinvite someone who didn't get their invitation email</a></li>
            <li><a href="#" className="hover:underline">Emailed attachments show up as winmail.dat file</a></li>
            <li><a href="#" className="hover:underline">Bidirectional warning in code blocks</a></li>
            <li><a href="#" className="hover:underline">Can't log in or access Trello</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Trello for Android</h3>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Where do I find information about Trello's Android app?</a></li>
            <li><a href="#" className="hover:underline">Trello for Android beta program</a></li>
          </ul>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Trello for iOS</h3>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">Viewing your cards’ due dates on a calendar in iOS</a></li>
            <li><a href="#" className="hover:underline">Trello for iOS Beta Program</a></li>
            <li><a href="#" className="hover:underline">Automate with URL Scheme</a></li>
            <li><a href="#" className="hover:underline">Open Trello links in the iOS App</a></li>
            <li><a href="#" className="hover:underline">Trello for iPhone</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>

         <article className="mt-5">
          <h3 className="font-semibold text-xl mb-1">Automation, Power-Ups, and integrations</h3>
          <p className="mb-2 text-gray-700">
            Optimize your Trello board with built-in automation and connections to other services.
          </p>
          <ul className="space-y-1  text-blue-600">
            <li><a href="#" className="hover:underline">View Trello dates in other calendars</a></li>
            <li><a href="#" className="hover:underline">Trigger actions with automation</a></li>
            <li><a href="#" className="hover:underline">Enable and manage a Power-Up on a board</a></li>
            <li><a href="#" className="hover:underline">Power-Ups made by Trello</a></li>
            <li><a href="#" className="hover:underline">Integrations made by Trello</a></li>
          </ul>
          <h1 className="text-gray-600 mt-2 flex">Show more <span className=" mt-1 text-black">< IoIosArrowDown /></span></h1>
        </article>
      </section>
    </div>
    <div className="w-full h-15 flex justify-between bg-gray-200 p-20 mt-30">
      <div className="">
        <img className="pl-26" src={Logo} alt="" />
      </div>
      <ul className="flex gap-5 text-gray-500  ">
        <li>Accessibility</li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Security</li>
        <li className="flex"><span className="mt-[5px]"><PiCopyrightLight /></span>2025 Atlassian</li>
      </ul>
    </div>
        </>
    )
}
export default Documentation