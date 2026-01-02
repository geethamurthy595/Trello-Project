import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import HelpNavbar from '../resources/help/HelpNavbar';


const Makeasuggestion = () => {
  return (

    <>
      <HelpNavbar />
      <div className='flex font-sans gap-10 w-[100%] text-[14px] '>
        <div id="left" className='ml-40 mt-10 w-200 '>
          <div className='flex gap-8'>
            <HiOutlineMenuAlt2 className='h-6 w-6 bg-gray-300 rounded' />
            <p>
              <a className='text-gray-500 font-medium' href="">Atlassian Support/</a>
              <a className='text-gray-500 font-medium' href="">Trello/</a>
              <a className='text-gray-500 font-medium' href="">Resources/</a>
              <a className='text-gray-500 font-medium' href="">Troubleshooting/</a>
              <a className='text-gray-500 font-medium' href="">Submit a bug or improvement request</a>
            </p></div>

          <h3 className='text-3xl font-sans font-medium mt-10 mb-7'>Submit a feature request for Trello</h3>
          <p>Do you have an idea for a cool new feature of Trello that you think could be the Next Big Thing™? This guide is here to help you understand how we keep track of feature requests as well as how to submit new ones.</p>
          <h4 className='text-2xl font-medium mt-8 mb-3'>Workarounds</h4>
          <p>The idea you have may not exist in Trello, but there might be a workaround out there already. Try searching for your feature in our <a href="" className='text-blue-500 hover:underline'>Trello support documentation</a> and <a href="" className='text-blue-500 hover:underline'>Trello Community.</a> What you want may already be solved.</p>
          <h4 className='text-2xl font-medium mt-8 mb-3' >How we decide on new features</h4>
          <p>We want Trello to be awesome. Sometimes this means not working on one thing so we can work on something else that's more important <a href="" className='text-blue-500 hover:underline'> Check out our public roadmap</a> and <a href="" className='text-blue-500 hover:underline'> Trello Community </a>articles.</p><br />
          <p>Deciding what's important isn't easy. Here's how we do it:</p>
          <ul className='list-disc'>
            <li>Review the ideas submitted to us. This allows us to identify common themes and areas that need improvement.</li>
            <li>Review customer communication via <a href="" className='text-blue-500 hover:underline'>Feature Suggestions</a>, community feedback, and direct product feedback that raise common themes and excellent ideas to the team.</li>
            <li>We have an internal Trello Development board that we use to discuss features among the team and decide who will work on them.</li>
            <li>Members of the various teams within Trello meet regularly to discuss the overall direction of Trello and what features will help move us in the right direction.</li>
          </ul>
          <p>We want to be careful to add the right features to Trello so that it remains an app that you love. <a href="" className='text-blue-500 hover:underline'>This Trello blog article gives even more detail about we act on your requests</a></p>
          <h4 className='text-2xl font-medium mt-8 mb-3'>Submitting a new feature idea</h4>
          <p>Right now, Trello’s team is focused on working on a few large-scale priorities for the app itself—these are big changes that take a lot of time to put together. That means that for right now, our short-term roadmap is oriented towards taking the steps we need to take to be in a good place to push those changes. <br />
            That said, if you have a feature you would love to see in Trello, we’d be happy to hear it! Just know that we may not be able to work on it right away—or ever, if it turns out that it doesn’t line up with our big-picture goals for the app. For those big-picture feature requests and ideas, feel free to contact us via the Contact Support form in our Trello Community.</p>
          <h4>What we’ve shipped</h4>
          <p>Check out our public roadmap and community posts to look back at the updates and new features we've shipped over <br /> time:</p>
          <ul className=' list-disc pl-6 marker:text-black'>
            <li className='text-blue-500 hover:underline'>Trello Blog:Product</li>
            <li className='text-blue-500 hover:underline'>Trello Community</li>
            <li className='text-blue-500 hover:underline'>Trello Roadmap</li>
            <li className='text-blue-500 hover:underline'>Trello Future Suggestions</li>
          </ul>
          <h4 className='text-[20px] font-medium mt-8 mb-3'>Also See</h4>
          <ul className='list-disc'>
            <li className=' marker:text-black text-blue-500 hover:underline mb-5'>Reporting Trello Project</li>
          </ul>
          <div className='flex gap-3 '>
            <p className='font-bold'>Was this helpful?</p>
            <div className='flex gap-1'>
              <button className='h-8 w-10 bg-gray-300 rounded'>Yes</button>
              <button className='h-8 w-10 bg-gray-300 rounded'>No</button>
            </div>
            <a href="" className='text-blue-500 hover:underline'>Provide feedback about this article</a>
          </div>
          <div className='w-80 h-35 border-1 pl-3 pt-3 rounded mt-15 border-gray-300'>
            <p className='font-bold'>Still need help?</p>
            <p className='text-[14px]'>The Atlassian Community is here for you.</p>
            <button className=' mt-5  rounded-3xl bg-emerald-500 font-bold border-2 pt-2 pb-2 pl-4 pr-4 w-46'>Ask the Community</button>
          </div>

        </div>
        <div id="right" className='mt-42 flex flex-col gap-10' >
          <div className='flex flex-col gap-5'>
            <h4 className=' font-medium  text-gray-600' >Submit s bug or improvement request </h4>
            <p><a className='text-blue-500 hover:underline' href="">report a trello bug</a></p>
            <ul className='list-disc marker:text-blue-500'>
              <li className='text-blue-500'>Submit a feature request for Trello</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h4 className=' font-medium text-gray-600' >On this page</h4>
            <a className='text-blue-500 hover:underline' href="">Workarounds</a>
            <a className='text-blue-500 hover:underline' href="">How we decide on new features</a>
            <a className='text-blue-500 hover:underline' href="">Submitting a new feature idea</a>
            <a className='text-blue-500 hover:underline' href="">What we’ve shipped</a>
            <a className='text-blue-500 hover:underline' href="">See Also</a>
          </div>

          <div>
            <h4 className=' font-medium  text-gray-600 mb-3'>Community</h4>
            <a href="" className='text-blue-500 hover:underline'>Questions, discussions, and articles</a>
          </div>

        </div>
        <div>

        </div>
      </div>
      <div className=' bg-gray-100 w-[100%]  h-30 flex justify-around mt-10 '>
        <img className='w-30 justify-around' src="https://images.ctfassets.net/zsv3d0ugroxu/2sOh4sF3DSm8Qy8GigKK0S/1c7619d9db378c5ee902d8eeb8fde65b/atlassian-logo-footer.svg" alt="" />
        <div className='flex gap-10 mt-10 text-gray-500 font-medium'>
          <a href="">Accessibility</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Security</a>
          <a href="">@2025 Atlassian</a>
        </div>
      </div>
    </>
  )
}
export default Makeasuggestion