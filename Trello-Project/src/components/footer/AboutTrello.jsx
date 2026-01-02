import React from "react";
import NavBar from "../../components/NavBar";
import coinbase from "../../assets/about1.webp";
import john from "../../assets/about2.svg";
import grand from "../../assets/about3.svg";
import google from "../../assets/about4.svg";
import visa from "../../assets/about5.svg";
import zoom from "../../assets/about6.webp";
import wired from "../../assets/wired.png";
import wallstreet from "../../assets/wallstreet.png";
import techcrunch from "../../assets/techcrunch.png";
import forbes from "../../assets/forbes.png";
import UniversalFooter from "../../components/UniversalFooter";

const AboutTrello = () => {
  return (
    <>
      <NavBar />
      <section className="min-h-80 w-full bg-[#0079bf] text-white flex items-center justify-center ">
        <div className="text-center font-sans flex items-center justify-center flex-col mt-8">
          <h1 className="text-5xl leading-tight font-semibold">About Trello</h1>
          <p className="text-xl font-semibold leading-normal">
            What’s behind the boards.
          </p>
        </div>
      </section>
      <section className="min-h-140 w-full bg-[#deeaff] text-[#091e42] flex items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-4xl leading-snug font-medium">
            The way your team works is unique — so is Trello.
          </h2>
          <p className="text-2xl leading-loose w-225 mb-4 text-center">
            Trello is the flexible work management tool where teams can ideate
            plans, collaborate on projects, organize workflows, and track
            progress in a visual, productive, and rewarding way. From brainstorm
            to planning to execution, Trello manages the big milestones and the
            day-to-day tasks of working together and getting things done.
          </p>
          <button className="bg-white border border-[#0065ff] text-[#172b4d] text-base px-4 pt-3 pb-3.5 rounded-md hover:bg-[#deebff] cursor-pointer transition-colors duration-300 font-normal">
            Download the Brand Assets (ZIP)
          </button>
        </div>
      </section>
      <section className="min-h-screen w-full flex items-center justify-center">
        <div className="min-h-80 w-190 text-left flex flex-col mt-20 mb-12">
          <h1 className="text-[#091E42] text-4xl leading-snug font-medium">
            A brief history of Trello
          </h1>
          <ul className="list-disc text-left pl-6 text-[#172b4d] space-y-4 w-190 m-auto pl-12 pr-14">
            <li className="text-xl leading-normal font-medium text-[#172b4d] mt-4">
              Around the summer of 2010, Fog Creek Software starts doing regular
              Creek Weeks, internal explorations for potential products. In
              January 2011, a prototype that hopes to solve some high-level
              planning issues is pitched. It’s called Trellis. Full time
              development begins soon after.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              After a closed beta, Trello launches at TechCrunch Disrupt in
              September of 2011 with apps for the web and iPhone. We narrowly
              avoid names like Cardvark and Planatee and go with the name
              Trello.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              In the summer of 2012, Fog Creek co-founder Joel Spolsky’s dog
              Taco becomes the official Trello spokes-husky. Trello reaches
              500,000 members and launches the Trello Android app.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              Bug fixes and performance improvements.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              In July 2014, Trello spins off from Fog Creek and becomes Trello,
              Inc. naming Fog Creek co-founder Michael Pryor as its CEO. The
              company raises $10.3 million in a Series A round of funding led by{" "}
              <a
                href="#"
                className="text-[#0052CC] underline decoration-[#0052CC]"
              >
                Spark Capital
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#0052CC] underline decoration-[#0052CC]"
              >
                Index Ventures
              </a>
              . Trello has over 4.75 million users.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              In May 2015, Trello goes international, with localized experiences
              for Brazil, Germany, and Spain.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              In early 2017, Trello is{" "}
              <a
                href="#"
                className="text-[#0052CC] underline decoration-[#0052CC]"
              >
                {" "}
                acquired by Atlassian{" "}
              </a>{" "}
              and begins the next chapter in empowering teams everywhere.
            </li>
            <li className="text-xl leading-normal font-medium text-[#172b4d]">
              <a
                href="#"
                className="text-[#0052CC] underline decoration-[#0052CC]"
              >
                Help us add more things to this list.
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[#0079BF] text-[#FFFFFF] w-full min-h-80 flex items-center">
        <div className="w-250 m-auto flex items-center flex-col gap-6">
          <p className="text-center text-xl">
            {" "}
            <strong>Millions of people</strong> and companies of all kinds and
            sizes love using Trello.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <img src={coinbase} alt="" className="w-40" />
            </li>
            <li>
              <img src={john} alt="" />
            </li>
            <li>
              <img src={grand} alt="" />
            </li>
            <li>
              <img src={google} alt="" />
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li>
              <img src={visa} alt="" />
            </li>
            <li>
              <img src={zoom} alt="" className="w-35" />
            </li>
          </ul>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex items-center flex-col gap-8 mb-16 mt-14">
          <h2 className="text-4xl text-[#091E42] leading-snug font-medium text-center ">
            Trello in the Press
          </h2>
          <div className="w-180 m-auto flex items-center flex-col gap-4">
            <p className="text-center font-normal leading-normal text-xl">
              “Trello is an online tool for managing projects and personal
              tasks. That may sound rather prosaic. But this increasingly
              popular app often inspires the sort of passion usually reserved
              for consumer apps like Pinterest or Instagram. It’s the kind of
              business software that slips into businesses through the backdoor,
              just because individual employees like how it works.”
            </p>
            <img src={wired} alt="" />
          </div>
          <div className="w-180 m-auto flex items-center flex-col gap-4">
            <p className="text-center font-normal leading-normal text-xl p-4">
              “It reminds us of the early traction that Dropbox…and other apps
              up there had that have grabbed individuals and caused them to
              start using it and bring it to work and convince teams and
              colleagues to use it and it’s gradually taken over organizations,”
              said Index Partner Neil Rimer
            </p>
            <img src={wallstreet} alt="" />
          </div>
          <div className="w-180 m-auto flex items-center flex-col gap-4">
            <p className="text-center font-normal leading-normal text-xl p-4">
              “The visual organizing software has amassed some 4.6 million
              registered users — now with one million monthly actives — turning
              their projects, whether household to-do lists or corporate
              realignment plans, into visual boards using its cloud-based
              software.”
            </p>
            <img src={techcrunch} alt="" />
          </div>
          <div className="w-180 m-auto flex items-center flex-col gap-4">
            <p className="text-center font-normal leading-normal text-xl p-6">
              “I’ve been using it for five months now without fail, synthesizing
              everything from Covey and Allen that stuck, along with Carson and
              Babauta’s wisdom, to create the only task management system that’s
              ever really worked for me.”
            </p>
            <img src={forbes} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#DEEBFF] text-[#091E42] min-h-78 flex items-center flex-col">
        <div className="w-200 m-auto text-center flex flex-col items-center gap-6 p-4">
          <p className="text-[#091E42] text-xl leading-normal font-normal">
            Looking for logos, screenshots, branding guidelines, Taco pics, and
            other Trello assets? Check out the{" "}
            <a
              href=""
              className="text-[#0052CC] underline decoration-[#0052CC]"
            >
              branding page
            </a>
            .
          </p>
          <p className="text-[#091E42] text-xl leading-normal font-normal">
            Media inquiries? Talk to us at{" "}
            <a
              href=""
              className="text-[#0052CC] underline decoration-[#0052CC]"
            >
              press@atlassian.com
            </a>
            .
          </p>
          <p className="text-[#091E42] text-xl leading-normal font-normal">
            Marketing or content inquiries? Reach us at{" "}
            <a
              href=""
              className="text-[#0052CC] underline decoration-[#0052CC]"
            >
              editor@trello.com
            </a>
            .
          </p>
        </div>
      </section>
      <UniversalFooter />
    </>
  );
};

export default AboutTrello;
