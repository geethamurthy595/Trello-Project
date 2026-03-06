import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import img1 from "../../../../assets/productivityimg1.png"
import img2 from "../../../../assets/productivityimg2.png";
import img3 from "../../../../assets/productivityimg3.png";
import img4 from "../../../../assets/productivityimg4.jpg";
import img5 from "../../../../assets/productivityimg5.jpg";
import img6 from "../../../../assets/productivityimg6.png";
import img7 from "../../../../assets/productivityimg7.png";
import img8 from "../../../../assets/productivityimg8.png";
import img9 from "../../../../assets/productivityimg9.png";
import img10 from "../../../../assets/productivityimg10.png";
import img11 from "../../../../assets/productivityimg11.png";
import img12 from "../../../../assets/productivityimg12.png";
import img13 from "../../../../assets/productivityimg13.png";
import img14 from "../../../../assets/productivityimg14.png";
import img15 from "../../../../assets/productivityimg15.png";
import img16 from "../../../../assets/productivityimg16.png";
import logo1 from "../../../../assets/productivitylogo1.png";
import logo2 from "../../../../assets/productivitylogo2.png";
import logo3 from "../../../../assets/productivitylogo3.png";
import logo4 from "../../../../assets/productivitylogo4.png";
import logo5 from "../../../../assets/productivitylogo5.png";
import logo6 from "../../../../assets/productivitylogo6.png";
import logo7 from "../../../../assets/productivitylogo7.png";
import logo8 from "../../../../assets/productivitylogo8.png";
import logo9 from "../../../../assets/productivitylogo9.png";
import logo10 from "../../../../assets/productivitylogo10.png";
import logo11 from "../../../../assets/productivitylogo11.png";
import logo12 from "../../../../assets/productivitylogo12.png";

const ProductivityCards = [
    {
        id: "/templates/productivity",
        mainImage: img2,
        logoImage: logo1,
        title: "My Tasks | Trello",
        author: "by Trello Team ",
        description: "Track all your to-dos in your own, private Trello board.",
        copies: "0",
        views: "4",
    },
    {
        id: "/templates/productivity",
        mainImage: img3,
        logoImage: logo1,
        title: "Self-Advocacy Record",
        author: "by Atlassian",
        description: "Keep track of everything you do at work to help advocate for yourself.",
        copies: "3.1K",
        views: "19.7K"
    },
    {
        id: "/templates/productivity",
        mainImage: img4,
        logoImage: logo2,
        title: "Weekly Planner",
        author: "by Noor Margana, IT Student",
        description: "You don't have to be a pro to create a great weekly plan. With this easy-to-use template, you'll never miss another...",
        copies: "70.5K",
        views: "278K"
    },
    {
        id: "/templates/productivity",
        mainImage: img5,
        logoImage: logo3,
        title: "Amazing Personal Task Management",
        author: "by Amazing Fields",
        description: "Track all your tasks in Trello with this simple task management board.",
        copies: "11.8K",
        views: "64.7K"
    },
    {
        id: "/templates/productivity",
        mainImage: img6,
        logoImage: logo4,
        title: "Life Watchers 2020",
        author: "by Cindy Duong, Senior Marketing Designer, Trello @ Atlassian",
        description: "Stay accountable to your life goals with a team of trusted friends/advisors!",
        copies: "11.9K",
        views: "76.4K"
    },
    {
        id: "/templates/productivity",
        mainImage: img7,
        logoImage: logo5,
        title: "Marc Andreesen Productivity System",
        author: "by Bryan Ye, Content Designer @ Atlassian",
        description: "Make your own productivity system based on Marc Andreessen's personal method.",
        copies: "25.3K",
        views: "129.4K"
    },
    {
        id: "/templates/productivity",
        mainImage: img8,
        logoImage: logo6,
        title: "2020 Online Bullet Journal - BuJo",
        author: "by  Nayara Soares, Brazil Country Manager @ MyHeritage",
        description: "Get into bullet journaling without having to carry a notebook everywhere you go.",
        copies: "16K",
        views: "106.1K"
    },
    {
        id: "/templates/productivity",
        mainImage: img9,
        logoImage: logo7,
        title: "8 Creative Habits",
        author: "by Cherry Jeffs, Creative Practice Coach + Mixed-media Artist",
        description: "A proven framework for Implementing crucial habits for a sustainable and productive creative practice!.",
        copies: "6.9K",
        views: "79.3K"
    },
    {
        id: "/templates/productivity",
        mainImage: img10,
        logoImage: logo8,
        title: "Annual Life Goals & Planning",
        author: "by  Chhin Sras, Freelancer @ Dragon Seal Studio",
        description: "Lay out your yearly goals and track your accomplishments.",
        copies: "15.3K",
        views: "72.6K"
    },
    {
        id: "/templates/productivity",
        mainImage: img11,
        logoImage: logo9,
        title: "Atlassian basic board",
        author: "by Trello Team",
        description: "Get started with basic lists and a few helpful tips; customize it all for how you and your team work best.",
        copies: "3.5K",
        views: "8.9K"
    },
    {
        id: "/templates/productivity",
        mainImage: img12,
        logoImage: logo1,
        title: "Better Work Habits Challenge",
        author: "by Trello Team",
        description: "Track, reflect, and celebrate new effective habits that you want to build at work.",
        copies: "3.1K",
        views: "28K"
    },
    {
        id: "/templates/productivity",
        mainImage: img13,
        logoImage: logo1,
        title: "Getting Things Done - GTD",
        author: "by  Kelvin Baggs",
        description: "Get the GTD template and organize your projects so you can easily review loose ends, see what's coming up, and most...",
        copies: "45.3K",
        views: "174.6K"
    },
    {
        id: "/templates/productivity",
        mainImage: img14,
        logoImage: logo10,
        title: "Personal & Work Goals",
        author: "by David Barber, Blogger @ TechBarber.com",
        description: "Track the status of your personal and professional productivity. Set goals and achieve them.",
        copies: "37.6K",
        views: "229.5K"
    },
    {
        id: "/templates/productivity",
        mainImage: img15,
        logoImage: logo11,
        title: "Planning Your Day (a Kanban template)",
        author: "by Audrey, Organizer Extraordinaire!",
        description: "A simple Kanban style board for you to keep your life organized.",
        copies: "14.9K",
        views: "112.5K"
    },
    {
        id: "/templates/productivity",
        mainImage: img3,
        logoImage: logo12,
        title: "Productivity Workflow",
        author: "by Trello Marketing Team",
        description: "As a team we're always trying out new productivity methods, use this board to try each one!",
        copies: "43.3K",
        views: "235.7K"
    }
]


