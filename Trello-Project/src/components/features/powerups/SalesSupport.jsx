import ZohoDesk from "../../../assets/powerUpsSalesSupport/ZohoDesk.png"
import Droplr from "../../../assets/powerUpsSalesSupport/Droplr.png"
import Freshdesk from "../../../assets/powerUpsSalesSupport/Freshdesk.png"
import FormsTinyPowerUpsClub from "../../../assets/powerUpsSalesSupport/FormsTinyPowerUpsClub.png" 
import Zendesk from "../../../assets/powerUpsSalesSupport/Zendesk.png" 
import ZohoCRM from "../../../assets/powerUpsSalesSupport/ZohoCRM.png" 
import Jotform from "../../../assets/powerUpsSalesSupport/Jotform.png" 
import Typeform from "../../../assets/powerUpsSalesSupport/Typeform.png"  
import GmailbyCardbox from "../../../assets/powerUpsSalesSupport/GmailbyCardbox.png"  
import SyncContact from "../../../assets/powerUpsSalesSupport/SyncContact.png"  
import Pipedrive from "../../../assets/powerUpsSalesSupport/Pipedrive.png"  
import SpreadsheetWeb from "../../../assets/powerUpsSalesSupport/SpreadsheetWeb.png"  
import Salesforce from "../../../assets/powerUpsSalesSupport/Salesforce.png"  
import Binotel from "../../../assets/powerUpsSalesSupport/Binotel.png"                  
import HelpScout from "../../../assets/powerUpsSalesSupport/HelpScout.png"                  
import ColorfulBudget from "../../../assets/powerUpsSalesSupport/ColorfulBudget.png"     
import KnowledgeBasebyHipporello from "../../../assets/powerUpsSalesSupport/KnowledgeBasebyHipporello.svg"
import Crmble from "../../../assets/powerUpsSalesSupport/Crmble.svg"
import ServiceDeskbyHipporello from "../../../assets/powerUpsSalesSupport/ServiceDeskbyHipporello.svg"
import SLATimersDeadlines from "../../../assets/powerUpsSalesSupport/SLATimersDeadlines.svg"
const SalesSupport = () => {

    let salesSupportData = [
  {
    id: "1",
    logo: ZohoDesk,
    title: "Zoho Desk",
    description: "Bring customer context to your everyday tasks by attaching tickets and custom views to Trello cards.",
    users: "25,000+"
  },
  {
    id: "2",
    logo: Droplr,
    title: "Droplr",
    description: "The Droplr power-up expands your drop links into rich content for your Trello cards. View information about your drop links, Copy drop links to your clipboard with a single click, Open drop links in a new window, Easily use a drop as a card cover",
    users: "1,000+"
  },
  {
    id: "3",
    logo: Freshdesk,
    title: "Freshdesk",
    description: "Deliver exceptional customer support with the Freshdesk Power-up and Trello app.",
    users: "5,000+"
  },
  {
    id: "4",
    logo: KnowledgeBasebyHipporello,
    title: "Knowledge Base by Hipporello",
    description: "Publish service or product guides on a branded knowledge portal",
    users: "100+"
  },
  {
    id: "5",
    logo: FormsTinyPowerUpsClub,
    title: "Forms - Tiny Power-Ups Club",
    description: "Create custom forms and collect responses right on your Trello board!",
    users: "5,000+"
  },
  {
    id: "6",
    logo: Zendesk,
    title: "Zendesk",
    description: "Quickly search for and attach tickets and views to your cards.",
    users: "50,000+"
  },
  {
    id: "7",
    logo: ZohoCRM,
    title: "Zoho CRM",
    description: "Manage leads and customers better with the Zoho CRM for Trello",
    users: "5,000+"
  },
  {
    id: "8",
    logo: Jotform,
    title: "Jotform",
    description: "Jotform is the easy way to create and publish online forms. Powerful forms get work done.",
    users: "10,000+"
  },
  {
    id: "9",
    logo: Crmble,
    title: "Crmble",
    description: "Gestiona la relación con tus clientes mediante la integración de correo electrónico y enlace de Whatsapp para cerrar más tratos",
    users: "100,000+"
  },
  {
    id: "10",
    logo: Typeform,
    title: "Typeform",
    description: "Turn typeform responses into cards on any Trello board",
    users: "25,000+"
  },
  {
    id: "11",
    logo: SpreadsheetWeb,
    title: "SpreadsheetWeb",
    description: "Embed spreadsheet calculations into Trello cards",
    users: "1,000+"
  },
  {
    id: "12",
    logo: Pipedrive,
    title: "Pipedrive",
    description: "The Pipedrive Power-Up automatically creates Trello cards when you start, close or move a deal to a selected stage in your sales pipeline.",
    users: "10,000+"
  },
  {
    id: "13",
    logo: "",
    title: "Gamify Work with Yera Sync",
    description: "Gamify your daily work process to help people do their best work",
    users: "500+"
  },
  {
    id: "14",
    logo: GmailbyCardbox,
    title: "Gmail by Cardbox",
    description: "Attach emails to cards, create shared inboxes, reply from Trello and more.",
    users: "100,000+"
  },
  {
    id: "15",
    logo: "",
    title: "Design Shifu",
    description: "We help our clients design better and scale faster with a flexible, affordable graphic design service.",
    users: "100+"
  },
  {
    id: "16",
    logo: SyncContact,
    title: "SyncContact",
    description: "Share contact lists in Trello. See time zones for easier global teamwork.",
    users: "100+"
  },
  {
    id: "17",
    logo: Salesforce,
    title: "Salesforce",
    description: "Track your sales pipeline in Trello with cases, contacts, leads, & opportunities directly on cards.",
    users: "50,000+"
  },
  {
    id: "18",
    logo: Binotel,
    title: "Binotel",
    description: "Binotel + Trello. Allows you to listen to calls directly from the trello card.",
    users: "100+"
  },
  {
    id: "19",
    logo: ColorfulBudget,
    title: "Colorful Budget",
    description: "Effortlessly categorize, visualize, and analyze your expenses.",
    users: "5,000+"
  },
  {
    id: "20",
    logo: SLATimersDeadlines,
    title: "SLA Timers & Deadlines",
    description: "Keep work on time with SLA trackers, custom start/pause/finish rules, urgency badges, sorting, and simple team statistics.",
    users: "500+"
  },
  {
    id: "21",
    logo: ServiceDeskbyHipporello,
    title: "Service Desk (Form, Email) by Hipporello",
    description: "A Trello-based help desk - Branded client portal - Cards from form fills and emails - Messages to clients from Trello - Automations",
    users: "10,000+"
  },
  {
    id: "22",
    logo: HelpScout,
    title: "Help Scout",
    description: "Easily attach Help Scout conversations to your cards. Quickly find conversations by assignee, folder, recently updated and more.",
    users: "50,000+"
  },
  {
    id: "23",
    logo: "",
    title: "Intercom",
    description: "Add context to feature requests and issues with conversations from Intercom",
    users: ""
  }
];

// Automation PowerUps CSS
let saleSupportCSS = {
  salesSuportTitle : "py-5 font-bold text-xl",
  sectionCSS : 'px-3 w-full min-h-screen  overflow-y-scroll hide-scrollbar',
  cardCSS : 'flex flex-col gap-2 items-start justify-around cursor-pointer px-2 py-3 rounded w-70  bg-[hsla(0,0%,100%,0.05)] hover:bg-[hsla(0,0%,100%,0.10)] h-49',
  innerDivCSS : "flex gap-2 h-11 justify-start items-center w-full",
  addButtonCSS : " px-4 rounded cursor-pointer bg-blue-300 text-black font-semibold hover:bg-blue-200",
  usersDivCSS : "mt-1 flex gap-3 justify-center items-center",
  CardParentCSS : "flex flex-wrap gap-4  "
}

  return (
    <section className={saleSupportCSS.sectionCSS}>
      <h2 className={saleSupportCSS.salesSuportTitle}>Sales & support</h2>
      <div className={saleSupportCSS.CardParentCSS}> 
      {
        salesSupportData.map((cardObject)=>{
          return(
            <div key={cardObject.id} className={saleSupportCSS.cardCSS}>
              <div className={saleSupportCSS.innerDivCSS}>
               {cardObject?.logo && ( <img src={cardObject?.logo} alt="logo" className="w-10" />)}
                <h3 className='font-bold'>{cardObject?.title}</h3>
              </div>
              <button onClick={()=>{handleAdd(cardObject)}} className={saleSupportCSS.addButtonCSS}>Add</button>

              <p className='text-[14px] leading-5'>{cardObject?.description.length > 100 ? cardObject?.description.slice(0,100) + ". . ." : cardObject?.description}</p>
              
              <div className={saleSupportCSS.usersDivCSS}>
                {
                  // Show user icon only if users count is available
                  cardObject.users && (
                    <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                  )
                }
                <p>{cardObject?.users}</p>
              </div>
            </div>
          )
        })
      }
    </div>
    </section>
  )
}

export default SalesSupport
