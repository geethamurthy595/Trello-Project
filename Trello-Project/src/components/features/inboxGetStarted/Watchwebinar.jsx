import logo from '../../../assets/wwtrlogo.png'
import search from '../../../assets/wwtrsearch.svg'
import uncle from '../../../assets/wwtruncle.png'
import slogo from '../../../assets/wwtrsmalllogo.svg'
import world from '../../../assets/wwtrworld.png'
import drop from '../../../assets/wwtrdrop.svg'

const Watchwebinar = () => {
  return (<>
    {/* navbar */}
        <div className="h-[72px] flex gap-55 justify-center">
            {/* first section */}
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="Webinar Logo" className='h-6 w- hover:cursor-pointer' />
                <div className='flex gap-2 text-[16px] font-normal items-center hover:cursor-pointer'>
                <h1>Products </h1> <img src={drop} alt="" className='h-[6px] w-[11px]r' />
                </div>
                <div className='flex gap-2 text-[16px] font-normal items-center hover:cursor-pointer'>
                <h1>Solutions </h1> <img src={drop} alt="" className='h-[6px] w-[11px]' />
                </div>
                <div className='flex gap-2 text-[16px] font-normal items-center hover:cursor-pointer'>
                <h1>Why Atlassin </h1> <img src={drop} alt="" className='h-[6px] w-[11px] ' />
                </div>
                <div className='flex gap-2 text-[16px] font-normal items-center'>
                <h1 className='hover:cursor-pointer'>More + </h1>
                </div>
            </div>
            {/* second section */}
            <div className='flex gap-5 items-center'>
              <button className='border-1 bg-blue-600 w-[143px] h-[40px] flex gap-2 text-white items-center justify-center rounded-[20px] font-medium hover:cursor-pointer ' >Get it free <svg class="desktop" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.19995 1.18182L5.19995 4.81818L1.19995 1.18182" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></button>
              
              <img src={search} alt="" className='h-[30px] w-[30px] hover:cursor-pointer'/>
              <button className='border-1 border-gray-300 border-r-0 border-b-0 border-t-0 h-[32px] w-[90px] font-medium hover:cursor-pointer'>Sign in</button>
            </div>
        </div>

        {/* small paragraph */}
        <p className='text-gray-500 text-[14px] pl-75 pt-4 hover:cursor-pointer'>Webinars / Business /<span className='text-blue-900'> Take a full tour: Trello Standard and ...</span></p>
        <br /><br />
        {/* main section  */}
        <div className='flex flex-col items-center'>
          <h1 className='text-[48px] font-medium mr-31 text-[#253858]'>Take a full tour: Trello <br /> Standard and Premium</h1><br />
          <p className='text-[14px] mr-5 text-gray-500'>Find out how Trello's Standard and Premium plans can help you manage 
            work with your teams in <br /> just 20 minutes.</p><br /><br /><br />
          <div className='h-[416px] w-[624px] bg-[#F4F5F7] p-8'>
            <h1 className='text-[24px] font-normal pb-3'>Watch On-Demand</h1>
            <div className='flex gap-2 pb-2'>
            <input type="text" name="" id="" placeholder='First Name *' className='bg-white h-[42px] w-[300px] text-[14px] pl-5 border-1 border-gray-400'/>
            <input type="text" name="" id="" placeholder='Last Name *' className='bg-white h-[42px] w-[300px] text-[14px] pl-5 border-1 border-gray-400'/>
            </div>
            <div className='flex gap-2 pb-2'>
            <input type="text" name="" id="" placeholder='Job Title *' className='bg-white h-[42px] w-[300px] text-[14px] pl-5 border-1 border-gray-400'/>
            <input type="text" name="" id="" placeholder='Company Email *' className='bg-white h-[42px] w-[300px] text-[14px] pl-5 border-1 border-gray-400'/>
            </div>
            <div className='flex gap-2'>
              <button className='bg-white h-[42px] w-[300px] border-1 border-gray-400'>
              <select name="Company" id="company" className='w-[250px] h-[42px] border-none text-[14px] text-gray-500'>
                  <option value="">Select your company size * </option>
                  <option value="very least">1-10</option>
                  <option value="least">11-50</option>
                  <option value="below average">51-250</option>
                  <option value="average">251-1,000</option>
                  <option value="above average">1,001-5,000</option>
                  <option value="high">5,001-10,000</option>
                  <option value="highest">10,001-50,000</option>
                  <option value="peak">50,001-100,000</option>
                  <option value="highest peak">100,000+</option>
              </select>
              </button>
              <button className='bg-white h-[42px] w-[300px] border-1 border-gray-400'>
              <select name="Country" id="country" className='w-[250px] h-[42px] border-none text-[14px] text-gray-500'>
                  <option value="">Select your Country * </option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Russia">Russia</option>
                  <option value="America">America</option>
                  <option value="WI">WI</option>
                  <option value="England">England</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Europe">Europe</option>
              </select>
              </button>
            </div><br />

            <p className='text-gray-600 text-[14px]'>By signing up on this form, I acknowledge Atlassian’s <span className='text-[14px] text-blue-800 underline hover:cursor-pointer'> Privacy Policy. </span> </p><br /><br />

            <button className='bg-green-300 text-[16px] font-bold h-[40px] w-[116px] hover:cursor-pointer'>Watch Now</button>

          </div>
          <br />
          <h1 className='text-[14px] font-bold mr-100'>What to expect from this webinar</h1><br />
          <p className='text-[14px] font-normal h-[96px] w-[560px] mr-15'>In this video tour, you'll get a chance to learn how you
             can make the most out Trello’s Standard and Premium plans 
             to manage work with your teams. In just 20 minutes you will 
             learn how to keep your projects and tasks moving as seamlessly 
             as possible with essential features that power tighter 
             collaboration and efficiency.
          </p>
          <p className='text-[14px] font-normal h-[48px] w-[560px] mr-15'>
            Trello Standard and Premium are for teams of any size. 
            See why 2 million teams in 150+ countries trust Trello 
            to empower their teams.
          </p>
          <br /><br /><br />
          <h1 className='text-[24px] font-medium h-[32px] w-[610px] mr-5 border-b-1 pb-11 border-gray-200'>Speaker</h1><br />
          <div className='flex gap-10 items-center'>
          <div>
            <img src={uncle} alt="" className='h-40 w-40 '/>
          </div>
          <div>
            <h1 className='text-[16px] font-medium text-[#0052CC]'>Jordan Mirchev</h1><br />
            <h2 className='text-blue-600 text-[13.5px] font-normal'>Senior Product Marketing Manager, Trello</h2><br />
            <p className='text-[14px] h-[120px] w-[430px]'>As a senior product marketer on the Trello team at 
              Atlassian, Jordan helps teams manage their work in 
              the most productive and collaborative way possible. 
              When Jordan is not at work, he's collecting vinyl records, 
              traveling around the world, and enjoying time with his 
              two young daughters.
              </p>
          </div>
          </div>
        </div><br /><br />

        {/* second last section */}
        <div className='flex h-150 w-[1110px] justify-center gap-30 bg-[#FAFBFC] p-10 ml-50'>
          <div>
            <img src={slogo} alt="" className='h-7 w-7' /><br />
            <ul className='text-[14px] font-bold'>
              <li className='hover:cursor-pointer'>Company</li><br />
              <li className='hover:cursor-pointer'>Careers</li><br />
              <li className='hover:cursor-pointer'>Events</li><br />
              <li className='hover:cursor-pointer'>Blogs</li><br />
              <li className='hover:cursor-pointer'>Investor Relations</li><br />
              <li className='hover:cursor-pointer'>Atlassin Foundation</li><br />
              <li className='hover:cursor-pointer'>Press Kit</li><br />
              <li className='hover:cursor-pointer'>Contact us</li><br />
            </ul>
          </div>

          <div>
            <h1 className='text-[14px] font-bold'>PRODUCTS</h1><br />
            <ul className='text-[14px]'>
              <li className='hover:cursor-pointer'>Rovo</li><br />
              <li className='hover:cursor-pointer'>Jira</li><br />
              <li className='hover:cursor-pointer'>Jira Align</li><br />
              <li className='hover:cursor-pointer'>Jira Service Management</li><br />
              <li className='hover:cursor-pointer'>Confluence</li><br />
              <li className='hover:cursor-pointer'>Loom</li><br />
              <li className='hover:cursor-pointer'>Trello</li><br />
              <li className='hover:cursor-pointer'>Bitbucket</li><br /><br /><br />
              <li className='hover:cursor-pointer'>See all products &#8594;</li>
            </ul>
          </div>

          <div>
            <h1 className='text-[14px] font-bold'>RESOURCES</h1><br />

            <ul className='text-[14px]'>
              <li className='hover:cursor-pointer'>Technical support</li><br />
              <li className='hover:cursor-pointer'>Purchasing & licensing</li><br />
              <li className='hover:cursor-pointer'>Atlassin Community</li><br />
              <li className='hover:cursor-pointer'>Knowledge base</li><br />
              <li className='hover:cursor-pointer'>Marketplace</li><br />
              <li className='hover:cursor-pointer'>My account</li><br /><br /><br /><br /><br /><br /><br />
              <li className='hover:cursor-pointer'>Create support ticket &#8594;</li>
            </ul>
          </div>

          <div>
            <h1 className='text-[14px] font-bold'>LEARN</h1><br />
            <ul className='text-[14px]'>
              <li className='hover:cursor-pointer'>Partners</li><br />
              <li className='hover:cursor-pointer'>Training & certification</li><br />
              <li className='hover:cursor-pointer'>Documentation</li><br />
              <li className='hover:cursor-pointer'>Developer resources</li><br />
              <li className='hover:cursor-pointer'>Enterprise services</li><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <li className='hover:cursor-pointer'>See all resources &#8594;</li>
            </ul>
          </div>

          
        </div>
        <br />
        {/* last section  */}
        <div className='flex items-center justify-center gap-120 text-gray-600'>
          <div>
          <p >Copyright © 2025 Atlassian</p>
          </div>
          <div>
            <ul className='flex gap-5'>
              <li className='hover:cursor-pointer'>Privacy Policy</li>
              <li className='hover:cursor-pointer'>Terms</li>
              <li className='hover:cursor-pointer'>Impresssum</li>
              <li className='flex hover:cursor-pointer'><img src={world} alt="" className='h-5 w-5 ' /><span> &#9662; </span></li>
              <li><select name="Language" id="Language" className='mr-5 hover:cursor-pointer'>
                  <option value="">English </option>
                  <option value="Deutsch">Deutsch</option>
                  <option value="English">English</option>
                  <option value="Español">Español</option>
                  <option value="Français">Français</option>
                  <option value="Italiano">Italiano</option>
                  <option value="한국어">한국어</option>
                  <option value="Nederlands">Nederlands</option>
                  <option value="日本語">日本語</option>
                  <option value="Polski">Polski</option>
                  <option value="Português">Português</option>
                  <option value="русский">русский</option>
                  <option value="中文">中文</option>
              </select></li>
            </ul>
          </div>
        </div><br /><br /><br /><br />
    </>
  )
};

export default Watchwebinar;