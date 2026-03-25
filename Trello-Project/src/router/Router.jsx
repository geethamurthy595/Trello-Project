import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Pricing from "../components/pricing/Pricing";
import Inbox from "../components/features/Inbox";
import PowerUps from "../components/features/powerups/PowerUps";
import Planner from "../components/features/Planner";
import CustomerStories from "../components/resources/CustomerStories";
import ProductManagement from "../components/solutions/productManagement/ProductManagement";
import Webinar from "../components/resources/Webinar";
import Templates from "../components/features/Templates";
import Automation from "../components/features/Automation";
import Standard from "../components/plans/standard/Standard";
import Enterprise from "../components/plans/enterprise/Enterprise";
import EngineeringTeams from "../components/solutions/engineeringTeams/EngineeringTeams";
import Startups from "../components/solutions/startups/Startups";
import RemoteWorkGuide from "../components/resources/RemoteWorkGuide";
import DispellingRemoteWork from "../components/resources/DispellingRemoteWork";
import Premium from "../components/plans/premium/Premium";
import Trelloguide from "../components/resources/Trelloguide";
import Marketingteams from "../components/Marketingteams";
import Checkout from "../components/features/Checkout";
import Integrations from "../components/integration/Integrations";
import { ResourcesHubMain } from "../components/solutions/resourcesHub/ResourcesHubMain";
import { RemoteTeams } from "../components/solutions/remoteteams/RemoteTeams";
import Design from "../components/solutions/designTeams/Design";
import Usecase from "../components/solutions/Usecase";
import Section from "../components/solutions/taskManagement/Section";
import Projectmanagement from "../components/solutions/Projectmanagement";
import Trelloblog from "../components/resources/Trelloblog";
import Help from "../components/resources/help/Help";
import InboxGetStarted from "../components/features/Inboxgetstarted";
import Developers from "../components/resources/Developers";
import See_all_Teams from "../components/solutions/See_all_Teams";
import GoogleDrive from "../components/solutions/taskManagement/googleDrive/GoogleDrive";
import SlackCard from "../components/solutions/taskManagement/slack/SlackCard";
import Scan2Cad from "../components/solutions/productManagement/scan2Cad/Scan2Cad";
import AboutTrello from "../components/footer/AboutTrello";
import Zapier from "../components/solutions/taskManagement/zapier/Zapier";
import Confluencecloud from "../components/solutions/projectManagement/confluence/Confluencecloud";
import Jira from "../components/solutions/taskManagement/jira/Jira";
import ListLimit from "../components/solutions/projectManagement/ListLimit";
import Blog from "../components/solutions/atlassianFooter/Blog";
import Makeasuggestion from "../components/pricing/Makeasuggestion";
import Footerapps from "../components/footer/footerapps/Footerapps";
import LearnMore from "../components/plans/enterprise/LearnMore";
import Swag from "../components/solutions/productManagement/Swagup/Swag";
import Documentation from "../components/resources/help/Documentation";
import CollapsiableLearnmore from "../components/pricing/collapsiableList/CollapsiableLearnmore";
import TimeTracking from "../components/solutions/projectManagement/timeTracking/TimeTracking";
import Mapview from "../components/pricing/PricingMapview/Mapview";
import CardAging from "../components/solutions/taskManagement/cardAging/CardAging";
import TableView from "../components/pricing/TableView/TableView";
import Deskplants from "../components/deskplants/Deskplants";
import Dashboard from "../components/pricing/PricingDashboard/Dashboard";
import Instinct from "../components/solutions/productManagement/instinct/Instinct";
import WorkspaceTableView from "../components/pricing/WorkspaceTableView/WorkspaceTableView";
import Watchwebinar from "../components/features/inboxGetStarted/Watchwebinar";
import SamlAtlassianGuardLearnMore from "../components/pricing/samlAtlassianGuardLearnMore/SamlAtlassianGuardLearnMore";
import Altassianprivacy from "../components/plans/standard/Altassianprivacy";
import CalendarView from "../components/pricing/calendarView/CalendarView";
import MicrosoftTeams from "../components/solutions/resourcesHub/microsoftTeams/MicrosoftTeams";
import Health from "../components/solutions/seeAllUseCases/health/Health";
import WorkspaceCalender from "../components/pricing/WorkSpaceCalender/WorkspaceCalender";
import Timeline from "../components/pricing/Timeline/Timeline";
import Finance from "../components/solutions/seeAllUseCases/finance/Finance";
import EditorialCalender from "../components/solutions/seeAllUseCases/editorialCalender/EditorialCalender";
import InformationTechnology from "../components/solutions/seeAllUseCases/informationTechnology/InformationTechnology";
import TeamManegment from "../components/solutions/teamManegment/TeamManegment";
import Miro from "../components/solutions/resourcesHub/miroCard/Miro";
import Onboarding from "../components/solutions/seeAllUseCases/onboarding/Onboarding";
import SlasCard from "../components/solutions/seeAllUseCases/informationTechnology/slasCard/SlasCard";
import Professional from "../components/solutions/seeAllUseCases/professionalservies/Professional";
import CardRepeater from "../components/solutions/seeAllUseCases/health/healthcard/cardRepeater";
import ProcessTracking from "../components/solutions/seeAllUseCases/processTracking/ProcessTracking";
import Gmail from "../components/solutions/seeAllUseCases/processTracking/Gmail";
import Hubspot from "../Components/solutions/seeAllUseCases/editorialCalender/Hubspot";
import Calender from "../Components/solutions/seeAllUseCases/editorialCalender/Calender";
import Voting from "../Components/solutions/seeAllUseCases/editorialCalender/Voting";
import DashCard from "../components/solutions/seeAllUseCases/informationTechnology/itDashcard/DashCard";
import ProjectStatusDashboard from "../components/solutions/seeAllUseCases/projectStatusDashboard/ProjectStatusDashboard";
import UnitoCardMonitoring from "../components/solutions/seeAllUseCases/projectStatusDashboard/unitoCardMonitoring/UnitoCardMonitoring";
import TryViews from "../components/solutions/seeAllUseCases/editorialCalender/tryViews/TryViews";
import Mailchimp from "../components/solutions/seeAllUseCases/professionalservies/mailchimp/Mailchimp";
import Meetings from "../components/solutions/seeAllUseCases/meetings/Meetings";
import AmazonFields from "../components/solutions/seeAllUseCases/finance/AmazonFields";
import TrelloImport from "../components/solutions/seeAllUseCases/finance/TrelloImport";
import TypeForm from "../components/solutions/seeAllUseCases/health/healthcard/TypeForm";
import Crmble from "../components/solutions/seeAllUseCases/health/healthcard/Crmble";
import BrainStorming from "../components/solutions/seeAllUseCases/brainstorming/BrainStorming";

