import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import CompanyLogo from "../../../../assets/CompanyLogo";
import anyfields from "../../../../assets/analytics_and_reporting/anyfields.svg";
import anyfields1 from "../../../../assets/any-fields-1.gif";
import anyfields2 from "../../../../assets/any-fields-2.gif";
import anyfields3 from "../../../../assets/any-fields-3.gif";
import { useState, version } from "react";
function AnyFields() {
    const [activeTab, setActiveTab] = useState("description");
    const updates = [
        {
            id: 1,
            icon: "🔢",
            title: "Formulas & Calculations",
            version: "2.6",
            versiondate: "Mar 2, 2026",
             featureDate: "March 2, 2026",
            desc: [
                "This release introduces formulas and calculation capabilities, making your fields smarter and more dynamic.",
                "You can now set Date/Time default values relative to the current date and time (for example, Today + 7 days), helping you automate deadlines right from the moment a card is created.",
                "Formulas are also available in List automation for both Date/Time and Number fields, allowing values to update automatically based on your workflow. Whether you're adjusting due dates or incrementing counters, calculations now happen seamlessly in the background."
            ]
        },
        {
            id: 2,
            icon: "👁",
            title: "Enhanced Visibility",
            version: "2.5",
            versiondate: "Jan 21, 2026",
            featureDate: "January 21, 2026",
            desc: [
             "This update brings more flexibility and improved visibility to Any Fields. You can now show or hide Favorites in settings, maximize the Report table for easier viewing, and use new advanced filters to search and refine cards more efficiently. Reports now also reflect field colors, making styled fields easier to spot."
            ]
        },
         {
    id: 3,
    icon: "✨",
    title: "Fields Automation by List",
    version: "2.4",
    versiondate: "Nov 3, 2025",
    featureDate: "October 28, 2025",
    desc: [
      "Fields Automation allows you to automatically update custom field values when a card is moved to a specific Trello list. This feature helps streamline workflows and ensures that your cards always reflect the correct status or context without manual updates."
    ]
  },
  {
    id: 4,
    icon: "🎨",
    title: "Colorize Your Fields",
    version: "2.3",
    versiondate: "Nov 3, 2025",
    featureDate: "October 3, 2025",
    desc: [
      "Bring your Trello boards to life with customizable field and option colors. By default, all fields and options are transparent. Field colors are visible on the card front (badge), back (when card is open), field inspect view and report filters."
    ]
},
{
    id: 5,
    icon: "🔄",
    title: "Auto-Refresh Card Fields",
    version: "2.2",
    versiondate: "Nov 3, 2025",
    featureDate: "May 21, 2025",
    desc: [
      "Field values on a card now update automatically when another team member makes changes, along with a notification showing who updated them. Reloading field values on a card is smoother when they are saved in fullscreen mode."
    ]
  },
  {
    id: 6,
    icon: "📋",
    title: "Copy Field Values",
    version: "2.1",
    versiondate : "Nov 3, 2025",
    featureDate: "April 15, 2025",
    desc: [
     "Field values are now copied automatically when you create a new card using Copy card. They’re also copied when creating a new card from a template."
    ]
  },
  {
    id: 7,
    icon: "🖌️",
    title: "Redesigned User Interface",
    version: "2.0",
    versiondate: "Nov 3, 2025",
    featureDate: "December 10, 2024",
    desc: [
     "We’ve completely redesigned the user interface ✨. Additionally, you can now mark cards as favorites ⭐, lock cards 🔒, and take advantage of the integration with Log Work Power-Up."
    ]
  },
  {
    id: 8,
    icon: "📊",
    title: "Enhanced Export",
    version: "1.3",
    versiondate: "Nov 3, 2025",
    featureDate: "March 26, 2024",
    desc: [
     "You can now export card reports 📊 in CSV or JSON format, with the option to select which fields to include in your export. We’ve also added support for a custom payment plan 💳. In addition, we’ve fixed issues affecting the dark theme in some browsers 🌙 and corrected the display of AM/PM time 🕒."
    ]
  },
  {
    id: 9,
    icon: "🌙",
    title: "Dark Mode",
    version: "1.2",
    versiondate: "Nov 3, 2025",
    featureDate: "February 29, 2024",
    desc: [
     "The app now fully supports the dark theme in browsers 🌙. Additionally, the time picker displays a 24-hour clock when a non-AM/PM DATETIME/TIME format is configured in settings 🕒."
    ]
  },
  {
    id: 10,
    icon: "📊",
    title: "Reports & Field Improvements",
    version: "1.1",
    versiondate: "Nov 3, 2025",
    featureDate: "February 13, 2024",
    desc: [
      "Card reports now show additional columns from the Match fields filter. New AM/PM time and datetime formats are available, and invalid default field values no longer cause Failed to load data errors."
    ]
  },
  {
    id: 11,
    icon:"🚀",
    title:"Initial Release",
    version:"version 1.0",
     versiondate: "Nov 3, 2025",
    featureDate: "December 4, 2023",
     desc:[
        "Any Fields is now officially released!"
     ]
  }
    ];
    return (
        <>
            <div className="min-h-screen flex flex-col pt-16">

                {/* NAVBAR */}
                <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
                    <NavBar />
                </div>

                <div className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 flex-1">

                    {/* BREADCRUMB */}
                    <p className="text-sm mb-6">
                        <Link to="/power-ups" className="hover:underline">power-ups</Link> /
                        <span className="hover:underline"> Any Fields</span>
                    </p>

                    {/* MAIN LAYOUT */}
                    <div className="flex flex-col md:flex-row gap-10">

                        {/* LEFT SIDE */}
                        <div className="w-full md:w-65 flex flex-col space-y-6 md:sticky md:top-24 h-fit">

                            <img
                                src={anyfields}
                                alt="Any Fields Power-Up"
                                className="w-40 md:w-56 lg:w-60 object-contain"
                            />

                            <div>
                                <p className="text-gray-700 font-medium flex items-center gap-1">
                                    <img src={rocket} className="w-4 h-4" />
                                    Made by Schnapps GmbH
                                </p>

                                <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                                    <img src={reporting} className="w-4 h-4" />
                                    1,000 +
                                </div>
                            </div>

                            <hr className="border-gray-300" />

                            <div>
                                <h3 className="font-semibold mb-2">Categories</h3>

                                <div className="flex flex-wrap gap-2">

                                    <Link
                                        to="/power-ups/analytics-reporting"
                                        className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                                    >
                                        Analytics & reporting
                                    </Link>

                                    <Link
                                        to="/power-ups/category/it-project-management"
                                        className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                                    >
                                        IT & project management
                                    </Link>

                                </div>
                            </div>

                            <hr className="border-gray-300" />

                            <div className="text-sm text-gray-600 space-y-2">
                                <p className="flex items-center gap-1 hover:underline hover:text-blue-500 cursor-pointer">
                                    <img src={email} className="w-4 h-4" />
                                    Contact support
                                </p>

                                <p className="flex items-center gap-1 hover:underline hover:text-blue-500 cursor-pointer">
                                    <img src={info} className="w-4 h-4" />
                                    Privacy policy
                                </p>
                            </div>

                            <hr className="border-gray-300" />

                            <p className="text-sm text-gray-600">
                                <img
                                    src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                                    className="inline w-4 h-4 mr-1"
                                />
                                Reports by AI Analyst may store personal data and is not in compliance with{" "}
                                <span className="text-blue-600 underline cursor-pointer">
                                    Trello's data and privacy practices
                                </span>
                            </p>

                            <hr className="border-gray-300" />

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex-1 md:overflow-y-auto md:h-[calc(170vh-100px)] pr-2 md:pr-4 hide-scrollbar">

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <h1 className="text-xl md:text-2xl font-bold">
                                    Any Fields
                                </h1>

                                <Link>
                                    <button className="bg-[#1868db] text-white px-2 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                                        Add Power-Up
                                    </button>
                                </Link>
                            </div>
                            <div className="flex gap-6 border-b border-gray-300 mt-6 ">
                                <button
                                    onClick={() => setActiveTab("description")}
                                    className={`${activeTab === "description"
                                        ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                                        : "text-gray-500"
                                        }`}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab("updates")}
                                    className={`${activeTab === "updates"
                                        ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                                        : "text-gray-500"
                                        }`}
                                >
                                    Updates
                                </button>
                            </div>

                            {/* Content */}
                            <div className="mt-4">
                                {/* Description Tab Content */}
                                {activeTab === "description" && (
                                    <div>
                                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                            Quickly build various custom fields and seamlessly apply them across multiple boards. Board fields are displayed on the back and optionally on the front of cards.
                                            <br />
                                            <br />
                                            Gain the flexibility to seamlessly tailor your Trello environment to fit your organization's unique requirements.
                                            Streamline your workflows, optimize your processes, and unlock more productivity advantages by creating custom fields that perfectly match your day-to-day operations.
                                            <br />
                                            <br />
                                            Any Fields <b>DOES NOT STORE YOUR PERSONAL DATA</b> and is securely hosted in Switzerland.
                                        </p>
                                        <hr className="border-gray-300 my-4" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-2">Take complete control of your Trello data</h2>
                                            <p className="pb-5 text-gray-700 leading-relaxed text-sm">
                                                Easily create and customize fields with a diverse range of types and values, then seamlessly share those same fields across multiple boards.
                                                Take advantage of nested fields to build even more sophisticated data structures.
                                            </p>
                                            <a href="#" className="text-blue-600 underline leading-relaxed text-sm">
                                                Read more..
                                            </a>
                                        </div>
                                        <img src={anyfields1} alt="Any Fields Demo" className="w-full mt-6 rounded-md " />
                                        <hr className="border-gray-300 my-4" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-2">Unlock advanced reporting with flexible filter options</h2>
                                            <p className="pb-5 text-gray-700 leading-relaxed text-sm">
                                                The reporting capabilities allow you to search and surface Trello cards based on your custom fields and various card properties.
                                                Whether you need to analyze data across a single board or multiple boards, these robust filtering tools empower you to quickly find the information you need to drive strategic decision-making.
                                            </p>
                                            <a href="#" className="text-blue-600 underline leading-relaxed text-sm">
                                                Read more..
                                            </a>
                                        </div>
                                        <img src={anyfields2} alt="Any Fields Demo" className="w-full mt-6 rounded-md " />
                                        <hr className="border-gray-300 my-4" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-2">Retain control over access with customizable user permissions</h2>
                                            <p className="pb-5 text-gray-700 leading-relaxed text-sm">
                                                Any Fields allows you to implement user-level permissions, ensuring only the right people have access to the relevant information. Maintain tight
                                                control over your Trello data and workflows, empowering your team to collaborate effectively while preserving the integrity of your critical information.
                                            </p>
                                            <a href="#" className="text-blue-600 underline leading-relaxed text-sm">
                                                Read more..
                                            </a>
                                        </div>
                                        <img src={anyfields3} alt="Any Fields Demo" className="w-full mt-6 rounded-md " />
                                        <hr className="border-gray-300 h-3 my-8" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-2">Documentation</h2>
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                There is much more to discover with Any Fields - you can save your favorite cards, lock/unlock field saving per card, apply different properties to fields,
                                                and even customize the appearance of fields on cards. Check out the documentation and don’t miss any features.
                                            </p>
                                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-950">
                                                <li className="text-blue-600 underline leading-relaxed text-sm">
                                                    <a href="#" rel="noopener noreferrer">
                                                        Any Fields Documentation
                                                    </a>
                                                </li>
                                                <li className="text-blue-600 underline leading-relaxed text-sm">
                                                    <a href="#" rel="noopener noreferrer">
                                                        FAQ
                                                    </a>
                                                </li>
                                                <li className="text-blue-600 underline leading-relaxed text-sm">
                                                    <a href="#" rel="noopener noreferrer">
                                                        Schnapps
                                                    </a>
                                                </li>
                                                <li className="text-blue-600 underline leading-relaxed text-sm">
                                                    <a href="#" rel="noopener noreferrer">
                                                        News
                                                    </a>
                                                </li>
                                                <li className="text-blue-600 underline leading-relaxed text-sm">
                                                    <a href="#" rel="noopener noreferrer">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed text-sm mt-2">
                                                Latest versions:
                                            </p>
                                            <ul className="list-disc list-inside mt-2 space-y-1 ">
                                                <li className="text-gray-700 leading-relaxed text-sm">
                                                    2.6 - 🔢 Formulas & Calculations. Set dynamic default values and smarter list automation.
                                                </li>
                                                <li className="text-gray-700 leading-relaxed text-sm">
                                                    2.5 - 👁️ Enhanced Report Visibility. Expand the report table view, use advanced filters and styled fields.
                                                </li>
                                                <li className="text-gray-700 leading-relaxed text-sm">
                                                    2.4 - ✨ <a href="#" className="text-blue-600 underline">Fields Automation by List</a>. Automatically update custom field values when a card is moved to a specific Trello list.
                                                </li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed text-sm mt-2">
                                                see full <a href="#" className="text-blue-600 underline">changelog</a>
                                            </p>
                                        </div>
                                        <hr className="border-gray-300 h-3 my-8" />
                                        <div className="pl-5">
                                            <h2 className="text-lg font-bold mb-2">Use cases</h2>
                                            <ul className="list-disc list-outside mt-2 ">
                                                <li className="text-gray-700  leading-loose text-sm ">
                                                    A prime example of a shared field can be a list of your clients. Create an ENUM field named Client and put all your client names inside. Assign this field to any board you want. Now all your members can set the client on the cards easily by drop-down.
                                                    In the Reports you can quickly find out which client was used how many times over a specific period.
                                                </li>
                                                <li className="text-gray-700 leading-loose text-sm">
                                                    What if you have multiple projects for your clients? Create a new ENUM field named Project as a child of Client and specify all the projects for each of your clients.
                                                    After selecting a client, members can only select projects from that client.
                                                </li>
                                                <li className="text-gray-700 leading-loose text-sm">
                                                    When you want to prevent accidental changes of the field value, you can set the field as read-only by disabling Editable property.
                                                    Once the value is stored, it can not be changed anymore.
                                                </li>
                                                <li className="text-gray-700 leading-loose text-sm">
                                                    Do you want to force members to set the field value? It's easy, just enable Required property.
                                                    Values won't be stored until all of the required fields are fulfilled.
                                                </li>
                                                <li className="text-gray-700 leading-loose text-sm">
                                                    A unique combination of the Default value and Editable properties is achieved by assigning a default value to a non-editable field. This makes the field read-only when opening a new card, preventing users from modifying it. For instance, in a scenario with a Client field,
                                                    users are restricted from changing the client value across all cards on the board.
                                                </li>
                                            </ul>
                                        </div>
                                        <hr className="border-gray-300 h-3 my-8" />
                                        <div>
                                            <h2 className="text-lg font-bold mb-2">Get started for free!</h2>
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                Enjoy a Free plan to explore all features with limited fields, storage and downloads. If you need more, our tiered pricing is based on your needs, offering two ready-made plans: Plus and Pro, but also a Custom plan for your real needs where you can choose how many fields, downloads, and storage you need.
                                                <br /><br />
                                                You can use the free plan forever, it never expires. However, if the limits in the free plan are too small for you, you can choose one of the paid plans on a monthly or annual subscription. With an annual subscription, you save 17% per year - you pay the amount for only 10 months. The available plans are as follows:
                                            </p>
                                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-950">
                                                <li className="text-gray-700 leading-relaxed text-sm font-bold">
                                                    Free plan - it’s free forever, never expires
                                                </li>
                                                <li className="text-gray-700 leading-relaxed text-sm ">
                                                    <b>Plus plan</b> - 4.90 € / month or 49.00 € / year
                                                </li>
                                                <li className="text-gray-700 leading-relaxed text-sm ">
                                                    <b>Pro plan</b> - 9.90 € / month or 99.00 € / year
                                                </li>
                                                <li className="text-gray-700 leading-relaxed text-sm ">
                                                    <b>Custom plan</b> - tailored to you, price adjusted for selected features
                                                </li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed text-sm mt-2">
                                                For further details, please visit Any Fields <a href="#" className="text-blue-600 underline">pricing </a>.
                                            </p>
                                        </div>
                                        <hr className="border-gray-300 h-3 my-8" />
                                        <h2 className="text-lg font-bold mb-2">Integrate with other Schnapps Power-Ups</h2>
                                        <p className="text-gray-700 leading-relaxed text-sm mt-2">
                                            We have developed another great Trello Power-Up <a href="#" className="text-blue-600 underline font-bold">Log Work </a> which is used to track the time a user has spent on cards.
                                            It can be easily integrated with Any Fields by simply installing it on the same Trello board where Any Fields already exists.
                                        </p>
                                        <br />
                                       
                                        <a href="#" className="text-blue-600 underline leading-relaxed text-sm">
                                           Learn more..
                                        </a>
                                        <hr className="border-gray-300 h-3  my-8" />
                                        <p className="text-gray-700 leading-relaxed text-sm mt-2">
                                            We’d love to hear from you! Share your ideas or questions with us anytime at{" "}
                                            <a href="mailto:support@schnapps.tech" className="text-blue-600 underline">
                                                 support@schnapps.tech
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {activeTab === "updates" && (
                                    <div className="space-y-6"> 
                                        {updates.map((item) => (
                                            <div key={item.id} className="bg-gray-100 rounded-lg p-6 shadow-sm">

                                                <div className="flex items-center gap-5 mb-2">
                                                    <span className="text-xl ">{item.icon}</span>

                                                    <h2 className="text-xl text-gray-800 font-bold">
                                                        {item.title} - version {item.version}
                                                        
                                                    </h2>
                                                     <span className="ml-auto text-sm text-gray-500">
                                                        {item.versiondate}
                                                    </span>
                                                  
                                                </div>
                                                 <p className="font-semibold text-gray-900 leading-relaxed text-sm mt-3 mb-2">{item.featureDate}</p>
                                                {item.desc.map((text, index) => (
                                                    <p key={index} className="text-gray-700 text-sm mb-2">
                                                        {text}
                                                    </p>
                                                ))}

                                                <p className=" text-gray-700 text-sm mt-4 cursor-pointer ">
                                                    See full <a href="#" className="text-blue-600 underline">
                                                        changelog
                                                    </a>
                                                </p>

                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer className=' w-full text-[#BFC1C4] '>
                    <div className='flex flex-wrap gap-4 items-center justify-center pt-10 text-sm text-center px-4'>
                        <p>Templates</p>
                        <p>Pricing</p>
                        <p>AppsJobs</p>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>About</p>
                        <p>Help</p>
                        <p>Legal</p>
                        <p>Privacy</p>
                        <p>Integrations</p>
                        <p>Contact us</p>
                        <p>Terms</p>
                    </div>
                    <div className=' pb-10 flex flex-col sm:flex-row items-center gap-3 justify-center'>
                        <p><CompanyLogo /></p>
                        <p>© Copyright 2025. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default AnyFields;