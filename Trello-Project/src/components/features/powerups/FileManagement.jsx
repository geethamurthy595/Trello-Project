import React from "react";
import hidy from '../../../assets/hidy.png';
import galleryview from '../../../assets/galleryview.png';
import googledrive1 from '../../../assets/googledrive1.png';
import csvjson from '../../../assets/csvjson.png';
import onedrive from '../../../assets/onedrive.png';
import filemanager from '../../../assets/filemanager.png';
import box from '../../../assets/box.png';
import portant from '../../../assets/portant.png';
import egnytelogo from '../../../assets/egnytelogo.png';
import bluecatlogo from '../../../assets/bluecatlogo.png';
import archivelogo from '../../../assets/archivelogo.png';
import notejoy from '../../../assets/notejoy.png';
import s3logo from '../../../assets/s3logo.png';
import dupli from '../../../assets/dupli.png';
import attachment from '../../../assets/attachment.png';
import tiny from '../../../assets/tiny.png';
import onlyoffice from '../../../assets/onlyoffice.png';
import filemanager1 from '../../../assets/file-manager.png';
import favicon from '../../../assets/favicon.png';
import bynderlogo from '../../../assets/bynderlogo.png';
import frontify from '../../../assets/frontify.png';
import joker from '../../../assets/joker.png';
import downloader from '../../../assets/downloader.png';
import manager from '../../../assets/manager.png';
import officehub from '../../../assets/officehub_retired.png';
import officefile from '../../../assets/officefileviewer.png';
import restore from '../../../assets/restore.png';




