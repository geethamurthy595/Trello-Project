import React from "react";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

const TemplateSupport = () => {
  // return (
  //   <>
  //   <div>
  //     <h1 className='text-center'>Template Support / Support</h1>
  //     <br />

  //     <img src={support2} alt="" className="h-10 w-10 bg-green-300" />
  //     <h1 className='text-center text-2xl font-medium'>Support Templates</h1>
  //   </div>

  const templates = [
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/d51570519cb019d677ab447b26c4e468/Crmble_Trello_Support.png",
      img1: "https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png",
      title: "A Customer Support solutions by Crmble",
      author: "by tony founder @ Crmble ",
      desc: "Turn your Trello board into a powerfull yet easy to use Customer Support service.",
      stats: "4k @ 27.2k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x253/bd7a184811db6286be20f29ccf99762d/SM_Background.png",
      img1: "https://trello-logos.s3.amazonaws.com/567b3e847939197661d0fe225b3e9bd8/170.png",
      title: "Building A Customer Feedback Program",
      author: "by Survey Monkey",
      desc: "Learn how to build an effective, centralized, and systematic customer feedback program.",
      stats: "7.1k @ 30.4k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/5761448f5c57db5960b8a85443804cff/photo-1474518551598-147ee65f265e.jpg",
      img1: "https://trello-logos.s3.amazonaws.com/c0d70619685df9d1f4b3015a7a5ca935/170.png",
      title: " Customer Success Management",
      author:
        "by Chris Wheeler, EnterPrise Customer Success Manager @ Iterable",
      desc: "This board provides a shared  space for a customer success manager and customer to track details related to software...",
      stats: "10.5k @ 50k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/320x480/c707f6a217a72f2deb21e9c54a5da965/photo-1543076659-9380cdf10613.jpg",
      img1: "https://trello-logos.s3.amazonaws.com/df72be8258742c5626667ace959519e8/170.png",
      title: "Customer Support Knowledge Base ",
      author: "by Lana Panchuk, Marketing Manager @ Future Genetics",
      desc: "Streamlined Communication between Support and the Science System. Support can easily find the information needed...",
      stats: "7k @ 30.4k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/5fbb6d49739d2a09f631295e/480x281/0cb46e62769140f6e256630256e91576/Trello_Support_Board_-_1.png",
      img1: "https://trello-logos.s3.amazonaws.com/cc81cca0d2bad92ebb50f0027d9c0f3e/170.png",
      title: "Customer Support Template",
      author: "by Hipporello team",
      desc: "Manage all Customer relations with nio code, no email client, entirely inside Trello.",
      stats: "2.6k @ 15.2k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/17cce20ab4d960d4b15332fddb08f7f3/shutterstock_120703084.jpg",
      img1: "https://trello-logos.s3.amazonaws.com/c7a2957fd66e37f3a3f03ed4f077d9c9/170.png",
      title: "Enterprise Feature Requests",
      author: "by Kristen Habacht, Head of Enterprise Dev Reps @ Atlassian ",
      desc: "Its important to keep feedback from our clients in a centralised and visible space.",
      stats: "2.6k @ 40.1k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/0c6861b61b1284139869adb487fa6371/photo-1551623063-1f1630813273.jpg",
      img1: "https://trello-logos.s3.amazonaws.com/09fd2a3fd4ec30c95d5eefda446ec51b/170.png",
      title: "Service Desk-Incident Impact Analysis ",
      author: "by Chris Christian, Major Incident Manager @ CSAA",
      desc: "Gather the key data around an incident to address it effectively.",
      stats: "1.2k @ 13.5k",
    },
    {
      img: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/70f2c3e79820b2d4768445bb081d48e6/photo-1484662020986-75935d2ebc66.jpg",
      img1: "https://trello-logos.s3.amazonaws.com/f6db8e71f8ac7e2d888c4775de6cb105/170.png",
      title: "Support Ticket Management",
      author: "by Sam Phelps, IT & Systems Administrator @ Journey",
      desc: "Keep your inbox clean prioritize task that matter by rerouting and managing IT request directly in the Trello support.",
      stats: "13.1k @ 42.2k",
    },
  ];

  return (
    <>
      <div className="p-10 bg-gray-50 min-h-screen  items-baseline-last ">
        <h1 className=" w-50 mb-5">Template Support / Support</h1>
        <div className="flex">
          <img
            src="https://trello.com/assets/9f3513aaef68618f8849.svg"
            alt=""
            className=" "
            height={50}
            width={40}
          />
          <h1 className="text-2xl font-semibold  ml-5  w-70 mb-5 ">
            Support templates
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {templates.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <div className="r-4 relative">
                <img
                  src={item.img}
                  className="w-full h-40 object-cover rounded-lg "
                />
                <div className="w-14 h-14 absolute overflow-hidden -bottom-5 left-2 bg-white rounded-full">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={item.img1}
                    alt=""
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{item.author}</p>

              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

              <p className="mt-3 text-gray-700 font-medium">{item.stats}</p>
            </div>
          ))}
        </div>
        <hr />

        {/* Top hero row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left text column */}
          <div>
            <h1 className="text-2xl md:text-2xl font-semibold mb-6">
              What's Trello?
            </h1>

            <p className="text-medium md:text-medium text-gray-700 leading-relaxed mb-6">
              Trello lets you work more collaboratively and get more done.
              Trello's boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and rewarding way.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/Login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow"
                type="button"
              >
                Sign up - it's free!
              </Link>

              <Link
                to="https://trello.com/"
                className="text-gray-700 underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://trello.com/assets/ea5b895d726e6dc287da.svg"
              alt=""
              className="w-70 h-70 max-w-md object-contain mr-50"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200" />

        {/* Bottom descriptive row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-200">
          <p className="text-gray-700 leading-relaxed md:flex-1 text-xs ">
            Improve your team's customer support workflow with templates to
            collect feedback and build knowledge bases. Customer <br /> service
            is all about speaking with customers, understanding their pain
            points, and guiding them through issues to foster a <br /> healthy
            and loyal user base. With customer support templates, support teams
            can ensure that all customers feel seen and <br /> heard, and other
            teams across the organization have access to user feedback.
          </p>

          <div className="w-28 h-28 shrink-0">
            <img
              src="https://trello.com/assets/f388afee52aebda537df.svg"
              alt="mascot"
              className="w-full h-full mr-150"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateSupport;
