import React from 'react';
import lap from "../../../assets/lap.svg";
import Business from "../../../assets/Business.svg";
import Design from "../../../assets/Design.svg";
import Education from "../../../assets/Education.svg";
import Eng from "../../../assets/Eng.svg";
import Mr from "../../../assets/Mr.svg";
import Pm from "../../../assets/Pm.svg";
import Rm from "../../../assets/Rm.svg";
import New from "../../../assets/New.jpg";
import nnt from "../../../assets/nnt.png";
import Color from "../../../assets/Color.svg";
import Sky from "../../../assets/Sky.png";
import T1 from "../../../assets/T1.jpg";
import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Easy from "../../../assets/Easy.webp";
import Dark from "../../../assets/Dark.jpg";
import Hand from "../../../assets/Hand.jpg";
import White from "../../../assets/White.png";
import Teeth from "../../../assets/Teeth.png";
import Al from "../../../assets/Al.png";
import Girl from "../../../assets/Girl.svg";
import Mouse from "../../../assets/Mouse.jpg";
import Book from "../../../assets/Book.jpg";
import Scissor from "../../../assets/Scissor.jpg";
import Pose from "../../../assets/Pose.png";
import Smile from "../../../assets/Smile.png";
import Yellow from "../../../assets/Yellow.png";
import Lib from "../../../assets/Lib.jpg";
import Bg from "../../../assets/Bg.png";
import Ani from "../../../assets/Ani.png";
import Pic from "../../../assets/Pic.png";
import Brown from "../../../assets/Brown.png";
import Blue from "../../../assets/Blue.jpg";
import Moon from "../../../assets/Moon.png";
import Spect from "../../../assets/Spect.png";
import Sat from "../../../assets/Sat.jpg";
import Table from "../../../assets/Table.png";
import Violet from "../../../assets/Violet.jpg";
import Spot from "../../../assets/Spot.png";
import Library from "../../../assets/Library.jpg";
import Beard from "../../../assets/Beard.png";
import Wood from "../../../assets/Wood.png";
import Pencil from "../../../assets/Pencil.jpg";
import Tie from "../../../assets/Tie.png";
import Daddy from "../../../assets/Daddy.jpg";
import Uni from "../../../assets/Uni.png";
import Bag from "../../../assets/Bag.jpg";
import Tata from "../../../assets/Tata.png";
import Black from "../../../assets/Black.jpg";
import T2 from "../../../assets/T2.png";
import Bird from "../../../assets/Bird.jpg";
import Train from "../../../assets/Train.jpg";
import { Link } from 'react-router-dom';

