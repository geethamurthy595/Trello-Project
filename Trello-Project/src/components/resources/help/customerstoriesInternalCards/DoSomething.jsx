import React from 'react'
import img1 from '../../../../assets/dosomethingimg1.webp';
import img2 from '../../../../assets/dosomethingimg2.png';
import img3 from '../../../../assets/dosomethingimg3.png';
import img4 from '../../../../assets/dosomethingimg4.svg';
import img5 from '../../../../assets/dosomethingimg5.svg';
import img6 from '../../../../assets/dosomethingimg6.png';
import img7 from '../../../../assets/dosomethingimg7.png';
import img8 from '../../../../assets/dosomethingimg8.png';
import img9 from '../../../../assets/dosomethingimg9.png';
import img10 from '../../../../assets/dosomethingimg10.png';
import img11 from '../../../../assets/dosomethingimg11.png';
import img12 from '../../../../assets/dosomethingimg12.png';
import img13 from '../../../../assets/dosomethingimg13.png';
import img14 from '../../../../assets/dosomethingimg14.png';
import NavBar from '../../../NavBar';
import UniversalFooter from '../../../UniversalFooter';
const DoSomething = () => {
  let grid=[{image:img2,
            name:"INDUSTRY",
            description:"Non-profit",
            id:1
            },
            {image:img3,
            name:"% of company using Trello",
            description:"100%",
            id:2
            },
            {image:img4,
            name:"Company Personality",
            description:"Relatable, Empathetic, Positive, Inspiring",
            id:3
            },
            {image:img5,
            name:"Members",
            description:"5.5 Millon",
            id:4
            },
]
let paraGroup1=[
{
  id:3,
  para:"Their process for getting people engaged in these all-important social acts “both on and offline,” centers around DoSomething.org and the experience that users have engaging with the 290+ open campaigns (“campaigns” being the different available initiatives to volunteer with) through their website."
},
{
  id:4,
  para:"Campaigns can take as little as five minutes of a volunteer’s time online. However, campaigns can also require months’ long commitments in local communities."
},
{
  id:5,
  para:"Seeing as these volunteers (dubbed “members”) are giving their time and energy to great causes, the goal is to make it as frictionless as possible for them to participate. And Hannah Ghidey, User Insights Manager, is focused on helping members navigate and engage in campaigns as smoothly as possible:"
}]

let paraGroup2=[{
  id:1,
  para:"Two tools in particular—Trello and Zendesk—have allowed them to handle over 1,100 tickets a month with relatively little additional investment in human resources, meaning more funds can go to campaigns, and subsequently help more people."
},
{
 id:2,
 para:"It’s not just the support and campaigns teams who are taking advantage of the collaborative features in Trello. Marketing, product, and engineering teams all use it to keep track of projects and planning. Certain teams have also started running their work in an agile format, and find Trello works well for organizing tasks as cards into their backlog lists, sprint queue, and more." 
},
{
  id:3,
  para:"And thanks to the integrations between Trello and Zendesk, member-facing teams and those working behind the scenes can communicate about and improve the DoSomething.org user experience in a responsive, nearly real-time, way:"
}]
let paraGroup3=[{
  id:1,
  para:"In another scenario, anytime a user logs a request via Zendesk for assistance because they are having trouble navigating the campaign process, that ticket is tagged as “confusion,” with helps team members “view” groups of related tickets. Zendesk Views are essentially tickets that are grouped by a set of parameters, in this case, the custom “confusion” tag. Using the Power-Up, they attach this View to a card on the product team’s board."
},
{
  id:2,
  para:"The product team can then add the card to their weekly agenda list to review and discuss the user experience issues at hand. With all related tickets being grouped in the View, they can get perspective on just how many users are being affected. If deemed a priority, the card moves over to their development backlog board and into their sprint workflow. Hannah says they've seen a lot of payoff by setting up this workflow:"
}]
  return (<>
  <NavBar/>
    <div className='flex justify-center flex-col items-center gap-10'>
      <div className="w-full h-60 bg-cover bg-center flex justify-center flex-col items-center gap-5 px-4 text-center" style={{ backgroundImage: `url(${img1})` }}>
        <h1 className='text-white  font-bold text-3xl md:text-5xl'>DoSomething.org + Trello</h1>
        <h3 className='text-white  font-bold text-lg md:text-2xl'>Making Social Change Happen At Scale</h3>
      </div>
      <div className='h-fit items-center-safe pt-10 grid w-full max-w-4xl px-4 grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20'>
          {
            grid.map(({image,name,description,id})=>{
              return <div key={id} className=' h-fit flex justify-items-start gap-3 md:gap-5 '>
                        <img className='w-10 h-10 md:w-12 md:h-12' src={image} alt='no image found'/>
                        <h3 className='font-semibold text-base md:text-xl'>{name}<h2 className='font-bold text-lg md:text-2xl'>{description}</h2></h3>
                    </div>
            })
          }
      </div>
      <p className='text-base md:text-xl w-full md:w-1/2 max-w-3xl px-4'>The concept of “support” inevitably brings up the image of people helping people. This is exactly what the team at DoSomething.org is focused on.</p>
      <p className='text-base md:text-xl w-full md:w-1/2 max-w-3xl px-4'>A global organization focused on social change by activating young people between the ages of 13 and 25 to engage in positive, healthy activities, <a className='text-blue-700 underline' href="">DoSomething.org</a> is not only making a difference with youth—they’re also looking towards making the act of helping easier to do.</p>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-5'>
            {
              paraGroup1.map(({id,para})=>{
                return <p key={id} className='text-base md:text-xl'>{para}</p>
              })
            }
      </div>
      <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  Young people are at the forefront of everything we do. Our goal is to make social change as accessible and engaging to them as possible.
</blockquote>
      </div>
      <p className=' w-full md:w-1/2 max-w-3xl px-4 text-base md:text-xl'>Because social change has no time for technical frustration, Hannah and her team have turned to collaboration tools and automation to speed up the organization's support of its users and volunteers.</p>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-2'>
        <h1 className=' text-lg md:text-2xl font-bold'>Putting Tools To Work For Good</h1>
        <p className='text-base md:text-xl'>Member-facing teams at DoSomething.org work on campaigns based on their category, be it environmental, education, health, poverty, or otherwise. Because they want to maintain personal interactions with members, the small Member Support team at DoSomething.org takes advantage of automation to reduce time spent on process, tagging, and tracking user trends that might be raising user experience issues.</p>
      </div>
        <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  Our mantra is Fight For The User, so collecting feedback from young people is a critical part of the decision-making process for all teams
</blockquote>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-5'>
            {
              paraGroup2.map(({id,para})=>{
                return <p key={id} className='text-base md:text-xl'>{para}</p>
              })
            }
      </div>
      <ul className='w-full md:w-1/2 max-w-3xl px-4 text-base md:text-xl list-disc'>
        <li>The <a className='text-blue-700 underline' href="">Zendesk Power-Up for Trello</a> allows Trello users to attach and access Zendesk tickets right from Trello cards.</li>
        <li>The <a className='text-blue-700 underline' href="">Trello App for Zendesk</a> allows Zendesk users to send tickets to Trello as cards (or added to existing cards) with a Trello widget in the Zendesk dashboard.</li>
      </ul>
      <p className='w-full md:w-1/2 max-w-3xl px-4 text-base md:text-xl'>The two-way workflow means that teams can talk about user experience issues without switching apps or passing ticket numbers back and forth, says Hannah:</p>
              <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
  relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  Trello and Zendesk have been essential to how we identify issues or potential areas of opportunity. By automating the process for tracking help requests, our support team is able to provide better service by focusing on the individual experience when responding to tickets, then evaluating the backlog of trello cards with stakeholders to discuss themes and improvements to the user experience.
</blockquote>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-2'>
        <h1 className=' text-lg md:text-2xl font-bold'>Using Trello And Zendesk Together</h1>
        <p className='text-base md:text-xl'>FRUGs are one example of how integrations can save time and teamwork. Feature Requests, Updates, and buG tickets from Zendesk are attached to Trello cards on the FRUGs board, with a link to the issue at hand. When moved to the “Inbox” list, the Slack Power-Up automatically sends a message to the engineering team that a new issue has been raised. They can then head over to the card and have all the information they need to begin working on it.</p>
      </div>
      <img src={img6} alt="no image found" className='w-full h-auto max-w-3xl px-4 md:h-80 md:w-xs' />
           <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
   relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  In the past, themes in help requests were manually tracked by support agents so issues were often siloed or lost in the support inbox, which meant we were missing out on key insights into our users' needs. With the Zendesk/Trello integration, we’ve been able to take a more proactive and cross-functional approach in addressing user needs.
</blockquote>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-5'>
            {
              paraGroup3.map(({id,para})=>{
                return <p key={id} className='text-base md:text-xl'>{para}</p>
              })
            }
      </div>
           <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
   relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  The key was paying attention to themes across tickets. By automating and organizing Zendesk Views in Trello, stakeholders have been able to define the scope of a problem and discuss potential solutions to include in the product roadmap just by referencing the Trello cards.
</blockquote>
      </div>
      <div className='w-full max-w-6xl px-4 flex flex-col md:flex-row gap-5 md:gap-10'>
        <img src={img7} alt="no image found" className='w-full md:w-3/5 h-auto md:h-1/2' />
        <div className='border-t border-gray-300 pt-4 text-base md:text-xl'>DoSomething.org Shared Product + Support Trello Board</div>
      </div>
      <p className='w-full md:w-1/2 max-w-3xl px-4 text-base md:text-xl'>What did these workflows look like prior to automated awesomeness? Tickets tagged in Zendesk would be manually parsed and collected on a monthly basis, and given to the product team as a write-up, pointing out top questions and recommendations. By integrating the two programs, fixes are much faster. Hannah and her team can see and address a UX issue while the campaign is happening, rather than waiting for a monthly review period.</p>
         <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
  relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  The Zendesk/Trello board is what we now call the “frustrations to solutions” board.
</blockquote>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-2'>
        <h1 className=' text-lg md:text-2xl font-bold'>From Good To Great With User Research</h1>
        <p className='text-base md:text-xl'>Support doesn’t end with responses to urgent requests. Ongoing user research and usability testing led by Hannah and her team helps DoSomething.org iterate and improve on their user experience overall.</p>
      </div>
         <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
      relative
pl-10 md:pl-20
text-base md:text-[27px]
text-left
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif

">
  Using Trello to track high-level themes in support and user research helps us bridge the gap between our two greatest sources of user feedback. 
</blockquote>
      </div>
      <p className='text-base md:text-xl w-full md:w-1/2 max-w-3xl px-4'> The first step for every round of research is to create a Trello board (or two). The first board manages interview requests for having users test out site features. Accessible for their whole team, the board also houses all needed materials for setting up the interviews, including legal waivers and interview scripts. Each participant has their own card, which lists out their required information, and cards move across lists as the interviewees are contacted and scheduled.</p>
      
      <div className='w-full max-w-6xl px-4 flex flex-col md:flex-row gap-5 md:gap-10'>
        <div className='border-t border-gray-300 pt-4 text-base md:text-xl'>Hannah's team updates the interview board name to "DONE" when the interview batch is complete..</div>
        <img src={img8} alt="no image found" className='w-full md:w-3/5 h-auto md:h-1/2' />
      </div>
      <p className='text-base md:text-xl w-full md:w-1/2 max-w-3xl px-4'>A second board houses the research and results that can be put into action through feature improvements. This process means that everything is in one place, and both the support and product teams can get a high-level overview of the research progress and takeaways.</p>
         
         <div className='h-full w-full md:w-1/2 max-w-4xl px-4 flex gap-5 md:gap-10'>
            <blockquote className="
     relative
pl-10 md:pl-20
text-base md:text-[27px]
leading-relaxed
text-[#0b2545]
before:content-['“']
before:absolute
before:left-0
before:top-0
before:h-[156px]
before:w-[36px]
before:flex
before:items-center
before:justify-center
before:text-[#1D7AA2]
before:text-[80px] md:before:text-[150px]
before:font-serif
">
  Trello is the foundation for every round of user research we conduct and makes insights accessible to everyone in the organization.
</blockquote>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 flex flex-col gap-2'>
        <h1 className=' text-lg md:text-2xl font-bold'>
The Agile Approach To Taking Action</h1>
        <p className='text-base md:text-xl'>At DoSomething.org, leading a “global movement for good” isn’t just something they look to do via the social change campaigns they feature. It is also within the overall experience they provide to their members through their website, volunteer process, and by prioritizing user research and support.</p>
        <p className='text-base md:text-xl'>By keeping their cross-team communication lines open via simple processes and integrations between their key tools, even with a lean team, DoSomething.org is proving that no effort is too small to make a difference.</p>
      </div>
      <div className='w-full md:w-1/2 max-w-3xl px-4 rounded-xl p-15 bg-blue-50 min-h-[200px] md:h-50'>
            <h1 className='text-base md:text-xl font-bold'>Read more</h1>
            <div className='flex gap-2'>
              <img src={img9} alt="no image found" className='h-12 w-12 md:h-15 md:w-15' />
              <div>
                <h1 className='font-semibold'>BLOG POST</h1>
                <p className='underline text-base md:text-xl font-medium text-blue-800 hover:cursor-pointer '>Stop Platform Back And Forth With Trello’s Zendesk Integration</p>
              </div>
            </div>
      </div>
      <p className='text-base md:text-xl w-full max-w-2xl px-4'>Join over 2,000,000 teams worldwide who are using Trello to get more done.</p>
      <div className='w-full max-w-xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-y-12 gap-x-6 md:gap-x-16 items-center'>
        <img className='w-full max-w-xl h-20 md:h-24 col-span-2 mx-auto' src={img10} alt="no image found" />
        <img className='w-full max-w-xl h-20 md:h-24 col-span-2 mx-auto' src={img11} alt="no image found" />
        <img className='w-full max-w-xl h-20 md:h-24 col-span-2 mx-auto' src={img12} alt="no image found" />
        <img className='w-full md:w-1/2 h-20 md:h-24 col-span-3 mx-auto ' src={img13} alt="no image found" />
        <img className='w-full md:w-1/2 h-20 md:h-24 col-span-3 mx-auto' src={img14} alt="no image found" />
      </div>
         <div className='border w-full max-w-6xl px-4 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:justify-between bg-blue-950 rounded'>
          <div className='flex flex-col gap-1 md:gap-2 text-white'>
            <h3 className='font-bold'>NOW AVAILABLE</h3>
            <h2 className='font-bold text-base md:text-xl'>A 14 Day Free Trial of Premium!</h2>
            <p className='font-medium'>Get unlimited boards, Trello views, and limitless automation, plus a ton more.</p>
          </div>
          <button className='border h-auto mt-6 mb-6 w-full md:w-30 p-3 bg-white text-blue-950 font-semibold rounded hover:cursor-pointer hover:bg-blue-100'>Try it today</button>
         </div>
         <div className='w-full max-w-5xl px-4 p-4 flex justify-center md:justify-end mb-10' >
          <button className='px-4 py-3 md:p-4 text-sm md:text-base font-medium bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-blue-900'>Trello customer case studies</button>
         </div>
    </div>
    <UniversalFooter/>
    </>
    
  )
}

export default DoSomething