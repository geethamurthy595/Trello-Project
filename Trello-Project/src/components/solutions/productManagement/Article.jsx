import React from 'react'

function Article(){
    return <>
    <div className="bg-[#EAE6FF] pl-[100px] mb-5">
        <h1 className=" pt-[80px] pl-[320px] text-[36px] font-medium">
            Resources To Back Better Products
        </h1><br />
        <div className=" w-[1180px] h-[730px] p-[10px] ">
            <div>
            <h1 className="text-[16px] font-medium">HOW TO PLAN AND PRIORITIZE YOUR PRODUCT ROADMAP IN TRELLO [BLOG POST]</h1>
            <p className="text-[20px] font-normal">Get ahead of your competition by prioritizing and planning your product roadmap in Trello. Doing so will ensure your team builds the features that matter most, and ultimately enable you to achieve product excellence.</p><br />
            <p className="underline text-[16px] font-normal text-blue-800">READ MORE</p>
            </div><br />
            <hr /><br />
            <div>
            <h1 className="text-[16px] font-medium">TRELLO AGILE SERIES: RETROSPECTIVES AND ROADMAPS [WEBINAR]</h1>
            <p className="text-[20px] font-normal">How often is your team reflecting? Discover how your product management team can use the power of Trello to effectively manage retrospectives and product roadmaps in order to make better decisions, together.</p><br />
            <p className="underline text-[16px] font-normal text-blue-800">Watch Now</p>
            </div><br />
            <hr /><br />
            <div>
            <h1 className="text-[16px] font-medium">TRELLO AGILE SERIES: THE SPRINT BOARD [WEBINAR]</h1>
            <p className="text-[20px] font-normal">Discover how agile and scrum techniques can be applied to your workflows in Trello and more specifically, your team sprints. Full steam ahead!</p><br />
            <p className="underline text-[16px] font-normal text-blue-800">Watch Now</p>
            </div><br />
            <div className="h-[131px] w-[1108px] bg-[#091E42] rounded-[10px] text-white pl-[48px] pt-[24px] pr-[48px] flex justify-between">
                <div>
                <p className="text-[16px] font-medium">NOW AVAILABLE</p>
                <h1 className="text-[20px] font-medium">A 14 Day Free Trial of Premium!</h1>
                <p className="text-[16px] font-normal">Get unlimited boards, Trello views, and limitless automation, plus a ton more.</p>
                </div>
                <div>
                    <button className="bg-white text-[16px] h-[49px] w-[118px] text-black rounded-[5px] mt-[20px]">Try it today</button>
                </div>
            </div>
        </div>
        
    </div>
    
    </>
}
export default Article
