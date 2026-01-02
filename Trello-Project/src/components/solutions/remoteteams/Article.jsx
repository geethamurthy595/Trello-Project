// import React from 'react'

// function Article(){
//     return <>
//     <div className="bg-[#EAE6FF] pl-[100px] mb-5">
//         <h1 className=" pt-[80px] pl-[320px] text-[36px] font-medium">
//             Resources To Back Better Products
//         </h1><br />
//         <div className=" w-[1180px] h-[730px] p-[10px] ">
//             <div>
//             <h1 className="text-[16px] font-medium">HOW TO PLAN AND PRIORITIZE YOUR PRODUCT ROADMAP IN TRELLO [BLOG POST]</h1>
//             <p className="text-[20px] font-normal">Get ahead of your competition by prioritizing and planning your product roadmap in Trello. Doing so will ensure your team builds the features that matter most, and ultimately enable you to achieve product excellence.</p><br />
//             <p className="underline text-[16px] font-normal text-blue-800">READ MORE</p>
//             </div><br />
//             <hr /><br />
//             <div>
//             <h1 className="text-[16px] font-medium">TRELLO AGILE SERIES: RETROSPECTIVES AND ROADMAPS [WEBINAR]</h1>
//             <p className="text-[20px] font-normal">How often is your team reflecting? Discover how your product management team can use the power of Trello to effectively manage retrospectives and product roadmaps in order to make better decisions, together.</p><br />
//             <p className="underline text-[16px] font-normal text-blue-800">Watch Now</p>
//             </div><br />
//             <hr /><br />
//             <div>
//             <h1 className="text-[16px] font-medium">TRELLO AGILE SERIES: THE SPRINT BOARD [WEBINAR]</h1>
//             <p className="text-[20px] font-normal">Discover how agile and scrum techniques can be applied to your workflows in Trello and more specifically, your team sprints. Full steam ahead!</p><br />
//             <p className="underline text-[16px] font-normal text-blue-800">Watch Now</p>
//             </div><br />
//             <div className="h-[131px] w-[1108px] bg-[#091E42] rounded-[10px] text-white pl-[48px] pt-[24px] pr-[48px] flex justify-between">
//                 <div>
//                 <p className="text-[16px] font-medium">NOW AVAILABLE</p>
//                 <h1 className="text-[20px] font-medium">A 14 Day Free Trial of Premium!</h1>
//                 <p className="text-[16px] font-normal">Get unlimited boards, Trello views, and limitless automation, plus a ton more.</p>
//                 </div>
//                 <div>
//                     <button className="bg-white text-[16px] h-[49px] w-[118px] text-black rounded-[5px] mt-[20px]">Try it today</button>
//                 </div>
//             </div>
//         </div>
        
//     </div>
    
//     </>
// }
// export default Article

import React from 'react'

function Article() {
  return (
    <>
      <div className="bg-[#EAE6FF] pl-[100px] mb-5">
        <h1 className="pt-[80px] pl-[300px] text-[36px] font-medium text-[#091E42]">
          Resources To Stay Connected From Afar
        </h1>
        <p className="text-[20px] font-normal text-[#091E42] pl-[180px] pr-[180px]  leading-relaxed text-center">
          Learn the top tips and techniques for remote success from teams who have
        </p>
         <p className="text-[20px] font-normal text-[#091E42] pl-[180px] pr-[180px]  leading-relaxed text-center">
          lived and perfected the work-from-anywhere lifestyle for years.
        </p>

        <div className="w-[1180px] h-auto p-[10px] mt-8">
        
          <div>
            <h1 className="text-[16px] font-medium text-[#091E42]">
              HOW TO EMBRACE REMOTE WORK [GUIDE]
            </h1>
            <p className="text-[20px] font-normal text-[#091E42] mt-2">
              Discover the tips, strategies, and advice from the world’s leading
              companies in order to empower a productive and collaborative remote team.
            </p>
            <p className="underline text-[16px] font-medium text-[#0C66E4] mt-3">
              READ MORE
            </p>
          </div>

          <hr className="my-6 border-[#C1C7D0]" />

        
          <div>
            <h1 className="text-[16px] font-medium text-[#091E42]">
              REMOTE WORK PLAYBOOK FOR TEAM SUCCESS [BLOG POST]
            </h1>
            <p className="text-[20px] font-normal text-[#091E42] mt-2">
              Communication, culture, and transparency are key for remote success,
              and a great place to start is with choosing the right tools. Learn best
              practices for new (and existing) remote teams and explore five tried and
              tested Trello boards and workflows made specifically with remote teams in mind.
            </p>
            <p className="underline text-[16px] font-medium text-[#0C66E4] mt-3">
              WATCH NOW
            </p>
          </div>

          <hr className="my-6 border-[#C1C7D0]" />

       
          <div>
            <h1 className="text-[16px] font-medium text-[#091E42]">
              THE SECRETS TO SUSTAINING A STRONG REMOTE TEAM [BLOG POST]
            </h1>
            <p className="text-[20px] font-normal text-[#091E42] mt-2">
              With the right attitude, tools, and leadership in place, creating a
              virtual workspace is not only possible, it’s enjoyable.
            </p>
            <p className="underline text-[16px] font-medium text-[#0C66E4] mt-3">
              READ MORE
            </p>
          </div>

        
          <div className="h-[131px] w-[1108px] bg-[#091E42]  text-white pl-[48px] pt-[24px] pr-[48px] flex justify-between mt-10 mb-10">
            <div>
              <p className="text-[16px] font-medium">NOW AVAILABLE</p>
              <h1 className="text-[20px] font-medium">A 14 Day Free Trial of Premium!</h1>
              <p className="text-[16px] font-normal">
                Get unlimited boards, Trello views, and limitless automation, plus a ton more.
              </p>
            </div>
            <div>
              <button className="bg-white text-[16px] h-[49px] w-[118px] text-black rounded-[5px] mt-[20px]">
                Try it today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
