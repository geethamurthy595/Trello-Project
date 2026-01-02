import React, { useState, useRef } from "react";
import { IoClose, IoChevronBack } from "react-icons/io5";
import changeone from "../../../assets/changeone.jpg"; // default image
import changetwo from "../../../assets/changetwo.png";
import PhotosView from "./PhotosView";
import ColorsView from "./ColorsView";
import BackgroundOptions from "./BackgroundOptions";

const ChangeBackground = ({
  onClose,
  onBackToMenu,
  setBackground,
  currentBackground,
}) => {
  const [view, setView] = useState("main");
  const [customImages, setCustomImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => {
    if (view === "photos" || view === "colors") setView("main");
    else onBackToMenu();
  };

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const urls = files.map((file) => URL.createObjectURL(file));
    setCustomImages((prev) => [...prev, ...urls]);
    e.target.value = null;
  };

  const handleDeleteBackground = () => {
    const deletedImage = customImages[selectedIndex];
    setCustomImages((prev) => prev.filter((_, i) => i !== selectedIndex));
    setSelectedIndex(null);

    // Check if deleted image is currently applied
    if (
      currentBackground?.type === "image" &&
      currentBackground.value === deletedImage
    ) {
      setBackground({ type: "image", value: changeone }); // reset to default
    }
  };

  const enableScroll = customImages.length > 2;

  return (
    <div className="w-105 bg-[#2f3136] text-white rounded-xl shadow-2xl overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-600">
        <button
          onClick={handleBack}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          <IoChevronBack size={18} />
        </button>
        <h3 className="text-sm font-semibold text-gray-300">
          {view === "main" && "Change background"}
          {view === "photos" && "Photos"}
          {view === "colors" && "Colors"}
        </h3>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-700">
          <IoClose size={18} />
        </button>
      </div>

      {/* Main View */}
      {view === "main" && (
        <div
          className={`p-4 space-y-4 ${
            enableScroll ? "max-h-140 overflow-y-auto" : ""
          }`}
        >
          {/* Photos & Colors */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setView("photos")}
            >
              <div className="w-40 h-24 rounded-lg overflow-hidden group">
                <img
                  src={changeone}
                  alt="Photos"
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-70"
                />
              </div>
              <p className="mt-2 text-base font-medium text-[#CECFD2]">
                Photos
              </p>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setView("colors")}
            >
              <div className="w-40 h-24 rounded-lg overflow-hidden group">
                <img
                  src={changetwo}
                  alt="Colors"
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-70"
                />
              </div>
              <p className="mt-2 text-base font-medium text-[#CECFD2]">
                Colors
              </p>
            </div>
          </div>

          <hr className="border-[#E3E4F21F]" />
          <h4 className="text-2xl font-bold text-[#CECFD2]">Custom</h4>

          <div className="flex flex-wrap gap-3">
            {/* + Upload Tile */}
            <div
              onClick={handleUploadClick}
              className="w-40 h-24 bg-[#3a3b3c] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#4a4b4c]"
            >
              <span className="text-3xl text-gray-300">+</span>
            </div>

            {/* Custom Uploaded Images */}
            {customImages.map((img, index) => (
              <div
                key={index}
                className={`relative w-40 h-24 rounded-xl overflow-hidden cursor-pointer group`}
              >
                <img
                  src={img}
                  alt={`custom-${index}`}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-70"
                  onClick={() => setBackground({ type: "image", value: img })}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 bg-black/60 text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setSelectedIndex(index)}
                >
                  … <span className="hover:underline">Options</span>
                </div>
              </div>
            ))}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}

      {view === "photos" && <PhotosView setBackground={setBackground} />}
      {view === "colors" && <ColorsView setBackground={setBackground} />}

      {selectedIndex !== null && (
        <BackgroundOptions
          onClose={() => setSelectedIndex(null)}
          onDelete={handleDeleteBackground}
          setBackground={setBackground} // pass this
        />
      )}
    </div>
  );
};

export default ChangeBackground;
