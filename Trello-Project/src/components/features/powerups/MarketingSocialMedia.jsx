import Personas from "../../../assets/MarketingSocialMedia/Personas.png"; 
import Litmus from "../../../assets/MarketingSocialMedia/Litmus.png"; 
import Wistia from "../../../assets/MarketingSocialMedia/Wistia.png"; 
import Embeds from "../../../assets/MarketingSocialMedia/Embeds.png"; 
import AISearchEngine from "../../../assets/MarketingSocialMedia/AISearchEngine.png"; 
import Evernote from "../../../assets/MarketingSocialMedia/Evernote.png"; 
import MailChimp from "../../../assets/MarketingSocialMedia/MailChimp.png"; 
import TinyPowerUpsClub from "../../../assets/MarketingSocialMedia/TinyPowerUpsClub.png"; 
import PageProof from "../../../assets/MarketingSocialMedia/PageProof.png"; 
import AnalyticsTinyPowerUpsClub from "../../../assets/MarketingSocialMedia/AnalyticsTinyPowerUpsClub.png"; 
import CardMirrorCardSync from "../../../assets/MarketingSocialMedia/CardMirrorCardSync.png"; 
import CompanyLookup from "../../../assets/MarketingSocialMedia/CompanyLookup.png"; 
import PollsTinyPowerUpsClub from "../../../assets/MarketingSocialMedia/PollsTinyPowerUpsClub.png"; 
import ZohoCRM from "../../../assets/MarketingSocialMedia/ZohoCRM.png"; 
import Bynder from "../../../assets/MarketingSocialMedia/Bynder.jpg"; 
import ConnectwithMauticorAivie from "../../../assets/MarketingSocialMedia/ConnectwithMauticorAivie.png"; 
import MarketingRequestsbyHipporello from "../../../assets/MarketingSocialMedia/MarketingRequestsbyHipporello.svg"; 
import FormsbyHipporello from "../../../assets/MarketingSocialMedia/FormsbyHipporello.svg"; 
import two_way_card_mirror from "../../../assets/PowerUpAutomation/two_way_card_mirror.svg";

