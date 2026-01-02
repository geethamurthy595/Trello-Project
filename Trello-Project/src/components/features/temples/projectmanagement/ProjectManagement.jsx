import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

import img1 from "../../../../assets/pmimg1.jpg";
import icon1 from "../../../../assets/pmicon1.png";
import img2 from "../../../../assets/pmimg2.jpg";
import icon2 from "../../../../assets/pmicon2.png";
import img3 from "../../../../assets/pmimg3.jpg";
import icon3 from "../../../../assets/pmicon3.png";
import img4 from "../../../../assets/pmimg4.jpg";
import icon4 from "../../../../assets/pmicon4.png";
import img5 from "../../../../assets/pmimg5.jpg";
import icon5 from "../../../../assets/pmicon5.png";
import img6 from "../../../../assets/pmimg6.jpg";
import icon6 from "../../../../assets/pmicon6.png";
import img7 from "../../../../assets/pmimg7.jpg";
import icon7 from "../../../../assets/pmicon7.png";
import img8 from "../../../../assets/pmimg8.png";
import icon8 from "../../../../assets/pmicon8.png";
import img9 from "../../../../assets/pmimg9.jpg";
import icon9 from "../../../../assets/pmicon9.png";
import img10 from "../../../../assets/pmimg10.jpg";
import icon10 from "../../../../assets/pmicon10.png";
import img11 from "../../../../assets/pmimg11.jpg";
import icon11 from "../../../../assets/pmicon11.png";
import img12 from "../../../../assets/pmimg12.jpg";
import icon12 from "../../../../assets/pmicon12.png";
import img13 from "../../../../assets/pmimg13.jpg";
import icon13 from "../../../../assets/pmicon13.png";
import img14 from "../../../../assets/pmimg14.jpg";
import icon14 from "../../../../assets/pmicon14.png";
import img15 from "../../../../assets/pmimg15.jpg";
import icon15 from "../../../../assets/pmicon15.png";
import img16 from "../../../../assets/pmimg16.svg";
import icon16 from "../../../../assets/pmicon16.png";
import img17 from "../../../../assets/pmimg17.jpg";
import icon17 from "../../../../assets/pmicon17.png";
import img18 from "../../../../assets/pmimg18.png";
import img19 from "../../../../assets/pmimg19.jpg"; 
//import icon19 from "../../../../assets/pmicon19.png";

