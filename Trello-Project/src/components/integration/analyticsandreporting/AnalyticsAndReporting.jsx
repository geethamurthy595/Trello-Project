import React from 'react';

import img1 from "../../../assets/analyticsimg1.png";
import img2 from "../../../assets/analyticsimg2.png";
import img3 from "../../../assets/analyticsimg3.png";
import img4 from "../../../assets/analyticsimg4.png";
import img5 from "../../../assets/analyticsimg5.png";
import img6 from "../../../assets/analyticsimg6.png";
import img7 from "../../../assets/analyticsimg7.png";
import img8 from "../../../assets/analyticsimg8.png";
import img9 from "../../../assets/analyticsimg9.png";
import img10 from "../../../assets/analyticsimg10.png";
import img11 from "../../../assets/analyticsimg11.png";
import img12 from "../../../assets/analyticsimg12.png";
import img13 from "../../../assets/analyticsimg13.png";
import img14 from "../../../assets/analyticsimg14.png";
import img15 from "../../../assets/analyticsimg15.png";
import img16 from "../../../assets/analyticsimg16.png";
import img17 from "../../../assets/analyticsimg17.png";
import img18 from "../../../assets/analyticsimg18.png";
import img19 from "../../../assets/analyticsimg19.png";
import img20 from "../../../assets/analyticsimg20.png";
import img21 from "../../../assets/analyticsimg21.png";
import img22 from "../../../assets/analyticsimg22.png";
import img23 from "../../../assets/analyticsimg23.png";
import img24 from "../../../assets/analyticsimg24.png";


const AnalyticsAndReporting = () => {

    const items = [
        { title: "Data Migration & Import", desc: "Import and export tasks and related PM data much faster and easier.", img: img1 },
        { title: "FlowMaster", desc: "Flow Master connects with Trello and other tools to automate your workflows, link related tasks, and provide smart suggestions, all within one centralized platform.", img: img2 },
        { title: "Fillout", desc: "Create Trello cards from new form submissions. With Fillout, you can simplify your workflow and automate your Trello boards.", img: img3 },
        { title: "Screenful", desc: "Provides kanban/agile metrics and forecasting for boards.", img: img4 },
        { title: "Corrello Power-Up", desc: "View burndown charts and cumulative flow diagrams for your boards.", img: img5 },
        { title: "TMetric", desc: "Customizable reports and full time control on card and board activity.", img: img6 },
        { title: "Timely", desc: "Create timesheet entries from Trello cards.", img: img7 },
        { title: "Elegantt", desc: "An elegant automatic scheduling tool for Trello.", img: img8 },
        { title: "Jotform", desc: "Send form submissions directly to your Trello boards.", img: img9 },
        { title: "Time in List", desc: "Shows how long cards have been in their current and past lists.", img: img10 },
        { title: "TimeDoctor", desc: "Track Trello cards with TimeDoctor.", img: img11 },
        { title: "Blue Cat", desc: "Easy, beautiful, fully customizable drag & drop reports for Trello.", img: img12 },
        { title: "Export for Trello", desc: "Exports a board to an Excel (.xlsx) file.", img: img13 },
        { title: "EasyCSV", desc: "Import CSV, XLSX, and Google Sheets data into Trello with custom fields.", img: img14 },
        { title: "Timecamp", desc: "Track your time directly in Trello.", img: img15 },
        { title: "Numerics", desc: "A native KPI dashboard app to track and share your Trello metrics with teams in realtime.", img: img16 },
        { title: "Rotor for Trello", desc: "Tracks time spent on cards and shows elapsed time reports.", img: img17 },
        { title: "Toggl", desc: "Official Toggl timer to track time in Trello.", img: img18 },
        { title: "Timeneye", desc: "Simple and easy time tracking inside Trello.", img: img19 },
        { title: "Everhour", desc: "Helps teams measure time spent on Trello cards.", img: img20 },
        { title: "Beeminder", desc: "Track your Trello goals with Beeminder.", img: img21 },
        { title: "Zistemo Time Tracking", desc: "Extending Trello with advanced time management functions.", img: img22 },
        { title: "Cross-Board Export", desc: "Tired of adding Export power-ups on each board? Try Cross-Board Export! One installation covers all your boards, eliminating multiple fees", img: img23 },
        { title: "Jotform Sign", desc: "Send form submissions and e-sign documents to your Trello boards.", img: img24 }
    ];

    return (
        <>
            <div>
                <div className='mb-6'>
                    <h2 className='text-2xl font-medium'>Analytics & reporting ({items.length})</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {items.map((item, index) => (
                        <div key={index}
                            className={` bg-white p-5 flex flex-col justify-between rounded-xl shadow  ${index < 3 || index >= items.length - 3 ? "h-90" : "h-56"}`}>
                            <div className='flex gap-6'>
                                <img src={item.img} alt={item.title} className='w-10 h-10 rounded-md mb-3 object-cover'/>
                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                            </div> 
                            <p className='text-gray-600 text-[15px] mb-4 '>{item.desc}</p>
                            <button className='p-3 w-30 rounded-md border text-black text-sm hover:bg-[#DFE1E6] transition duration-400 '>Configure</button>
                        </div>
                    ))}
                </div>
                <button className='p-3 border rounded bg-blue-600 text-white mt-10 mb-10 ml-85 hover:bg-blue-800 transition duration-150 w-25'>View all</button>
            </div>
        </>
    );
}

export default AnalyticsAndReporting;
