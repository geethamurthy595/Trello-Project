import React from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import bcardone from "../../../../assets/bcardone.webp";
import bcardonelogo from "../../../../assets/bcardonelogo.png";
import bcardtwologo from "../../../../assets/bcardtwologo.png";
import bcardtwo from "../../../../assets/bcardtwo.jpg";
import bcardthree from "../../../../assets/bcardthree.jpg";
import bcardthreelogo from "../../../../assets/bcardthreelogo.png";
import bcardfour from "../../../../assets/bcardfour.jpg";
import bcardfive from "../../../../assets/bcardfive.jpg";
import bcardfivelogo from "../../../../assets/bcardfivelogo.png";
import bcardsix from "../../../../assets/bcardsix.jpg";
import bcardsixlogo from "../../../../assets/bcardsixlogo.png";
import bcardseven from "../../../../assets/bcardseven.jpg";
import bcardsevenlogo from "../../../../assets/bcardsevenlogo.png";
import bcardeight from "../../../../assets/bcardeight.jpg";
import bcardeightlogo from "../../../../assets/bcardeightlogo.png";
import bcardnine from "../../../../assets/bcardnine.jpg";
import bcardninelogo from "../../../../assets/bcardninelogo.png";
import bcardtenlogo from "../../../../assets/bcardtenlogo.png";
import bcardeleven from "../../../../assets/bcardeleven.jpg";
import bcardelevenlogo from "../../../../assets/bcardelevenlogo.png";
import bcardtwelve from "../../../../assets/bcardtwelve.jpg";
import bcardtwelvelogo from "../../../../assets/bcardtwelvelogo.png";
import bcardthriteen from "../../../../assets/bcardthriteen.jpg";
import bcardthriteenlogo from "../../../../assets/bcardthriteenlogo.png";
import bcardfourteen from "../../../../assets/bcardfourteen.jpg";
import bcardfifteen from "../../../../assets/bcardfifteen.jpg";
import bcardfifteenlogo from "../../../../assets/bcardfifteenlogo.png";
import bcardsixteen from "../../../../assets/bcardsixteen.jpg";
import bcardsixteenlogo from "../../../../assets/bcardsixteenlogo.png";
import bcardseventeen from "../../../../assets/bcardseventeen.png";
import bcardseventeenlogo from "../../../../assets/bcardseventeenlogo.png";
import bcardeighteen from "../../../../assets/bcardeighteen.jpg";
import bcardnineteen from "../../../../assets/bcardnineteen.png";
import bcardtwenty from "../../../../assets/bcardtwenty.jpg";
import bcardtwentylogo from "../../../../assets/bcardtwentylogo.png";
import bcardtwentyone from "../../../../assets/bcardtwentyone.png";

