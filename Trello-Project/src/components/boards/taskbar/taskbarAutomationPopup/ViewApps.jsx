import React from 'react'
import { SiJira } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io";
import slack from "../../../../assets/slack.svg"

const ViewApps = () => {
  return (
    <>
      <div className="px-10 py-8">
        <div className=' space-y-5'>
            <h1 className="text-xl md:text-[30px] font-semibold">
            App automations
            </h1>
            <p className='text-[17px]'>Please read &nbsp;
                <a href="#" className="text-blue-600 underline">this help article</a> 
                &nbsp;to learn more about the new app automations!
            </p>
        </div>
        <div className="flex  items-start gap-4 my-6 border  border-gray-300 rounded-lg p-4 bg-white">

      
            {/* Icon */}
            <div className="bg-blue-600 text-white p-3 rounded-md mt-1">
                <SiJira size={20} />
            </div>

            {/* Content */}
            <div className="flex-1 w-215">
                <h3 className="text-xl font-semibold text-gray-900">
                Jira
                </h3>

                <p className="text-sm  text-gray-700 text-[17px]">
                You can connect a Jira account to create or update work items with automation.
                </p>

                <a
                href="#"
                className="inline-block mt-4 text-blue-600 text-sm font-medium underline"
                >
                Connect with Jira
                </a>
            </div>
        </div>
        <div className="flex w-full items-start gap-4 my-6 border border-gray-300 rounded-lg p-4 bg-white">

      
            {/* Icon */}
            <div className="bg-blue-600 text-white p-3 rounded-md mt-1">
                <IoLogoBitbucket size={20} />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                Bitbucket
                </h3>

                <p className="text-sm text-gray-700 text-[17px] ">
               You can connect a Bitbucket account to create or update pull requests with automation.
                </p>

                <a
                href="#"
                className="inline-block mt-4 text-blue-600 text-sm font-medium underline"
                >
                Connect with Bitbucket
                </a>
            </div>
        </div>
        <div className="flex w-full items-start gap-4 my-6 border border-gray-300 rounded-lg p-4 bg-white">

      
            {/* Icon */}
            <div className="bg-white border border-gray-200 text-white p-3 rounded mt-1">
                <img src={slack} alt="Slack" className='w-4 h-4'/>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                Slack
                </h3>

                <p className="text-sm text-gray-700 text-[17px]">
               You can connect a Slack account to post messages in a channel with automation.
                </p>

                <a
                href="#"
                className="inline-block mt-4 text-blue-600 text-sm font-medium underline"
                >
                Connect with Slack
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewApps