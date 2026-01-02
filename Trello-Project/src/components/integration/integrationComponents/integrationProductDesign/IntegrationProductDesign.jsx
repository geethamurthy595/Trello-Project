import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const IntegrationProductDesign = () => {
    const data = [
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/44s0xrhsQ2AeNuh2vbpBC1/4b8f60498d82cdb4b3d795ed8a374d88/Burndown-forTrello.png",
            title: "Burndown for Trello",
            desc: "Create and view Burndown charts for your Trello Boards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/1oNnyCpwpd6BfN76kyi4cH/95795094c8120532b6005511b46098ba/Corello.png",
            title: "Corrello",
            desc: "A high-level view dashboard for agile teams on Trello."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/5KywsvpebDSsbnQoZvGCGF/b90a842170d0c8a33a29885e716667d0/Cloud_App.png",
            title: "CloudApp",
            desc: "Attach screen recordings, GIFs, annotated screenshots, files and more to your cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/6X40HyjmLjSq7N3RWvq0Fo/38e8d9488044dafec3d91f7374d367cc/Profile_logo.png",
            title: "Bug Reports by Dummi",
            desc: "Dummi makes bug reporting effortless. Capture video replays, screenshots, and technical details in one click, then send developer-ready reports directly to Trello. No guesswork, no back-and-forth—just clear, fast bug reports."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3yYFgNYdo9nXAbRF43niB5/f99f2f0f2fa71d54e1fab950f9e727ed/StoriesOnBoard.png",
            title: "StoriesOnBoard",
            desc: "Integrate Trello with user story mapping software."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3Q3Q0pMBw9Qd8KvmwHpd6r/ffaa5b40621bf9f7ff2b58abeb57a230/Rollbar.png",
            title: "Rollbar",
            desc: "Enables teams to link a Rollbar error directly to Trello cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/6Wn6oDnmnS7t4XCKemABxP/1b3b7dbf6cd5c4c4bfff087e1e9b1a9d/SureTriggers.png",
            title: "SureTriggers",
            desc: "SureTriggers allows custom triggers & actions for Trello, like moving/creating cards based on triggers. Real-time sync keeps boards updated. Integrate to streamline workflows, save time & focus on critical tasks."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/6Wn6oDnmnS7t4XCKemABxP/1b3b7dbf6cd5c4c4bfff087e1e9b1a9d/SureTriggers.png",
            title: "Jell",
            desc: "Link to Trello cards from your daily standups."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/4sQs6uG0c8R9zfW7FuvkTA/909218367e02312dfc2541800d3fa171/Feedback_Rig.png",
            title: "FeedbackRig",
            desc: "AI-powered feedback system that converts user feedback into Trello cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/K3MEKDbf7AGYb0Sfn4i3p/d42f615b768a4d1a9b2df133c06dcd8f/UserSnap.png",
            title: "Usersnap",
            desc: "Screenshots and bug reports attached directly to your Trello cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/6ciJIbgl6GbCDd1L7Eul3l/06eae419eeeaab1be97ba87ab7a67b94/Marker.io.png",
            title: "Marker",
            desc: "Annotate screenshots and send feedback to Trello in one click."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3YuEBL2cblYppWg8VDYmjG/abb80f337fd2b5ffc1cb8ecbc05c1284/ProdPad.png",
            title: "ProdPad",
            desc: "Push product specs to Trello and track status changes."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3YuEBL2cblYppWg8VDYmjG/abb80f337fd2b5ffc1cb8ecbc05c1284/ProdPad.png",
            title: "Roblox",
            desc: "Use the Trello API within Roblox."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3YuEBL2cblYppWg8VDYmjG/abb80f337fd2b5ffc1cb8ecbc05c1284/ProdPad.png",
            title: "Agile Tools",
            desc: "FREE Story Points and WIP Limits with complete Corrello Agile Dashboard integration."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/6d929WzHg9z8YBVfdf5UQ1/702ce0cd6cb2a2126c3a902d2680a8c7/WireframePro.png",
            title: "WireframePro",
            desc: "Quickly draw wireframes and attach them to your Trello cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/7yyi6VU7jUb1ZQhEVaSJIO/18adaa82662f99104ab4bb640a489ccf/trello-icon.png",
            title: "Capture.dev",
            desc: "Send feedback and bug reports from your website to Trello. Complete with all the context developers need, captured in a click."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/1V2VUrgQLhhUj822wpMbHh/cf2262f2146fb34b11e59e9c25821fba/Glidr.png",
            title: "GLIDR",
            desc: "Send Ideas from GLIDR to Trello with product definitions and linked Evidence."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/37d5CClXK08fmF9c73fnGf/611628e1cb1a06ea92cf5d4a7c1e435f/Capture-forTrello.png",
            title: "Capture for Trello",
            desc: "Take screenshots and add them to Trello cards in seconds."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/37d5CClXK08fmF9c73fnGf/611628e1cb1a06ea92cf5d4a7c1e435f/Capture-forTrello.png",
            title: "Aha!",
            desc: "Sync product plans in Aha! with Trello boards and cards."
        },
        {
            img: "https://images.ctfassets.net/rz1oowkt5gyp/3SBtCmH2SemCD8a6f7ZIMR/bd5031529bece904f793f546e4d89fe1/10b3ca26-b9ee-4ba6-8ed6-add17d93f5d2.png",
            title: "BugHerd",
            desc: "Integrate Trello with BugHerd for complete website project management BugHerd integrates directly with Trello, making it easy to give feedback and report bugs on websites without having to change the way your team works. It’s the best of both worlds."
        }
    ];


    return (
        <>
            <section className='p-4 w-350  '>
                <h1 className='text-2xl font-semibold'>Product & design (20)</h1>

                <div className='flex flex-wrap gap-4 '>
                    {
                        data.map(({ img, title, desc }) => {
                            return (
                                <>
                                    <motion.div
                                    animate={{ scale: 1}}
                                    initial={{ scale: 0}}
                                    transition={{ duration: 0.2 }}
                                    className='p-4 bg-gray-50  shadow-2xl relative h-100 w-60'>
                                        <div className='flex'><img src={img} alt="" className='h-10 w-10' />
                                            <h1 className='ml-3 text-xl font-semibold '>{title}</h1></div>
                                        <p className='mt-3 text-gray-500 font-sans'>{desc}</p>
                                        <button className='border-1 absolute bottom-0 text-center ml-3 hover:bg-gray-300  mb-2 p-3 rounded'><Link to='https://google.com'>Configure</Link></button>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default IntegrationProductDesign
