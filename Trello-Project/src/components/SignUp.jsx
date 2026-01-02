import React from 'react'
import Logo from '../assets/Logo'
import { Link } from 'react-router-dom'
import CompanyLogo from '../assets/CompanyLogo';

const SignUp = () => {
  return (
    <>
      <div className='flex relative'>
        <img className='fixed bottom-0' height={400} src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg " width={400} alt="" />
        <section className='w-full h-[100vh] flex items-center justify-center '>
          <form action="" className='border border-gray-300 p-15 rounded-xl shadow text-center'>
            <Logo /><br />
            <h1 className='font-bold'>Sign up to continue</h1>
            {/* <label htmlFor="email" className='float-left text-gray-600'>Email <i className='text-red-600'>*</i></label><br /> */}
            <input className='border border-gray-400 my-2 x w-full p-3 rounded has-focus:border-blue-600' type="text" name='email' placeholder='Enter your email' /><br /><br />
            <div className='pl-2  gap-2'>
              <p className='text-xs'>By signing up, I accept the Atlassian <span className='underline text-blue-600'>Cloud Terms of <br /> Service</span> and acknowledge the <span className='text-blue-500 underline'>Privacy Policy</span>.</p>
            </div>
            <button className='w-full bg-blue-600 p-3 text-white rounded mt-3'>Sign up</button>
            <p className='text-gray-600 my-4'>Or continue with:</p>
            <button className='border w-full rounded  my-1 px-3 py-2 flex justify-center gap-3'> <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg" width={20} alt="" />Google</button>
            <button className='border w-full rounded  my-1 px-3 py-2 flex justify-center gap-3'><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/microsoft-logo.c73d8dca.svg" width={20} alt="" /> Microsoft</button>
            <button className='border w-full rounded  my-1 px-3 py-2 flex justify-center gap-3'> <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg" width={20} alt="" />Apple</button>
            <button className='border w-full rounded  my-1 px-3 py-2 flex justify-center gap-3'> <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg" width={20} alt="" />Slack</button>
            <div className='flex justify-center gap-1 py-2 text-blue-700'>
              <p className='hover:underline'>Already have an Atlassian account?</p>
              <Link to="/login" className='hover:underline'>Log in</Link>
            </div>
            <hr />
            <CompanyLogo />
            <p className='text-xs'>One account for Trello, Jira, Confluence and <span className='text-blue-700'>more</span>.</p>
            <p className='text-xs'><span className='text-blue-600 underline'>Privacy Policy</span> • <span className='text-blue-500 underline'>User Notice</span>.</p>
            <p className='text-xs'>This site is protected by reCAPTCHA and the Google <span className='text-blue-600 underline'>Privacy</span> <br /> <span className='text-blue-600 underline'>Policy</span>  and  <span className='text-blue-600 underline'>Terms of Service</span> apply.</p>
          </form>
        </section>
        <img className='bottom-0 right-0 fixed' src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.e6e102c7.svg" width={400} alt="" />
      </div>
    </>
  )
}

export default SignUp
