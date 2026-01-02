
import { useState } from "react";
import slide2 from "../../../assets/RemoteTeamMeetings.webp";
import slide1 from "../../../assets/TeamManagement-ProjectManagement.webp";
import slide3 from "../../../assets/TeamManagement-TeamOrganizationCentral.webp";


const Workspace = () => {
      const [slide, setSlide] = useState(slide1);

  // Helper to check active slide
  const isActive = (s) => slide === s;

  return (
    <>
      <div className="mx-50 pt-10 text-center">
        <h1 className="text-[36px] font-medium">Workspaces For Teams Of All Types</h1>
        <br />
        <p className="text-[20px] font-normal w-175 mx-auto">
          Are your team workflows efficient? Could your digital organization use some love? How often do you find yourself micromanaging your employees? Copy these boards and make them your own to start collaborating, tracking, and organizing more effectively with your team.


        </p>
        <br />
        <p className="text-[20px] font-normal text-[#0052CC] underline">Explore all team management templates</p>
      </div>

      <div className="flex items-start justify-center relative px-50 py-20">
        {/* Slide Dots */}
        <div className="flex gap-1 absolute right-50 top-10">
          {[slide1, slide2, slide3].map((s, i) => (
            <p
              key={i}
              onClick={() => setSlide(s)}
              className={`cursor-pointer transition-all h-2 rounded-full ${
                isActive(s) ? "w-18 bg-gray-500" : "w-2 bg-black"
              }`}
            ></p>
          ))}
        </div>

        {/* Left Section */}
        <div className="w-1/3 pr-10 cursor-pointer">
          {/* Slide 1 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide1) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide1)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide1) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                Project Management
              </h2>
              <p className="text-gray-600 mt-2">
                 Big dreams turn into bigger results with a solid project plan. Use this basic structure to build your team's ideal workflow, for projects big or small.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide2) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide2)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide2) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                Team Meeting
              </h2>
              <p className="text-gray-600 mt-2">
                Use this board to end the “circle back” cycle! Make the most of valuable meeting minutes with a clearer agenda, attached decks, previous meeting history, action items, and more.


              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide3) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide3)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide3) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                Team Organization Central
              </h2>
              <p className="text-gray-600 mt-2">
                Use this Trello board to store all the essential team resources including schedules, FAQs, project summaries, updates, and all of your yearly accomplishments.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-[800px] h-[500px] shadow overflow-hidden rounded-lg">
          <img src={slide} alt="Slide" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  )
}

export default Workspace
