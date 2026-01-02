import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import collapsone from "../../../assets/collapslistone.jpg";
import collapstwo from "../../../assets/collapselisttwo.jpg";
import collapsthree from "../../../assets/collapselistthree.png";

const CollapsiableCollection = () => {
  // Card array with individual background colors
  const cards = [
    {
      img: collapsone,
      title: "collection",
      subtitle: "Ways of Working",
      description: "How you work is just as important as the work you're doing",
      bgcolor: "#5e6c84",
    },
    {
      img: collapstwo,
      title: "collection",
      subtitle: "Wellbeing | Well-doing",
      description:
        "Strategies for individuals and leaders to cultivate a flexible, balanced, and inclusive work life.",
      bgcolor: "#5e6c84",
    },
    {
      img: collapsthree,
      title: "collection",
      subtitle: "The Fly Wheel Growth Model",
      description:
        "There are loads of ways to grow a company – learn about our approach here.",
      bgcolor: "#172b4d",
    },
  ];

  // Duplicate cards for infinite scrolling effect
  const repeatedCards = [...cards, ...cards, ...cards];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Infinite scroll effect
  useEffect(() => {
    const container = carouselRef.current;
    const handleScroll = () => {
      const maxScroll = container.scrollWidth / 3; // one "original" set
      if (container.scrollLeft >= maxScroll * 2) {
        container.scrollLeft -= maxScroll;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += maxScroll;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-fit pb-8">
      {/* Header */}
      <div className="w-full flex items-center p-6">
        <h4 className="text-base font-medium text-[#42526e] uppercase tracking-widest leading-normal">
          More Collections
        </h4>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 px-4 overflow-x-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {repeatedCards.map((card, index) => (
          <div
            key={index}
            className="relative w-[32%] min-h-80 flex-shrink-0 group hover:cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.subtitle}
              className="w-full h-150 object-cover"
            />
            {/* Dynamic background overlay */}
            <div
              className="absolute inset-0 opacity-90"
              style={{ backgroundColor: card.bgcolor }}
            ></div>

            <div className="absolute inset-0">
              <p className="font-medium uppercase text-sm leading-snug tracking-widest text-white p-6">
                {card.title}
              </p>
              <h3 className="text-4xl text-white leading-loose font-medium pl-4">
                {card.subtitle}
              </h3>
              <p className="leading-normal text-xl text-white pl-4 font-normal">
                {card.description}
              </p>
              <div className="flex items-center gap-4 pl-4 text-lg font-normal leading-normal text-white p-4 transition-all duration-300 group-hover:underline">
                <p className="flex items-center justify-center gap-2">
                  <span className="group-hover:underline">View Collection</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsiableCollection;
