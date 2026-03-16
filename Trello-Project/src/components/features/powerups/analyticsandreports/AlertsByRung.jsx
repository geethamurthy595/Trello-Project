import React from "react";
import NavBar from "../../../NavBar";
import rung from "../../../../assets/productDesignPowerUps/rung.png";
import rocksumup from "../../../../assets/rocksumup.svg";
import boxsumup from "../../../../assets/boxsumup.svg";
import mailsumup from "../../../../assets/mailsumup.svg";
import locksumup from "../../../../assets/locksumup.svg";
import Pic from "../../../../assets/productDesignPowerUps/Pic.png";
import atlassianpic from "../../../../assets/atlassianpic.svg";

const AlertsByRung = () => {
  return (
    <>
      <NavBar />
      

      <div className="max-w-6xl mx-auto px-6 mt-10 ">
        <p className="text-black-500 text-l mb-6 -400">
          Power-Ups / <span className="text-black  ">Alerts by Rang</span>
        </p>
        <div className="flex gap-19">
          <div>
            <div className="w-70 h-70 justify-center items-center rounded-2xl flex">
              <img
                src={rung}
                alt="Alerts by Rang icon"
                className="w-90 h-90 object-contain"
              />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <img src={rocksumup} alt="rocksumup logo" className="h-6 w-6" />
              <p className="text-black-700">
                Made by Rung Developers Team
              </p>

              <div className="mb-6 flex items-center gap-2 bg-gray-100 px-3 py-1 rounded w-fit text-sm">
                <img src={boxsumup} alt="boxsumup lago" className="w-4 h-6" />
                10,000+
              </div>
            </div>

            <br />

            <hr className="border-gray-300 w-70"></hr>



            <div>
              <p className="font-semibold text-gray-700 text-2xl  mb-3">Categories</p>

              <div className="flex gap-3">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm border text-gray-600">
                  Communication & collabration
                </span>
              </div>
              <br />
              <div className="flex gap-3">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm border text-gray-600">
                  Analytics & reporting
                </span>
              </div>
              <br />
              <hr className="border-gray-300 w-70" />
            </div>

            <div className="space-y-3 text-black-600">
              <br />
              <p className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <img src={mailsumup} alt="" className="w-4 h-4" />
                Contact support
              </p>
              <br />
            </div>
            <hr className="border-gray-300 w-70" />

            <div className="my-6">
              <p className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                <img src={locksumup} alt="" className="w-4 h-8 mt-12 mb-9 " />
                <span className="text-xl">
                  Alerts by Rung may store <br />
                  personal data and is not in <br />
                   compliance with <br />
                  <span className="text-blue-600 underline cursor-pointer">
                    {" "}
                    Trello's data and privacy <br />
                    practices.
                  </span>
                  <br /> <br />
                  <hr className="border-gray-300 w-70 ml-[-25px]"></hr>
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-semibold">Alerts by Rung</h1>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-35">
                Add Power-Up
              </button>
            </div>

            <div>
              <p className="text-black-600 mt-5 leading-relaxed">
                Connect{" "}
                <a href="https://app.rung.com.br/login" className="text-blue-600 underline">
                  {" "}
                  Rang{" "}
                </a>
                with Trello to track your important alerts and notifications.
                The Rung <br />
                Power-Up allows you to:
              </p>
              <oll>
                <li>Install a Rung extension from Trello and link to a card</li>
                <li>Get real-time updates on your Rung alerts</li>
                <li>See your Rung alerts inside Trello and Rung</li>
              </oll>
            </div>
            <br />
            <div>
              <h1 className="font-semibold text-2xl ">Screenshort</h1>
              <div className="mt-8  rounded-xl overflow-hidden">
                <img src={Pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white  items-center w-full h-[100%] text-gray underline">
        <div className="flex gap-4 items-center justify-center pt-30">
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
        <div className=" bg-white pb-20 flex items-center gap-3 justify-center">
          <img src={atlassianpic} className="w-40 h-10" />
          <p>© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default AlertsByRung;
