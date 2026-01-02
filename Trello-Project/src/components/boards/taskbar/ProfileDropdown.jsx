import React, { useState, useRef, useEffect } from "react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDropdown = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Profile Button */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
      >
        PS
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={menuRef}
          className="fixed w-64 bg-[#3C3C3C] shadow-lg rounded-lg p-4 z-[9999]"
          style={{
            top: position.top,
            right: position.right,
          }}
        >
          {/* Header + Avatar */}
          <div className="relative">
            {/* Blue Header */}
            <div className="bg-blue-500 h-16 -ml-4 -mr-4 -mt-4 rounded-t-lg relative">
              <div className="absolute left-20 top-2">
                <h1 className="text-white font-semibold">Abc def</h1>
                <p className="text-gray-200 text-sm">@abcde</p>
              </div>
            </div>

            {/* Orange Avatar */}
            <div className="absolute top-5  z-10 h-16 w-16 rounded-full bg-orange-400 text-white text-2xl font-bold flex items-center justify-center">
              PS
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-600 mt-8 pt-3 space-y-2">
            <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
              Edit profile info
            </button>

            <hr className="border-gray-600" />

            <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
              View member’s board activity
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
