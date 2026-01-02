import React from 'react'
import MsgtoActionLines from '../assets/msgtoActionLines'
import MsgtoActionCalender from '../assets/msgtoActionCalender'

const MsgtoAction = () => {
    return (
        <>
            <section className='bg-[rgb(0,101,255)] font-sans px-[200px] flex flex-col items-center h-[1010px]'>              
                <h1 className='text-4xl font-bold text-white pt-15'>From message to action</h1>
                <p className='text-xl text-white m-3 text-center'>Quickly turn communication from your favorite apps into to-dos, keeping all <br /> your discussions and tasks organized in one place.</p>
                <div className='mt-15 bg-white w-full h-auto p-10 flex justify-center items-center gap-10 rounded-xl shadow-2xl'>
                    <img width={600} src="https://images.ctfassets.net/rz1oowkt5gyp/2QvggeQ9nzUdaDnhJCSUwA/3ef97067e1aa3d0a5e6a04b5780fd751/email-todos.png?w=1110&fm=webp" alt="inbox@trello" />
                    <div>
                        <h1 className='flex items-center gap-3 font-medium'><MsgtoActionLines /> EMAIL MAGIC</h1>
                        <p className='text-xl'>Easily turn your emails into to-dos! Just <br /> forward them to your Trello Inbox, and <br /> they’ll be transformed by Atlassian <br /> Intelligence (AI) into organized to-dos <br /> with all the links you need.</p>
                    </div>
                </div>
                <div className='mt-15 bg-white w-full h-auto p-10 flex justify-center items-center gap-10 rounded-xl shadow-2xl'>
                    <div>
                        <h1 className='flex items-center gap-3 font-medium'><MsgtoActionCalender />MESSAGE APP SORCERY</h1>
                        <p className='text-xl mt-2'>Need to follow up on a message from Slack or Microsoft Teams? Send it directly to your Trello board! Your favorite app interface lets you save messages that appear in your Trello Inbox with AI-generated summaries and links.</p>
                    </div>
                    <img width={600} src="https://images.ctfassets.net/rz1oowkt5gyp/3r1BvsfEsj4THe6YwpBOVy/2b1befa1e5e3522a2b0daae0dd3f3de0/slackteams-to-inbox.png?w=1110&fm=webp" alt="inbox@trello" />
                </div>
            </section>
        </>
    )
}

export default MsgtoAction
