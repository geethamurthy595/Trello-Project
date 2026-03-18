import React from "react";
import MarketingRequestsbyHipporello from "../../../assets/productDesignPowerUps/MarketingRequestsbyHipporello.svg";
import InventionHub from "../../../assets/productDesignPowerUps/InventionHub.png";
import Protoio from "../../../assets/productDesignPowerUps/Protoio.png";
import DevBoardSyncbyKrylSolutions from "../../../assets/productDesignPowerUps/DevBoardSyncbyKrylSolutions.png";
import Zeplin from "../../../assets/productDesignPowerUps/Zeplin.png";
import BalsamiqWireframes from "../../../assets/productDesignPowerUps/BalsamiqWireframes.png";
import AgileStoryMapsbyStoriesOnBoard from "../../../assets/productDesignPowerUps/AgileStoryMapsbyStoriesOnBoard.png";
import Whiteboards from "../../../assets/productDesignPowerUps/Whiteboards.png";
import AdvancedCardCoversTinyPowerUpsClub from "../../../assets/productDesignPowerUps/AdvancedCardCoversTinyPowerUpsClub.png";
import QualityHive from "../../../assets/productDesignPowerUps/QualityHive.png";
import diagramsnet from "../../../assets/productDesignPowerUps/diagramsnet.png";
import LaunchDarkly from "../../../assets/productDesignPowerUps/LaunchDarkly.png";
import Miro from "../../../assets/productDesignPowerUps/Miro.svg";
import Alloy from "../../../assets/productDesignPowerUps/Alloy.png";
import MockFlowWireframePro from "../../../assets/productDesignPowerUps/MockFlowWireframePro.png";
import IconlabelsforTrello from "../../../assets/productDesignPowerUps/IconlabelsforTrello.png";
import MockFlowAnnotatePro from "../../../assets/productDesignPowerUps/MockFlowAnnotatePro.png";
import SmartDraw from "../../../assets/productDesignPowerUps/SmartDraw.svg";
import RTLEditorforTrelloCards from "../../../assets/productDesignPowerUps/RTLEditorforTrelloCards.png";
import MockFlowSiteMap from "../../../assets/productDesignPowerUps/MockFlowSiteMap.png";
import Personas from "../../../assets/productDesignPowerUps/Personas.png";
import Overflow from "../../../assets/productDesignPowerUps/Overflow.png";
import UserTesting from "../../../assets/productDesignPowerUps/UserTesting.svg";
import Markerio from "../../../assets/productDesignPowerUps/Markerio.png";
import AttachmentsArchive from "../../../assets/productDesignPowerUps/AttachmentsArchive.svg";




