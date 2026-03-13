
import { Star } from "lucide-react";
import { FaAngleDown , FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useState , useEffect , useRef} from "react";


const RpowerUps = () => {
 const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const dropdownRef = useRef(null);
  const [showCapabilities, setShowCapabilities] = useState(false);
  const [showClientLibrary, setShowClientLibrary] = useState(false);
  const [showColorTheme, setShowColorTheme] = useState(false);
  const [showUiFunctions, setShowUiFunctions] = useState(false);

  const items = [
  { type: "link", name: "Power-Ups", url: "/Users/shanmukh/Desktop/Project-T/Trello-Project/src/components/resources/help/developers/RpowerUps.jsx" },

  { type: "text", name: "CAPABILITIES" },

  { type: "link", name: "attachment-sections", url: "#" },
  { type: "link", name: "attachment-thumbnail", url: "#" },
  { type: "link", name: "authorization-status", url: "#" },
  { type: "link", name: "board-buttons", url: "#" },
  { type: "link", name: "card-back-section", url: "#" },
  { type: "link", name: "card-badges", url: "#" },
  { type: "link", name: "card-buttons", url: "#" },

  { type: "link", name: "card-detail-badges", url: "#" },
  { type: "link", name: "card-from-url", url: "#" },
  { type: "link", name: "format-url", url: "#" },
  { type: "link", name: "list-actions", url: "#" },
  { type: "link", name: "list-sorters", url: "#" },
  { type: "link", name: "on-enable", url: "#" },
  { type: "link", name: "on-disable", url: "#" },
  { type: "link", name: "remove-data", url: "#" },
  { type: "link", name: "save-attachment", url: "#" },

  { type: "link", name: "show-authorization", url: "#" },
  { type: "link", name: "show-settings", url: "#" },

  { type: "text", name: "CLIENT LIBRARY" },

  { type: "link", name: "Getting and Setting Plugin Data", url: "#" },
  { type: "link", name: "Managing Secrets", url: "#" },
  { type: "link", name: "Accessing Trello Data", url: "#" },
  { type: "link", name: "Localization", url: "#" },
  { type: "link", name: "t.arg(name, defaultValue)", url: "#" },
  { type: "link", name: "t.attach(data)", url: "#" },

  { type: "link", name: "t.authorize(url, opts)", url: "#" },
  { type: "link", name: "t.getContext()", url: "#" },
  { type: "link", name: "t.jwt(opts)", url: "#" },
  { type: "link", name: "t.notifyParent('done')", url: "#" },
  { type: "link", name: "t.render(function)", url: "#" },
  { type: "link", name: "t.signUrl(url, args)", url: "#" },

  { type: "text", name: "COLOR THEME COMPLIANCE (BETA)" },

  { type: "link", name: "Using Atlassian Design Tokens", url: "#" },
  { type: "link", name: "Using CSS Custom Properties", url: "#" },

  { type: "link", name: "REST API Client", url: "#" },

  { type: "text", name: "UI FUNCTIONS" },

  { type: "link", name: "Alert", url: "#" },
  { type: "link", name: "Board Bar", url: "#" },
  { type: "link", name: "Modal", url: "#" },
  { type: "link", name: "Navigation", url: "#" },
  { type: "link", name: "Popup", url: "#" },
  { type: "link", name: "t.sizeTo(arg)", url: "#" },

  { type: "link", name: "Utils and Helpers", url: "#" }
];

const capabilityLinks = [
  { name: "attachment-sections", url: "#" },
  { name: "attachment-thumbnail", url: "#" },
  { name: "authorization-status", url: "#" },
  { name: "board-buttons", url: "#" },
  { name: "card-back-section", url: "#" },
  { name: "card-badges", url: "#" },
  { name: "card-buttons", url: "#" },
  { name: "card-detail-badges", url: "#" },
  { name: "card-from-url", url: "#" },
  { name: "format-url", url: "#" },
  { name: "list-actions", url: "#" },
  { name: "list-sorters", url: "#" },
  { name: "on-enable", url: "#" },
  { name: "on-disable", url: "#" },
  { name: "remove-data", url: "#" },
  { name: "save-attachment", url: "#" },
  { name: "show-authorization", url: "#" },
  { name: "show-settings", url: "#" }
];

const clientLibraryLinks = [
  { name: "Getting and Setting Plugin Data", url: "#" },
  { name: "Managing Secrets", url: "#" },
  { name: "Accessing Trello Data", url: "#" },
  { name: "Localization", url: "#" },
  { name: "t.arg(name, defaultValue)", url: "#" },
  { name: "t.attach(data)", url: "#" },
  { name: "t.authorize(url, opts)", url: "#" },
  { name: "t.getContext()", url: "#" },
  { name: "t.jwt(opts)", url: "#" },
  { name: "t.notifyParent('done')", url: "#" },
  { name: "t.render(function)", url: "#" },
  { name: "t.signUrl(url, args)", url: "#" },
];

const colorThemeComplianceLinks = [
  { name: "Using Atlassian Design Tokens", url: "#" },
  { name: "Using CSS Custom Properties", url: "#" },
];


const uiFunctionsLinks = [
  { name: "Alert", url: "#" },
  { name: "Board Bar", url: "#" },
  { name: "Modal", url: "#" },
  { name: "Navigation", url: "#" },
  { name: "Popup", url: "#" },
  { name: "t.sizeTo(arg)", url: "#" },
];



  const handleClick = (value) => {
    setRating(value);
    setOpen(true); // open feedback modal
  };
  
  useEffect(() => {

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowList(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };

}, []);
  return (
    <>
        <hr className='border-gray-300 my-4' />

                    <div className='flex flex-col md:flex-row border-gray-300 gap-4 mx-4 md:mx-35'>
                       <section className='pt-5 relative w-full md:w-auto'>
                           <div ref={dropdownRef} className="relative w-fit">

                              <input
                                placeholder="Filter by keyword"
                                type="text"
                                onClick={() => setShowList(true)}
                                className='border-2 border-gray-400 p-2 rounded text-sm h-10 w-full md:w-60 focus:border-none'
                              />

                              <FaAngleDown className="absolute right-3 top-3 text-xs" />

                              {showList && (
                                <ul className="absolute top-12 left-0 w-full text-sm bg-white border border-gray-300 rounded shadow-md max-h-80 overflow-y-auto">
                                
                                  {items.map((item, index) => (
                                    <li key={index}>
                                      {item.type === "link" ? (
                                        <a
                                          href={item.url}
                                          className="block p-2 hover:bg-gray-100 border-l-4 border-transparent hover:border-blue-500"
                                        >
                                          {item.name}
                                        </a>
                                      ) : (
                                        <span className="block p-2 text-gray-500 text-xs uppercase">
                                          {item.name}
                                        </span>
                                      )}
                                    </li>
                                  ))}

                                </ul>
                              )}

                            </div>
                            
                            
                            
                         <div className="pt-3.5 text-[13px] font-light">
                          <ul className="list-disc pl-5">
                            <li className="text-blue-600">Power-Ups</li>
                          </ul>
                            
                              <div className="text-[14px]">
                                <ul className="pt-2  ">
                                   <li className="flex flex-col">
                                     {/* Capabilities heading */}
                                     <div
                                       className={`flex items-center gap-1 cursor-pointer select-none ${
                                                    showCapabilities ? "text-blue-500" : "text-gray-900"
                                                  }`}
                                       onClick={() => setShowCapabilities(!showCapabilities)}
                                     >
                                       <FaAngleRight
                                         className={`h-3 transition-transform ${showCapabilities ? "rotate-90" : ""}`}
                                       />
                                       <Link><span className="focus hover:underline">Capabilities</span></Link>
                                     </div>
                                                
                                     {/* Dropdown list */}
                                     {showCapabilities && (
                                       <ul className="max-h-110 overflow-y-auto ml-4 mt-1">
                                         {capabilityLinks.map((item, index) => (
                                           <li key={index}>
                                             <Link
                                               to={item.url} // Navigate to the proper route
                                               className="block p-2 text-sm focus hover:text-blue-500"
                                             >
                                               {item.name}
                                             </Link>
                                           </li>
                                         ))}
                                       </ul>
                                     )}
                                   </li>
                                  </ul>
                                   
                              <ul className="pt-2">
                                   <li className="flex flex-col">
                                     {/* ClientLibrary heading */}
                                     <div
                                       className={`flex items-center gap-1 cursor-pointer select-none ${
                                                    showClientLibrary ? "text-blue-500" : "text-gray-900"
                                                  }`}
                                       onClick={() => setShowClientLibrary(!showClientLibrary)}
                                     >
                                       <FaAngleRight
                                         className={`h-3 transition-transform ${showClientLibrary ? "rotate-90" : ""}`}
                                       />
                                       <Link><span className="focus hover:underline">Client Library</span></Link>
                                     </div>
                                                
                                     {/* Dropdown list */}
                                     {showClientLibrary && (
                                       <ul className="max-h-110 overflow-y-auto ml-4 mt-1">
                                         {clientLibraryLinks.map((item, index) => (
                                           <li key={index}>
                                             <Link
                                               to={item.url} // Navigate to the proper route
                                               className="block p-2 text-sm focus hover:text-blue-500"
                                             >
                                               {item.name}
                                             </Link>
                                           </li>
                                         ))}
                                       </ul>
                                     )}
                                   </li>
                                  </ul>
                                   
                             <ul className="pt-2">
                                   <li className="flex flex-col">
                                     {/* showColorTheme heading */}
                                     <div
                                       className={`flex items-center gap-1 cursor-pointer select-none ${
                                                    showColorTheme ? "text-blue-500" : "text-gray-900"
                                                  }`}
                                       onClick={() => setShowColorTheme(!showColorTheme)}
                                     >
                                       <FaAngleRight
                                         className={`h-3 transition-transform ${showColorTheme ? "rotate-90" : ""}`}
                                       />
                                       <Link><span className="focus hover:underline">Color Theme Compliance (Beta)</span></Link>
                                     </div>
                                                
                                     {/* Dropdown list */}
                                     {showColorTheme && (
                                       <ul className="max-h-110 overflow-y-auto ml-4 mt-1">
                                         {colorThemeComplianceLinks.map((item, index) => (
                                           <li key={index}>
                                             <Link
                                               to={item.url} // Navigate to the proper route
                                               className="block p-2 text-sm focus hover:text-blue-500"
                                             >
                                               {item.name}
                                             </Link>
                                           </li>
                                         ))}
                                       </ul>
                                     )}
                                   </li>
                                  </ul>
                              <Link to='#'><p className="pt-2 pl-4 hover:text-blue-500 focus">REST API Client</p></Link>
                                   
                              <ul className="pt-2">
                                   <li className="flex flex-col">
                                     {/* UiFunctions heading */}
                                     <div
                                       className={`flex items-center gap-1 cursor-pointer select-none ${
                                                    showUiFunctions ? "text-blue-500" : "text-gray-900"
                                                  }`}
                                       onClick={() => setShowUiFunctions(!showUiFunctions)}
                                     >
                                       <FaAngleRight
                                         className={`h-3 transition-transform ${showUiFunctions ? "rotate-90" : ""}`}
                                       />
                                       <Link><span className="focus hover:underline">UI Functions</span></Link>
                                     </div>
                                                
                                     {/* Dropdown list */}
                                     {showUiFunctions && (
                                       <ul className="max-h-110 overflow-y-auto ml-4 mt-1">
                                         {uiFunctionsLinks.map((item, index) => (
                                           <li key={index}>
                                             <Link
                                               to={item.url} // Navigate to the proper route
                                               className="block p-2 text-sm focus hover:text-blue-500"
                                             >
                                               {item.name}
                                             </Link>
                                           </li>
                                         ))}
                                       </ul>
                                     )}
                                   </li>
                                  </ul>
                              <Link><p className="pt-2 pl-4 focus hover:text-blue-500 ">Utils and Helpers</p></Link>
                          </div>
                                   
                         </div>
                       </section> 
                                   
                     <div className='hidden md:block h-190 w-px bg-gray-400'></div>
                                   
                      <div className="pt-7 pl-0 md:pl-7 w-full">
                                   
                        <div className="w-160">
                          <p className=" text-gray-500 font-light text-sm ">Last updated Mar 3, 2026</p>
                          <p className=' font-medium text-3xl '>Power-Ups Reference</p>
                          <p className=" text-gray-700 font-light text-sm pt-3">Power-Ups make use of a suite of <Link to='#' className='text-blue-700' >capabilites</Link> and <Link to='#' className="text-blue-700">Client Library</Link> that are documented here.</p>
                          <p className=" text-gray-700 font-light text-sm pt-3">If you're getting started, we recommend heading over to the <Link to='#' className="text-blue-700">Your First Power-Up</Link> guide to get started. When ready, come back to this reference section for a deeper dive into the various capabilities and UI elements provided by the Power-Up client library.</p>
                          <p className=' font-medium text-2xl pt-9 '>Off By Two</p>
                          <p className=" text-gray-700 font-light text-sm pt-3">Whether you're a seasoned Power-Up developer or just getting started, we recommend checking out our topical videos where the Trello team dives into topics relevant to Power-Up developers:</p>
                                   
                          <div className="w-full max-w-xl  aspect-w-16 aspect-h-9">
                            <iframe className=" w-138.5 h-80" src="https://www.youtube.com/embed/EHAH3KW8_VM?si=hPeyFFpRaxUkAZJ5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                          </div>
                                   
                         <div className="flex flex-col items-end ">
                                   
                  <>
                  {/* Rating Section */}
                  <div className="flex justify-end pt-12">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 text-sm">Rate this page:</p>
                                   
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star
                            key={star}
                            onClick={() => handleClick(star)}
                            className={`w-5 h-4.5 cursor-pointer transition
                            ${star <= rating
                              ? "fill-amber-400 stroke-amber-400"
                              : "stroke-gray-400 fill-none hover:fill-amber-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                      
                  {/* Feedback Modal */}
                  {open && (
                    <div className="fixed inset-0  flex items-center justify-center bg-black/40 z-50">
                    
                      <div className="bg-white w-full max-w-140 rounded-lg shadow-xl p-6">
                  
                        <h2 className="text-lg font-semibold mb-2">
                          Share your thoughts
                        </h2>
                  
                        <p className="text-gray-500 text-sm mb-4">
                          Your feedback helps us improve. Let us know your thoughts about this page.
                        </p>
                  
                        <textarea
                          className="w-full focused border-blue-500  p-2 mb-4"
                          rows="5"
                          placeholder="Write your feedback..."
                        />

                        <div className="flex justify-between">
                          <button
                            onClick={() => setOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            Close
                          </button>
                  
                          <button className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-1 rounded">
                            Send feedback
                          </button>
                        </div>
                  
                      </div>
                    </div>
                  )}
                </>
                
            </div>
          </div>


          </div>
            <div className=" md:w-90">
                  <p className="pt-23 text-sm font-semibold ">ON THIS PAGE</p>
                  <p className=' font-medium text-sm pt-2 text-blue-800 '>Off By Two</p>
            </div>
                
          </div>
    </>
  )
}

export default RpowerUps;