const TempFeatures = () => {
    const trelloTemplates = [
        {
            categoryLogo: nnt,
            category: "New and notable templates",
            moreTemplates: undefined,
            templates: [
                {
                    logo: New,
                    imgLogo: T1,
                    title: "New Hire Onboarding",
                    author: "by Trello Team",
                    description: "Help new employees start strong with this onboarding template.",
                    copies: "18.3K",
                    votes: "131.3K",
                    path:"/templates/team-management/new-hire-onboarding-qr3AcASr",
                },
                {
                    logo: Color,
                    imgLogo: T1,
                    title: "Tier List",
                    author: "by Trello Engineering Team",
                    description: "Use this template to create a tier list for anything you want. A tier list is a way to rank items in a category from best to worst. This…",
                    copies: "2.9K",
                    votes: "23.3K"
                },
                {
                    logo: Sky,
                    imgLogo: T1,
                    title: "Better Work Habits Challenge",
                    author: "by Trello Team",
                    description: "Track, reflect, and celebrate new effective habits that you want to build at work.",
                    copies: "3.1K",
                    votes: "28K"
                }
            ]
        },
        {
            categoryLogo: Business,
            category: "Business",
            moreTemplates: `More templates for Business `,
            templates: [
                {
                    logo: Easy,
                    imgLogo: White,
                    title: "A Lead Management Pipeline by Crmble",
                    author: "by Toni, Founder @ Crmble",
                    description: "Use this board to manage inventory or swag requests with the Crmble Power-Up!",
                    copies: "30.3K",
                    votes: "185.8K"
                },
                {
                    logo: Dark,
                    imgLogo: Teeth,
                    title: "Lean Canvas",
                    author: "by Syarfandi Achmad",
                    description: "Lean Canvas is a 1-page business plan template created by Ash Maurya that helps you deconstruct your idea into its key…",
                    copies: "34.9K",
                    votes: "205.2K"
                },
                {
                    logo: Hand,
                    imgLogo: Al,
                    title: "Nonprofit Project Management",
                    author: "by Atlassian",
                    description: "Turn big dreams into bigger results. Use this Trello template to build your nonprofit team's ideal workflow, for projects big or…",
                    copies: "2.1K",
                    votes: "10.3K"
                }
            ]
        },
        {
            categoryLogo: Design,
            category: "Design",
            moreTemplates: `More templates for Design `,
            templates: [
                {
                    logo: Mouse,
                    imgLogo: Pose,
                    title: "Design Project Template",
                    author: "by Kene Ohiaeri, Product Designer",
                    description: "An easy to use template for planning and monitoring your branding and product design projects online.",
                    copies: "29.7K",
                    votes: "175.6K"
                },
                {
                    logo: Book,
                    imgLogo: Smile,
                    title: "Design System Checklist",
                    author: "by Rahul JR, Senior Product Manager @ Zoho Corp",
                    description: "A design system unites product teams around a common visual language.",
                    copies: "21.9K",
                    votes: "173.3K"
                },
                {
                    logo: Scissor,
                    imgLogo: Yellow,
                    title: "Freelance Branding Project",
                    author: "by Stu Smith, Designer @ Trello",
                    description: "Use this template to run your next Branding project.",
                    copies: "22.9K",
                    votes: "114.5K"
                }
            ]
        },
        {
            categoryLogo: Education,
            category: "Education",
            moreTemplates: `More templates for Education `,
            templates: [
                {
                    logo: Book,
                    imgLogo: Ani,
                    title: "Remote Class Template",
                    author: "by Kelly Theisen, Assistant Professor of Chemistry",
                    description: "Stay organized in a remote learning environment.",
                    copies: "48.9K",
                    votes: "217.8K"
                },
                {
                    logo: Lib,
                    imgLogo: Pic,
                    title: "Academic Literature Review",
                    author: "by Ann Gillian Chu, PhD researcher @ the University of St. Andrews",
                    description: "Keep track of what you've read and your notes in one place for long writing projects, like dissertations.",
                    copies: "23.9K",
                    votes: "91.4K"
                },
                {
                    logo: Bg,
                    imgLogo: Brown,
                    title: "Teaching: Weekly Planning",
                    author: "by Emma Trentman, Associate Professor of Arabic @ University of New Mexico",
                    description: "A board per class. The lists are the weeks of the semester, cards are things I need to do for class each week.",
                    copies: "200.8K",
                    votes: "351.4K"
                }
            ]
        },
        {
            categoryLogo: Eng,
            category: "Engineering",
            moreTemplates: `More templates for Engineering`,
            templates: [
                {
                    logo: Blue,
                    imgLogo: T1,
                    title: "Kanban Template",
                    author: "by Trello Engineering Team",
                    description: "Use this simple Kanban template to improve the productivity of your engineering team and help them build better products, faster.",
                    copies: "972.2K",
                    votes: "2.2M"
                },
                {
                    logo: Moon,
                    imgLogo: Spect,
                    title: "Scrum Board",
                    author: "by Robin Warren, Founder of Cherry Wood Software",
                    description: "From \"to do\" to \"done\", Trello's scrum board template helps your software development team use the popular agile framework to…",
                    copies: "38.1K",
                    votes: "127.1K"
                },
                {
                    logo: Sat,
                    imgLogo: Table,
                    title: "Software Development [Web App, iOS App, Android App]",
                    author: "by iLyas Farawe, CTO @ Techbarn",
                    description: "Manage tasks and deadlines for software development projects.",
                    copies: "33.8K",
                    votes: "133.7K"
                }
            ]
        },
        {
            categoryLogo: Mr,
            category: "Marketing",
            moreTemplates: `More templates for Marketing `,
            templates: [
                {
                    logo: Violet,
                    imgLogo: Spot,
                    title: "Speaker guide for online events",
                    author: "by Josip Lisec, Head of Product @ SpotMe",
                    description: "Prep for your next virtual event with precision!",
                    copies: "9.9K",
                    votes: "60.8K"
                },
                {
                    logo: Library,
                    imgLogo: Beard,
                    title: "Marketing Content Catalog",
                    author: "by Nicholas Bouchard, Content Marketer @ Unito",
                    description: "Centralize all the content your marketing teams create and make it easily searchable.",
                    copies: "8.1K",
                    votes: "67.9K"
                },
                {
                    logo: Wood,
                    imgLogo: T1,
                    title: "Marketing Overview",
                    author: "by Stella Garber, Head of Marketing @ Trello",
                    description: "Use this board to create a stronger sense of transparency within your marketing team and the company.",
                    copies: "35.4K",
                    votes: "187.1K"
                }
            ]
        },
        {
            categoryLogo: Pm,
            category: "Project management",
            moreTemplates: `More templates for Project management `,
            templates: [
                {
                    logo: Pencil,
                    imgLogo: Tie,
                    title: "Client Workflow Management",
                    author: "by Jordan L. Couch, Attorney @ Palace Law",
                    description: "Use a Trello board to go paperless while managing a client workflow.",
                    copies: "46.9K",
                    votes: "311.9K"
                },
                {
                    logo: Daddy,
                    imgLogo: Uni,
                    title: "UNICEF Global Innovation Centre",
                    author: "by UNICEF",
                    description: "Working with any number of countries at any given time, UNICEF is able to keep track of every location, including all points of…",
                    copies: "3.2K",
                    votes: "47.4K"
                },
                {
                    logo: Bag,
                    imgLogo: Tata,
                    title: "Advanced Project Budgeting and Time Tracking",
                    author: "by Vitaly Andrianov, Maker of SmartFields for Trello Power-Up",
                    description: "Track time and budget for your projects with ease and less manual work.",
                    copies: "15.9K",
                    votes: "110.2K"
                }
            ]
        },
        {
            categoryLogo: Rm,
            category: "Remote work",
            moreTemplates: `More templates for Remote work `,
            templates: [
                {
                    logo: Black,
                    imgLogo: T2,
                    title: "Work From Home Daily Planner",
                    author: "by Sarah Costello @ TalentHub",
                    description: "Plan, collaborate and monitor your work-from-home schedule.",
                    copies: "101.7K",
                    votes: "281K"
                },
                {
                    logo: Bird,
                    imgLogo: T1,
                    title: "Mr. Rogers: “Watercooler” Video Chat Planner",
                    author: "by Trello Team",
                    description: "A simple way to build team culture.",
                    copies: "2.5K",
                    votes: "32K"
                },
                {
                    logo: Train,
                    imgLogo: T1,
                    title: "Remote Team Hub",
                    author: "by Trello Team",
                    description: "A mission control center for your team productivity.",
                    copies: "55.3K",
                    votes: "645.7K"
                }
            ]
        }
    ];
    return (
        <>
            <div>
                <div className="cursor-pointer]">
                    <div className="flex bg-white shadow rounded p-10 w-[820px]">
                        <div>
                            <h1 className="font-bold text-[25px] mb-2">
                                Templates for Trello
                            </h1>
                            <p className="text-[14px] text-gray-500">
                                No more starting from scratch. Give your team a blueprint for{" "}
                                <br />
                                success with tried-and-true templates from the Trello <br />
                                community. Copy, customize, and you’ll be collaborating in
                                <br />
                                time!
                            </p>
                        </div>
                        <img className="w-[360px]" src={lap} alt="" />
                    </div>
                    <div className="text-[15px] mt-5">
                        <h1 className="font-bold text-[20px] mb-5">Featured categories</h1>
                        <div className="flex gap-4.5 text-[13px] text-gray-500">
                            <div className="">
                                <img className="h-25 rounded " src={Business} alt="" />
                                <h5 className="">Business</h5>
                            </div>
                            <div>
                                <img className="h-25 rounded" src={Design} alt="" />
                                <h5 className="">Design</h5>
                            </div>
                            <div>
                                <img className="h-25 rounded" src={Education} alt="" />
                                <h5 className="">Education</h5>
                            </div>
                            <div>
                                <img className="h-25 rounded " src={Eng} alt="" />
                                <h5 className="">Engineering</h5>
                            </div>
                            <div>
                                <img className="h-25 rounded" src={Mr} alt="" />
                                <h5 className="">Marketing</h5>
                            </div>
                            <div>
                                <img className="h-25 rounded " src={Pm} alt="" />
                                <h5 className="">
                                    Product <br /> Management
                                </h5>
                            </div>
                            <div>
                                <img className="h-25 rounded " src={Rm} alt="" />
                                <h5 className="">Remote work</h5>
                            </div>
                        </div>
                    </div>
                    {
                        trelloTemplates.map((ele, index) => {
                            return (<>
                                <div key={index} >
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-4 mb-5">
                                            <img className="w-8 rounded" src={ele.categoryLogo} alt="" />
                                            <h1 className="font-bold text-2xl ">{ele.category}</h1>
                                        </div>
                                        {
                                            ele.moreTemplates != undefined ? <>
                                                <div className="mr-8">
                                                    <button className="px-4 cursor-pointer py-2 bg-gray-300 hover:bg-gray-200 rounded">{ele.moreTemplates}</button>
                                                </div>
                                            </> : <>

                                            </>
                                        }
                                    </div>
                                    <div className="flex gap-6">
                                        {
                                            ele.templates.map((element, index) => {
                                                return (
                                                    <>
                                                        <Link key={index} to={element.path} className="mb-10 cursor-pointer">
                                                            <div className="relative ">
                                                                <img className="h-30 w-60 rounded" src={element.logo} alt="" /> <br />
                                                                <img className="w-10 rounded absolute bottom-1  ml-2" src={element.imgLogo} alt="" />
                                                            </div>
                                                            <h1 className="font-bold w-[270px] ">{element.title}</h1>
                                                            <p className=" text-[13px]  w-[270px] text-gray-500">{element.author}</p>
                                                            <p className=" text-[13px] w-[270px] text-gray-500">{element.description}</p>
                                                            <div className="flex pt-4 gap-3  ">
                                                                <h1 className="flex text-gray-500  text-[12px] gap-1.5">
                                                                    <span className="text-[13px] mt-0.5 ">
                                                                        <MdContentCopy />
                                                                    </span>
                                                                    {element.copies}
                                                                </h1>
                                                                <h1 className="flex text-gray-500 text-[12px] gap-1.5  ">
                                                                    <span className="text-[13px] ">
                                                                        <IoEyeOutline />
                                                                    </span>
                                                                    {element.votes}
                                                                </h1>
                                                            </div>
                                                        </Link>

                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                            )
                        })
                    }
                </div>
            </div>{" "}
        </>
    )
}

export default TempFeatures
