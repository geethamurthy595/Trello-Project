import React from "react";
// import CardSlider from "../Slider1/";
import CardSlider2 from "../standard/slider1/CardSlider2";


function Pws() {
  return (
    <section className="bg-blue-100  py-16 px-6 md:px-20  pr-20">
      <div className="h-[200px]">
        <h1 className="text-[36px] font-medium h-[96px] w-[538px]">Maximize productivity with Trello Standard</h1>
      </div>

      <div className="flex justify-between items-center  gap-10">
        <div className="space-y-10  w-[350px] h-[600px] text-[16px]">
          <div className="border-blue-900  shadow-2xl  bg-white p-5 rounded-[10px]">
            <h3 className=" mb-2 text-[20px] font-medium  ">
              Unlock full planner access
            </h3>
            <p className="text-[#091E42] text-normal text-[16px]">
              Drag and drop cards on a synced calendar that works with Google Calendar and Microsoft Outlook
            </p>
          </div>
          <div className="p-5  ">
            <h3 className="text-[20px] font-medium mb-2">
              More power at your fingertips
            </h3>
            <p className="text-[#091E42] text-normal text-[16px]">
              Cross off tasks more effectively with custom fields and advanced checklists.
            </p>
          </div>
          <div className="p-5   ">
            <h3 className="text-[20px] font-medium mb-2">
              More automation
            </h3>
            <p className="text-[#091E42] text-normal text-[16px]">
              Run commands upto 1000 times a month: Move cards,set dates, and much more,without even lifting a finger.
            </p>
          </div>
        </div>

        <div className=" h-[600px] w-[800px]    pr-[7%]">
     <CardSlider2/>
      </div>
        </div>
    </section>
  );
}

export default Pws;