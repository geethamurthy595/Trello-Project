import React from 'react'
import { Link } from 'react-router-dom'

const ItProject = () => {

    const cards =[
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/5hyXEAdiDBPHrLPhcRH2Z1/80779c3b9c914c9aaae6fd185ab7f073/GanttCharts-forTrello.png",
    "title": "Placker",
    "desc": "Smart planning, tracking and project management tools for Trello."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/24qh00ltQA8cdUSdAX3x2u/bc3b4f6ecf19e0a28facb7fd5df5e44d/Elegantt.png",
    "title": "Elegantt",
    "desc": "An elegant automatic scheduling tool for Trello."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/6Wn6oDnmnS7t4XCKemABxP/1b3b7dbf6cd5c4c4bfff087e1e9b1a9d/SureTriggers.png",
    "title": "SureTriggers",
    "desc": "SureTriggers allows custom triggers & actions for Trello, like moving/creating cards based on triggers. Real-time sync keeps boards updated. Integrate to streamline workflows, save time & focus on critical tasks."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/zOE8hev9JW7UfbKOEchp5/1499939143d22d20b3e6b6b5d38988a9/Kanban.png",
    "title": "Kanban WIP",
    "desc": "Set and manage WIP limits across lists to control work and reduce lead time."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/5M93yvZyj3vpmAIobz2Db/2dd043a456545c76cd1cad67d43f331f/Confluence.png",
    "title": "Confluence Cloud",
    "desc": "Attach and manage Confluence pages directly from Trello boards."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/6QdGuALqHuUz1BrXRJBrRC/a1bdaecb5b694b63cf0dac5e0f79275f/Corello.png",
    "title": "Corrello Power-Up",
    "desc": "Provides burndown charts and cumulative flow diagrams for Trello boards."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/3QdudDig9QGW2khZM64Zr3/4e49a58484d2a7b039f22b37aece4d7d/ScrumGenius.png",
    "title": "ScrumGenius",
    "desc": "Automatically pushes Trello activity to daily stand-ups in ScrumGenius."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/7B1GSxZ43vvokfeRpXtm3K/d26ad44b9ac0369d12c0379501b4a811/123_Trello_Timer.png",
    "title": "123 Trello Timer",
    "desc": "Simple Mac app to create timesheets for cards and mark them as invoiced."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/7lfP4HBoUezBiqa5w8Vo8X/6c796dac7052ecfd7c976b4bf04b28ad/power-up-logo_160.png",
    "title": "Cross-Board Export",
    "desc": "Tired of adding Export power-ups on each board? Try Cross-Board Export! One installation covers all your boards, eliminating multiple fees"
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/63OLMyiA19HggvZXINUw0K/e96ee03bd6a0e0d21167327f336c1492/Task_Clone.png",
    "title": "TaskClone",
    "desc": "Automatically sends Evernote checklists to Trello."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/6KkbalKwNfYp7rApxwMGzR/feeb23a44170fb16abee76f428da4b4c/Tick.png",
    "title": "Tick Time Tracking",
    "desc": "Track your time and stay within project budgets."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/3vrX71M6koWf96uIImkYKW/d3dcd6b04b0581565d77dbd873c28cb1/TrelloCalendarConnector.png",
    "title": "Trello Calendar Connector",
    "desc": "Sync Trello due dates with any calendar using Cronofy."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/L48NxsP2dTILRGuJdilS5/66a179782eacd4ee3eb1b50a92b21c20/Trellists.png",
    "title": "Trellists",
    "desc": "Hide and show lists on Trello boards for better focus."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/3xhVDOX3srx2xAwjr9eB6s/a6828156d67a0b0fccefe29dc03ac1bb/pt_import.png",
    "title": "Pivotal Tracker Import",
    "desc": "Easily migrate your Pivotal Tracker data to Trello with the Pivotal Tracker Import Power-Up! Import epics, stories, attachments, and comments seamlessly. Perfect for teams transitioning to Trello. Save time and streamline workflows."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/5kOSRWAb6Envv20EKYlr8z/cbdded0a9c66582aae834dff925acb23/Scrum-forTrello.png",
    "title": "Scrum for Trello",
    "desc": "Scrum for Trello adds estimates and records time spent on cards."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/7o03FxYm8ayuWkE7qA4X2b/d5304eaaa674a3ae7856db041fa5a499/redsync-logo-160x160.png",
    "title": "Redmine Sync (RedSync)",
    "desc": "Sync Redmine’s Issues to Trello’s Cards. Via Tello’s intuitive user interface, users can check the Issue’s schedule and report the work progress to Redmine while leveraging Trello’s advanced task management features."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/4Ci8yzJxE8JTeuz2gJlVeD/4f0de56366f89746cb975a14aabd17cf/FireFlies.png",
    "title": "Fireflies.ai",
    "desc": "Automatically create tasks on Trello with voice commands from your meetings."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/6aPCsDytKsp2xdRol7gMkC/ea45e1399b1ccd5dd0940a00f1513b81/Plus-forTrello.png",
    "title": "Plus for Trello",
    "desc": "Time-tracking, reporting, scrum, and more!"
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/3SBtCmH2SemCD8a6f7ZIMR/bd5031529bece904f793f546e4d89fe1/10b3ca26-b9ee-4ba6-8ed6-add17d93f5d2.png",
    "title": "BugHerd",
    "desc": "Integrate Trello with BugHerd for complete website project management BugHerd integrates directly with Trello, making it easy to give feedback and report bugs on websites without having to change the way your team works. It’s the best of both worlds."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/5hyXEAdiDBPHrLPhcRH2Z1/80779c3b9c914c9aaae6fd185ab7f073/GanttCharts-forTrello.png",
    "title": "Gantt for Trello",
    "desc": "Generate Gantt charts from your Trello boards."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/LhpktTDaAxicXwBT7qAak/3ee24ba289cd695ff835c3d6829c743e/Webwork.png",
    "title": "WebWork Time Tracker",
    "desc": "Simply keep projects and tasks on track and help your teams do their best work."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/v2jU86DL7S8VV9SdBnGuI/8ed885cd6b85173bc110f5b1f49ed87f/Timely.png",
    "title": "Timely",
    "desc": "Create timesheet entries from Trello cards automatically."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/6S1OEQqhPkUa4eUawJgzia/aa363561706a00616f6eccf7dbacaad2/betterbugs.png",
    "title": "BetterBugs",
    "desc": "Integrate Trello with BugHerd for complete website project management BugHerd integrates directly with Trello, making it easy to give feedback and report bugs on websites without having to change the way your team works. It’s the best of both worlds."
  },
  {
    "image": "https://images.ctfassets.net/rz1oowkt5gyp/2ruLGbGBz6k6vh2wAcP2OV/60b185655de61db8f64c76a42bd44dc9/Untitled_design__23_.png",
    "title": "TrellShop - Shopify Integration",
    "desc": "This integration between Trello and Shopify allows businesses to streamline their e-commerce operations by syncing data and automating workflows between the two platforms."
  },
  //7cards
]





  return (
    <>
    <section className='p-4 w-350  '>
                <h1 className='text-2xl font-semibold'>IT & project management(34)</h1>

                <div className='flex flex-wrap gap-4 '>
                    {
                        cards.map(({ image, title, desc }) => {
                            return (
                                <>
                                    <div className='p-4 bg-gray-50  shadow-2xl relative h-100 w-60'>
                                        <div className='flex'><img src={image} alt="" className='h-10 w-10' />
                                            <h1 className='ml-3 text-xl font-semibold '>{title}</h1></div>
                                        <p className='mt-3 text-gray-500 font-sans'>{desc}</p>
                                        <button className='border-1 absolute bottom-0 text-center ml-3 hover:bg-gray-300  mb-2 p-3 rounded'><Link to='https://google.com'>Configure</Link></button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <button className='bg-blue-500 w-25 p-3 text-white cursor-pointer rounded ml-85 mt-7 mb-7'>View all</button>
            </section>
    </>
  )
}

export default ItProject
