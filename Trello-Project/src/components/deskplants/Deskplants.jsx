import React from "react";
import horse from "../../assets/johnDeere.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";
import { Link } from "react-router-dom";
import ScrollProgressBar from "../solutions/productManagement/scan2Cad/ScrollProgressBar";

const Deskplants = () => {
  return (
    <>
      <section>
        <NavBar />
        <ScrollProgressBar/>
        <div className='w-full h-50  bg-[url("https://images.ctfassets.net/rz1oowkt5gyp/4wpkGN5qkI0VNTLIITfYgr/3aa485f7b79ab8176e4ef7aacd244efc/desk-plants-hero.png")]'>
          <div className="flex flex-col items-center justify-center p-20">
            <h1 className="text-center font-medium text-4xl text-white">
              Desk Plants + Trello
            </h1>
            <h3 className="text-center font-medium text-2xl text-white p-5">
              Sprouting Small Business Success With 30% Increase In Sales
            </h3>
          </div>
        </div>
        <section className="flex items-center justify-center">
          <section className="w-[790px]">
            <div className="flex flex-c items-center justify-center">
              <img
                className="w-55 h-50"
                src="https://images.ctfassets.net/rz1oowkt5gyp/7JCD51g6mwxcqLgAzfvSr/86da951ec89f4f0e401cc700436c0cac/business-class-desk-plants.png?w=488&fm=webp"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-semibold ">
              Lawrence Hanley became a devoted #plantparent when he was an
              <br /> advertising executive at a large technology company.
            </h1>

            <div className="py-2 ">
              <p className="text-xl font-xs">
                It started with a simple desire to have something he could care
                for after he <br /> was transferred from Boston to Austin,
                leaving his beloved dog behind (don’t <br /> worry—his
                girlfriend adopted it). His new life in Austin wasn’t compatible{" "}
                <br /> with pet ownership, so Lawrence turned to plants. A few
                plants turned into a <br />
                lot of plants, and a lot of plants turned into... a jungle.
                “Before I knew it, I had <br /> 40 plants in my apartment,” he
                says.
              </p>
            </div>

            <div className="py-2">
              <p className="text-xl font-xs">
                At home, Lawrence was relishing the joys of plant parenthood,
                while at work <br />
                he was observing trends in the industry related to his newfound
                passion: “I <br />
                noticed a lot of investments were being made with online plant
                companies, <br /> and I knew there was a major opportunity in
                that market.”
              </p>
            </div>

            <div className="py-2">
              <p className="text-xl font-xs">
                He also realized online nurseries didn’t focus on hard-to-kill
                plants—those
                <br /> that can withstand low-light environments and infrequent
                waterings. And <br /> thus, the founding mission for
                <a href="">Desk Plants</a> was born: Everyone—from novice <br />
                plant owner to the most hopeless #plantaddict—should be able to
                enjoy the <br /> benefits of indoor plants. Lawrence launched
                Desk Plants in late 2018,
                <br /> offering a curated selection of plants that are
                practically impossible to kill.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl font-xs">
                His enthusiasm was off the charts, but he quickly became
                entangled with <br />
                the challenges of running a small business. In particular, he
                struggled to <br /> keep his team connected with the most
                current information available about <br /> the business, whether
                they were working in the office, in a greenhouse, or at <br />a
                farmer’s market. Trello emerged as the solution to this growing
                problem.
              </p>
            </div>

            <div className="py-2 text-2xl font-semibold ">
              <h1 className="">Getting (And Staying) Organized With Trello</h1>
            </div>

            <div className="py-2 flex items-center text-xl gap-5">
              <RiDoubleQuotesL className="text-6xl text-[#00A3BF]" />
              <p className="text-2xl font-sans ml-9">
                We chose Trello because it is well-designed—it’s <br />
                beautifully designed—intuitive, and really hit the nail on{" "}
                <br /> the head with what we needed to solve.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl font-xs">
                “I’ll be the first to admit this: I was not born with the
                organization gene,” <br />
                Lawrence says. “It’s a constant challenge for <br /> me. And if
                it’s a challenge for me, it’s even worse for my team, because
                they can’t read my mind.”
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl font-xs">
                Lawrence and his team of employees and contractors were managing
                Desk <br />
                Plants using paper notebooks and whiteboards. “We were using
                caveman <br />
                tools. It was all manually written, and none of it lived in a
                centralized place,” <br /> Lawrence says. “Oftentimes, things
                got lost or erased.” This inefficient <br /> system could bring
                the business to a standstill; without access to this single{" "}
                <br /> source of truth, team members couldn’t make decisions.
                Finding a digital <br /> solution to replace Desk Plants’
                primitive notebook system became a major <br /> priority.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                Lawrence was vaguely familiar with Trello before he launched his
                business,
                <br /> and came to believe it had the potential to work for his
                team, so he <br /> introduced it to them alongside two other
                digital tools. They took an <br /> afternoon to explore each
                option and made a decision together. “We chose <br /> Trello
                because it is well-designed—it’s beautifully designed—intuitive,
                and <br /> really hit the nail on the head with what we needed
                to solve.”
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                To create a centralized hub, Lawrence had to first extract
                information from his notebooks and identify which supporting and
                core business functions needed Trello boards. “I collected five
                commonly used notebooks I had between my office, my backpack, my
                car, and my home office,” he explains. “I read all the chicken
                scratch and organized the different areas of Desk Plants we were
                regularly solving for.”
              </p>
            </div>

            <div className="py-4">
              <h3 className="text-xl">
                Lawrence developed a Trello board to manage each core area:
                <ul className="text-xl font-xs p-9 list-disc">
                  <li>Events</li>
                  <li>Sales</li>
                  <li>Marketing</li>
                  <li>Nursery Operations</li>
                  <li>Customer Service</li>
                </ul>
              </h3>
            </div>

            <div className="">
              <p className="text-xl">
                He also created a General board to keep track of new ideas and
                projects that
                <br /> didn’t align with the others. This gave everyone the
                ability to see, in real <br /> time, which tasks were in process
                and which were finished, regardless of <br />
                where they were working.
              </p>
            </div>

            <div className="py-6">
              <p className="text-xl">
                For example, Virginia Stroup, Desk Plants’ greenhouse manager,
                regularly
                <br /> accesses Trello from her phone because she spends most of
                her day away <br /> from her computer. “It’s very important to
                keep everybody in the same track <br /> regardless of where we
                are,” Lawrence says. “It has cleaned up so much <br />{" "}
                inefficiency, and that has been a big value for the business.”
              </p>
            </div>

            <div className="py-2">
              <img
                className="h-50 w-170"
                src="https://images.ctfassets.net/rz1oowkt5gyp/1DL4ayjab9XxpOQ7JV0vvM/6662a62f87cdf860f4d94943d9173f6e/deskplants-screenshot.png?w=1378"
                alt=""
              />
            </div>

            <div className="py-8">
              <h1 className="text-2xl font-medium">
                From Plant Care To Business Care: Advice From A Small Business{" "}
                <br /> Owner
              </h1>
            </div>

            <div className=" flex items-center text-xl gap-5">
              <RiDoubleQuotesL className="text-6xl text-[#00A3BF]"/>
              <p classname=" border-2 bg-amber-950">
                We’ve increased our orders per hour by 30% in the last <br />{" "}
                six weeks. And I don’t think it’s a coincidence that we did this
                after we <br /> streamlined our business with Trello.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                Customers who order a hard-to-kill plant from Desk Plants
                receive a Plant <br /> Care card with their shipment. Desk
                Plants includes these cards because <br /> there’s an
                overwhelming amount of plant care information online, and <br />{" "}
                customers want straightforward advice about how to care for the
                plant <br /> they’ve chosen to be part of their lives.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                Lawrence has straightforward advice for new small business
                owners, too. <br />
                “Trello is one of the tools you’re going to want to use from day
                one to keep <br /> organized,” he says. “When you start a
                business, it’s easy to get buried. Trello <br /> helps you keep
                track of all the things you want to do while getting through{" "}
                <br /> all the things you have to do.”
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                In Desk Plants’ case, this simple strategy has had a real
                impact. “We’ve <br /> increased our orders per hour by 30% in
                the last six weeks,” Lawrence says. <br />
                “And I don’t think it’s a coincidence that we did this after we
                streamlined our <br /> business with Trello.”
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl">
                Join over 2,000,000 teams worldwide who are using Trello to get
                more done.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
              <span className="text-4xl font-semibold">coinbase</span>
              <img ClassName="" src={horse} width={150} height={200} alt="" />
              <span className="text-300 font-bold absolute left-155 pt-6 text-center"></span>
              <span className="text-lg font-normal">GRAND | HYATT</span>
              <span className="text-4xl font-semibold">Google</span>
            </div>

            <div className="flex justify-center items-center gap-7 mb-12">
              <span className="text-5xl font-bold">VISA</span>
              <span className="text-6xl font-bold">zoom</span>
            </div>
          </section>
        </section>
        <section className="">
          <div className="pt-20 flex justify-center">
            <div className="inner bg-[linear-gradient(270deg,rgb(64,50,148),rgb(23,43,77))] border rounded-xl w-[1108px] h-[131px]  pl-[48px] pr-[48px] pt-[24px] pb-[24px] text-white ">
              <div className="inner-inner w-[1108pxpx] h-[83px] flex items-center justify-center ">
                <div className="w-[585px] h-[83px] flex flex-col justify-center font-bold ">
                  <h1>NOW AVAILABLE</h1>
                  <p className="text-[1.25rem]">
                    A 14 Day Free Trial of Premium!
                  </p>
                  <p className="font-normal">
                    Get unlimited boards, Trello views, and limitless
                    automation, plus a ton more.
                  </p>
                </div>
                <Link to="/free-trial" className="w-[119px] rounded h-[50px] border ml-[292px] bg-white hover:bg-blue-100 text-black flex items-center justify-center">
                  <p>Try it today</p>
                </Link>
              </div>
            </div>
          </div>

          <div className=" h-30 flex  items-center justify-end pr-70">
            <Link to="/customers" className="h-13 inline-flex items-center justify-center w-52 hover:bg-blue-800 bg-blue-500 text-white rounded">
              Trello customer care stories
            </Link>
          </div>
        </section>
      </section>
      <UniversalFooter/>
    </>
  );
};

export default Deskplants;