import Crm from "../components/solutions/seeAllUseCases/crm/Crm";
import NewHireOnBoarding from "../components/solutions/seeAllUseCases/onboarding/newHireOnBoarding/NewHireOnBoarding";
import NewHireTemplate from "../components/solutions/seeAllUseCases/onboarding/newHireOnBoarding/NewHireTemplate";
import TempFeatures from "../components/features/temples/TempFeatures";
import BusinessTemplet from "../components/features/temples/business/BusinessTemplet";
import CustomerOnboarding from "../Components/solutions/seeAllUseCases/onboarding/customerOnboarding/CustomerOnboarding";
import CustomerOnboardingTemplate from "../Components/solutions/seeAllUseCases/onboarding/customerOnboarding/CustomerOnboardingTemplate";
import OB306090 from "../components/solutions/seeAllUseCases/onboarding/OB306090/OB306090";
import Template from "../components/solutions/seeAllUseCases/onboarding/OB306090/Template";

import Pipedrive from "../components/solutions/seeAllUseCases/crm/pipedrive/Pipedrive";
import Droplr from "../components/solutions/seeAllUseCases/crm/droplr/Droplr";
import Zohodesk from "../components/solutions/seeAllUseCases/crm/zoho desk/Zohodesk";
import Intercom from "../components/solutions/seeAllUseCases/crm/intercom/Intercom";
import Crumble from "../components/solutions/seeAllUseCases/crm/crumble/Crumble";
import XeroProjects from "../components/solutions/seeAllUseCases/nonprofits/nonProfitCard/XeroProjects";
import Salesforce from "../components/solutions/seeAllUseCases/nonprofits/nonProfitCard/Salesforce";
import EmployeeManual from "../components/solutions/seeAllUseCases/onboarding/employeeManual/EmployeeManual";
import EmployeeManualChildCard from "../components/solutions/seeAllUseCases/onboarding/employeeManual/EmployeeManualChildCard";
import EmployeeManualCard from "../components/solutions/seeAllUseCases/onboarding/employeeManual/EmployeeManualCard";
import Otp from "../components/Otp/Otp";
import Setupaccountpage from "../components/setupaccountpage";
// Templets:
import ProjectManagement from "../components/features/temples/projectmanagement/ProjectManagement";
import HrandOperations from "../components/features/templates/HrandOperations";
import MarketingTemplate from "../Components/features/temples/marketing/MarketingTemplate";
import EngineeringTemplet from "../components/features/temples/engineering/EngineeringTemplet";
import RemoteWo from "../components/features/remoteWo/RemoteWo";
import ProductManagementFeatures from "../components/features/temples/productmanagement/ProductManagementFeatures";
import Personal from "../components/features/temples/personal/Personal";