const ProjectManagement = () => {
    const reldata = [
        {
            img: img1,
            icon: icon1,
            title: "Client Workflow Management",
            desc: "by Jordan L. Couch, Attorney @ Palace Law",
            cont: "Use a Trello board to go paperless while managing a client workflow.",
            copy: "46.9K",
            views: "311.9K",
            to: "/templates/project-management/client-workflow-management-GHFaoLVc",
        },
        {
            img: img2,
            icon: icon2,
            title: "UNICEF Global Innovation Centre",
            desc: "by UNICEF",
            cont: "UNICEF keeps track of every location across many countries.",
            copy: "3.2K",
            views: "47.4K",
            to: "/templates/project-management/unicef-global-innovation-centre-ayrAnnoL",
        },
        {
            img: img3,
            icon: icon3,
            title: "Advanced Project Budgeting and Time Tracking",
            desc: "by Vitaly Andrianov, Maker of SmartFields for Trello Power-Up",
            cont: "Track time and budget for your projects with ease and less manual work.",
            copy: "15.9K",
            views: "110.2K",
            to: "/templates/project-management/advanced-project-budgeting-and-time-tracking-2Hsb5dPy",
        },
        {
            img: img4,
            icon: icon4,
            title: "Amazing Kanban Project Management Template",
            desc: "by Amazing Fields",
            cont: "Plan your next project in Trello using this Kanban board.",
            copy: "13K",
            views: "66.2K",
            to: "/templates/project-management/amazing-kanban-project-management-template-WHOzj88m",
        },
        {
            img: img5,
            icon: icon5,
            title: "Site tracker",
            desc: "by UK Cabinet Office, Paul Trowsdale",
            cont: "Keep stakeholders apprised of plans for new sites.",
            copy: "9.9K",
            views: "62.5K",
            to: "/templates/project-management/site-tracker-Dj3EzmL9",
        },
        {
            img: img6,
            icon: icon6,
            title: "Project Management",
            desc: "by Trello Marketing Team",
            cont: "Turn big dreams into bigger results with a structured workflow.",
            copy: "1.7M",
            views: "4M",
            to: "/templates/project-management/project-management-1x4Uql2u",
        },
        {
            img: img7,
            icon: icon7,
            title: "Government Project Management",
            desc: "by Amy Campbell",
            cont: "Break down silos and collaborate with ease.",
            copy: "25.1K",
            views: "111.2K",
            to: "/templates/project-management/government-project-management-RKahFXJq",
        },
        {
            img: img8,
            icon: icon8,
            title: "Premortem",
            desc: "by Atlassian Team Playbook",
            cont: "Anticipate risks and solve them early.",
            copy: "14.6K",
            views: "68.7K",
            to: "/templates/project-management/premortem-OtqPUc50",
        },
        {
            img: img9,
            icon: icon9,
            title: "Simple Project Board",
            desc: "by David Mugisha, Accenture",
            cont: "Move projects through brainstorm → to do → doing → done.",
            copy: "664.2K",
            views: "1.6M",
            to: "/templates/project-management/simple-project-board-6QW0Ciu8",
        },
        {
            img: img10,
            icon: icon10,
            title: "Video Production",
            desc: "by Jontanium",
            cont: "Use this board to manage your video production.",
            copy: "13.5K",
            views: "43.3K",
            to: "/templates/project-management/video-production-iofItG0K",
        },
        {
            img: img11,
            icon: icon11,
            title: "Eisenhower Matrix Task Board",
            desc: "by Ik ben Crystal",
            cont: "Organize tasks by urgency and importance.",
            copy: "15.7K",
            views: "82.8K",
            to: "/templates/project-management/eisenhower-matrix-task-board-DZVysUiF",
        },
        {
            img: img12,
            icon: icon12,
            title: "Agile Board Template | Trello",
            desc: "by Lyndi Thompson",
            cont: "Perfect for product shipping and iteration planning.",
            copy: "405.2K",
            views: "762.3K",
            to: "/templates/project-management/agile-board-template-%7C-trello-DnZvFigA",
        },
        {
            img: img13,
            icon: icon13,
            title: "Ceremony Bookings",
            desc: "by Susan and Gerrie",
            cont: "Track all incoming ceremony bookings with ease.",
            copy: "2.6K",
            views: "22.7K",
            to: "/templates/project-management/ceremony-bookings--faWYE6ai",
        },
        {
            img: img14,
            icon: icon14,
            title: "Managing Translations",
            desc: "by Denise Shimoni",
            cont: "Translation workflow used for Trello’s 21 languages.",
            copy: "2.9K",
            views: "21.3K",
            to: "/templates/project-management/managing-translations-ePkNcvAX",
        },
        {
            img: img15,
            icon: icon15,
            title: "Program Management Template",
            desc: "by Soniya Ahuja",
            cont: "A quick-start template for PMO success.",
            copy: "15K",
            views: "139.9K",
            to: "/templates/project-management/program-management-template-potjK48u",
        },
        {
            img: img16,
            icon: icon16,
            title: "Salesforce Project Management",
            desc: "by Shubham Sonar",
            cont: "Manage Salesforce implementation projects.",
            copy: "2.7K",
            views: "29K",
            to: "/templates/project-management/salesforce-project-management-ohNSELov",
        },
        {
            img: img17,
            icon: icon17,
            title: "Scientific Research Project",
            desc: "by Blake Wilson",
            cont: "Manage your next scientific research project.",
            copy: "7.1K",
            views: "26.1K",
            to: "/templates/project-management/scientific-research-project-(template)-GBnhFbVr",
        },
        {
            img: img18,
            icon: icon8,
            title: "Trade-offs",
            desc: "by Atlassian Team Playbook",
            cont: "Define and prioritize project trade-offs.",
            copy: "7.8K",
            views: "15.4K",
            to: "/templates/project-management/trade-offs-IVpovHZW",
        },
        {
            img: img19,
            //icon: icon19,
            title: "Work request & intake process",
            desc: "by Derek Hamilton",
            cont: "Automate and organize incoming work requests.",
            copy: "6.7K",
            views: "59.8K",
            to: "/templates/project-management/work-request-and-intake-process-BGbKiKKA",
        },
    ];

    return (
        <div className="p-10">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex gap-2 p-3">
                    <Link to="/templates" className="hover:underline">
                        Template gallery /
                    </Link>
                    <Link to="/templates/project-management" className="hover:underline">
                        Project Management
                    </Link>
                </div>

                {/* Header */}
                <div className="flex gap-4">
                    <img
                        src="https://trello.com/assets/7d80b8fac2bac70d9e72.svg"
                        alt=""
                        className="h-12 rounded"
                    />
                    <h1 className="text-xl font-bold text-gray-800 mt-2">
                        Project Management Templates
                    </h1>
                </div>

                {/* Cards */}
                <div className="p-5">
                    <div className="flex flex-wrap">
                        {reldata.map(({ img, icon, title, desc, cont, copy, views, to }) => (
                            <Link to={to} className="flex flex-col gap-2 mt-7 w-70">
                                <div className="relative">
                                    <img
                                        src={img}
                                        alt=""
                                        className="h-[132px] w-[247px] rounded"
                                    />
                                    <div className="bg-white p-[4px] ml-2 rounded-full h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                                        <img
                                            src={icon}
                                            alt=""
                                            className="h-[40px] w-[40px] rounded-full"
                                        />
                                    </div>
                                </div>

                                <h1 className="font-semibold text-[16px] px-2">{title}</h1>
                                <p className="text-[13px] px-2 w-[250px]">{desc}</p>
                                <p className="text-[13px] px-2 w-[250px]">{cont}</p>

                                <div className="flex px-2 text-[13px] items-center gap-2 text-gray-700 font-semibold mt-2">
                                    <span className="flex items-center gap-1">
                                        <MdContentCopy /> {copy}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <IoEyeOutline /> {views}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className="flex gap-10 pb-9">
                    <div>
                        <h1 className="text-2xl font-medium pb-6">What's Trello?</h1>
                        <p className="w-120">
                            Trello lets you work more collaboratively and get more done. Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
                        </p>

                        <div className="flex gap-5 mt-5">
                            <Link to="/signup?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D%26ssoVerified%3D%26createMember%3Dtrue%26jiraInviteLink%3D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D" className="bg-blue-600 text-white p-3 rounded">
                                Sign up - it's free
                            </Link>
                            <Link to="https://trello.com/" className="underline mt-2 text-gray-500">Learn more</Link>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://trello.com/assets/ea5b895d726e6dc287da.svg"
                            alt=""
                        />
                    </div>
                </div>

                <hr className="p-3 text-gray-300 w-200" />

                <div className="flex gap-5 pb-10">
                    <p className="w-160 text-[13px]">
                        Streamline your workflow and improve productivity using project management templates from some of your favorite companies. Keep organized on projects from start to finish, track progress, and ensure that nothing slips through the cracks. Whether it’s a simple to-do list or a complex workflow, Trello is customizable to the demands of any project.
                    </p>

                    <img
                        src="https://trello.com/assets/f371218529394fb9a9a7.svg"
                        className="h-30"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
