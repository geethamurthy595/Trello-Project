import React from "react";
import { motion } from "framer-motion";

import pipedriver from "../../../assets/pipedrive_img.png";
import Dropbox from "../../../assets/TrelloinDropboxPaper.png";
import Fillout_Logo from "../../../assets/Fillout_Logo.png";
import Egnyte from "../../../assets/Egnyte.png";
import GoogleDriveI from "../../../assets/GoogleDriveI.png";

const items = [
  {
    title: "Dropbox",
    desc: "Attach files to Trello cards or create new ones from Dropbox.",
    button: "Configure",
    icon: Dropbox,
  },
  {
    title: "Pipedrive",
    desc: "Attach Pipedrive deals, contacts, and organizations to your Trello cards.",
    button: "Enable",
    icon: pipedriver,
  },
  {
    title: "Trello in Dropbox Paper",
    desc: "Embed interactive Trello cards and board tiles in Dropbox Paper.",
    button: "Configure",
    icon: Dropbox,
  },
  {
    title: "Fillout",
    desc: "Create Trello cards from new form submissions. Simplify your workflow.",
    button: "Configure",
    icon: Fillout_Logo,
  },
  {
    title: "Egnyte",
    desc: "Quickly find and link content in Egnyte without leaving Trello.",
    button: "Enable",
    icon: Egnyte,
  },
  {
    title: "Google Drive",
    desc: "Attach entire Drive folders with thumbnail previews.",
    button: "Configure",
    icon: GoogleDriveI,
  },
];

const FileManagement = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">File management (6)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="bg-[#FAFBFC] shadow-md rounded-xl p-6 hover:shadow-lg"
          >
            <div className="flex gap-3 items-center mb-3">
              <img className="h-[40px] w-[40px]" src={item.icon} alt="" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            <button className="mt-5 px-4 py-2 border rounded-lg hover:bg-gray-100">
              {item.button}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileManagement;
