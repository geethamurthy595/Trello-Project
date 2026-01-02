import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="outer-container  w-full h-[413px] box-border  flex">
      <div className="first-part  h-[413.78px] w-[972.5px] pt-[32px] pb-[76px] flex ">
        <div className="inner-first-part h-[316.19] w-[744px]  ml-[165px] mr-[47.5px] pl-[16px] pr-[32px] flex flex-col gap-[1rem]">
          <h3 className="text-[16px] h=[38px] mb-[8px] pb-[16px] border-b-1 font-semibold text-slate-600">
            Learn & connect
          </h3>
          <nav className="  flex flex-col justify-between h-[259px] w-[744px] mr-[-16px] ml-[-16px]">
            <div className="div flex flex-row text-slate-500">
              {" "}
              {/* Trello guide  */}
              <Link
                to="/guide"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-sky-50 ... "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Trello guide</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    Our easy to follow workflow guide will take you from project
                    set-up to Trello expert in no time.
                  </p>
                </div>
              </Link>
              {/* Remote work guide  */}
              <Link
                to="/remote-work"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-red-50 ... "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Remote work guide</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    The complete guide to setting up your team for remote work
                    success.
                  </p>
                </div>
              </Link>{" "}
              {/* Webinars  */}
              <Link
                to="/webinars"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-green-50 ... "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Webinars</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    Enjoy our free Trello webinars and become a productivity
                    proffesional.
                  </p>
                </div>
              </Link>{" "}
            </div>
            <div className="div flex flex-row text-slate-500">
              {" "}
              {/* Customer stories  */}
              <Link
                to="/customers"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-yellow-50 ... "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Customer stories</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    See how businesses have adopted Trello as a vital part of
                    their workflow.
                  </p>
                </div>
              </Link>
              {/* Developers  */}
              <Link
                to="/cloud/trello/"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-pink-50 ... "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Developers</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    The sky's the limit in what you can deliver to Trello users
                    in your Power-Up!
                  </p>
                </div>
              </Link>{" "}
              {/* Help resources  */}
              <Link
                to="/help"
                className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-violet-50 "
              >
                <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                  <p className="text-slate-700">Help resources</p>
                </div>
                <div className="inner-para  w-[216px] h-[48px]">
                  <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                    Need help? Articles and FAQ to get you unstuck.
                  </p>
                </div>
              </Link>{" "}
            </div>
          </nav> 
        </div>
      </div>
      {/* Second Section  */}
      <div className="second-part  h-[413px] w-[498px] pt-[32px] pb-[76px] bg-purple-50">
        <div className="second-inner  h-[402.78px] w-[285px] ml-[31.5px] mr-[181px]">
          {/* Our products in action  */}
          <h3 className="text-[16px] h=[38px] mb-[16px] pb-[16px] border-b-1 border-purple-800 font-semibold text-slate-600">
            Helping teams work better, together
          </h3>
          <div className="second-main flex flex-col  h-[357px] w-[285px] pt-[7px] pb-[76px] mr-[16px] mt-[16px] mb-[16px]">
            {/* Use Task Management  */}
            <a
              href=""
              className=" w-[317px] h-[114px] pt-[16px] pb-[16px] flex flex-col "
            >
              <div className="inner-para  w-[285px] h-[48px]">
                <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                  Discover Trello use cases, productivity tips, best practices
                  for team collaboration, and expert remote work advice.
                </p>
              </div>
            </a>
            <div
              className="Button w-[221.14px] h-[49.99px] border flex items-center justify-center border-purple-800 
            rounded bg-white hover:bg-purple-100"
            >
              <Link to="/blog/trello" >
                <span>Check out the Trello blog</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
