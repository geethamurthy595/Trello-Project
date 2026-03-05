
import React from 'react'
import act  from '../../../assets/Powerups-HROperation/Activity.svg'
import mem  from '../../../assets/Powerups-HROperation/mem.png'
import pro  from '../../../assets/Powerups-HROperation/process.svg'
import gan  from '../../../assets/Powerups-HROperation/gantt.png'
import logo  from '../../../assets/Powerups-HROperation/logo.svg'
import icon  from '../../../assets/Powerups-HROperation/icon.png'
import board  from '../../../assets/Powerups-HROperation/board.png'
import where  from '../../../assets/Powerups-HROperation/whereby.png'
import hand  from '../../../assets/Powerups-HROperation/hand.svg'
import crmble  from '../../../assets/Powerups-HROperation/crmble.svg'
import conect  from '../../../assets/Powerups-HROperation/conect.png'
import sales  from '../../../assets/Powerups-HROperation/salesforce.png'
import jot from '../../../assets/Powerups-HROperation/jotform.png'
import pipe from '../../../assets/Powerups-HROperation/pipe.png'
import app  from '../../../assets/Powerups-HROperation/app.svg'
import itero from '../../../assets/Powerups-HROperation/itero.png'
import pac from '../../../assets/Powerups-HROperation/package.png'
import QR from '../../../assets/Powerups-HROperation/QR.png'
import wish from '../../../assets/Powerups-HROperation/wish.png'
import okr  from '../../../assets/Powerups-HROperation/okr.svg'
import roles from '../../../assets/Powerups-HROperation/roles.png'
import time  from '../../../assets/Powerups-HROperation/time.svg'
import visit from '../../../assets/Powerups-HROperation/visitors.png'
import forms from '../../../assets/Powerups-HROperation/forms.png'


