import React from 'react'
import images1 from "../../../../assets/images1.png"
import Focuster from "../../../../assets/Focuster.png"
import pabbly from "../../../../assets/Pabbly.png"
import taco1 from "../../../../assets/Taco1.png"
import tgicon from "../../../../assets/tgicon.png"
import rgicon from "../../../../assets/rgicon.png"
import involvemeicon from "../../../../assets/involvemeicon.png"
import flowmaster from "../../../../assets/flowmaster.png"
import viasocket from "../../../../assets/viasocket.png"
import mailbutler from "../../../../assets/mailbutter.png"
import Telegram from "../../../../assets/Telegram.png"
import sunsama1 from "../../../../assets/sunsama1.png"
import Zapier1 from "../../../../assets/Zapier1.png"
import Woorise1 from "../../../../assets/Woorise1.jpeg"
import pomello from "../../../../assets/pomello.png"
import easycsv from "../../../../assets/easycsv.png"
import tshopify from "../../../../assets/tshopify.png"
import detectify from "../../../../assets/detectify.png"
import ibm from "../../../../assets/ibm.png"
import gcsicon from "../../../../assets/gcsicon.png"
import newtonmail from "../../../../assets/newtonmail.png"
import zanaton from "../../../../assets/zanaton.png"
import pluga from "../../../../assets/pluga.png"
import avatarwhite from "../../../../assets/Avatarwhite.png"


import { Link } from 'react-router-dom'
const IntegrationAutomation = () => {
    const data = [
        {
            img: images1,
            title: "Engine",
            desc: "Engine is your AI-powered junior engineer. Assign cards to Engine directly from Trello and quickly get a pull request for review or approval."
        },
        {
            img: Focuster,
            title: "Focuster",
            desc: "Schedule Trello cards to Google Calendar automatically with time blocking and more."
        },
        {
            img: pabbly,
            title: "Pabbly Connect",
            desc: "One platform to automate all your integrations and tasks."
        },
        {
            img: taco1,
            title: "Taco App",
            desc: "Drag and drop tasks between multiple apps."
        },
        {
            img: tgicon,
            title: "Telegram Bot by Mig",
            desc: "Connect your Trello board to your Telegram chat and stay up-to-date with card and list changes."
        },
        {
            img: rgicon,
            title: "Revvable Opportunities",
            desc: "Export opportunities and customer contact information from Revvable's Deal Accelerator platform directly to Trello boards and lists."
        },
        {
            img: involvemeicon,
            title: "involve.me",
            desc: "A no-code builder for quizzes, calculators, forms, and surveys. Automatically create Trello cards for every submission."
        },
        {
            img: flowmaster,
            title: "FlowMaster",
            desc: "Automate workflows, link related tasks, and get smart suggestions—all within a centralized platform."
        },
        {
            img: viasocket,
            title: "viaSocket",
            desc: "Connect Trello with 1500+ apps to automate boards, cards, and workflows without code."
        },
        {
            img: mailbutler,
            title: "Mailbutler",
            desc: "Create and transfer tasks from Apple Mail or Gmail to Trello with one click."
        },
        {
            img: Telegram,
            title: "Telegram",
            desc: "Integrate Telegram directly into your Trello workflow."
        },
        {
            img: sunsama1,
            title: "Sunsama",
            desc: "Combine Trello, calendars, and emails to plan a calm and focused workday."
        },
        {
            img: Zapier1,
            title: "Zapier",
            desc: "Connect Trello to hundreds of apps using automation workflows."
        },
        {
            img: Woorise1,
            title: "Woorise",
            desc: "A form builder for lead generation. Create forms, surveys, quizzes, and landing pages and send submissions to Trello."
        },
        {
            img: pomello,
            title: "Pomello",
            desc: "Turn your Trello cards into Pomodoro tasks to stay productive."
        },
        {
            img: easycsv,
            title: "EasyCSV",
            desc: "Import CSV, XLSX, or Google Sheets data into Trello cards with support for custom fields."
        },
        {
            img: tshopify,
            title: "TrellShop - Shopify Integration",
            desc: "Sync Shopify data with Trello to automate e-commerce workflows."
        },
        {
            img: detectify,
            title: "Detectify",
            desc: "Add Detectify security notifications directly into your Trello boards."
        },
        {
            img: ibm,
            title: "IBM Connect",
            desc: "Automate workflows and integrate data, apps, and APIs across hybrid cloud environments."
        },
        {
            img: gcsicon,
            title: "Google Calendar Integration by Mig",
            desc: "Sync Trello boards with Google Calendar to stay on track with deadlines."
        },
        {
            img: newtonmail,
            title: "Newton Mail",
            desc: "Save email tasks to Trello instantly on both desktop and mobile."
        },
        {
            img: zanaton,
            title: "Zenaton",
            desc: "Connect Trello with hundreds of applications using Zenaton automation."
        },
        {
            img: pluga,
            title: "Pluga",
            desc: "An automation platform that connects apps and simplifies workflow tasks."
        },
        {
            img: avatarwhite,
            title: "Assista AI",
            desc: "Turn Trello boards into self-updating hubs using automation and natural language commands."
        }
    ];

    return (
        <>
            <section className='p-4 w-350  '>
                <h1 className='text-2xl font-semibold'>Automation (52)</h1>

                <div className='flex flex-wrap gap-4 '>
                    {
                        data.map(({ img, title, desc }) => {
                            return (
                                <>
                                    <div className='p-4 bg-gray-50  shadow-2xl relative h-100 w-60'>
                                        <div className='flex'><img src={img} alt="" className='h-10 w-10' />
                                            <h1 className='ml-3 text-xl font-semibold '>{title}</h1></div>
                                        <p className='mt-3 text-gray-500 font-sans'>{desc}</p>
                                        <button className='border-1 absolute bottom-0 text-center ml-3 hover:bg-gray-300  mb-2 p-3 rounded'><Link to='https://google.com'>Configure</Link></button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <button className='bg-blue-500 p-3 rounded ml-85 mt-7 mb-7'>View all</button>
            </section>
        </>
    )
}

export default IntegrationAutomation
