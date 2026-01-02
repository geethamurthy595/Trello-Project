import React from "react";
import { Link } from "react-router-dom";

const TeamManagement = () => {
  const cards = [
    {
      id: 1,
      title: "Attlasian 90 day Plan",
      author: "by Natalie Mendes,Brand Content Team Lead @Atlassian",
      description:
        " This is Trello board all new  hires at Atlassian receive during week one to help them connect with everything they need...    ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/5c377e0f9c49971c91515e0d/480x268/ca8b54bd1c6141ec68a6ceb6f662db23/Screen_Shot_2020-10-21_at_8.40.34_PM.png",
      image1:
        " https://trello-logos.s3.amazonaws.com/63686748169e06eae73eb9fc8aa83e51/170.png",
      views: "30.4K",
      likes: "3.7K",
    },
    {
      id: 2,
      title: "Post-Martem Meeting Board",
      author: "by Darren Chait,Co-Founder @ Hugo",
      description:
        " This board help you to celebrate  what worked and learn from what didn't.   ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/551361acb9232341c5431561/480x274/845c483520c595e7b14129fbbef2968a/final_rgb300dpi.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/b2b207f22066c205020ca4151b072487/170.png",
      views: "2.4K",
      likes: "20.3K",
    },
    {
      id: 3,
      title: "New Hire onboarding",
      author: "by Trello Team",
      description:
        " Help new Employees start strong with this onboarding template. ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/e4982f6fdaab05c018747688b167997f/shutterstock_261269042.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "131.3K",
      likes: "18.3K",
    },
    {
      id: 4,
      title: "Team Retrospective with Post-it@+Trello",
      author: "by Andrew C.Hyde ,Marketing Manager @3M",
      description:
        " Help new Employees start strong with this onboarding template. ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/ee1eb3562ef22dc338e5cf00e435bc28/photo-1518349619113-03114f06ac3a.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/425002dbaab5f4eb731833bbe659d477/170.png",
      views: "99.9K",
      likes: "17.4K",
    },
    {
      id: 5,
      title: " Network of Teams",
      author: "by Atlassian  ",
      description: " Map out the teams that are essential for your success. ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/715491a7b89e7e2da76118dcde0faf34/photo-1675367091479-bcac781ff6d6.jpg ",
      image1:
        "https://trello-logos.s3.amazonaws.com/52f8292b0c8bb3258a1d568e41ff603f/170.png",
      views: "5.3K",
      likes: "339",
    },
    {
      id: 6,
      title: "Government Meeting Agenda",
      author: "by Atlassian  ",
      description:
        "by Amy Campbell,Project Manager @ Government Bussiness Results,LLC Anideal framework  for collaboratively planning your meeting agenda for recurring team meetings ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/41d1442e01951a6a7346cb45a35782c6/photo-1497366811353-6870744d04b2.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/f95a0e88f1ff0af3c64fc8dfedde3b20/170.png",
      views: "16.8K",
      likes: "2.2k",
    },
    {
      id: 7,
      title: "Vision creation",
      author: "by Atlassian Team Playbook ",
      description:
        " A compelling vision is the foundation to impactful work. Inspire and motivate your team, and take the first steps towards ",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/384x480/395c98aa4caeec156c8b3586c670ba09/photo-1677029907981-e9a44fb7409a.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/52f8292b0c8bb3258a1d568e41ff603f/170.png",
      views: "3.7K",
      likes: "437",
    },
    {
      id: 8,
      title: "DACI Decision Making Framework",
      author: "by Atlassian Team Playbook",
      description:
        "Define each person's role in making high-impact group decisions",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/5f3ac6d0d4a4418ce0a533b3/480x300/bd9041596825df4aa98820ee958a9d75/background_blue1.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/52f8292b0c8bb3258a1d568e41ff603f/170.png",
      views: "20.4K",
      likes: "2.2K",
    },
    {
      id: 9,
      title: "4Ls",
      author: "by Atlassian Team Playbook",
      description:
        "Reflect back on your work and use what you’ve learned to improve as a team.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/5f3ac6d0d4a4418ce0a533b3/480x300/537ce6411207283d40dc74c5bdb9bd9b/background_yellow2%402x.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/52f8292b0c8bb3258a1d568e41ff603f/170.png",
      views: "9.6K",
      likes: "1.7K",
    },
    {
      id: 10,
      title: "Weekly Team Meetings",
      author: "by Trello Marketing Team",
      description:
        "Always make the most of valuable meeting minutes with a clearer agenda, attached decks & more.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/54aaae13b8275361d2f78815/480x300/e9eb08faba4159074d18fcaf83e87013/graphic-team-meeting.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "125.4K",
      likes: "27.6K",
    },

    {
      id: 11,
      title: "Team Health Monitor",
      author: "by Atlassian Team Playbook",
      description:
        "Assess your team against the eight attributes most commonly found among healthy teams.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/8697519b3e3ab8c7d91f3186805c3c89/photo-1505751172876-fa1923c5c528.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/52f8292b0c8bb3258a1d568e41ff603f/170.png",
      views: "33.8K",
      likes: "3.9K",
    },

    {
      id: 12,
      title: "1-on-1 Meeting Agenda",
      author: "by Sarah Goff-Dupont, Principal Writer @ Atlassian",
      description:
        "This board keeps myself and my direct reports on the same page.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/780ade0caae12be2b56b3762f5617cb5/170.png",
      views: "214.9K",
      likes: "205.1K",
    },

    {
      id: 13,
      title: "Collaboration Board",
      author: "by Diane B.",
      description:
        "A helpful template for collaborating with teams on projects.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x316/507dd09e352966fcbf061efc80c4977a/photo-1458349726531-234ad56ba80f.jpg",
      image1:
        " https://trello-logos.s3.amazonaws.com/a29d1b6c45e6cf6a75ab82c29f4b7613/170.png",
      views: "66K",
      likes: "13.1K",
    },

    {
      id: 14,
      title: "Government Program Management",
      author:
        "by Amy Campbell, Project Manager @ Government Business Results, LLC",
      description:
        "A simple template that any program manager at a government agency can quickly customize.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/9a0baf4a12f76bffd91670714fe90086/photo-1575320181282-9afab399332c.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/f95a0e88f1ff0af3c64fc8dfedde3b20/170.png",
      views: "6.9K",
      likes: "1K",
    },

    {
      id: 15,
      title: "KUDO Cards Wall",
      author: "by Evgeniy Stepchenko, team lead @ Setronica",
      description:
        "Express your recognition and gratefulness for your coworkers.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/540x960/b619acf02d7c413945c372aa08e38a3d/photo-1585504799323-d963a326cd30.jpg",
      image1:
        "https://trello-members.s3.amazonaws.com/5db96c57fdb4b05343bcfd8a/59ed3202b0cb3c44028e30a4dea4acd3/170.png",
      views: "14.7K",
      likes: "2.3K",
    },

    {
      id: 16,
      title: "Meeting Agenda Template",
      author: "by Darren Chait, Co-Founder @ Hugo",
      description: "Plan more effective and better team meetings.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/551361acb9232341c5431561/480x273/7c00d07398a958539295949f201b9c8e/hugo_rgb.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/b2b207f22066c205020ca4151b072487/170.png",
      views: "79.3K",
      likes: "15.1K",
    },

    {
      id: 17,
      title: "Office Party Planning",
      author: "by Trello Marketing Team",
      description: "Use this Trello board to plan an amazing office party!",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/54aaae13b8275361d2f78815/480x300/365af0eda9c5ca64fa1bb3e98269a92c/graphic-office-party.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "33.4K",
      likes: "10.2K",
    },

    {
      id: 18,
      title: "Offsite Planning",
      author: "by Trello Team",
      description:
        "Use this template to plan your next team offsite! The whole team has access before, during, and after.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b2f664ed2dd3c67b07b7041446cdcfff/photo-1503643384230-be0327e2d7d9.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "18.9K",
      likes: "2.9K",
    },

    {
      id: 19,
      title: "Staff Scheduling",
      author: "by Katara Hofmann",
      description: "Manage team schedules and shifts.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/795947002a042abc3bd097a8935d6571/photo-1552506558-a13ba083b915.jpg",
      image1:
        "  https://trello-logos.s3.amazonaws.com/a63a4a7e99abd00b777dd01fe77f3626/170.png",
      views: "40K",
      likes: "5.8K",
    },

    {
      id: 20,
      title: "Superpowers and Kryptonite Exercise",
      author: "by Trello Team",
      description:
        "A great exercise for team offsites to learn teammates’ strengths and weaknesses.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/4274b3a7c056b02c1539abd6cbe68e49/photo-1569256205017-7522b07c82e4.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "9.8K",
      likes: "1.4K",
    },

    {
      id: 21,
      title: "Team Action Items",
      author: "by Atlassian Customer Success",
      description: "Track action items in Trello without leaving Confluence.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/300x480/f9ff6d9f77cac67322e8b0c772667e98/photo-1663544093535-89cdceedf571.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/2d38768b217fe42273fc5a515b44e38a/170.png",
      views: "4.4K",
      likes: "1K",
    },
    {
      id: 22,
      title: "Team Focus Board",
      author: "by Paul Trowsdale, Project Manager @ UK Cabinet Office",
      description:
        "Make our weekly team meetings more visual and engaging when discussing what is important.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x360/26e4949775816a83ab97a4e0c070e81a/photo-1513542789411-b6a5d4f31634.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/3348b09e1ad6f5b6df612194eb49246c/170.png",
      views: "36.9K",
      likes: "6.3K",
    },

    {
      id: 23,
      title: "Team Icebreaker: Surviving the Apocalypse",
      author: "by Christopher Davis, Product Designer @ Trello",
      description:
        "Try this fun icebreaker during team hangouts, offsites, and more!",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/62ecd3748b166a168ab55a6acbcf7e80/photo-1503925802536-c9451dcd87b5.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/914db5be27803105af59a93a3c871810/170.png",
      views: "24.4K",
      likes: "1.6K",
    },

    {
      id: 24,
      title: "Team Organization Central",
      author: "by Trello Marketing Team",
      description:
        "Store all essential team resources, schedules, project summaries, updates and more.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/54aaae13b8275361d2f78815/480x300/5f5f701db412590bb8d259db80e46253/graphic-team-overview.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "110.7K",
      likes: "22.9K",
    },

    {
      id: 25,
      title: "Team Retro",
      author: "by Atlassian Customer Success",
      description: "Run a team retrospective with Confluence and Trello.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.0ltHdlbyG6-rCoESh-IJcQHaEK?pid=Api&P=0&h=180",
      image1:
        "https://trello-logos.s3.amazonaws.com/2d38768b217fe42273fc5a515b44e38a/170.png",
      views: "2.3K",
      likes: "475",
    },

    {
      id: 26,
      title: "Team Tasks - 5 Things Workflow",
      author: "by Trello Team",
      description: "Learn the “rule of five” for managing better teams.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/9990f58a627cb401a92f08f8a287a67b/CU0Ma3o.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png",
      views: "108.7K",
      likes: "12.5K",
    },

    {
      id: 27,
      title: "Weekly Sync Meeting",
      author: "by Caity Cogdell, Product Manager @ Trello",
      description:
        "Keep your remote or hybrid team in sync with this meeting agenda template.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/320x480/983922505dec0fef1903b7fb772af362/photo-1531346878377-a5be20888e57.jpg",
      image1:
        "https://trello-logos.s3.amazonaws.com/bda17f90cecfee9edfc35c09673335eb/170.png",
      views: "371",
      likes: "3.4K",
    },
    {
      id: 28,
      title: "Working Agreements",
      author: "by Atlassian Team Playbook",
      description:
        "create a list of expectations with your teammates for successful collaboration",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/5f3ac6d0d4a4418ce0a533b3/480x300/a317cca6bb9fba56e01a3001f4f0d7be/background_blue1_1%402x.png",
      image1:
        "https://trello-logos.s3.amazonaws.com/3b460588ffb7198f981601f4292f92a7/170.png",
      views: "24k",
      likes: "3.1K",
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
            Team Management
          </a>
        </div>
        <br />
        <br />
        <div className="flex">
          <img
            className="h-15 rounded-2xl"
            src="https://trello.com/assets/bf275b1bde5a6b293c69.svg"
            alt=""
          />
          <h1 className="font-bold text-2xl mt-2 ml-2 text-gray-900">
            Team Management templates
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
                  <div className="bg-gray-200 rounded-2xl -mt-11 h-15 w-15">
                    {" "}
                    <img
                      className="h-15 -mt-5 rounded-3xl"
                      src={card.image1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-2"> {card.author}</p>
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
                <Link
                  to="/trello.com"
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
          <hr className="w-250 text-gray-400" />

          <section className=" px-8 md:px-24 py-10">
            <p className="text-gray-700  h-50 w-200 -ml-20 leading-relaxed">
              Put the dream work back in team work. From team processes to team
              building, we've got you covered with team <br /> management templates.
              These templates will help cultivate team culture, run effective
              meetings, build empathy, and stay <br /> organized. Whether the team is
              co-located or distributed around the globe, Trello boards, lists,
              and cards keep every team <br /> member on the same page.
            </p>
            <img
              className="h-30 ml-190 -mt-50"
              src="https://trello.com/assets/21c2b4e2c5bc3d0c5470.svg"
              alt=""
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default TeamManagement;
