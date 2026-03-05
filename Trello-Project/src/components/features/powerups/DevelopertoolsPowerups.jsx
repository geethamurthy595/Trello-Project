import React from "react";
import icon from "../../../assets/developer1.svg"
import hipporello from "../../../assets/hipporello-powerup.svg"
import s3 from "../../../assets/s3.png";
import mockflow from "../../../assets/mockflow.png";
import kanban from "../../../assets/kanbandev.png";
import github from "../../../assets/githubdevelopertools.png";
import branchname from "../../../assets/branchname.png";
import devboard from "../../../assets/devboardsync.png";
import scr from "../../../assets/scr.png";
import storypoints from "../../../assets/storypoints.png";
import manuscript from "../../../assets/manuscript.png";
import statuspowerup from "../../../assets/status-powerup.png";
import unitoavatar from "../../../assets/unito-avatar.png";
import codesnippets from "../../../assets/code-snippets.png";
import shapeup from "../../../assets/shapeup.png";
import smartdeadlines from "../../../assets/smartdeadlines.png";
import gitlab from "../../../assets/gitlab.png";
import cardHistory from "../../../assets/card-history.png";
import gamingBacklog from "../../../assets/gaming backlog.png";
import droplr from "../../../assets/droplr.png";
import epic from "../../../assets/epic cards.png";
import goodmood from "../../../assets/good mood.png";
import launchdarkly from "../../../assets/launchdry.png";
import apihelper from "../../../assets/api help.png";
import pomorello from "../../../assets/poro.png";
import cardrelationships from "../../../assets/hello epics.png";
import apiExplorer from "../../../assets/configcat.png";
import advancedSearch from "../../../assets/advance seach.png";
import scrumPoker from "../../../assets/srum poker.png";
import userPicker from "../../../assets/user picker.png";
import estimate from "../../../assets/estimate.png";
import streak from "../../../assets/streak.png";
import agiletools from "../../../assets/agiletools.jpeg";
import cardfinder from "../../../assets/cardfinder.png";
import redmine from "../../../assets/redmine.png";
const developerTools = [
  {
    title: "Hipporello Apps",
    img: hipporello,
    description:
      "Ready-to-use and customizable web apps (i.e. Blog, ATS, Approvals) and a visual no-code app builder for your custom needs.",
    installs: "1,000+",
    
  },
  {
    title: "S3",
    description: "Explore and attach documents on S3",
    installs: "100+",
    img:s3,
  },
  {
    title: "MockFlow SiteMap",
    description: "Visualize sitemaps and UI flows",
    installs: "5,000+",
    img: mockflow,
  },
  {
    title: "Kanban WIP by Corrello",
    description:
      "Set WIP limits across one or more lists. Control your WIP, reduce your lead time!",
    installs: "10,000+",
    img: kanban,
  },
  {
    title: "Branch Name",
    description:
      "A Trello Power-Up to copy branch name based on card and board details.",
    installs: "100+",
    img: branchname,
  },
  {
    title: "GitHub",
    description:
      "Attach branches, commits, issues, & pull requests to cards, and see the status of pull requests on your boards.",
    installs: "250,000+",
    img: github,
  },

  {
    title: "DevBoardSync by Kryl Solutions (Retired)",
    description: "This has been retired.",
    installs: "100+",
    img: devboard,
  },
  {
    title: "Scaled by Screenful",
    description:
      "Manage Trello at scale: Group cards into larger bodies of work, epics. Set sizes and priorities to cards and set dependencies.",
    installs: "25,000+",
    img: scr,
  },
  {
    title: "Status Page by Hipporello",
    description:
      "Share downtime, system status and scheduled maintenances with your end users through a branded status page.",
    installs: "100+",
    img: statuspowerup,
  },
  {
    title: "Story Points for Trello",
    description: "Weight the task, Feel light",
    installs: "10,000+",
    img: storypoints,
  },
  {
    title: "Manuscript",
    description:
      "Integrate Manuscript cases into Trello. Includes easy searching, linking, and updating abilities for all your Manuscript.",
    installs: "25,000+",
    img: manuscript,
  },
  {
    title: "GitHub + Trello 2-Way Sync",
    description:
      "Sync GitHub issues and pull requests as Trello cards, and keep them with two-way real-time updates.",
    installs: "5,000+",
        img: unitoavatar,
  },
  {
    title: "Code Snippets (Handy Power-Ups Pack)",
    description:
      "Code Snippets with syntax highlighting for easy readability.",
    installs: "500+",
    img: codesnippets,
  },
  {
    title: "Shape Up Board for Trello",
        description:
        "Hill Chart and Scope Mapping for seamless practice of Shape Up on Trello",
        installs: "100+",
        img: shapeup,
  },{
    title: "Google Calendar + Trello Two-Way Sync",
    description: "Sync cards, events, boards, calendars and more with this Trello and Google Calendar integration.",
    installs: "50,000+",
    img: unitoavatar,
  },
  {
    title: "Smart Deadlines",
    description: "Calculates due dates on cards using appointments from your iCal calendar.",
    installs: "5,000+",
    img: smartdeadlines
  },
  {
    title: "GitLab",
    description: "The GitLab Power-Up allows you to link a merge request with a card.",
    installs: "25,000+",
    img: gitlab
  },
  {
    title: "Card Description History for Trello",
    description: "Empower your Trello experience with a comprehensive history of card description changes.",
    installs: "1,000+",
    img: cardHistory
  },
  {
    title: "Gaming Backlog",
    description: "Integrate with Steam to track your unplayed video games.",
    installs: "1,000+",
   img: gamingBacklog
  },
  {
    title: "Good Mood",
    description: "Start your workday with a good mood.",
    installs: "500+",
    img: goodmood
  },
  {
    title: "Excel + Trello 2-Way Sync",
    description: "Sync Trello cards with Excel rows using this powerful integration.",
    installs: "10,000+",
  img: unitoavatar
  },
  {
    title: "Epic Cards by Screenful",
    description: "Group cards into larger bodies of work called epics and track progress.",
    installs: "50,000+",
   img: epic
  },
  {
    title: "Droplr",
    description: "Expands your Droplr links into rich content for your Trello cards.",
    installs: "1,000+",
   img: droplr
  },
  {
    title: "LauchDarkly",
    description:"Dark launch your new product features directly from within your Trello cards",
    installs: "500+",
    img: launchdarkly
  },{
    title:"API Developer ID Helper (by Sensum365)",
    description:"Easily copy/paste technical Ids of Boards,Lists and Cards in order to use them in the Trello API",
    installs: "5,000+",
    img: apihelper
  },
  {
     title: "Pomorello",
     description: "A Pomodoro timer integrated with Trello for better time management.",
     installs: "10,000+",
     img: pomorello
  },{
    title: "Card Relationships - Hello Epics",
    description: "Visualize and manage relationships between Trello cards.",
    installs: "100,000+",
   img: cardrelationships
  },
  {
    title: "ConfigCat Feature Flags",
    description: "Turn features On / Off from a linked Card",
    installs: "100+",
    img: apiExplorer
  },
  {
    title: "Advanced Search",
    description:
      "Quickly find cards you need! Overviewing and identifying bottlenecks or exporting cards to make reports becomes easy.",
    installs: "5,000+",
    img: advancedSearch
  },
   {
    title: "Scrum Poker",
    description:
      "Perfect planning of sprints and estimation of tasks.",
    installs: "1,000+",
   img: scrumPoker
  },
  {
    title: "User Picker for Trello",
    description:
      "Pick the users to task, Assignee, Tester and Reporter.",
    installs: "500+",
    img: userPicker
  },
  {
    title: "EstiMate",
    description:
      "Story points per member, team workload chart, capacity limits, planning poker and sprint planning with burndown charts.",
    installs: "500+",
    img: estimate
  },
  {
    title: "Jira + Trello 2-Way Sync",
    description:
      "Sync Trello cards to Jira issues with real-time two-way updates automatically.",
    installs: "10,000+",
    img: unitoavatar
  },
  {
    title: "Streak - habit tracker",
    description:
      "Create habits by tracking through Trello cards!",
    installs: "100,000+",
    img: streak
  },
  {
    title: "Redmine Sync (RedSync)",
    description:
      "Let's enhance Redmine's usability by integrating with Trello.",
    installs: "1,000+",
    img: redmine
  },{
    title: "Agile tools by corrello",
    description:
      "⭐FREE Story Points and WIP Limits⭐ - Agile Tools is fully integrated with Corrello Agile Dashboards",
    installs: "100,000+",
    img: agiletools
  },{
    title: "Card Finder",
    description:
      "Find any card on any of your Trello boards instantly! Card Finder searches all your cards from multiple boards with partial keyword matches.",
    installs: "10,000+",
    img: cardfinder
  },{
    title:"Card size by Screenful",
    description:"Set weights (e.g. hours or story points) for your cards to estimate how much work each card requires.",
    installs: "25,000+",
    img: scr
  }
];


function DevelopertoolsPowerups() {
return(
    <>
  <div className="h-screen bg-[#1F1F21] flex flex-col">
 <div className="flex-1 overflow-y-auto hide-scrollbar px-10 pb-6">
    <h2 className="text-2xl font-bold text-white px-10 pt-8 pb-12">
      Developer Tools
    </h2>

    {/* Scrollable content */}
   

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {developerTools.map((item, index) => (
          <div
            key={index}
            className="bg-[#333339] p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Top Section */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.img}
                className="w-8 h-8"
                alt={item.title}
              />

              <h2 className="text-white text-lg font-semibold">
                {item.title}
              </h2>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mb-4">
              Add
            </button>

            <p className="text-gray-400 text-sm mb-4">
              {item.description}
            </p>

            <p className="text-gray-500 text-sm flex items-center">
              <img src={icon} className="w-4 h-4 mr-2" />
              {item.installs}
            </p>

          </div>
        ))}

      </div>

    </div>

    </div>

    </>
)
}
export default DevelopertoolsPowerups;