const powerUps = [
  {
    id: 1,
    name: "Activity",
    desc: "Track your effort put into every card. Make your time count and find out what’s taking so long.",
    installs: "25,000+",
    img:act,
  },
  {
    id: 2,
    name: "Member Groups (Handy Power-Ups Pack)",
    desc: "Create and manage member groups, assign them to the cards or mention with one click.",
    installs: "100+",
    img:mem,
  },
  {
    id: 3,
    name: "Process Templates for Trello",
    desc: "Create a library of templates accessible via any card, no need to keep cards open for a template.",
    installs: "1,000+",
    img:pro,
  },
  {
    id: 4,
    name: "Gantt chart (by Placker)",
    desc: "Gantt chart, Resource Planning and extended timeline view. All-in-one project management for Trello by Placker.",
    installs: "50,000+",
    img:gan,
  },
  {
    id: 5,
    name: "Inventoryfy (Manage inventory on cards)",
    desc: "Inventory Management on Trello cards with Smart Fields.",
    installs: "100+",
    img: logo,
  },
  {
    id: 6,
    name: "T&M: Time tracking for Trello cards",
    desc: "Simple and efficient way to track work time.",
    installs: "100+",
    img: icon,
  },
  {
    id: 7,
    name: "Board Permissions (Handy Power-Ups Pack)",
    desc: "Board Permissions lets you manage members permissions on your boards.",
    installs: "500+",
    img: board,
  },
  {
    id: 8,
    name: "Whereby",
    desc: "Add video conversations to your Trello boards. Super-convenient for meetings where cards are the center of attention.",
    installs: "10,000+",
    img:where,
  },
  {
    id: 9,
    name: "Employee Handbook by Hipporello",
    desc: "Create and publish guides on company policies and procedures on a branded employee portal right from Trello.",
    installs: "100+",
    img:hand,
  },
  {
    id: 10,
    name: "Crmble",
    desc: "Gestiona la relación con tus clientes mediante la integración de correo electrónico y enlace de Whatsapp para...",
    installs: "100,000+",
    img: crmble,
  },
  {
    id: 11,
    name: "Expiration Reminder",
    desc: "Automatically track expiration dates for contracts, software licenses, insurance, employee certifications, etc. in Trello.",
    installs: "5,000+",
   
  },
  {
    id: 12,
    name: "ConectoHub",
    desc: "ConectoHub lets you link your Trello Cards to your Company, Team & Individual OKRs. Get clarity of your work and achieve your goals.",
    installs: "500+",
    img: conect,
   
  },
  {
    id: 13,
    name: "Salesforce",
    desc: "Track your sales pipeline in Trello with cases, contacts, leads, & opportunities directly on cards.",
    installs: "50,000+",
    img: sales,
 
  },
  {
    id: 14,
    name: "Jotform",
    desc: "Jotform is the easy way to create and publish online forms. Powerful forms get work done.",
    installs: "10,000+",
    img: jot,
  
  },
  {
    id: 15,
    name: "Pipedrive",
    desc: "The Pipedrive Power-Up automatically creates Trello cards when you start, close or move a deal to a selected stage.",
    installs: "10,000+",
    img: pipe,
   
  },
  {
    id: 16,
    name: "Applicant Tracking-Hiring-Recruiting by Hipporello",
    desc: "Publish job ads on a branded career page, receive applications as cards and follow-up with candidates from Trello.",
    installs: "500+",
    img:app,
  
  },
  {
    id: 17,
    name: "Undo for Trello",
    desc: "One-click restore for your business-critical data on Trello.",
    installs: "10,000+",
   
  },
  {
    id: 18,
    name: "Itero Motivation Engine",
    desc: "Gamify your workflow with XP, streaks, mood tracking, and powerful personal challenges, all inside Trello.",
    installs: "—",
     img:itero,
    
  },
  {
  id: 19,
  name: "Package Tracker",
  desc: "Track packages right from Trello and get always up-to-date info on orders and shipments.",
  installs: "100,000+",
  img:pac,
},
{
  id: 20,
  name: "QR Action",
  desc: "Turn any object into a Trello action with a simple QR scan — no app needed.",
  installs: "100+",
  img:QR,
},
{
  id: 21,
  name: "Wishlist",
  desc: "Keep an overview and track future expenses: gifts, vacations, company purchases etc. All in one place.",
  installs: "5,000+",
  img:wish,
},
{
  id: 22,
  name: "OKR Studio",
  desc: "Manage OKR inside your Trello boards and cards.",
  installs: "100+",
  img:okr,
},
{
  id: 23,
  name: "Member Roles (Handy Power-Ups Pack)",
  desc: "Assign descriptive roles to card members & clarify members responsibilities.",
  installs: "1,000+",
  img:roles,
},
{
  id: 24,
  name: "Time Off Manager",
  desc: "Manage vacations & sick leaves in Trello: requests, approvals, balances, and a team calendar.",
  installs: "—",
  img:time,
},
{
  id: 25,
  name: "Visitors Check-In",
  desc: "Your Digital Receptionist. Touchless check-in for your guests and a professional welcome.",
  installs: "1,000+",
  img:visit,
},
{
  id: 26,
  name: "Forms by Blue Cat",
  desc: "The easiest and most complete forms for Trello, integrates with custom fields and attachments.",
  installs: "50,000+",
  img:forms,
},
];

const HROpearion = () => {
  return (
     <div className="px-6 py-6 bg-black h-[90vh] overflow-scroll hide-scrollbar">
    
          <h2 className="text-xl font-semibold mb-6 text-white">
          HR & operations
          </h2>
    
          <div className="w-[900px]">
    
            <div className="grid grid-cols-3 gap-4">
    
              {powerUps.map((item) => (
    
                <div
                  key={item.id}
                  className="bg-[#1E1E1E] rounded-lg p-3 border border-gray-700 
                  hover:bg-[#2A2A2A] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  
                  {/* Image + Title */}
                <div className="flex items-center gap-3 mb-2">

                <div className="w-10 h-10 flex items-center justify-center">
                {item.img && (
                <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded"
                />
                )}
              </div>

              <h3 className="font-semibold text-white">
              {item.name}
              </h3>

              </div>
    
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded mb-3">
                    Add
                </button>
    
                  <p className="text-gray-300 text-sm mb-4">
                    {item.desc}
                  </p>
    
                  <div className="flex items-center gap-2 text-sm text-gray-400">
    
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
    
                </div>
              ))}
    
            </div>
    
          </div>
        </div>
  )
}

export default HROpearion
