import React from "react";
import Time from "../../assets/timeline.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";
import IntegrationSidebar from "./IntegrationSidebar";
import AllIntegrations from "./integrationComponents/AllIntegrations";
import { Outlet } from "react-router-dom";

const Integrations = () => {


  return (
    <>
      <section>
        <NavBar/>
        <div className="h-100 mt-15 flex justify-between">
          <div className="w-120 h-50   mt-25 p-2 ml-50 ">
            <h1 className="text-5xl font-bold mb-5">
              Connect Trello to <br /> everything
            </h1>
            <p className="text-xl">
              Find the apps your team is already using or discover new ways to
              get work done in Trello.
            </p>
          </div>
          <div>
            <img className="w-100 h-100 mr-75" src={Time} alt="" />
          </div>
        </div>
        <div className="w-280 ml-50  mt-10">
          <div className="flex gap-10">
            <div className=" h-250">
              <IntegrationSidebar/>
            </div>
            {/* <AllIntegrations/> */}
            <Outlet/>
          </div>
        </div>
        <UniversalFooter/>
      </section>
    </>
  );
};

export default Integrations;
