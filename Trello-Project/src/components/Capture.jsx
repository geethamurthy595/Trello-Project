import Play from "../assets/play.svg";
import img from "../assets/phone.png";
import { useRef, useState } from "react";
import video from "../assets/videoplayback.mp4";
import { Link } from "react-router-dom";

let Capture = () => {
  let [videoPlay, setVideoPlay] = useState(false);
  let ref = useRef();

  const handlePlay = () => {
    setVideoPlay((prev) => !prev);
  }; 

  return (
    <>
      <section className="bg-gray-100  h-180 overflow-hidden my-1 gap-10">
        <div className="bg-sky-100 text-center py-2 text-sm text-gray-700 ">
          Accelerate your teams' work with{" "}
          <span className="font-medium">Atlassian Intelligence (AI)</span>{" "}
          features 🚀 now available for all Premium and Enterprise!{" "}
          <Link to="" className="text-blue-600 underline">
            Learn more
          </Link>
        </div>

        <section className="mt-10 max-w-7xl mx-auto px-6 py-10  flex items-center justify-between bg-gray-100">
          <div className="md:w-1/2 space-y-6 md:text-left">
            <h1 className="text-6xl md:text-5xl font-bold leading-tight w-130 text-slate-800">
              <br />
              <br />
              Capture, organize, and tackle your to-dos from anywhere.
            </h1>
            <p className="text-gray-600 text-lg text-[22px] font-normal">
              Escape the clutter and chaos—unleash your productivity <br /> with
              Trello.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-[700] px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <Link to="/signUp" className="px-6 py-3 bg-blue-600 text-white rounded-md my-3 hover:bg-blue-700 transition">
              Sign up – it’s free!
            </Link> 
            <p className="text-sm text-gray-500 text-[16px]">
              By entering my email, I acknowledge the &nbsp;
              <a
                href="#"
                className="text-blue-600 underline underline-offset-2"
              >
                Atlassian Privacy Policy
              </a>
              .
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer text-blue-600"
              onClick={handlePlay}
            >
              <span className="underline">Watch video</span>
              <span className="w-8 h-8 flex items-center justify-center border border-blue-600 rounded-full">
                ▶
              </span>
            </div>
          </div>
          <img
            className=" border-black-100 h-150 w-150"
            src={img}
            alt=""
          />
        </section>

        {/* Modal Image Popup */}
        {videoPlay && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <video
                Play
                muted
                controls
                src={video}
                ref={ref}
                alt="Popup"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg transition-transform transform scale-100"
              ></video>
              <button
                onClick={handlePlay}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Capture;