//Integration
import AllIntegrations from "../components/integration/integrationComponents/AllIntegrations";
import ITProductManagement from "../components/integration/IT&productmanagement/ITProductManagement";
import BoardUtility from "../components/integration/integrationComponents/BoardUtility";
import Developertools from "../Components/integration/integrationComponents/Developertools";
import ItProject from "../components/integration/integrationComponents/it&projectmanagement/ItProject";
import Welcompagepart1 from "../components/boards/welcome/Welcompagepart1";
import Welcomepage2 from "../components/boards/welcome/Welcomepage2";
import Welcompage1 from "../components/boards/welcome/Welcompage1";
import IntegrationAutomation from "../components/integration/integrationComponents/IntegrationAutomation/IntegrationAutomation";
import AnalyticsAndReporting from "../components/integration/analyticsandreporting/AnalyticsAndReporting";
import CommunicationAndColloboration from "../Components/integration/communicationAndColloboration/CommunicationAndColloboration";
import SalesAndSupport from "../components/integration/salesAndSupport/SalesAndSupport";

import SalesTemplate from "../Components/features/temples/sales/SalesTemplate";
import Planner1 from "../components/boards/Planner1";
import TeamManagement from "../components/features/templates/TeamManagement";
import FileManagement from "../components/integration/integrationComponents/FileManagement";
import IntegrationProductDesign from "../components/integration/integrationComponents/integrationProductDesign/IntegrationProductDesign";
import BoardsMain from "../components/boards/BoardsMain";
import Sidebar from "../components/boards/SideBar";
import Page1 from "../components/Page1";
import MyTrelloBoard from "../components/myTrelloBoard/MyTrelloBoard";
import DesignTemplate from "../components/features/temples/design/DesignTemplate";
import EducationTemplate from "../components/features/temples/education/EducationTemplate";
import RemoteTeam from "../components/solutions/seeAllUseCases/meetings/remoteteamMeetings/Remoteteam";
import Shareboard from "../components/boards/sharepopups/Shareboard";

import IntegrationHrOperation from "../components/integration/HR&operations";
import TemplateSupport from "../components/features/temples/templateSupport/TemplateSupport";

import Addlist from "../components/myTrelloBoard/addlist/Addlist";
import Today from "../components/myTrelloBoard/today/Today";
import InboxMTB from "../components/myTrelloBoard/inbox/InboxMTB";
import OnboardingNewHiring from "../components/solutions/seeAllUseCases/onboarding/onboardingNewHire/OnboardingNewHiring";
import Profile from "../components/boards/myBoardNavBar/Profile";
import Settings2 from "../components/boards/myBoardNavBar/Settings2";
import ProfileSidebar from "../components/boards/myBoardNavBar/ProfileSidebar";
import ButtomNavbar from "../components/myTrelloBoard/buttomnavbar/ButtomNavbar";
import NonProfits from "../components/solutions/seeAllUseCases/nonprofits/NonProfits";
import TrelloBoardsHome from "../components/myTrelloBoard/TrelloBoardsHome";
import NewBoard from "../components/boards/myBoardNavBar/NewBoard";
import WSettings from "../components/boards/myBoardNavBar/WSettings";

import AutomationPopup from "../components/boards/taskbar/taskbarAutomationPopup/AutomationPopup";
import AutomationRules from "../components/boards/taskbar/taskbarAutomationPopup/AutomationRules";
import ActivityPopup from "../components/boards/taskbar/taskbarAutomationPopup/ActivityPopup";
import AutomationDuedate from "../components/boards/taskbar/taskbarAutomationPopup/AutomationDuedate";
import Featured from "../components/features/powerups/Featured";
import ViewAll from "../components/features/powerups/ViewAll";
import PowerUpAutomation from "../components/features/powerups/PowerUpAutomation";
import McCorvey from "../components/resources/help/customerstoriesInternalCards/McCorvey";
import AnalyticsAndReportingPowerups from "../components/features/powerups/AnalyticsAndReportingPowerups";
import MarketingSocialMedia from "../components/features/powerups/MarketingSocialMedia";
import ItAndProjectManagement from "../components/features/powerups/ItAndProjectManagement";
import Madebytrello from "../components/features/powerups/Madebytrello";

import SalesSupport from "../components/features/powerups/SalesSupport";
import Burgerfi from "../components/resources/help/customerstoriesInternalCards/Burgerfi.jsx";
import Unicef from "../components/resources/help/customerstoriesInternalCards/Unicef";import FeatureFileManagement from "../components/features/powerups/FileManagement.jsx";
import CommunicationAndCollaboration from "../components/features/powerups/CommunicationsAndCollaborations";
import CommunicationsAndCollaborations from "../components/features/powerups/CommunicationsAndCollaborations";
import HROpearion from "../components/features/powerups/HROpearion";
import DevelopersHome from "../components/resources/help/developers/DevelopersHome.jsx";
import Changelog from "../components/resources/help/developers/Changelog.jsx";
import Cardaging from "../components/features/powerups/Cardaging1.jsx";
import Cardaging1 from "../components/features/powerups/Cardaging1.jsx";
import SlopeCalculator from "../components/features/powerups/analyticsandreports/SlopeCalculator.jsx";

