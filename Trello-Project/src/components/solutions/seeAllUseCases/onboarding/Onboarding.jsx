import React from "react";
import NavBar from "../../../NavBar";
import TrelloOnboarding from "../../../../assets/Trello-Onboarding-Hero.webp";
import FeatureCarousel from "./FeatureCarousel";
import onboardingaction from "../../../../assets/onboardingaction.webp";
// import templateone from "../../../../assets/templateone.jpeg";
import TemplateCarousel from "./TemplateCarousel";
import TestimonialCarousel from "./TestimonialCarousel";
import logoshorizontal from "../../../../assets/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg";
import InfoGrid from "./InfoGrid";
import UniversalFooter from "../../../UniversalFooter.jsx";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen">
        <div className="bg-[linear-gradient(0deg,rgb(230,252,255),rgb(255,255,255))] h-[80vh] flex justify-end items-center gap-10">
          <div className="w-2/5 h-2/5">
            <h1 className="text-5xl leading-relaxed font-semibold text-[#091e42]">
              Onboard with confidence
            </h1>
            <p className="text-[#091e42] text-2xl font-normal leading-normal">
              Whether it’s a new company, team, or project, Trello makes it easy
              to get up-to-speed fast.
            </p>
            <div className="flex gap-4 pt-8">
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 py-[0.7rem] border border-[#DFE1E6] rounded-[0.3rem] max-w-[300px] transition ease-out duration-200 bg-white pr-24 font-normal text-lg"
                placeholder="Email"
              />
              <Link to="/signup" className="inline-flex items-center text-center text-xl px-4 py-[0.7rem] border border-[#0065FF] rounded-[0.3rem] bg-[#0065FF] text-white transition ease-out duration-200 cursor-pointer no-underline hover:bg-[#0747a6] hover:border-[#0747a6]">
                Sign up — it’s free!
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-auto">
            <img src={TrelloOnboarding} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="mt-14 w-[85%] m-auto text-center flex flex-col gap-4 mb-16">
          <h2 className="text-4xl leading-normal font-medium">
            Joining something new is exciting—Trello keeps it that way!
          </h2>
          <p className="text-2xl text-[#091e42] font-normal leading-normal">
            Simplify the ramp-up process with a vibrant, visual layout that
            keeps everything organized and everyone engaged. Trello’s 200+ tool
            integrations and easy-to-customize boards make every welcome
            experience feel tailored, without added effort.
          </p>
        </div>
        <FeatureCarousel />
        <div className="bg-[linear-gradient(90deg,_rgb(230,252,255),_rgb(255,255,255))] w-full min-h-full p-20 flex justify-between items-center">
          <div className="border-1 border-black w-[57%] min-h-full">
            <img src={onboardingaction} alt="" />
          </div>
          <div className="w-1/3 min-h-full">
            <h2 className="text-5xl leading-tight font-medium text-left text-[#091e42]">
              Trello onboarding in action
            </h2>
            <p className="text-2xl text-[#091e42] font-normal leading-normal pt-4">
              See how Trello makes the transition to any new job, team, or
              project seamless with advanced checklists, clear action plans, and
              eye-catching visuals.
            </p>
            <Link to="/templates/team-management/new-hire-onboarding-qr3AcASr">
              <a
                href="#"
                class="text-[#0052CC] underline decoration-[#0052CC] text-2xl font-normal text-left leading-normal hover:underline hover:decoration-[#0747a6] hover:text-[#0747a6] hover:cursor-pointer inline-block pt-8"
              >
                Try the onboarding template
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full pl-20 pt-15 pb-16">
          <h2 className="text-4xl font-medium leading-normal text-[#091e42]">
            There’s a template for that
          </h2>
          <p className="text-2xl text-[#091e42] font-normal leading-normal w-200">
            Why start from scratch when there’s expertise you can trust? Trello
            templates get you going quickly with pre-built boards that you can
            customize for your needs.
          </p>
        </div>
        <TemplateCarousel />
        <div className="w-full min-h-full p-20">
          <div className="flex justify-between">
            <p className="text-xl font-normal text-[#091e42] leading-relaxed w-150">
              Want to see what else Trello can do? We have templates for
              everything from meetings to project management.
            </p>
            <Link
              to="/templates"
              className="
    select-none
    inline-flex items-center justify-center
    rounded-md
    cursor-pointer
    text-center
    transition-all duration-300 ease-out
    bg-white
    border border-blue-700
    text-[#172b4d]
    text-base
    px-10 py-[0.2rem] 
    hover:bg-blue-50
  "
            >
              View All Templates
            </Link>
          </div>
        </div>
        <TestimonialCarousel />
        <div className="w-full h-60">
          <div className="pt-6 flex justify-center items-center flex-col gap-6">
            <p className="text-2xl text-[#091e42] font-normal leading-normal">
              Join a community of millions of users globally who are using
              Trello to get more done.
            </p>
            <img src={logoshorizontal} alt="" />
          </div>
        </div>
        <div className="w-full h-200 bg-[#E6FCFF] text-[#091E42]">
          <div className="p-20 w-full h-100">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl leading-tight font-medium">
                Teamwork and onboarding tips from the pros
              </h2>
              <p className="text-2xl font-normal leading-normal">
                Read the Trello blog to learn how you can improve team health,
                productivity, and collaboration.
              </p>
            </div>
            <div className="w-full">
              <InfoGrid />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#008DA6] to-[#172B4D] text-white w-full h-70 flex items-center justify-center">
          <div className="w-200 h-70 flex flex-col items-center justify-center">
            <h2 className="text-4xl leading-tight font-medium ">
              Get started with Trello today
            </h2>
            <div className="flex gap-8 pt-8">
              <input
                type="email"
                name="email"
                id="email"
                className="text-lg text-[#172B4D] px-8 py-[0.7rem] border border-[#DFE1E6] rounded-[0.3rem] transition ease-out duration-200 bg-white pr-24 font-normal placeholder:text-[#7A869A]"
                placeholder="Email"
              />
              <button className="inline-flex items-center text-center text-xl px-4 py-[0.7rem] border border-[#0065FF] rounded-[0.3rem] bg-[#0065FF] text-white transition ease-out duration-200 cursor-pointer no-underline hover:bg-[#0747a6] hover:border-[#0747a6]">
                Sign up — it’s free!
              </button>
            </div>
          </div>
        </div>
        <UniversalFooter />
      </main>
    </>
  );
};

export default Onboarding;
