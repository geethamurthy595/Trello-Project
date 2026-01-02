
import React, { useState } from "react";
import CardSlider2 from "./Slider1/CardSlider2";

function Pws() {
  const [selected, setSelected] = useState(0); // default selected div

  const getDivClass = (index) => {

    return selected === index ? "border-blue-900 shadow-2xl bg-white p-5" : "";
  };

  return (
    <section className="bg-gradient-to-b from-white-800 to-gray-100 py-16  md:px-20 mb-5  pl-30 ">
 
     <div className="text-center  mx-auto mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D] mb-4">
            Your Remote Team’s Digital Workspace
           </h2>
           <p className="text-[#091E42] font-normal  text-[20px]">
           The sky’s the limit when your team is supported to work virtually. These
           </p>
         <p className="text-[#091E42] font-normal  text-[20px]">
           Trello board templates will help everyone transform remote work woes into
           </p>
          <p className="text-[#091E42] font-normal  text-[20px]">
           wins and set everyone up for success from anywhere, anytime. Get inspired,
           </p>
          <p className="text-[#091E42] font-normal mb-4 text-[20px]">
           copy the boards, and make them your own!
           </p>
           <a href="#" className="text-blue-600 text-bold underline text-[20px] ">
             Explore all product management templates
           </a>
         </div>

  
      <div className="flex justify-between items-center gap-10 pl-[50px]">
      
        <div className="space-y-10 w-[600px] h-[600px] text-[16px]">
          <div
            onClick={() => setSelected(0)}
            className={`p-5 ${getDivClass(0)}`}
          >
            <h3 className="text-blue-900 font-bold mb-2 uppercase underline">
                      REMOTE TEAM HUB
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
  <h3 className="text-blue-900 font-bold mb-2 uppercase underline ">
                 REMOTE TEAM HUB
               </h3>
                  <p className="text-[#091E42] text-bold">
            Enjoy more structured agendas,an open
            meeting structure, celebrate successes,
            and remove roadblocks with this easy-to- 
            use board.
             </p>
             </div>

          <div
            onClick={() => setSelected(2)}
            className={`p-5 ${getDivClass(2)}`}
          >
                        <h3 className="text-blue-700 font-bold mb-2 uppercase underline">
                REMOTE TEAM MEETINGS
             </h3>
                        <p className="text-[#091E42] text-bold">
              Bring your team together virtually by creating shared experiences through 
              remote activities.
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