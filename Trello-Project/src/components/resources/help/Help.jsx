import { IoDocumentText } from "react-icons/io5";
import HelpNavbar from "./HelpNavbar";
import Cloud from "./Cloud";

let Help = () => {
  return (
    <>
      <HelpNavbar />
      <section className="mx-35">
        <div className="pr-10 py-4 text-sm text-slate-500 mb-5 flex items-center ">
          <a href="#" class=" text-slate-600 hover:underline">
            Atlassian Support
          </a>
          <p className="mx-2">/</p>
          <a className="text-slate-700 hover:underline">Trello</a>
        </div>
        <div className="pr-10 mb-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            Trello support
          </h1>
        </div>

        {/* Grid */}
        <div className="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-5">
            {/* Documentation */}
            <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 text-2xl">
                  <img
                    width={70}
                    src="https://images.ctfassets.net/zsv3d0ugroxu/3zu24q81rSIszjUcYWS7rs/e203ecd5b877949db50052f2e2cc018a/rich_icon-Guidelines.svg"
                    alt=""
                  />
                </span>
                <div>
                  <h2 className="text-lg font-medium text-gray-800">
                    Documentation
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Get help using and administering apps.
                  </p>
                  <button className="mt-3 px-4 py-2 text-sm font-medium rounded bg-gray-100 border-gray-300 hover:bg-gray-200 ">
                    View documentation
                  </button>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-2xl">
                  <img
                    width={70}
                    src="https://images.ctfassets.net/zsv3d0ugroxu/199clY7qv6MQc2EasKkGim/2be1028a3452c791c46ebb4a4343a91b/rich_icon-Community.svg"
                    alt=""
                  />
                </span>
                <div>
                  <h2 className="text-lg font-medium text-gray-800">
                    Community
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Find answers, support, and inspiration from other Atlassian
                    users.
                  </p>
                  <button className="mt-3 px-4 py-2 text-sm font-medium rounded bg-gray-100 border-gray-300 hover:bg-gray-200">
                    Visit Atlassian Community
                  </button>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-500 text-2xl">
                  <img
                    width={70}
                    src="https://images.ctfassets.net/zsv3d0ugroxu/72Hws13erkU4jPlqQmD2SS/fd94e1b3f2b1b3e88315702c77b672cd/rich_icon-Announcement.svg"
                    alt=""
                  />
                </span>
                <div>
                  <h2 className=" text-lg font-medium text-gray-800">
                    System Status
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Check the health of our cloud apps and services.
                  </p>
                  <button className="mt-3 px-4 py-2 text-sm font-medium rounded bg-gray-100 border-gray-300 hover:bg-gray-200">
                    View system status
                  </button>
                </div>
              </div>
            </div>

            {/* Billing and Licensing */}
            <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <span className="text-purple-500 text-2xl">
                  <img
                    width={70}
                    src="https://images.ctfassets.net/zsv3d0ugroxu/5Cb1EEBbNKkm8uK24mIeEs/4ffba62bbd992b75dc3b7f227c9cb3f3/rich_icon-Credit_cards.svg"
                    alt=""
                  />
                </span>
                <div>
                  <h2 className="text-lg font-medium text-gray-800">
                    Billing and licensin
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    See FAQs about billing and licensing.
                  </p>
                  <button className=" mt-3 px-4 py-2 text-sm font-medium  rounded bg-gray-100 border-gray-300 hover:bg-gray-200">
                    View FAQs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Help Section */}
        <div className="text-center mt-12 p-12">
          <p className="text-3xl font-bold text-gray-900">
            Not finding the help you need?
          </p>
          <button className="mt-16 px-6 py-2 font-semibold rounded-full border-2 border-black bg-white shadow-sm hover:bg-gray-200">
            Log in to contact support
          </button>
        </div>
      </section>

      {/* Links */}
      <div className="flex flex-col md:flex-row md:items-center h-full w-full bg-gray-100">
        <img
          className="text-center ml-40"
          src="https://images.ctfassets.net/zsv3d0ugroxu/2sOh4sF3DSm8Qy8GigKK0S/1c7619d9db378c5ee902d8eeb8fde65b/atlassian-logo-footer.svg"
          alt=""
        />
        <div className="flex space-x-6 text-sm text-gray-600 font-semibold ml-126 p-13">
          <a href="#" className="hover:none">
            Accessibility
          </a>
          <br />
          <a href="#" className="hover:none">
            Privacy Policy
          </a>
          <br />
          <a href="#" className="hover:none">
            Terms of use
          </a>
          <br />
          <a href="#" className="hover:none">
            Security
          </a>
          <br />
          <span>Copyright © 2024 Atlassian</span>
        </div>
      </div>
    </>
  );
};
export default Help;
