import React from 'react'
import unicef1 from '../../../../assets/unicef1.png';
import unicef2 from '../../../../assets/unicef2.jpg';
import unicef3 from '../../../../assets/unicef3.jpg';
import unicef4 from '../../../../assets/unicef4.png';
import unicefglobal from '../../../../assets/unicefglobal.png';
import unicefnews from '../../../../assets/unicefnews.png';
import unicefvideo from '../../../../assets/unicefvideo.png';
import coinbase from '../../../../assets/unicefcoinbase.png';
import johndeere from '../../../../assets/unicefjohndeere.png';
import grandhyatt from '../../../../assets/unicefGrand-Hyatt.png';
import visa from '../../../../assets/unicefVisa.png';
import zoom from '../../../../assets/unicefZoom.png';
import industry from '../../../../assets/UNICEF-Industry-icon.png';
import personality from '../../../../assets/UNICEF-Personality-icon.png';
import usersince from '../../../../assets/UNICEF-UsersSince-icon.png';
import using from '../../../../assets/UNICEF-Using-icon.png';
import NavBar from '../../../NavBar';
import Footer from '../../../Footer';
import UniversalFooter from '../../../UniversalFooter';
import CustomerStories from '../../CustomerStories';
import { Link } from 'react-router-dom';

const Unicef = () => {
  return (
    
   <>
   <NavBar />
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
  <img
    src={unicef1}
    alt="UNICEF Background"
    className="absolute inset-0 w-full h-full object-cover "
  />

  <div className="absolute inset-0 bg-pink-500/20 "></div>

  <div className="relative text-center text-white">
    <h1 className="text-4xl md:text-5xl font-bold">
      UNICEF + Trello
    </h1>
    <p className="mt-3 text-lg md:text-xl">
      Helping Others When They Need It Most
    </p>
  </div>

</section>
   <section className="bg-gray-100 py-16">
  <div className=" max-w-7xl mx-auto">
  

      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className='flex gap-6'>
              <img src={industry} alt="Industry Icon" className="w-12 h-12" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase">
                Industry
              </h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">
                Non-profit
              </p>
              </div>
            </div>

            <div className='flex gap-6'>
              <img src={personality} alt="Personality Icon" className="w-12 h-12" />
             <div>
               <h3 className="text-sm font-semibold text-gray-900 uppercase">
                Company Personality
              </h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">
                Trustworthy, Innovative
              </p>
             </div>
            </div>
          </div>

         
          <div className="space-y-8">
            <div className='flex gap-6'>
              <img src={using} alt="Using Icon" className="w-12 h-12" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase">
                % of company using Trello
              </h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">
              100% GIC, 70% Office of Innovation
              </p>
              </div>
            </div>
 
            <div className='flex gap-6'>
             <img src={usersince} alt="Users Since Icon" className="w-12 h-12" />
             <div>
               <h3 className="text-sm font-semibold text-gray-900 uppercase">
                Trello Users Since
              </h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">
                2014
              </p>
             </div>
            </div>
          </div>
        </div>

       
        <div className="mx-auto pt-16 ">
         <div className='max-w-3xl mx-auto'>
           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            During Hurricane Irma, over 22,000 people received life-saving
            information in under 30 hours thanks to UNICEF.
          </h2>

          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            Using a youth engagement and communication platform called U-Report, the UNICEF Global Innovation Centre enabled hundreds of communities to prepare ahead of the disastrous storms.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify ">
            Working around the clock from Bangkok to Copenhagen, Panama to Santiago, 3 of the 17 <a href='' className="text-blue-500 underline decoration-blue-500 ">globally-distributed team members</a> reached 14 affected countries by scaling and using U-Report in record time. More than half the people they assisted noted that this was the only timely information they received for how to prepare and keep their communities safe.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            Trello was a tool that allowed UNICEF’s innovation team rapid response to the emergency.  
          </p>
         </div>
          <div className="max-w-3xl mx-auto py-16 px-6">
  
   <div className="flex items-start gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-justify">
      The transparency and multiple perspectives in Trello helps us provide
      coherent support to a single country in which there may be multiple
      projects in different areas involving and supported by different people.
    </p>

  </div>

</div>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-900 leading-relaxed text-justify">
            The short, sharp, simple messages shared with those living in the path of the storm helped to keep them and their families safe. When asked, 89% said they found the information useful, 80% had shared the information with at least one person, with 57% sharing the messages with five or more people.
          </p>
          <div className='mt-20'></div>
          <div className='max-w-3xl mx-auto'>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
            For Every Child
          </h2>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            When you think of a 70-year-old organization, you might think of an institution that’s bureaucratic and staid, but <a href='#' className='text-blue-500 underline decoration-blue-500'> UNICEF</a>
             does not fit that mold. They’ve retained the kind of trust and solidity that comes with helping children in crisis for nearly a century, but they also have innovation in their DNA. Behind each development and humanitarian effort is a driving will to make a difference differently, to deliver services better each time, and to learn from the results.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
             Whether that means hand pumps for faster access to clean drinking water, or processes for accurately assessing severely malnourished children, or pushing the boundaries of emerging technologies to improve their process—the mission to build a better world for every child runs through every team at UNICEF.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            When it comes to pushing boundaries, the team behind UNICEF’s <a href='#' className='text-blue-500 underline decoration-blue-500'>Global Innovation Centre</a> (GIC) 
            is particularly innovative. They evaluate and implement ideas and technologies that can scale at a national or multinational level for improving the lives of children and their families more efficiently and accurately. They are also exploring what it means to be a truly distributed team enabled by technology.
          </p>
          </div>
         <div className='max-w-7xl mx-auto px-6 py-12'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
             {/* Image on the left */}
            <img src={unicef2} alt="UNICEF" className="w-full h-auto  shadow-md" />
            <p className=" text-xl text-gray-900 leading-relaxed text-justify">
              <hr className='bg-gray-400 h-0.5 w-full opacity-10' />
              Imagine meeting your colleagues for the first time in years! Here, Tanya (second from left) and 10 GIC members met up in Amman, 
              Jordan. Although rare, team offsites can be great for building relationships and esprit de corps.</p>
          </div>
         </div>
          <p className="text-lg max-w-3xl mx-auto md:text-xl text-gray-800  leading-relaxed text-justify">
            Tanya Accone, Senior Advisor on Innovation who leads UNICEF’s GIC team, 
            works with her 16 full- and part-time colleagues across 11 locations, enabling a 24-hour cycle of time zone support and asynchronous collaboration. Especially in the case of applying solutions to support emergency response, they need to conduct their work as adeptly as possible:
          </p>
         <div className="max-w-4xl mx-auto py-16 px-6">
  
  <div className="flex items-start gap-6">
    
    <span className="text-6xl md:text-7xl text-teal-500 leading-none">
      “
    </span>
    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-justify">
      We can’t waste time sending things over email and later trying to find those emails, figuring out where to pick up tasks in the relay of workdays when it comes to life-saving, life-impacting information for communities. Trello helps our conversations and execution be seamless and efficient.
    </p>

  </div>

</div>
          <div className='max-w-3xl mx-auto'>
            <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            In 2016, this small team of extreme remote workers actively worked with 89 of the 193 countries UNICEF supports, to launch new initiatives with governments and organizations, helping them to prepare for disruptive events and introducing new ways of working that accelerate health
            , protection, and education initiatives for children supported by UNICEF and its partners around the world.
          </p>
          <h2 className="text-2xl mt-10 md:text-3xl font-semibold text-gray-900">
             Pushing Remote Work To The Extreme
          </h2>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            The GIC team was initially co-located as a small team of seven working in Kampala, Uganda. They began using Trello as a means to have all their most important information stored in one place—a single source of truth that gave the whole team a level 
            of transparency unavailable in unwieldy email threads and documents on local computers.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            Trello helps our team organize our internal efforts so that we can be the most effective at supporting others whether 
            in times of crisis or during regular work to address social needs.
          </p>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify ">
            Driven by demand for support from countries, the team soon outgrew what could be effectively delivered via a single location model. The team became nomadic, with members traveling to support different country offices around the world. When they decided to distribute the team across the globe to enhance effectiveness and efficiency, that single source of truth became even more valuable. They pushed remote work to its most extreme limits with a 24-hour asynchronous work day, unearthing the need for a suite of tools to collaborate, organize,
             and share a single perspective on their efforts regardless of longitude or latitude.
          </p>
          </div>
         <div className="max-w-7xl mx-auto py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-50 items-start">
  
    <div className="order-2 md:order-1">
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-justify">
        <hr className='bg-gray-400 h-0.5 w-full opacity-10' />
        Global coordination calls with 40+ countries at a time happen regularly
        and are run from wherever the hosting team member finds themselves.
        Adding to the challenge? Finding cell service when there is limited connectivity!
      </p>
    </div>
    <div className="order-1 md:order-2">
      <img
        src={unicef3}
        alt="Remote work"
        className="max-w-3/4 max-h-[400px] md:max-h-[400px]  shadow-md"
      />
    </div>

  </div>
</div>
        <div className='max-w-3xl mx-auto'> 
            <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
            The goal was to build a new virtual workspace that enabled them to act as efficiently and connected across nine time zones as they were when they were co-located. And so, in 2016, as part of their mission to bring innovation to the way UNICEF works, they kicked off a systematic
             exploration of a range of different team collaboration tools to find the ideal “extreme remote work” tech stack.
          </p>
          <div className='mt-19'></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">Selecting Trello (Again)</h2>
          <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">Over a 12 month period, Tanya’s team assessed and tested 17 different collaboration apps across areas of project management,
             video, chat, and email. As part of the experiment, they ran workflows in four different project collaboration tools.</p>
             <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
              In the end, they settled on a suite of five tools to run their virtual office. Notwithstanding their previous use of Trello, 
              it again emerged as their top team collaboration choice for some important reasons:
             </p>
             <ul className='list-disc'>
              <li>
                <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
                 The simple board-list-card structure was easy to adopt by team members who didn’t have project management training;
                </p> 
                
              </li>
              <li>
                <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
                  Its flexible and transparent nature means everyone can access the information they need;
                  </p> 
              </li>
              <li>
                <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
                  New workflows can be invented as needed, and boards can be used for more than just tracking tasks;
                </p>
              </li>
               <li>
                <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">
                  The visual perspective, combined with features like labels and filtering, helps them look at information in different (and valuable) combinations, whether by country or globally by effort or solution.
                </p>
              </li>
             </ul>
             <div className="flex items-start mt-10 gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl  md:text-2xl text-gray-800 leading-relaxed text-justify">
      We are able to mold and shape Trello to the way our organization thinks and behaves, rather than trying to fit our team and our needs, which are changing everyday, into a set structure.
    </p>

  </div>
   <h2 className="text-2xl mt-10 md:text-3xl font-semibold text-gray-900">
           How Trello Helps Provide A Global Perspective
          </h2>

             <p className="mt-6 text-xl text-gray-900 leading-relaxed text-justify">For the UNICEF GIC team, Trello is their most important internal coordination tool—a collaborative foundation for the work they do.

          Working with any number of countries at any given time, they are able to keep track of every location, including all points of contact and every important document, on dedicated Trello boards.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              Working with any number of countries at any given time, they are able to keep track of every location, including all points of contact and every important document, on dedicated Trello boards.
             </p>
        </div>
             <img src={unicef4} alt=""  className='mt-10'/>
            <div className='max-w-3xl mx-auto'>
               <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              Often spearheading multiple initiatives at once within the same country, they then organize board names by country and by solution they’re helping to scale.
               During the Caribbean hurricane crises, they focused on a board for “Urgent Irma Response” all the while keeping their other local information in view.
             </p>
             <div className="flex  items-start mt-10 gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl  md:text-2xl text-gray-800 leading-relaxed text-justify">
     In the back of our minds, we also knew all the other conversations we were having with those 14 countries about implementing anything else that may have been relevant, and who the key contacts and focal points were in each country.
    </p>

  </div>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              At the same time, in other parts of the world, their team works on initiatives like <a href='#' className='text-blue-500 underline decoration-blue-500'>UPSHIFT</a>,
               an incubator program to build youth entrepreneurship and social innovation. This program supports the most marginalized youth, including those with disabilities and those who are displaced, in 8 different countries and regions to develop as entrepreneurs and solution builders in their communities. The core work to manage these 8 projects and the 20 countries who want to introduce UPSHIFT (which have both similar components and different ecosystems and stages of development at any one time) is done in Trello.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              But Trello is just part of the journey.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              The output from the high level of perspective that Trello provides is brought to life in the experiences that programs like UPSHIFT provide,
               like that of <a href='#' className='text-blue-500 underline decoration-blue-500'>Tuấn Nguyễn</a>, a visually impaired university student in Vietnam who is now supporting an entire community of professionals like himself with online job boards.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              Or <a href='#' className='text-blue-500 underline decoration-blue-500'>Rina Shabani</a>, a 16 year-old Kosovan teenager who is now leading the charge on gender inequality education among her peers. Social innovators 
              in Kosovo like Rina, have launched solutions that have helped more than 200,000 people.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              The GIC is also supporting UNICEF Indonesia and the Government of Indonesia to manage their largest-ever immunization campaign, 
              a push to vaccinate 70 million children against life-threatening Measles and Rubella viruses.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              Again, technology is the foundation for making this kind of change at scale: <a href='#' className='text-blue-500 underline decoration-blue-500'>RapidPro</a>, an open source communication tool, provides actionable insights in real time that the traditional paper-based tracking system cannot, and it reaches people on their own mobile phones; 
              in this case over SMS. Lessons learned from deployments in Indonesia and also in Zambia will be applied in countries interested in applications of RapidPro to support their immunization goals.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              With just two people building out the RapidPro process to support digital health in 15 countries, the collaborative foundation in Trello helps them keep that work transparent so team members can self-serve on details they need without having to stop and give updates constantly. This also allows the team to
               form part of—and amplify—a network of health experts who can drive this work across UNICEF.
             </p>
             <h2 className="mt-6 font-medium text-2xl text-gray-900 leading-relaxed ">
              Improving the Lives of Children: From Now To The Future
             </h2>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              At its core, the mission behind UNICEF’s Global Innovation Centre is to take an idea that helps thousands of people in one place and deploy it to help millions of 
              children and their families across the approximate 190 countries across the globe where UNICEF works.
             </p>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              In practice, that means Tanya’s team is committed to open source principles and digital innovation. In other words, UNICEF projects are built to be shared and used by others, not just via their organization. Trello shares this spirit of productive, evolving collaboration and that’s why it’s been the ideal vehicle for enabling this work.
             </p>
            <div className="flex items-start mt-10 gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl  md:text-2xl text-gray-800 leading-relaxed text-justify">
    We build everything so that it can be easily set up, used, adapted and replicated because we always keep in our minds who these tools help: children and their families in the most hard-to-reach places.
    </p>

  </div>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              As Tanya notes, from the highest level of humanitarian teamwork down to tools they use like Trello, we’re all part of a larger, shared ecosystem that is affected by the efforts we make to help others.
               And those efforts are most impactful when they evolve and grow with the needs of the communities they serve:
             </p>
             <div className="flex items-start mt-10 gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl  md:text-2xl text-gray-800 leading-relaxed text-justify">
   We aim to be enzymes as opposed to catalysts. Catalysts make chemical reactions happen faster. Enzymes increase the rate of change even faster than catalysts, they convert what they act on into something new, and enzymes themselves are changed and evolve as a result of that process.
    </p>

  </div>
             <p className="mt-6  text-xl text-gray-900 leading-relaxed text-justify">
              Overall this means that the GIC portfolio of projects, like the Trello boards they use to
               track them, will look very different in a year’s time. And that’s a very good thing.
             </p>
             <div className="flex items-start mt-10 gap-6">
    
    
    <span className="text-6xl md:text-7xl text-cyan-400 leading-none">
      “
    </span>

   
    <p className="text-xl  md:text-2xl text-gray-800 leading-relaxed text-justify">
   We’d like to look back and see that we’ve had a hand in scaling massive positive results with and for children. We’d like to take things that are ‘innovative’ and turn them into how work is done across the board. Overall, we hope to evolve with the next best way to introduce beneficial change in the world.
  </p>

            </div>
   </div>
 </div>
      </section>
      <section className="max-w-3xl mx-auto bg-white-100 py-16 px-6 md:px-20">
        <h1 className='text-2xl font-bold text-gray-900'>Read more</h1>
       <div className="max-w-3xl mx-auto bg-gradient-to-t from-[rgb(230,252,255)] to-grey-100 bg-no-repeat flex flex-col gap-10 mt-10 rounded-2xl p-6">
         <div className='flex flex-row gap-2 mt-5 p-4' > 
          <img src={unicefnews} className='w-16 h-16 ' alt="" />
          <h2>Blog Post <br /> <br />
            <a href='#' className='text-blue-500 underline decoration-blue-500 text-xl'>Extreme Remote Work: The Pros And Cons Of Teamwork Beyond Borders</a>
          </h2>
         </div>
         <div className='flex flex-row mt-4 gap-2 p-4'>
          <img src={unicefglobal}  className='w-16 h-16 ' alt="" />
          <h2>Web Page <br /><br />
            <a href='#' className='text-blue-500 underline decoration-blue-500 text-xl'>How To Embrace Remote Work: The Ultimate Guide</a>
          </h2>
         </div>
         <div className='flex flex-row  gap-2 p-4'>
          <img src={unicefvideo} className='w-16 h-16 '  alt="" />
          <h2>BVideo <br /><br />
            <a href='#' className= 'underline decoration-blue-500 text-blue-500 text-xl'>The GIC's behind-the-scenes remote teamwork during Hurricane Irma</a>
          </h2>
         </div>
       </div>
      </section>
       <div className="bg-gray-100  py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-center text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
        Join over 2,000,000 teams worldwide who are using Trello to get more done.
      </h2>

      {/* Logos Section */}
<div className="mt-12 flex flex-col items-center gap-10">

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-center justify-items-center w-full max-w-4xl">
    <img src={coinbase} alt="Coinbase" className="h-16 sm:h-18 md:h-20 object-contain" />
    <img src={johndeere} alt="John Deere" className="h-16 sm:h-18 md:h-20 object-contain" />
    <img src={grandhyatt} alt="Grand Hyatt" className="h-16 sm:h-18 md:h-20 object-contain" />
  </div>
  <div className="grid grid-cols-2 gap-10 items-center justify-items-center w-full max-w-2xl">
    <img src={visa} alt="Visa" className="h-16 sm:h-18 md:h-20 object-contain" />
    <img src={zoom} alt="Zoom" className="h-16 sm:h-18 md:h-20 object-contain" />
  </div>

</div>

      {/* Premium Banner */}
      <div className="mt-20 max-w-5xl  mx-auto bg-gradient-to-r from-[#091E42] to-[#403294] text-white rounded-xl px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-300">
            Now Available
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            A 14 Day Free Trial of Premium!
          </h3>

          <p className="mt-3 text-gray-300 text-justify">
            Get unlimited boards, Trello views, and limitless automation, plus a ton more.
          </p>
        </div>
     
        <Link to="/free-trial">
         <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition cursor-pointer ">
          Try it today
        </button>
        </Link>
        
      </div>
      <div className="max-w-6xl mx-auto flex justify-end mt-20 px-6">
      <Link to="/customers">
        <button className="text-white border px-5 py-4 bg-blue-600 border-gray-300  rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
          Trello Customer Case Studies
        </button>
      </Link>
        </div>
    </div>
    </div>
    </section>
    <UniversalFooter />
   </>

  )
}

export default Unicef