import React, { useState } from "react";
import { MdWifi } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { ImFileText } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import DeveloperChangelog from "../../../../assets/DeveloperChangelog.png"

const SectionFirstDiv = () => {
  return (
    <div className=" p-6 font-sans  border border-t-3 w-full border-blue-100 max-h-300 text-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        2026 updates to Cloud App Security Requirements
      </h2>
      <p className="mb-4 text-gray-700">
        Key additions to the general Cloud App Security Requirements include:
      </p>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <span className="font-semibold">AI Security:</span>
          New requirements for apps using Forge Rovo actions and agents,
          including validating action inputs as untrusted, implementing
          permission checks for admin-level actions, and accurately configuring
          <span className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">
            actionVerb
          </span>
          values.
        </li>
        <li>
          <span className="font-semibold">Data Protection:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              External OAuth2 clients must use Forge's OAuth2 Providers and be
              configured as confidential clients where supported.
            </li>
            <li>
              Application logs must strictly exclude PII, credentials, and
              sensitive data.
            </li>
            <li>Apps must ensure strict tenant isolation during runtime.</li>
            <li>
              Apps must not execute arbitrary code by spawning child processes
              (e.g., using Node.js
              <span className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">
                child_process
              </span>
              ).
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Application Security:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Apps using Forge SQL must use parameterized queries to mitigate
              SQL injection risks.
            </li>
            <li>
              Updated guidance on Content Security Policy (CSP) regarding
              <span className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">
                unsafe-inline
              </span>
              and
              <span className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">
                unsafe-eval
              </span>
              directives.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Runtime Security:</span>
          <ul className="list-disc pl-6 mt-2">
            <li>Apps must not use EOL (end-of-life) Node.js runtimes.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

let arr = [1,2,3,4,5,6,7,8,9,10];

const SectionSecendDiv = () => {
  return (
    <div className=" p-6 font-sans  border border-t-2 w-full flex flex-col gap-4 border-blue-100 max-h-300 text-gray-800">
      <p>
        Privacy compliance remains a requirement for all Power-ups and
        Integrations that store personal data. Developers currently using the
        legacy route should migrate to the supported workflow:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Create or update your Power-up or integration through the{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Trello Developer Portal.
          </span>{" "}
        </li>
        <li>
          Navigate to the{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Privacy and Compliance tab
          </span>{" "}
          for your power-up or integration.
        </li>
        <li>
          {" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Link your app key
          </span>{" "}
          as part of the Power-up setup.
        </li>
        <li>
          Use the{" "}
          <span className="bg-cyan-100">
            /plugin/:id/compliance/memberPrivacy
          </span>{" "}
          API, which provides similar functionality and is required for ongoing
          compliance.{" "}
        </li>
      </ol>
      <p>
        See{" "}
        <span className="[box-shadow:0_0_6px_rgba(0,0,0,0.20)]  px-1 rounded text-blue-500 hover:underline cursor-pointer">
          Personal Data Storage and GDPR{" "}
        </span>{" "}
        for details.
      </p>
      <p>
        After <span className="bg-cyan-100 px-1">Sep 8, 2025</span> , requests
        to the deprecated endpoint will no longer be supported. Please ensure
        your applications are updated to use the new compliance route to avoid
        disruption.{" "}
      </p>
      <p className="mt-1">
        If you have any questions, please reach out via the Trello Developer
        Community or support channels.
      </p>
    </div>
  );
};

const Changelog = () => {
  const [openFilter, setOpenFilter] = useState();
  const [firstSectionVisible, setFirstSectionVisible] = useState(false);
  const [secendSectionVisible, setSecendSectionVisible] = useState(false);
  const [thirdSectionVisible, setThirdSectionVisible] = useState(false);
  const [fourthSectionVisible, setFourthSectionVisible] = useState(false);
  const [fiftSectionVisible, setFiftSectionVisible] = useState(false);
  const [sixthSectionVisible, setSixthSectionVisible] = useState(false);
  return (
    <div className="w-full pl-3 flex flex-col gap-5 text-[14px] opacity-80"> 
      <div className="w-[83%] px-30 flex flex-col gap-3 pt-4 ">
        <HeaderPart openFilter={openFilter} setOpenFilter={setOpenFilter} />
      </div>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl py-2 font-semibold ">20 February 2026</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            Announcement
          </span>
          <p className="font-bold font-sans text-[15px]">
            Upcoming AGC app security requirements and 2026 updates to Cloud App
            Security Requirements
          </p>
        </div>
        <p>
          We are introducing{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            baseline security requirements
          </span>
          for Atlassian Government Cloud (AGC) apps, which will take effect on{" "}
          <span className="bg-blue-50 p-1">Mar 31, 2026.</span> If you have any
          questions regarding these new standards, please contact us here:
        </p>
        <a
          href="https://ecosystem.atlassian.net/servicedesk/customer/portal/34/group/109/create/579"
          className="text-blue-500  bg-white [box-shadow:0_0_6px_rgba(0,0,0,0.20)] rounded px-1 shadow-2xs hover:underline"
        >
          https://ecosystem.atlassian.net/servicedesk/customer/portal/34/group/109/create/579
        </a>
        <p className="mt-2 ">
          We’re also publishing our annual update to the general{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            Cloud App Security Requirements
          </span>
          for 2026, which includes new provisions for AI security, data
          protection, and supply chain security. See
          <span className="font-bold">More details</span> for highlights on this
          update.
        </p>
        <p
          className=" border border-blue-100 p-2 mt-4 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setFirstSectionVisible(!firstSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${firstSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <SectionFirstDiv />
        </div>
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl py-2 font-semibold ">18 November 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement{" "}
          </span>
          <p className="font-bold font-sans text-[15px]">
            Power-up UI components rendering update
          </p>
        </div>
        <p>
          We're working on updating the code that renders some of our{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            {" "}
            Power-Up UI components{" "}
          </span>{" "}
          to be in line with the rest of our codebase. There shouldn't be
          functional changes to how anything works, but{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            {" "}
            reach out to us
          </span>{" "}
          if you want early access to the changes so that you can test your
          Power-Ups.
        </p>
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl py-2 font-semibold ">15 September 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red font-bold text-[10px] uppercase tracking-widest text-amber-700 bg-amber-50 px-1">
            Deprecation Notice
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello SCIM API endpoints will be deprecated in favor of REST API
            endpoints
          </p>
        </div>
        <p>
          On or after December 10th, 2025, we are deprecating the endpoints:
        </p>
        <ul className="list-disc my-3 px-3 ml-4">
          <li>/scim/v2/users</li>
          <li>/scim/v2/groups</li>
        </ul>
        <p>
          Please use the REST API to retrieve information on Trello Users or
          Members, more specifically:
        </p>
        <ul className="list-disc my-3 px-3 ml-4">
          <li>
            <a href="" className="text-blue-400 hover:underline">
              enterprises/id/members/query
            </a>
          </li>
          <li>
            <a href="" className="text-blue-400 hover:underline">
              members/id
            </a>
          </li>
          <li>
            <a href="" className="text-blue-400 hover:underline">
              enterprises/id/organizations
            </a>
          </li>
          <li>
            <a href="" className="text-blue-400 hover:underline">
              boards/id/memberships{" "}
            </a>
          </li>
        </ul>
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl py-2 font-semibold ">6 August 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red font-bold text-[10px] uppercase tracking-widest text-amber-700 bg-amber-50 px-1">
            Deprecation Notice
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello deprecation notice: GET
            /application/:id/compliance/memberPrivacy
          </p>
        </div>
        <p>
          The legacy{" "}
          <span className="bg-cyan-100 px-1 pb-1">
            {" "}
            /application/:id/compliance/memberPrivacy
          </span>{" "}
          API route will be deprecated and removed after{" "}
          <span className="bg-cyan-100 px-1 pb-1">Sep 8, 2025</span> . This
          change is part of ongoing efforts to simplify our codebase and align
          with current privacy practices for Trello power-ups and integrations.
        </p>
        <p
          className=" border border-blue-100 mt-3 p-2 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setSecendSectionVisible(!secendSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${secendSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <SectionSecendDiv />
        </div>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-3">
        <h2 className="text-2xl mt-4 font-semibold">22 July 2025</h2>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello Glitch Example Projects have been copied to public Bitbucket
            Repository
          </p>
        </div>
        <p>
          For years, we’ve used Glitch to showcase our Trello developer example
          apps and Power-Ups. Unfortunately, Glitch has announced they are{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            shutting down their app hosting service.
          </span>{" "}
        </p>

        <p>
          Because these example projects serve as invaluable documentation for
          our developer community, we’ve copied them over a public Bitbucket
          repository so they can continue to be referenced.
        </p>
        <p>
          Check it out here!{" "}
          <span className="[box-shadow:0_0_6px_rgba(0,0,0,0.20)]  px-1 rounded text-blue-500 hover:underline cursor-pointer">
            atlassianlabs/trello-glitch-example-projects{" "}
          </span>{" "}
          Be sure to read the README of that repository.
        </p>
        <p>
          We’ve also updated our{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            developer documentation{" "}
          </span>{" "}
          to link to the public repository instead of Glitch.
        </p>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-2">
        <h2 className="text-2xl  mt-4 font-semibold">26 June 2025</h2>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red font-bold text-[10px] uppercase tracking-widest text-amber-700 bg-amber-50 px-1">
            Deprecation Notice
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello to deprecate PUT /board/:id/myPrefs/showListGuide endpoint
          </p>
        </div>
        <p>
          This endpoint is no longer referenced in our API documents or guides
          and the{" "}
          <span className="bg-cyan-100 px-1 cursor-pointer">showListGuide</span>{" "}
          board preference is no longer used throughout{" "}
        </p>
        <p>
          the application. We will begin to remove this route after{" "}
          <span className="bg-cyan-100 px-1 cursor-pointer">
            Jul 26, 2025{" "}
          </span>{" "}
        </p>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-3">
        <h2 className="text-2xl mt-4 font-semibold">9 May 2025</h2>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement
          </span>
          <p className="font-bold font-sans text-[15px]">
            Changes to the Trello card detail screen
          </p>
        </div>
        <p>
          Trello is enhancing the card detail viewing and editing experience by
          introducing several key updates:
        </p>

        <ol className="list-decimal ml-5">
          <li className="text-[14px]">
            {" "}
            <strong>New panel view for comments + activity:</strong> Card
            comments + activity will now be displayed side-by-side with card
            details and offering users the option to collapse the comments and
            activity panel for a more focused view.
          </li>
          <li className="text-[14px]">
            {" "}
            <strong>
              Powerup and Automation Card Buttons in Popover Menu:
            </strong>{" "}
            Card buttons created from Trello power-ups / integrations or
            automations will now be surfaced in a popover menu. This menu can be
            accessed from the new card navigation bar, providing a cleaner and
            more organized interface.
          </li>
          <li className="text-[14px]">
            {" "}
            <strong>Impact on Power-Ups:</strong> While the API remains
            unchanged, the redesign may affect third-party power-ups and
            integrations. Developers are encouraged to review their power-ups to
            ensure compatibility with the new card back design.
          </li>
        </ol>

        <p>
          This initial announcement aims to inform partners about the changes
          coming to customers this month (May 2025).
        </p>
        <p>
          More details about the changes to the card back can be found here:{" "}
          <a
            href="https://support.atlassian.com/trello/docs/new-card-back/"
            className="text-blue-500 hover:underline"
          >
            https://support.atlassian.com/trello/docs/new-card-back/
          </a>{" "}
        </p>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-3">
        <h1 className="text-2xl mt-5 font-semibold ">16 April 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement{" "}
          </span>
          <p className="font-bold font-sans text-[15px]">
            Introducing OAuth2 to Trello
          </p>
        </div>
        <p>
          We will be replacing{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            {" "}
            Trello’s current authorization mechanism{" "}
          </span>{" "}
          with{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            OAuth 2.0 (3LO) (also known as “three-legged OAuth” or
            “authorization code grants”)
          </span>{" "}
          This change will also introduce new scopes, resource restrictions, and
          token expiry for greater security..
        </p>
        <p>
          Read more on our developer community page -{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            RFC-89: Introducing OAuth2 to Trello
          </span>
          !
        </p>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-3">
        <h1 className="text-2xl mt-5 font-semibold ">11 April 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement{" "}
          </span>
          <p className="font-bold font-sans text-[15px]">
            Markdown changes in global power-up directory
          </p>
        </div>
        <p>
          The markdown parser for{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            global power-ups directory{" "}
          </span>{" "}
          with{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            OAuth 2.0 (3LO) (also known as “three-legged OAuth” or
            “authorization code grants”)
          </span>{" "}
          has been updated. These changes are also reflected in the Trello card
          editor. We recommend reviewing your Power-Up listings to ensure your
          markdown displays as expected. If you need to make adjustments,{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            {" "}
            check out how to format text in Trello.
          </span>{" "}
        </p>
      </section>

      <section className="w-[83%] px-30 ">
        <h1 className="text-2xl py-2 font-semibold ">17 February 2025</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red font-bold text-[10px] uppercase tracking-widest text-amber-700 bg-amber-50 px-1">
            {" "}
            Deprecation Notice{" "}
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello to deprecate `PUT board/:id/labelNames` endpoint
          </p>
        </div>

        <p>
          This endpoint will be deprecated in 6 months per our developer
          communications guidelines (August 18, 2025). For any third-party
          scripts that rely on this endpoint, use the{" "}
          <span className="bg-cyan-100 px-1 rounded">POST /labels</span> or{" "}
          <span className="bg-cyan-100 px-1 rounded">
            POST board/:idBoard/labels
          </span>{" "}
          endpoints to create a label and{" "}
          <span className="bg-cyan-100 px-1 rounded">PUT /labels/:id </span> or{" "}
          <span className="bg-cyan-100 px-1 rounded">
            PUT board/:idBoard/label/:idLabel
          </span>{" "}
          to update a label.
        </p>

        <p className="mt-3">
          PUT documentation{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            here
          </span>
          .
        </p>
        <p className="mt-3">
          POST documentation{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            here
          </span>{" "}
          and{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            here
          </span>
          .
        </p>

        <p
          className=" border border-blue-100 p-2 mt-5 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setThirdSectionVisible(!thirdSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${thirdSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <p className="border border-blue-100 border-t-3 py-4 px-2">
            This endpoint is not referenced in our API documents or guides.
          </p>
        </div>
      </section>

      <section className="w-[83%] px-30 flex flex-col gap-2">
        <h1 className="text-2xl mt-4 font-semibold ">13 November 2024</h1>
        <div className=" flex gap-2 items-center my-2">
          <span className="text-red-800 font-bold tracking-widest text-[10px] bg-blue-50 px-1 text-center">
            REMOVED
          </span>
          <p className="font-bold font-sans text-[15px]">
            Trello no longer accepts websocket connections via querystring
            authentication
          </p>
        </div>

        <ul className="list-disc ml-4">
          <li>
            Support for establishing a websocket connection via appkey+token
            pairs supplied via query arguments will end on November 15, 2024.
          </li>
          <li>
            While this continues to be undocumented and unsupported, you may
            make Websocket connections to Trello, however you will need to
            switch to providing an OAuth{" "}
            <span className="bg-cyan-100 rounded px-1">Authorization</span>{" "}
            header for authentication.
          </li>
          <ul className="list-[circle] ml-8 mt-2">
            <li>
              Note that this isn’t possible in the browser sandbox environment,
              as the WebSocket API does not have an option to provide custom
              HTTP headers.{" "}
            </li>
            <li>
              You will need to do this from a privileged context, like an app or
              possibly a browser add-on in the Trello session context.
            </li>
          </ul>
        </ul>
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl mt-4 font-semibold ">21 August 2024</h1>
        <div className=" flex gap-2 items-center my-4">
          <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            {" "}
            Announcement
          </span>
          <p className="font-bold font-sans text-[15px]">
            Additional IP ranges for Atlassian Cloud
          </p>
        </div>
        <p className="my-2">
          We're announcing new IP ranges that will soon be available for
          requests from external clients, such as browsers and API integrations:
        </p>
        <ul className="list-disc ml-4">
          <li>13.35.248.0/24</li>
          <li>13.227.180.0/24</li>
          <li>13.227.213.0/24</li>
        </ul>
        <p className="my-2">
          These ranges won't be used to make outgoing connections from Atlassian
          Cloud to remote systems, for example, webhooks.
        </p>
        <p
          className=" border border-blue-100 p-2 mt-5 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setFourthSectionVisible(!fourthSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden flex flex-col gap-3 p-3 border border-blue-100 border-t-3 transition-all duration-300 ease-in-out 
          ${fourthSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <p>
            To prepare for this change, update your firewalls and other security
            measures to allow connections to the new IP ranges.
          </p>
          <p>
            For more information, see
            <span className="text-blue-600 cursor-pointer hover:underline">
              IP addresses and domains for Atlassian Cloud products,
            </span>
            which includes instructions on how to receive notifications of
            changes, as well as links to
            <span className="text-blue-600 cursor-pointer hover:underline">
              machine-readable lists
            </span>
            of our IP ranges.
          </p>
        </div>
      </section>

       <section className="w-[83%] px-30">
        <h1 className="text-2xl mt-4 font-semibold ">21 August 2024</h1>
        <div className=" flex gap-2 items-center my-4">
            <span className="text-red font-bold uppercase text-[10px]  tracking-widest text-amber-700 bg-amber-50 px-1">
                  Deprecation Notice
            </span>
          <p className="font-bold font-sans text-[15px]">
           card.idShort will now always be regenerated after board moves
          </p>
        </div>
        <p className="my-2">
         Up until now, a card’s <span className="bg-cyan-100 rounded px-1"> idShort </span> field value would be restored to its previous value when the card is moved to a board it has previously been on.
        </p>
        <p className="my-2">
          Starting  <span className="bg-cyan-100 rounded px-1"> Aug 1, 2024 </span> this will no longer be the case. <span className="bg-cyan-100 rounded px-1"> idShort </span> will always receive a new sequence ID on the destination board. This will have no impact on existing <span className="bg-cyan-100 rounded px-1"> idShort </span> values, or on <span className="bg-cyan-100 rounded px-1"> idShort </span> values on cards moved within a single board.
        </p>
        <p
          className=" border border-blue-100 p-2 mt-5 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setFiftSectionVisible(!fiftSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden flex flex-col gap-3 p-3 border border-blue-100 border-t-3 transition-all duration-300 ease-in-out 
          ${fiftSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <p>
           Ensure your app does not store references to idShort values persistently - they may be invalidated due to moves across boards.
          </p>
          <p>
           In general, we advise against usage of <span className="bg-cyan-100 rounded px-1"> idShort </span> in favor of using the card’s <span className="bg-cyan-100 rounded px-1"> id </span> since <span className="bg-cyan-100 rounded px-1"> idShort </span> values might get invalidated.
          </p>
        </div>
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl mt-4 font-semibold ">21 August 2024</h1>
        <div className=" flex gap-2 items-center my-4">
            <span className="text-red uppercase font-bold text-[10px]  tracking-widest text-amber-600 bg-cyan-100 px-1">
                  ADDED
            </span>
          <p className="font-bold font-sans text-[15px]">
            Iframe Connector URL domains of Public Power-Ups can now be changed by their owners
          </p>
        </div>
        <p className="my-2">
        As of July 17, 2024, you no longer need to contact Trello to change your public Power-Up Iframe Connector Url domain. You can self-serve this change by going to <span className="text-blue-500 hover:underline cursor-pointer">trello.com/power-ups/admin</span>, selecting your Power-Up, and updating the <strong> Iframe connector URL</strong> field in <strong>Basic information.</strong>
        </p>
        
        
      </section>

      <section className="w-[83%] px-30">
        <h1 className="text-2xl mt-4 font-semibold ">21 August 2024</h1>
        <div className=" flex gap-2 items-center my-4">
            <span className="text-red h-4 font-semibold text-[10px] uppercase  tracking-wide text-blue-700 bg-blue-100 px-1">
            Announcement
          </span>
          <p className="font-bold font-sans text-[15px]">
           Changing to the way that Power-Ups handle data when removed from a board
          </p>
        </div>
        <p className="my-2">
         While disabling power-up, you can now select <strong>Keep all Power-Up data</strong> to opt-in to retain the plugin data stored on the board and cards.
        </p>
            <img src={DeveloperChangelog} alt="DeveloperChangelog image"  className="my-12"/>
        <p
          className=" border border-blue-100 p-2 mt-5 flex py-4 items-center w-full cursor-pointer"
          onClick={() => setSixthSectionVisible(!sixthSectionVisible)}
        >
          <ImFileText className="mr-3 ml-2 text-xl" /> More details
        </p>
        <div
          className={`overflow-hidden flex flex-col gap-3 p-3 border border-blue-100 border-t-3 transition-all duration-300 ease-in-out 
          ${sixthSectionVisible ? "max-h-250 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <p>
           Previously, the Disable Power-up dialog defaulted to keeping the users data. Due to security and privacy concerns, we are now changing this functionality. Data will be deleted from active cards on the board immediately, whereas data on archived cards will be deleted asynchronously.
          </p>
        </div>
      </section>

        <div className="flex  justify-center gap-6 items-center">
            <IoIosArrowBack/>
          {
            arr.map((a)=>{
          return(
            <span key={a} className=" px-2 cursor-pointer font-bold rounded">{a}</span>
          )
        })
          }
          <IoIosArrowForward/>
        </div>

    </div>
  );
};

const HeaderPart = ({ openFilter, setOpenFilter }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex  justify-between pr-30 pt-2 items-center">
        <span className="text-gray-500">Last updated Feb 20, 2026</span>
        <span className=" flex gap-2 opacity-65 px-2 py-1 bg-cyan-50 rounded-lg justify-center items-center">
          <MdWifi className="transform rotate-45 text-2xl" /> RSS feed{" "}
        </span>
      </div>
      <h2 className="font-medium  text-2xl">Trello Changelog</h2>
      <p className="text-[13px]">
        This changelog is the source of truth for all changes to the Trello
        developer platform.
      </p>
      <div className="flex my-2">
        <div className="relative w-48">
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className={`w-38 px-4 rounded flex justify-between cursor-pointer bg-cyan-50 py-1.5 items-center ${openFilter ? "bg-gray-500 text-white" : "text-black"}`}
          >
            Filter Types
            <span className="font-bold text-[12px] ">
              {" "}
              <IoIosArrowDown />
            </span>
          </button>
          {openFilter && (
            <div className="absolute mt-2  w-68  flex flex-col gap-1 bg-white  rounded shadow-[0_0_15px_rgba(0,0,0,0.1)]   ">
              <label className="flex items-center gap-2  text-[12px]  w-full py-2 px-2 cursor-pointer hover:bg-blue-50">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red-800 font-bold tracking-widest text-[10px] bg-blue-50 px-1 text-center">
                  REMOVED
                </span>
              </label>
              <label className="flex items-center gap-2  w-full py-2 px-2 cursor-pointer  hover:bg-blue-50 uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold text-[10px]  tracking-widest text-amber-700 bg-amber-50 px-1">
                  Deprecation Notice
                </span>
              </label>
              <label className="flex items-center gap-2  w-full py-2 px-2 cursor-pointer hover:bg-blue-50 uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold text-[10px]  tracking-widest text-blue-700 bg-blue-100 px-1">
                  Announcement
                </span>
              </label>
              <label className="flex items-center gap-2   w-full py-2 px-2 cursor-pointer hover:bg-blue-50 uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold text-[10px]  tracking-widest text-amber-600 bg-cyan-100 px-1">
                  ADDED
                </span>
              </label>
              <label className="flex items-center gap-2  w-full py-2 px-2 cursor-pointer hover:bg-blue-50 uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold tracking-widest text-[10px] text-blue-700 bg-blue-100 px-1">
                  fixed
                </span>
              </label>
              <label className="flex items-center gap-2  w-full py-2 px-2 cursor-pointer hover:bg-blue-50  uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold tracking-widest text-[10px] text-blue-700 bg-blue-100 px-1">
                  Early Access
                </span>
              </label>
              <label className="flex items-center gap-2  w-full py-2 px-2 cursor-pointer hover:bg-blue-50  uppercase text-[12px] ">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-red font-bold tracking-widest text-[10px] text-blue-700 bg-blue-100 px-1">
                  Request for Comments (RFC)
                </span>
              </label>
            </div>
          )}
        </div>
        <div className="relative w-[80%]">
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search changelog..."
            z
            className="w-full pl-10 py-1 pr-4 bg-cyan-50 border border-blue-300  focus:outline-none  focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};
export default Changelog;