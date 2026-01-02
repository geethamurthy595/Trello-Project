import React from 'react';

import img1 from "../../../assets/salesandsupport1.png";
import img2 from "../../../assets/salesandsupport2.png";
import img3 from "../../../assets/salesandsupport3.png";
import img4 from "../../../assets/salesandsupport4.png";
import img5 from "../../../assets/salesandsupport5.png";
import img6 from "../../../assets/salesandsupport6.png";
import img7 from "../../../assets/salesandsupport7.png";
import img8 from "../../../assets/salesandsupport8.png";
import img9 from "../../../assets/salesandsupport9.png";
import img10 from "../../../assets/salesandsupport10.png";
import img11 from "../../../assets/salesandsupport11.png";
import img12 from "../../../assets/salesandsupport12.png";
import img13 from "../../../assets/salesandsupport13.png";
import img14 from "../../../assets/salesandsupport14.png";
import img15 from "../../../assets/salesandsupport15.png";
import img16 from "../../../assets/salesandsupport16.png";
import img17 from "../../../assets/salesandsupport17.png";
import img18 from "../../../assets/salesandsupport18.png";
import img19 from "../../../assets/salesandsupport19.png";
import img20 from "../../../assets/salesandsupport20.png";
import img21 from "../../../assets/salesandsupport21.png";
import img22 from "../../../assets/salesandsupport22.png";
import img23 from "../../../assets/salesandsupport23.png";
import img24 from "../../../assets/salesandsupport24.png";

const SalesAndSupport = () => {

    const items = [
        { title: "Saber Feedback", desc: "Gather feedback and collect ideas from your visitors with our simple feedback button.", img: img1 ,link:""},
        { title: "Salesforce", desc: "Attach a Salesforce contact to a Trello card.", img: img2 },
        { title: "Zoho Cliq", desc: "Convert messages into cards, share details of a card on chat seamlessly!", img: img3 },
        { title: "noCRM.io", desc: "Get organized with your team while taking your leads from end-to-end.", img: img4 },
        { title: "Usersnap", desc: "Screenshots and bug reports attached to your Trello cards.", img: img5 },
        { title: "HelpScout", desc: "Attach a HelpScout case directly to a card.", img: img6 },
        { title: "weForms", desc: "Get organized Trello cards in your chosen board instantly when you receive a form entry.", img: img7 },
        { title: "Intercom Power-Up", desc: "Add customer context directly to your tasks in Trello.", img: img8 },
        { title: "Gearplug", desc: "GearPlug seamlessly integrates Trello with over 100 apps, including popular tools like Google, Evernote, HubSpot, Facebook, Outlook and many more.", img: img9 },
        { title: "Fillout", desc: "Create Trello cards from new form submissions. With Fillout, you can simplify your workflow and automate your Trello boards.", img: img10 },
        { title: "Jotform Sign", desc: "Send form submissions and e-sign documents to your Trello boards.", img: img11 },
        { title: "Freshdesk", desc: "Convert a ticket into a Card with just one click.", img: img12 },
        { title: "Package Tracker", desc: "Get real-time tracking updates on Trello cards.", img: img13 },
        { title: "Peekaboox", desc: "Get reservation updates directly on Trello with a brand new Card.", img: img14 },
        { title: "Manuscript Power-Up", desc: "Attach cases and view their statuses in real-time.", img: img15 },
        { title: "Userlike", desc: "Send website chats and messages to your Trello board.", img: img16 },
        { title: "Typeform", desc: "Create Trello cards from new Typeform entries.", img: img17 },
        { title: "Ybug", desc: "Receive user feedback with screenshots directly on Trello cards.", img: img18 },
        { title: "Zendesk Power-Up", desc: "Attach tickets and views to cards from Zendesk.", img: img19 },
        { title: "involve.me", desc: "involve.me is an online no-code builder for quizzes, calculators, forms, surveys, landing pages and more! Automatically create Trello cards every time a submission is recorded in your projects. Collect lead data in Trello and collaborate with your team.", img: img20 },
        { title: "SureTriggers", desc: "SureTriggers allows custom triggers & actions for Trello, like moving/creating cards based on triggers. Real-time sync keeps boards updated. Integrate to streamline workflows, save time & focus on critical tasks.", img: img21 },
        { title: "Deskpro", desc: "Link Deskpro tickets to issues to track and edit them without leaving Deskpro. Link existing Trello cards to tickets in the helpdesk. Create and update Trello cards linked to a ticket within Deskpro. Manage your cards' checklists from the app.",img:img22},
        { title: "Zoho Desk", desc: "Create Trello cards directly from Zoho Desk tickets.", img: img23 },
        { title: "SupportBee", desc: "Send specific tickets to Trello lists as cards.", img: img24 },
    ];

    return (
        <>
            <div>
                <div className='mb-6'>
                    <h2 className='text-2xl font-medium'>Sales & Support ({items.length})</h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {items.map((item, index) => (
                        <div key={index}
                            className="bg-white p-5 flex flex-col justify-between rounded-xl shadow h-auto">
                            <div className='flex gap-6'>
                                <img src={item.img} alt={item.title} className='w-10 h-10 rounded-md mb-3 object-cover'/>
                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                            </div>

                            <p className='text-gray-600 text-[15px] mb-4'>{item.desc}</p>

                            <button className='p-3 w-30 rounded-md border text-black text-sm hover:bg-[#DFE1E6] transition duration-400'>
                                Configure
                            </button>
                        </div>
                    ))}
                </div>

                <button className='p-3 border rounded bg-blue-600 text-white mt-10 mb-10 ml-85 hover:bg-blue-800 transition duration-150 w-25'>
                    View all
                </button>
            </div>
        </>
    );
}

export default SalesAndSupport;
