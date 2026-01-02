import React, { useState } from "react";
import trello from "../../../assets/trello.png";
import CreateBoard from "./CreateBoard";
const Create = ({ onCreateBoard }) => {
   const [create, setCreate] = useState(true);
const [createBoard, setCreateBoard] = useState(false);

 return (
  <>
    {/* Create Modal */}
    {create && (
      <div className="bg-[#2b2c2f] p-3 rounded text-sm h-40 w-100 text-amber-50">
        <div
          className="flex mb-3 hover:bg-[#242528] rounded cursor-pointer"
          onClick={() => {
            setCreate(false);        // CLOSE Create
            setCreateBoard(true);    // OPEN CreateBoard
          }}
        >
          <img src={trello} alt="logo" />

          <div className="text-sm">
            <h1 className="font-semibold">Create Board</h1>
            <p>
              A board is made up of cards ordered on lists. Use it to manage
              projects, track information, or organize.
            </p>
          </div>
        </div>

        <div className="flex text-sm hover:bg-[#242528] rounded cursor-pointer ">
          <img src={trello} alt="" />
          <div>
            <h1 className="font-semibold">Start with a template</h1>
            <p>Get started faster with a board template.</p>
          </div>
        </div>
      </div>
    )}

    {/* CreateBoard Modal */}
    {createBoard && (
      <div className="fixed z-100">
        <div
          className="absolute top-14 right-4"
          onClick={(e) => e.stopPropagation()}
        >
          <CreateBoard className='ml-12'/>
        </div>
      </div>
    )}


  </>
);
}

export default Create;

