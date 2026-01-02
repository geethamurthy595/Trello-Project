let Do_with_trello = () => {
  return (
    <div>
      <div className="h-100 pl-[205px] pt-[170px]">
        <p className=" h-20px font-[charlie text,sans-serif] font-medium">
          WORK SMARTER
        </p>
        <h1 className="text-4xl font-semibold font-[charlie text,sans-serif] w-100 ">
          Do more with Trello
        </h1>
        <p className=" h-30 w-130 pt-[17px] font-[charlie text,sans-serif] text-[20px]">
          Customize the way you organize with easy integrations, automation, and
          mirroring of your to-dos across multiple locations.
        </p>
      </div>
      <div className="flex pl-[200px] pt-[50px] gap-[50px] my-10px px-[200px] ">
        <div className="h-105 w-90 bg-gray-50 rounded-[8px] p-5 flex flex-col justify-evenly ">
          <div className="w-20">
            <img src="/src/assets/Integration.svg" alt="" />
          </div>
          <p className="text-3xl font-semibold">Integrations</p>
          <p className="text-[16px] font-normal">
            Connect the apps you are already using into your Trello workflow or
            add a Power-Up to fine-tune your specific needs.
          </p>
          <br />
          <button className="text-[16px] font-normal border-1 h-10 w-40 rounded hover:bg-blue-200 border-blue-500">
            Browse Integrations
          </button>
        </div>

        <div className=" h-105 w-90 bg-gray-50 rounded-[8px] p-5 flex flex-col justify-evenly ">
          <div className="h-30 w-30">
            <img src="/src/assets/Autodev.svg" alt="" />
          </div>
          <p className="text-3xl font-semibold">Automation</p>
          <p className="text-[16px] font-normal">
            No-code automation is built into every Trello board. Focus on the
            work that matters most and let the robots do the rest.
          </p>
          <br />
          <button className="text-[16px] font-sm border-1 rounded px-1 py-1 hover:bg-blue-200 border-blue-500">
            Get to know Automation
          </button>
        </div>
        
        <div className=" h-105 w-90 bg-gray-50 rounded-[8px] p-5 flex flex-col justify-evenly ">
          <div className="h-30 w-30">
            <img src="/src/assets/Project_management.svg" alt="" />
          </div>
          <p className="text-3xl font-semibold  w-100">
            Card mirroring
          </p>
          <p className="text-[16px] font-normal">
            View all your to-dos from multiple boards in one place. Mirror a
            card to keep track of work wherever you need it!
          </p>
          <br />
          <button className="text-[16px] font-normal border-1 h-10 rounded  hover:bg-blue-200 border-blue-500 px-[2px]">
            Compare plans
          </button>
        </div>
      </div>
    </div>
  );
};
export default Do_with_trello;
