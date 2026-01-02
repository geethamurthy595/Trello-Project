import React from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import imageone from "../../../../../assets/imageone.jpg";
import imageonelogo from "../../../../../assets/imageonelogo.png";
import imagetwo from "../../../../../assets/imagetwo.jpg";
import imagethree from "../../../../../assets/imagethree.jpg";
import imagetwologo from "../../../../../assets/imagetwologo.png";
import imagethreelogo from "../../../../../assets/imagethreelogo.png";

const RelatedTemplates = () => {
  const templates = [
    {
      title: "Network of Teams",
      author: "Atlassian",
      description: "Map out the teams that are essential for your success.",
      copies: "18.3K",
      views: "131.3K",
      image: imageone,
      logo: imageonelogo,
    },
    {
      title: "Product Roadmap",
      author: "Atlassian",
      description: "Plan and visualize your product development easily.",
      copies: "25.7K",
      views: "142.8K",
      image: imagetwo,
      logo: imagetwologo,
    },
    {
      title: "Marketing Strategy",
      author: "Atlassian",
      description: "Organize campaigns and track key results effectively.",
      copies: "21.1K",
      views: "118.5K",
      image: imagethree,
      logo: imagethreelogo,
    },
  ];

  return (
    <div className="w-full h-fit p-6 rounded-lg shadow-md bg-[linear-gradient(124.69deg,#4A2A57_10%,#5C2D40_70%)]">
      <p className="text-xl font-medium leading-normal text-[#FFFFFF] pb-6">
        Related Templates
      </p>

      {/* ✅ Card Container */}
      <div className="flex justify-between flex-wrap gap-6">
        {templates.map((template, index) => (
          <div
            key={index}
            className="w-[30%] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200"
          >
            {/* ✅ Image Section */}
            <div className="relative">
              <img
                src={template.image}
                alt=""
                className="w-full h-[160px] object-cover"
              />
              <img
                src={template.logo}
                alt=""
                className="w-12 absolute -bottom-6 left-6 border-2 border-white rounded-md shadow-md bg-white"
              />
            </div>

            {/* ✅ Content Section (Transparent) */}
            <div className="pt-10 px-4 pb-2 text-white bg-transparent">
              <p className="font-semibold">{template.title}</p>
              <p className="text-sm text-[#9CA3AF] mb-1">
                by {template.author}
              </p>
              <p className="text-sm text-[#FFFFFF]/90">
                {template.description}
              </p>

              <p className="flex items-center gap-2 text-xs font-medium pt-3">
                <span className="flex items-center text-[#FFFFFF]/90">
                  <MdOutlineFileCopy /> {template.copies} Copies
                </span>
                <span className="flex items-center text-[#FFFFFF]/90">
                  <IoEyeOutline /> {template.views} Views
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedTemplates;
