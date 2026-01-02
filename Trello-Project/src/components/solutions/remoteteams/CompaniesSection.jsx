import React from "react";
import Coinbase from "../../../assets/coinbase.svg";
import JohnDeere from "../../../assets/john-deere.svg";
import GrandHyatt from "../../../assets/grand-hyatt.svg";
import Google from "../../../assets/google.svg";
import Visa from "../../../assets/visa.svg";
import Zoom from "../../../assets/zoom.webp";

const CompaniesSection = () => {
  return (
      <div className=" bg-[#F4F5F7] py-16 flex justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className=" text-[24px]  text-[#091E42] mb-2">
      Join over 2,000,000 teams worldwide who are using Trello to get more done.
        </p>
        
            <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
          <img src={Coinbase} alt="Coinbase" className="h-20" />
          <img src={JohnDeere} alt="John Deere" className="h-25" />
          <img src={GrandHyatt} alt="Grand Hyatt" className="h-20" />
     
        </div>
             <div className="flex flex-wrap justify-center items-center gap-12">
          <img src={Visa} alt="Visa" className="h-20" />
          <img src={Zoom} alt="Zoom" className="h-20" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
