import React from "react";
import NavBar from "../../../NavBar";
import confluence from "../../../../assets/confluence-logo-512x512.png";
import cloud from "../../../../assets/conflucloud.svg";
import celloss from "../../../../assets/cello-screenshot-2.png";
import atlansian from "../../../../assets/atlansian.svg";
import AtlassianFooter from "../../taskManagement/AtlassianFooter";

const Confluencecloud = () => {
  return (
    <>
      <NavBar />
      <section className="min-h-scree w-full p-10">
        <section className="min-h-screen w-4/5 m-auto">
          <div className="flex items-center gap-4 p-2 pb-6">
            <p className="hover:text-[#172b4d] font-normal leading-normal text-xl font-sans hover:underline cursor-pointer decoration-[#172b4d]">
              Power-Ups
            </p>
            <p
              className="hover:text-[#172b4d] font-normal leading-normal text-xl font-sans
            "
            >
              /
            </p>
            <p
              className="hover:text-[#172b4d] font-normal leading-normal text-xl font-sans
            hover:underline cursor-pointer decoration-[#172b4d]"
            >
              Confluence Cloud
            </p>
          </div>
          <div className="min-h-screen w-full flex gap-4">
            <section className="min-h-screen w-1/3">
              <div className="p-2 flex flex-col gap-3 border-b border-[#A9ABAF]">
                <img src={confluence} alt="" />
                <p className="flex items-center gap-2">
                  <span class="inline-flex items-center justify-center text-[#42526E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                      />
                    </svg>
                  </span>
                  <span>Made by Atlassian</span>
                </p>
                <p className="flex items-center justify-center gap-2 w-38 bg-[#F0F1F2] text-[#44546f] text-xl leading-[14px] py-0.5  rounded-md mb-4">
                  <span class="inline-flex items-center justify-center text-[#42526E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                      />
                    </svg>
                  </span>
                  <span>500,000 +</span>
                </p>
              </div>
              <div className="p-2 flex flex-col gap-3 border-b border-[#A9ABAF]">
                <h4 className="hover:text-[#172b4d] text-lg">Categories</h4>
                <p className="w-max border border-[#091e4224] rounded-sm bg-white hover:text-[#172b4d] text-xs p-2 hover:bg-[#f1f2f4] cursor-pointer">
                  Communication & collaboration
                </p>
                <p className="w-max border border-[#091e4224] rounded-sm bg-white hover:text-[#172b4d] text-xs p-2 mb-4 hover:bg-[#f1f2f4] cursor-pointer">
                  IT & project management
                </p>
              </div>
              <div className="p-2 flex flex-col gap-3 border-b border-[#A9ABAF]">
                <p className="flex items-center gap-4">
                  <span aria-hidden="true" class="text-[#42526E]">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 17V8.831L9.756 13.586C10.973 14.805 12.948 14.805 14.166 13.586L19 8.752V17H5ZM17.924 7L12.752 12.172C12.315 12.609 11.607 12.609 11.169 12.172L5.998 7H17.924ZM19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5Z"
                      ></path>
                    </svg>
                  </span>
                  <span className="cursor-pointer no-underline hover:underline hover:text-blue-800">
                    Contact Support
                  </span>
                </p>
                <p className="flex items-center gap-4 mb-4">
                  <span aria-hidden="true" class="text-[#42526E]">
                    <span aria-hidden="true" class="text-[#42526E]">
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        ></path>
                        <path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z"></path>
                        <path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"></path>
                      </svg>
                    </span>
                  </span>
                  <span className="cursor-pointer no-underline hover:underline hover:text-blue-800">
                    Privacy Policy
                  </span>
                </p>
              </div>
              <div className="p-2 flex flex-col gap-3 border-b border-[#A9ABAF]">
                <p className="flex items-center justify-center gap-4 mb-4">
                  <img src={cloud} alt="" className="w-5" />
                  <span>
                    Confluence Cloud is in compliance with{" "}
                    <a
                      href=""
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Trello's data and privacy practices.
                    </a>
                  </span>
                </p>
              </div>
            </section>
            <section className="min-h-screen w-[70%]">
              <div className="flex items-center justify-between pl-4 pr-4">
                <h1 className="hover:text-[#172b4d] text-2xl font-medium">
                  Confluence Cloud
                </h1>
                <button className="border-0 bg-[#0c66e4] shadow-none text-white p-2 rounded pl-4 pr-4 hover:bg-[#0055cc] cursor-pointer">
                  Add Power-Up
                </button>
              </div>
              <div className="flex flex-col px-4 pt-2 gap-2">
                <p className="text-base font-normal hover:text-[#172b4d]">
                  Do you sometimes need to add a bit more context to your work
                  in Trello? The Confluence Cloud Power-Up helps provide the
                  detail behind your work on a Trello card and the permanency to
                  revisit what happened after the project is done. From blog
                  posts, to meeting notes, to project requirements, Confluence
                  lets you create anything and organize the work that supports
                  each task on a card.
                </p>

                <p className="text-base font-normal hover:text-[#172b4d]">
                  Confluence pages support real-time comments, and you can
                  easily check the back of your Trello card to see how active
                  your Confluence page is. Attachments, embedded media, and web
                  links help to make Confluence pages beautiful and relevant.
                  Create Confluence pages from your Trello cards, so your
                  projects always have all the information needed — easily
                  available from your Trello board.
                </p>

                <ul className="list-disc list-inside text-base font-normal hover:text-[#172b4d] space-y-2 pl-2">
                  <li>
                    Attach Confluence Cloud pages to Trello cards and get from
                    your board to your drilled-down content in a single click.
                  </li>
                  <li>
                    See all the activity on your page — who created it, when it
                    was created, and view snippets and comment counts — right
                    from the card back.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-4 gap-6">
                <h3 className="text- leading-[1.25] hover:text-[#172B4D] font-semibold tracking-[-0.006em]">
                  Screenshot
                </h3>
                <img src={celloss} alt="" className="rounded" />
              </div>
            </section>
          </div>
          <AtlassianFooter/>
        </section>
      </section>
    </>
  );
};

export default Confluencecloud;
