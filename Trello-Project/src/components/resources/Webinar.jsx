import Logo2 from "../../assets/Logo2.png";
import { IoPlayCircleSharp } from "react-icons/io5";
import Logo from "../../assets/Logo1.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";

let Webinar = () => {
  return (
    <>
    <NavBar/>
      <section className="bg-gradient-to-r from-pink-800 to-blue-900 text-white h-125">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center mb-23  flex flex-col items-center gap-1">
          <img className=" w-100" src={Logo2} alt="Logo" />

          {/* Title */}
          <h1 className="text-5xl font-bold mt-2 p-5 ">Trello Webinars</h1>

          {/* Subtitle */}
          <p className="text-lg max-w-2xl mx-auto ">
            Enjoy our free Trello webinars and become a productivity <br />{" "}
            professional.
          </p>
        </div>
        <section className=" h-100">
          <div className=" mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              On-Demand Webinars
            </h1>
          </div>
          <div className="px-[210px] py-10 grid grid-cols-3 mb-18 gap-5">
            <div className="px-4 py-3 rounded w-[340px] h-[96px] bg-[#CAC3EC] hover:bg-[#A497E3] flex items-center">
              <IoPlayCircleSharp className="w-54 h-54 text-white" />
              <span className="text-xl text-[#0747A6] font-semibold">Beyond The Boards: Trello's New views And Cards</span>
            </div>
            <div className="px-4 py-3 rounded w-[340px] h-[96px] bg-[#CAC3EC] hover:bg-[#A497E3] flex items-center">
              <IoPlayCircleSharp className="w-42 h-54 text-white" />
              <span className="text-xl text-[#0747A6] font-semibold">Remote Work Playbook for Team success</span>
            </div>
            <div className="px-4 py-3 rounded w-[340px] h-[96px] bg-[#CAC3EC] hover:bg-[#A497E3] flex items-center">
              <IoPlayCircleSharp className="w-60 h-54  text-white" />
              <span className="text-xl text-[#0747A6]  font-semibold">Transform the Way your Company Works With Trello Enterprise</span>
            </div>
            <div className="px-4 py-3 rounded w-[340px] h-[96px] bg-[#CAC3EC] hover:bg-[#A497E3] flex items-center">
              <IoPlayCircleSharp className="w-40 h-54  text-white" />
              <span className="text-xl text-[#0747A6] font-semibold">Trello Agile Series: The Sprint Board</span>
            </div>
            <div className="px-4 py-3 rounded w-[340px] h-[96px] bg-[#CAC3EC] hover:bg-[#A497E3] flex items-center">
              <IoPlayCircleSharp className="w-48 h-54  text-white" />
              <span className="text-xl text-[#0747A6] font-semibold">Trello Agile Serie Retrospectives And Roadmaps</span>
            </div>
          </div>
        </section>
          <img className=" w-150 ml-120" src={Logo} alt="Logo" />
      <UniversalFooter/>
      </section>
    </>
  );
};
export default Webinar;
