import React from "react";

const BoardUtility = () => {
  let data = [
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3y8SY9stySK2M8Cs8sRakY/4d2e4e200aab63b7d0574727a6ed080d/Dakboard.png",
      title: "DAKboard",
      desc: "DAKboard is a connected display for photos, calendar, weather, news and Trello boards!",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/7pMw2s2bz0ZELCEJf4LE0C/8aa8ecc1001d988746a6a14867bda7a1/Clockify.png",
      title: "Clockify",
      desc: "Track time within Trello using a timer.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/rRW4qeC5KlW1MPq3azcid/67d22e91b7ca8935da2e9b7b410c59ad/Card_Numbers.png",
      title: "Card Numbers for Trello",
      desc: "Show card numbers on the front of your Cards.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3E6xTK10PrNd0Qsp9OKZUi/d546a68ffe7b942d2a10d84c778dc9a4/Mylenio.png",
      title: "MyLenio",
      desc: "Manage user access and permissions to your boards with MyLenio.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/6VzBTsZVHMwaPnq8voYCve/a4f5f35c77fbccb0a37ed25ca3162410/Mailbutter.png",
      title: "Mailbutler",
      desc: "Create and transfer tasks in Apple Mail or Gmail-2-Trello with just one click.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/pe06405btWVj3bubHLxdd/2347dbe31f3a40beeb9c47720b93c491/Points-forTrello.png",
      title: "Points for Trello",
      desc: "Activate a 'point' system in cards of Trello boards.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3jKjmkN3iyY0CPX7gREV6t/858c0d909826dbe495c96f796e66154a/Boards_for_Trello.png",
      title: "Boards for Trello",
      desc: "Quickly access your Trello boards via a handy popup in Chrome.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3tYzpCrqlktznd418iMZgt/d65b21f0ff082c201672da41c243cc59/Taco.png",
      title: "Taco App",
      desc: "Drag and drop tasks between multiple apps.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/7pMw2s2bz0ZELCEJf4LE0C/8aa8ecc1001d988746a6a14867bda7a1/Clockify.png",
      title: "Card Repeater",
      desc: "Create copies of Trello cards automatically at set intervals for repeated tasks.",
      button: "Enable",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/Rpij7iFblpuFunjlERI8t/24bd5c5c8b19b4904454be20e831fa4b/Planway.png",
      title: "Planyway Calendar",
      desc: "Organize Trello cards into an easy to use calendar view.",
      button: "Enable",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/7lfP4HBoUezBiqa5w8Vo8X/6c796dac7052ecfd7c976b4bf04b28ad/power-up-logo_160.png",
      title: "Cross-Board Export: CSV, JSON, XLSX, Google Sheets",
      desc: "One installation covers all boards, eliminating multiple fees for export power-ups.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3LqrYc8hpS5QvnKTzijyrj/5e4873a358a0a346ca094393911e7324/Flashcards.png",
      title: "Flashcards for Trello",
      desc: "Use the power of Trello boards to study using flashcards.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/5x2DgEinaaAKgYCEDYKkHV/a1915b01353b834542542fa167451253/tg-icon.png",
      title: "Telegram Bot by Mig",
      desc: "Connect your Trello board to your Telegram chat and stay up-to-date with card and list changes.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/NqsJM55qcI1vhqJ0Gaaw7/12dc9ce2d226469404302c746caa9016/Zapier.png",
      title: "Zapier",
      desc: "Connect Trello to hundreds of apps using Zapier.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3r8v8MBKToTMtxYWw7EXIZ/7170ba4d19d9ba3777520103ab6aa4de/Lists_Layout.png",
      title: "List Layouts for Trello",
      desc: "Allow Trello lists to be displayed vertically or in a grid.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/1bUyJnOln65dCY62TAyzXT/030052f76725627d2d22f1ea46299dae/FireFox.png",
      title: "Firefox Trello Card Counter",
      desc: "Displays the number of cards in each list on a Trello board.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/5mWS9FT8IJpu5baMsvNZl7/59b9d66ee06e961e9dcea7706a301241/Quick_Entry.png",
      title: "QuickEntry for Trello",
      desc: "A simple Mac utility to add cards quickly to a Trello board from anywhere.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/49r8nVWxDxISyqAHAy7RcW/d1bfb913acf44189d38e0f80342f8af9/TrelloExternalWindow.png",
      title: "Trello External Window",
      desc: "An external frameless Chrome window for Trello.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/1rigUAh2qxrfuMdn4RK1gk/289e0fedeee1dc257fa8032ec06ad7b8/FireFox.png",
      title: "Firefox Save to Trello",
      desc: "Create a Trello card from any webpage, including Gmail.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/2RikUbrL0wxq4yzPydIHrJ/876eaa7ad03cee3f7c60bde510b225bb/writers_block_logo.png",
      title: "Trello Writers Block Extension",
      desc: "Helps authors collect research material for bibliographies and store them in Trello.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/7KffkOZHwFIyzN0FuieSVM/99d8bb9dc313bf0448fde07cf40cd758/Ganttify.png",
      title: "Ganttify",
      desc: "Gantt charts for Trello with quick viewing, editing, and sharing of project timelines.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/3NZwzkl1wHxYx1x2qS7Kmw/250da9826ba152a33b295288a8a80a53/Detectify.png",
      title: "Detectify",
      desc: "Add Detectify security notifications to your Trello to-do list.",
      button: "Configure",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/20riLJewmhDxie0PVpIUBa/598dc8601918b5e1a390bcd73bc35edb/Costello.png",
      title: "Costello",
      desc: "Add costs to cards and view a total cost at the top of your board.",
      button: "Enable",
    },
    {
      img: "https://images.ctfassets.net/rz1oowkt5gyp/2YZsRegdIFhXzAn0PYxlKr/20aebe100d03b90f0744398766421b23/Hello_Epics.png",
      title: "Hello Epics",
      desc: "Simplify your Trello boards with parent/child card relationships.",
      button: "Enable",
    },
  ];

  return (
    <>
   
      <section>
           <h1 className="w-50 text-2xl font-medium">Board Utility(54)</h1>
        <div className="mt-5 grid grid-cols-3 w-200  gap-5 ml-6  ">
          {data.map((item, index) => {
            return (
              <div className=" h-60 w-60  shadow-xl bg-gray-50 rounded  p-3 ">
                <span className="flex gap-2 items-center ">
                  <img
                    className="h-11 w-9 rounded mt-[-3px]"
                    // src="https://images.ctfassets.net/rz1oowkt5gyp/6Jz2MF3j6pB9hdNxkYRNsF/58499a52f23d18427398138e90b74e36/Card_Snooze.png"
                    src={item.img}
                    alt={item.title}
                  />
                  {/* <h1 className=" text-lg font-medium">Card Snooze</h1> */}
                  <h1 className=" text-lg font-medium">{item.title}</h1>
                </span>
                {/* <p className="text-gray ">
                Snooze (archive) a card <br /> until a certain time, <br /> when
                it will be <br />
                restored to the board.
              </p> */}
                <p className="text-gray ">{item.desc}</p>
               
     
                <button className="border p-3 w-23  m-6 ml-3 rounded bg-white hover:bg-gray-300 transition-all">
                  {item.button}
                </button>
              </div>
            );
            <br />;
          })}
        </div>
        <br />
        <button className="border cursor-pointer w-25 h-13 m-5 ml-85 text-white bg-blue-600 rounded hover:bg-[#0747A6]">View all</button>
      </section>
    </>
  );
};

export default BoardUtility;
