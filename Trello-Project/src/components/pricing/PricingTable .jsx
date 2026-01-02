import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PricingTable = () => {
  const pricingData = [
    {
      feature: "Unlimited cards",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Quick capture",
      description:
        "Instantly capture to-dos, notes, and messages, from email, Slack, and Microsoft Teams.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Inbox",
      description:
        "Gather messages and to-dos in this personal space before organizing them into your boards.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Planner (view-only)",
      description:
        "View your scheduled cards on a calendar and synchronize events from your favorite tools.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Quick Capture poweslate by AI",
      description:
        "Instantly capture to-dos, notes, and messages from email, Slack, and Microsoft Teams using AI.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Planner (full access)",
      description:
        "Drag and drop cards on a calendar to block any available time. Sync with more events in your favorite tools.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Card mirroring",
      description:
        "Keep your to-dos aligned across boards. Mirror a single card to multiple boards to view and edit it from anywhere.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Built-in automation",
      description:
        "Powerful no-code automation is built into every Trello board.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Start automating",
      path: "/butler-automation",
    },
    {
      feature: "Assignee and due dates",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "iOS and Android mobile apps",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Download mobile apps",
      path: "/platforms",
    },
    {
      feature: "Desktop app",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Download desktop app",
      path: "/platforms",
    },
    {
      feature: "Unlimited activity logs",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Trello templates",
      description:
        "Give your team a blueprint for success with tried-and-true templates from the Trello community.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Try a template",
      path: "/templates",
    },
    {
      feature: "2-factor authentication",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Mobile device management",
      description:
        "Enforce security controls on mobile app usage through built-in mobile device management (MDM) support for iOS and Android.",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Unlimited power-ups",
      description:
        "Integrate with more than 200+ apps and tools your team depends on like Slack, Google Drive, Salesforce, and more directly into your Trello boards. (Note: Some Power-Ups by our partners require an additional subscription fee.)",
      free: "True",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/power-ups",
    },
    {
      feature: "Unlimited Workspace collaborators",
      description: "Up to 10 collaborators",
      free: "Up to 10 collaborators",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Unlimited boards",
      description:
        "Create as many Trello boards as your team sees fit; from onboarding new hires, to sprint planning, and every team meeting agenda in between.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Advanced checklists",
      description:
        "Break down projects into byte-sized tasks and get granular by assigning members and due dates to individual tasks.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Custom fields",
      description:
        "Bring process and formality to your workflow by structuring information on Trello cards to the task at hand with Custom Fields.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Collapsible lists",
      description:
        "Keep your Trello boards tidy and focus on what matters by easily hiding and revealing list details.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/blog/trello/new-list-features",
    },
    {
      feature: "List colors",
      description:
        "Brighten up your boards by using list colors to easily spot priorities and keep your to-dos organized and on track.",
      free: "False",
      standard: "True",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/blog/trello/new-list-features",
    },
    {
      feature: "Atlassian Intelligence (AI)",
      description:
        "Enhance Trello card descriptions and comments effortlessly with AI-driven content generation, grammar correction, and brainstorming.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/tour",
    },
    {
      feature: "Dashboard view",
      description:
        "Trello’s reporting tool lets you access real-time insights and communicate your team’s progress in a visual and meaningful way.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path:"/views/dashboard",
    },
    {
      feature: "Map view",
      description:
        "Plan an offsite, scout new office locations, or manage product distribution points by adding locations to your cards and visualizing them geographically on a map.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/views/map",
    },
    {
      feature: "Timeline view",
      description:
        "Plan your project, stay on top of every sprint, and see how all of the moving parts fit together over time with Timeline.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path:"/views/timeline",
    },
    {
      feature: "Table View",
      description:
        "Bring a clearer perspective to all the work happening across a single board in a list format where you can create and edit cards in just a few clicks.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path: "/views/table",
    },
    {
      feature: "Calendar view",
      description:
        "Calendar displays start dates, due dates, and advanced checklist items so you can see what lies ahead for your project and stay on top of today’s to-dos.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path : "/views/calendar"
    },
    {
      feature: "Workspace table view",
      description:
        "See your projects and tasks across Workspaces and boards in a spreadsheet-style list that can be sorted and filteslate to drill down to exactly the cards you need to see.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path : "/views/workspace",
    },
    {
      feature: "Workspace calendar view",
      description:
        "Workspace calendar displays items with start dates and due dates across your projects and boards, so you can see what lies ahead for all your teamwork.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: "Learn more",
      path : "/views/workspace"
    },
    {
      feature: "Workspace-level templates",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Command run administration",
      description:
        "Premium or Enterprise administrators can disable commands on behalf of other users, and perform other command maintenance.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Board collections",
      description:
        "Premium and Enterprise teams can use Board Collections to easily group boards together whether by Workspace, department, or major project.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Observers",
      description:
        "Observers are a Premium security setting that limit a user’s actions within a board.",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Domain-restricted invites",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Deactivate members",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Simple data export",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Unlimited command runs",
      free: "False",
      standard: "False",
      premium: "True",
      enterprise: "True",
      link: null,
    },
    {
      feature: "SAML SSO via Atlassian Guard",
      description:
        "Atlassian Guard is a separate subscription that your company can enable across all your Atlassian products and starts at $4/month/user.",
      free: "Available",
      standard: "Available",
      premium: "Available",
      enterprise: "True",
      link: "Learn more",
      path : "/software/guard",
    },
    {
      feature: "Unlimited workspaces",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Power-up administration",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Attachment restrictions",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Organization wide permissions",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Organization visible boards",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Public board management",
      free: "False",
      standard: "False",
      premium: "False",
      enterprise: "True",
      link: null,
    },
    {
      feature: "Support",
      free: "Community Support",
      standard: "Local Business Hours",
      premium: "24/5 Premium Support",
      enterprise: "24/7 Enterprise Admin Support",
      link: "Learn more",
    },
  ];

  return (
    <section className="px-[200px]">
      <div className="text-center pt-13 mb-12">
        <h1 className="text-4xl font-bold p-4">Compare our plans</h1>
        {/* <IoSearchOutline className='text-gray-500  left-100 bottom-[15px]' /> */}
        <input
          className="border rounded border-gray-400 w-[350px] pl-9 py-3"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="  border-b border-slate-400">
          <thead>
            <tr>
              <th className="border-b border-slate-300 p-4 text-left uppercase">
                Features
              </th>
              <th className="border-b border-slate-300 p-4 text-left uppercase">
                Free
              </th>
              <th className="border-b border-slate-300 p-4 text-left uppercase">
                Standard
              </th>
              <th className="border-b border-slate-300 p-4 text-left uppercase">
                Premium
              </th>
              <th className="border-b border-slate-300 p-4 text-left uppercase">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-slate-300 py-4 pr-4">
                  <h3 className="font-medium text-lg uppercase">
                    {row.feature}
                  </h3>
                  {row.description && (
                    <>
                      <p className="text-sm text-gray-500 mt-1">
                        {row.description}
                      </p>
                    </>
                  )}
                  <Link
                    href="#"
                    className="text-blue-600 underline"
                    to={row.path}
                  >
                    {row.link}{" "}
                  </Link>
                </td>
                <td className="border border-slate-300 p-4">
                  {row.free == "True" ? (
                    <FaCheck className="text-green-600 w-full" />
                  ) : row.free == "False" ? (
                    <></>
                  ) : (
                    row.free
                  )}
                </td>
                <td className="border border-slate-300 p-4">
                  {row.standard == "True" ? (
                    <FaCheck className="text-green-600 w-full" />
                  ) : row.standard == "False" ? (
                    <></>
                  ) : (
                    row.standard
                  )}
                </td>
                <td className="border border-slate-300 p-4">
                  {row.premium == "True" ? (
                    <FaCheck className="text-green-600 w-full" />
                  ) : row.premium == "False" ? (
                    <></>
                  ) : (
                    row.premium
                  )}
                </td>
                <td className="border border-slate-300 p-4">
                  {row.enterprise == "True" ? (
                    <FaCheck className="text-green-600 w-full" />
                  ) : row.enterprise == "False" ? (
                    <></>
                  ) : (
                    row.enterprise
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-semibold mb-3">
            Didn’t find what you were looking for?
          </h1>
          <Link
            to="/trello/docs/submitting-feature-requests-for-trello/"
            className=" border hover:bg-blue-200 transition-all border-blue-600 px-6 py-4 rounded"
          >
            Make a Suggestion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
