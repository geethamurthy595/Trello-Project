import React, { useState } from "react";
import { MdWifi } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { ImFileText } from "react-icons/im";
import DeveloperChangelog from "../../../../assets/DeveloperChangelog.png";

const SectionFirstDiv = () => {
  return (
    <div className="p-6 font-sans border border-t-4 w-full border-blue-100 text-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        2026 updates to Cloud App Security Requirements
      </h2>

      <p className="mb-4 text-gray-700">
        Key additions to the general Cloud App Security Requirements include:
      </p>

      <ul className="list-disc pl-6 space-y-4">
        <li>
          <span className="font-semibold">AI Security:</span> New requirements
          for apps using Forge Rovo actions and agents.
        </li>

        <li>
          <span className="font-semibold">Data Protection:</span>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>External OAuth2 clients must use Forge OAuth2 Providers.</li>
            <li>Application logs must exclude sensitive data.</li>
            <li>Apps must ensure strict tenant isolation.</li>
            <li>Apps must not execute arbitrary code.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Application Security:</span>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Use parameterized queries to avoid SQL injection.</li>
            <li>Updated Content Security Policy guidance.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Runtime Security:</span>

          <ul className="list-disc pl-6 mt-2">
            <li>Apps must not use end-of-life Node.js runtimes.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const SectionSecendDiv = () => {
  return (
    <div className="p-6 font-sans border border-t-4 w-full flex flex-col gap-4 border-blue-100 text-gray-800">

      <p>
        Privacy compliance remains a requirement for all Power-ups and
        Integrations that store personal data.
      </p>

      <ol className="list-decimal ml-5">
        <li>Create or update your Power-up in the Trello Developer Portal.</li>
        <li>Navigate to the Privacy and Compliance tab.</li>
        <li>Link your app key.</li>
        <li>Use the compliance API.</li>
      </ol>

      <p>
        After <span className="bg-cyan-100 px-1">Sep 8, 2025</span> requests to
        the deprecated endpoint will no longer be supported.
      </p>
    </div>
  );
};

let arr = [1,2,3,4,5,6,7,8,9,10];

const Changelog = () => {

  const [openFilter,setOpenFilter] = useState(false);

  const [firstSectionVisible,setFirstSectionVisible] = useState(false);
  const [secendSectionVisible,setSecendSectionVisible] = useState(false);
  const [thirdSectionVisible,setThirdSectionVisible] = useState(false);
  const [fourthSectionVisible,setFourthSectionVisible] = useState(false);
  const [fiftSectionVisible,setFiftSectionVisible] = useState(false);
  const [sixthSectionVisible,setSixthSectionVisible] = useState(false);

  return (

<div className="w-full px-3 sm:px-6 lg:px-10 flex flex-col gap-5 text-[14px] opacity-80">

<div className="w-full max-w-[1100px] mx-auto flex flex-col gap-3 pt-4">
<HeaderPart openFilter={openFilter} setOpenFilter={setOpenFilter}/>
</div>

<section className="w-full max-w-[1100px] mx-auto">

<h1 className="text-2xl py-2 font-semibold">20 February 2026</h1>

<div className="flex gap-2 items-center my-2 flex-wrap">

<span className="text-[10px] uppercase tracking-wide text-blue-700 bg-blue-100 px-1 font-semibold">
Announcement
</span>

<p className="font-bold text-[15px]">
Upcoming AGC app security requirements and 2026 updates
</p>

</div>

<p>
We are introducing baseline security requirements for AGC apps.
</p>

<p
className="border border-blue-100 p-3 mt-4 flex items-center w-full cursor-pointer"
onClick={()=>setFirstSectionVisible(!firstSectionVisible)}
>

<ImFileText className="mr-3 text-xl"/>
More details

</p>

<div
className={`overflow-hidden transition-all duration-300
${firstSectionVisible ? "max-h-[1000px]" : "max-h-0"}
`}
>

<SectionFirstDiv/>

</div>

</section>

<section className="w-full max-w-[1100px] mx-auto">

<h1 className="text-2xl py-2 font-semibold">6 August 2025</h1>

<div className="flex gap-2 items-center flex-wrap">

<span className="text-[10px] uppercase text-amber-700 bg-amber-50 px-1 font-bold">
Deprecation Notice
</span>

<p className="font-bold text-[15px]">
Trello deprecation notice
</p>

</div>

<p>
Legacy API route will be deprecated.
</p>

<p
className="border border-blue-100 p-3 mt-4 flex items-center cursor-pointer"
onClick={()=>setSecendSectionVisible(!secendSectionVisible)}
>

<ImFileText className="mr-3 text-xl"/>
More details

</p>

<div
className={`overflow-hidden transition-all duration-300
${secendSectionVisible ? "max-h-[1000px]" : "max-h-0"}
`}
>

<SectionSecendDiv/>

</div>

</section>

<section className="w-full max-w-[1100px] mx-auto">

<h1 className="text-2xl py-2 font-semibold">21 August 2024</h1>

<div className="flex gap-2 items-center flex-wrap">

<span className="text-[10px] uppercase text-blue-700 bg-blue-100 px-1 font-semibold">
Announcement
</span>

<p className="font-bold text-[15px]">
Changing to the way that Power-Ups handle data
</p>

</div>

<p>
While disabling power-up you can now keep all Power-Up data.
</p>

<img
src={DeveloperChangelog}
alt="DeveloperChangelog"
className="my-12 w-full max-w-[900px] mx-auto"
/>

<p
className="border border-blue-100 p-3 mt-4 flex items-center cursor-pointer"
onClick={()=>setSixthSectionVisible(!sixthSectionVisible)}
>

<ImFileText className="mr-3 text-xl"/>
More details

</p>

<div
className={`overflow-hidden transition-all duration-300
${sixthSectionVisible ? "max-h-[1000px]" : "max-h-0"}
`}
>

<p className="border border-blue-100 border-t-4 p-4">
Previously data was kept by default. Now data will be deleted for security reasons.
</p>

</div>

</section>

<div className="flex flex-wrap justify-center gap-3 items-center py-8">

<IoIosArrowBack/>

{arr.map((a)=>(
<span key={a} className="px-3 py-1 cursor-pointer font-bold rounded hover:bg-blue-100">
{a}
</span>
))}

<IoIosArrowForward/>

</div>

</div>

  );
};

const HeaderPart = ({openFilter,setOpenFilter})=>{

return(

<div className="flex flex-col gap-3">

<div className="flex flex-col sm:flex-row sm:justify-between gap-2 items-start sm:items-center">

<span className="text-gray-500">
Last updated Feb 20, 2026
</span>

<span className="flex gap-2 px-2 py-1 bg-cyan-50 rounded-lg items-center">
<MdWifi className="rotate-45 text-2xl"/>
RSS feed
</span>

</div>

<h2 className="font-medium text-2xl">
Trello Changelog
</h2>

<p className="text-[13px]">
This changelog is the source of truth for all changes.
</p>

<div className="flex flex-col sm:flex-row gap-3">

<div className="relative w-full sm:w-48">

<button
onClick={()=>setOpenFilter(!openFilter)}
className="w-full sm:w-40 px-4 rounded flex justify-between bg-cyan-50 py-1.5 items-center"
>

Filter Types
<IoIosArrowDown/>

</button>

{openFilter && (

<div className="absolute mt-2 w-full bg-white rounded shadow-lg">

<label className="flex items-center gap-2 px-3 py-2 text-[12px] hover:bg-blue-50">
<input type="checkbox" className="accent-blue-500"/>
REMOVED
</label>

<label className="flex items-center gap-2 px-3 py-2 text-[12px] hover:bg-blue-50">
<input type="checkbox" className="accent-blue-500"/>
Deprecation Notice
</label>

<label className="flex items-center gap-2 px-3 py-2 text-[12px] hover:bg-blue-50">
<input type="checkbox" className="accent-blue-500"/>
Announcement
</label>

</div>

)}

</div>

<div className="relative w-full">

<HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

<input
type="text"
placeholder="Search changelog..."
className="w-full pl-10 py-2 pr-4 bg-cyan-50 border border-blue-300 focus:outline-none"
/>

</div>

</div>

</div>

)

}

export default Changelog;