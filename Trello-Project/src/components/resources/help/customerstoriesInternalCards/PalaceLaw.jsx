import React from "react";
import palace from "../../../../assets/PalaceLaw1.png";
import NavBar from "../../../NavBar";
import UniversalFooter from "../../../UniversalFooter";
import myIcon from "../../../../assets/palacelaw3.svg";
import { Link } from "react-router-dom";

const PalaceLaw = () => {
  return (
    <>
      <NavBar />
     <section style={{ backgroundImage: `url(${palace})` }}
  className="w-full  sm:h-40 md:h-72 lg:h-60 bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
>
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
    Palace Law + Trello
  </h1>

  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2">
    Thriving With Less Paper, More Revenue, And Happier Clients
  </p>
</section>
<header className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start w-full max-w-6xl mx-auto px-4 md:px-8 py-8">       
<div className="mt-6 md:mt-10 flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">          <img src="//images.ctfassets.net/rz1oowkt5gyp/2J4QBQmsbYHpJa1XuboTCj/4c6d3be4e206174a9f693721cadac801/PalaceLawLogo1.png?w=540" alt="Palace Law Logo" className="w-full md:w-auto h-auto"
          />
        </div>
<div className='w-full md:max-w-lg pt-6 md:pt-12 text-base md:text-lg lg:text-xl'>          <p className="border-t border-gray-400 h-auto md:h-80 w-full md:w-120 p-2 md:p-4">
            Going paperless in the law profession can be  intimidating, but it became a mission-mandate for Palace Law when the firm realized replacing its traditional operations and processes with an all-digital system would be beneficial to its clients, staff, and the environment. With the help of Trello, Palace Law is able to better serve more clients, reduce stress for its attorneys, and save more than 200 pieces of paper a day.
          </p>
        </div>
      </header>
<main className="w-full text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-5 md:py-10">

  <div className="w-full max-w-4xl mx-auto  text-left pb-10 px-4 sm:px-6 md:px-8">
    
           <h3 className="font-medium pb-3 text-lg md:text-2xl">When you picture a lawyer at work, what comes to mind?</h3>
        <p >Traditionally, they might represent a stuffy suit-and-tie professional culture, long days at the office, and lots of file folders and paperwork.</p>
        <p className="pt-5">The legal profession, as it was designed and has existed for decades, was built on a paper-based system.</p>
       <p className="pt-5">According to Jordan Couch, an attorney at Palace Law, it was also built with an emphasis on the people practicing the profession, rather than those being served by it. “It’s an industry that—in some ways—counters the best interests of the client,” Jordan says. “Consider the billable hour model. The client’s success is your hindrance, because the faster and more efficient you work, the less you make. That’s problematic for the client.”</p>
       <p className="pt-5">In law school, Jordan was inspired by his professors to consider new and different ways to practice law. When he graduated, he sought out a like-minded firm. His search led him to Patrick Palace, founder of Palace Law. Both believed the profession needed to better serve clients without charging more. “We wanted to deliver better service to more people, more efficiently,” Jordan says. “That aspiration was the basis for all the changes we’ve made and continue to make today.”</p>
       <p className="pt-5">Palace Law decided the way to achieve its goal of better serving clients was to create and implement a digital system replacing the paper-based structure at the heart of many legal professionals’ workdays</p>
      <h1 className="font-medium pt-10 text-lg md:text-xl">Starting The Digital Journey</h1>
       <div className="flex flex-col sm:flex-row gap-6 sm:gap-15 pt-5 items-start sm:items-start">
        <div className="flex-shrink-0"><img src={myIcon} alt="icon" className="w-14 sm:w-20" /></div>
        <div className="text-left">'Being able to visualize a workflow is really important for lawyers, but our workflows can be hard to see and understand,' Jordan says. 'That's why we looked at Trello.'</div>
       </div>
        <p className="pt-10">When Palace Law first began its digital transformation, the practice focused on two key challenges.</p>
        <p className="pt-5">The first was to make attorneys available to clients outside of the office. To do this, the firm had to find a way to make all the information scattered across desks and on shelves—all of those paper files—accessible from anywhere. Palace Law adopted Clio Legal Trends Report as its cloud-based practice management system, which became the firm’s digital file room. Every communication and file was recorded and stored there.</p>
        <p className="pt-5">The second challenge was to help attorneys access their case assignments and tasks in a digital environment. “Being able to visualize a workflow is really important for lawyers, but our workflows can be hard to see and understand,” Jordan says. “That’s why we looked at Trello.” Palace Law adopted Trello as a cloud-based workflow system, and through Zapier, it was integrated with Clio, giving the staff at Palace Law access to the information they needed for a variety of processes. Palace Law also chose Trello because of its integration capabilities; Slack and Google Drive are also part of the firm’s digital ecosystem.</p>
        <p className="pt-5">Once this paperless environment was in place, the firm reviewed each of its workflows and updated them for the new digital system. For example, in the old system, someone would physically carry a stack of case folders to an attorney and heap them on her desk. The pile of folders amounted to the attorney’s workload, and anchored her to the office. Without them, she couldn’t get her work done.</p>
        <p className="pt-5">Trello has completely transformed this operational structure. Now, case folders are represented by a Trello card. Those cards are assigned to attorneys’ Trello boards, and attorneys use Trello features to prioritize their work. In the old model, an attorney manually marked a case folder indicating when it needed to be reviewed again. Now, they receive a reminder in Trello that it’s time to revisit a case.</p>
        <p className="pt-5">Palace Law digitized its mail and client communication workflow as well as its client intake process, and even manages cases in litigation with the help of Trello.</p>
        <p className="pt-5">“Trello gave us something tangible,” Jordan says. “Since we no longer had a physical file on our desk, we needed a way to see each case folder—to know what to work on, to understand the priorities, to see the files associated with a client.”</p>
        <p className="pt-5">This change has allowed attorneys to work at home or have their resources handy when meeting with a client offsite, which has reduced stress and made everyone’s lives easier. For example, Jordan uses the Trello mobile app to check his mail and review deadlines. “The mobile app is a big tool for checking in on things and seeing what’s coming up,” Jordan says.</p>
         <h1 className="font-medium pt-10 text-lg md:text-xl">Saving 200 Sheets Of Paper A Day</h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-15 pt-5 items-start sm:items-start">
        <div className="flex-shrink-0"><img src={myIcon} alt="icon" className="w-16 sm:w-20" /></div>
        <div className="text-left">'People have generally been happier since we started using Trello. It has made our lives a lot easier,' Jordan says.</div>
        </div>
        <p className="pt-10">Today, the team at Palace Law is confident about its digital system, but going paperless was intimidating. “When we started, very few people were doing it, which made it a little scary,” Jordan says. “There was no proven model for it.”</p>
        <p className="pt-5">While the staff at Palace Law were nervous about the transformation, they were generally on board. “Part of our culture is to be creative, innovative, and adaptable. We’re always looking for ways to do things better for our clients,” Jordan says.</p>
        <p className="pt-5">The system has yielded some remarkable results. In just 9 months, Palace Law increased revenue by 76%. The firm has also earned an impressive Net Promoter Score (NPS) of 70. According to the Clio Legal Trends report, the nationwide average NPS for law firms is 25. The firm has dramatically reduced how much paper it uses, too. On average, they’re saving 200 sheets of paper a day.</p>
        <p className="pt-5">As an added bonus, the transformation has also affected the way people feel about their work. “People have generally been happier since we started using Trello. It has made our lives a lot easier,” Jordan says. “People are less stressed. Having a lot of paperwork on your desk is hard to keep track of. Looking at Trello cards with labels and due dates has reduced our stress and made it easier to identify the important priorities in our workflows.”</p>
        <p className="pt-15">Join over 2,000,000 teams worldwide who are using Trello to get more done.</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-10">
          <div >
            <img src="//images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg" alt="Coinbase" className="h-auto"/>
          </div>
          <div>
            <img src="//images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg" alt="John Deere" className="h-auto"/>
          </div>
          <div>
            <img src="//images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg" alt="Grand Hyatt" className="h-auto"/>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-6 sm:pt-8">
          <div>
            <img src="//images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg" alt="Visa" className="h-auto"/>
          </div>
          <div>
            <img srcset="//images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=324 2x" alt="Zoom" className="h-auto"/>
          </div>
          </div>
        </div>
         </main>
   <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full bg-[#322F7D] text-white rounded-lg px-6 py-8 gap-6 mt-10">

  <div className="text-center md:text-left">
    <h3 className="font-medium text-sm md:text-base">
      NOW AVAILABLE
    </h3>
    <h1 className="font-bold text-lg md:text-xl">
      A 14 Day Free Trial of Premium!
    </h1>
    <p className="text-sm md:text-base">
      Get unlimited boards, Trello views, and limitless automation, plus a ton more.
    </p>
  </div>

  <div>
    <Link to="/free-trial">
    <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 cursor-pointer">
      Try it today
    </button>
    </Link>
  </div>

</section > 
  <div className="w-full flex  justify-end px-4 sm:px-6 md:px-10 lg:px-20 py-8">
    <Link to="/customers">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-indigo-900 cursor-pointer">
    Trello customer case studies
  </button>
  </Link>
</div>
     <UniversalFooter />
    </>
  );
};

export default PalaceLaw;