const Productivity = () => {
    const handleNavigate = (id) => {
        window.location.href = id;
    };
    return (
        <>
            <div className="w-200">
                <div className="w-full h-10 flex items-center gap-4">
                    <Link
                        to="/templates"
                        className="text-lg font-normal leading-normal hover:underline cursor-pointer"
                    >
                        Template gallery
                    </Link>
                    <p className="text-lg font-normal leading-normal">/</p>
                    <Link
                        to="/templates/business"
                        className="text-lg font-normal leading-normal hover:underline cursor-pointer"
                    >
                        Productivity
                    </Link>
                </div>
                <div className="w-full h-28 flex items-center gap-4">
                    <div className="">
                        <img src={img1} alt="img" className="w-15 rounded-md" />
                    </div>
                    <p className="text-2xl font-medium leading-normal">
                        Productivity templates
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {ProductivityCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleNavigate(card.id)}
                            className="relative flex flex-col border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer overflow-hidden"
                        >
                            {/* Image Section */}
                            <div className="relative h-40 w-full">
                                <img
                                    src={card.mainImage}
                                    alt="Main"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 border border-black bg-black w-12 h-12 rounded-full flex items-center justify-center">
                                    <img
                                        src={card.logoImage}
                                        alt="Logo"
                                        className="w-10 h-10 object-contain rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col px-3 py-2 h-full justify-between">
                                <div>
                                    <p className="text-sm font-semibold leading-snug">{card.title}</p>
                                    <p className="text-gray-500 text-xs">{card.author}</p>
                                    <p className="text-xs text-gray-700 leading-tight mt-1">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium pt-2">
                                    <span className="flex items-center gap-1">
                                        <MdOutlineFileCopy className="text-sm" />
                                        {card.copies}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <IoEyeOutline className="text-sm" />
                                        {card.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="mt-15 border-t-1 border[#E3E4F21F] mb-10" />
                <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl">

                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            What's Trello?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Trello lets you work more collaboratively and get more done.
                            Trello’s boards, lists, and cards enable you to organize and
                            prioritize your projects in a fun, flexible, and rewarding way.
                        </p>

                        <div className="flex items-center flex-wrap gap-4 mt-2">
                            <Link
                                to="/signUp"
                                className="bg-[#669DF1] text-lg text-black font-medium py-3 px-6 rounded hover:bg-[#8FB8F6] transition-colors duration-300"
                            >
                                Sign up – it's Free
                            </Link>
                            <Link
                                to="/"
                                className="underline decoration-[#A9ABAF] text-lg font-normal text-[#A9ABAF] hover:text-gray-600 transition-colors"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src={img14}
                            alt="Trello Business"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl mt-10">

                    <div className="md:w-3/4 w-full flex flex-col gap-4">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            These time management templates will help you improve your productivity. Start here and get more done. Whether you aim to improve your personal productivity or power the productivity of your team, use tried-and-tested time management templates and techniques to hold yourself accountable and focus on what matters.
                        </p>
                    </div>

                    <div className="md:w-1/4 w-full flex justify-center">
                        <img
                            src={img16}
                            alt="Trello Personal"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productivity
