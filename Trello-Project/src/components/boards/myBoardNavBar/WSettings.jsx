import React from "react";
import { useState } from "react";
import {
  Pencil,
  Lock,
  Users,
  Globe,
  X
} from "lucide-react";
import premium from "../../../assets/premium2.svg"
import addtoslack from "../../../assets/addtoslack.png"
import { MdArrowOutward } from "react-icons/md";

const WSettings = () => {

  const [isOn, setIsOn] = useState(false);

  return (
    <div className="min-h-screen bg-[#1D2125] text-gray-200 pl-10 pr-17 py-8 relative">

      {/* Close Icon */}
      <div className="bg-[#2C333A] p-3 rounded-4xl hover:bg-[#2C444A] cursor-pointer absolute top-6 right-6 text-gray-300">
        <X size={17} />
      </div>

      {/* Title */}
      <h1 className="text-base font-semibold mb-6">
        Workspace settings
      </h1>

      {/* Workspace Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="relative group w-14 h-14 rounded-lg bg-gradient-to-b from-green-400 to-green-700 overflow-hidden cursor-pointer">
  
          {/* T text (always centered) */}
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-black">
            T
          </div>

          {/* Bottom Change strip */}
          <button
            className="underline cursor-pointer
              absolute bottom-0 left-0 right-0
              h-7
              bg-green-300
              text-black text-[13px] font-semibold
              opacity-0
              group-hover:opacity-50
              transition-opacity duration-200
            "
          >
            Change
          </button>
        </div>
        
        <div>
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-semibold">
              Trello Workspace
            </h2>
            <button className="p-2 mt-1 rounded hover:bg-[#2C333A] cursor-pointer">
              <Pencil size={10} className="text-gray-400" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className=" py-0.5 rounded ">
              Premium
            </span>
            <span className="flex items-center gap-1">
              <Lock size={10} /> Private
            </span>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-3'>
           <h3 className='flex font-semibold'>
             <img className='mr-2 w-5' src={premium} alt="" />
              AI
             <span className='ml-2 mt-1 px-1 h-4.5 text-[10px] rounded border border-purple-400 text-purple-400'>
              PREMIUM
            </span>
           </h3>
      </div>

      {/* AI Section */}
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="">
        <p>
          {isOn ? (
            <>
              AI is <b>activated</b> for all boards in this Workspace.
            </>
          ) : (
            <>
              AI is <b>deactivated</b>
            </>
          )}
        </p>

        <p>AI is an artificial intelligence tool to help generate, improve, and summarize content while writing on Trello.</p>
        <a className="flex text-blue-500 underline mt-2" href="#">
          Learn About AI
          <MdArrowOutward size={13} className="mt-1 ml-0.5 text-white"/>
        </a>
        </div>

        <div
          onClick={() => setIsOn(!isOn)}
          className={`w-8 h-4 lex items-center rounded-full cursor-pointer transition
            ${isOn ? "bg-green-500" : "bg-gray-500"}`}
        >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition
            ${isOn ? "translate-x-5" : "translate-x-0"}`}
        />
        </div>
      </div>

      {/* Visibility */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
             Workspace visibility
           </h3>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="flex">
        <p><Lock size={10} className="text-red-500 mt-1" /></p>
        <p className="ml-1">Private – This Workspace is private. It's not indexed or visible to those outside the Workspace.</p>
        </div>
        <div className="">
          <button className="bg-[#2C333A] px-2 py-1 rounded text-sm">Change</button>
        </div>
      </div>

      {/* Membership */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
             Workspace membership restrictions
           </h3>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="flex">
        <p className="ml-1">Anyone can be added to this Workspace.</p>
        </div>
        <div className="">
          <button className="bg-[#2C333A] px-2 py-1 rounded text-sm">Change</button>
        </div>
      </div>

      {/* Board Creation */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
            Board creation restrictions
           </h3>
      </div>
     <div className="border-t border-gray-700 py-5 flex justify-between">
        <div>
        <div className="space-y-1">
          <div className="flex items-start gap-2 text-sm text-gray-200">
            <p>Any Workspace member can create</p>
            <Globe size={14} className="text-green-400 mt-0.5" />
            <p> public boards.</p>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-200">
            <p>Any Workspace member can create</p>
            <Users size={14} className="text-yellow-400 mt-0.5" />
            <p> Workspace visible boards.</p>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-200">
            <p>Any Workspace member can create</p>
            <Lock size={14} className="text-red-400 mt-0.5" />
            <p> private boards.</p>
          </div>
        </div>
        </div>
        <button className="bg-[#2C333A] px-2 py-1 h-8 rounded text-sm text-gray-300">
        Change
        </button>
      </div>


      {/* Board Deletion */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
            Board deletion restrictions
           </h3>
      </div>
     <div className="border-t border-gray-700 py-5 flex justify-between">

  <div>
    <div className="space-y-1">
      <div className="flex items-start gap-2 text-sm text-gray-200">
        <p>Any Workspace member can delete</p>
        <Globe size={14} className="text-green-400 mt-0.5" />
        <p> public boards.</p>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-200">
        <p>Any Workspace member can delete</p>
        <Users size={14} className="text-yellow-400 mt-0.5" />
        <p> Workspace visible boards.</p>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-200">
        <p>Any Workspace member can delete</p>
        <Lock size={14} className="text-red-400 mt-0.5" />
        <p> private boards.</p>
      </div>
    </div>
  </div>

  <button className="bg-[#2C333A] px-2 py-1 h-8 rounded text-sm text-gray-300">
  Change
</button>

</div>
{/* Guests */}
<div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
             Sharing boards with guests
           </h3>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="flex">
        <p className="ml-1">Anybody can send or receive invitations to boards in this Workspace.</p>
        </div>
        <div className="">
          <button className="bg-[#2C333A] px-2 py-1 rounded text-sm">Change</button>
        </div>
      </div>


      {/* Slack Restrictions */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
           Slack workspaces restrictions
           </h3>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="flex">
        <p className="ml-1">Any Workspace member can link and unlink this Trello Workspace with Slack workspaces.</p>
        </div>
        <div className="">
          <button className="bg-[#2C333A] px-2 py-1 rounded text-sm">Change</button>
        </div>
      </div>


      {/* Slack Linking */}
      <div className='mt-6 mb-3'>
           <h3 className='flex font-semibold'>
           Slack workspaces linking
           </h3>
      </div>
      <div className="flex justify-between text-sm border-t border-gray-700 py-3">
        <div className="">
        <p className="ml-1">Link your Slack and Trello Workspaces together to collaborate on Trello projects from within Slack.</p>
        <a className="text-blue-500 underline mt-5 ml-1" href="#">Learn more.</a>
        </div>
        <div className="">
          <button className="flex bg-[#2C333A] px-4 py-1 rounded text-sm">
            <img className='mr-2 w-5' src={addtoslack} alt="" />
            Add to Slack
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-200 mt-8">
        Need to delete your Workspace? Please cancel your subscription on the billing tab first.
      </p>
    </div>
  );
};

export default WSettings;
