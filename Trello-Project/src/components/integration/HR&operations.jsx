import React from 'react'

const IntegrationHrOperation = () => {
  const cards = [
    {
      title: "Jotform",
      desc: "Send form submissions to your Trello boards.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/1VGwZOhdO1zbajtkwRA3tj/b9cd64f0441e27d09a3926f7b7917d72/jot_form.png", 
    },
    {
      title: "TimeDoctor",
      desc: "Track Cards with TimeDoctor.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/4YveXRF99MSXu0WW1aFbK9/446c87f7c475876d06a06c98987b2c8c/Time_Doctor.png",
    },
    {
      title: "Where BY",
      desc: "Attach a Whereby room directly onto a board.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/49XpdlDQuzpFXGKM8Zmdec/0166ebb6cc49d3a8c3718906c1935a1a/Whereby.png",
    },
    {
      title: "Rotor for Trello",
      desc: "Tracks time spent on cards and see elapsed time reports.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/66x9xV2rT3lcJ2oISwnbuk/08004a8bc1cde6925fccc4a189e07748/Rotor.png",
    },
    {
      title: "Tic Time Tracking",
      desc: "Track your time and hit your budgets.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6KkbalKwNfYp7rApxwMGzR/feeb23a44170fb16abee76f428da4b4c/Tick.png",
    },
    {
      title: "Reports for Trello",
      desc: "Get time tracking data by simply using Trello.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6SMcsVdSbF0GfFGDjHns2e/87f71fca3a4942c1438d0ea41624bc3a/Reports-forTrello.png",
    },
    {
      title: "Harvest Power-Up",
      desc: "Track time alongside your work in Trello.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/4AJlTEY4exlQL8opbG5ZQx/b3a5672ef74cbdc6e4441a21af4e05ff/Harvest.png",
    },
    {
      title: "Hubstaff",
      desc: "Track time to specific Trello cards via the Hubstaff desktop application.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/M6vxgch04crQnOKgbuqjM/98860d5616510e06135384ac2d6685af/Hubstaff.png",
    },
    {
      title: "PomoDone",
      desc: "Track time you spend in Trello using the Pomodoro technique.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/4Ql7uz5nHkfesmssXKbWTg/7073ac73323bb11ecbdee6a756fe6e3a/PomoDone.png",
    },
    {
      title: "Jotform Sign",
      desc: "Send form submissions and e-sign documents to your Trello boards.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6kDH6kNHmfSVlkN0qA7Z9O/6d04fee618c59ae82c4698d9b695b42a/JotformSign.png",
    },
    {
      title: "Hour Stack",
      desc: "Time tracking and scheduling for Trello cards.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/3nX5nlTyEuIN1uOpSPkIWg/efa4a968dcf2bddecba1fe00e287deb3/Hour_Stack.png",
    },{
      title: "Due Focus",
      desc: "Upgrade your company's human assets and manage your team in the most efficient way.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6L4WFbTn0q47pIl0bel57I/b11eb84209327542b766fe6ed8acf31d/Due_Focus.png",
    },{
      title: "Speak Up",
      desc: "Automatically create a Trello card to track and manage its implementation.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6tkOv2Muitex5WkLWmrejg/23c39d6520d7f48f75770a495f6acca6/Speak_Up.png",
    },{
      title: "Chanty",
      desc: "Receive messages in Chanty when Trello activity occurs.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/3PtBNcwVSQTR4LDMnccs5x/2d33e257a987d0362f500f43c2aea305/Chanty.png",
    },{
      title: "Plus for Trello",
      desc: "Time-tracking, reporting, scrum, and more!",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/6aPCsDytKsp2xdRol7gMkC/ea45e1399b1ccd5dd0940a00f1513b81/Plus-forTrello.png",
    },{
      title: "Time Tracking and Productivity Monitoring",
      desc: "Track time on boards and cards, plus gain clear insights into how your team utilizes their time.",
      icon: "https://images.ctfassets.net/rz1oowkt5gyp/mAm5UWUkUDJ6BxRb2ccqV/9b1ac90de5f4b0990786e5935500e666/Insightful_logo_160x160.png",
    },

  ];

  return (

    <div>
    <div className='flex gap-3 items-center mb-3'><h1>HR & Operation(16)</h1></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 mb-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-6 bg-white shadow-xl"
        >
          <div className='flex gap-2 items-center'>
            <img src={card.icon} alt="" className="w-10 h-10 " />
            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
          </div>

          <p className="text-[16px] text-gray-600 mb-6 leading-relaxed pt-5">{card.desc}</p>

          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm 
                   font-medium text-gray-800 hover:bg-gray-100">
            Configure
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default IntegrationHrOperation
