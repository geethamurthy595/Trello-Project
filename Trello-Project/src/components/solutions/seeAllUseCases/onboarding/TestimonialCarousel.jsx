import React, { useState, useRef } from "react";
import testone from "../../../../assets/testone.svg";
import testmonialone from "../../../../assets/testmonialone.webp";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import OMNI from "../../../../assets/OMNI_Institute.webp";
import Digital from "../../../../assets/DigitalPublicServices_Logo_2x.webp";
import weird from "../../../../assets/about-wired-logo.webp";
import detroit from "../../../../assets/detroit_red_wings_Logo_wordmark_2.webp";
import UNICEF from "../../../../assets/UNICEF_Logo_wordmark_1.webp";
import Colgate from "../../../../assets/Colgate_Palmolive.svg";

const testimonials = [
  {
    id: 1,
    quote:
      "Our onboarding board has been a huge hit. New employees say that it really helps them see that they are on track and we are able to provide plenty of information to make sure they have the tools to be successful.",
    name: "Danielle Pinc",
    position: "Business Director, OMNI Institute",
    companyImg: OMNI,
    bg: testone,
    rightsection: "Rated #1 in customer satisfaction",
    rightbottom: "G2.com Grid® Report for Project Management",
  },
  {
    id: 2,
    quote:
      "It’s been instrumental to my leadership team as we organize our collaborative training efforts. We’re able to cover so much more ground together and make sure important topics don’t fall through the cracks.",
    name: "Tara Bouldrey",
    position: "Vice President, NEWITY LLC",
    companyImg: testmonialone,
    bg: testone,
    rightsection: "Over 80% of companies in the Fortune 500 use Trello",
    rightbottom: "",
  },
  {
    id: 3,
    quote:
      "Trello has helped our onboarding flow to ensure all new starters have an excellent first two weeks.",
    name: "Sarah Carter",
    position: "Human Resources Director, Centre for Digital Public Services",
    companyImg: Digital,
    bg: testone,
    rightsection: "81% of users choose Trello for its ease of use",
    rightbottom: (
      <a
        href="https://www.techvalidate.com/product-research/trello"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline hover:text-white hover:decoration-white hover:cursor-pointer"
      >
        Trello TechValidate Survey
      </a>
    ),
  },
  {
    id: 4,
    quote:
      "The great thing about Trello is it's a blank canvas—you can set it up in a way that works for your team. It's been a really transformative part of the way we work",
    name: "Andy",
    position: "Audience Growth Manager - Wired UK",
    companyImg: weird,
    bg: testone,
    rightsection:
      "3 out of 4 customers say Trello increases their visibility across projects",
    rightbottom: (
      <a
        href="https://www.techvalidate.com/product-research/trello"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline hover:text-white hover:decoration-white hover:cursor-pointer"
      >
        Trello TechValidate Survey
      </a>
    ),
  },
  {
    id: 5,
    quote:
      "Trello makes it easy to keep everyone on the same page. The real-time updates as changes happen with email notifications have been key.",
    name: "Haydon Dotson",
    position: "Sales Manager - Detroit Red Wings",
    companyImg: detroit,
    bg: testone,
    rightsection:
      "74% of Trello users see improved communication between co-workers",
    rightbottom: (
      <a
        href="https://www.techvalidate.com/product-research/trello"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline hover:text-white hover:decoration-white hover:cursor-pointer"
      >
        Trello TechValidate Survey
      </a>
    ),
  },
  {
    id: 6,
    quote:
      "We can’t waste time sending things over email when it comes to life-saving information for communities. Trello helps our conversations be seamlessly efficient.",
    name: "Tanya Accone",
    position: "Senior Adviser on Innovation - UNICEF",
    companyImg: UNICEF,
    bg: testone,
    rightsection: "87% of Trello users see increased team productivity",
    rightbottom: (
      <a
        href="https://www.techvalidate.com/product-research/trello"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline hover:text-white hover:decoration-white hover:cursor-pointer"
      >
        Trello TechValidate Survey
      </a>
    ),
  },
  {
    id: 7,
    quote:
      "Trello supported our transition to remote work by helping us avoid excessive online meetings.",
    name: "Roger Aqua",
    position: "Controller - Colgate-Palmolive",
    companyImg: Colgate,
    bg: testone,
    rightsection:
      "75% of organizations say Trello proved its value within the first month",
    rightbottom: (
      <a
        href="https://www.techvalidate.com/product-research/trello"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline hover:text-white hover:decoration-white hover:cursor-pointer"
      >
        Trello TechValidate Survey
      </a>
    ),
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // --- Mouse / Touch Handlers ---
  const handleStart = (x) => {
    setIsDragging(true);
    setStartX(x);
  };

  const handleMove = (x) => {
    if (!isDragging) return;
    const delta = x - startX;
    setTranslateX(delta);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (translateX > threshold) prevSlide();
    else if (translateX < -threshold) nextSlide();

    setTranslateX(0);
  };

  return (
    <div className="relative w-[85%] mx-auto mb-20 select-none">
      {/* === Top Controls === */}
      <div className="flex justify-end items-center mb-5 gap-4">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                index === i
                  ? "bg-[#091e42] opacity-70 w-[40px]"
                  : "bg-[#091e42] opacity-100 w-2"
              } hover:opacity-50`}
            ></div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="group border border-[#5e6c84] text-[#5e6c84] rounded-full px-2 py-2 text-sm font-medium transition-all duration-300"
          >
            <FiChevronLeft
              size={14}
              className="transition-colors duration-300 group-hover:text-[#0065ff]"
            />
          </button>
          <button
            onClick={nextSlide}
            className="group border border-[#5e6c84] text-[#5e6c84] rounded-full px-2 py-2 text-sm font-medium transition-all duration-300"
          >
            <FiChevronRight
              size={14}
              className="transition-colors duration-300 group-hover:text-[#0065ff]"
            />
          </button>
        </div>
      </div>

      {/* === Carousel Container === */}
      <div
        ref={containerRef}
        className="overflow-hidden rounded-lg bg-white shadow-[0_3px_5px_rgba(9,30,66,0.2),_0_0_1px_rgba(9,30,66,0.31)] border border-[#dfe1e6]"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${translateX}px))`,
          }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full flex h-[420px]">
              {/* Left section */}
              <div className="relative w-[66%] h-full overflow-hidden">
                <img src={item.bg} alt="" className="w-full h-70" />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <p className="text-[#091e42] text-2xl font-medium leading-normal text-left">
                    {item.quote}
                  </p>
                  <div className="pt-12">
                    <div className="bg-current h-px mb-4 max-w-[9rem] block"></div>
                    <p className="text-lg text-[#091e42] font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p className="text-lg text-[#091e42] font-normal leading-tight pt-2">
                      {item.position}
                    </p>
                    <img src={item.companyImg} alt="" className="pt-4 w-40" />
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="w-[34%] bg-gradient-to-r from-[#0065ff] to-[#00b8d9] text-white text-xl font-semibold p-8 text-left flex flex-col gap-35">
                <p className="text-4xl leading-snug font-medium">
                  {item.rightsection}
                </p>
                <p className="text-lg leading-snug font-medium">
                  {item.rightbottom}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
