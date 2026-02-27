import React from 'react'
import NavBar from '../../../NavBar';
import Burgerfiaward from '../assets/Burgerfiaward.png';
import Burgerficompany from '../assets/Burgerficompany.png';
import Burgerfiglobal from '../assets/Burgerfiglobal.png';
import Burgerfispeaker from '../assets/Burgerfispeaker.png';
import UniversalFooter from '../../../UniversalFooter';
import Burgerficoinbase from '../assets/Burgerficoinbase.svg';
import BurgerfiGrandHyatt from '../assets/BurgerfiGrandHyatt.svg';
import BurgerfijohnDeere from '../assets/BurgerfijohnDeere.svg';
import BurgerfiVisa from '../assets/BurgerfiVisa.svg';
import BurgerfiZoom from '../assets/BurgerfiZoom.png.webp';
import Burgerfiimage from '../assets/Burgerfiimage.png';
import BurgerFi from '../assets/BurgerFi.png';

const Burgerfi = () => {
 
  const statsData = [
  {
    icon:  Burgerficompany,
    label: "Industry",
    value: "Food Service & Hospitality",
  },
  {
    icon: Burgerfispeaker,
    label: "% OF COMPANY USING TRELLO",
    value: "100",
  },
  {
    icon: Burgerfiaward,
    label: "COMPANY PERSONALITY",
    value: "Highly Accountable, Nimble, Edgy",
  },
  {
    icon: Burgerfiglobal,
    label: "LOCATIONS WORLDWIDE",
    value: "85+",
  },
];

  return (
    


  <main className="font-sans">
    <NavBar />
      {/* Head */}
      <section>
        <div className="relative  h-64 w-full">
          <img className="absolute inset-0 h-full w-full object-cover" src={BurgerFi} alt="" />
          <div className="absolute inset-0 bg-amber-500 mix bg-blend-multiply opacity-80"></div>
          <div className="absolute z-10 text-center justify-center text-white p-4 inset-0 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-2 -tracking-normal">BurgerFi + Trello</h1>
            <p className="text-lg tracking-widest max-w-lg ">Growing An On-Brand Franchise Business—Fast</p>
          </div>
        </div>
      </section>
      {/* Grid */}
      <section>
          <div className=" py-16 px-6 md:px-20 mx-[12%]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
              {statsData.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-sm">
                    <img src={item.icon} className="w-3" alt={item.label} />
                  </div>
          
                  <div>
                    <p className="text-md font-semibold font-charlie uppercase text-black-500 mb-1">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Paras */}

      <section>

        <div className="mx-[25%] tracking-wider text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
          <p>What’s it like to be part of the fastest growing food 
            service segment in the world? “Busy,” says Steven Buckley, 
            Chief Operating Officer at <a href="">BurgerFi</a>. 
            The fast casual burger 
            franchise has opened nearly 100 restaurants across the US in 
            the past five years: “We are constantly challenged to be ‘best 
            in class’ - our goal is to be the segment leader and nothing less.
            ” Known for their signature “branded” hamburger buns and gourmet 
            ingredients, the Florida-based company has been deliberately crafting 
             buzzworthy dining experience via its corporate brand and local franchise 
             owners.
          </p>

          <section className="max-w-275 mx-auto my-7.5 px-5 py-1 flex items-start gap-7.5">
            <div className="text-[80px] text-[#19a7b8] leading-none font-bold select-none">
                "
            </div>
            <p className="text-[22px] leading-[1.6] font-sans text-[#1c2b4a] font-normal max-w-225 tracking-[0.9px]">
                  Our top company focal points are continuous innovation and the application 
                  of cutting-edge technology with our food products and service modes.
            </p>
          </section>

          <div>
            <p>Being a franchise business, BurgerFi’s goals and objectives need to 
              be communicated and engaged at all levels of the company, from senior 
              executives to store general managers. Moving information through departments 
              and franchise locations is no small feat when there are over 300 individuals 
              to connect cross-country. In order to achieve the growth results they were looking 
              for, BurgerFi needed to unite all their team members around the same priorities.</p>
          </div>

<br /> <br />

            <div>
              <h2 className='text-2xl font-medium '>How Trello Got On The Menu</h2>
              <p>When Steven came on board in early 2015, he recognized the need for a 
                communications and organization tool that would be adopted and used across 
                the entire organization. It had to be user-friendly and accessible regardless
                 of location, digital aptitude, or device. He had seen Trello in use while working
                  at another organization, and liked what he saw:</p>
            </div>

          <section className="max-w-275 mx-auto my-7.5 px-5 py-1 flex items-start gap-7.5">
            <div className="text-[80px] text-[#19a7b8] leading-none font-bold select-none">
                "
            </div>
            <p className="text-[23px] leading-[1.6] text-[#1c2b4a] font-normal max-w-225 tracking-[0.9px]">
                 We first became interested in Trello for the ability to create high-level 
                 goals and push them down to system-wide tactics for execution, with full 
                 accountability at all levels of the organization.
            </p>
          </section>


            <div>
              <p>Presenting it to BurgerFi as a vehicle for collaboration and project 
                management, Steven has seen Trello take on a life of its own in the company 
                as members started to explore its capabilities for cross-departmental initiatives,
                 like franchisee onboarding, marketing collateral management, and real estate development.</p>
            </div>
            
      </div>
    </section>
<br />
        

  <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Image */}
          <img
            src={Burgerfiimage}
            alt="no image found"
            className="w-full md:w-3/5 h-auto rounded-lg"
              />

        {/* Text */}
        <div className="md:w-2/5 border-t border-gray-300 pt-6 text-base md:text-xl leading-relaxed">
          BurgerFi’s mouthwatering marketing assets are ordered up on their Creative Requests board.
        </div>

     </div>

</div>

<br />
          <div className="mx-[25%] tracking-wider text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
            <p>In fact, three major things happened when BurgerFi united their organization around a central tool:</p>
          </div>
<br />
          <div className="mx-[25%] tracking-wider text-left font-sans text-lg font-normal leading-[1.55]">
            <ol className="list-decimal list-outside pl-5 space-y-2">
              <li>Their company culture saw a positive shift towards accountability and ownership of projects.</li>
              <li>Individual efforts began to better align with the company's top priorities.</li>
              <li>Communication across departments and with franchisees became simpler and easier to manage.</li>
            </ol>
          </div>
      
           <section className="max-w-275 mx-[25%] my-7.5 px-5 py-1 flex items-start gap-7.5">
            <div className="text-[80px] text-[#19a7b8] leading-none font-bold select-none">
                "
            </div>
            <p className="text-[22px] leading-[1.6] font-sans text-[#1c2b4a] font-normal max-w-225 tracking-[0.9px]">
                  Trello is an amazing tool for collaboration across departments.
            </p>
          </section>

          <div className="mx-[25%] tracking-wider text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
            <p>Over two years of use, Trello has become a powerful source 
              of information and control for individuals at all levels of 
              their organization, according to Steven. With over 150 boards 
              actively in use by over 300 team members, Steven says Trello has 
              taken on a life of its own within company culture. BurgerFi employees 
              and franchisees regularly use Trello in all kinds of ways:</p>
          </div>
<br />
          <div className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
            <ul className='list-disc  font-sans mx-10 text-[140]'>
              <li>Organize company structure</li>
              <li>Run meetings</li>
              <li>Make presentations</li>
              <li>Take agendas</li>
              <li>Attach documentation</li>
              <li>Manage social media</li>
              <li>Develop marketing campaigns</li>
              <li>Train new team members</li>
              <li>Track idea development</li>
              <li>Manage restaurant day-to-da</li>
              <li>Scout new business locations</li>
            </ul>
          </div>
<br />
          <div className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
            <p>And while everyone at BurgerFi has derived these same benefits
               from using Trello, each team has developed custom workflows to 
               prioritize the goals that are key to company growth.</p>
          </div>

<br /> <br />
          <div className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl font-medium '>Top BurgerFi Team Boards</h2>
              <p>When it comes to Trello boards, BurgerFi has encouraged employees 
                to develop custom workflows that suit their needs. To help foster a 
                sense of team spirit amidst this diversity, they have developed a few 
                standard BurgerFi-branded board backgrounds that employees can choose 
                from. The result is a wide-ranging collection of boards that speak to 
                the different needs that each team has in order to contribute to top-level
                organizational goals. Here’s some of BurgerFi’s top Trello workflows:</p>
            </div>
<br /> <br />

            <div className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl font-medium '>Company Directory</h2>
              <p>
                <b>The workflow:</b> BurgerFi’s company directory board is a top-level overview of each department and their corresponding Trello boards currently in use at the company.
              </p>
            </div>

            <br />
              
              <p className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
                <b>Use it for:</b> Entire Organization</p>
<br />
               <p className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
                 <b> Board build tips:</b> Lists organize each department by card, including team
                 members and links to boards in use by that team. Employees can reference 
                 this board at any time to see high level status of teams and their top 
                 projects.
                </p> 

<br />
              <div className="mx-[25%] tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl pt-4 font-medium '>Team Meeting Agenda</h2>
              <p className='pt-1'> <b>The workflow: </b> Steven uses a dedicated board as an agenda to run his weekly meetings. Lists and cards are organized by the various projects and top-level tasks they’re tracking across the company.</p>
            </div>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
             <b>Use it for:</b> Executive Teams</p>


             <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <b>Board build tips:</b> Due dates are key for keeping commitments on track. 
              Assigned team members are tagged in comments on project cards, and ownership 
              comes from routine check-ins thanks to recurring weekly meetings.</p>

              <div className="mx-[25%] pt-8 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl pt-4 font-medium '>Business Development</h2>
              <p className='pt-1'> <b>The workflow: </b> BurgerFi’s real estate team manages the development of new restaurant locations via Trello. Boards are used to organize important documents like assessments, plans, contracts, and leases as well as guide site committee meetings.</p>
            </div>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
             <b>Use it for:</b> Growth Teams</p>


             <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <b>Board build tips:</b> An integration with the real estate team’s construction software keeps processes 
              streamlined. Site development documents are organized in an order that complements their site committee meeting 
              process, so that they have all materials available for easy reference.</p>


              <div className="mx-[25%] pt-8 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl pt-4 font-medium '>Customer Feedback</h2>
              <p className='pt-1'> <b>The workflow: </b>Customer feedback about the BurgerFi experience is collected and forwarded to a 
              specific board for further analysis and action.</p>
            </div>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
             <b>Use it for:</b> Support Teams</p>


             <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <b>Board build tips:</b>  Email-to-board is a helpful tool for the feedback process: any customer 
              comments that come in via email are forwarded directly to the board. 
              The <a href="https://chromewebstore.google.com/detail/trello-card-counter/hepiaakjhimoagmpalbfoojemcnlnagn?hl=en"> CardCounter for Trello extension </a> 
              helps keep tabs on the number of submissions at each stage of response.</p>


              <div className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl pt-8 font-medium '>The Secret Sauce? Onboarding</h2>
              <p className='pt-4'>Today, there isn’t a team member at BurgerFi who isn’t using Trello for some 
                aspect of their work. While it has become a major vehicle for collaboration 
                and project management, Steven notes that implementation took the better part 
                of six months to get team workflows as optimized and efficient as they are now.</p>
            </div>

          <section className=" max-w-275 mx-[25%] my-7.5 px-5 py-1 flex items-start gap-7.5">
            <div className="text-[80px] text-[#19a7b8] leading-none font-bold select-none">
                "
            </div>
            <p className="text-[23px] leading-[1.6] text-[#1c2b4a] font-normal max-w-225 tracking-[0.9px]">
                 Implementing Trello was a success thanks to detailed training for all employees 
                 backed by senior-level commitment to the platform.
            </p>
            </section>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              In order to use Trello to its full potential, one of the most important 
              steps they’ve taken is the creation of custom on-boarding videos to help 
              train new users. In the video series, they cover the basics of using Trello
               as a tool, as well as how they use it specifically at BurgerFi.
            </p>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              They also provide onboarding resources and sample boards to new franchise owners, 
              so that they can literally run their entire operation with Trello, collaborating 
              on things like store logs, health inspections and food safety, customer complaints
               (and compliments!), corporate store visits and human resources—all with 
               their corporate contacts easily accessible through the comments section on cards or
                via the team page.
            </p>


          <section className=" max-w-275 mx-[25%] my-7.5 px-5 py-1 flex items-start gap-7.5">
            <div className="text-[80px] text-[#19a7b8] leading-none font-bold select-none">
                "
            </div>
            <p className="text-[23px] leading-[1.6] text-[#1c2b4a] font-normal max-w-225 tracking-[0.9px]">
                 We are committed to including Trello training and indoctrination as a component of BurgerFi onboarding 
                 and training systems for all corporate employees and franchisees.
            </p>
          </section>

          <div className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              <h2 className='text-2xl pt-8 font-medium '>Real Growth Is A Collective Mindset</h2>
              <p className='pt-4'>Steven says that if you walk around their headquarters, you’ll see Trello boards on screens everywhere. 
                “I don’t know how we would do what we do without Trello,” he adds.</p>
            </div>

            <p className="mx-[25%] pt-4 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
              That might sound like an exaggeration, but competitive numbers say otherwise. With the restaurant 
              industry as a whole expected to top $780 billion in revenue this year via a million plus food service 
              locations in the US, “doing” what BurgerFi does—growing a vibrant, forward-thinking (and delicious!) 
              company—requires the power that comes from uniting each and every team member around the same growth goals.</p>

              <p className="mx-[25%] pt-12 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
                Join over 2,000,000 teams worldwide who are using Trello to get more done.
              </p>


              <div className="mx-[28%] pt-18 pb-8 tracking-wider text-20 text-left font-sans text-[140] text-lg font-charlie font-normal leading-[1.95]">
                <div className='w-full max-w-xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-y-12 gap-x-6 md:gap-x-16 items-center '>
                  <img className=' col-span-2 w-full max-w-xl h-20 md:h-24  mx-auto' src={Burgerficoinbase} alt="no image found" />
                  <img className=' col-span-2 w-full max-w-xl h-20 md:h-24  mx-auto' src={BurgerfijohnDeere} alt="no image found" />
                  <img className=' col-span-2 w-full max-w-xl h-20 md:h-24  mx-auto' src={BurgerfiGrandHyatt} alt="no image found" />
                  <img className=' col-span-3 w-full md:w-1/2 h-20 md:h-24  mx-auto ' src={BurgerfiVisa} alt="no image found" />
                  <img className=' col-span-3 w-full md:w-1/2 h-20 md:h-24  mx-auto' src={BurgerfiZoom} alt="no image found" />
                </div>
              </div>
              
        <div className="pt-18 pb-8 tracking-wider font-sans text-lg font-normal leading-[1.95]">

  {/* Center Wrapper */}
  <div className="max-w-6xl mx-auto px-4">

    {/* Blue Card */}
    <div className="p-6 md:p-4 flex flex-col md:flex-row gap-6 md:justify-between bg-blue-950 rounded-lg">
      
      <div className="flex flex-col gap-2 text-white">
        <h3 className="font-bold">NOW AVAILABLE</h3>
        <h2 className="font-bold text-base md:text-xl">
          A 14 Day Free Trial of Premium!
        </h2>
        <p className="font-medium">
          Get unlimited boards, Trello views, and limitless automation, plus a ton more.
        </p>
      </div>

     <div className=' relative pt-10 pr-4'>
        <button className="mt-6 md:mt-0 justify-center align-middle items-center px-5 py-2 text-sm md:text-base bg-white text-blue-950 font-semibold rounded hover:bg-blue-100 transition self-center md:self-auto">
        Try it today
        </button>
     </div>

    </div>

    {/* Bottom Button */}
    <div className="flex justify-center md:justify-end mt-8">
      <button className="px-6 py-3 text-sm md:text-base font-medium bg-blue-500 text-white rounded hover:bg-blue-900 transition">
        Trello customer case studies
      </button>
    </div>

  </div>

</div>
 <UniversalFooter />
</main>

     
   
  )
}

export default Burgerfi