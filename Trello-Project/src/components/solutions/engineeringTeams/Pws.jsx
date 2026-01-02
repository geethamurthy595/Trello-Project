import React from "react";
import CardSlider2 from "./Slider1/SliderContent";

function Pws() {
  return (
    <section className="bg-blue-100  py-16 px-6 md:px-20 mb-5 pr-5 pl-20">
      <div className="text-center  mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D] mb-4">
          Your Team’s Workspace For Engineering Excellence
        </h2>
        <p className="text-[#091E42] text-bold mb-4">
          Whether the team is planning a new product roadmap, running sprint
          retrospectives, collaborating on bug fixes, or celebrating a go-live,
          there’s a Trello board to help with every aspect of an engineer’s day
          (or all-nighter).
        </p>
        <a href="#" className="text-blue-600 text-bold hover:underline">
          Explore all engineering templates
        </a>
      </div>

      <div className="flex justify-between items-center gap-10">
        <div className="space-y-10 w-[600px] h-[600px] text-[16px]">
          <div className="p-5">
            <h3 className="text-blue-700 font-bold mb-2 uppercase underline">
              Sprint Retrospective
            </h3>
            <p className="text-[#091E42] text-bold">
              Celebrate what went well, what needs improvement, and any action
              items required to improve communication and collaboration with
              this template.
            </p>
          </div>
          <div className="p-5">
            <h3 className="text-blue-700 font-bold mb-2 uppercase underline">
              Site Reliability
            </h3>
            <p className="text-[#091E42] text-bold">
              Manage and maintain system-related improvements, architecture, and
              development with this template.
            </p>
          </div>
          <div className="border-blue-900 shadow-2xl bg-white p-5 rounded-[10px]">
            <h3 className="text-blue-900 font-bold mb-2 uppercase underline">
              Software Development
            </h3>
            <p className="text-[#091E42] text-bold">
              A one-stop-shop for software development teams looking to
              organize, manage tasks, and manage deadlines and features for
              their IT development projects.
            </p>
          </div>
        </div>

        <div className="h-[600px] w-[800px] rounded-lg shadow-lg pr-[7%]">
          <CardSlider2 />
        </div>
      </div>
    </section>
  );
}

export default Pws;
