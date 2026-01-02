import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

/* 📌 Static Images */
import changephotoone from "../../../assets/photos/changephotoone.jfif";
import changephototwo from "../../../assets/photos/changephototwo.jfif";
import changephotothree from "../../../assets/photos/changephotothree.jfif";
import changephotofour from "../../../assets/photos/changephotofour.jfif";
import changephotofive from "../../../assets/photos/changephotofive.jfif";
import changephotosix from "../../../assets/photos/changephotosix.jfif";
import changephotoseven from "../../../assets/photos/changephotoseven.jfif";
import changephotoeight from "../../../assets/photos/changephotoeight.jfif";
import changephotonine from "../../../assets/photos/changephotonine.jfif";
import changephototen from "../../../assets/photos/changephototen.jfif";
import changephotoeleven from "../../../assets/photos/changephotoeleven.jfif";
import changephototwelve from "../../../assets/photos/changephototwelve.jfif";
import changephotothirteen from "../../../assets/photos/changephotothirteen.jfif";
import changephotofourteen from "../../../assets/photos/changephotofourteen.jfif";
import changephotofifteen from "../../../assets/photos/changephotofifteen.jfif";
import changephotosixteen from "../../../assets/photos/changephotosixteen.jfif";
import changePhotoseventeen from "../../../assets/photos/changephotoseventeen.jfif";
import changephotoeighteen from "../../../assets/photos/changephotoeighteen.jfif";
import changephotonineteen from "../../../assets/photos/changephotonineteen.jfif";
import changephototwenty from "../../../assets/photos/changephototwenty.jfif";
import changephototwentyone from "../../../assets/photos/changephototwentyone.jfif";
import changephototwentytwo from "../../../assets/photos/changephototwentytwo.jfif";
import changephototwentythree from "../../../assets/photos/changephototwentythree.jfif";
import changephototwentyfour from "../../../assets/photos/changephototwentyfour.jfif";
import changephototwentyfive from "../../../assets/photos/changephototwentyfive.jfif";
import changephototwentysix from "../../../assets/photos/changephototwentysix.jfif";
import changephototwentyseven from "../../../assets/photos/changephototwentyseven.jfif";
import changephototwentyeight from "../../../assets/photos/changephototwentyeight.jfif";
import changephototwentynine from "../../../assets/photos/changephototwentynine.jfif";
import changephotothirty from "../../../assets/photos/changephotothirty.jfif";

const staticImages = [
  { src: changephotoone },
  { src: changephototwo },
  { src: changephotothree },
  { src: changephotofour },
  { src: changephotofive },
  { src: changephotosix },
  { src: changephotoseven },
  { src: changephotoeight },
  { src: changephotonine },
  { src: changephototen },
  { src: changephotoeleven },
  { src: changephototwelve },
  { src: changephotothirteen },
  { src: changephotofourteen },
  { src: changephotofifteen },
  { src: changephotosixteen },
  { src: changePhotoseventeen },
  { src: changephotoeighteen },
  { src: changephotonineteen },
  { src: changephototwenty },
  { src: changephototwentyone },
  { src: changephototwentytwo },
  { src: changephototwentythree },
  { src: changephototwentyfour },
  { src: changephototwentyfive },
  { src: changephototwentysix },
  { src: changephototwentyseven },
  { src: changephototwentyeight },
  { src: changephototwentynine },
  { src: changephotothirty },
];

/* 🔑 Unsplash Key (use .env in real app) */
const ACCESS_KEY = "2Re1DV--Bw-cObE_x5MqfDp_zfbiwcb7iFW9KmL5ugY";

const PhotosView = ({ setBackground }) => {
  const [search, setSearch] = useState("");
  const [searchImages, setSearchImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const showSearchResults = search.trim().length > 0;

  /* 🔍 Fetch Unsplash images */
  useEffect(() => {
    if (!showSearchResults) {
      setSearchImages([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            search
          )}&per_page=30`,
          {
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
              "Accept-Version": "v1",
            },
          }
        );

        const data = await res.json();
        setSearchImages(data.results || []);
      } catch (err) {
        console.error("Unsplash error:", err);
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [search, showSearchResults]);

  return (
    <div className="flex flex-col h-[560px] w-[420px] bg-[#2f3136] rounded-xl overflow-hidden">
      {/* 🔍 Search */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 bg-[#2b2d31] border border-gray-600 rounded-lg px-3 py-2">
          <IoSearch className="text-[#CECFD2]" size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search photos"
            className="bg-transparent outline-none text-sm text-[#CECFD2] w-full"
          />
        </div>
      </div>

      {/* 🖼️ Grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-3">
        <div className="grid grid-cols-2 gap-3">
          {!showSearchResults &&
            staticImages.map((img, i) => (
              <div
                key={i}
                className="h-28 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setBackground({ type: "image", value: img.src })}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          {showSearchResults &&
            searchImages.map((img) => (
              <div
                key={img.id}
                className="h-28 rounded-xl overflow-hidden cursor-pointer"
                onClick={() =>
                  setBackground({ type: "image", value: img.urls.full })
                }
              >
                <img
                  src={img.urls.small}
                  alt={img.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>

        {loading && (
          <p className="text-center text-gray-400 text-sm mt-4">
            Loading images...
          </p>
        )}
      </div>

      {/* 📄 Footer */}
      <div className="px-4 py-3 text-xs text-gray-400">
        By using images from Unsplash, you agree to their{" "}
        <span className="text-blue-400 cursor-pointer hover:underline">
          license
        </span>{" "}
        and{" "}
        <span className="text-blue-400 cursor-pointer hover:underline">
          Terms of Service
        </span>
        .
      </div>
    </div>
  );
};

export default PhotosView;
