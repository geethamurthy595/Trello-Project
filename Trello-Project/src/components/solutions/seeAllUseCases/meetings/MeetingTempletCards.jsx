import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import templateone from "../../../../assets/meetings/weekly_team_meetings.png";
import templatetwo from "../../../../assets/meetings/remote_team_meetings.jpeg";
import templatethree from "../../../../assets/meetings/distributed_brainstorming.jpeg";
import templatefour from "../../../../assets/meetings/health_monitor.jpeg";
import templatefive from "../../../../assets/meetings/productivity_workflow.jpeg";
import logoone from "../../../../assets/Trello_LogoMarkOne.svg";
import logotwo from "../../../../assets/AtlassianMini_Logotwo.svg";
// import logothree from "../../../../assets/meetings/InVision_LogoMarkthree.svg";
import { Link } from "react-router-dom";

const MeetingTempletCards = () => {
    const cards = [
        {
            path: "/templates/team-management/weekly-team-meetings-GDz7Wd53",
            logo: logoone,
            title: "Weekly Team Meetings",
            author: "by Trello Marketing Team",
            description: "End the \"circle back\" cycle! Always make the most of valuable meeting time with a clear agenda, attached decks & more.",

            image: templateone
        },
        {
            path: "/templates/remote-work/remote-team-meetings-lYdxML7x",
            logo: logoone,
            title: "Remote Team Meetings",
            author: "by Trello Team",
            description: "Bring focus and transparency to your remote team meetings with structured agendas, clear goals, and action items.",

            image: templatetwo
        },
        {
            path: "/templates/remote-work/distributed-team-brainstorming-fs1wCJ9r",
            logo: logoone,
            title: "Distributed Brainstorming",
            author: "by Trello Team",
            description: "Brainstorm with your teammates in a more collaborative way. Push the envelope and spark new ideas.",

            image: templatethree
        },
        {
            path: "/templates/team-management/team-health-monitor-X9Fjlh8H",
            logo: logotwo,
            title: "Team Health Monitor",
            author: "by Atlassian Team Playbook",
            description: "Identify your team's strengths and areas for growth! The Health Monitor is your team's chance to discover new ways to improve.",

            image: templatefour
        },
        {
            path: "/templates/productivity/productivity-workflow-2ydu8DKc",
            logo: logoone,
            title: "Productivity Workflow",
            author: "by Trello Marketing Team",
            description: "Level-up your next team meeting with this productivity method. Discuss all the important tasks and priorities for your next project.",
            image: templatefive
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const carouselRef = useRef(null);
    const dragStartX = useRef(0);
    const dragEndX = useRef(0);
    const isDragging = useRef(false);

    const nextCards = () => {
        setCurrentIndex((prev) =>
            Math.min(prev + visibleCards, cards.length - visibleCards)
        );
    };

    const prevCards = () => {
        setCurrentIndex((prev) => Math.max(prev - visibleCards, 0));
    };

    // Drag events
    const handleMouseDown = (e) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        dragEndX.current = e.clientX;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        const diff = dragStartX.current - dragEndX.current;
        if (diff > 50) nextCards();
        if (diff < -50) prevCards();
        isDragging.current = false;
    };

    const handleMouseLeave = () => {
        if (isDragging.current) handleMouseUp();
    };

    return (
        <div className="w-full max-w-[1250px] mx-auto">
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mb-4">
                <button
                    onClick={prevCards}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextCards}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                >
                    <FaArrowRight />
                </button>
            </div>

            {/* Carousel */}
            <div
                className="overflow-hidden relative cursor-grab"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={(e) => (dragStartX.current = e.touches[0].clientX)}
                onTouchMove={(e) => (dragEndX.current = e.touches[0].clientX)}
                onTouchEnd={() => {
                    const diff = dragStartX.current - dragEndX.current;
                    if (diff > 50) nextCards();
                    if (diff < -50) prevCards();
                }}
            >
                <div
                    className="flex gap-10 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                    }}
                >
                    {cards.map((card, index) => (
                        <Link
                            to={card.path}
                            key={index}
                            className="flex-shrink-0 w-[30%] relative shadow hover:shadow-2xl transition-shadow duration-300 rounded-lg cursor-pointer"
                        >
                            <div className="relative">
                                {/* Card Image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-50 md:h-70 object-cover rounded-lg"
                                />

                                {/* White content box */}
                                <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
                                    <div className="mt-6">
                                        <h3 className="text-lg md:text-xl font-medium text-[#091e42] mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#5e6c84] text-sm md:text-lg font-medium mb-1">
                                            {card.subtitle}
                                        </p>
                                        <p className="text-[#5e6c84] text-sm md:text-base font-medium">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Logo overlapping image and white box */}
                                <img
                                    src={card.logo}
                                    alt="logo"
                                    className="w-10 h-10 md:w-14 md:h-14 object-contain absolute left-4 bottom-[132px] bg-white p-2 rounded-lg"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default MeetingTempletCards;