




import React, { useState } from "react";
import CardSlider2 from "./Slider1/CardSlider2";

function Pws() {
  const [selected, setSelected] = useState(0); // default selected div

  const getDivClass = (index) => {

    return selected === index ? "border-blue-900 shadow-2xl bg-white p-5" : "";
  };

  return (
    <section className="bg-gradient-to-b from-white-800 to-gray-100 py-16 px-6 md:px-20 mb-5 pr-5 pl-30 ">
 
      <div className="text-center mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D] mb-4">
          Your Product Management Team’s Workspace
        </h2>
        <p className="text-[#091E42] font-medium text-medium  text-[20px]">
          Set your product management team on the right track to achieve   successful
        </p>
          <p className="text-[#091E42] font-medium  mb-4 text-[20px] ">
          product launches by harnessing the power of Trello templates.
        </p>
        <a href="#" className="text-blue-600 font-medium text-[20px] underline">
          Explore all product management templates
        </a>
      </div>

  
      <div className="flex justify-between items-center gap-10">
      
        <div className="space-y-10 w-[600px] h-[600px] text-[16px]">
          <div
            onClick={() => setSelected(0)}
            className={`p-5 ${getDivClass(0)}`}
          >
            <h3 className="text-blue-900 font-bold mb-2 uppercase underline">
              Product Roadmap
            </h3>
            <p className="text-[#091E42] font-normal">
              Easily track product development, feature requests, and
              collaborate on development processes.
            </p>
          </div>

          <div
            onClick={() => setSelected(1)}
            className={`p-5 ${getDivClass(1)}`}
          >
            <h3 className="text-blue-700 font-bold mb-2 uppercase underline">
              Agile Sprint
            </h3>
            <p className="text-[#091E42] font-normal">
              Keep code, specs, and plans organized and handy, collaborate with
              engineers, product managers, and scrum masters, and easily share
              progress and future plans.
            </p>
          </div>

          <div
            onClick={() => setSelected(2)}
            className={`p-5 ${getDivClass(2)}`}
          >
            <h3 className="text-blue-700 font-bold mb-2 uppercase underline">
              Feature Requests
            </h3>
            <p className="text-[#091E42] font-normal">
              Track customer and client feedback in a central and visible space,
              enabling your sales, support, and product team to better
              collaborate on bug fixes, upgrades, and updates.
            </p>
          </div>
        </div>

      
        <div className="h-[600px] w-[800px] rounded-lg pr-[7%]">
          <CardSlider2 activeIndex={selected} />
        </div>
      </div>
    </section>
  );
}

export default Pws;
