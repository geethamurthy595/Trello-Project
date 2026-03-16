import rocksumup from "../../../../assets/rocksumup.svg";
import sigmasumup from "../../../../assets/sigmasumup.png";
import sumupdemo from "../../../../assets/sumup-demo.gif";
import boxsumup from "../../../../assets/boxsumup.svg";
import mailsumup from "../../../../assets/mailsumup.svg";
import isumup from "../../../../assets/isumup.svg";
import locksumup from "../../../../assets/locksumup.svg";
import iblsumup from "../../../../assets/iblsumup.svg";
import atlassianpic from "../../../../assets/atlassianpic.svg";
import NavBar from "../../../NavBar";

const SumUp = () => {
  return (
    <>
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <p className="text-black-500 text-l mb-6">
          Power-Ups / <span className="text-black">SumUp</span>
        </p>

        <div className="flex gap-19">
          <div>
            <div className="w-70 h-70 justify-center items-center rounded-2xl flex ">
              <img
                src={sigmasumup}
                alt="sumup icon"
                className="w-90 h-90 object-contain"
              />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <img src={rocksumup} alt="" className="w-6 h-6" />
              <p className="text-black-700">
                Made by Blue Anvil Software Pty Ltd
              </p>

              <div className="mb-6 flex items-center gap-2 bg-gray-100 px-3 py-1 rounded w-fit text-sm">
                <img src={boxsumup} alt="" className="w-4 h-6" />
                10,000+
              </div>
            </div>
            <br />

            <hr className="border-gray-300 w-70"></hr>

            <div>
              <p className="font-semibold mb-3">Categories</p>
              <div className="flex gap-3">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Board utilities
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm ">
                  Analytics & reporting
                </span>
              </div>{" "}
              <br />
              <hr className="border-gray-300 w-70"></hr>
            </div>

            <div className="space-y-3 text-black-600 ">
              <br />
              <p className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <img src={mailsumup} alt="" className="w-4 h-4" />
                Contact support
              </p>

              <p className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <img src={isumup} alt="" className="w-4 h-4" />
                Privacy policy
              </p>
              <br />
            </div>
            <hr className="border-gray-300 w-70"></hr>
            <div className=" my-6">
              <p className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                <img src={locksumup} alt="" className="w-4 h-4 mt-1 mb-9" />
                <span className="text-xl">
                  SumUp is in compliance with <br />
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
              <div>
                <h1 className="text-3xl font-semibold">SumUp</h1>

                <p className="text-2xl text-gray-700 mt-3 max-w-md font-semibold ">
                  Add values to cards and show the sum at the top of each list
                </p>
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-35">
                Add Power-Up
              </button>
            </div>

            <p className="text-black-600 mt-5 leading-relaxed">
              This Power-Up lets you easily capture sale amounts, estimate
              hours, or any other metric you can think of, and automatically
              updates the total at the top of each list.
            </p>

            <p className="text-black-600 mt-3">
              <span className="italic">SumUp</span> is a <b>FREE</b> Power-Up
              that allows one value to be summed. Need more values? Upgrade to
              <span className="italic"> SumUp Pro</span> for a small annual fee
              to add up to six sum values.
            </p>

            <div className="mt-8  rounded-xl overflow-hidden ">
              <img
                src={sumupdemo}
                alt="sumup demo"
                className="w-150 rounded-lg "
              />
              <img
                src={iblsumup}
                alt="icon"
                className="absolute top-2 right-3 w-4 h-4 bg-white"
              />
            </div>

            <div className="border-t border-gray-400 my-8 w-160 ml-[-30px]">
              <p className="mt-10 text-left text-gray-700 italic ">
                SumUp is brought to you by Blue Anvil Software.
              </p>
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

export default SumUp;