const ProductDesign = () => {

  const productDesignPowerUps = [
  {
    id: 1,
    title: "Marketing Requests by Hipporello",
    user: "1,000+",
    description: "Capture client requests via email and forms through a customized portal and automations, and track them in Trello.",
    image: MarketingRequestsbyHipporello
  },
  {
    id: 2,
    title: "Invention Hub",
    user: "500+",
    description: "Easily migrate potential inventive material – in the form of product and technical descriptions in Trello cards – to Invention Hub.",
    image: InventionHub
  },
  {
    id: 3,
    title: "Proto.io",
    user: "100+",
    description: "Effectively communicate functionality by attaching interactive prototypes to your Trello cards.",
    image: Protoio
  },
  {
    id: 4,
    title: "DevBoardSync by Kryl Solutions (Retired)",
    user: "100+",
    description: "This has been retired.",
    image: DevBoardSyncbyKrylSolutions
  },
  {
    id: 5,
    title: "Zeplin",
    user: "5,000+",
    description: "Zeplin  is a connected space for product teams where they can share designs, generate specs, assets and code snippets. Zeplin Power-up lets you attach your projects, screens and tags to Trello cards, to preview and quickly access them!",
    image: Zeplin
  },
  {
    id: 6,
    title: "Balsamiq Wireframes",
    user: "1,000+",
    description: "Wireframe faster, collaborate seamlessly—right in Trello.",
    image: BalsamiqWireframes
  },
  {
    id: 7,
    title: "Agile Story Maps by StoriesOnBoard",
    user: "1,000+",
    description: "Organize Trello lists into a backlog that everybody understands. Share story maps with remote teams and stakeholders.",
    image: AgileStoryMapsbyStoriesOnBoard
  },
  {
    id: 8,
    title: "airfocus Strategy, Roadmaps, Prioritization",
    user: "5,000+",
    description: "The first modular product management platform for teams using Trello",
    image: "logo"
  },
  {
    id: 9,
    title: "Whiteboards",
    user: "1,000+",
    description: "Supercharge Your Trello Cards with Live Whiteboards for Better Team Collaboration",
    image: Whiteboards
  },
  {
    id: 10,
    title: "Publicate",
    user: "1,000+",
    description: "The Publicate Power-Up... * Shows you real time previews of any Publications attached to a card. * Easily view and edit a Publication directly from the the Card.",
    image: "logo"
  },
  {
    id: 11,
    title: "InVision",
    user: "25,000+",
    description: "Bring Your Designs to Life",
    image: "logo"
  },
  {
    id: 12,
    title: "Advanced Card Covers - Tiny Power-Ups Club",
    user: "10,000+",
    description: "Card cover generator - colors, gradients, patterns, Unsplash images, GIPHY, and text!",
    image: AdvancedCardCoversTinyPowerUpsClub
  },
  {
    id: 13,
    title: "QualityHive",
    user: "",
    description: "Collect website feedback faster than ever, synced straight to your Trello Board",
    image: QualityHive
  },
  {
    id: 14,
    title: "Design Shifu",
    user: "100+",
    description: "We help our clients design better and scale faster with a flexible, affordable graphic design service.",
    image: "logo"
  },
  {
    id: 15,
    title: "diagrams.net",
    user: "25,000+",
    description: "Adds workflows, UML, ERD and many other diagrams to Trello cards.",
    image: diagramsnet
  },
  {
    id: 16,
    title: "LaunchDarkly",
    user: "500+",
    description: "Dark launch your new product features directly from within your Trello cards",
    image: LaunchDarkly
  },
  {
    id: 17,
    title: "Miro",
    user: "50,000+",
    description: "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together",
    image: Miro
  },
  {
    id: 18,
    title: "Alloy",
    user: "",
    description: "AI Prototyping for Product Managers",
    image: Alloy
  },
  {
    id: 19,
    title: "MockFlow WireframePro",
    user: "1,000+",
    description: "Draw User Interface wireframes and mockups",
    image: MockFlowWireframePro
  },
  {
    id: 20,
    title: "Icon labels for Trello",
    user: "1,000+",
    description: "Sometimes colored labels is not enough. Try an easy way to mark your cards with icon labels.",
    image: IconlabelsforTrello
  },
  {
    id: 21,
    title: "Font Keren",
    user: "1,000+",
    description: "Make your board and card fonts attractive with the Font Keren Power-Up.",
    image: "logo"
  },
  {
    id: 22,
    title: "3D Viewer",
    user: "1,000+",
    description: "View 3D files right in your card, FBX, OBJ, STL, GCODE.",
    image: "logo"
  },
  {
    id: 23,
    title: "Attachments Archive",
    user: "1,000+",
    description: "Archive attachments, preview and restore when required.",
    image: AttachmentsArchive
  },
  {
    id: 24,
    title: "MockFlow AnnotatePro",
    user: "1,000+",
    description: "Annotate screenshots and share",
    image: MockFlowAnnotatePro
  },
  {
    id: 25,
    title: "SmartDraw",
    user: "10,000+",
    description: "Quickly add diagrams to your Trello cards.",
    image: SmartDraw
  },
  {
    id: 26,
    title: "RTL Editor for Trello Cards",
    user: "",
    description: "Right-to-Left Text for Trello",
    image: RTLEditorforTrelloCards
  },
  {
    id: 27,
    title: "MockFlow SiteMap",
    user: "5,000+",
    description: "Visualize sitemaps and UI flows",
    image: MockFlowSiteMap
  },
  {
    id: 28,
    title: "Personas",
    user: "10,000+",
    description: "Quickly draft preliminary user personas with AI and refine them later. Ensure a customer perspective at all times, right in Trello",
    image: Personas
  },
  {
    id: 29,
    title: "Overflow",
    user: "500+",
    description: "Communicate your designs like never before. Embed your interactive Overflow diagram right into Trello cards.",
    image: Overflow
  },
  {
    id: 30,
    title: "UserTesting",
    user: "500+",
    description: "Bring Human Insights to your boards and cards when attaching UserTesting Studies, Videos, Highlight Reels, or Clips.",
    image: UserTesting
  },
  {
    id: 31,
    title: "Reescribir Textos",
    user: "500+",
    description: "Reescriba el título y las descripciones de su tarjeta fácilmente con Reescribir Textos para una mayor claridad y compromiso.",
    image: "logo"
  },
  {
    id: 32,
    title: "Marker.io",
    user: "5,000+",
    description: "Snap, annotate and reports visual bugs directly into Trello",
    image: Markerio
  }
];


  let ProductDesign = {
    automationTittle: "py-5 font-bold text-xl",
    sectionCSS: "px-3 w-full min-h-screen  overflow-y-scroll hide-scrollbar",
    cardCSS:
      "flex flex-col gap-2 items-start justify-around cursor-pointer px-2 py-3 rounded w-70  bg-[hsla(0,0%,100%,0.05)] hover:bg-[hsla(0,0%,100%,0.10)] h-49",
    innerDivCSS: "flex gap-2 h-11 justify-start items-center w-full",
    addButtonCSS:
      " px-4 rounded cursor-pointer bg-blue-300 text-black font-semibold hover:bg-blue-200",
    usersDivCSS: "mt-1 flex gap-3 justify-center items-center",
    CardParentCSS: "flex flex-wrap gap-4 justify-center items-center",
  };

  return (
    <section className={ProductDesign.sectionCSS}>
      <h2 className={ProductDesign.automationTittle}>Product Design</h2>
      <div className={ProductDesign.CardParentCSS}>
        {productDesignPowerUps.map((cardObject) => {
          return (
            <div key={cardObject.id} className={ProductDesign.cardCSS}>
              <div className={ProductDesign.innerDivCSS}>
                {cardObject?.image && (
                  <img src={cardObject?.image} alt="logo" className="w-10" />
                )}
                <h3 className="font-bold">{cardObject?.title}</h3>
              </div>
              <button
                onClick={() => {
                  handleAdd(cardObject);
                }}
                className={ProductDesign.addButtonCSS}
              >
                Add
              </button>

              <p className="text-[14px] leading-5">
                {cardObject?.description.length > 100
                  ? cardObject?.description.slice(0, 100) + ". . ."
                  : cardObject?.description}
              </p>

              <div className={ProductDesign.usersDivCSS}>
                {
                  // Show user icon only if users count is available
                  cardObject.user && (
                    <svg
                      width="20"
                      height="20"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )
                }
                <p>{cardObject?.user}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductDesign;
