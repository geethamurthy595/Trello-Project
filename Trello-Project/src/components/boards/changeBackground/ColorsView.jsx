import React, { useState } from "react";

/* Imported Images */
import changebgcolorone from "../../../assets/photos/changebgcolorone.svg";
import changebgcolortwo from "../../../assets/photos/changebgcolortwo.svg";
import changebgcolorthree from "../../../assets/photos/changebgcolorthree.svg";
import changebgcolorfour from "../../../assets/photos/changebgcolorfour.svg";
import changebgcolorfive from "../../../assets/photos/changebgcolorfive.svg";
import changebgcolorsix from "../../../assets/photos/changebgcolorsix.svg";
import changebgcolorseven from "../../../assets/photos/changebgcolorseven.svg";
import changebgcoloreight from "../../../assets/photos/changebgcoloreight.svg";
import changebgcolornine from "../../../assets/photos/changebgcolornine.svg";
import changebgcolorten from "../../../assets/photos/changebgcolorten.svg";

/* Image backgrounds */
const bgImages = [
  { id: 1, img: changebgcolorone, icon: "❄️" },
  { id: 2, img: changebgcolortwo, icon: "🌊" },
  { id: 3, img: changebgcolorthree, icon: "💧" },
  { id: 4, img: changebgcolorfour, icon: "🌙" },
  { id: 5, img: changebgcolorfive, icon: "🌈" },
  { id: 6, img: changebgcolorsix, icon: "🍑" },
  { id: 7, img: changebgcolorseven, icon: "🌸" },
  { id: 8, img: changebgcoloreight, icon: "🌍" },
  { id: 9, img: changebgcolornine, icon: "👽" },
  { id: 10, img: changebgcolorten, icon: "🌋" },
];

/* Solid Tailwind background colors */
const solidColors = [
  "bg-blue-500",
  "bg-yellow-500",
  "bg-green-600",
  "bg-red-600",
  "bg-purple-500",
  "bg-pink-500",
  "bg-emerald-500",
  "bg-cyan-500",
  "bg-gray-500",
];

const ColorsView = ({ setBackground }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="p-4 h-[560px] overflow-y-auto">
      {/* IMAGE BACKGROUNDS */}
      <div className="grid grid-cols-2 gap-3">
        {bgImages.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedImage(item.id);
              setSelectedColor(null);

              setBackground({
                type: "image",
                value: item.img,
              });
            }}
            className="relative h-28 rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={item.img}
              alt="background"
              className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
            />

            {/* Icon */}
            <div className="absolute bottom-2 left-2 text-lg">{item.icon}</div>

            {/* Selected overlay */}
            {selectedImage === item.id && (
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SOLID COLORS */}
      <div className="mt-6 grid grid-cols-5 gap-3">
        {solidColors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedColor(index);
              setSelectedImage(null);

              setBackground({
                type: "color",
                value: color,
              });
            }}
            className={`h-16 rounded-lg cursor-pointer relative transition-opacity hover:opacity-90 ${color}`}
          >
            {selectedColor === index && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                ✓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorsView;
