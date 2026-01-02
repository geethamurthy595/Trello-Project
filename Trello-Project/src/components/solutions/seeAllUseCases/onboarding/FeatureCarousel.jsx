import { useState, useRef } from "react";
import featureone from "../../../../assets/featureone.webp";
import featuretwo from "../../../../assets/featuretwo.webp";
import featurethree from "../../../../assets/featurethree.webp";

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const threshold = 50; // drag distance before triggering slide

  const features = [
    {
      title: "Eyes on the prize",
      description:
        "Identify priorities with colorful labels and GIF stickers. Add photos and videos alongside important documents. Trello’s visual cues keep focus on what matters.",
      image: featureone,
    },
    {
      title: "Stay ahead of roadblocks",
      description:
        "Timeline, Calendar, and Table views track multiple onboarding experiences at once, helping you see what’s next and who needs help.",
      image: featuretwo,
    },
    {
      title: "Forget tedious work",
      description:
        "Automate repetitive tasks like tagging the next owner in the process, setting new deadlines, and sending reminders so nothing ever gets stalled again.",
      image: featurethree,
    },
  ];

  const handleFeatureClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  // Drag/swipe logic
  const handleMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const diff = e.clientX - startX.current;

    if (diff > threshold) {
      prevSlide();
      dragging.current = false;
    } else if (diff < -threshold) {
      nextSlide();
      dragging.current = false;
    }
  };

  const handleMouseUp = () => (dragging.current = false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <>
      <style>
        {`
          .carousel-track {
            display: flex;
            transition: transform 0.7s ease-in-out;
            width: 100%;
            height: 100%;
          }

          .carousel-slide {
            flex: 0 0 100%;
            width: 100%;
            height: 100%;
          }

          .carousel-slide img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 0.5rem;
          }
        `}
      </style>

      <div className="mt-24 mb-24 w-[90%] m-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left cards */}
          <div className="w-full md:w-1/3 flex flex-col gap-6 text-left">
            {features.map((feature, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`relative cursor-pointer flex flex-col gap-2 transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-[#091e42] shadow-lg rounded-[0.3rem] border-0 px-6 py-4"
                      : "bg-transparent text-[#091e42] px-6 py-4"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute left-0 top-0 bottom-0 w-2 bg-[#00c7e5] rounded-tl-[0.3rem] rounded-bl-[0.3rem]"></span>
                  )}
                  <h3 className="text-xl leading-snug font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right image section */}
          <div className="w-full md:w-2/3">
            {/* Dots */}
            <div className="flex justify-end gap-2 mb-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-current opacity-50 w-[50px]"
                      : "bg-[#091e42] w-2"
                  }`}
                  style={{ color: "#091e42" }}
                ></div>
              ))}
            </div>

            {/* Carousel */}
            <div
              className="relative w-full h-80 md:h-[550px] overflow-hidden cursor-grab"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
