import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import agile from "../../../assets/analytics_and_reporting/agile.svg";
import harvest from "../../../assets/analytics_and_reporting/harvest.png";
import reporting from "../../../assets/analytics_and_reporting/reporting.svg";
import sumup from "../../../assets/analytics_and_reporting/sumup.png";
import pivot from "../../../assets/analytics_and_reporting/pivot.png";
import wallet from "../../../assets/analytics_and_reporting/wallet.jpg";
import cardAging from "../../../assets/analytics_and_reporting/card-aging-icon.svg";
import hub from "../../../assets/analytics_and_reporting/hub.png";
import expo from "../../../assets/analytics_and_reporting/Exports.png";
import rung from "../../../assets/analytics_and_reporting/rung.png";
import toggl from "../../../assets/analytics_and_reporting/toggl_icon.png";
import tracktime from "../../../assets/analytics_and_reporting/tracktime.svg";
import bluecat from "../../../assets/analytics_and_reporting/swimlanesbluecat.png";
import upgradebrain from "../../../assets/analytics_and_reporting/upgradebrain.svg";
import timecamp from "../../../assets/analytics_and_reporting/timecamp.webp";
import dashio from "../../../assets/analytics_and_reporting/dashio-icon.png";
import goodgant from "../../../assets/analytics_and_reporting/goodgantt.png";
import anyfields from "../../../assets/analytics_and_reporting/anyfields.svg";
import epics from "../../../assets/analytics_and_reporting/epic.svg";
import screenful from "../../../assets/analytics_and_reporting/screenful.png";
import mailchimp from "../../../assets/analytics_and_reporting/MailChimpFreddie.png";
import TM from "../../../assets/analytics_and_reporting/TM.png";
import notion from "../../../assets/analytics_and_reporting/notion.svg";
import crossboard from "../../../assets/analytics_and_reporting/crossboard.png";
import analyticsclub from "../../../assets/analytics_and_reporting/analyticsclub.png";
import boardVisualizer from "../../../assets/analytics_and_reporting/boardVisualizer.svg";
import AIpowered from "../../../assets/analytics_and_reporting/AIpowered.png";
import SmartIndicatorsLogo from "../../../assets/analytics_and_reporting/SmartIndicatorsLogo.png";
import walletIncome from "../../../assets/analytics_and_reporting/walletIncome.jpg";
import MeetreAI from "../../../assets/analytics_and_reporting/MeetreAI.png";
import dailyupdates from "../../../assets/analytics_and_reporting/daily-updates.svg";
import apploye from "../../../assets\/analytics_and_reporting/apploye.png";
import BlueCatReports from "../../../assets/analytics_and_reporting/BlueCatReports_logomark_blue.png";
import view_statistics_icon from "../../../assets/analytics_and_reporting/view_statistics_icon.svg";
import logo_square from "../../../assets/analytics_and_reporting/logo_square.png";
import bd_icon_dragonfly from "../../../assets/analytics_and_reporting/bd-icon-dragonfly.png";
import dashcards from "../../../assets/analytics_and_reporting/53.svg";
import teamgrantt from "../../../assets/analytics_and_reporting/teamgrantt.svg";
import clockifyicon from "../../../assets/analytics_and_reporting/clockify-icon.svg";
import quickbooks from "../../../assets/analytics_and_reporting/quickbooks.png";
import victor from "../../../assets/analytics_and_reporting/victor.png";
import faviconios from "../../../assets/analytics_and_reporting/favicon-ios.png";
import csv from "../../../assets/analytics_and_reporting/csv.png";
import whoviewed from "../../../assets/analytics_and_reporting/whoviewed.png";
import wistiaflags from "../../../assets/analytics_and_reporting/wistia-flags.png";


