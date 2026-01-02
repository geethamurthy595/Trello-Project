import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import NavBar from '../NavBar';
import UniversalFooter from '../UniversalFooter';
import CompanyLogo from '../../assets/CompanyLogo';

const PowerUps = () => {

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
        <>
            <NavBar />
            <section className='w-full sticky  flex bg-[#1F1F21] text-[#BFC1C4] h-[100vh]'>
                <nav className=' w-[550px]  py-4 pr-5 pl-[150px] '>
                    <div className='relative mb-2'>
                        <input className='border border-gray-100 rounded py-2 px-4 w-full' type="text" name='findPowerUP' placeholder='Find Power-Up' />
                        <IoSearchSharp className='absolute top-3 text-xl right-2' />
                    </div>

                    <div className='flex items-center gap-1 text-[#669DF1] p-1 rounded mb-2 bg-[#1C2B42] cursor-pointer'>
                        <FaRegStar className=' text-xl left-2' />
                        <p className='w-full font-semibold  m-0 p-0'>Featured</p>
                    </div>

                    <div className='flex items-center gap-1 p-1 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z" fill="currentColor"></path><path d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z" fill="currentColor"></path></svg>
                        <p className='w-full font-semibold  m-0 p-0'>View all</p>
                    </div>
                    <div className='flex items-center gap-1 p-1  hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                        <p className='w-full font-semibold  m-0 p-0'>Featured</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Analytics & reporting</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Automation</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Board utilities</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Communication & <br />collaboration</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Developer tools</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>File management</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>HR & operations</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>IT & project management</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Marketing & social media</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className='w-full font-semibold  m-0 p-0'>Product & design</p>
                    </div>
                    <div className='flex items-center gap-1 py-1 pl-8 hover:bg-[#2B2C2F] rounded mb-2 cursor-pointer'>
                        <p className=' w-full font-semibold  m-0 p-0'>Sales & support</p>
                    </div>
                    <p className='text-xs py-1 pl-8'>Looking for browser extensions, add-ons, and more?<span className='text-[#669DF1] underline cursor-pointer'>Check out our <br /> integrations</span></p>
                    <p className='text-xs py-1 pl-8'>You can build Power-Ups for millions of people who use Trello, or build a private custom Power-Up for your team or company. <span className='text-[#669DF1] underline cursor-pointer' >Learn how here.</span></p>

                </nav>
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
            </section>
            <footer className='bg-[#1F1F21] items-center w-full h-[100px] text-[#BFC1C4]'>
                <div className='flex gap-2 items-center justify-center pt-10'>
                    <p>Templates</p>
                    <p>Pricing</p>
                    <p>AppsJobs</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>About</p>
                    <p>Help</p>
                    <p>Legal</p>
                    <p>Privacy</p>
                    <p>Integrations</p>
                    <p>Contact us</p>
                    <p>Terms</p>
                </div>
                <div className=' bg-[#1F1F21] pb-20 flex items-center gap-3 justify-center'>
                    <p><CompanyLogo/></p>
                    <p>© Copyright 2025. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default PowerUps
