 import crm1 from "../../../../assets/crm1.webp";
 import crm2 from "../../../../assets/crm2.png";
 import crm3 from "../../../../assets/crm3.webp";
 import crm4 from "../../../../assets/crm4.webp";
 import crm5 from "../../../../assets/crm5.webp";
 import crm11 from "../../../../assets/crm11.png";
 import crm6 from "../../../../assets/crm6.svg";
 import crm7 from "../../../../assets/crm7.svg";
 import crm8 from "../../../../assets/crm8.png";
 import crm9 from "../../../../assets/crm9.svg";
 import crm10 from "../../../../assets/crm10.svg";
 import crm12 from "../../../../assets/crm12.webp";
 import crm13 from "../../../../assets/crm13.webp";
 import crmlogo from "../../../../assets/crmlogo.svg";
 import filtercrm from "../../../../assets/filtercrm.svg";

import NavBar from "../../../NavBar";
import UniversalFooter from "../../../UniversalFooter";
import { Link } from "react-router-dom";



function Crm() {
  return <>
    <main>
      <NavBar />
      <div className="h-[738px] text-center pt-[100px] bg-gradient-to-b from-[#f2fdff] to-white ">
         <img src={crm1} alt="Crm" className="w-170 h-100 ml-110 -mt-12" /><br /> 
        <h1 className="text-[40px] font-medium   text-gray-900 -mt-3">Boost your bookings with Trello</h1>
        <p className="text-[18px] w-[800px] ml-90 text-gray-900 font-normal ">
          Do you ever feel like the tool you are using to manage your CRM (customer relationship management) is managing you? Let Trello help. Trello can be customized into a powerful CRM to help your sales team manage their leads and accounts effectively.
        </p><br />
        <button className="bg-blue-600 text-white py-2 px-4 rounded text-[16px] h-[48px] w-[200px] mt-4 hover:cursor-pointer hover:bg-blue-900">Get started with Trello</button>
      </div>

       <section className=" text-center  mt-10">
        <h1 className="text-[32px]  text-gray-900 font-medium">How to set up Trello as a CRM tool</h1><br />
        <img src={crm2} alt="Trello Board" className="h-110 w-[800px] ml-90" />
      </section>
 
      <div>
        <br /><br /><br />
        <h1 className="text-[32px]  text-gray-900 font-medium pl-67">
          Lead time takes less time with Trello
        </h1><br /><br /><br /><br />
      </div>

       <div className="flex gap-40 items-center -mt-10">
        <br /><br /><br /><br /><br />
        <div className=" h-100 w-[510px]  ml-26">
          <h1 className="text-[31px]  text-gray-900 font-medium">Manage and monitor your leads in one place</h1>
          <br />
          <hr className="border-gray-300" />
          
          <p className="text-[18px]  text-gray-900 font-medium mt-2 w-[490px] tracking-wide">To start, create a board. Add columns to outline your sales pipeline. Add contacts as cards and put important account details in the card description. Move to the next column when the relationship advances to the next stage and use labels to prioritize leads.</p>
          
        </div>
        <div><img src={crm3} alt="Advanced Checklists" className="h-80 w-120 -ml-20 -mt-18" /></div>
      </div><br /><br />


       <div className="flex w-[1000px] gap-40 items-center  ml-70 -mt-15">
        
        <img src={crm4} alt="Customer List" className="h-90 w-150" />
        <div className=" h-100  -ml-18 ">
          <h1 className="text-[31px]   text-gray-900 font-medium">Speed up the sales cycle</h1>
          <br />
          <hr className="border-gray-300" />
          
          <p className="text-[18px] tracking-wide w-[410px] text-gray-900 mt-2 font-medium">Keep yourself (account)able with Advanced Checklists: add a due date, assign a task to a teammate, or view items assigned to you so you can stay on top of things. Sale stalled? Tag a teammate to help. Accelerate response time with custom automations.</p>
          <br />
          <button className="text-[15px] rounded-md   text-gray-900 font-medium  border-1 border-blue-400 h-[49px] w-[220px] hover:cursor-pointer hover:bg-blue-100">Save time with automation</button>
        </div>
      </div><br /><br />


      <div className="flex gap-40 items-center -mt-48 h-200">
        
        <div className=" h-100 w-[500px] ml-65">
          <h1 className="text-[31px] text-gray-900 font-medium">New ways to visualize your pipeline</h1>
          <br />
          <hr className="border-gray-300" />
          
          <p className="text-[18px]  mt-2 w-[470px]   text-gray-900 font-medium">Calendar view gives you a daily, weekly, or monthly outlook of your client meetings, sales presentations, etc. Add, sort, and filter to see the information you need in Table view. Dashboard view will show you where all of your deals stand with a click and a glance.</p><br />
          <p className="text-[18px] italic -mt-2 w-[450px]  text-gray-900 font-medium">Some views are only available with a <span className=" underline hover:cursor-pointer hover: text-blue-900"> Premium </span> or   <span className=" underline hover:cursor-pointer hover: text-blue-900">Enterprise </span> plan</p>
          <br />
          <button className="text-[15px] font-normal  text-gray-900 rounded-md border-1 border-blue-400 h-[45px] w-[140px] hover:cursor-pointer hover:bg-blue-100">Try views for free</button>
        </div>
        <img src={crm5} alt="Calendar View" className="h-80 w-110 -ml-20 -mt-20" />
      </div>


      <div className=" flex flex-col -mt-45  h-250 w-full">
        <div className="">
        <div className="h-90 w-230 pl-70 bg-gradient-to-b from-[rgb(230, 252, 255)] to-[rgb(255, 255, 255)] bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-transparent ">
          <br /><br /><br />
          <h1 className="text-[15px] font-medium  text-gray-900 ">TRELLO FOR CRM</h1>
          <h2 className="text-[22px] font-medium  text-gray-900 ">Trello + your favorite tools</h2>
          <p className="text-[18px] font-medium  text-gray-900 ">Trello has 200+ integrations with the tools you know and love. Integrate the tools your team already uses with Trello to keep your work organized and in one place. Try a Trello Power-Up to connect all of your team’s (other) favorite apps to your boards.</p><br />
          <p className="text-[19px] font-normal   underline text-blue-800 hover:cursor-pointer  ">Go to Power-Ups gallery</p>
        </div><br />

        
        <div className=" -mt-17  pl-68  flex gap-7">
          {/* 1st box */}
          <Link to="/power-ups/55a5d917446f517774210009/salesforce" className=" h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#4c9aff] rounded-t-[10px]"></div>
            <img src={crm11} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px]  text-gray-900  font-medium mb-1">Salesforce</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support</h2>
              <p className="text-[15px]   text-gray-800 w-[280px] font-medium mt-2">The Salesforce Power-Up for Trello brings information about opportunities, leads, contacts, and cases to your Trello cards.</p>
            </div>
          </Link>
          {/* 2nd box */}
          <Link to="/power-ups/57c72026e3248df11df6621b/pipedrive" className=" h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#344563] rounded-t-[10px]"></div>
            <img src={crm6} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px] font-medium mb-1">Pipedrive</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support</h2>
              <p className="text-[15px]  text-gray-800 w-[260px] font-medium mt-2">Pull deal information  into Trello from Pipedrive, ensuring an automatic  handover between sales and the rest of your org.</p>
            </div>
          </Link>
            {/* 3rd box */}
          <Link to="/power-ups/5894c177310f1e861bf12dc2/droplr" className="h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#0065ff] rounded-t-[10px]"></div>
            <img src={crm7} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px] font-medium mb-1">Droplr</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support</h2>
              <p className="text-[15px]  text-gray-800 font-medium mt-2"> Expands your drop links into rich content for your Trello cards.</p>
            </div>
          </Link>

        </div>


        <div className="  mt-7 pl-68 flex gap-7">
          {/* 4th box */}
          <Link to="/power-ups/5ba22bdcd58ada0595eadc98/zoho-desk" className=" h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#ffc400] rounded-t-[10px]"></div>
            <img src={crm8} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px] font-medium mb-1">Zoho Desk</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support</h2>
              <p className="text-[15px] w-[260px]  text-gray-800 font-medium mt-2">The Zoho Desk Power-Up brings context and clarity to your everyday tasks,projects and support activities. </p>
            </div>
          </Link>
          {/* 5th box */}
          <Link to="/power-ups/56cdf5f7071f133a93eb2363/intercom" className=" h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
            <img src={crm9} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px] font-medium mb-1">Intercom</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support</h2>
              <p className="text-[15px] text-gray-800 font-medium mt-2">This Power-Up adds context from Intercom to  issues and requests that development teams are tracking in Trello. </p>
            </div>
          </Link>
          {/* 6th box */}
          <Link to="/power-ups/5e5e8b4b55a4ea5fedc0dafa" className="h-[290px] w-[310px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#ff5630] rounded-t-[10px]"></div>
            <img src={crm10} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[15px] -mt-2">
              <h1 className="text-[23px] font-medium mb-1">Crmble</h1>
              <h2 className="text-[14px] font-medium text-gray-500">Sales and support </h2>
              <p className="text-[15px] text-gray-800 font-medium mt-2">Add the Crmble Power-Up to turn your Trello board into a powerful,yet easy to use CRM & Sales Pipeline.</p>
            </div>
          </Link>

        </div>
        </div>
      </div>
      <br /><br /><br /><br />

      <div className=" w-[1000px] m-auto -mt-18">
      
        <h1 className="text-[30px] w-[590px]  text-gray-900 font-medium">No need to start from scratch. Use one of <br /> our customizable templates.</h1>
        <p className="text-[17px] w-[670px]  text-gray-800  font-normal">Jumpstart your board with a well-proven <span className="text-blue-800 font-normal underline hover:cursor-pointer"> template </span> designed by <br /> our team. Customize it for yours.</p>
        <br />
        <div className=" flex gap-7">
        <div className="w-[1550px]">
          <img src={crm12} alt="eisenhower" className="h-[220px] w-[750px]" />
          <h1 className="text-[20px]  text-gray-900 mt-2 font-medium">CRM Pipeline by Trello</h1>
          <p className="text-[18px]  text-gray-800  font-normal mt-1  w-[450px]">Create a pipeline for managing incoming leads or requests that is adaptable to fit your team’s needs or any type of customer relationship management.</p><br />
          <p className="text-[18px] font-normal  text-blue-800 underline hover:cursor-pointer">Try Template</p>
        </div>
        <div className="w-[1550px]">
          <img src={crm13} alt="team" className="h-[220px] w-[600px]" />
          <h1 className="text-[20px] mt-2  text-gray-900 font-medium">CRM & Sales Pipeline by Crmble</h1>
          <p className="text-[18px] text-gray-800 font-normal mt-1  w-[445px]">Sick of managing your contacts in spreadsheets? This template makes it easy to manage your sales pipeline by turning your Trello board into a powerful, yet easy to use CRM.</p><br />
          <p className="text-[18px] font-normal text-blue-800 underline hover:cursor-pointer">Try Template</p>
        </div>
      </div>
      </div>

       <div className="pt-[128px] flex flex-col items-center">
        <h1 className="text-[19px] text-gray-800 font-normal">Join a community of millions of users globally who are using Trello to get more done.</h1><br />
        <img src={crmlogo} alt="logos" className="pl-10 w-220" />
      </div><br /><br /><br />

       <div className="bg-[#e6fcff] pl-52 pb-10"><br /><br /><br />
        <div className="mt-9 ml-10">
          <h1 className="text-[21px]  text-gray-900 font-medium">Get more out of your CRM</h1>
          <p className=" mt-2 text-[18px]  text-gray-800 font-normal">Read the Trello blog to find ways to improve efficiency, <br /> productivity, and collaboration.</p>
        </div><br /><br /><br />
        <div className="flex  ml-13 -mt-5 gap-25">
          <div className="flex gap-5 ">
            <div>
                {/* <img src="" alt="" className="h-[50px] w-[75px] mt-3" />   */}
              <svg fill="currentColor"  className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 33 41"><path d="M20.26 38.154c0 2.086-2.542 3.13-4.029 1.656l-3.147-3.122a2.331 2.331 0 0 1-.691-1.655V21.568a2.35 2.35 0 0 1 2.36-2.341H17.9a2.35 2.35 0 0 1 2.36 2.34z" opacity=".5"></path><path d="M21.555 24.078a2.366 2.366 0 0 1-1.936 1.001h-6.585a2.366 2.366 0 0 1-1.936-1.001L.425 8.906A2.327 2.327 0 0 1 0 7.567V2.841A2.35 2.35 0 0 1 2.36.5h27.933a2.35 2.35 0 0 1 2.36 2.34v4.727c0 .479-.148.946-.424 1.34z"></path></svg>
            </div>
            <div>
              <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1 font-medium">How to manage a strong sales funnel at every stage with Trello</h1>
              <p className="text-[19px]  mt-2 text-gray-800 w-[420px] font-normal">This blog will show you how you can use Trello to set up a successful sales funnel management system for your business to help you convert leads and drive revenue.</p><br />
              <p className="text-blue-800 underline text-[18px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
          <div className="flex gap-5 -ml-15">
            <div>
              {/* <img src="" alt="" className="h-[40px] w-[40px] mt-3" /> */}
              <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 87 65"><path d="M86.855 16.099a9.429 9.429 0 0 0-9.426-9.245H43.714l-.12.002a2.571 2.571 0 0 0 .12 5.14H77.43l.138.003a4.286 4.286 0 0 1 4.147 4.283v9.714l-.002.14a4.286 4.286 0 0 1-4.283 4.146h-4.572v-2.571a3.429 3.429 0 0 0-3.428-3.429h-52A3.429 3.429 0 0 0 14 27.711v2.571H9.429l-.184.002A9.429 9.429 0 0 0 0 39.71v9.714l.002.183a9.429 9.429 0 0 0 9.427 9.246h34l.12-.003a2.571 2.571 0 0 0-.12-5.14h-34l-.14-.002a4.286 4.286 0 0 1-4.146-4.284V39.71l.002-.139a4.286 4.286 0 0 1 4.284-4.147H14v2.572a3.429 3.429 0 0 0 3.429 3.428h52a3.429 3.429 0 0 0 3.428-3.428v-2.572h4.572l.183-.002a9.429 9.429 0 0 0 9.245-9.427v-9.714z" opacity=".5"></path><path d="M69.429 47.71a3.429 3.429 0 0 1 3.428 3.43v10.285a3.429 3.429 0 0 1-3.428 3.429h-52A3.429 3.429 0 0 1 14 61.425V51.14a3.429 3.429 0 0 1 3.429-3.43zM69.429.854a3.429 3.429 0 0 1 3.428 3.428v10.286a3.429 3.429 0 0 1-3.428 3.428h-52A3.429 3.429 0 0 1 14 14.568V4.282A3.429 3.429 0 0 1 17.429.854z"></path></svg>
            </div>
            <div>
              <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1 font-medium">The ultimate Trello for CRM workflow breakdown</h1>
              <p className="text-[19px] mt-2 w-[410px] text-gray-800 font-normal ">Step by step, this blog will show you how to build a CRM with Trello, so you can easily manage your sales leads and customer contacts.</p><br />
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
        </div><br /><br /><br />

        <div className="flex  ml-13 -mt-6 gap-25">
          <div className="flex  gap-5">
            <div>
              
              {/* <img src="" alt="" className="h-[40px] w-[40px] mt-3" /> */}
              <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 63 65"><path d="M21.265 11.485C21.265 5.54 26.085.72 32.03.72s10.767 4.82 10.767 10.766v3.588h-5.384v-3.587a5.383 5.383 0 0 0-5.224-5.381l-.16-.003a5.383 5.383 0 0 0-5.382 5.384v3.587h-5.383zm13.757 20.336h27.514v25.72a7.178 7.178 0 0 1-7.178 7.178H8.105A7.178 7.178 0 0 1 .928 57.54v-25.72h28.71v3.888a2.692 2.692 0 1 0 5.383 0z"></path><path d="M62.536 22.252a7.178 7.178 0 0 0-7.178-7.178H8.105a7.178 7.178 0 0 0-7.177 7.178v9.57h28.71v-5.086a2.692 2.692 0 0 1 5.384 0v5.086h27.514z" opacity=".5"></path></svg>
            </div>
            <div>
              <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1  font-medium">Close more deals: How to use Trello as a CRM with the Crmble Power-Up</h1>
              <p className="text-[19px] mt-2 w-[410px]  text-gray-800 font-normal">Learn how to effectively use the Crmble Power-Up with Trello to create a powerful CRM tool.</p><br />
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
          <div className="flex gap-5 -ml-15">
            <div>
              {/* <img src="" alt="" className="h-[40px] w-[40px] mt-3" /> */}
              <svg fill="currentColor" className="w-10 h-9 text-[rgb(9,30,66)]" aria-hidden="true" viewBox="0 0 51 65"><path d="M22.392 33.239a2.71 2.71 0 0 1-5.418.127l-.003-.127v-13.25a2.71 2.71 0 0 1 5.418-.127l.003.127zM34.437 33.239a2.71 2.71 0 0 1-5.418.127l-.003-.127v-13.25a2.71 2.71 0 0 1 5.418-.127l.003.127z" opacity=".5"></path><path fill-rule="evenodd" d="M43.47.719a7.227 7.227 0 0 1 7.227 7.227v53.153c0 2.948-3.34 4.656-5.73 2.928L25.704 50.102 6.44 64.028c-2.39 1.728-5.73.02-5.73-2.928V7.946A7.227 7.227 0 0 1 7.938.719zm-21.078 32.52a2.71 2.71 0 0 1-5.417.128l-.003-.128V19.99a2.71 2.71 0 0 1 5.417-.127l.003.127zm9.335 2.71a2.71 2.71 0 0 0 2.71-2.71V19.99l-.003-.127a2.71 2.71 0 0 0-5.417.127v13.25l.003.127a2.71 2.71 0 0 0 2.707 2.583z"></path></svg>
            </div>
            <div>
              <h1 className="text-[20px]  text-gray-900 w-[400px] -mt-1 font-medium">5 stages of a successful sales pipeline with Pipedrive and Trello</h1>
              <p className="text-[19px] mt-2 w-[410px]  text-gray-800 font-normal">Learn how to use the Pipedrive Power-Up with Trello to manage sales tasks with other departments without leaving the pipeline process.</p><br />
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
        </div><br /><br /><br />
      </div>   
      <UniversalFooter /> 
    </main>
  </>
}
export default Crm;




