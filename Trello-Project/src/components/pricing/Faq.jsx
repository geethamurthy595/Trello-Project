import React, { useState } from "react";
let Faq = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <section className="mx-[200px] ">
        <h1 className="text-[36px] font-sans tracking-[1px] text-center text-[#091E42]">
          Frequently asked questions
        </h1>{" "}
        <br /> <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-sans font-semibold text-9xl cursor-pointer transition-all text-[#091E42]"
            onClick={() => toggleItem(0)}
          >
            {openItems[0] ? "-" : "+"} Does Trello offer a Premium free trial?
          </h3>
          {openItems[0] && (
            <p className="px-4 pt-4 text-gray-150 text-[18px]">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="" className="underline text-blue-500 ">
                free trial of Trello Premium.
              </a>
              With that trial your Workspace will get <br /> access to create
              unlimited Trello boards, automate as much as you’d like, take
              advantage of Timeline, Dashboard, and other <br /> new views, and
              much more!
            </p>
          )}{" "}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] text-9xl font-sans font-semibold text-[#091E42] cursor-pointer"
            onClick={() => toggleItem(1)}
          >
            {openItems[1] ? "-" : "+"} Do you offer any discounted plans?
          </h3>
          {openItems[1] && (
            <p className=" px-4 pt-4 text-gray-150 text-[18px]">
              Yes! Trello offers both a{" "}
              <a href="" className="underline text-blue-500">
                non-profit community discount
              </a>{" "}
              as well as{" "}
              <a href="" className="underline text-blue-500">
                education discount
              </a>
              .
            </p>
          )}{" "}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-semibold font-sans text-[#091E42] text-9xl cursor-pointer"
            onClick={() => toggleItem(2)}
          >
            {openItems[2] ? "-" : "+"} What payment methods do you accept?
          </h3>
          {openItems[2] && (
            <p className="px-4 pt-4 text-gray-150 text-[18px]">
              You can purchase a monthly or annual Trello Standard or Premium
              subscription with any major credit card. We offer more <br />{" "}
              options for Enterprise customers, if you’re interested in learning
              more about Trello Enterprise{" "}
              <a href="" className="underline text-blue-500">
                contact our sales team.
              </a>
            </p>
          )}{" "}
          <br />
          <hr className="w-5xl absolute left-[200px] text-gray-200" />
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-sans text-[#091E42] font-semibold text-5xl  cursor-pointer"
            onClick={() => toggleItem(3)}
          >
            {openItems[3] ? "-" : "+"} How do I cancel my Trello Standard or
            Premium subscription?
          </h3>
          {openItems[3] && (
            <p className="px-5 pt-4 text-gray-150 text-[18px]">
              If you aren’t 100% satisfied with Trello Standard or Premium you
              may downgrade at any time. When a team downgrades <br /> from
              Standard or Premium, it retains its Standard or Premium features
              and unlimited boards until the end of its prepaid <br /> service
              period. At the end of its prepaid service period, it becomes a
              free Trello Workspace that can hold 10 boards. Learn <br /> more
              about canceling your Standard or Premium subscription{" "}
              <a href="" className="underline text-blue-500">
                here.
              </a>
            </p>
          )}{" "}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-semibold font-sans text-[#091E42] text-9xl  cursor-pointer"
            onClick={() => toggleItem(4)}
          >
            {openItems[4] ? "-" : "+"} How are users counted towards billing?
          </h3>
          {openItems[4] && (
            <p className="px-5 pt-4 text-gray-150 text-[18px]   ">
              A Trello user who is added as a member to a Workspace-either as a
              normal member or as a team admin—is considered a <br /> billable
              team member that is included in the cost of Trello Standard or
              Premium.
            </p>
          )}{" "}
          {openItems[4] && (
            <p className="px-5 pt-5 text-gray-150 text-[18px] ">
              Any Guest that is on more than one board within the Workspace is
              considered a Multi-Board Guest and is billed at the same <br />{" "}
              rate as Standard or Premium Workspace members.{" "}
              <a href="" className="underline text-blue-500">
                See this page
              </a>{" "}
              for more information on Multi-Board Guests.
            </p>
          )}{" "}
          <br />
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-semibold font-sans text-[#091E42]  text-9xl  cursor-pointer "
            onClick={() => toggleItem(5)}
          >
            {openItems[5] ? "-" : "+"} Is there an on-premises version of
            Trello?
          </h3>
          {openItems[5] && (
            <p className="px-5 pt-4 text-gray-150 text-[18px]   ">
              Trello is proudly a cloud-only product. We offer access via the
              web, desktop, and our{" "}
              <a href="" className="underline text-blue-500">
                awesome mobile apps
              </a>
              .
            </p>
          )}{" "}
          <br />
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-semibold font-sans text-[#091E42] text-9xl  cursor-pointer"
            onClick={() => toggleItem(6)}
          >
            {openItems[6] ? "-" : "+"} Can I have Standard or premium just for
            my account?
          </h3>
          {openItems[6] && (
            <p className="px-4 pt-5 text-gray-150 text-[18px]  ">
              Trello Standard and Premium are designed for all teams—even teams
              of one! To upgrade to Standard or Premium you’ll need <br /> to
              create a Workspace and then upgrade that Workspace.
            </p>
          )}{" "}
          <br />
        </div>{" "}
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] font-semibold text-9xl font-sans text-[#091E42]  cursor-pointer"
            onClick={() => toggleItem(7)}
          >
            {openItems[7] ? "-" : "+"} How secure is Trello?
          </h3>
          {openItems[7] && (
            <p className="px-5 pt-4 text-gray-150 text-[18px]  ">
              Trello, Inc. (“we”, “us” or “our”) is SOC2 Type 2 certified—we
              receive and review our data hosting providers’ SOC1 and SOC2{" "}
              <br /> reports every 6 months under NDA. Trello is ISO/IEC 27001
              certified which validates our information security management{" "}
              <br /> system (ISMS) and the implementation of our security
              controls. More information is available on the Atlassian Trust{" "}
              <br /> Management System. Trello is PCI-DSS certified.Learn more
              about Trello’s security protocols{" "}
              <a href="" className="underline text-blue-500">
                here
              </a>
              .
            </p>
          )}{" "}
          <br />
        </div>{" "}
        <br />
      </section>
    </>
  );
};
export default Faq;
