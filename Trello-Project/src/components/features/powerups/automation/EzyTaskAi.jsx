import React from "react";
import ezylogo from "../../../../assets/ezylogo.png";
import ezy1 from "../../../../assets/ezy1.gif";
import ezy2 from "../../../../assets/ezy2.gif";
import ezy3 from "../../../../assets/ezy3.gif";
import ezy4 from "../../../../assets/ezy4.gif";
import torch from "../../../../assets/torch.svg";
import thrbox from "../../../../assets/thrbox.svg";
import mailsumup from "../../../../assets/mailsumup.svg";
import isumup from "../../../../assets/isumup.svg";
import locksumup from "../../../../assets/locksumup.svg";
import iblsumup from "../../../../assets/iblsumup.svg";
import NavBar from "../../../NavBar";
import CompanyLogo from "../../../../assets/CompanyLogo";
import { Link } from "react-router-dom";

const EzyTaskAi = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <p className="m-5 inline ">
          {" "}
          <Link to="/power-ups" className="hover:underline ">
            power-ups{" "}
          </Link>
          /<span className="inline hover:underline">Ezy Task AI </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
            <img
              src={ezylogo}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
                Made by SmartEzy
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
                1,000 +
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div>
              <h3 className="font-semibold text-medium mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Board utilities
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Automation
                </span>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={mailsumup} alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={isumup} alt="Info Icon" className="w-4 h-4" />
                Privacy policy
              </p>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <p className="text-sm text-gray-600">
              <img
                src={locksumup}
                alt="Compliance Icon"
                className="inline w-4 h-4 mr-1"
              />
              Ezy Task AI stores personal data <br />
              and is in compliance with <br />{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data and privacy <br />
                practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-2xl font-bold">Ezy Task AI</h1>

              <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                Add Power-Up
              </button>
            </div>
            <h2 className="text-gray-900 text-3xl font-semibold">
              🚀 Conquer Your Projects with Ezy Task AI
            </h2>
            <p className="text-gray-700">
              Imagine a world where every project you start is a guaranteed
              success. With <span className="text-gray-900">Ezy Task AI,</span>{" "}
              that world is within your reach. This AI-powered assistant is
              designed to not just manage tasks, but to empower you to overcome
              every challenge and unlock your full potential, whether in your
              career, personal life, or business ventures.
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              🌟 Transform Your Ideas into Achievements
            </h2>
            <p className="text-gray-700">
              Simply share your vision, and watch as Ezy Task AI translates it
              into a precise, actionable plan. From launching a new business to
              mastering a complex skill, let Ezy Task AI be the secret weapon
              that turns your dreams into reality.
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              🛒 Example 1: "Building an E-commerce Empire"
            </h2>
            <h3 className="text-gray-900 text-xl font-semibold">
              Here’s how Ezy Task AI helps you conquer the online market.
            </h3>

            <hr className="border-gray-300 w-full md:w-160" />

            <div>
              <div className="relative inline-block">
                <img src={ezy1} alt="screenshot" className="rounded-lg mb-6" />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
                <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                  ☀️ Example 2: "Creating a Sustainable Energy Solution"
                </h2>
                <h6 className="text-gray-900 text-xl font-semibold mb-6">
                  Transform your home into a powerhouse of renewable energy with
                  these steps.
                </h6>
                <hr className="border-gray-300 w-full md:w-160 mb-6" />
              </div>

              <div className="relative inline-block">
                <img src={ezy2} alt="screenshot" className="rounded-lg mb-6" />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
                <h2 className="text-gray-900 text-2xl font-semibold mb-5">
                  🚀 Accelerate Your Career Growth
                </h2>
                <p className="text-gray-700 mb-5">
                  Tailor Ezy Task AI to align with your career ambitions.
                  Whether you’re navigating a new role or looking to advance,
                  Ezy Task AI delivers a roadmap to success, specifically
                  designed for you.
                </p>
                <h2 className="text-gray-900 text-xl font-semibold mb-5">
                  🏡 Example 3: "Real Estate Agent in Michigan"
                </h2>
                <h5 className="text-gray-900 text-xl font-semibold mb-5">
                  Ezy Task AI provides a personalized plan to help you inspire
                  trust and achieve your goals.
                </h5>
                <hr className="border-gray-300 w-full md:w-160 mb-6" />
              </div>

              <div className="relative inline-block">
                <img src={ezy3} alt="screenshot" className="rounded-lg mb-7" />

                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
                <h2 className="text-gray-900 text-2xl font-semibold mb-5">
                  💡 Turn Ambitions into Actions Instantly
                </h2>
                <h5 className="text-gray-900 text-xl font-semibold mb-6">
                  Don’t let your great ideas sit idle. With just a click,
                  generate detailed subtasks that lead you directly to success.
                  Whether you need 5 steps or 50, Ezy Task AI customizes the
                  journey for you.
                </h5>
              </div>
              <div className="relative inline-block">
                <img src={ezy4} alt="screenshot" className="rounded-lg mb-6" />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
                <h2 className="text-gray-900 text-2xl font-semibold mb-5">
                  💼 Elevate Your Productivity with the Perfect Plan
                </h2>
                <p className="text-gray-700 mb-5">
                  Ezy Task AI offers plans that grow with you. Whether you're
                  just starting out or managing complex projects, choose the
                  plan that best fits your needs and start unlocking your
                  potential today.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">⭐ Free Plan</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $0/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 50 tasks/month
                    </li>
                    <li className="mb-5">
                      Perfect for small projects or testing the waters with Ezy
                      Task AI.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">💎 Basic 1K Plan</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $1/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 1000
                      tasks/month
                    </li>
                    <li className="mb-5">
                      Ideal for solo entrepreneurs ready to level up their
                      productivity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">💎 Basic 2K Plan</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $2/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 2000
                      tasks/month
                    </li>
                    <li className="mb-5">
                      Great for growing your project capacity with minimal
                      investment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    🚀 Intermediate 5K Plan
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $5/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 5000
                      tasks/month
                    </li>
                    <li className="mb-5">
                      Ideal for managing multiple projects and leading small
                      teams ready to scale their efforts.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    🚀 Intermediate 10K Plan
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $10/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 10000
                      tasks/month
                    </li>
                    <p className="mb-5">
                      Perfect for managing multiple projects and empowering
                      medium-sized teams eager to take their efforts to the next
                      level!
                    </p>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    🌐 Advanced 50K Plan
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $50/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 50000
                      tasks/month
                    </li>
                    <li className="mb-5">
                      Designed for individuals handling multiple projects and
                      robust teams.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    🌐 Premium 200K Plan
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <span className="font-bold">Cost: </span> $200/month
                    </li>
                    <li>
                      <span className="font-bold">Tasks: </span> 200000
                      tasks/month
                    </li>
                    <li className="mb-4">
                      The ultimate solution for enterprise-level project
                      management.
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-5">
                    Pick a plan, harness the power of Ezy Task AI, and watch as
                    your productivity reaches new heights.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    🔄 Need to Downgrade?
                  </h3>
                  <p>No problem. Downgrading is easy:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cancel your current plan through PayPal.</li>
                    <li>Allow the current month to finish.</li>
                    <li className="mb-4">
                      Choose a simpler plan that better fits your current needs.
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Be sure to plan ahead to ensure uninterrupted service with
                    Ezy Task AI.
                  </p>
                  <hr className="border-gray-300 w-full md:w-160 mb-6" />
                </div>

                <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                  👨‍🚀 Achieve the Impossible with Ezy Task AI
                </h2>
                <h6 className="text-gray-900 text-xl font-semibold mb-1">
                  🎉 Break barriers, learn faster, and connect with the future
                  of AI! 🌐
                </h6>
                <h6 className="text-gray-900 text-xl font-semibold mb-5">
                  🤖 Your success story starts now! ✨🚀
                </h6>
                <hr className="border-gray-300 w-full md:w-160 mb-6" />
                <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                  🧠 Master Generative AI with Confidence
                </h2>
                <p className="text-gray-700 mb-6">
                  When using cutting-edge tools like Ezy Task AI, awareness is
                  key. Understand the potential challenges and limitations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li className="mb-3">
                    <span className="font-bold">
                      Interpretation Challenges:{" "}
                    </span>{" "}
                    - The AI might occasionally miss the context, so keep an eye
                    out for nuances.
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">Data Constraints: </span> - The
                    quality and diversity of training data can affect outcomes.
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">Rapid Evolution: </span> - Stay
                    updated as AI technologies evolve.
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">Bias Considerations: </span> -
                    Be mindful of potential biases in AI-generated content.
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Approach Ezy Task AI with confidence, knowing that with every
                  task, you’re moving closer to mastering both your projects and
                  the tools that power them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="  items-center w-full h-[100%] text-[#BFC1C4]">
        <div className="flex gap-4 items-center justify-center pt-30">
          <p className="underline">Templates</p>
          <p className="underline">Pricing</p>
          <p className="underline">AppsJobs</p>
          <p className="underline">Blog</p>
          <p className="underline">Developers</p>
          <p className="underline">About</p>
          <p className="underline">Help</p>
          <p className="underline">Legal</p>
          <p className="underline">Privacy</p>
          <p className="underline">Integrations</p>
          <p className="underline">Contact us</p>
          <p className="underline">Terms</p>
        </div>
        <div className="  pb-20 flex items-center gap-3 justify-center">
          <p>
            <CompanyLogo />
          </p>
          <p>© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default EzyTaskAi;