let data = [
  {
    id: 1,
    image: harvest,
    title: "Harvest",
    desc: "Track time right from your Trello cards with Harvest integration.",
    value: "25,000+",
    link: "/power-ups/harvest",
  },
  {
    id: 2,
    image: sumup,
    title: "SumUp",
    desc: "Add values to your cards such as dollars or hours and show totals.",
    value: "10,000+",
    link: "/power-ups/sumup",
  },
  {
    id: 3,
    image: pivot,
    title: "Pivot Table (by Conjoint.ly)",
    desc: "Pivot table functionality for Trello boards using custom fields and members.",
    value: "5,000+",
    link:"/power-ups/5d84733c6fd69f69b3d8ce95",
  },
  {
    id: 4,
    image: wallet,
    title: "Finance Wallet Expenses Income Summary",
    desc: "Track your income and expenses easily.",
    value: "100+",
  },
  {
    id: 5,
    image: cardAging,
    title: "Card Aging",
    desc: "Quickly visualize inactive cards and prevent incomplete tasks.",
    value: "500,000+",
    link:'/power-ups/55a5d917446f517774210012'
  },
  {
    id: 6,
    title: "Slope Calculator",
    desc: "Calculate slope of a line using two points.",
    value: "100+",
    link:"/power-ups/63c930032c37b500c50e20d3"
  },
  {
    id: 7,
    image: hub,
    title: "Invention Hub",
    desc: "Migrate inventive material into Trello cards.",
    value: "500+",
    link:'/power-ups/5b2d506c62609bf9e8922158'
  },
  {
    id: 8,
    image: expo,
    title: "Exports for Trello by Blue Cat (CSV, Excel)",
    desc: "Export your Trello data easily.",
    value: "50,000+",
    link:"/power-ups/exportsfortrello"
  },
  {
    id: 9,
    image: rung,
    title: "Alerts by Rung",
    desc: "Track important alerts and notifications.",
    value: "1,000+",
    link : "/power-ups/593fd953bf51b56e7bb1e5b7"
  },
  {
    id: 10,
    image: toggl,
    title: "Toggl Integration for Trello",
    desc: "Operate time tracker without leaving Trello.",
    value: "10,000+",
    link : "/power-ups/toggl-integration-for-trello",
  },
  {
    id: 11,
    image: tracktime,
    title: "Card Progress (Track Time and Progress - Free)",
    desc: "Set custom progress percentages for tasks.",
    value: "5,000+",
  },
  {
    id: 12,
    image: bluecat,
    title: "Swimlanes by Blue Cat",
    desc: "Group cards by label, member, or custom fields.",
    value: "50,000+",
    link : "/power-ups/622f0650eda2213318a6fdee"
  },

  {
    id: 13,
    image: upgradebrain,
    title: "Habit Tracker by UpgradeYourBrain",
    desc: "Habit tracker integrated with Trello.",
    value: "5,000+",
    link:'/power-ups/5d3f40b4a5f03284e9f3bc24'
  },
  {
    id: 14,
    title: "Standard Deviation",
    desc: "Calculate standard deviation easily.",
    value: "100+",
    link : "/power-ups/63c78bd6ac76bc03962833f9"
  },
  {
    id: 15,
    image: timecamp,
    title: "Time Tracker by TimeCamp",
    desc: "Track time and generate reports.",
    value: "50,000+",
    link:'/power-ups/59cf411fe342369bca2565b9'
  },
  {
    id: 16,
    image: dashio,
    title: "Dashio",
    desc: "Track agile metrics with real-time charts.",
    value: "1,000+",
    link : "/power-ups/5c697e38e3a0791c604b2d41",
  },
  {
    id: 17,
    image: goodgant,
    title: "GoodGantt",
    desc: "Realtime Gantt Chart integration.",
    value: "10,000+",
    link : "/power-ups/goodgantt",
  },
  {
    id: 18,
    title: "Reports by AI Analyst - decommissioned",
    desc: "AI-powered board insights.",
    value: "100+",
    link:"/power-ups/reports-by-ai"
  },
  {
    id: 19,
    image: anyfields,
    title: "Any Fields",
    desc: "Create custom fields across boards.",
    value: "1,000+",
    link:"/power-ups/any-feilds"
  },
  {
    id: 20,
    image: epics,
    title: "Epics by Rogue Shadows",
    desc: "All-in-one agile board plugin.",
    value: "500+",
    link:'/power-ups/671a939ace67d0b570f20d3f'
  },
  {
    id: 21,
    image: screenful,
    title: "Analytics & Reports by Screenful",
    desc: "Advanced charts and automated reports.",
    value: "25,000+",
    link : "/power-ups/570262ea1100fa611d7e200a"
  },
  {
    id: 22,
    title: "Bank Blender Finance",
    desc: "We've built Tiller for Trello to manage financial workflows.",
    value: "100+",
    link:'/power-ups/67ad0f66c16323b2d7065943'
  },
  {
    id: 23,
    image: analyticsclub,
    title: "Analytics - Tiny Power-Ups Club",
    desc: "Easy view-tracking on boards and cards.",
    value: "1,000+",
    link : "/power-ups/613269624bccb32439780227"
  },
  {
    id: 24,
    image: mailchimp,
    title: "MailChimp",
    desc: "At a glance, get up-to-date information and stats about templates and campaigns attached to a card.",
    value: "25,000+",
    link: '/power-ups/55a5d917446f51777421000c/mailchimp',
  },
  {
    id: 25,
    image: TM,
    title: "T&M: Time tracking for Trello cards",
    desc: "Simple and efficient way to track work time.",
    value: "100+",
    link:'/power-ups/682c19fcd2c2384f846488ba'
  },
  {
    id: 26,
    title: "Expense Trackello",
    desc: "An easy and convenient way to track and export expenses to Excel directly on your board.",
    value: "5,000+",
    link : "/power-ups/601b5ad6810bf03354366eab"
  },
  {
    id: 27,
    image: notion,
    title: "Notion + Trello 2-Way Sync",
    desc: "Sync Trello cards and Notion databases automatically with real-time two-way integration.",
    value: "10,000+",
  },
  {
    id: 28,
    image: crossboard,
    title: "Cross-Board Reporting & Dashboards",
    desc: "View tasks from multiple boards and workspaces. Track KPIs with charts, analytics and export data to Excel.",
    value: "100+",
    link:'/power-ups/66291013ec3abfbf13b255c6'
  },
  {
    id: 29,
    image: boardVisualizer,
    title: "Board Visualizer for Trello",
    desc: "Visualize checklist items on an interactive timeline with drag-and-drop rescheduling and workload tracking.",
    value: "500+",
    link : "/power-ups/board-visualizer-for-trello"
  },
  {
    id: 30,
    image: AIpowered,
    title: "AI Powered Analyst",
    desc: "AI-Powered Insights for Trello: Your Virtual Project Analyst.",
    value: "1,000+",
  },
  {
    id: 31,
    title: "Undo for Trello",
    desc: "One-click restore for your business-critical data on Trello.",
    value: "10,000+",
    link : "/power-ups/undo-for-trello"
  },
  {
    id: 32,
    image: SmartIndicatorsLogo,
    title: "Smart Card Indicators",
    desc: "Adds custom badges to Trello cards based on rules.",
    value: "100+",
  },
  {
    id: 33,
    image: walletIncome,
    title: "Wallet Income & Expenses Best for Online Business",
    desc: "Waller + Online Income and Expenses Tracker.",
    value: "100+",
    link:'/power-ups/6869fbd7d81cdf00f27b4f61'
  },
  {
    id: 34,
    image: MeetreAI,
    title: "Meetre AI",
    desc: "AI that transforms boards into structured intelligence, uncovering insights that drive faster and better decisions.",
  },
  {
    id: 35,
    image: dailyupdates,
    title: "Daily Updates",
    desc: "Daily standup tool to sync your team by asking everyone what they did yesterday, today & issues they’re facing.",
    value: "5,000+",
    link :"/power-ups/5d5b3b96fe9c9f88bc7bd311"
  },
  {
    id: 36,
    image: apploye,
    title: "Trello Time Tracking by Apploye",
    desc: "Connect Apploye Time Tracker and Trello to make project & time management smooth and effortless.",
    value: "1,000+",
    link : "/power-ups/615d5b18dd889573e477dcdc"
  },
  {
    id: 37,
    image: BlueCatReports,
    title: "Reports by Blue Cat",
    desc: "Easy, beautiful, fully customizable drag-and-drop reporting for Trello.",
    value: "100,000+",
  },
  {
    id: 38,
    image: view_statistics_icon,
    title: "Card Views & Board Visits",
    desc: "Track who visits your boards and cards, when, and for how long — with clear, built-in analytics.",
    value: "500+",
    link:"/power-ups/69314b6c5f37ae1295d8eebc",
    
  },
  {
    id: 39,
    image: logo_square,
    title: "Time in List by Blue Cat",
    desc: "Time in List shows how long cards have been in their current list and how long they spent in all lists they touched.",
    value: "50,000+",
    link:"/power-ups/5b4765f383dd7c75d8e57be4/time-in-list-by-blue-cat",
  },
  {
    id: 40,
    image: bd_icon_dragonfly,
    title: "Workspace Reports",
    desc: "Build dynamic table-based reports.",
    value: "1,000+",
    link : "/power-ups/62d1ae596c260a5422c5bff1",
  },
  {
    id: 41,
    image: dashcards,
    title: "Dashcards",
    desc: "Turn any board into a dashboard and track work across Trello",
    value: "100,000+",
    link : "/power-ups/6048e897c73d032a983e2a7c"
  },
  {
    id: 42,
    image: teamgrantt,
    title: "TeamGantt",
    desc: "View your cards in a beautiful timeline used by thousands of customers worldwide.",
    value: "100,000+",
    link : "/power-ups/5970d4298c14fdf691c95a76"
  },
  {
    id: 43,
    image: clockifyicon,
    title: "Clockify Integration for Trello",
    desc: "Operate Clockify time tracker inside your Trello board.",
    value: "10,000+",
    link : "/power-ups/610aa8f099715a7006149568",
  },
  {
    id: 44,
    title: "Critical Value Calculator",
    desc: "Calculates T, Z, F, CHI square and R values.",
    value: "100+",
  },
  {
    id: 45,
    image: quickbooks,
    title: "Quickbooks Time Tracking",
    desc: "Build a powerful Quickbooks integration from your Trello board.",
    value: "500+",
  },
  {
    id: 46,
    image: victor,
    title: "Victor The Tech Lead",
    desc: "AI-powered Virtual Tech Lead built to help you and your team develop great projects.",
    value: "100+",
  },
  {
    id: 47,
    image: faviconios,
    title: "Time tracker by Tracking Time",
    desc: "Simple time tracking for Trello. Track cards and get automatic timesheets.",
    value: "5,000+",
  },
  {
    id: 48,
    image: csv,
    title: "Cross-Board Export: CSV, JSON, XLSX, Google Sheets",
    desc: "Export across multiple boards with one installation.",
    value: "1,000+",
  },

  {
    id: 49,
    image: whoviewed,
    title: "Who Viewed?",
    desc: "Discover who viewed your board and cards!",
    value: "1,000+",
  },
  {
    id: 50,
    title: "Data Highlighter",
    desc: "Turn your Trello cards into easy, precise, highlighted data in seconds.",
    value: "1,000+",
  },
  {
    id: 51,
    image: wistiaflags,
    title: "Wistia",
    desc: "The Wistia Trello Power-Up makes it easier and more delightful to manage and measure your videos.",
    value: "5,000+",
    link : "/power-ups/wistia",
  },

];

