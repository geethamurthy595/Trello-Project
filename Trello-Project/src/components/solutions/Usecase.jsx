import { Link } from "react-router-dom";
import usecase from "../../assets/Work Management Use Cases _ Trello/usecase.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";
let Usecase = () => {
  return (
    <>
      <NavBar />
      <section className="bg-gradient-to-b  from-blue-100 to-white ">
        <div className="flex items-center  justify-between  px-60 py-16">
          {/* Left Content */}
          <div className="">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              See Trello in action
            </h2>
            <p className="text-black-600 text-lg mr-30 ">
              Explore all the ways Trello can power team productivity.
            </p>
          </div>
          <img className="h-80 w-90 " src={usecase} alt="" />
        </div>

        <section className=" w-full h-[1364px] flex flex-col leading-[1.4rem]">
          <div className="container  w-[1140px] h-[1332px] ml-[165px] mr-[165px] pl-[1rem] pr-[1rem] flex flex-col">
            {/* 1st Row Card part */}
            <div className="first-row  flex  h-[252px] w-full">
              {/* 1st box  */}
              <Link to='/use-cases/brainstorming' className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <a className="" href="">
                    <div className="color  rounded-t-xl bg-[#02c5e3] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/x2AI5JZPTDVY7BxKbvClM/dc65b20bf0914caa72bcaf2ddbb05d9b/UseCasesBrainstorming.svg"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Brainstorming
                        </h1>
                        <p className="text-[1rem] ">
                          {" "}
                          Unleash your team’s creativity and <br />
                          keep ideas visible, collaborative, and <br />
                          actionable.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
              {/* 2nd Box  */}
              <div className="outer-box rounded-xl w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/crm">
                    <div className="color  rounded-t-xl bg-[#2784ff] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[1.9rem] w-[2.4rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/1bAaKPCUsUUfZ0ISolxQ6F/63ef93323e068efcbc2f9bedf1b10c4d/icon-object-id_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          CRM
                        </h1>
                        <p className="text-[1rem] ">
                          {" "}
                          Customize your CRM to help your sales team manage
                          their leads and accounts effectively.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 3rd Box */}
              <Link to="/use-cases/editorial-calendar" className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <a className="" href="">
                    <div className="color  rounded-t-xl bg-[#ffc401] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/2QxxxQ4YT8zNA3pGQafzpu/0f967273349c82832850d336f2d215e3/icon-content-calendar_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Editorial calendar
                        </h1>
                        <p className="text-[1rem] ">
                          Use Trello as your team’s go-to <br />
                          command center for content curation, <br />
                          revisions, handoff, and publishing.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
            </div>
            {/* 2nd Row Card part */}
            <Link to='/use-cases/finance' className="first-row  flex  h-[252px] w-full">
              {/* 1st box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <a className="" href="">
                    <div className="color  rounded-t-xl bg-[#ff7452] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5JFy2c5kuI8jj9GmFBBEaT/4d9eee16ae64e4b09f13295129f049e3/icon-object-building.svg"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Finance
                        </h1>
                        <p className="text-[1rem] ">
                          Trello streamlines finance team operations for more
                          transparency and less missed deadlines.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* 2nd Box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <a className="" href="">
                    <div className="color  rounded-t-xl bg-[#f99bdb] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/6P0DOJoAKSYvz3vabAo1WR/ccca7477e678b040a8cb5b655aea8d65/icon-object-heart_2x.png"
                          alt=""
                        />
                      </div>
                      <Link to="/use-cases/healthcare" className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Health and wellness
                        </h1>
                        <p className="text-[1rem] ">
                          Save time with one system for <br />
                          managing health & wellness clients, <br />
                          time-tracking, appointments, and more.
                        </p>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
              {/* 3rd Box */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/information-technology">
                    <div className="color  rounded-t-xl bg-[#8777d9] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/at3cM0tPkheev0zhkuzel/f62c4a4615f9a066b9a8bc81208cbd5a/icon-object-headset_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Information technology
                        </h1>
                        <p className="text-[1rem] ">
                          Get from “intake” to “done” in record time with a
                          flexible system for setting up queues and projects
                          your way.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            {/* 3rd Row Card part */}
            <div className="first-row  flex  h-[252px] w-full">
              {/* 1st box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/meetings">
                    <div className="color  rounded-t-xl bg-[#2784ff] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5j0J5BEzFktzLYnsszcJWc/be9270f9ea1e9bb3c69a799e54ef9fea/icon-object-megaphone_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Meetings
                        </h1>
                        <p className="text-[1rem] ">
                          {" "}
                          Empower your team meetings to be <br />
                          more productive, empowering, and <br />
                          dare we say—fun.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 2nd Box  */}
              <Link to="/use-cases/onboarding">
                <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                  <div className="shadow-div shadow-lg  h-full">
                    <a className="" href="">
                      <div className="color  rounded-t-xl bg-[#57d9a3] w-full h-[48px]"></div>
                      <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                        <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                          <img
                            className="h-[2rem] w-[2rem]"
                            src="https://images.ctfassets.net/rz1oowkt5gyp/5JwPiAFuOJCWEdYiTqlfs3/ca86f7f918d09a1782284ba4578a28ec/icon-object-leaf_2x.png"
                            alt=""
                          />
                        </div>
                        <div className="para pt-[16px]">
                          <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                            Onboarding
                          </h1>
                          <p className="text-[1rem] ">
                            {" "}
                            Onboarding to a new company or <br />
                            project is a snap with Trello’s visual <br />
                            layout of to-do’s, resources, and <br />
                            progress tracking.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* 3rd Box */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/process-tracking">
                    <div className="color  rounded-t-xl bg-[#2784ff] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/9LkrNI55Qg9MJxLwtN7Nl/a3b4b1ac27f28574c303e586c9a60f9c/icon-content-checkmark_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Process tracking
                        </h1>
                        <p className="text-[1rem] ">
                          View progress to completion at a <br />
                          glance and quickly identify blockers in <br />
                          any process.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* 4th Row Card part */}
            <div className="first-row  flex  h-[252px] w-full">
              {/* 1st box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/professional-services">
                    <div className="color  rounded-t-xl bg-[#8777d9] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5Krx8E3KHvsIF6jP3Gp7T3/7e92a8b998e22e1534c7d48d06201347/icon-object-briefcase_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <Link className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Professional services
                        </Link>
                        <p className="text-[1rem] ">
                          {" "}
                          Juggle multiple clients and competing priorities with
                          ease using Trello’s automation and advanced Timeline{" "}
                          <br />
                          view.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 2nd Box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/project-management">
                    <div className="color  rounded-t-xl bg-[#ff7452] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5Oc1c9iIDmXtUFHs0uWuLQ/cef21b3212ac080d9d0adad649dc31e9/icon-content-folder_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Project management
                        </h1>
                        <p className="text-[1rem] ">
                          Keep tasks in order, deadlines on track, and team
                          members aligned with Trello.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 3rd Box */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/project-status-dashboard">
                    <div className="color  rounded-t-xl bg-[#02c5e3] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/2duMI2H71euCPR17PtlDkA/90cfa5a543646d0a06da3d05cdcb5c8a/icon-object-radar_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Project status dashboard
                        </h1>
                        <p className="text-[1rem] ">
                          Get a customizable overview of all <br />
                          major work across your organization in <br />
                          one place.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* 5th Row Card part */}
            <div className="first-row  flex  h-[252px] w-full">
              {/* 1st box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/resource-hub">
                    <div className="color  rounded-t-xl bg-[#f99bdb] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5rv4eidOfMf1vdEzVpHNlA/bb102f380f9cfd3d1761858d8910963d/icon-object-book_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Resource hub
                        </h1>
                        <p className="text-[1rem] ">
                          Save time with a well-designed hub that helps teams
                          find information easily and quickly.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 2nd Box  */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/task-management">
                    <div className="color  rounded-t-xl bg-[#ffc300] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/4Mgm4SG6P6bD673rMtNpXP/9f8798510480b30d296550be747b9624/icon-content-checklists_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Task management
                        </h1>
                        <p className=" text-[1rem] ">
                          Use Trello to track, manage, complete,
                          <br /> and bring tasks together like the pieces <br />{" "}
                          of a puzzle, and make your team’s <br />
                          projects a cohesive success every time.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 3rd Box */}
              <div className="outer-box  w-[380px] h-[252px] p-[1rem]">
                <div className="shadow-div shadow-lg  h-full">
                  <Link className="" to="/use-cases/nonprofits">
                    <div className="color  rounded-t-xl bg-[#57d9a3] w-full h-[48px]"></div>
                    <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                      <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                        <img
                          className="h-[2rem] w-[2rem]"
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5JwPiAFuOJCWEdYiTqlfs3/ca86f7f918d09a1782284ba4578a28ec/icon-object-leaf_2x.png"
                          alt=""
                        />
                      </div>
                      <div className="para pt-[16px]">
                        <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                          Nonprofits
                        </h1>
                        <p className="text-[1rem] ">
                          {" "}
                          Manage programs, coordinate <br />
                          volunteers and create more social <br />
                          impact with Trello.
                        </p>
                        {/* <Link to="/power-ups/55a5d917446f517774210009/salesforce">Salesforce</Link> , 
                        <Link to="/power-ups/5bc65476d2e8ba6c7d87732c/xero-projects">Xero</Link> */}

                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <UniversalFooter />
    </>
  );
};
export default Usecase;
