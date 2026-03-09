import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
// import { CiMail } from 'react-icons/ci'
// import { MdOutlinePrivacyTip } from 'react-icons/md'
// import { AiTwotoneLock } from 'react-icons/ai'
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import logo from '../../../../assets/standardlogo1.png'

const data = [
    {
        id: 1,
        text: "Enable the power-up."
    },
    {
        id: 2,
        text: "Open the card in which you want to calculate the standard deviation."
    },
    {
        id: 3,
        text: "standard deviation calculator” in the Power-Ups list."
    },
    {
        id: 4,
        text: "Click on “Calculate in Card comment”."
    },
    {
        id: 5,
        text: "Enter comma-separated values."
    },
    {
        id: 6,
        text: "Click on “sample” and a pop-up will be shown, you can select “population” if you have a population data set."
    },
    {
        id: 7,
        text: "Hit the “calculate” button to calculate the result."
    },
    {
        id: 8,
        text: "Click on “add comment” button to save the result, the result will be added in the comment section."
    },
]
const StandardDeviation = () => {
    return (
        <>
            <NavBar />
            <div className='flex max-w-6xl mx-auto gap-12 px-6 py-1 items-start'>
                {/* Left */}
                <div className=" px-4 md:px-8 py-1 ">
                    <div className="max-w-xl mx-auto mt-10 mb-4  ">
                        <p className="text-sm">
                            <Link to="/power-ups" className="text-blue-600">
                                Power-Ups
                            </Link>{" "}
                            /{" "}
                            <Link
                                to="/power-ups/63c78bd6ac76bc03962833f9"
                                className="text-blue-600"
                            >
                                Standard Deviation
                            </Link>
                        </p>
                    </div>


                    <div className="w-70 flex flex-col space-y-6 mx-auto">

                        <img
                            src="ddd"
                            alt=" "
                            className="w-20 md:w-56 border"
                        />

                        <div>
                            <p className="text-gray-700 font-medium flex items-center gap-1">
                                <img src={rocket} className="w-4 h-4" />
                                Made by Enzipe Apps
                            </p>

                            <div className="inline-flex items-center gap-1 bg-gray-300 text-sm px-2  rounded mt-2">
                                <img src={reporting} classNameName="w-4 h-4" />
                                100+
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

                        <p className="text-sm text-gray-600">
                            <img
                                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                                className="inline w-4 h-4 mr-1"
                            />
                            Standard Deviation is in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex-1 pt-20">
                    <div className="max-w-3xl">
 
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[27px] font-bold ">
                                Standard Deviation
                            </h1>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Add Power-Up
                            </button>
                        </div>

                        <p className="  leading-relaxed">
                            The standard deviation calculator, this power-up is specially designed to
                            calculate the standard deviation of a sample or a population data set
                            within your card description. It gives an exact answer after calculation
                            using the basic formulas of standard deviation.
                        </p>
                        <p className=" mb-8">
                            Power Up Developed by{" "}
                            <span className="text-blue-400 underline cursor-pointer">
                                Standard Deviation Calculator
                            </span>
                        </p>

                        <h2 className="text-3xl font-semibold mb-4">
                            How to use the standard deviation power-up#
                        </h2>

                        <p className=" mb-8">
                            In the below GIF, the procedure of calculating the standard deviation
                            using this power-up is described briefly.
                        </p>
                        <div className=''>
                            <div className="w-[250px] h-[200px] relative left-55 mb-10 outline-1 rounded flex items-center justify-center  text-gray-400">
                                <div className="absolute top-3 right-3 bg-gray-500 rounded-md p-1">
                                    <AiOutlineInfoCircle className="text-white text-lg" />
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                     <div className=" bg-black rounded">
                                    <img src={logo} alt="GIF Preview" className="w-7 " />
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Preview unavailable
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="max-w-3xl mb-10">
                        {data.map((item) => (
                            <p key={item.id} className="text-gray-700">
                                - {item.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <AtlassianFooter />
        </>
    )
}

export default StandardDeviation
