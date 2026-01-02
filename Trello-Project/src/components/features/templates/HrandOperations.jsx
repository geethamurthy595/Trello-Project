import React from "react";
import { Link } from "react-router-dom";

const HrandOperations = () => {
  const cards = [
    {
      id: 1,
      title: "Recruiting Pipeline",
      author: "Trello Team",
      description:
        "Manage your recruiting pipeline from anticipated future needs to closed positions.Get a scannable view of your...",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/5cdbed8c95855594c1f87f721f724f87/photo-1460717043596-034762ff5415.jpg",
      image1:
        " https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "64.9K",
      likes: "13.9K",
    },
    {
      id: 2,
      title: "Risk Report",
      author: "by Nicholas Bouchard,content marketer @Unito",
      description:
        "Easily traxk yor projects  potetial risks  and what you're doing to mitigate them.",
      image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x360/e9679053c6e86c23bc36ad354de80f3a/photo-1578054041218-5ee0003926dd.jpg",
      image1 :"https://trello-logos.s3.amazonaws.com/629d2d986dcf14f797466aff0c754f69/170.png",
      views: "9.7K",
      likes: "930",
    },
    {
      id: 3,
      title: "30 60 90 Day Plan Template",
      author: "Atlassian",
      description: "Help your new team members excel in their first 90 days.",
      image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/337x480/45551294db1030efaa3fa755bd01aacc/photo-1486546910464-ec8e45c4a137.jpg",
       image1: "https://trello-logos.s3.amazonaws.com/11e69d07ced16df3e48576a6c2deb0e4/170.png",
      views: "113.3K",
      likes: "23.2K",
    },

    {
        id: 4,
        title:"Government on boarding Process For New Hires",
        author: "by Army Campbell,Project Manager@ Government Bussiness Results,LLC",
        description: " Proper onboarding helps ensure a positive experience for new hires as they get up and running.",
        image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x319/5715f38d33c35ab7bb3a3de174a59f5e/photo-1523635050353-f5b60dafa07c.jpg",
         image1: "https://trello-logos.s3.amazonaws.com/f95a0e88f1ff0af3c64fc8dfedde3b20/170.png",
        views: "23.3K",
        likes: "4.7K",
      },
      {
        id: 5,
        title:"Employee Manual",
        author: "by Trello Team",
        description: "Get your new hires up and running with this simple employee manual!",
        image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/08b5996b0a87a0f3dd80af488d99194a/photo-1495571758719-6ec1e876d6ae.jpg",
         image1: "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
        views: "165.2K",
        likes: "17.6K",
      },
      {
        id: 6,
        title:"A Hiring & Recruiting board by Crmble",
        author: "by Toni,Founder @ Crmble",
        description: " A template with Power-Ups to help with hiring  and recuiriting.",
        image: "https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/af007a3eb49c49473ae90effc7d02b96/Crmble_Trello_Hiring-and-recruiting.png",
         image1: "https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png",
        views: "38.1K",
        likes: "10.1K",
      },
      {
        id: 7,
        title:" Agile Talent Acquisition",
        author: "by Agile PeopleOps",
        description: "An Agile approach to hiring and recruiting.",
        image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/66e87537a601b2efae3adc40c484c624/photo-1586964484161-648499ad1a19.jpg ",
         image1: " https://trello-logos.s3.amazonaws.com/ad6211ad0e4b7bd1978cb99719e5224e/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 8,
        title:"HR Team Learning Tracker",
        author: "by GrandHyatt",
        description: "A Shared resource for the HR team to keep track of all the courses they have completed",
        image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x339/70ed9339edecf132d1372a6849ef249f/photo-1503676260728-1c00da094a0b.jpg ",
         image1: "https://trello-logos.s3.amazonaws.com/043362b37796116d677e735e1a770b4f/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 9,
        title:"Inventory Management Powered by Smart Fields",
        author: "by Vitaly Andrianov,developer @ Smart Fields",
        description: "Keep track of inventory using Smart Fields for quantity,price,value and more.",
        image: "https://trello-backgrounds.s3.amazonaws.com/5423102a85612209a94bcde8/480x270/6e9bb21180be97c2059832d108fb5790/Inventory_Full_HD.jpg ",
         image1: "https://trello-logos.s3.amazonaws.com/cff1a2fee0272a90a277f880393024c3/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 10,
        title:"Job Hunt",
        author: "by Daniel Acompado,Recuiter @Splash Track your applicayions and the stage you're at with each company you've applied to!",
        description: "Help your new team members excel in their first 90 days.",
        image: " https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x321/0ace5a43916dc590abb6a2f8bcaa8538/photo-1489392191049-fc10c97e64b6.jpg",
         image1: "https://trello-logos.s3.amazonaws.com/9e37bc7590b319fe4c0ed929644136a8/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 11,
        title:"Onboarding Process For New Hires ",
        author: "by InVision",
        description: "Ensure that every new hire has a meaningful onboarding experience.",
        image: " https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/b448611b2c8a1d84c574a969461e5c55/photo-1486520299386-6d106b22014b.jpg",
         image1: "https://trello-logos.s3.amazonaws.com/eb16ec4292690ffeaa99965c827e1d19/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 12,
        title:"Post A Job[Hiring Process]",
        author: " Indeed",
        description: "Keep your Indeed job postings organized and hire the best candidates possible.",
        image: "https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x288/82c3f671d9e9190221f5a0f366fcbf7e/Indeed_BG_Blue.png",
         image1: "https://trello-logos.s3.amazonaws.com/ce5c24d50eef5a5b19304fb92de3f934/170.png",
        views: "18.8K",
        likes: "4K",
      },
      {
        id: 13,
        title:"Wellbeing Discussion Template",
        author: "by David Ostberg,Dir.of People Science@ culture Amp",
        description: "Gauge the wellbeing of your team on a consistent basis with retrospective and ideation sessions.",
        image: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x337/f6150d112f3fee6f013bd23a080282f8/photo-1537136102161-ea2262437412.jpg",
         image1: "https://trello-logos.s3.amazonaws.com/5d224c94b4773345c22e5731a5b8a2c3/170.png",
        views: "18.8K",
        likes: "4K",
      },
      
      
      
        

  ];

  return (
    <>
      <div className=" h-750 w-300">
        <div className="flex ">
          <a className="hover:underline" href="https://trello.com/templates">
            Template gallery
          </a>
          &nbsp;&nbsp;&nbsp;
          <h1>/</h1>&nbsp;&nbsp;&nbsp;
          <a
            className="hover:underline"
            href="https://trello.com/templates/operations-hr"
          >
            HR & Operations
          </a>
        </div>
        <br />
        <br />
        <div className="flex">
          <img
            className="h-15 rounded-2xl"
            src="https://trello.com/assets/381fb9e3951c043652a1.svg"
            alt=""
          />
          <h1 className="font-bold text-2xl mt-2 ml-2 text-gray-900">
            HR & Operations templates
          </h1>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-md w-full h-40 object-cover"
              />
<div className="h-15 w-15 bg-white rounded-2xl ">
  <div className="h-12 w-12 bg-gray-200 rounded-2xl ">
  <div className="bg-gray-200 rounded-2xl -mt-11 h-15 w-15"> <img  className="h-15 -mt-5 rounded-3xl" src={card.image1} alt="" /></div>
  </div>
</div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {card.author}</p>
                <p className="text-gray-700 text-sm">{card.description}</p>
                <div className="flex  text-sm text-gray-500 mt-3">
                  <span className="flex">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
                      alt=""
                    />
                    {card.likes}
                  </span>
                  <span className="flex">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                      alt=""
                    />
                    {card.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-230  text-gray-400 ml-5" />
    <div className="font-sans text-gray-800">
      
      <section className="flex flex-col -ml-13 md:flex-row items-center justify-between px-8 md:px-24 py-16">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">What's Trello?</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Trello lets you work more collaboratively and get more done. 
            Trello’s boards, lists, and cards enable you to organize and 
            prioritize your projects in a fun, flexible, and rewarding way.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Login"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign up – it's free!
            </a>
            <Link to="/trello.com" 
              href="#"
              className="underline font-semibold text-gray-500 hover:underline"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://trello.com/assets/ea5b895d726e6dc287da.svg"
            alt=""
            className="w-96 max-w-full"
          />
        </div>
      </section>
  <hr className="w-250 text-gray-400"/>
    
      <section className=" px-8 md:px-24 py-10">
        <p className="text-gray-700  h-50 w-200 -ml-20 leading-relaxed">
          HR and Operations teams are at the heart of any strong business. 
          Ensure the healthy development of employees and the company as a 
          whole with these HR templates for team onboarding, new hire manuals, 
          company culture manifestos, and more. Repeat tried-and-true processes 
          easily with Trello HR templates, so you can focus on what matters 
          most: fostering a great place to work.
        </p>
<img className="h-30 ml-190 -mt-50" src="https://trello.com/assets/381fb9e3951c043652a1.svg" alt="" />
      </section>
    </div>

      </div>
    </>
  );
};

export default HrandOperations;