const FeatureFileManagement = () => {

  
  let itProjectManagementCss = {
  automationTittle : "py-5 font-bold text-xl",
  sectionCSS : 'px-3 w-full min-h-screen  overflow-y-scroll hide-scrollbar',
  cardCSS : 'flex flex-col gap-2 items-start justify-around cursor-pointer px-2 py-3 rounded w-70  bg-[hsla(0,0%,100%,0.05)] hover:bg-[hsla(0,0%,100%,0.10)] h-49',
  innerDivCSS : "flex gap-2 h-11 justify-start items-center w-full",
  addButtonCSS : " px-4 rounded cursor-pointer bg-blue-300 text-black font-semibold hover:bg-blue-200",
  usersDivCSS : "mt-1 flex gap-3 justify-center items-center",
  CardParentCSS : "flex flex-wrap gap-4 justify-center items-center"
}
  const xyz = [
  {
    img:hidy,
    title: "Hidynotes -Private Card Notes",
    desc: " Admin Private Notes for Trello. Board administrators control note, attachment access for authorised members.",
    users: "1,000+" 
  },
  {
    img: galleryview,
    title: "Gallery View - Tiny Power-Ups Club",
    desc: "Display your image attachments in an awesome Pinterest style gallery!",
    users: "1,000+"
  },
  {
    title: "Google Drive",
    desc: "Access your Drive files for a project directly from its card, or create and attach new Drive files to a card.",
    users: "2,000,000+",
    img: googledrive1
  },
  {
    title: "JSON/CSV Boards Importer",
    desc: "Import JSON and CSV files into your Trello board. Map columns to cards with one click.",
    users: "500+",
    img: csvjson
  },
  {
    title: "OneDrive",
    desc: "Connect OneDrive and Trello to attach files or folders from OneDrive to your Trello cards.",
    users: "100,000+",
    img: onedrive
  },
  {
    title:"File Manager by GTOLA",
    desc:"Manage your attachments in one place",
    img: filemanager
  },
  {
    title: "Box",
    desc: "See updated information and previews for any Box files or folders attached to a card.",
    users: "50,000+",
    img: box
  },
  {
    title: "Attachments Transfer to - decomissioned",
    desc: "Make Trello attachments editable with Google App via gDrive—seamless updates, no effort, and enhanced collaboration guaranteed!",
    users: "500+"
  },
  {
    title: "Portant Document Merge",
    desc: "Card-to-Document | Generate Google Documents from your Trello Cards and attach the file back onto the card (works",
    users: "5,000+",
    img: portant
  },
  {
    title: "Egnyte",
    desc: "Collaborate and manage content more efficiently by bringing the Egnyte Power-Up into your Trello workflow The Egnyte",
    users: "10,000+",
    img: egnytelogo
  },
  {
    title: "Import to Trello by Blue Cat (CSV, Excel)",
    desc: "Import CSV and Excel files into Trello (First 10 imports FREE )",
    users: "100,000+",
    img: bluecatlogo
  },
  {
    title: "Attachments Archive",
    desc: "Archive attachments, preview and restore when required.",
    users: "1,000+",
    img: archivelogo
  },
  {
    title: "Notejoy",
    desc: "Attach Notejoy notes to Trello cards so you can view & collaboratively edit them directly from Trello.",
    users: "5,000+",
    img: notejoy
  },
  {
    title: "S3",
    desc: "Explore and attach documents on S3",
    users: "100+",
    img: s3logo
   
  },
  {
    title: "Card Duplicator",
    desc: 'Copy cards and retain all information',
    users: "100+",
    img: dupli
  },
  {
    title: "Show Attachments",
    desc: "Show attachments at the front of the card.",
    users: "10,000+",
    img: attachment
  },
  {
    title: "Bookmarks - Tiny Power-Ups Club",
    desc: "Add bookmarks and folders to organize useful links on your board",
    users: "1,000+",
    img: tiny
  },
  {
    title: "Bynder",
    desc: "The Bynder power-up allows users to connect to their Bynder library, add assets to a card, and updates their Bynder library.",
    users: "100+",
    img: bynderlogo

  },
  {
    title: "ONLYOFFICE",
    desc: "Powerful online editors for Trello",
    users: "100+",
    img: onlyoffice
  },
  {
    title: "File Manager - Tiny Power-Ups Club",
    desc: "Trusted attachment downloader. Bulk download and bulk delete files from your Trello board.",
    users: "10,000+",
    img: filemanager1
  },
  {
    title: "Board Export to Excel",
    desc: "Overview",
    users: "1000+",
    img: favicon
  },
  {
    title: "Show fields on card front - Tiny Power-Ups Club",
    desc: "Show attachments, show checklists, show location, show members, and show description on the front of the card!",
    users: "5,000+",
    img: joker
  },
  {
    title: "Frontify Integration",
    desc: "Tool to attach links of Frontify files to cards using the Frontify Finder widget",
    img: frontify
  },
  {
    title: "Attachments Downloader",
    desc: "Downloader lets you download attachments from cards, lists and boards",
    users: "5,000+",
    img: downloader
  },
  {
    title: "Archive Manager - Tiny Power-Ups Club",
    desc: "View and manage your archived lists and cards into a rich board view!",
    users: "1,000+",
    img: manager
  },
  {
    title: "Office Hub by Kryl Solutions (Retired)",
    desc: "This has been retired",
    users: "10,000+",
    img: officehub
  },
  {
    title: "Office File Viewer - Tiny Power-Ups Club",
    desc: "Preview Microsoft Office Word documents (.docx), Excel spreadsheets (.xlsx), and PowerPoint presentations (.pptx) directly in Trello!",
    users: "10,000+",
    img: officefile
  },
  {
    title: "Backup & Restore",
    desc: "Easily back up and restore cards and lists whenever needed.",
    users: "100+",
    img: restore
  },
];


  return (
     
     <section className={itProjectManagementCss.sectionCSS}>
      <h2 className={itProjectManagementCss.automationTittle}>File management</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {xyz.map((item, index) => (
          <div
            key={index}
            className="bg-[hsla(0,0%,100%,0.05)] text-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
              <h2 className="font-semibold text-md text-white">
                {item.title}
              </h2>
            </div>

            <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm mb-3 hover:bg-blue-700">
              Add
            </button>

            <p className="text-sm mb-3 text-white">
              {item.desc}
            </p>

            {item.users && (
              <p className="text-xs text-gray-500">
               {item.users}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeatureFileManagement;