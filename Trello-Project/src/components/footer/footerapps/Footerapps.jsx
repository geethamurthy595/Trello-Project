import NavBar from "../../NavBar";
import pic2 from "../../../assets/pic2.png";
import pic1 from "../../../assets/pic1.png";
import pic3 from "../../../assets/pic3.png";
import pic8 from "../../../assets/pic8.png";
import pic9 from "../../../assets/pic9.png";
import pic4 from "../../../assets/pic4.png";
import pic6 from "../../../assets/pic6.png";
import pic5 from "../../../assets/pic5.png";
import pic7 from "../../../assets/pic7.png";
import { Link } from "react-router-dom";
import UniversalFooter from "../../UniversalFooter";

let Footerapps = () => {
  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white gap-14">
        {/* Heading */}
        <h1 className="text-6xl md:text-5xl font-semibold text-black-800 mb-20">
          Trello works seamlessly wherever you are.
        </h1>
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50">
          {/* Web Card */}
          <div className="flex flex-col items-center">
            <img src={pic2} alt="" className="w-30 h-25 mb-4" />
            <h2 className="text-4xl font-medium mb-3">Web</h2>
            <Link
              to="/"
              className="border border-blue-400 rounded-lg px-7 py-4 text-black-800 hover:bg-blue-100 transition"
            >
              Trello.com →
            </Link>
          </div>
          {/* Mobile Card */}
          <div className="flex flex-col items-center">
            <img src={pic1} alt="" className="w-30 h-25 mb-4" />
            <h2 className="text-4xl font-medium mb-3">Mobile</h2>
            <div className="flex flex-col gap-3">
              <img src={pic8} alt="App Store" className="h-10 cursor-pointer" />
              <img src={pic9} alt="" className="h-10 cursor-pointer" />
            </div>
          </div>
          {/* Desktop Card */}
          <div className="flex flex-col items-center">
            <img src={pic3} alt="" className="w-30 h-25 mb-4" />
            <h2 className="text-4xl font-medium mb-3">Desktop</h2>
            <div className="flex flex-col gap-3">
              <img src={pic8} alt="App Store" className="h-10 cursor-pointer" />
              <img
                src={pic9}
                alt="Microsoft Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-black-800 mb-12">
            Trello is supported in these modern browsers.
          </h1>

          {/* Browser Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-50">
            {/* Chrome */}
            <div className="flex flex-col items-center">
              <img src={pic4} alt="Chrome" className="w-16 h-16 mb-3" />
              <h2 className="text-2xl font-medium">Chrome</h2>
              <p className="text-black text-lg mb-4">latest</p>
              <button className="border border-black-400 text-black-700 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                Download
              </button>
            </div>
            {/* Firefox */}
            <div className="flex flex-col items-center">
              <img src={pic6} alt="Firefox" className="w-16 h-16 mb-3" />
              <h2 className="text-2xl font-medium">Firefox</h2>
              <p className="text-black text-lg mb-4">latest</p>
              <button className="border border-black-400 text-black-700 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                Download
              </button>
            </div>

            {/* Edge */}
            <div className="flex flex-col items-center">
              <img src={pic5} alt="Edge" className="w-16 h-16 mb-3" />
              <h2 className="text-2xl font-medium">Edge</h2>
              <p className="text-black text-lg mb-4">latest</p>
              <button className="border border-black-400 text-black-700 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                Download
              </button>
            </div>
            {/* Safari */}
            <div className="flex flex-col items-center">
              <img src={pic7} alt="Safari" className="w-16 h-16 mb-3" />
              <h2 className="text-2xl font-medium">Safari</h2>
              <p className="text-black text-lg mb-4">latest</p>
              <button className="border border-black-400 text-black-700 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
      <UniversalFooter/>
    </>
  );
};
export default Footerapps;