const AnalyticsAndReportingPowerups = () => {
  return (
    <div className="px-3 w-full min-h-screen overflow-y-auto hide-scrollbar">
      <h2 className="font-bold text-xl pl-5 pb-6 text-white">
        Analytics & reporting
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {data.map(({ id, image, title, desc, value,link}) => {
          return (
           <Link to={link} key={id}>
            <div
              key={id}
              className="w-70 h-50 flex flex-col justify-evenly p-2 rounded-md cursor-pointer
              bg-[hsla(0,0%,100%,0.05)]
              hover:bg-[hsla(0,0%,100%,0.10)]
              border border-[hsla(0,0%,100%,0.08)]
              shadow-lg hover:shadow-2xl
              transition-all duration-300"
              >
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  {image && (
                    <img
                      src={image}
                      alt={title}
                      className="h-9 w-9 object-contain"
                    />
                  )}
                  <h1 className="font-bold text-md text-white ">{title}</h1>
                </div>
                  <button className="bg-blue-800  hover:bg-blue-700 text-white px-5 py-1 text-center text-sm rounded-md">
                    Add
                  </button>

                <p className="text-sm text-gray-300 leading-relaxed">{desc.slice(0,100)}{desc.length>100?"...":""}</p>
              </div>

              <div className="flex justify-between items-center mt-5">
                {value && (
                  <div className="flex items-center gap-2 ">
                    <img src={reporting} alt="reporting" className="h-4 w-4" />
                    <p className="text-xs text-gray-300">{value}</p>
                  </div>
                )}
              </div>
            </div>
           </Link>
          );
        })}
      </div>
      <Outlet/>
    </div>
  );
};

export default AnalyticsAndReportingPowerups;