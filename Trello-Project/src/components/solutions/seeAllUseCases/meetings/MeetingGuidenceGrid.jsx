import React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        title: "20 team meeting ideas that will help your team bond in 2023",
        subtitle:
            "Move work forward while building team morale. Perfect for established colleagues or newly formed cross-functional teams, these ideas foster a comfortable environment for everyone to thrive in.",
        icon: (
            <svg className="w-10" fill="currentColor" aria-hidden="true" viewBox="0 0 98 61">
                <path d="M36.219 60.477h-33.568c-1.464 0-2.65-1.186-2.65-2.65v-10.085c0-8.416 6.822-15.238 15.238-15.238h8.392c8.416 0 15.238 6.822 15.238 15.238v10.085c0 1.464-1.186 2.65-2.65 2.65zM8.245 17.854c0-6.18 5.01-11.189 11.189-11.189s11.19 5.01 11.19 11.189c0 6.18-5.01 11.19-11.189 11.19s-11.189-5.01-11.189-11.189zM95.111 60.477h-33.568c-1.464 0-2.65-1.186-2.65-2.65v-10.085c0-8.416 6.822-15.238 15.238-15.238h8.392c8.416 0 15.238 6.822 15.238 15.238v10.085c0 1.464-1.186 2.65-2.65 2.65zM67.137 17.854c0-6.18 5.01-11.189 11.19-11.189 6.18 0 11.189 5.01 11.189 11.189 0 6.18-5.01 11.19-11.189 11.19-6.18 0-11.189-5.01-11.189-11.189zM36.955 5.777c0-2.927 2.373-5.3 5.3-5.3 2.927 0 5.3 2.373 5.3 5.3 0 .333-.031.658-.089.974.463-.059.935-.09 1.414-.09 6.098 0 11.042 4.944 11.042 11.042 0 6.099-4.944 11.042-11.042 11.042-6.098 0-11.042-4.944-11.042-11.042 0-2.651.934-5.084 2.491-6.987-1.975-.771-3.374-2.692-3.374-4.94z" opacity=".5"></path><path d="M65.665 60.472h-33.568c-1.464 0-2.65-1.186-2.65-2.65v-10.085c0-8.416 6.822-15.238 15.238-15.238h8.392c8.416 0 15.238 6.822 15.238 15.238v10.085c0 1.464-1.186 2.65-2.65 2.65zM37.839 17.851c.078 6.031 4.991 10.897 11.041 10.897s10.964-4.865 11.041-10.897h-2.501c-.557 0-1.081-.262-1.416-.708l-2.531-3.374c-.236-.315-.708-.315-.944 0l-2.531 3.374c-.334.446-.859.708-1.415.708z"></path>
            </svg>
        ),
    },
    {
        id: 2,
        title: "How to make 1:1 meetings a win-win for everyone involved",
        subtitle:
            "No matter the nature of the 1:1 meeting, having clear expectations before, during, and after the meeting helps build healthy relationships with colleagues.",
        icon: (
            <svg className="w-10" fill="currentColor" aria-hidden="true" viewBox="0 0 48 65"><path d="M8.58 41.425a5.003 5.003 0 0 1 5.003-5.003h20.844a5.003 5.003 0 0 1 5.003 5.003v20.823c0 2.094-2.42 3.262-4.058 1.958l-9.81-7.802a2.501 2.501 0 0 0-3.114 0l-9.81 7.802C11 65.51 8.58 64.342 8.58 62.248z" opacity=".5"></path><path d="M47.745 24.494c0-13.111-10.629-23.74-23.74-23.74-13.11 0-23.74 10.629-23.74 23.74 0 13.11 10.63 23.74 23.74 23.74 13.111 0 23.74-10.63 23.74-23.74zm-27.582-5.986 2.267-4.593a2.28 2.28 0 0 1 4.089 0l2.266 4.593 5.069.736a2.28 2.28 0 0 1 1.942 2.468l-.014.116a2.28 2.28 0 0 1-.665 1.305l-3.667 3.574.865 5.049a2.28 2.28 0 0 1-1.746 2.61l-.115.022a2.28 2.28 0 0 1-1.447-.229l-4.533-2.383-4.533 2.383a2.28 2.28 0 0 1-3.02-.851l-.059-.106a2.28 2.28 0 0 1-.229-1.446l.865-5.049-3.667-3.574a2.28 2.28 0 0 1-.126-3.132l.085-.092a2.28 2.28 0 0 1 1.305-.665z"></path></svg>
        ),
    },
    {
        id: 3,
        title: "Improve your team's success (and minimize mistakes) through meetings",
        subtitle:
            "It's true—it's possible to troubleshoot mistakes and mishaps without all the awkwardness, and it can actually happen in a meeting!",
        icon: (
            <svg className="w-10" fill="currentColor" aria-hidden="true" viewBox="0 0 64 65"><path d="M42.253 50.27a7.456 7.456 0 0 0 7.456-7.457V8.64h6.835A7.456 7.456 0 0 1 64 16.095v41.01a7.456 7.456 0 0 1-7.456 7.456h-41.01a7.456 7.456 0 0 1-7.456-7.456V50.27z" opacity=".5"></path><path fillRule="evenodd" d="M7.456.563A7.456 7.456 0 0 0 0 8.018v41.01a7.456 7.456 0 0 0 7.456 7.456h41.01a7.456 7.456 0 0 0 7.456-7.456V8.019A7.456 7.456 0 0 0 48.466.563zm34.436 21.282c1-1.098.97-2.799-.09-3.86l-.096-.09a2.796 2.796 0 0 0-3.859.09l-14.719 14.72-5.053-5.053-.095-.091a2.796 2.796 0 0 0-3.859 4.045l7.03 7.03.095.09c1.098 1 2.799.97 3.86-.09L41.8 21.94z"></path></svg>
        ),
    },
    {
        id: 4,
        title: "How to take truly useful meeting notes",
        subtitle:
            "Elevate your meetings to new heights by setting the expectation for actionable outcomes. Ensure your notes drive progress, instead of just documenting discussions.",
        icon: (
            <svg className="w-10" fill="currentColor" aria-hidden="true" viewBox="0 0 91 65"><path d="m59.045 8.38 22.872 22.872 6.191-6.191a7.418 7.418 0 0 0 0-10.49L75.727 2.187a7.418 7.418 0 0 0-10.491 0zM31.227 36.197l-3.241 3.241a3.709 3.709 0 0 0-1.087 2.623v18.245a3.71 3.71 0 0 0 3.71 3.71h17.008a3.71 3.71 0 0 0 2.623-1.087l3.241-3.24z"></path><g opacity=".5"><path d="M30.609 58.452a2.782 2.782 0 0 1 .13 5.56l-.13.004h-27.2a2.782 2.782 0 0 1-.131-5.56l.13-.004zM59.045 8.379 31.227 36.197l4.4 4.646L63.26 13.212a2.8 2.8 0 0 1 .333-.285zM45.253 51.003l-5.797-6.12 27.737-27.737.099-.104c.067-.074.129-.15.186-.23l6.005 6.005c-.117.085-.228.18-.333.286L45.332 50.92zm3.818 4.03 4.41 4.655 28.436-28.436-4.548-4.549c-.058.08-.12.156-.187.23l-.098.104-27.818 27.818a2.848 2.848 0 0 1-.195.177z"></path></g></svg>
        ),
    },
];

const MeetingGuidenceGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-6 p-6 bg-[#FFF2FB] text-[#091E42] pt-10">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="rounded-xl p-4 flex gap-4 space-y-3 bg-[#FFF2FB] text-[#091E42]"
                >
                    <div className="flex items-start justify-between space-x-2 pt-2">
                        {item.icon}

                    </div>
                    <div className="text-left pl-4">
                        <h3 className="text-2xl font-medium leading-tight w-120">
                            {item.title}
                        </h3>
                        <p className="text-2xl font-normal leading-normal pt-4">
                            {item.subtitle}
                        </p>
                        <Link
                            to="/blog/teamwork/team-meeting-ideas"
                            className="text-[#0052cc] underline decoration-[#0052cc] text-xl font-normal leading-normal pt-4"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MeetingGuidenceGrid;
