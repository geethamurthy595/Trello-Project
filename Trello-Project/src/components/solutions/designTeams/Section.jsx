import left from "../../../assets/imgi_119_hero-left.png";
import right from "../../../assets/imgi_120_hero-right.png";

import secimg from "../../../assets/sec1img.png";

import i1 from "../../../assets/article1.png";
import i2 from "../../../assets/article2.png";
import i3 from "../../../assets/article3.png";
import i4 from "../../../assets/article4.png";
import i5 from "../../../assets/article5.png";

import butler from "../../../assets/butler.svg";

import gain from "../../../assets/Keep.webp";

import power from "../../../assets/Powerup.png";
import Productivity from "./Productivity";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div>
      <div className="text-center bg-gradient-to-b from-blue-600 to-cyan-400 flex gap-40 space-between ">
        <img className="h-80 w-70" src={left} alt="" />
        <div className="w-300">
          <p className="underline text-white text-[16px]">
            &lt; Go back to Team Solutions{" "}
          </p>
          <br />
          <h1 className="text-[48px] font-medium text-white">
            Trello for Designs
          </h1>
          <br />
          <div className="text-[24px] font-normal text-white">
            From creative brainstorms to the final touches, discover how Trello
            helps your design teams deliver with style.
          </div>
        </div>
        <img className="h-80 w-70" src={right} alt="" />
      </div>

      <div className="h-[355px] pl-[205px] flex gap-10 pt-20">
        <div>
          <img className="h-[262px] w-[352px]" src={secimg} alt="Signup" />
        </div>
        <div>
          <p className="text-[24px] font-normal h-[126px] w-700px">
            Trello’s boards, lists, and cards enable teams to go from ideas{" "}
            <br /> to action in seconds. Visual and easy-to-use, Trello helps
            teams <br /> bring projects to life and keep them moving forward.
          </p>
          <Link
            to="/signUp"
            className=" inline-flex items-center justify-center rounded-[5px] bg-blue-600 h-[50px] w-[165px] text-white hover:cursor-pointer"
          >
            Sign Up - It's Free
          </Link>
        </div>
      </div>
      <br />

      <div className="h-[400px] pt-[80px] pl-[360px] bg-gray-100">
        <p className="text-[20px] font-normal pl-10">
          Join over 2,000,000 teams worldwide who are using Trello to get more
          done.
        </p>
        <br />
        <br />

        <div className="flex pl-[123px]">
          <img className="w-[162px] h-[80px]" src={i1} alt="" />
          <img className="w-[162px] h-[109px]" src={i2} alt="" />
          <img className="w-[162px] h-[80px]" src={i3} alt="" />
        </div>
        <br />
        <div className="flex pl-[200px]">
          <img className="w-[162px] h-[80px]" src={i4} alt="" />
          <img className="w-[162px] h-[80px]" src={i5} alt="" />
        </div>
      </div>

      <Productivity />
      <br />
      <br />
      <br />
      <div className="h-[463px] flex pl-[206px] gap-30">
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Keep the focus on creativity.
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Keep your Design team on track with the Timeline view, and ensure
            sure creative projects and assets are delivered before the deadline.
          </p>
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Learn more about Trello views
          </p>
        </div>
        <div>
          <img
            className="h-[301px] w-[550px] "
            src={gain}
            alt="Signup"
          />
        </div>
      </div>

      <div className="h-[463px] flex pl-[206px] gap-70">
        <div>
          <img className="h-[380px] w-[380px]" src={power} alt="Signup" />
        </div>
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Power-Up Your Designs
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            While you’re busy drafting award-winning designs, Power-Ups are busy
            making your boards even more efficient. With integrations like Miro
            and Figma you can easily connect your favorite design tools within
            Trello.
          </p>
          <br />
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Explore 150+ Power-Ups
          </p>
        </div>
      </div>

      <div className="h-[463px] flex pl-[206px] gap-30">
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Move Work Forward, Auto- <br />
            magically
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Trello’s built-in automation makes it easy to automate the
            repetitive, everyday tasks that keep your team from focusing on the
            work that matters most.
          </p>
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Let the robots do the work
          </p>
        </div>
        <div>
          <img className="h-[301px] w-[448px]" src={butler} alt="Signup" />
        </div>
      </div>

      <div className="bg-[#EAE6FF] pl-[200px] mb-15">
        <h1 className=" pt-[80px] pl-[320px] text-[36px] font-medium">
          Resources To Make Design Dreams A Reality
        </h1>

        <br />
        <div className=" w-[1180px] h-[750px] p-[10px] ">
          <div>
            <h1 className="text-[16px] font-medium">
              How Think Company Uses Trello To Manage A Design System [Blog
              Post]
            </h1>
            <p className="text-[20px] font-normal">
              Discover how a successful design firm uses Trello to easily collaborate, store information, and organize a complex but effective design system.


            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h1 className="text-[16px] font-medium">
              Huddle Up: The New Way To Create A Safe ‘Critique’ Space For Your Team [Blog Post]
            </h1>
            <p className="text-[20px] font-normal">
              Learn best practices for spotting inconsistencies, building skills, and building a positive feedback culture within your design team.
            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h1 className="text-[16px] font-medium">
              How Design Teams Are Using Trello: The Ultimate Roundup [Blog Post]

            </h1>
            <p className="text-[20px] font-normal">
            Keeping the work of design teams manageable, the culture of the team collaborative, and communication and feedback at the forefront are all essential elements to executing a truly successful product. Trello can help your team do just that–here’s an entire guide to prove it.
            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div className="h-[131px] w-[1108px] bg-[#091E42] rounded-[10px] text-white pl-[48px] pt-[24px] pr-[48px] flex justify-between">
            <div>
              <p className="text-[16px] font-medium">NOW AVAILABLE</p>
              <h1 className="text-[20px] font-medium">
                A 14 Day Free Trial of Premium!
              </h1>
              <p className="text-[16px] font-normal">
                Get unlimited boards, Trello views, and limitless automation,
                plus a ton more.
              </p>
            </div>
            <div>
              <button className="bg-white text-[16px] h-[49px] w-[118px] text-black rounded-[5px] mt-[20px] hover:cursor-pointer">
                Try it today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
