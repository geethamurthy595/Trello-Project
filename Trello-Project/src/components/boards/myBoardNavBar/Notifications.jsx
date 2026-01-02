import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <section className="mt-5 w-80 rounded-md bg-[#2b2c2f] p-4 text-zinc-200 shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-600 pb-3">
        <p className="text-sm font-medium">Notifications</p>

        <div
          className="flex items-center gap-3 cursor-pointer"
          
        >
          {showNotifications ? (
            <BsToggleOn size={22} onClick={() => setShowNotifications(!showNotifications)}/>
          ) : (
            <BsToggleOff size={22} onClick={() => setShowNotifications(!showNotifications)} />
          )}
          <HiDotsVertical  className="ml-5 "/>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <img src='https://trello.com/assets/ee2660df9335718b1a80.svg' alt="logo" className="h-16 w-16 opacity-80" />

        {/* Toggle Label */}
        <p className="text-xs text-zinc-400">
          {showNotifications ? "Notifications enabled" : "Only show unread"}
        </p>

        {/* Conditional Messages */}
        {showNotifications ? (
          <p className="text-sm">No notifications</p>
        ) : (
          <p className="text-sm">No unread messages</p>
        )}
      </div>
    </section>
  );
};

export default Notifications;
