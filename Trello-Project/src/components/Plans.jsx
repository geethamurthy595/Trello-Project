import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="plans w-full  h-[358px] flex ">
      <div className="first-section  h-[358px] w-[973px] pt-[32px] pb-[76px]">
        <div className="first-inner-section  h-[250px] w-[760px] pl-[16px] pr-[32px] ml-[165px] mr-[47.5px]">
          <nav className=" w-[744px] h-[114px]  mr-[16px] ml-[-16px] flex flex-col ">
            <div className="div flex flex-row text-slate-500">
                {/* Standard Section  */}
            <Link
              to="/standard"
              className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-sky-50 ... "
            >
              <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                <div className="inner-header  w-[27px] h-[24px] pt-[2.24px] pr-[11.36px] pl-[2.4px]">
                  <svg
                    className="h-[19px] w-[14px] text-sky-300"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 46 65"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M39.49 38c8.493-8.493 8.493-22.263 0-30.757-8.908-8.907-23.35-8.907-32.257 0-.244.244-.482.494-.715.75-8.08 8.887-7.424 22.642 1.463 30.722l3.995 3.632v7.384h22.77v-7.384l3.995-3.632c.255-.232.505-.47.749-.714ZM25.483 10.01a2.577 2.577 0 0 0-2.577-2.576c-8.38 0-15.173 6.793-15.173 15.173v.573l.003.12a2.577 2.577 0 0 0 5.15-.12v-.573l.002-.188c.1-5.447 4.547-9.832 10.018-9.832a2.577 2.577 0 0 0 2.577-2.577Z"
                    ></path>
                    <path
                      d="M11.976 54.884v1.995a7.683 7.683 0 0 0 7.682 7.683h7.405a7.683 7.683 0 0 0 7.682-7.683v-1.995h-22.77Z"
                      opacity=".5"
                    ></path>
                  </svg>
                </div>
                <p className="text-slate-700">Standard</p>
              </div>
              <div className="inner-para  w-[216px] h-[32px]">
                <p className="m-[0px] text-[0.75rem] leading-[1rem] ">
                  For teams that need to manage more work and scale
                  collaboration.
                </p>
              </div>
            </Link>
            {/* Premium Section  */}
            <Link
              to="/premium"
              className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-pink-50 ... "
            >
              <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                <div className="inner-header  w-[34px] h-[24px] pt-[2.24px] pr-[11.36px] pl-[2.4px]">
                  <svg
                    className="h-[20px] w-[19px] text-pink-300"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 65 63"
                  >
                    <path d="m26.998 4.473-6.401 12.992-14.313 2.083a6.435 6.435 0 0 0-3.685 1.881l-.14.149a6.458 6.458 0 0 0 .257 8.971l10.357 10.113-2.445 14.28a6.46 6.46 0 0 0 .647 4.092l.092.17a6.433 6.433 0 0 0 8.602 2.537L32.771 55l12.802 6.742a6.429 6.429 0 0 0 4.084.648l.187-.035a6.45 6.45 0 0 0 5.07-7.412l-2.445-14.28L62.826 30.55a6.453 6.453 0 0 0 1.878-3.69l.024-.186c.401-3.454-2.013-6.621-5.47-7.125l-14.313-2.083-6.4-12.992a6.433 6.433 0 0 0-11.547 0Z"></path>
                  </svg>
                </div>
                <p className="text-slate-700">Premium</p>
              </div>
              <div className="inner-para  w-[216px] h-[32px]">
                <p className="m-[0px] text-[0.75rem] leading-[1rem] ">
                  Best for teams up to 100 that need to track multiple projects
                  and visualize work in a variety of ways.
                </p>
              </div>
            </Link>
            {/* Enterprise section  */}
            <Link
              to="/enterprise"
              className=" w-[248px] h-[114px] p-[16px] flex flex-col hover:bg-blue-50 ... "
            >
              <div className=" heading w-[216px] h-[34px] mb-[9.6px] flex items-center">
                <div className="inner-header  w-[43px] h-[24px] pt-[2.24px] pr-[11.36px] pl-[2.4px]">
                  <svg
                    className="h-[19px] w-[30px] text-sky-500"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 65 42"
                  >
                    <path
                      d="M38.993 15.129a2.863 2.863 0 0 1 2.229 2.787 2.866 2.866 0 0 1-2.873 2.858 2.866 2.866 0 0 1-2.873-2.858c0-1.359.952-2.496 2.229-2.787h-10.61a2.865 2.865 0 0 1 2.636 2.849 2.866 2.866 0 0 1-2.873 2.859 2.866 2.866 0 0 1-2.873-2.859c0-1.5 1.16-2.73 2.636-2.85H10.243c-2.539 0-4.9 2.049-4.9 4.575V39.45H60.19V19.703c0-2.526-2.058-4.574-4.596-4.574H38.993Z"
                      opacity=".5"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M16.707 37.138V4.765c0-2.526 2.058-4.574 4.597-4.574h22.599c2.538 0 4.596 2.048 4.596 4.574v32.373h14.173a1.932 1.932 0 0 1 0 3.864H2.535a1.932 1.932 0 1 1 0-3.864h14.172Zm12.258 0v-5.974c0-1.949 1.588-3.53 3.546-3.53a3.538 3.538 0 0 1 3.547 3.53v5.974h-7.093Zm.766-19.16a2.866 2.866 0 0 0-2.873-2.858 2.866 2.866 0 0 0-2.873 2.859 2.866 2.866 0 0 0 2.873 2.858 2.866 2.866 0 0 0 2.873-2.858Zm8.618-2.92a2.866 2.866 0 0 1 2.873 2.858 2.866 2.866 0 0 1-2.873 2.859 2.866 2.866 0 0 1-2.873-2.859 2.866 2.866 0 0 1 2.873-2.859Zm-8.618-6.29a2.866 2.866 0 0 0-2.873-2.858 2.866 2.866 0 0 0-2.873 2.859 2.866 2.866 0 0 0 2.873 2.858A2.866 2.866 0 0 0 29.73 8.77Zm8.618-2.858a2.866 2.866 0 0 1 2.873 2.859 2.866 2.866 0 0 1-2.873 2.858 2.866 2.866 0 0 1-2.873-2.858A2.866 2.866 0 0 1 38.35 5.91Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-slate-700">Enterprise</p>
              </div>
              <div className="inner-para  w-[216px] h-[32px]">
                <p className="m-[0px] text-[0.75rem] leading-[1rem] ">
                  Everything your enterprise teams and admins need to manage
                  projects.
                </p>
              </div>
            </Link>
            </div>
            <div className="second-div  w-[600px] h-[120px] p-[24px] flex items-center bg-yellow-50 mt-[15px]">
                <div className="inner-first-sec  w-[354px] h-[72px] flex flex-col text-slate-500">
                    <div className="inner-header-part   w-[354px] h-[32px] mb-[4px] flex items-center">
                        <div className="svg-logo  h-[28px] w-[32px] ">
                            <svg className="w-[13px] h-[19px] ml-[6.39px] mr-[12.8px] text-yellow-400" fill="currentColor" aria-hidden="true" viewBox="0 0 44 65"><path d="M26.866 1.129c1.15-1.562 3.624-.556 3.357 1.365l-5.216 37.56H1.91c-1.533 0-2.414-1.743-1.506-2.977L26.866 1.129Z"></path><path d="M41.456 24.668c1.533 0 2.414 1.743 1.506 2.977L16.5 63.594c-1.15 1.562-3.624.555-3.357-1.366l5.217-37.56h23.096Z"></path></svg>
                        </div>
                        <div className="free-plan  h-[20px] w-[322px] mb-[8px]">
                            <p className="pr-[4.8px]">Free plan</p>
                        </div>
                    </div>
                    <div className="para w-[354px] h-[16px] mb-[16px] ">
                        <p className="m-[0px] text-[0.75rem] leading-[1rem] ">For individuals or small teams looking to keep work organized.</p>
                    </div>
                </div>
                <div className="take-button   w-[182px] h-[50px] ">
                    <Link to="/tour"  className="border border-yellow-600 w-[182px] h-[50px] flex it
                    ems-center justify-center pt-[11.2px] pb-[12.8px] pl-[16px]
                     pr-[16px] rounded-[4.8px] bg-white hover:bg-yellow-100">Take a tour of Trello</Link>
                </div>

            </div>
          </nav>
        </div>
      </div>
      {/* second section  */}
       <div className="second-part  h-[358px] w-[498px] pt-[32px] pb-[76px] bg-purple-50 ]">
        <div className="second-inner  h-[402.78px] w-[285px] ml-[31.5px] mr-[181px]">
           {/* Compare plans & pricing */}
          <h3 className="text-[16px] h=[38px] mb-[16px] pb-[16px] border-b-1 border-purple-800 font-semibold text-slate-600">
            Compare plans & pricing
          </h3>
          <div className="second-main flex flex-col  h-[357px] w-[285px] pt-[7px] pb-[76px] mr-[16px] mt-[16px] mb-[16px]">
            
            <a
              href=""
              className=" w-[317px] h-[114px] pt-[16px] pb-[16px] flex flex-col "
            >
              <div className="inner-para  w-[285px] h-[48px]">
                <p className="m-[0px] text-[0.75rem] leading-[1rem]">
                  Whether you’re a team of 2 or 2,000, Trello’s flexible pricing model means you only pay for what you need.
                </p>
              </div>
            </a>
            <Link to="/pricing" className="Button w-[221.14px] h-[49.99px] border flex items-center justify-center border-purple-800 rounded bg-white hover:bg-purple-100">
                <a href=""><span>View Trello Pricing</span></a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    
  );
};
export default Plans;