const cardsData = [
  {
    id: "/templates/business/a-lead-management-pipeline-by-crmble-WyPtJ3YS",
    mainImage: bcardone,
    logoImage: bcardonelogo,
    title: "A Lead Management Pipeline by Crmble",
    author: "by Toni, Founder @ Crmble",
    description:
      "Use this board to manage inventory or swag requests with the Crmble Power-Up!",
    copies: "30.3K",
    views: "185.8K",
  },
  {
    id: "/templates/business/lean-canvas-YAmpiSeb",
    mainImage: bcardtwo,
    logoImage: bcardtwologo,
    title: "Lean Canvas",
    author: "by Syarfandi Achmad",
    description:
      "Lean Canvas is a 1-page business plan template created by Ash Maurya that helps you deconstruct your idea into its",
    copies: "34.9K",
    views: "205.2K",
  },
  {
    id: "/templates/business/nonprofit-project-management-5n9ShsZm",
    mainImage: bcardthree,
    logoImage: bcardthreelogo,
    title: "Nonprofit Project Management",
    author: "by Atlassian",
    description:
      "Turn big dreams into bigger results. Use this Trello template to build your nonprofit team's ideal workflow.",
    copies: "2.1K",
    views: "10.3K",
  },
  {
    id: "/templates/business/nonprofit-volunteer-onboarding-mJdO8t8q",
    mainImage: bcardfour,
    logoImage: bcardthreelogo,
    title: "Nonprofit Volunteer Onboarding",
    author: "by Atlassian",
    description:
      "Use this nonprofit staffing and volunteer scheduling template to keep everyone on the same page.",
    copies: "310K",
    views: "2.1K",
  },
  {
    id: "/templates/business/align-your-team-with-v2mom-kS2AaauD",
    mainImage: bcardfive,
    logoImage: bcardfivelogo,
    title: "Align Your Team With V2MOM",
    author: "by Salesforce Essentials",
    description:
      "Get everyone in your organization in sync, whether you’re a small business or a global company.",
    copies: "26.6K",
    views: "127.5K",
  },
  {
    id: "/templates/business/business-model-canvas-wJd9BLGF",
    mainImage: bcardsix,
    logoImage: bcardsixlogo,
    title: "Business Model Canvas",
    author: "by Oshane Bailey @ Jamaican Developers Group",
    description:
      "Develop new or document existing business models with this structured canvas approach.",
    copies: "25.2K",
    views: "117.6K",
  },
  {
    id: "/templates/business/business-plan-JFCgXHqe",
    mainImage: bcardseven,
    logoImage: bcardsevenlogo,
    title: "Business Plan",
    author: "by Jon, Founder @ Mountain17",
    description:
      "Create a strong business plan and collaborate with others throughout the process.",
    copies: "44.7K",
    views: "175.5K",
  },
  {
    id: "/templates/business/change-management-workflow-tool-z2zZBEsk",
    mainImage: bcardeight,
    logoImage: bcardeightlogo,
    title: "Change Management Workflow Tool",
    author: "by Robyn de Burgh",
    description: "Manage the change workflow for your business.",
    copies: "7.3K",
    views: "57K",
  },
  {
    id: "/templates/business/company-overview-lGQZunS7",
    mainImage: bcardnine,
    logoImage: bcardninelogo,
    title: "Company Overview",
    author: "by Michael Pryor, Head of Product @ Trello",
    description:
      "Get everybody on the same page with a high-level overview of what's going on across the organization.",
    copies: "173.1K",
    views: "437.6K",
  },
  {
    id: "/templates/business/cross-functional-team-sync-ymimFJ84",
    mainImage: bcardone,
    logoImage: bcardtenlogo,
    title: "Cross-functional Team Sync",
    author: "by Atlassian Customer Success",
    description:
      "Keep cross-functional groups aligned on company initiatives with this meeting template.",
    copies: "737K",
    views: "3.7K",
  },
  {
    id: "/templates/business/decision-tracking-board-g8vsbmEA",
    mainImage: bcardeleven,
    logoImage: bcardelevenlogo,
    title: "Decision Tracking Board",
    author: "by Darren Chait, Co-Founder @ Hugo",
    description:
      "Keep your team aligned with a board dedicated to tracking the outcomes of decisions.",
    copies: "12.9K",
    views: "114.5K",
  },
  {
    id: "/templates/business/grant-tracking-template-GF6XHLuq",
    mainImage: bcardtwelve,
    logoImage: bcardtwelvelogo,
    title: "Grant Tracking Template",
    author:
      "by Shahzeb Irshad, Grants, Strategy and Project Management Specialist",
    description:
      "Track grant funding opportunities for your non profit organization or social enterprise.",
    copies: "20.7K",
    views: "119.5K",
  },
  {
    id: "/templates/business/m&a-due-diligence-template-sSnkevMW",
    mainImage: bcardthriteen,
    logoImage: bcardthriteenlogo,
    title: "M&A Due Diligence Template",
    author: "by Jason Gibb, Chief Project Officer @ BNG Team",
    description: "Manage the complexities of a merger / acquisition process.",
    copies: "4.9K",
    views: "25K",
  },
  {
    id: "/templates/business/nonprofit-grant-management-CDScYxWh",
    mainImage: bcardfourteen,
    logoImage: bcardthreelogo,
    title: "Nonprofit Grant Management",
    author: "by Atlassian",
    description:
      "Use this Trello template for your nonprofit grant management workflow.",
    copies: "257K",
    views: "1.4K",
  },
  {
    id: "/templates/business/okr-template-%7C-trello-ZE5BzGZD",
    mainImage: bcardfifteen,
    logoImage: bcardfifteenlogo,
    title: "OKR Template | Trello",
    author: "by Kevan Lee, VP of Marketing @ Buffer",
    description:
      "The Trello OKR Template, designed by Buffer, lets you easily set goals for you and your team, so everyone is aligned",
    copies: "52.8K",
    views: "315.8K",
  },
  {
    id: "/templates/business/pitch-deck-8Qsm9Tv2",
    mainImage: bcardsixteen,
    logoImage: bcardsixteenlogo,
    title: "Pitch Deck",
    author: "by Jad Villanueva",
    description:
      "This template guides you on building your Investor Pitch Deck for Startups.",
    copies: "13.4K",
    views: "61.4K",
  },
  {
    id: "/templates/business/team-goal-setting-central-ry8F0DOb",
    mainImage: bcardseventeen,
    logoImage: bcardseventeenlogo,
    title: "Team Goal Setting Central",
    author: "by Trello Marketing Team",
    description:
      "Keep execs and higher-ups happy with this clear and trackable goal setting process.",
    copies: "66.2K",
    views: "304.4K",
  },
  {
    id: "/templates/business/town-hall-meetings-K0ZOiQ7U",
    mainImage: bcardeighteen,
    logoImage: bcardseventeenlogo,
    title: "Town Hall Meetings",
    author: "by Trello Team",
    description:
      "To facilitate the transparency of these meetings we created a Trello board that is open to everyone at the company.",
    copies: "17.1K",
    views: "114.4K",
  },
  {
    id: "/templates/business/trello-enterprise:-security-kit-%F0%9F%94%92-38x2eoKB",
    mainImage: bcardnineteen,
    logoImage: bcardtenlogo,
    title: "Trello Enterprise: Security Kit 🔒",
    author: "by Atlassian Customer Success",
    description: "Fine-tune your Trello security settings.",
    copies: "255K",
    views: "2.8K",
  },
  {
    id: "/templates/business/weekly-meeting-template-qJM2ESlK",
    mainImage: bcardtwenty,
    logoImage: bcardtwentylogo,
    title: "Weekly Meeting Template",
    author: "by Jason Gibb, Chief Operating Officer @ BNG Team",
    description:
      "This is a weekly meeting template compatible with the Entrepreneurial Operating System (EOS).",
    copies: "23K",
    views: "123.1K",
  },
  {
    id: "/templates/business/🤝-confluence-+-trello---turn-your-vision-into-action-bM7wyPc1",
    mainImage: bcardtwentyone,
    logoImage: bcardtenlogo,
    title: "🤝 Confluence + Trello - Turn your vision into action",
    author: "by Atlassian Customer Success",
    description: "Confluence and Trello are even better together.",
    copies: "2.4K",
    views: "15.4K",
  },
];

const CardGrid = () => {
  const handleNavigate = (id) => {
    window.location.href = id;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          onClick={() => handleNavigate(card.id)}
          className="relative flex flex-col border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative h-40 w-full">
            <img
              src={card.mainImage}
              alt="Main"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 border border-black bg-black w-12 h-12 rounded-full flex items-center justify-center">
              <img
                src={card.logoImage}
                alt="Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col px-3 py-2 h-full justify-between">
            <div>
              <p className="text-sm font-semibold leading-snug">{card.title}</p>
              <p className="text-gray-500 text-xs">{card.author}</p>
              <p className="text-xs text-gray-700 leading-tight mt-1">
                {card.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium pt-2">
              <span className="flex items-center gap-1">
                <MdOutlineFileCopy className="text-sm" />
                {card.copies}
              </span>
              <span className="flex items-center gap-1">
                <IoEyeOutline className="text-sm" />
                {card.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
