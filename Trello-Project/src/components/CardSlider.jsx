import { useState } from "react";
import Card1 from "./Card";
import { Card2 } from "./Card";
import { Card3 } from "./Card";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function CardSlider() {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count < 2) setCount(count + 1);
  };

  const handlePrev = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-start pt-10 mx-30  ">
      <div className="w-full flex justify-end pr-20 space-x-4 mb-0">
        <div className="flex items-center space-x-2">
       {[0, 1, 2].map((i) => (
  <div
    key={i}
    className={`h-2.5 rounded-full transition-all duration-300 ${
      count === i ?  "bg-gray-400 w-20 h-1" : "bg-black w-2.5"
    }`}
  />
))}

        </div>
        <FaAngleLeft className={`w-6 p-1 h-6 cursor-pointer hover:text-blue-400 bg-[#ccc] border rounded-[15px] ${
            count === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}/>
        
        <FaAngleRight className={`w-6 p-1 h-6 hover:text-blue-400 cursor-pointer bg-[#ccc] border rounded-[15px] ${
            count === 2 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          onClick={handleNext} />
      </div >

      <div className="mt-0">
        {count === 0 && <Card1 />}
        {count === 1 && <Card2 />}
        {count === 2 && <Card3 />}
      </div>
    </div>
  );
}
