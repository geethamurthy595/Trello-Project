import React from 'react'

const Featured = () => {
    const powerUpCards = [
        {
            name: 'Reorder(able) Labels',
            imgurl: "https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/683ec582447a77eafb9ad521/hero-images/@2x.png",
            titleLogo: "https://extended-labels-trello-powerup.vercel.app/reorderable-labels-icon.png",
            action: 'Add',
            description: 'Enables you to reorder your labels or replace a label with another on all cards',
            installs: '500+',
        },
        {
            name: 'Excelefy (Trello Import/Export via Excel/CSV)',
            imgurl: 'https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/657747ad4e8996a85c1630f2/hero-images/@2x.png',
            titleLogo: "https://excelefy.d1hgvjm9dk1ut.amplifyapp.com/icons/excelefy/excel.svg",
            action: 'Add',
            description: 'Easily export and import your board cards to Excel and CSV.',
            installs: '10,000+',
        },
        {
            name: 'Spread2Board by Ezy PowerUps (Import xlsx and csv)',
            imgurl: "https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/66467504c92b1e5af7bc10ae/hero-images/@2x.jpeg",
            titleLogo: "https://ezyimport.ezypowerups.com.br/img/logo144x144px.png",
            action: 'Add',
            description: 'Transform your spreadsheets into pure productivity on Trello with Spread2Board by Ezy PowerUps!',
            installs: '1,000+',
        },
        {
            imgurl: "https://plugin.trello.services/images/amazing-fields@2x.png",
            titleLogo: "https://www.amazingpowerups.com/images/trello/amazing_fields_icon.svg",
            name: 'Amazing Fields',
            action: 'Add',
            description: '❤️ User Favorite: Use extra card data with spreadsheet formulas, formatting, styling, custom fields, and everything you need.',
            installs: '250,000+',
        },
        {
            imgurl: "https://plugin.trello.services/images/time-in-list@2x.png",
            titleLogo: "https://app.timeinlist.com/public/images/logos/logo_square.png",
            name: 'Time in List by Blue Cat',
            action: 'Add',
            description: 'Time in List shows how long cards have been in their current list ⏱️ and how long they spent in all lists they touched 📅',
            installs: '50,000+',
        },
        {
            imgurl: "https://plugin.trello.services/images/crmble2@2x.png",
            titleLogo: "https://crmble.com/trello/wp-content/uploads/2023/11/crmble-muffin-app-bg.svg",
            name: 'Crmble',
            action: 'Add',
            description: 'Gestiona la relación con tus clientes mediante la integración de correo electrónico y enlace de Whatsapp para cerrar más tratos',
            installs: '50,000+',
        },
        {
            imgurl: "https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/5891fb349b7dd69d721164f7/hero-images/@2x.png",
            titleLogo: "https://unito.io/wp-content/uploads/2020/01/Unito-avatar-white-symbol.svg",
            name: 'Asana + Trello 2-Way Sync',
            action: 'Add',
            description: 'Sync Trello cards and Asana tasks with real-time two-way updates using this powerful integration',
            installs: '10,000+',
        },
        {
            imgurl: "https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/6244a5a256399f22036820cb/hero-images/@2x.png",
            titleLogo: "https://app.carddone.thundermodules.com/images/logo.svg",
            name: 'Card Done',
            action: 'Add',
            description: '✅ One button to finish your Trello cards! Includes due date automation and more ⚡️',
            installs: '50,000+',
        },
        {
            imgurl: "https://trello-server--pup-assets.us-east-1.prod.public.atl-paas.net/58bd1f9aca72f48c8900574f/hero-images/@2x.png",
            titleLogo: "https://bit.ly/3hbJUQE",
            name: 'Calendar, Timeline, Time Tracking by Planyway',
            action: 'Add',
            description: 'Multi-Board Views, Google Calendar Sync, Recurring Tasks, Gantt-Style Roadmaps, Dependencies, and More',
            installs: '250,000+',
        },
    ];

    const trelloIntegrations = [
        {
            imgurl: "https://integrations.trello.services/images/gmail-hero.svg",
            titleLogo: "https://plugin.trello.services/images/gmail-icon.svg",
            name: 'Gmail',
            action: 'Configure',
            description: 'Quickly create new cards on your Trello board without leaving your Gmail Inbox.',
            linkText: '🔗 Integration'
        },
        {
            imgurl: "https://integrations.trello.services/images/ms-teams@2x.png",
            titleLogo: "https://integrations.trello.services/images/ms-teams-icon.svg",
            name: 'Microsoft Teams',
            action: 'Configure',
            description: 'Link Trello to Microsoft Teams to see your Trello boards, notifications, and more in Microsoft Teams.',
            linkText: '🔗 Integration'
        },
    ];

    const essentialPowerUps = [
        {
            imgurl: "https://plugin.trello.services/images/google-drive@2x.jpg",
            titleLogo: "https://google-drive.trello.services/images/drive.png",
            name: 'Google Drive',
            action: 'Add',
            description: 'Access your Drive files for a project directly from its card, or create and attach new Drive files to a card.',
            installs: '2,000,000+',
            tag: null,
        },
        {
            imgurl: "https://plugin.trello.services/images/list-limits@2x.jpg",
            titleLogo: "https://list-limits.trello.services/images/list-limits.svg",
            name: 'List Limits',
            action: 'Add',
            description: 'Set a limit on your lists to highlight them if the number of cards in it passes the limit.',
            installs: '1,000,000+',
            tag: null,
        },
        {
            imgurl: "https://plugin.trello.services/images/readme@2x.png",
            titleLogo: "https://readme.trello.services/images/icon.png",
            name: 'Read Me',
            action: 'Add',
            description: 'Write a "Read Me" for your board in Markdown! 📝',
            installs: '100,000+',
            tag: null,
        },
        {
            imgurl: "https://plugin.trello.services/images/slack@2x.jpg",
            titleLogo: "https://pi-cdn.atl-paas.net/trello-slack/slack-logo-power-up-listing.svg",
            name: 'Slack',
            action: 'Add',
            description: 'Connect your communication and collaboration apps so that no ideas or tasks fall through the cracks.',
            installs: '1,000,000+',
            tag: null,
        },
        {
            imgurl: "https://plugin.trello.services/images/voting@2x.jpg",
            titleLogo: "ttps://voting.trello.services/images/voting-icon.svg",
            name: 'Voting',
            action: 'Add',
            description: 'Give power to the people, and allow users to vote on cards.',
            installs: '500,000+',
            tag: '❤️ Staff pick',
        },
    ];

  return (
    <section className=' w-full overflow-y-scroll scroll-smooth ml-1 pt-10 pr-[160px]'>
                    <div className={`text-center rounded bg-contain bg-no-repeat py-18 px-[160px] shadow-2xl bg-[url(https://trello.com/assets/260b9c5f78bd43739ef9.png)]`}>
                        <h1 className='text-5xl font-bold mb-7'>Power-Ups for Trello</h1>
                        <p>Calendars, Voting, Repeating Cards and so much more with integrations like Jira, Slack, Google Drive, InVision - get your Trello superpowers now!</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold py-3'>Featured Power-Ups</h1>
                        <div className='grid grid-cols-3 gap-2 '>
                            {
                                powerUpCards?.map((card, index) => (
                                    <div key={index} className='w-[300px] h-[450px] bg-[#18191A]  rounded-xl '>
                                        <img src={card.imgurl} className='rounded-t-xl' width={400} alt="" />
                                        <div className='px-3'>
                                            <div className='flex py-2 items-center gap-3'>
                                                <img className='w-[40px] h-[40px] m-1' src={card.titleLogo} width={30} alt="" />
                                                <h1 className='font-bold line-clamp-2' >{card.name}</h1>
                                            </div>
                                            <button className='px-5 ml-2 rounded bg-blue-400 text-black'>{card.action}</button>
                                            <p className='pl-2 line-clamp-2'>{card.description}</p>
                                            <p className='flex pl-2 pt-7 gap-2 items-center text-xs' >
                                                <svg width="21" height="21" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                                                {card.installs}</p>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold py-3'>Trello Integrations</h1>
                        <div className='grid grid-cols-3 gap-2 '>
                            {
                                trelloIntegrations?.map((card, index) => (
                                    <div key={index} className='w-[300px] h-[450px] bg-[#18191A]  rounded-xl '>
                                        <img src={card.imgurl} className='rounded-t-xl' width={400} alt="" />
                                        <div className='px-3'>
                                            <div className='flex py-2 items-center gap-3'>
                                                <img className='w-[40px] h-[40px] m-1' src={card.titleLogo} width={30} alt="" />
                                                <h1 className='font-bold line-clamp-2' >{card.name}</h1>
                                            </div>
                                            <button className='px-3 ml-2 rounded bg-blue-400 text-black'>{card.action}</button>
                                            <p className='pl-2 line-clamp-2'>{card.description}</p>
                                            <p className='flex pl-2 pt-7 gap-2 items-center text-xs' >
                                                {card.linkText}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold py-3'>Essential Power-Ups</h1>
                        <div className='grid grid-cols-3 gap-2 '>
                            {
                                essentialPowerUps?.map((card, index) => (
                                    <div key={index} className='w-[300px] h-[450px] bg-[#18191A]  rounded-xl '>
                                        <img src={card.imgurl} className='rounded-t-xl' width={400} alt="" />
                                        <div className='px-3'>
                                            <div className='flex py-2 items-center gap-3'>
                                                <img className='w-[40px] h-[40px] m-1' src={card.titleLogo} width={30} alt="" />
                                                <h1 className='font-bold line-clamp-2' >{card.name}</h1>
                                            </div>
                                            <button className='px-3 ml-2 rounded bg-blue-400 text-black'>{card.action}</button>
                                            <p className='pl-2 line-clamp-2'>{card.description}</p>
                                            <p className='flex pl-2 pt-7 gap-2 items-center text-xs' >
                                                <svg width="21" height="21" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                                                {card.installs} {card.tag}</p>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </section>
  )
}

export default Featured