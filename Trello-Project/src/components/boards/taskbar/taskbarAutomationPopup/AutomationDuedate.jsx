import { IoMdInformationCircleOutline } from "react-icons/io";
import { ImPriceTags } from "react-icons/im";
import { FaRobot } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const AutomationDuedate = () => {
  return (
    <div className="min-h-screen  bg-[#15202B] text-white">
      {/* HEADER */}
      <nav className="border-b border-gray-600 px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-semibold flex gap-2">
          Due date automations <IoMdInformationCircleOutline />
        </h1>

        <div className="flex gap-4 items-center">
          <button className="flex gap-1 underline text-gray-300">
            <IoIosVideocam className="size-6" /> Watch video overview
          </button>

          <button className="bg-blue-600 px-4 py-2 rounded">
            Create automation
          </button>

          <button className="bg-gray-800 p-2 rounded">
            <ImPriceTags />
          </button>

          <RxCross2 className="size-6 cursor-pointer" />
        </div>
      </nav>

      {/* BODY */}
      <div className="py-12 px- flex justify-center">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
           <div className="h-20">
           <h2 className="text-2xl font-bold mb-6">
             Make things happen automatically based <br /> on card's due date.
            </h2>
           </div>
            <h1>Examples:</h1> <br />
            <ul className="space-y-5 text-lg text-gray-200">
              <li className="flex gap-2">
                <FaRobot size={25} />
                The moment a card is due, move it to the top of list  <br /> "To Do" and join the card.
              </li>
              <li className="flex gap-2">
                <FaRobot size={25} />
                2 hours before a card is due, add red label to the card.
              </li>
              <li className="flex gap-2">
                <FaRobot size={25} />
                3 days after a card is due,post comment "@board This <br />
           card was due 3 days ago.
              </li>
            </ul>

            <button className="mt-8 bg-blue-400 px-5 py-3 text-black rounded font-semibold">
              Create automation
            </button>
          </div>

          <div className="flex flex-col items-center">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/WSMfGoXrL9I"
              title="YouTube video"
              allowFullScreen
              className="rounded"
            />
            <p className="text-gray-300 mt-3">
              Watch a 90-second overview of rules
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDuedate;