import DevelopertoolsPowerups from "../components/features/powerups/DevelopertoolsPowerups.jsx";
import PalaceLaw from "../components/resources/help/customerstoriesInternalCards/PalaceLaw";
import ProductDesign from "../components/features/powerups/productDesign";

import Sumup from "../components/features/powerups/analyticsandreports/sumup.jsx";
import AlertsByRung from "../components/features/powerups/analyticsandreports/AlertsByRung.jsx";

import Harvest from "../components/features/powerups/analyticsandreports/Harvest.jsx";
import ProductivityTemplates from "../components/features/templates/ProductivityTemplates.jsx";
import InventionHub from "../components/features/powerups/analyticsandreports/InventionHub.jsx";

import HabitTracker from "../components/features/powerups/analyticsandreports/HabitTracker.jsx";
import TogglIntegration from "../components/features/powerups/analyticsandreports/TogglIntegration.jsx";
import StandardDeviation from "../components/features/powerups/analyticsandreports/StandardDeviation.jsx";
import ExportsforTrello from "../components/features/powerups/analyticsandreports/ExportsforTrello.jsx";
import ReportsbyAi from "../components/features/powerups/analyticsandreports/ReportsbyAi.jsx";
import SwimlanesByBlueCat from "../components/features/powerups/analyticsandreports/SwimlanesByBlueCat.jsx";
import TimeTracker from "../components/features/powerups/analyticsandreports/TimeTracker.jsx";
import Dashio from "../components/features/powerups/analyticsandreports/Dashio.jsx";
import RpowerUps from "../components/resources/help/developers/RpowerUps.jsx";
import BankBlenderFinance from "../components/features/powerups/analyticsandreports/BankBlenderFinance.jsx";
import GoodGantt from "../components/features/powerups/analyticsandreports/GoodGantt.jsx";
import AnalyticsReportsByScreenful from "../components/features/powerups/analyticsandreports/Analytics&ReportsByScreenful.jsx";
import EpicsByRogueShadows from "../components/features/powerups/analyticsandreports/EpicsByRogueShadows.jsx";
import AnalyticsTinyPowerUpsClub from "../components/features/powerups/analyticsandreports/AnalyticsTinyPowerUpsClub.jsx";
import TimeTrackingForTrelloCards from "../components/features/powerups/analyticsandreports/TimeTrackingForTrelloCards.jsx";
import AnyFields from "../components/features/powerups/analyticsandreports/Anyfeilds.jsx";
import CrossBoardReportingAndDashboard from "../components/features/powerups/analyticsandreports/CrossBoardReportingAndDashboard.jsx";
import BoardVisualizerForTrello from "../components/features/powerups/analyticsandreports/BoardVisualizerForTrello.jsx";
import DailyUpdate from "../components/features/powerups/analyticsandreports/DailyUpdate.jsx";
import ExpenseTrackello from "../components/features/powerups/analyticsandreports/ExpenseTrackello.jsx";
import UndoForTrello from "../components/features/powerups/analyticsandreports/UndoForTrello.jsx";
import WalletIncomeAndExpences from "../components/features/powerups/analyticsandreports/WalletIncomeAndExpences.jsx";
import Pivot from "../components/features/powerups/analyticsandreports/Pivot.jsx";
import TrelloTimeTracking from "../components/features/powerups/analyticsandreports/TrelloTimeTracking.jsx";
import TeamCard from "../components/solutions/seeAllUseCases/meetings/remoteteamMeetings/Teamcard.jsx";
import TeamGrantt from "../components/features/powerups/analyticsandreports/TeamGrantt.jsx";



