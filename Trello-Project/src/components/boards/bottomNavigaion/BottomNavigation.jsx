import React, { useState } from "react";

/* INBOX ICON */
const InboxIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3H4.99A1.99 1.99 0 0 0 3 4.99V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4.99A1.99 1.99 0 0 0 19 3zm0 12h-4l-1.5 2h-3L9 15H5V5h14z" />
  </svg>
);

/* CALENDAR ICON */
const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2zm12 18H5V9h14zm0-11H5V6h14z" />
  </svg>
);

/* BOARD ICON */
const BoardIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
  </svg>
);

/* SWITCH BOARD ICON */
const SwitchBoardsIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1.833v-7zm3.333 0v7h2.334v-7zm3.834 0v7H11a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zM0 4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm14.5 7.75V7H16v4.75A3.25 3.25 0 0 1 12.75 15H5v-1.5h7.75a1.75 1.75 0 0 0 1.75-1.75"
    />
  </svg>
);

const BottomNavigation = () => {
  const [active, setActive] = useState("Inbox");

  const tabs = [
    { label: "Inbox", shortcut: "G + I", icon: <InboxIcon /> },
    { label: "Planner", shortcut: "G + P", icon: <CalendarIcon /> },
    { label: "Board", shortcut: "G + B", icon: <BoardIcon /> },
    { label: "Switch boards", shortcut: "B", icon: <SwitchBoardsIcon /> },
  ];

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 
      flex items-center gap-3 px-4 py-2 
      bg-[#0B0B0B] text-gray-300 
      rounded-lg border border-gray-500 shadow-lg
      w-[456.05px] h-[45.6px]"
    >
      {tabs.map((tab) => (
        <NavItem
          key={tab.label}
          icon={tab.icon}
          label={tab.label}
          shortcut={tab.shortcut}
          active={active === tab.label}
          onClick={() => setActive(tab.label)}
        />
      ))}
    </div>
  );
};

const NavItem = ({ icon, label, shortcut, active, onClick }) => {
  return (
    <div className="relative group">

      {/* TOOLTIP */}
      <div
        className="
        absolute -top-9 left-1/2 -translate-x-1/2
        hidden group-hover:flex
        items-center gap-2
        bg-white text-black text-xs font-medium
        px-2 py-1 rounded shadow
        whitespace-nowrap z-50
      "
      >
        <span>{label}</span>

        {/* SHORTCUT BOX */}
        <span className="
          bg-gray-400 border text-gray-700 text-[10px]
          px-1.5 py-0.5 rounded
        ">
          {shortcut}
        </span>
      </div>

      <button
        onClick={onClick}
        className={`
          px-3 py-1.5 rounded-xl flex flex-col items-center text-sm
          transition-all
          ${
            active
              ? "bg-[#0D2C66] text-[#4C88FF]"
              : "hover:bg-white/10 text-gray-300 hover:text-white"
          }
        `}
      >
        <div className="flex items-center gap-1">
          {React.cloneElement(icon, {
            className: `
              w-4 h-4 
              ${active ? "text-[#4C88FF]" : "group-hover:text-white"}
            `,
          })}
          <span
            className={active ? "text-[#4C88FF]" : "group-hover:text-white"}
          >
            {label}
          </span>
        </div>

        {active && (
          <div className="mt-1 h-[2px] w-full bg-[#4C88FF] rounded"></div>
        )}
      </button>
    </div>
  );
};

export default BottomNavigation;
