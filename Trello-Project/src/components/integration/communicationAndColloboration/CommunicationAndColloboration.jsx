import React from "react";
import involve from "../../../assets/involve.png";
import Outline from "../../../assets/Outline.png";
import GoogleCalender from "../../../assets/GoogleCalendar.png";
import malissa from "../../../assets/malissa.png";
import TypeForm from "../../../assets/TypeForm.png";
import flowmaster from "../../../assets/flowmaster.png";
import SpeakUp from "../../../assets/SpeakUp.png";
import SureTriggers from "../../../assets/SureTriggers.png";
import GearPlug from "../../../assets/GearPlug.png";
import TrelloinConfluence from "../../../assets/TrelloinConfluence.png";
import WhatsAppBot from "../../../assets/WhatsAppBot.png";
import WritersBlock from "../../../assets/WritersBlock.png";
import Confluence from "../../../assets/Confluence.png";
import FeedBackRig from "../../../assets/FeedBackRig.png";
import BlockExtension from "../../../assets/BlockExtension.png";
import Gmail2Trello from "../../../assets/Gmail2Trello.png";
import Marker from "../../../assets/Marker.png";
import GmailZap from "../../../assets/GmailZap.png";
import AnotherTrello from "../../../assets/AnotherTrello.png";
import Benko from "../../../assets/Benko.png";
import Doplr from "../../../assets/Doplr.png";
import TelegramBot from "../../../assets/TelegramBot.png";
import Ybug from "../../../assets/Ybug.png";
import TrelloinMicrosoftTeams from "../../../assets/TrelloinMicrosoftTeams.png";

const CommunicationAndColloboration = () => {
  const data = [
    {
      img: involve,
      head: "involve.me",
      desc: "involve.me is an online no-code builder for quizzes, calculators, forms, surveys, landing pages and more! Automatically create Trello cards every time a submission is recorded in your projects. Collect lead data in Trello and collaborate with your team.",
      btn: "Configure",
    },
    {
    img: Outline,
    head: "Outline",
    desc: "Trello links pasted in Outline documents will automatically expand to show a rich preview.",
    btn: "Configure",
  },
  {
    img: GoogleCalender,
    head: "Google Calendar",
    desc: "See Google Calendar events on your Trello calendar.",
    btn: "Enable",
  },
  {
    img: malissa,
    head: "Mailissa",
    desc: "Create and update Trello cards from your e-mails and attachments.",
    btn: "Configure",
  },
  {
    img: TypeForm,
    head: "Typeform",
    desc: "Create Trello cards from new Typeform entries.",
    btn: "Configure",
  },
  {
    img: flowmaster,
    head: "FlowMaster",
    desc: "Flow Master connects with Trello and other tools to automate your workflows, link related tasks, and provide smart suggestions.",
    btn: "Configure",
  },
  {
    img: SpeakUp,
    head: "SpeakUp",
    desc: "Automatically create a Trello card to track and manage its implementation.",
    btn: "Configure",
  },
  {
    img: SureTriggers,
    head: "SureTriggers",
    desc: "Allows custom triggers & actions for Trello, including moving/creating cards based on triggers. Streamline workflows and save time.",
    btn: "Configure",
  },
  {
    img: GearPlug,
    head: "Gearplug",
    desc: "Integrates Trello with 100+ apps like Google, Evernote, HubSpot, Facebook, Outlook and more.",
    btn: "Configure",
  },
  {
    img: TrelloinConfluence,
    head: "Trello in Confluence",
    desc: "Embed interactive Trello cards and tiles directly inside Confluence.",
    btn: "Configure",
  },
  {
    img: WhatsAppBot,
    head: "WhatsApp Bot by Mig",
    desc: "Connect your Trello board to WhatsApp and stay up-to-date with card and list changes.",
    btn: "Configure",
  },
  {
    img: WritersBlock,
    head: "Trello Writers Block Extension for Microsoft Edge",
    desc: "Helps authors quickly collect research materials and store them in Trello.",
    btn: "Configure",
  },
  {
    img: Confluence,
    head: "Confluence Cloud",
    desc: "Attach Confluence pages and manage content, strategy, and ideas from your boards.",
    btn: "Enable",
  },
  {
    img: FeedBackRig,
    head: "FeedbackRig",
    desc: "Automate bug reporting and convert user feedback into Trello cards using AI-powered feedback.",
    btn: "Configure",
  },
  {
    img: BlockExtension,
    head: "Trello Writers Block Extension for Google Chrome",
    desc: "Helps authors gather research materials easily for bibliographies and store them in Trello.",
    btn: "Configure",
  },
  {
    img: Gmail2Trello,
    head: "Gmail-2-Trello",
    desc: "Easily create new cards from Gmail threads.",
    btn: "Configure",
  },
  {
    img: Marker,
    head: "Marker",
    desc: "Annotate feedback on screenshots and send it to Trello in one click.",
    btn: "Enable",
  },
  {
    img: GmailZap,
    head: "Gmail Zap",
    desc: "Create Trello cards from new Gmail emails using Zapier.",
    btn: "Configure",
  },
  {
    img: AnotherTrello,
    head: "Another Trello for Gmail",
    desc: "Create or comment on cards from Gmail. Upload attachments too.",
    btn: "Configure",
  },
  {
    img: Benko,
    head: "Benko Board",
    desc: "Use Trello to send and receive emails on any device.",
    btn: "Configure",
  },
  {
    img: Doplr,
    head: "Droplr",
    desc: "Attach screenshots, screen recordings, GIFs, and files easily to cards.",
    btn: "Enable",
  },
  {
    img: TelegramBot,
    head: "Telegram Bot by Mig",
    desc: "Connect Trello to your Telegram chat and get instant updates.",
    btn: "Configure",
  },
  {
    img: Ybug,
    head: "Ybug",
    desc: "Receive user feedback with screenshots directly into Trello cards.",
    btn: "Configure",
  },
  {
    img: TrelloinMicrosoftTeams,
    head: "Trello in Microsoft Teams",
    desc: "Embed interactive Trello boards inside Microsoft Teams.",
    btn: "Configure",
  },
    
  ];

  return (
    <div className="w-300 mr-12 pt-5 rounded-xl p-4">
      <div className="font-semibold text-[18px] mb-4">
        Communication & Collaboration (48)
      </div>

      <div className="flex flex-wrap gap-4">
        {data.map((obj, index) => (
          <div key={index} className="flex mt-3 flex-col justify-between gap-4 p-2 rounded-xl shadow-lg border border-gray-200 bg-gray-50 w-[224px]">
            <div className="flex items-center gap-3">
              <img src={obj.img} alt={obj.head} className="w-[40px] h-[40px] rounded-md"/>
              <h1 className="font-semibold text-[22px] text-[#1a1a1a]">
                {obj.head}
              </h1>
            </div>

            <p className="text-[16px] tracking-wide leading-6 text-gray-600">{obj.desc}</p>
            <button className="mb-2 border border-black px-4 py-2 rounded-md text-[17px] w-30 cursor-pointer hover:bg-gray-200 transition">
              {obj.btn}
            </button>
          </div>
        ))}
      </div>
      <button className='p-3 border rounded bg-blue-600 text-white mt-10 mb-10 ml-85 hover:bg-blue-800 transition duration-150 w-25'>View all</button>
    </div>
  );
};

export default CommunicationAndColloboration;