let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/my-trello-boards",
    element: <Planner1 />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <Welcompagepart1 />,
  },

  {
    path: "/page2",
    element: <Welcomepage2 />,
  },
  {
    path: "/page3",
    element: <Welcompage1 />,
  },
  {
    path: "/shareboard",
    element: <Shareboard />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/free-trial",
    element: <InboxGetStarted />,
  },
  {
    path: "/planner",
    element: <Planner />,
  },
  {
    path: "/butler-automation",
    element: <Automation />,
  },
  {
    path: "/power-ups",
    element: <PowerUps />,
    children: [
      {
        path:"",
        element:<Featured/>,
      },
      {
        path:"all",
        element:<ViewAll/>
      },
      {
        path:"category/salesandsupport",
        element:<SalesSupport/>
      },
      {
        path:"analytics-reporting",
        element:<AnalyticsAndReportingPowerups />
      },
     
      {
        path:"category/automation",
        element:<PowerUpAutomation />
      },
      {
        path:"/power-ups/category/file-management",
        element:<FeatureFileManagement />
      },
      {
        path:"category/marketing-social-media",
        element:<MarketingSocialMedia />
      },
      {
        path:"category/product-design",
        element:<ProductDesign/>
        
      },
      {
        path:"category/it-project-management",
        element:<ItAndProjectManagement />
      },
       {
        path: "category/board-utilities",
        element: <BoardUtility />,
      },
      {
        path:"made-by-trello",
        element:<Madebytrello/>
      },
      {
        path:"category/developer-tools",
        element:<DevelopertoolsPowerups />
      },
      {
        path:"category/communication-collaboration",
        element:<CommunicationsAndCollaborations/>
        
      },
      {
        path:"hr-operations",
        element:<HROpearion/>
      },
    ]
    
  },
  {
        path : "/power-ups/sumup",
        element  : <Sumup/>
      },
      {
    path: "/power-ups/harvest",
    element: <Harvest />
  },
  {
    path : "/power-ups/toggl-integration-for-trello",
    element : <TogglIntegration/>
  },
  {
    path: "/power-ups/exportsfortrello",
    element: <ExportsforTrello />
  },
  {
     path:"power-ups/any-feilds",
      element:<AnyFields />
  },
  {
    path:"/power-ups/reports-by-ai",
    element:<ReportsbyAi />
  },
  {
    path : "/power-ups/5c697e38e3a0791c604b2d41",
    element : <Dashio/>
  },
  {
     path : "/power-ups/goodgantt",
     element : <GoodGantt/>
  },
  {
    path : "/power-ups/570262ea1100fa611d7e200a",
    element : <AnalyticsReportsByScreenful/>
  },
  {
     path : "/power-ups/board-visualizer-for-trello",
     element : <BoardVisualizerForTrello/>
  },
  {
     path : "/power-ups/undo-for-trello",
     element : <UndoForTrello/>
  },
  {
    path: "/teams/product",
    element: <ProductManagement />,
  },
  {
    path: "/remote-work",
    element: <RemoteWorkGuide />,
  },
  {
    path: "/remote-work/tips-best-practices",
    element: <DispellingRemoteWork />,
  },
  {
    path: "/webinars",
    element: <Webinar />,
  },
  {
    path: "/templates",
    element: <Templates />,
    children: [
      {
        index: true,
        element: <TempFeatures />,
      },
      {
        path: "/templates/business",
        element: <BusinessTemplet />,
      },
      {
        path: "/templates/design",
        element: <DesignTemplate />,
      },
      {
        path: "/templates/education",
        element: <EducationTemplate />,
      },
      {
        path: "/templates/engineering",
        element: (
          <>
            <EngineeringTemplet />
          </>
        ),
      },
      {
        path: "/templates/marketing",
        element: (
          <>
            <MarketingTemplate />
          </>
        ),
      },
      {
        path: "/templates/operations-hr",
        element: (
          <>
            <HrandOperations />
          </>
        ),
      },
      {
        path: "/templates/personal",
        element: (
          <>
            <Personal />
          </>
        ),
      },
      {
        path: "/templates/productivity",
        element: (
          <>
            <ProductivityTemplates/>
          </>
        ),
      },
      {
        path: "/templates/product-management",
        element: (
          <>
            <ProjectManagement />
          </>
        ),
      },
      {
        path: "/templates/project-management",
        element: (
          <>
            <ProductManagementFeatures />
          </>
        ),
      },
      {
        path: "/templates/remote-work",
        element: (
          <>
            <RemoteWo />
          </>
        ),
      },
      {
        path: "/templates/sales",
        element: <SalesTemplate />,
      },
      {
        path: "/templates/support",
        element: (
          <>
            <TemplateSupport />
          </>
        ),
      },
      {
        path: "/templates/team-management",
        element: (
          <>
            <TeamManagement />
          </>
        ),
      },
    ],
  },
  {
    path: "/standard",
    element: <Standard />,
  },
  {
    path: "/premium",
    element: <Premium />,
  },
  {
    path: "/enterprise",
    element: <Enterprise />,
  },
  {
    path: "/teams/startups",
    element: <Startups />,
  },
  {
    path: "/customers",
    element: <CustomerStories />,
  },
  {
    path: "/teams/engineering",
    element: <EngineeringTeams />,
  },
  {
    path: "/guide",
    element: <Trelloguide />,
  },
  {
    path: "/teams/marketing",
    element: <Marketingteams />,
  },
  {
    path: "/tour",
    element: <Checkout />,
  },
  {
    path: "/integrations",
    element: <Integrations />,
    children: [
      {
        path: "/integrations",
        element: <AllIntegrations />,
      },
      {
        path: "/integrations/analytics-reporting",
        element: <AnalyticsAndReporting />,
      },
      {
        path: "/integrations/automation",
        element: <IntegrationAutomation />,
      },
      {
        path: "/integrations/communication-collaboration",
        element: <CommunicationAndColloboration />,
      },
      {
        path: "/integrations/developer-tools",
        element: <Developertools />,
      },
      {
        path: "/integrations/file-management",
        element: (
          <>
            <FileManagement />
          </>
        ),
      },
      {
        path: "/integrations/hr-operations",
        element: <IntegrationHrOperation />,
      },
      {
        path: "/integrations/it-project-management",
        element: (
          <>
            <ItProject />
          </>
        ),
      },
      {
        path: "/integrations/it-project-management",
        element: (
          <>
            <ITProductManagement />
          </>
        ),
      },
      {
        path: "/integrations/marketing-social-media",
        element: (
          <>
            <h1>marketing-social-media</h1>
          </>
        ),
      },
      {
        path: "/integrations/product-design",
        element: <IntegrationProductDesign />,
      },
      {
        path: "/integrations/sales-support",
        element: <SalesAndSupport />,
      },
    ],
  },
  {
    path: "/use-cases/resource-hub",
    element: <ResourcesHubMain />,
  },
  {
    path: "/teams/remote-team-management",
    element: <RemoteTeams />,
  },
  {
    path: "/teams/design",
    element: <Design />,
  },
  {
    path: "/use-cases",
    element: <Usecase />,
  },
  {
    path: "/use-cases/project-management",
    element: <Projectmanagement />,
  },
  {
    path: "/use-cases/task-management",
    element: <Section />,
  },
  {
    path: "/blog/trello",
    element: <Trelloblog />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/teams",
    element: <See_all_Teams />,
  },
  // {
  //   path: "/cloud/trello/",
  //   element: <Developers />,
  // },
  {
    path: "/power-ups/55a5d916446f517774210006",
    element: <GoogleDrive />,
  },
  {
    path: "/power-ups/55a5d917446f51777421000a",
    element: <SlackCard />,
  },
  {
    path: "/en/about",
    element: <AboutTrello />,
  },
  {
    path: "/power-ups/58d4259b89d6d7e47a899239",
    element: <Zapier />,
  },
  {
    path: "/power-ups/586be37142f94dc0871fbcbb/confluence-cloud",
    element: <Confluencecloud />,
  },
  {
    path: "/power-ups/586be36326cc4c7e9f70beb3",
    element: <Jira />,
  },
  {
    path: "/power-ups/5c2462c384ab8949b1724a20",
    element: <ListLimit />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/trello/docs/submitting-feature-requests-for-trello/",
    element: <Makeasuggestion />,
  },
  {
    path: "/platforms",
    element: <Footerapps />,
  },
  {
    path: "/trust",
    element: <LearnMore />,
  },
  {
    path: "/customers/swagup",
    element: <Swag />,
  },
  {
    path: "/trello/resources/",
    element: <Documentation />,
  },
  {
    path: "/blog/trello/new-list-features",
    element: <CollapsiableLearnmore />,
  },
  {
    path: "/power-ups/5d367a59d5db032812ddbf22",
    element: <TimeTracking />,
  },
  {
    path: "/views/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/views/map",
    element: <Mapview />,
  },
  {
    path: "/power-ups/55a5d917446f517774210012",
    element: <CardAging />,
  },
  {
    path: "/views/table",
    element: <TableView />,
  },
  {
    path: "/customers/desk-plants",
    element: <Deskplants />,
  },
  {
    path: "/customers/instinct-dog-training",
    element: <Instinct />,
  },

  {
    path: "/customers/scan2cad",
    element: <Scan2Cad />,
  },
  {
    path: "/views/workspace",
    element: <WorkspaceTableView />,
  },
  {
    path: "/power-ups/5c2462c384ab8949b1724a20",
    element: <ListLimit />,
  },
  {
    path: "/webinars/business/trello-standard-premium-demo-on-demand",
    element: <Watchwebinar />,
  },
  {
    path: "/software/guard",
    element: <SamlAtlassianGuardLearnMore />,
  },
  {
    path: "/legal/privacy-policy",
    element: <Altassianprivacy />,
  },
  {
    path: "/views/calendar",
    element: <CalendarView />,
  },
  {
    path: "/power-ups/6052d130068a8c0de7b022b4",
    element: <MicrosoftTeams />,
  },
  {
    path: "/use-cases/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/use-cases/healthcare",
    element: <Health />,
  },
  {
    path: "/views/workspace",
    element: <WorkspaceCalender />,
  },
  {
    path: "/views/timeline",
    element: <Timeline />,
  },
  {
    path: "/use-cases/finance",
    element: <Finance />,
  },
  {
    path: "/use-cases/editorial-calendar",
    element: <EditorialCalender />,
  },
  {
    path: "/use-cases/information-technology",
    element: <InformationTechnology />,
  },
  {
    path: "/teams/team-management",
    element: <TeamManegment />,
  },
  {
    path: "/power-ups/5893c2b56bde057070fbc1b7",
    element: <Miro />,
  },
  {
    path: "/use-cases/healthcare",
    element: <Health />,
  },
  {
    path: "/views/workspace",
    element: <WorkspaceCalender />,
  },
  {
    path: "/views/timeline",
    element: <Timeline />,
  },
  {
    path: "/use-cases/finance",
    element: <Finance />,
  },
  {
    path: "/use-cases/editorial-calendar",
    element: <EditorialCalender />,
  },
  {
    path: "/use-cases/information-technology",
    element: <InformationTechnology />,
  },
  {
    path: "/teams/team-management",
    element: <TeamManegment />,
  },
  {
    path: "/power-ups/5893c2b56bde057070fbc1b7",
    element: <Miro />,
  },
  {
    path: "/templates/team-management/new-hire-onboarding-qr3AcASr",
    element: <NewHireOnBoarding />,
  },
  {
    path: "/b/qr3AcASr",
    element: <NewHireTemplate />,
  },
  {
    path: "/power-ups/5decb67ce9bafb579ed0e794",
    element: <SlasCard />,
  },
  {
    path: "/use-cases/professional-services",
    element: <Professional />,
  },
  {
    path: "/power-ups/57b47fb862d25a30298459b1/card-repeater",
    element: <CardRepeater />,
  },
  {
    path: "/use-cases/process-tracking",
    element: <ProcessTracking />,
  },
  {
    path: "/power-ups/6052d16c340ed23e9da083ed",
    element: <Gmail />,
  },
  {
    path: "/power-ups/618ed1281ffc556318341ea4",
    element: <Hubspot />,
  },
  {
    path: "/power-ups/55a5d917446f517774210011",
    element: <Calender />,
  },
  {
    path: "/power-ups/55a5d917446f517774210013/voting",
    element: <Voting />,
  },
  {
    path: "/power-ups/6048e897c73d032a983e2a7c",
    element: <DashCard />,
  },
  {
    path: "/use-cases/project-status-dashboard",
    element: <ProjectStatusDashboard />,
  },
  {
    path: "/power-ups/5c75708a72eecc4565ecacf5/2-way-card-mirror-with-unito",
    element: <UnitoCardMonitoring />,
  },
  {
    path: "/views",
    element: <TryViews />,
  },
  {
    path: "/power-ups/55a5d917446f51777421000c/mailchimp",
    element: <Mailchimp />,
  },
  {
    path: "/use-cases/meetings",
    element: <Meetings />,
  },
  {
    path:"/use-cases/nonprofits",
    element:<NonProfits/>
  },
  {
    path: "/templates/remote-work/remote-team-meetings-lYdxML7x",
    element: <RemoteTeam />,
  },
  {
    path: "/power-ups/60e068efb294647187bbe4f5/amazing-fields",
    element: <AmazonFields />,
  },
  {
    path: "/power-ups/61fa6cd2cc14647c2c9ee821/import-to-trello-by-blue-cat-csv-excel",
    element: <TrelloImport />,
  },
  {
    path: "/power-ups/5b17ba540223dcfa1680ce13",
    element: <TypeForm />,
  },
  {
    path: "/power-ups/5e5e8b4b55a4ea5fedc0dafa/crmble",
    element: <Crmble />,
  },
  {
    path: "/use-cases/crm",
    element: <Crm />,
  },
  {
    path: "/use-cases/brainstorming",
    element: <BrainStorming />,
  },
  {
    path: "/templates/sales/customer-onboarding-2gUieAwh",
    element: <CustomerOnboarding />,
  },
  {
    path: "/b/2gUieAwh",
    element: <CustomerOnboardingTemplate />,
  },
  {
    path: "/templates/operations-hr/30-60-90-day-plan-template-a597dVjV",
    element: <OB306090 />,
  },
  {
    path: "/b/a597dVjV",
    element: <Template />,
  },
  {
    path: "/power-ups/57c72026e3248df11df6621b/pipedrive",
    element: <Pipedrive />,
  },
  {
    path: "/power-ups/5894c177310f1e861bf12dc2/droplr",
    element: <Droplr />,
  },
  {
    path: "/power-ups/5ba22bdcd58ada0595eadc98/zoho-desk",
    element: <Zohodesk />,
  },
  {
    path: "/power-ups/56cdf5f7071f133a93eb2363/intercom",
    element: <Intercom />,
  },
  {
    path: "/power-ups/5e5e8b4b55a4ea5fedc0dafa",
    element: <Crumble />,
  },
  // {
  //   path: "/b/lYdxML7x",
  //   element: <TeamCard />,
  // },
  {
    path: "/welcome-to-trello",
    element: <Page1 />,
  },
  {
    path: "/boards/SideBar",
    element: <Sidebar />,
  },

  {
    path: "/boards/BoardsMain",
    element: <BoardsMain />,
  },

  {
    path: "/my-trello-board",
    element: <TrelloBoardsHome />,
  },
  {
    path: "/templates/operations-hr/onboarding-process-for-new-hires-16LjOiG1",
    element: <OnboardingNewHiring />,
  },
  {
    path: "/power-ups/5bc65476d2e8ba6c7d87732c/xero-projects",
    element: <XeroProjects />,
  },
  {
    path: "/power-ups/55a5d917446f517774210009/salesforce",
    element: <Salesforce />,
  },
  {
    path: "/templates/operations-hr/employee-manual-HbTEX5hb",
    element: <EmployeeManualCard />,
  },
  {
    path: "/b/HbTEX5hb",
    element: <EmployeeManualChildCard />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/setup",
    element: <Setupaccountpage />,
  },

  {
    path: "/addlist",
    element: <Addlist />,
  },
  {
    path: "/today",
    element: <Today />,
  },
  {
    path: "/inbox-mtb",
    element: <InboxMTB />,
  },
  {
    path: "/side",
    element: <ProfileSidebar />,
    children: [
      {
        path: "/side/Profile",
        element: <Profile />,
      },
      {
        path: "/side/settings",
        element: <Settings2 />,
      },
      {
        path: "/side/wsettings",
        element: <WSettings />,
      },
    ],
  },
  {
    path: "/b/sFTGFeIY/my-trello-board",
    element: <AutomationPopup />,
    children: [
      { index: true,
         element: <AutomationRules />
         },
      { path: "activity",
       element: <ActivityPopup /> 
      },
      { path: "/b/sFTGFeIY/my-trello-board/duedate",
       element: <AutomationDuedate/> 
      },  
     
     
    ],
  },
  {
        path: "/buttomNavbar",
        element: <ButtomNavbar/>,
      },
      {
        path:"/customers/mccorvey-sheet-metal",
        element:<McCorvey/>
      },
      {
        path:"/customers/burgerfi",
        element:<Burgerfi/>
      },
     
      {
        path: "/resources/customerstories/unicef",
        element: <Unicef/>,
      },
      {
        path:"cloud/trello",
        element:<DevelopersHome/>,
        children: [
        { 
          index: true,
         element: <Developers />
         },
         { 
          path: "changelog",
         element: <Changelog />
         },
         {
          path: "/cloud/trello/power-ups/",
          element: <RpowerUps />
         }
        ]
      },
      {
          path:'/power-ups/55a5d917446f517774210012',
          element: <Cardaging1/>
      },
      {
        path:'/power-ups/5b2d506c62609bf9e8922158',
        element:<InventionHub/>
      },
      {
        path:"/power-ups/63c930032c37b500c50e20d3",
        element:<SlopeCalculator/>
      },
      {
        path: "/resources/customerstories/palacelaw",
        element: <PalaceLaw/>
      },
      {
        path:'/power-ups/5d3f40b4a5f03284e9f3bc24',
        element:<HabitTracker/>
      },
      {
        path: "/power-ups/622f0650eda2213318a6fdee",
        element : <SwimlanesByBlueCat/>
      },
      {
        path:"/power-ups/63c78bd6ac76bc03962833f9",
        element:<StandardDeviation/>
      },
      {
        path:'/power-ups/59cf411fe342369bca2565b9',
        element:<TimeTracker/>
      },{
        path:'/power-ups/67ad0f66c16323b2d7065943',
        element:<BankBlenderFinance/>
      },
      {
        path:"/power-ups/613269624bccb32439780227",
        element:<AnalyticsTinyPowerUpsClub/>
      },
      {
        path : "/power-ups/601b5ad6810bf03354366eab",
        element : <ExpenseTrackello/>
      },
      {
        path:'/power-ups/682c19fcd2c2384f846488ba',
        element:<TimeTrackingForTrelloCards/>
      },
      {
        path:'/power-ups/66291013ec3abfbf13b255c6',
        element:<CrossBoardReportingAndDashboard/>
      },{
        path: 'power-ups/671a939ace67d0b570f20d3f',
        element: <EpicsByRogueShadows/>
      },
       {
        path:"/power-ups/593fd953bf51b56e7bb1e5b7",
        element:<AlertsByRung/>
       },
       {
        path : "/power-ups/5d5b3b96fe9c9f88bc7bd311",
       element: <DailyUpdate/>
       },
       {
        path:'/power-ups/6869fbd7d81cdf00f27b4f61',
        element:<WalletIncomeAndExpences/>
       },
       {
        path:"/power-ups/5d84733c6fd69f69b3d8ce95",
        element: <Pivot/>,
      },
      {
        path : "/power-ups/615d5b18dd889573e477dcdc",
        element: <TrelloTimeTracking/>
      },
      {
        path : "/power-ups/5970d4298c14fdf691c95a76",
        element: <TeamGrantt/>
      }
]);

export default routes;
