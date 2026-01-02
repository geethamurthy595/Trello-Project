import React, { useState } from "react";
import profileInfo from "../../../assets/profileInfo.svg";
import { CgProfile } from "react-icons/cg";
import {
  User,
  Settings,
  Activity,
  CreditCard,
  LayoutGrid,
  Users,
  Plug,
  Receipt,
  Download
} from "lucide-react";
const Profile = () => {
  const [username, setUsername] = useState("hemanth"); // always public & non-editable
  const [bio, setBio] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [isEditing, setIsEditing] = useState(false);
 
  const handleEdit = () => {
    setTempBio(bio);
    setIsEditing(true);
  };
 
  const handleSave = () => {
    setBio(tempBio);
    setIsEditing(false);
    // 🔗 API call can be added here
  };
 
  const handleCancel = () => {
    setTempBio(bio);
    setIsEditing(false);
  };
 
  return (
    <div className="min-h-screen bg-[#1D2125] text-gray-200 flex">
 
 
      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 px-55 py-15">
        <h1 className="text-base font-semibold text-gray-200 mb-5">
          Profile and Visibility
        </h1>
 
        {/* Banner */}
          <img src={profileInfo} alt="Profile" className=" h-32 mx-auto object-contain"/>
        {/* Info Card */}
        <div className="rounded-md">
          <h2 className="font-semibold text-xl mb-2 mt-5">
            Manage your personal information
          </h2>
          <div className="bg-[#22272B] p-5">
            <p className="text-sm text-gray-300">
            This is an Atlassian account. Edit your personal information and
            visibility settings through your{" "}
            <a href="#" className="text-blue-400 cursor-pointer underline">
              Atlassian profile
            </a>.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            To learn more, view our <a href="#" className="text-blue-400 cursor-pointer underline">Terms of Service</a> or <a href="#" className="text-blue-400 cursor-pointer underline">Privacy Policy.</a>
          </p>
          </div>
        </div>
 
        {/* ABOUT SECTION */}
        <div className="mt-8">
          <h2 className="font-semibold text-2xl mb-4">About</h2>
 
          {/* Username */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
      <label className="text-sm text-gray-300">
        Username <span className="text-red-400">*</span>
      </label>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        🌐 Always public
      </span>
    </div>
            <input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="w-full bg-[#1D2125] border border-gray-600 rounded px-3 py-2 text-sm"
 />
 
           
          </div>
 
          {/* Bio */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
      <label className="text-sm text-gray-300">Bio</label>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        🌐 Always public
      </span>
    </div>
 
           
              <textarea
                rows="4"
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                className="w-full bg-[#1D2125] border border-gray-600 rounded px-3 text-sm focus:outline-none"
              />
 
          </div>
         
          {/* Save Button */}
<div className="flex justify-end mt-4">
  <button
    onClick={handleSave}
    className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-md text-sm font-medium"
  >
    Save
  </button>
</div>
        </div>
      </main>
    </div>
  );
};
 
export default Profile;
 
 