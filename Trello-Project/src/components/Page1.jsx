import img from "../assets/c8b7bafdbc02d4015366.svg";
import img2 from "../assets/3d32ed48b1f80bc04458.png";
import { useState } from "react";
import img3 from "../assets/a3546d949d9747ffd14b.png";
import img4 from "../assets/43521f3f3ebf2812bfec.png";
import img5 from "../assets/3232ff80fd630d774166.png";

const Page1 = () => {
  const [selected, setSelected] = useState("organize");
  return (
    <>
      <nav className="h-18 w-full bg-[#669DF1]">
        <div className="h-full flex items-center">
          <img src={img} alt="" className="pl-10" />
        </div>
      </nav>
      <div className="flex">
        <section className="border-1 border-black h-full w-1/2 bg-black">
          <div className=" w-[500px] p-[49.5px] ml-18">
            <h1 className="text-4xl text-[#bfc1c4] font-bold ">
              What brings you here <br /> today?
            </h1>
            <br />
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelected("organize")}
                className={`border-1 border-[#bfc1c4] p-4 flex gap-2 w-[350px] rounded-xl 
                                    ${
                                      selected === "organize"
                                        ? "bg-gray-800"
                                        : ""
                                    }`}
              >
                {selected === "organize" ? (
                  // ✅ SVG shown when button is selected
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fill="#0c66e4"
                      d="M14.5 8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0m-2.174-2.52-5 6a.75.75 0 0 1-1.152 0l-2.5-3 1.152-.96L6.75 9.828l4.424-5.308zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"
                    ></path>
                  </svg>
                ) : (
                  // 🟣 SVG shown before clicking
                  <svg
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5H7ZM7 6C5.89543 6 5 6.89543 5 8H19C19 6.89543 18.1046 6 17 6H7ZM5 11H19V19H5L5 11ZM3 11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11ZM15 15H9V14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14V15V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V15V14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14V15Z"
                      fill="#bf63f3"
                    ></path>
                  </svg>
                )}
                <h1 className="text-[#bfc1c4]">Organize ideas and work</h1>
              </button>
              <button
                className={`border-1 border-[#bfc1c4] p-4 flex gap-2 w-[350px] rounded-xl 
                                    ${
                                      selected === "track" ? "bg-gray-800" : ""
                                    }`}
                onClick={() => setSelected("track")}
              >
                {selected === "track" ? (
                  // ✅ SVG shown when button is selected
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fill="#0c66e4"
                      d="M14.5 8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0m-2.174-2.52-5 6a.75.75 0 0 1-1.152 0l-2.5-3 1.152-.96L6.75 9.828l4.424-5.308zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"
                    ></path>
                  </svg>
                ) :(
                <svg
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                    fill="#b3df72"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                    fill="#b3df72"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
                    fill="#b3df72"
                  ></path>
                </svg>)}
                <h1 className="text-[#bfc1c4]">
                  Track personal tasks and to-dos
                </h1>
              </button>
              <button
                className={`border-1 border-[#bfc1c4] p-4 flex gap-2 w-[350px] rounded-xl 
                                    ${
                                      selected === "team" ? "bg-gray-800" : ""
                                    }`}
                onClick={() => setSelected("team")}
              >
                <div className="h-[25px] w-[25px]">
                  {selected === "team" ? (
                  // ✅ SVG shown when button is selected
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fill="#0c66e4"
                      d="M14.5 8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0m-2.174-2.52-5 6a.75.75 0 0 1-1.152 0l-2.5-3 1.152-.96L6.75 9.828l4.424-5.308zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"
                    ></path>
                  </svg>
                ) :(
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"
                  >
                    <path
                      fill="#669df1"
                      fill-rule="evenodd"
                      d="M4 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m11-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0M3.75 9.5a2.25 2.25 0 0 0-2.25 2.25V13a.5.5 0 0 0 .5.5h4V15H2a2 2 0 0 1-2-2v-1.25A3.75 3.75 0 0 1 3.75 8h1.149a3.75 3.75 0 0 1 3.524 2.469l.564 1.55A2.25 2.25 0 0 0 11.1 13.5H14a.5.5 0 0 0 .5-.5v-1.25a2.25 2.25 0 0 0-2.25-2.25H12c-.775 0-1.258.06-1.531.112-.137.026-.22.05-.26.062l-.027.01.007-.003.01-.004.005-.003.003-.002h.002c.001-.001.001-.001-.334-.672l-.335-.671h.001l.002-.002.004-.001.008-.004.018-.008a1 1 0 0 1 .174-.066q.156-.053.44-.11C10.572 8.065 11.15 8 12 8h.25A3.75 3.75 0 0 1 16 11.75V13a2 2 0 0 1-2 2h-2.899a3.75 3.75 0 0 1-3.524-2.469l-.564-1.55A2.25 2.25 0 0 0 4.9 9.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>)}
                </div>
                <h1 className="text-[#bfc1c4]">Organize ideas and work</h1>
              </button>
              <button
                className={`border-1 border-[#bfc1c4] p-4 flex gap-2 w-[350px] rounded-xl 
                                    ${
                                      selected === "project"
                                        ? "bg-gray-800"
                                        : ""
                                    }`}
                onClick={() => setSelected("project")}
              >
                <div className="h-[25px] w-[25px]">
                    {selected === "project" ? (
                  // ✅ SVG shown when button is selected
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fill="#0c66e4"
                      d="M14.5 8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0m-2.174-2.52-5 6a.75.75 0 0 1-1.152 0l-2.5-3 1.152-.96L6.75 9.828l4.424-5.308zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"
                    ></path>
                  </svg>
                ) :(
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"
                  >
                    <path
                      fill="#eed12b"
                      d="M1 13V1h1.5v12a.5.5 0 0 0 .5.5h12V15H3a2 2 0 0 1-2-2"
                    ></path>
                    <path
                      fill="#eed12b"
                      d="M15 7.5h-1.5V5.56L9.78 9.28a.75.75 0 0 1-1.06 0L7.25 7.81l-2.22 2.22-1.06-1.06 2.75-2.75.056-.052a.75.75 0 0 1 1.004.052l1.47 1.47 3.19-3.19H10.5V3h3.75a.75.75 0 0 1 .75.75z"
                    ></path>
                  </svg>)}
                </div>
                <h1 className="text-[#bfc1c4]">Organize ideas and work</h1>
              </button>
            </div>
            <br />
            <div className="flex gap-12">
              <button className="bg-[#669df1] rounded-sm">
                <h1 className="p-2">Continue</h1>
              </button>
              <button className="text-white">Skip</button>
            </div>
          </div>
        </section>
        <section className="h-full w-1/2 bg-[#35243f]">
          {selected === "organize" && (
            <div className="p-[61.5px]">
              <img src={img} alt="" className="text-center mx-auto" />
              <img
                src={img2}
                alt=""
                className="h-[350px] w-[550px] ml-2 mt-6"
              />
            </div>
          )}

          {selected === "track" && (
            <div className="p-[61.5px]">
              <img src={img} alt="" className="text-center mx-auto" />
              <img
                src={img3}
                alt="track"
                className="h-[350px] w-[550px] ml-2 mt-6"
              />
            </div>
          )}
          {selected === "team" && (
            <div className="p-[61.5px]">
              <img src={img} alt="" className="text-center mx-auto" />
              <img
                src={img4}
                alt=""
                className="h-[350px] w-[550px] ml-2 mt-6"
              />
            </div>
          )}
          {selected === "project" && (
            <div className="p-[61.5px]">
              <img src={img} alt="" className="text-center mx-auto" />
              <img
                src={img5}
                alt=""
                className="h-[350px] w-[550px] ml-2 mt-6"
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
};
export default Page1;
