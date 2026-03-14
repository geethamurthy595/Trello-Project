import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
import socket from "../../../../assets/epicslogo1.png";
import reporting from "../../../../assets/epicslogo2.png";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import img1 from "../../../../assets/imgi_1_epic.png"
import { AiOutlineInfoCircle } from 'react-icons/ai';
import img3 from '../../../../assets/imgi_3_epic.png'
import gif from '../../../../assets/epicsgif.gif'
import img2 from '../../../../assets/imgi_2_epic.png'

const data = [
    {
        id: 1,
        text: 'Estimate your cards, log work done, see remaining effort and flag overestimations; ',
        link: 'Jump to this feature'
    },
    {
        id: 2,
        text: 'Set the type and the priority level of your cards, choosing from a wide range of options;',
        link: 'Jump to this feature'
    },
    {
        id: 3,
        text: 'Create links between cards to mark related cards, blocking cards, duplicates etc.;',
        link: 'Jump to this feature'
    },
    {
        id: 4,
        text: 'Turn cards into Epics, add sub-cards and easily track the progress of each milestone;',
        link: 'Jump to this feature'
    },
    {
        id: 5,
        text: 'Change card status to Open, On hold, Done or Abandoned;',
        link: 'Jump to this feature'
    }
]
const EpicsByRogueShadows = () => {
    return (
        <>
            <NavBar />
            <div className='flex r max-w-5xl  mx-auto gap-12 px-6 py-1 '>
                {/* Left */}
                <div className=" px-4 sticky top-4 h-full md:px-8 py-1 ">
                    <div className="max-w-xl  mx-auto mt-10 mb-4  ">
                        <p className="text-sm">
                            <Link to="/power-ups" className="text-blue-600">
                                Power-Ups
                            </Link>{" "}
                            /{" "}
                            <Link
                                to="/power-ups/671a939ace67d0b570f20d3f"
                                className="text-blue-600"
                            >
                                Epics by Rogue Shadows
                            </Link>
                        </p>
                    </div>
                    <div className="w-70 flex flex-col sticky space-y-5 mb-10 mx-auto">

                        <img
                            src={img1}
                            alt=" "
                            className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
                        />

                        <div>
                            <p className="text-gray-700 font-medium flex items-center gap-1">
                                <img src={socket} className="w-4 h-4" />
                                Made by Rogue Shadows Coding
                            </p>

                            <div className="inline-flex items-center gap-1 bg-gray-300 text-sm px-3 rounded mt-2">
                                <img src={reporting} className="w-4 h-4" />
                                500+
                            </div>
                        </div>
                        <hr className="border-gray-300 w-full md:w-60" />

                        <div>
                            <h3 className="font-semibold mb-2">Categories</h3>

                            <div className="flex flex-wrap gap-2">
                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Board utilities
                                </span>

                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Analytics & reporting
                                </span>
                            </div>
                        </div>

                        <hr className="border-gray-300 w-full md:w-60" />

                        <div className="text-sm text-gray-600 space-y-2">
                            <p className="flex items-center gap-2 hover:underline cursor-pointer">
                                <img src={email} className="w-4 h-4" />
                                Contact support
                            </p>

                            <p className="flex items-center gap-2 hover:underline cursor-pointer">
                                <img src={info} className="w-4 h-4" />
                                Privacy policy
                            </p>
                        </div>

                        <hr className="border-gray-300 w-full md:w-60" />

                        <p className="text-m text-gray-600">
                            <img
                                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                                className="inline w-4 h-4 mr-1"
                            />
                            Epics by Rogue Shadows is in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex-1 pt-20">
                    <div className="max-w-xl">

                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[27px] font-bold ">
                                Epics by Rogue Shadows
                            </h1>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Add Power-Up
                            </button>
                        </div>

                        <p className="  leading-relaxed">
                            Trello is certainly a great free option for tracking your work, whether you're involved in a large-scale project with a vast team of experts or just working on your own solo venture. But do you ever feel like something is missing? Introducing <a href="https://docs.rogue-shadows-coding.com/trello-powerup-epics/docs" className="text-blue-500 underline">
                                Epics by Rogue Shadows Coding
                            </a>, a powerful and highly customizable all-in-one solution to bring your productivity to the next level and allow you to focus less on the management side and more on the actual work! This 100% free Power-Up turns your Trello board into an Agile board and brings all the features you would expect. Don't know what Agile is or maybe you don't use an Agile methodology yet? It doesn't matter: each individual feature of this board is easy to use, can be turned off entirely and this documentation, designed for both long-time Agile users as well as people with no Agile experience, explains everything in detail.
                        </p>
                        <div className='mt-8 '>
                            <div className="w-[600px] h-[380px] relative  rounded flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={gif} alt="GIF Preview" className="w-[600px] h-[360px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>This is a quick summary of all the features of this Power-Up:</p>
                        <div>
                            {data.map((item) => (
                                <ul className='list-disc ml-5'>
                                    <li> <span key={item.id} >
                                        {item.text}
                                    </span>
                                        <span className="text-blue-500 underline cursor-pointer">{item.link}</span>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div >
                    <div className='mt-15 '>
                        <div className="w-[560px] h-[400px] relative  rounded flex items-center justify-center  text-gray-400">

                            <img src={img2} alt="Chart" className="w-[560px] h-[460px] " />
                            <div className="absolute bottom-99 left-130 bg-gray-500 rounded-md p-1">
                                <AiOutlineInfoCircle className="text-white text-lg" />
                            </div>

                        </div>
                    </div>
                    <div className='mt-13 ml-4'>
                        <ul className='list-disc'>
                            <li>Create reports, like:</li>
                        </ul>
                        <ul className='list-disc ml-7'>
                            <li>Sprint summaries - see a direct comparison of your board between 2 moments in time (a sprint), highlighting the number of total cards, how many were closed, removed or remain open and the total number of points closed as well as which cards were overestimated and by how much;</li>
                            <li>Sprint reports - see the contribution of each individual member, the burndown chart (shows the ideal progression of the sprint vs the number of points closed for each day) and the backlog (the items still left to do at the end of the sprint);</li>
                            <li>Velocity reports - a bar chart showing the estimation vs the number of closed points over time, each entry representing a sprint;</li>
                        </ul>
                        <span className="text-blue-500 underline cursor-pointer ml-7">Jump to this feature</span>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <div className="relative w-full max-w-[5900px]">

                            <img
                                src={img3}
                                alt="Burndown chart"
                                className="w-full h-auto rounded"
                            />

                            <div className="absolute top-1 right-3 bg-gray-600 rounded-md p-1">
                                <AiOutlineInfoCircle className="text-white text-lg" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <ul className='list-disc ml-7'>
                            <li className='mt-8'>Customise which badges are shown, how and where for each feature or turn individual features off entirely; Only need a couple of things from this Power-Up? Then disable everything else & unclutter your interface.</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <p>If you have trouble using this powerup, head to the <span className="text-blue-500 underline cursor-pointer">troubleshooting section</span>.</p>
                        <p className='mt-4'>This Power-Up is and always will be free to use. However, you can choose to support the Rogue Shadows team on Patreon from the <span className="text-blue-500 underline cursor-pointer">documentation page</span>!</p>
                    </div>
                </div>
            </div>
            <div className='mt-15'>
                <AtlassianFooter />
            </div>
        </>
    )
}

export default EpicsByRogueShadows
