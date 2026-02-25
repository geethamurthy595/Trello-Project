import NavBar from '../../../NavBar'
import bg from "../../../../assets/mccorvey_bg.jpg";
import unicef from '../../../../assets/unicef1.png';
import personality from '../../../../assets/Personality-icon1.png';
import industry from '../../../../assets/Industry-icon1.png';
import favorite from '../../../../assets/FavouriteFeature1.png';
import john from '../../../../assets/john_Deere.png';
import visa from '../../../../assets/Visa_1.png';
import grand from '../../../../assets/Grand-Hyatt_1.png';
import coinbase from '../../../../assets/coinbase_1.png';
import zoom from '../../../../assets/Zoom_1.png';
import UniversalFooter from '../../../UniversalFooter';
const McCorvey = () => {
  return (
    <div>
      <NavBar/>

    
      <div
        className="w-full h-[250px] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          McCorvey + Trello
        </h1>
        <p className="text-lg md:text-xl text-white font-bold">
          Making History With A Paperless Process
        </p>
      </div>

      <div className="bg-gray-50 py-16 px-6 md:px-20">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="space-y-12">

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
                <img src={industry} className="w-10" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase text-gray-500 mb-1">
                  Industry
                </p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Manufacturing
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
                <img src={personality} className="w-10" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase text-gray-500 mb-1">
                  Company Personality
                </p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Quality, Integrity, Experience
                </h3>
              </div>
            </div>

          </div>

          <div className="space-y-12">

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
                <img src={unicef} className="w-10" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase text-gray-500 mb-1">
                  % of Company Using Trello
                </p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  80
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full ">
                <img src={favorite} className="w-10" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase text-gray-500 mb-1">
                  Favorite Trello Feature
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 m-5">
                  API Access
                </h3>
              </div>
            </div>

          </div>

        </div>

        <div className="text-2xl font-small leading-relaxed m-5 mx-auto max-w-[750px]">
          <p className="text-2xl font-small leading-relaxed m-5">
            Established in 1925,{" "}
            <span className="text-blue-600 underline cursor-pointer font-bold">
              McCorvey Sheet Metal Works
            </span>{" "}
            has a rich history of craftsmanship and innovation. The HVAC sheet
            metal detailer, fabricator, and installer has seen incredible growth
            over its 92-year history, building a local mom-and-pop shop into a
            multi-state corporation  that now numbers fourth-generation McCorvey family members and hundreds of dedicated employees. With facilities in Houston, Orlando, and Dallas, the manufacturing company is a standout example of how to scale a steady, successful business.
          </p>

      

          <p className="text-2xl font-small leading-relaxed m-5">
            McCorvey Sheet Metal also has an established history of paper—
            paper filing systems, that is. Until recent years, the company ran
            on an analog administrative system that consisted of handwritten
            tickets  that were used internally as well as sent to partnering businesses. Tech coordinator Chris Mondeau quickly observed that this was one tradition of the family-run business that wasn’t going to successfully scale with the rest of the company:
          </p>
        </div>

      </div>


<div className="bg-gray-50 py-20 px-6 md:px-20">
  
  <div className="max-w-4xl mx-auto flex gap-6">

    <div className="text-teal-500 text-7xl font-bold leading-none">
     "
    </div>

    <div className="space-y-4">

      <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
        Paper was getting lost, and people couldn’t keep track of where items
        were in the fabrication or office process.
      </p>

      <p className="text-2xl font-small leading-relaxed">
        The goal was to move operations to a paperless system that was easy
        to learn, and more importantly, easy to maintain by everyone involved.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 pt-6">
    Constructing A Central Hub
  </h2>

  <p className="text-2xl font-small leading-relaxed">
    Chris began looking for a scheduling program that could visualize the
    number of tasks at hand at each stage of the fabrication process. The
    biggest need, however, was a software system that was easy for people to
    interact with at any point of the process and at any level of technical
    ability.He wanted a program that would be a digital hub, bringing together files
    and processes that McCorvey employees were already working on in programs
    like Word and Dropbox. On the more technical side, having an open API for
    integrations would help future-proof the adoption of a central
    organization tool as more team-specific digital tools are introduced in
    the company’s workflow.
  </p>

  <p className="text-2xl font-small leading-relaxed">
    During the research phase, a variety of team-oriented tools were put to
    the test, including Trello, Mavenlink, Wrike, and CRM software. Trello
    became the top “paper replacer” for a few reasons:
  </p>

<div className="max-w-3xl mx-auto mt-8 leading-relaxed text-lg space-y-6">

  <ol className="list-decimal pl-6 space-y-6">

    <li className="text-2xl font-small leading-relaxed">
      The straightforward, collaborative features were quickly adopted by
      users in the company.
    </li>

    <li className="text-2xl font-small leading-relaxed">
      Tracking tasks across the production process on one board view was simple and effective.
    </li>

    <li className="text-2xl font-small leading-relaxed">
      The visual nature of the workflows felt intuitive for employees.
    </li>

  </ol>

</div>

<div className="max-w-3xl mx-auto mt-12 space-y-6 leading-relaxed text-lg">

  <h2 className="text-2xl font-semibold text-gray-800">
    First, A Trello Field Test
  </h2>

  <p className="text-2xl font-small leading-relaxed">
    Trello launched in a test phase with 15 users in the fabrication
    process. Their team saw an immediate boost in quality assurance:
    Workers in the field could now see the status of projects in the shop
    in real-time and verify all required information was provided. The
    added bonus? They had no more need to constantly phone or email the
    shop for check-ins and small questions.
  </p>

</div>


<div className="bg-gray-50 py-16 mt-12">
  <div className="max-w-4xl mx-auto flex gap-6 px-6">

    <div className="text-teal-500 text-7xl font-bold leading-none">
      “
    </div>

    <p className="text-2xl font-medium text-gray-800 leading-relaxed">
      Trello is good for our teams because it’s so organic. If you don’t
      like how the process is working on the board, you can change it.
      Trello fits right in with exactly what we are doing on a day-to-day
      basis.
    </p>

    

  </div>
  <p className="text-2xl font-small leading-relaxed m-4">More teams within the company began to see the impact of bringing teams into a collaborative digital hub:</p>
  <div>
    <ul className='list-inside list-disc'>
    <li className="text-2xl font-small leading-relaxed">When Vice-President Charlie McCorvey saw the impact Trello was having in the shop process, he brought the estimation team on a digital workflow. By visually tracking jobs in the pipeline, they saw a reduction in the number of jobs left on the table. They could also see when jobs were taking longer than expected, and who needed help in getting their job to completion.</li>
    <li className="text-2xl font-small leading-relaxed">The fabrication team started building a historical log of issues that arose in the manufacturing process. Fabrication reports went mostly paperless after that.</li>
  </ul>
 
  </div>
  <p className="text-2xl font-small leading-relaxed mb-3">Overall, employees like being able to find and access any information they need thanks to the transparent nature of Trello boards. If there is an issue with detailing for example, comments can be left for the detailer on the task’s card, and other work can continue in the meantime.</p>

   
   <h3 className="text-xl font-bold leading-relaxed">Building Out Company Trello Culture</h3>
   
<div className="max-w-4xl mx-auto mt-10 px-6  leading-relaxed">

  <p className="text-2xl font-small leading-relaxed mb-3">
    One of the ways Chris has incorporated Trello into daily company use is
    having it installed on devices in kiosk mode located around each shop and
    office, so employees can log in and use Trello anywhere, at any time. The
    mobile apps also allow team members in the field to get the same access on
    the go.
  </p>


  <div className="flex items-start gap-4 mb-2">
    <div className="text-5xl text-cyan-500 font-bold leading-none">“</div>
    <p className="text-2xl font-medium text-gray-900">
      Trello has caught on fire with the guys in the shop and office.
    </p>
  </div>

  <div className="space-y-6 text-lg">
    <p className='text-2xl font-small leading-relaxed'>
      Beyond basic Trello training (which usually takes a half day), Chris pairs
      up with different McCorvey teams for a week, helping them build boards
      based off their processes. Starting from a basic Kanban-inspired set of
      “To Do,” “Doing,” and “Done” lists, he then monitors and helps the team
      evolve the workflow using more customized list layouts, labels, and  <span className="text-blue-600 underline cursor-pointer font-bold"> Power-Ups.</span>
     
    </p>

    <p className='text-2xl font-small leading-relaxed'>
      One of his top tips is to take advantage of the <span className="text-blue-600 underline cursor-pointer font-bold">  Trello Templates </span>directory
      to get ideas and sample boards that can be customized instead of starting
      from scratch. Regular check-ins with teams are also important. Chris makes
      sure he is available to simplify workflows on an ongoing basis if boards
      and lists get too long or unwieldy.
    </p>

  
<div className="max-w-4xl mx-auto mt-16 px-6 text-gray-700 leading-relaxed">

  <h2 className="text-3xl font-semibold text-gray-900 mb-4">
    Top McCorvey Team Boards
  </h2>

  <p className='text-2xl font-small leading-relaxed mb-3'>
    Here are a couple of McCorvey Sheet Metal’s top Trello workflows:
  </p>

  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
    Team Brainstorming
  </h3>

  <p className='text-2xl font-small leading-relaxed mb-3'>
    <span className="italic font-medium">The workflow:</span> To help foster
    creativity in the company, a central brainstorming board encourages
    employees to create cards with ideas for improving or trying new processes.
    The board is reviewed collectively every couple of weeks, when top ideas
    are selected and put into action.
  </p>

  <p className='text-2xl font-small leading-relaxed mb-3'>
    <span className="italic font-medium">Use it for:</span> Entire Organization
  </p>

  <p className='text-2xl font-small leading-relaxed mb-3'>
    <span className="italic font-medium">Board build tips:</span> Use the Voting
    Power-Up to crowdsource feedback on each idea.
  </p>

  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
    Multi-Location Workload Distribution
  </h3>

  <p className='text-2xl font-small leading-relaxed mb-4'>
    <span className="italic font-medium">The workflow:</span> A board shared
    between the Houston and Florida facilities that visualizes the fabrication
    workflow. Shop managers use the board to distribute team workloads between
    the two locations, depending on backlog.
  </p>

  <p className='text-2xl font-small leading-relaxed'>
    <span className="italic font-medium ">Use it for:</span> Team Managers
  </p>

</div>

<div className="max-w-4xl mx-auto mt-8 px-6 text-gray-700 leading-relaxed ">


  <p className='text-2xl font-small leading-relaxed mb-4'>
    <span className="italic font-medium">Board build tips:</span> Use labels to
    visually indicate which tasks are going to which locations. Email-to-board
    makes it easy for estimators to forward emailed customer requests to the
    board, and get jobs into the pipeline.
  </p>


  <h2 className="text-3xl font-semibold text-gray-900 mb-5">
    Aiming Higher
  </h2>

  <p className='text-2xl font-small leading-relaxed mb-8'>
    McCorvey has certainly benefited internally from the collaboration and
    transparency that Trello has brought to their day-to-day operations, but
    they have also become a leader in their industry thanks to their digital
    transformation.
  </p>

  <p className='text-2xl font-small leading-relaxed mb-10'>
    During a bid for a large medical facility project, Trello helped them stand
    out among the 14 companies competing for the project. As part of their
    presentation, they set up a communal board where both parties could
    communicate and track the fabrication process in real-time. The open
    collaboration that they were willing to bring to the table impressed the
    client. As Chris notes, “Transparency is always a big selling factor. Using
    Trello sends the message that we want to make sure the job is done right.”
  </p>

  <h2 className="text-3xl font-semibold text-gray-900 mb-4">
    A New Era Of Paperless Productivity
  </h2>

  <p className='text-2xl font-small leading-relaxed'>
    When Chris Mondeau set out to find a program that would help organize
    manufacturing processes, he may not have known the true impact that it would
    have on the company as a whole. As it turned out, Trello has been  catalyst to push their teams to go truly paperless:
  </p>
   
</div>


<div className="flex items-start gap-4 mb-8">
    <div className="text-5xl text-cyan-500 font-bold leading-none">“</div>
    <p className="text-2xl font-medium text-gray-800">
    McCorvey was a paper company for 60 to 70 years and went completely digital overnight thanks to Trello. It made a huge impact and really was an unintended result—and we absolutely love it.
    </p>
  </div>


<div className=" py-20">
  
  <div className="max-w-6xl mx-auto text-center px-6">
    <p className='text-2xl font-small leading-relaxed mb-10'>The original goals that Chris had bringing Trello into the company—increased collaboration, transparency, and communication across teams—have all been reached with tangible results too, helping their offices, shops, and jobsites across Florida and Texas stay connected. For McCorvey Sheet Metal Works, now having a digital hub that scales with their organization is a solid step forward for the next 100 years of successful company growth.</p>
    <p className='text-2xl font-small leading-relaxed mb-10'>
      Join over 2,000,000 teams worldwide who are using Trello to get more done.
    </p>

    
    <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
      <img src={coinbase} alt="Coinbase" className="h-20 object-contain opacity-80 w-30 hover:opacity-100 transition" />
      <img src={john} alt="John Deere" className="h-20 object-contain opacity-80 w-30 hover:opacity-100 transition" />
      <img src={grand} alt="Grand Hyatt" className="h-20 object-contain opacity-80 w-30 hover:opacity-100 transition" />
    </div>

   
    <div className="flex flex-wrap items-center justify-center gap-24">
      <img src={visa} alt="Visa" className="h-14 object-contain opacity-80 w-30 hover:opacity-100 transition" />
      <img src={zoom} alt="Zoom" className="h-12 object-contain opacity-80 w-30 hover:opacity-100 transition" />
    </div>

  </div>
  

</div>

  </div>
     
</div>
</div>


 
    </div>

  </div>
  <div className=" py-24 px-1">
  <div className="max-w-[1700px] mx-auto px-6">
  <div className="bg-gradient-to-r from-[#172B4D] to-[#5243AA] rounded-xl px-16 py-12 flex items-center justify-between">

    <div className="text-white max-w-2xl">
      <p className="uppercase text-sm font-semibold tracking-wide opacity-80">
        Now Available
      </p>
      <h2 className="text-3xl  font-bold mt-3">
        A 14 Day Free Trial of Premium!
      </h2>
      <p className="mt-4 text-lg opacity-90">
        Get unlimited boards, Trello views, and limitless automation, plus a ton more.
      </p>
    </div>

    <button className="bg-white text-gray-600 px-4 py-3 rounded-md font-small shadow-sm hover:bg-gray-100 transition whitespace-nowrap shrink-0">
  Try it today
</button>
  </div>
</div>
</div>

<div className="flex justify-end mt-16">
  <button className="bg-blue-600 text-white px-10 py-3 rounded-md font-medium hover:bg-blue-700 transition">
    Trello customer case studies
  </button>
</div>
</div>
<UniversalFooter/>
    </div>
  )
}

export default McCorvey