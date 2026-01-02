import { useState } from "react";
import Scard1 from "../slider1/SliderContent";
import { Scard2 } from "../slider1/SliderContent";
import { Scard3 } from "../slider1/SliderContent";

export default function CardSlider2() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen ">
      
      <div className="w-full flex justify-center  space-x-2 mb-1 ">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            onClick={() => setCount(i)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              count === i
                ? "bg-gray-500 w-20 h-3"
                : "bg-black w-2 h-2"
            }`}
          />
        ))}
      </div>

    
      <div className="">
        {count === 0 && <Scard1 />}
        {count === 1 && <Scard2/>}
        {count === 2 && <Scard3 />}
   
      </div>
    </div>
  );
}