import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import templateone from "../../../../assets/templateone.jpeg";
import templatetwo from "../../../../assets/templatetwo.jpeg";
import templatethree from "../../../../assets/templatethree.jpeg";
import templatefour from "../../../../assets/templatefour.jpeg";
import templatefive from "../../../../assets/templatefive.jpeg";
import logoone from "../../../../assets/Trello_LogoMarkOne.svg";
import logotwo from "../../../../assets/AtlassianMini_Logotwo.svg";
import logothree from "../../../../assets/InVision_LogoMarkthree.svg";
import { Link } from "react-router-dom";

export default function CardCarousel() {
  const cards = [
    {
      title: "New Hire Onboarding",
      subtitle: "by Trello Team",
      description:
        "From compliance checks to lunch menus, this comprehensive board covers everything your new hire needs.",
      image: templateone,
      logo: logoone,
      path: "/templates/team-management/new-hire-onboarding-qr3AcASr",
    },
    {
      title: "30 60 90 Day Plan",
      subtitle: "by Atlassian",
      description:
        "Clear goals and checklists of to-do’s make every new teammate’s first 90 days a breeze.first 90 days a breeze.",
      image: templatetwo,
      logo: logotwo,
      path: "/templates/operations-hr/30-60-90-day-plan-template-a597dVjV",
    },
    {
      title: "Employee Manual",
      subtitle: "by Trello Team",
      description:
        "Dust off the age-old employee manual for today’s modern workforce with this drag-and-drop template.",
      image: templatethree,
      logo: logoone,
      path: "/templates/operations-hr/employee-manual-HbTEX5hb",
    },
    {
      title: "Onboarding New Hires",
      subtitle: "by InVision",
      description:
        "Tech company InVision shares their guide to ensuring that every new hire has a meaningful onboarding experience.",
      image: templatefour,
      logo: logothree,
      path: "/templates/operations-hr/onboarding-process-for-new-hires-16LjOiG1",
    },
    {
      title: "Customer Onboarding",
      subtitle: "by Trello Team",
      description:
        "Orient new customers to your product and gain a clear view into their progress to identify when they might need help.",
      image: templatefive,
      logo: logoone,
      path: "/templates/sales/customer-onboarding-2gUieAwh",
    },
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
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
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
                  className="w-10 h-10 md:w-14 md:h-14 object-contain absolute left-4 bottom-[165px] bg-white p-2 rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
