import React, { useEffect, useState, useRef } from "react";
import AtlansianNavbar from "./AtlansianNavbar";
import atlansianColaps from "../../../assets/collapsiablepicture.png";
import trellologo from "../../../assets/trello-icon-gradient-blue-2x.png";
import { FaGetPocket, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import collapsiblelist from "../../../assets/collapsible_lists-1.gif";
import listOne from "../../../assets/listone.png";
import listTwo from "../../../assets/listtwo.png";
import listThree from "../../../assets/listthree.png";
import listFour from "../../../assets/listfour.png";
import CollapsiableCollection from "./CollapsibleCollection";
import CollapsobleFooter from "./CollapsobleFooter";

const CollapsiableLearnmore = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        // When bottom of image goes above viewport top => show navbar
        if (rect.bottom < 200) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Original Navbar */}
      <AtlansianNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className="w-[80%] min-h-screen m-auto">
        {/* Image section */}
        <div ref={imgRef} className="w-full m-auto mb-4">
          <img
            src={atlansianColaps}
            alt="Collapsible Atlassian"
            className="w-full"
          />
        </div>

        {/* New Navbar slides down from top */}
        <nav
          className={`fixed top-0 left-0 w-full bg-white text-black shadow-lg transition-transform duration-700 ease-in-out transform z-1111 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full flex border-b-4 border-[#dfe1e6] ">
            <div className="border-r-4 border-[#dfe1e6] w-3/4 p-6">
              <h4 className="text-2xl text-[#172b4d] font-medium pl-14">
                Brighten your boards with list colors and collapsible lists
              </h4>
            </div>
            <div className="border-r-4 border-[#dfe1e6] w-[15%] p-6 flex items-center justify-center">
              <a
                href=""
                className="text-[#172b4d] text-sm font-medium uppercase leading-tight trasition-all duration-500 hover:text-[#0065ff] cursor-pointer"
              >
                Subscribe
              </a>
            </div>
            <div className="border-r border-[#dfe1e6] w-[35%] p-6 flex items-center justify-start">
              <div
                className="flex items-center justify-between w-[80%]
              pl-10"
              >
                <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                  <a
                    href=""
                    className="text-center text-white font-medium text-xl"
                  >
                    <CiFacebook />
                  </a>
                </p>
                <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                  <a
                    href=""
                    className="text-center text-white font-medium text-xl"
                  >
                    <FaXTwitter />
                  </a>
                </p>
                <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                  <a
                    href=""
                    className="text-center text-white font-medium text-xl"
                  >
                    <CiLinkedin />
                  </a>
                </p>
                <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                  <a
                    href=""
                    className="text-center text-white font-medium text-xl"
                  >
                    <FaGetPocket color="white" />
                  </a>
                </p>
                <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                  <a
                    href=""
                    className="text-center text-white font-medium text-xl"
                  >
                    <FaYoutube />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* Rest of the content */}
        <div className="w-full min-h-screen flex">
          <section className="w-5/6 min-h-screen">
            <div className="pt-8">
              <h1 className="font-medium text-6xl leading-[80px] text-[#172b4d]">
                Brighten your boards with list colors and collapsible lists
              </h1>
            </div>
            <div className="pt-8">
              <p className="leading-[45px] text-xl">
                We are thrilled to announce the launch of two exciting new
                features <strong>now available</strong> for Standard, Premium,
                and Enterprise users that will revolutionize the way you
                organize and visualize your tasks in Trello: list colors and
                collapsible lists!
              </p>
            </div>
            <div className="w-full pt-8">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Rh8vUdP-bmg?si=uy2J-cNIE6JxY2PX"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pt-8">
              <p className="leading-[45px] text-xl">
                With the introduction of <strong>list colors</strong>, you can
                now add a splash of creativity and organization to your Trello
                boards. Assign vibrant colors to your Trello lists to categorize
                and differentiate them based on priority, status, or any other
                criteria that suits your workflow. Whether it’s a bright red for
                urgent tasks, a calming blue for in-progress items, or a
                cheerful green for completed tasks, or pick the color that suits
                your productivity palette—the possibilities are endless. List
                colors make it easier than ever to visually identify and manage
                your tasks at a glance.
              </p>
            </div>
            <div className="pt-8">
              <p className="leading-[45px] text-xl">
                Say goodbye👋 to cluttered Trello boards with the arrival of
                <strong>collapsible lists</strong>. This feature allows you to
                collapse or expand individual lists in your personal view,
                giving you the flexibility to focus on the lists that matter
                most while minimizing distractions. Whether you’re working on a
                complex project with multiple stages or simply want to
                streamline your board’s layout, collapsible lists provide a
                clean and organized view that adapts to your needs. Enjoy a
                clutter-free workspace and a more streamlined Trello experience
                with this new feature.
              </p>
            </div>
            <div className="pt-8 text-4xl leading-snug font-medium">
              <h2>Ready to start using these awesome features?</h2>
            </div>
            <div className="leading-relaxed text-xl pt-8">
              <p>
                To start using list colors and collapsible lists, simply log in
                to your Trello account and navigate to your boards. You’ll find
                the new options available when customizing your lists and board
                settings. Experiment with different list colors, organize your
                lists, and enjoy the newfound flexibility of collapsible lists
                as you manage your tasks and projects.
              </p>
            </div>
            <div className="pt-8">
              <img src={collapsiblelist} alt="" />
            </div>
            <div className="pt-8">
              <p className="leading-[45px] text-xl">
                If you’re not already on Trello Standard, Premium, or
                Enterprise, check out our{" "}
                <a
                  href="#"
                  className="text-blue-600 underline decoration-blue-600 hover:text-blue-800 hover:decoration-blue-800 transition duration-300 ease-in-out font-medium"
                >
                  Pricing Page
                </a>
                &nbsp;&nbsp; to learn more about these and other great features
                that may benefit you or your team.
              </p>
            </div>
            <div className="pt-8">
              <p className="leading-[45px] text-xl">
                List colors and collapsible lists will enhance your Trello
                experience, making task management more intuitive, visually
                appealing, and customizable to your unique workflow. Try out
                these new features today and elevate your productivity with
                Trello!
              </p>
            </div>
          </section>
          <section className="w-1/2 min-h-100">
            <div className="w-full min-h-40 flex flex-col gap-4 pl-6 pt-4">
              <div className="w-full flex flex-col pl-4 p-2 gap-1">
                <p className="uppercase text-base font-medium text-[#42526e] leading-[12px] tracking-[1px]">
                  Published April 19, 2024 in
                </p>
                <a
                  href=""
                  className="text-[#0052cc] uppercase text-base font-medium leading-normal hover:text-[#0065ff] cursor-pointer"
                >
                  Trello
                </a>
              </div>
              <div className="w-full flex gap-2">
                <img
                  src={trellologo}
                  alt=""
                  className="grayscale aspect-square object-cover rounded w-20"
                />
                <a
                  href=""
                  className="text-[#0052cc] uppercase text-lg font-medium leading-normal hover:text-[#0065ff] cursor-pointer hover:underline decoration-[#0065ff]"
                >
                  Trello
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="border-t-4 border-b-4 border-[#dfe1e6] w-full min-h-fit flex mt-16">
          <div className="border-r-4 border-[#dfe1e6] w-1/3">
            <div className="w-full flex flex-col gap-10 pt-8">
              <div className="flex flex-col gap-3">
                <p className="uppercase font-medium text-sm text-[#42526e] leading-sung ">
                  About this article
                </p>
                <p className="text-[#091e42] font-normal text-xl">
                  Published April 19, 2024
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="uppercase font-medium text-sm text-[#42526e] leading-sung ">
                  About the Author
                </p>
                <p className="text-[#091e42] font-normal text-xl">Trello</p>
              </div>
              <div className="border-r border-[#dfe1e6] w-2/3 flex ">
                <div className="flex items-center justify-between w-[80%]">
                  <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                    <a
                      href=""
                      className="text-center text-white font-medium text-lg"
                    >
                      <CiFacebook />
                    </a>
                  </p>
                  <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                    <a
                      href=""
                      className="text-center text-white font-medium text-lg"
                    >
                      <FaXTwitter />
                    </a>
                  </p>
                  <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                    <a
                      href=""
                      className="text-center text-white font-medium text-lg"
                    >
                      <CiLinkedin />
                    </a>
                  </p>
                  <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                    <a
                      href=""
                      className="text-center text-white font-medium text-lg"
                    >
                      <FaGetPocket color="white" />
                    </a>
                  </p>
                  <p className="bg-[#253858] p-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#0065ff] cursor-pointer">
                    <a
                      href=""
                      className="text-center text-white font-medium text-lg"
                    >
                      <FaYoutube />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/3 pb-8">
            <div className="pt-8 pl-8">
              <p className="uppercase font-medium text-lg text-[#42526e] leading-sung tracking-widest">
                Related Content
              </p>
              <h3 className="font-medium text-4xl text-[#172b4d] leading-normal">
                More in 'TRELLO'
              </h3>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="group border-b-4 border-[#dfe1e6] w-[45%] flex cursor-pointer pb-8">
                  {/* Image Section (reacts to parent hover) */}
                  <div className="relative w-1/3 min-h-35 overflow-hidden">
                    <img
                      src={listOne}
                      alt="Company"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Blue line animation under image */}
                    <div className="absolute bottom-0 left-0 w-0 h-[5px] bg-[#0065ff] transition-all duration-500 ease-in-out group-hover:w-full"></div>
                  </div>

                  {/* Text Section */}
                  <div className="w-2/3 min-h-35 p-4">
                    <a
                      href=""
                      className="text-[#0052cc] text-base uppercase font-medium transition-all duration-300 ease-in-out hover:underline decoration-[#0065ff] hover:text-[#0065ff]"
                    >
                      Company News
                    </a>
                    <br />
                    <a
                      href=""
                      className="text-[#172b4d] font-medium text-2xl leading-normal inline-block pt-3"
                    >
                      The wait is over—the new Trello is here!
                    </a>
                  </div>
                </div>

                <div className="group border-b-4 border-[#dfe1e6] w-[45%] flex cursor-pointer pb-8">
                  {/* Image Section (reacts to parent hover) */}
                  <div className="relative w-1/3 min-h-35 overflow-hidden">
                    <img
                      src={listTwo}
                      alt="Company"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Blue line animation under image */}
                    <div className="absolute bottom-0 left-0 w-0 h-[5px] bg-[#0065ff] transition-all duration-500 ease-in-out group-hover:w-full"></div>
                  </div>

                  {/* Text Section */}
                  <div className="w-2/3 min-h-35 p-4">
                    <a
                      href=""
                      className="text-[#0052cc] text-base uppercase font-medium transition-all duration-300 ease-in-out hover:underline decoration-[#0065ff] hover:text-[#0065ff]"
                    >
                      Company News
                    </a>
                    <br />
                    <a
                      href=""
                      className="text-[#172b4d] font-medium text-xl leading-normal inline-block pt-3"
                    >
                      Be your most productive self with the new Trello
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="group w-[45%] flex cursor-pointer">
                  {/* Image Section (reacts to parent hover) */}
                  <div className="relative w-1/3 min-h-35 overflow-hidden">
                    <img
                      src={listThree}
                      alt="Company"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Blue line animation under image */}
                    <div className="absolute bottom-0 left-0 w-0 h-[5px] bg-[#0065ff] transition-all duration-500 ease-in-out group-hover:w-full"></div>
                  </div>

                  {/* Text Section */}
                  <div className="w-2/3 min-h-35 p-4">
                    <a
                      href=""
                      className="text-[#0052cc] text-base uppercase font-medium transition-all duration-300 ease-in-out hover:underline decoration-[#0065ff] hover:text-[#0065ff]"
                    >
                      Trello
                    </a>
                    <br />
                    <a
                      href=""
                      className="text-[#172b4d] font-medium text-xl leading-normal inline-block pt-3"
                    >
                      Start the New Year strong with Mirror cards and Jira lists
                    </a>
                  </div>
                </div>

                <div className="group w-[45%] flex cursor-pointer">
                  {/* Image Section (reacts to parent hover) */}
                  <div className="relative w-[45%] min-h-33 overflow-hidden">
                    <img
                      src={listFour}
                      alt="Company"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Blue line animation under image */}
                    <div className="absolute bottom-0 left-0 w-0 h-[5px] bg-[#0065ff] transition-all duration-500 ease-in-out group-hover:w-full"></div>
                  </div>

                  {/* Text Section */}
                  <div className="text-[#0052cc]w-2/3 min-h-35 p-4">
                    <a
                      href=""
                      className=" text-[#0052cc] text-base uppercase font-medium transition-all duration-300 ease-in-out hover:underline decoration-[#0065ff] hover:text-[#0065ff]"
                    >
                      Trello
                    </a>
                    <br />
                    <a
                      href=""
                      className="text-[#172b4d] font-medium text-xl leading-normal inline-block pt-3"
                    >
                      Brighten your boards with list colors and collapsible
                      lists
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CollapsiableCollection />
      </main>
      <CollapsobleFooter />
    </>
  );
};

export default CollapsiableLearnmore;
