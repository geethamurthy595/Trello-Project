import testuff from "../../../assets/testuff.png";
import testmo from "../../../assets/testmo.png";
import disbug from "../../../assets/disbug.png";
import scrum from "../../../assets/Scrum.png";
import reportabug from "../../../assets/reportabug.png";
import betterbugs from "../../../assets/betterbugs.png";
import engine from "../../../assets/engine.png";
import zenaton from "../../../assets/zenaton.png";
import codestream from "../../../assets/codestream.png";
import cdata from "../../../assets/cdata.png";
import rollbar from "../../../assets/rollbar.png";
import honeybadger from "../../../assets/honeybadger.png";
import redsync from "../../../assets/redsync.png";
import easyQA from "../../../assets/Easy_QA.png";
import testlodge from "../../../assets/Test_Lodge.png";
import corello from "../../../assets/Corello.png";
import scrumgenious from "../../../assets/ScrumGenius.png";
import statussync from "../../../assets/Statussync.png";
import composio from "../../../assets/composio.png";
import instabug from "../../../assets/Instabug.png";
import testiny from "../../../assets/testiny.png";
import bugreportsbydummy from "../../../assets/bugreportsbydummy.png";
import capturedev from "../../../assets/capture_dev.png";
import bugherd from "../../../assets/BugHerd.png";
import netcrunch from "../../../assets/NetCrunch.png";
import pegasus from "../../../assets/Pegasus.png";
import feedbucket from "../../../assets/feedbucket.png";
import gitlab from "../../../assets/GitLab1.png";
import traceybugcop from "../../../assets/TraceyBugCop.png";
import raygun from "../../../assets/Raygun.png";
import Trello_Webhook_Manager from "../../../assets/Trello_Webhook_Manager.png";
import github from "../../../assets/GitHub.png";
const Developertools = () => {
  const developertools = [
    {
      name: "Testuff",
      description: "Automatically create defects in Trello and send status updates to Testuff.",
      isFeatured: false,
      logo: testuff,
    },
    {
      name: "Testmo",
      description: "Add a link to Trello cards and boards from Testmo test management.",
      isFeatured: false,
      logo: testmo,
    },
    {
      name: "Disbug",
      description: "Report and fix bugs remarkably faster by adding 10x clarity to bug reports.",
      isFeatured: false,
      logo: disbug,
    },
    {
      name: "Scrum for Trello",
      description: "Scrum for Trello adds estimates and records time spent on cards.",
      isFeatured: false,
      logo: scrum,
    },
    {
      name: "ReportaBug",
      description: "ReportaBug lets teams and clients submit visual software feedback and bug reports to Trello with screen recordings, annotated screenshots, console logs, session replays, and device info",
      isFeatured: false,
      logo: reportabug,
    },
    {
      name: "BetterBugs",
      description: "BetterBugs lets you share detailed bug reports directly to your Kanban boards on Trello for streamlined bug reporting and debugging workflows. To use BetterBugs, you can use any valid email account or directly login with your Gmail or GitHub account.",
      isFeatured: false,
      logo: betterbugs,
    },
    {
      name: "Engine",
      description: "Engine is your AI-powered junior engineer. Assign cards to Engine directly from Trello and quickly get a pull request for your review or approval. Clear your backlog with help from Engine.",
      isFeatured: false,
      logo: engine,
    },
    {
      name: "Zenaton",
      description: "Connect Trello to hundred applications in Zenaton.",
      isFeatured: false,
      logo: zenaton,
    },
    {
      name: "CodeStream",
      description: "Add Trello cards from inside your IDE, and they'll be linked to and from your codebase.",
      isFeatured: false,
      logo: codestream,
    },
    {
      name: "CData Trello Connector",
      description: "Low-code connectivity to live Trello data through JDBC, ODBC, ADO.NET, and more!",
      isFeatured: false,
      logo: cdata,
    },
    {
      name: "Rollbar",
      description: "Enables developers, product owners and teams to link a Rollbar error to Cards.",
      isFeatured: false,
      logo: rollbar,
    },
    {
      name: "Honeybadger.io",
      description: "Turn Trello users into DevOps heroes by linking Honeybadger's error reporting to cards.",
      isFeatured: false,
      logo: honeybadger,
    },
    {
      name: "Redmine Sync (RedSync)",
      description: "Sync Redmine’s Issues to Trello’s Cards. Via Tello’s intuitive user interface, users can check the Issue’s schedule and report the work progress to Redmine while leveraging Trello’s advanced task management features.",
      isFeatured: false,
      logo: redsync,
    },
    {
      name: "EasyQA",
      description: "Synchronize your board with EasyQA Test Management Tool.",
      isFeatured: false,
      logo: easyQA,
    },
    {
      name: "TestLodge",
      description: "Link to your test projects and create cards whenever a test fails.",
      isFeatured: false,
      logo: testlodge,
    },
    {
      name: "Corrello",
      description: "A high-level view dashboard for agile teams on Trello.",
      isFeatured: false,
      logo: corello,
    },
    {
      name: "ScrumGeneous",
      description: "Automatically push Trello activity to be matched with daily stand-ups in ScrumGenius.",
      isFeatured: false,
      logo: scrumgenious,
    },
    {
      name: "Statussync",
      description: "Keep in touch with third-party services and get notified when they go down.",
      isFeatured: false,
      logo: statussync,
    },
    {
      name: "Composio",
      description: "Integrate Trello into your AI Agentic or LLM projects seamlessly with Composio with just a few lines of code.",
      isFeatured: false,
      logo: composio,
    },
    {
      name: "Instabug",
      description: "Instabug's bug reporting & user feedback tools help companies enhance their app quality.",
      isFeatured: false,
      logo: instabug,
    },
    {
      name: "Testiny",
      description: "Link Trello cards to test cases and results in Testiny Test Management Tool.",
      isFeatured: false,
      logo: testiny,    
    },
    {
      name: "Bug Reports by Dummi",
      description: "Dummi makes bug reporting effortless. Capture video replays, screenshots, and technical details in one click, then send developer-ready reports directly to Trello. No guesswork, no back-and-forth—just clear, fast bug reports.",
      isFeatured: false,
      logo: bugreportsbydummy,    
    },
    {
      name: "Capture.dev",
      description: "Send feedback and bug reports from your website to Trello. Complete with all the context developers need, captured in a click.",
      isFeatured: false,
      logo: capturedev,    
    },
    {
      name: "BugHerd",
      description: "Integrate Trello with BugHerd for complete website project management BugHerd integrates directly with Trello, making it easy to give feedback and report bugs on websites without having to change the way your team works. It’s the best of both worlds.",
      isFeatured: false,
      logo: bugherd,    
    },
    {
      name: "NetCrunch",
      description: "Network, server & application monitoring for fast diagnostics & problem resolution.",
      isFeatured: false,
      logo: netcrunch,  
    },
    {
      name: "Pegasus",
      description: "Easily sync card info, statuses, assignments and more from Trello to other issue trackers.",
      isFeatured: false,
      logo: pegasus,
    },
    {
      name: "Feedbucket",
      description: "Collect and manage website feedback from your clients inside of Trello.",
      isFeatured: false,
      logo: feedbucket,
    },
    {
      name: "GitLab",
      description: "Attach merge requests from Gitlab to a card.",
      isFeatured: false,
      logo: gitlab,
    },
    {
      name: "Tracey Bug Cop",
      description: "Visually pinpoint bugs and save a screenshot with bug details directly into Trello.",
      isFeatured: false,
      logo: traceybugcop,
    },
    {
      name: "Raygun",
      description: "Bring important errors to your team's attention on Trello.",
      isFeatured: false,
      logo: raygun,
    },
    // {
    //   name: "Trello Webhook Manager",
    //   description: "A simple UI to manage Trello Webhooks.",
    //   isFeatured: false,
    //   logo: Trello_Webhook_Manager,
    // },
    // {
    //   name: "GitHub",
    //   description: "Attach live pull requests to Trello cards.",
    //   isFeatured: false,
    //   logo: github,
    // },
  ];
    return (
        <>
        <div>
            <h1 className="text-2xl mb-5 mt-10 font-semibold">
                Developer tools({developertools.length})
            </h1>
            <div className="">
                <div className="grid grid-cols-3 gap-7">
                    {developertools.map((integrate, index) => {
                        return (
                            <div
                                key={index}
                                className="pt-5 shadow-xl relative rounded w-full">
                                <div className="p-3">
                                    <div className="flex gap-3 items-center">
                                        <img
                                            className="w-12"
                                            src={integrate.logo}
                                            alt=""
                                        />
                                        <h3 className="text-xl font-semibold">
                                            {integrate.name}
                                        </h3>
                                    </div>
                                    <p className="mb-20">{integrate.description}</p>
                                    <button className="border-1 rounded px-4 py-3 absolute bottom-5 hover:bg-gray-200 cursor-pointer">
                                        {integrate.isFeatured ? "Enable" : "Configure"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex items-center ml-80 w-30 mb-12 mt-8 justify-center">
                        <button className="border-1  bg-blue-600 hover:bg-blue-700 text-whitfont-semibold px-6 py-3 rounded cursor-pointer text-white font-semibold">
                            View all
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Developertools