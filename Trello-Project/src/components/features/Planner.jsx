import { Link } from "react-router-dom";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";

let Planner = () => {
  return (
    <div>
      <>
      <NavBar/>
        <div className=" py-30 flex gap-10 bg-gray-200 px-53">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-5 ">
              Trello Planner
            </h1>
            <h2 className="text-4xl font-semibold text-gray-800 mb-5 ">
              Plan, stay focused, and get
              <br /> more<span className="text-gray-900">[sh*t]</span>done
            </h2>
            <p className="text-black  text-xl font-semibold mb-5">
              {" "}
              Planner is your ultimate planning companion <br /> to unlock the
              poer of staying in the zone and <br /> getting more done.
            </p>
            <Link to="/login" className="p-3.5 inline-flex bg-white hover:bg-blue-100 rounded-md font-medium border-blue-300 border-2">
              Get Started
            </Link>
            <br />
            <a
              className="text-blue-800 underline hover:text-blue-900 text-xl"
              href="#"
            >
              Learn more about Trello's plans and pricing.
            </a>
          </div>
          <img src={Image1} width={600} alt="" />
        </div>
        <br />
        <br />
        <div className="">
          <div className="text-center p-30 flex flex-col px-[40px] gap-3">
            <h1 className="text-4xl font-semibold mb-4 ">
              Plan anytime,anywhere
            </h1>
            <p className="text-gray-700 text-xl font-semibold flex justify-evenly h-22 text-center">
              Focus and make time for what truly matters. Say goodbye to
              scattered <br />
              schedules and missed deadlines! Trello Planner is your go-to tool
              for <br /> capturing and organizing your plans,whether you're at
              your desk or on the go.
            </p>
          </div>
        </div>
        <div className=" flex pl-55 py-20 gap-50 ">
          <div>
            <h1 className="text-4xl font-semibold mb-4">
              Effortless scheduling
            </h1>
            <p className="text-gray-700 text-lg font-semibold">
              Never miss a beat! Schedule tasks and events <br />
              directly from your favorite tools, like Google <br /> Calendar and
              Outlook, ensuring you stay on <br /> top of everything.
            </p>
          </div>
          <img className=" h-87 w-140" src={Image2} alt="" />
        </div>
        <br />
        <br />
        <div className=" flex px-[200px] gap-30 py-[20px]  w-full ">
          <img className="h-85 " src={Image3} alt="" />
          <div className="flex items-center  p-3">
            <div className="">
              <h1 className="text-4xl font-semibold mb-4">
                Intuitive organization
              </h1>
              <p className="text-gray-700 h-70 text-lg font-semibold">
                Ready to lock in your plans? Simply drag and <br />
                drop your tasks into the right boards, making <br />
                organization a breeze.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex px-[150px] gap-45 w-full">
          <div className="px-[30px] flex">
            <div className="flex items-center p-7 flex-col mt-8">
              <h1 className="text-4xl font-semibold mr-36">Stay on track</h1>
              <p className="text-gray-700 text-lg mt-8 font-semibold">
                Got quick tasks? Mark them "Done" straight <br />
                from the Planner and keep your productivity <br />
                flowing!
              </p>
            </div>
          </div>

          <div className=" flex">
            <img className=" h-90 w-136" src={Image4} alt="" />
          </div>
        </div>
        <br />
        <br />
        <div className="bg-blue-600 text-white flex flex-col items-center justify-center py-20 px-4 text-center">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Join the Trello Planner revolution!
          </h1>
          {/* Subheading */}
          <p className="text-lg mb-4 font-semibold">
            We’re excited to introduce Trello Planner, and we want your feedback
            to make it even better! Try it out, share your <br /> thoughts, and
            help us shape the future of planning.
          </p>
          {/* Button */}
          <button className="bg-white text-gray-800 border-red-500 border-1 p-3.5 rounded-md shadow hover:bg-yellow-100 transition">
            Get started
          </button>
        </div>
        <UniversalFooter/>
      </>
    </div>
  );
};
export default Planner;
