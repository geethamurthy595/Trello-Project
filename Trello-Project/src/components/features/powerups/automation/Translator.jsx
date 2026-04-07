import React from "react";
import img1 from "../../../../assets/timetrackerimg1.png";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import translator from "../../../../assets/translator_img.png";
import plug from "../../../../assets/plug.png";
import img5 from "../../../../assets/timetrackerimg4.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdImage } from "react-icons/md";

import translator_gif1 from "../../../../assets/Translator-trello.gif"
import translator_gif2 from "../../../../assets/translator_gif2.png"

const features = [
  {
    id: 1,
    title: "Translate Cards",
    description: "Effortlessly translate individual card content into your desired language."
  },
  {
    id: 2,
    title: "Translate Boards",
    description: "Translate entire boards to facilitate understanding and collaboration across diverse teams."
  },
  {
    id: 3,
    title: "Translate Checklists",
    description: "Ensure clarity by translating checklist items for all team members."
  },
  {
    id: 4,
    title: "Translate Labels",
    description: "Enhance organization and clarity by translating labels attached to cards."
  }
];

const Translator = () => {
  return (
    <>
      <NavBar />

      <div className="ml-50 text-lg mt-10 sticky top-20">
        <p>
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>{" "}
          /{" "}
          <Link className="hover:underline">
            Translator
          </Link>
        </p>
      </div>

      <section className="flex items-stretch mt-5 w-[70%] m-auto gap-20">

    
        <div className="flex w-90 justify-start sticky top-35 self-start">
          <div className="rounded-lg text-center">

            <img src={translator} alt="" className="block h-65 w-65" />

            <p className="mt-2 flex items-center gap-3 text-gray-800">
              <img className="w-4 h-4" src={plug} alt="" />
              Made by Oussama Touzni
            </p>

            <div className="bg-gray-100 w-26 h-7 flex justify-center items-center gap-3 mt-2 p-4">
              <img className="w-5 h-5" src={img5} alt="" />
              <p>1,000+</p>
            </div>

            <br />
            <hr className="border-gray-300" />
            <br />

            <h1 className="text-xl text-gray-700 font-bold flex justify-start">
              Categories
            </h1>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm p-2 border border-gray-200 w-[250px] rounded hover:bg-gray-100"
              >
                Communication & Collaboration
              </a>

              <a
                href="#"
                className="text-sm p-2 border w-[200px] border-gray-200 rounded hover:bg-gray-100"
              >
               Automation
              </a>
            </div>

            <br />
            <hr className="border-gray-300" />

            <div className="flex items-center mt-3">
              <CiMail />
              <a href="#" className="text-md px-2 hover:underline hover:text-blue-600">
                Contact Support
              </a>
            </div>

            <div className="flex items-center mt-2">
              <MdOutlinePrivacyTip />
              <a href="#" className="text-md px-2 hover:underline hover:text-blue-600">
                Privacy Policy
              </a>
            </div>

            <br />
            <hr className="border-gray-300" />

            <div className="mt-4 flex items-start gap-2 text-[16px] text-left text-gray-500 w-55">
              <AiTwotoneLock className="w-4 h-4 mt-[2px] text-gray-400 flex-shrink-0" />
              <p className="leading-5">
                Translator is in compliance with{" "}
                <a href="#" className="text-blue-600 hover:underline font-normal">
                  Trello's data and privacy practices
                </a>.
              </p>
            </div>

          </div>
        </div>

      
        <div className="w-full md:w-[70%] mb-6 h-full">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
            Translator
            </h1>

            <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add Power-Up
            </button>
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Translator Power-Up
            </h1>

          <p className="text-gray-700 mt-5 text-justify">
           Unlock seamless translation capabilities within your Trello workspace with the Translator Power-Up. Integrated with DeepL API, Translator facilitates smooth communication across cards, boards, checklists, and labels, breaking down language barriers effortlessly.
          </p>

         <div className="relative ">
    <div className="absolute top-2 right-2 bg-white text-black rounded-xl p-2">
        <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
    <img src={translator_gif1} alt="" className="rounded-xl h-full w-full mt-5" />
</div>
         
    <h1 className="text-3xl font-bold mt-5">
            Free 7-Day Trial:
            </h1>
            <p className="text-gray-700 mt-5 text-justify">
                Experience the full potential of Translator with our complimentary 7-day trial. Try it out and witness the transformation in your Trello workflow before committing to a subscription.
            </p>

            <h1 className="text-3xl font-bold mt-5">
            Key Features:
            </h1>
            <p className="mt-5">Translator offers essential features to enhance your Trello experience:</p>

<ul className="list-disc list-inside text-gray-700 mt-2 text-justify">
  {features.map((item) => (
    <li key={item.id} className="mb-2">
      <strong>{item.title}:</strong> {item.description}
    </li>
  ))}
</ul>

   <div className="relative ">
    <div className="absolute top-2 right-2 bg-white text-black rounded-xl p-2">
        <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
    <img src={translator_gif2} alt="" className="rounded-xl h-full w-full mt-5" />
</div>

 <h1 className="text-3xl font-bold mt-5">
        Subscription & Pricing:
            </h1>
            <p className="text-gray-700 mt-5 text-justify">
                After your free trial, continue enjoying Translator for just $5 per month. This subscription grants you uninterrupted access to all features, ensuring your Trello workspace remains a hub of seamless communication and collaboration.
            </p>
             <h1 className="text-3xl font-bold mt-5">
              Support:
            </h1>

            <Link to="/contact-support" className="text-blue-600 hover:underline mt-2 block text-md mt-3">
               How to configure and use Translator 
            </Link>
            <p className="text-gray-700 mt-5 text-justify">
                Need assistance? Contact our support team at contact@it-tun.com for prompt and helpful assistance.
            </p>

            <p className="text-gray-700 mt-5 text-justify">Elevate your collaboration within Trello with Translator Power-Up from IT-TUN. Start your free trial today! 
            </p>
        </div>
      </section>

      <div className="mt-20">
        <AtlassianFooter />
      </div>
    </>
  );
};

export default Translator;








