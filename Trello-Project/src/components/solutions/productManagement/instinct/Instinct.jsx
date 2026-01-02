import React from "react";
import Dog from "../../../../assets/Dog.png";
import NavBar from "../../../NavBar";
import i1 from "../../../../assets/article1.png";
import i2 from "../../../../assets/article2.png";
import i3 from "../../../../assets/article3.png";
import i4 from "../../../../assets/article4.png";
import i5 from "../../../../assets/article5.png";
import UniversalFooter from "../../../UniversalFooter";
import { ImQuotesLeft } from "react-icons/im";
import ScrollProgressBar from "../scan2Cad/ScrollProgressBar";

const Instinct= () => {
  const gradientClass = "bg-gradient-to-r from-[#1E293B] to-[#4C1D95]";
  return (
    <>
    <ScrollProgressBar/>
      <NavBar />
      <section
        className="h-[250px] bg-cover bg-fixed text-center"
        style={{ backgroundImage: `url(${Dog})` }}
      >
        <h1 className="text-white font-bold text-4xl p-20">
          Instinct Dog Training + Trello
        </h1>
        <h1 className="text-white font-bold -mt-15">
          Taking A Custom Approach To Top Dog Care Nationwide
        </h1>
      </section>
      <section className="w-full text-gray-700 flex flex-col pl-110 mt-15">
        <p className=" text-xl text-gray-700 mb-[24px] w-[700px] ">
          When Brian Burton and Sarah Fraser, a married couple, started
          <span className="text-blue-500 underline">
            {" "}
            Instinct Dog <br /> Training
          </span>{" "}
          over ten years ago, their vision was to provide help and hope for{" "}
          <br /> dogs and their caregivers through quality care and
          positive-reinforcement <br /> training. In a way, they’d end up doing
          the same for their staff and customers <br /> —with the help of
          Trello.
        </p>
        <p className="text-xl text-gray-700 mb-[50px] w-[700px]">
          Although Brian and Sarah were both in different fields at the time,
          they saw <br /> an opportunity to combine his project management
          skills with her marketing background and passion for dogs into a
          meaningful business. Together, they not only built a successful
          nationwide franchise, but also an impressive operations platform built
          entirely on Trello that saves time, provides crystal-clear visibility,
          and ensures the best dog-gone experience for their four-legged and
          two-legged customers.
        </p>
        <div className="w-[700px] text-gray-700 items-center ">
          <h3 className="font-[24px] text-2xl mb-[20px]  w-[700px] ">
            A Solution Built For The Long Haul
          </h3>
        </div>
        <div className="w-[700px]  text-gray-700 flex justify-start">
          <ImQuotesLeft className="text-[#00A3BF] h-[50px] text-4xl mr-10" />
          <p className="text-xl text-gray-700  mb-[24px] w-[700px]">
            Trello will play a huge part in our scalability. It will help <br />{" "}
            us not only maximize the potential of our team, but also <br />{" "}
            scale with heart.
          </p>
        </div>
        <div className=" text-gray-700 flex flex-col items-start  w-[750px]">
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            Since Instinct was founded, it has grown into a multi-million-
            dollar Inc 5000 <br /> franchise, with multiple locations in New
            York, New Jersey, California, and <br /> Oregon. The company’s goal
            is to expand to 30-50 locations, which would <br /> serve thousands
            of dogs and employ hundreds of staff members.
          </p>
          <p className="text-xl text-gray-700 mb-[24px]">
            To reach these aggressive growth goals, the team needed an
            easy-to-use, <br /> standardized system for operations management. Brian
            and Sarah <br /> evaluated over a dozen tools, and ultimately chose Trello
            because of its ease <br /> of use and open API. These features would allow
            them to use Zapier, a <br /> simple automation tool that connects apps to
            each other, to integrate Trello <br /> with Instinct’s CRM, online
            scheduling app, dog boarding software, and <br /> email. That way,
            all their systems could work together as a single operations <br />
            platform.
          </p>
          <h2 className="font-[24px] mb-[8px] text-2xl w-[700px]">
            A Day In The Life Of Instinct’s Good Boys And Girls
          </h2>
          <div className="flex justify-center w-[700px]">
            <ImQuotesLeft className="text-[#00A3BF] h-[50px] text-4xl mr-10 " />
            <p className="text-2xl text-gray-700 mb-[8px] w-[600px]">
              So far, this platform has saved the Canine Care Team 10- <br /> 20
              hours per week, the Training Team 20-25 hours per <br /> week, and
              the Client Services Team 25-40 hours per <br /> week.
            </p>
          </div>
          <p className="text-xl text-gray-700 mb-[24px]">
            As Brian connected all of Instinct’s apps together in Trello, he
            started to see <br /> how this new automated system would benefit
            everyone, easing the burden <br /> of many tedious administrative
            tasks to free up the team’s time. It would <br /> help the Canine
            Care and Dog Training teams deliver faster, more consistent care;
            make it easier for Client Services to provide dog owners with great{" "}
            <br /> service; and increase visibility for the leadership team.
          </p>
          <p className="text-xl text-gray-700 mb-[24px]">
            Let’s look at some highlights from a day in the life of three
            employees: Molly <br /> on the Canine Care Team, Aaron on the Dog
            Training Team, and Trish on the <br /> Client Services Team.{" "}
          </p>

          <div>
            <p className="text-xl text-gray-700 mb-[24px] ml-25 w-[700px]">
              <span className="font-bold"> 6 a.m.</span> Molly arrives at the
              facility and opens Trello on her phone to <br />
              see an auto-generated list of daily operations tasks. As she goes{" "}
              <br /> down the list, she drags cards into the “Completed” column.
              If a <br /> task isn’t required or purposely wasn’t completed, she
              drags the <br /> corresponding card into the appropriate list and
              leaves a comment <br /> with details. That way, her manager can
              proactively resolve <br /> potential issues, such as understaffing
              and training gaps.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">9:30 a.m.</span> Aaron welcomes Buddy
              the boxer to his fifth training <br /> lesson. After the lesson,
              Buddy’s owner receives an automated, <br /> personalized survey,
              and selects the “SOS” option to let Instinct <br /> know she’s
              struggling. As a result, a card is automatically created <br /> in
              the “Programs At Risk” Trello board so the director of behavior{" "}
              <br /> and training can work with Aaron to help Buddy get back on
              track.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">10:15 a.m.</span> Trish starts working
              on a batch of welcome letters for <br /> new training customers.
              After Trello cards are automatically <br /> created for each new
              dog, Trish assigns a trainer to each pup and <br /> drags the
              cards into the “Training” list. This action triggers an email{" "}
              <br /> to the owner with more information on training, a bio of
              their <br /> assigned trainer, and notes about what to expect
              during the first <br /> lesson.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">11:30 a.m.</span> Duke, a golden
              retriever, and Roxy, a daschund, are <br /> dropped off for
              boarding. Molly checks them into Instinct’s <br /> boarding
              system, and a Trello card is automatically created for <br /> each
              dog in the “Playgroup” board. When playtime starts, Molly <br />{" "}
              opens the boarding system to learn more about Duke and Roxy’s{" "}
              <br /> personalities, preferences, and friends at the facility.
              She drags <br /> Duke’s Trello card into Playgroup 3 so he can
              play with other big, <br /> active pups, and Roxy’s card into the
              “Individual” list since she <br /> doesn’t play well with others.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">3:30 p.m.</span> Bailey, a husky in
              boarding, starts coughing. Molly opens <br />
              the “Dog Sneezing or Coughing” board for directions on what to do:{" "}
              <br />
              quarantine Bailey, take her temperature, call Mom, and make a vet{" "}
              <br />
              appointment. Later that morning, the vet clears Bailey to stay, so{" "}
              <br />
              Molly brings her back and lets Mom know she’s fine.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">4:30 p.m.</span> Trish takes an
              inventory of supplies and adds a few <br /> items to the “Supplies
              Needed” board. She also sees that Brian <br /> moved a few items
              she requested to the “Approved” list and that <br /> the supplies
              her co-worker ordered are now in the “Arrived” list.
            </p>
            <p className="text-xl text-gray-700 mb-[24px] ml-25">
              <span className="font-bold">5:30 p.m. </span> Bailey’s mom is
              scheduled to arrive home from vacation <br /> tonight. Molly
              checks her Trello and sees a card was automatically <br /> created
              reminding Molly to give Bailey a bath before Mom picks <br /> her
              up.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col w-[700px]">
        <p className="text-xl font-sans text-gray-700 mb-[24px] mt-[20px] ml-[440px] w-[700px]">
          By the end of the day, Instinct’s Trello-based operations platform has
          made <br /> life better for every person and pup under their roof.
        </p>
        <div className="flex flex-col">
          <h2 className="font-[24px] mb-[8px] text-2xl ml-[440px] w-[700px]">
            Ready To Play With The Big Dogs
          </h2>
          <div className="flex justify-center ml-110 w-[700px]">
            <ImQuotesLeft className="text-[#00A3BF] h-[50px] text-4xl mr-10 " />
            <p className="text-2xl text-gray-700 mb-[8px] w-[600px]">
              As you scale, you need visibility, accountability, and
              organization. Trello has provided that for us.
            </p>
          </div>
        </div>
        <div className="w-full text-gray-700 flex flex-col pl-110 mt-15">
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            Before Brian implemented this system, he noticed tasks falling
            through the <br /> cracks, bottlenecks between employees and
            leadership, and inconsistencies <br /> in canine care. These
            challenges weren’t critical at the time, but he knew <br /> they’d
            get worse as Instinct grew.
          </p>
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            “When you’re a small company, you can get away with having a small
            team <br /> who does everything. But as you scale, you need
            visibility, accountability, and <br /> organization,” he says.
            “Trello has provided that for us.”
          </p>
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            As Instinct has grown from one location to five, Brian and Sarah
            have <br /> leveraged Trello to create repeatable, yet customizable
            workflows and <br /> systems that save time on tedious
            administrative work and keep employees <br /> focused on care and
            service. “So far, this platform has saved the Canine Care <br />{" "}
            Team 10-20 hours per week, the Training Team 20-25 hours per week,
            and <br /> the Client Services Team 25-40 hours per week,” he
            calculates.
          </p>
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            While the cost savings are already massive, they’ll grow
            exponentially as <br /> Instinct opens dozens more locations in the
            coming years. Brian says Trello <br /> will not only help the team
            stay organized as they grow, but also ensure <br /> they’re
            providing quality care and a personal experience.
          </p>
          <p className="text-xl text-gray-700 mb-[24px] w-[700px]">
            “When you look at the sheer volume of our work as we grow to five{" "}
            <br /> locations, it’s pretty amazing. We’re looking at 250,000 dog
            walks per year, <br /> 30,000 hours of playtime, and 125,000 meals
            per year,” he explains. “Trello <br /> will play a huge part in our
            scalability. It will help us not only maximize the <br /> potential
            of our team, but also scale with heart.”
          </p>
          <p></p>
        </div>
      </div>
      <section>
        <div className="h-[500px] pt-[80px] pl-[360px]">
          <p className="text-[20px] font-normal ml-[70px]">
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
      </section>
      <div
        className={`p- md:p-8 rounded-lg shadow-xl ${gradientClass}  max-w-5xl  mx-auto`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white text-left">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-1">
              NOW AVAILABLE
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              A 14 Day Free Trial of Premium!
            </h2>
            <p className="text-base font-medium opacity-90">
              Get unlimited boards, Trello views, and limitless automation, plus
              a ton more.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              className="px-6 py-3 bg-white text-indigo-900 font-bold text-base rounded-lg shadow-md hover:bg-gray-100 transition duration-150 ease-in-out whitespace-nowrap"
              onClick={() => console.log("Try it today clicked!")}
            >
              Try it today
            </button>
          </div>
        </div>
      </div>

      <div className="pb-[80px] pt-[30px] pr-[20px] pl-[20px] ml-240">
        <button className="bg-blue-600  text-white rounded w-60 h-14">
          Trello customer case studies
        </button>
      </div>
      <UniversalFooter />
    </>
  );
};

export default Instinct;
