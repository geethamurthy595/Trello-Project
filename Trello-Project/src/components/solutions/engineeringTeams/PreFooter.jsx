import React from "react";

function PreFooter() {
  return (
    <div className=" mt-10 bg-[#6f42c1] py-5 px-8 flex flex-col md:flex-row justify-between items-center text-white pr-45">
      
      <div className="pl-40">
        <h2 className="text-xl font-bold mb-2">
          Well, what are you waiting for?
        </h2>
        <p className="text-lg">
          Head over to your boards and start getting things done!
        </p>
      </div>

      
      <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
        Sign up
      </button>
    </div>
  );
}

export default PreFooter