const MarketingSocialMedia = () => {
 //marketing and social media PowerUps data
    const marketingSocialMediaData = [
  {
    id: 1,
    logo: Personas,
    title: "Personas",
    description: "Quickly draft preliminary user personas with AI and refine them later. Ensure a customer perspective at all times, right in Trello",
    users: "10,000+"
  },
  {
    id: 2,
    logo: "",
    title: "Publicate",
    description: "The Publicate Easily view and edit a Publication directly from the the Card. To get started, enable the Power-Up, and click the Publicate button on a card back.",
    users: "1,000+"
  },
  {
    id: 3,
    logo: Litmus,
    title: "Litmus",
    description: "Easily attach Litmus emails to your Trello cards. Keep track of due dates, statuses, and more right in Trello.",
    users: "1,000+"
  },
  {
    id: 4,
    logo: ConnectwithMauticorAivie,
    title: "Connect with Mautic or Aivie",
    description: "Connect the open source marketing automation tool Mautic with Trello",
    users: "100+"
  },
  {
    id: 5,
    logo: Bynder,
    title: "Bynder",
    description: "The Bynder power-up allows users to connect to their Bynder library, add assets to a card, and updates their Bynder library.",
    users: "100+"
  },
  {
    id: 6,
    logo: Wistia,
    title: "Wistia",
    description: "The Wistia  you can see your video's stats on the card. * What did our first version of the homepage video look like? Quickly access the video, and watch the whole thing right on the card. * Did the Creative Team finish that launch video? You guessed it. They probably added it to the card!",
    users: "5,000+"
  },
  {
    id: 7,
    logo: MarketingRequestsbyHipporello,
    title: "Marketing Requests by Hipporello",
    description: "Capture client requests via email and forms through a customized portal and automations, and track them in Trello.",
    users: "1,000+"
  },
  {
    id: 8,
    logo: Embeds,
    title: "Embeds",
    description: "Embeds allows you to embed YouTube Figma Airtable CodePen Canva Loom Vimeo into cards.",
    users: "1,000+"
  },
  {
    id: 9,
    logo: FormsbyHipporello,
    title: "Forms by Hipporello",
    description: "Forms enabling two-way communication with submitters, powered by custom fields and automations. Natively integrated with Trello.",
    users: "500+"
  },
  {
    id: 10,
    logo: ZohoCRM,
    title: "Zoho CRM",
    description: "Manage leads and customers better with the Zoho CRM for Trello",
    users: "5,000+"
  },
  {
    id: 11,
    logo: MailChimp,
    title: "MailChimp",
    description: "At a glance, get up-to-date information and stats about templates and campaigns attached to a card.",
    users: "25,000+"
  },
  {
    id: 12,
    logo: Evernote,
    title: "Evernote",
    description: "Create and attach notes right to your Trello cards, and see when they were last edited.",
    users: "100,000+"
  },
  {
    id: 13,
    logo: AISearchEngine,
    title: "AI Search Engine",
    description: "Intelligent Answers, Not Just Results - Research Without Leaving Trello",
    users: "100+"
  },
  {
    id: 14,
    logo: two_way_card_mirror,
    title: "Salesforce + Trello 2-Way sync for any SFDC object",
    description: "Unito automatically syncs Trello cards with any Salesforce standard or custom object to provide clear real-time updates for your team",
    users: "10,000+"
  },
  {
    id: 15,
    logo: PollsTinyPowerUpsClub,
    title: "Polls - Tiny Power-Ups Club",
    description: "Create polls on your Trello cards for your team to vote on anything! 🗳",
    users: "5,000+"
  },
  {
    id: 16,
    logo: CompanyLookup,
    title: "Company Lookup",
    description: "Find detailed company information and contacts",
    users: "100+"
  },
  {
    id: 17,
    logo: CardMirrorCardSync,
    title: "Card Mirror & Card Sync (2-Way)",
    description: "Two-way card mirroring across Trello boards and workspaces. Card syncing that just works!",
    users: "1,000+"
  },
  {
    id: 18,
    logo: AnalyticsTinyPowerUpsClub,
    title: "Analytics - Tiny Power-Ups Club",
    description: "Easy view-tracking on boards and cards!",
    users: "1,000+"
  },
  {
    id: 19,
    logo: PageProof,
    title: "PageProof",
    description: "Keep track of your PageProof proofs in Trello to stay organized and on top of projects.",
    users: "1,000+"
  },
  {
    id: 20,
    logo: TinyPowerUpsClub,
    title: "Forms - Tiny Power-Ups Club",
    description: "Create custom forms and collect responses right on your Trello board!",
    users: "5,000+"
  }
];



// marketing and social media PowerUps CSS
let marketingSocialMediaCSS = {
  automationTittle : "py-5 font-bold text-xl",
  sectionCSS : 'px-3 w-full min-h-screen  overflow-y-scroll hide-scrollbar',
  cardCSS : 'flex flex-col gap-2 items-start justify-around cursor-pointer px-2 py-3 rounded w-70  bg-[hsla(0,0%,100%,0.05)] hover:bg-[hsla(0,0%,100%,0.10)] h-49',
  innerDivCSS : "flex gap-2 h-11 justify-start items-center w-full",
  addButtonCSS : " px-4 rounded cursor-pointer bg-blue-300 text-black font-semibold hover:bg-blue-200",
  usersDivCSS : "mt-1 flex gap-3 justify-center items-center",
  CardParentCSS : "flex flex-wrap gap-4 "
}

// Handle Add button click function
let handleAdd = (cardObj)=>{
  console.log(cardObj);
}

//marketing and social media code starts here
  return (
    <section className={marketingSocialMediaCSS.sectionCSS}>
      <h2 className={marketingSocialMediaCSS.automationTittle}>Marketing & Social Media</h2>
      <div className={marketingSocialMediaCSS.CardParentCSS}> 
      {
        marketingSocialMediaData.map((cardObject, ind)=>{
          return(
            <div key={cardObject.id} className={marketingSocialMediaCSS.cardCSS}>
              <div className={marketingSocialMediaCSS.innerDivCSS}>
               {cardObject?.logo && ( <img src={cardObject?.logo} alt="logo" className="w-10" />)}
                <h3 className='font-bold'>{cardObject?.title}</h3>
              </div>
              <button onClick={()=>{handleAdd(cardObject)}} className={marketingSocialMediaCSS.addButtonCSS}>Add</button>

              <p className='text-[14px] leading-5'>{cardObject?.description.length > 100 ? cardObject?.description.slice(0,100) + ". . ." : cardObject?.description}</p>
              
              <div className={marketingSocialMediaCSS.usersDivCSS}>
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

export default MarketingSocialMedia

