import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
const Community = () => {
  return (
    <>
      <section className='bg-[#2b2c2f] p-4 rounded text-amber-50 mt-5 '>
        <div>
            <h1 className=' hover:bg-[#3a3b3f] p-2 cursor-pointer'> Share your thoughts on Trello </h1>
            <Link to='https://community.atlassian.com/forums/Trello/ct-p/trello' className='flex hover:bg-[#3a3b3f] p-2 cursor-pointer'>Ask the community <MdArrowOutward className='ml-14 mt-1'/></Link>
        </div>
      </section>
    </>
  )
}

export default Community
