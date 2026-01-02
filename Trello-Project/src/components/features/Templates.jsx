import { MdKeyboardArrowDown } from "react-icons/md";
import NavBar from "../NavBar";
import { Link, Outlet } from "react-router-dom";
import TempletSideBar from "./TempletSideBar";
import AtlassianFooter from "../solutions/taskManagement/AtlassianFooter";

let Templates = () => {
  return (
    <>
      <NavBar />
      <div className="flex pt-[100px] h-screen overflow-auto hide-scrollbar  ">
        <div className="sticky top-1">
          <TempletSideBar />
        </div>
        <Outlet />
      </div>
      <br />
      <hr className="text-gray-500 w-320 ml-35" /> <br /> <br />
      <div className="flex justify-center ">
        <button className="border w-28 h-10 -ml-6 border-gray-800 text-gray-600">
          English
        </button>{" "}
        <span className="absolute left-193 text-4xl text-gray-600">
          <MdKeyboardArrowDown />
        </span>
      </div>{" "}
      <br />
      <AtlassianFooter />
    </>
  );
};
export default Templates;
