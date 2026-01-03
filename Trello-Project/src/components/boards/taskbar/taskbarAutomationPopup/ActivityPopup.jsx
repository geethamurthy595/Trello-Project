import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

export default function ActivityPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState("workspace");

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center">
      <div className="w-[900px] max-h-[90vh] bg-[#1f2a2e] text-white rounded-lg shadow-xl relative flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-sm font-semibold ml-90 text-gray-300">
            Automation activity
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Title */}
        <div className="px-6 pt-4">
          <h1 className="text-3xl font-semibold">Automation</h1>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 px-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab("workspace")}
            className={`px-4 py-2 w-140 text-sm font-medium rounded-t-md ${
              activeTab === "workspace"
                ? "bg-[#5fa0ff] text-black"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Workspace activity
          </button>

          <button
            onClick={() => setActiveTab("log")}
            className={`ml-4 px-4 py-2 text-sm font-medium ${
              activeTab === "log"
                ? "border-b-2 border-[#5fa0ff] text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Activity log
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {activeTab === "workspace" && (
            <div className="bg-[#202b30] rounded-lg p-5 space-y-4">
              <h3 className="text-lg font-semibold ml-22">
                Pooled Workspace quota
              </h3>

              <p className="text-sm text-gray-300 ml-22">
                Automation will use your free Workspace’s pooled quota for
                your automations running on this board.
              </p>

              <div className="flex items-center gap-2 text-sm ml-22">
                <span>This board is part of workspace</span>
                <span className="bg-[#3a3f42] px-2 py-1 rounded text-xs">
                  Trello Workspace
                </span>
              </div>

              <div className="flex gap-3 items-start mt-4">
                <FaUsers className="mt-1 size-20 text-gray-300" />
                <div>
                  <p className="font-medium">
                    Upgrade for more automations
                  </p>
                  <p className="text-sm text-gray-300">
                    To make even more happen automatically with additional
                    automation runs, upgrade your Workspace.
                  </p> <br />
                  <button className="text-blue-400 text-sm mt-1 hover:underline">
                    Upgrade Now
                  </button>
                </div>
              </div>

              <button className="text-blue-400 text-sm hover:underline ml-22 -mt-3">
                Learn more about automation's features and quotas.
              </button>
            </div>
          )}

          {activeTab === "log" && (
            <div className="text-gray-300 text-sm">
              No activity logged yet.
            </div>
          )}
                  <div className="h-10 bg-gray-600 w-180 rounded p-1 border-gray-500 "> <h3 className="mt-2 ml-3">No usage yet during the current period.</h3> </div>

        </div>
      </div>
    </div>
  );
}
