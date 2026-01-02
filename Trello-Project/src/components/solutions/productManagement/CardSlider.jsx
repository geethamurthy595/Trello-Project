import { useState } from "react";
import Card1 from "./Card";
import { Card2 } from "./Card";
import { Card3 } from "./Card";
import { Card4 } from "./Card";
import { Card5 } from "./Card";

export default function CardSlider() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen ">
      
      <div className="w-full flex justify-center  space-x-2 mb-6 ml-80">
        {[0, 1, 2,3,4].map((i) => (
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

    
      <div className="mt-0 ml-50">
        {count === 0 && <Card1 />}
        {count === 1 && <Card2 />}
        {count === 2 && <Card3 />}
          {count ===3 && <Card4 />}
        {count === 4 && <Card5/>}
      </div>
    </div>
  );
}
