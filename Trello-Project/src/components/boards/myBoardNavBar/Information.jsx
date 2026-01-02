import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/mytrellonav1img.png";

const Information = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#2b2c2f] rounded-md w-72 shadow-lg text-zinc-200">

      {/* Top Content */}
      <div className="border-b border-gray-600 p-4">
        <img
          src={img1}
          alt="Trello tips"
          className="w-full h-36 object-cover rounded mb-3"
        />

        <p className="text-sm mb-2">
          Get inspired by dozens of different Trello workflows.
        </p>

        <Link
          to=""
          className="text-blue-400 text-sm ml-10 underline"
        >
          Get a new tip
        </Link>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap gap-x-4 gap-y-2 p-4 underline text-sm text-shadow-neutral-600">
        <Link to="/pricing" className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Pricing</Link>
        <Link to="/platforms" className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Apps</Link>
        <Link to="/blog" className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Blog</Link>
        <Link
          to="https://www.atlassian.com/legal/privacy-policy"
          className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer"
        > 
          Privacy
        </Link>
        <Link
          to="https://www.atlassian.com/legal/privacy-policy#additional-disclosures-for-ca-residents"
          className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer"
        >
          Notice at Collection
        </Link>

        {/* More Button */}
        <li
          onClick={() => setShowMore(!showMore)}
          className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer"
        >
          More…
        </li>
      </ul>

      {/* More Links Section */}
      {showMore && (
        <ul className="px-4 pb-4 text-sm underline flex flex-row gap-2">
          <Link to='https://support.atlassian.com/trello/' className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Help</Link>
          <Link to='https://developer.atlassian.com/cloud/trello/' className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Developers</Link>
          <Link to='https://www.atlassian.com/legal/atlassian-customer-agreement#intro' className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Legal</Link>
          <Link to='https://trello.com/attributions' className="hover:bg-[#3a3b3f] p-1 rounded cursor-pointer">Attributions</Link>
        </ul>
      )}

    </section>
  );
};

export default Information;
