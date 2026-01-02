import React from "react";
import NavBar from "../../NavBar";
import Dash1 from "../../../assets/Dash1.svg";
import Dash2 from "../../../assets/Dash2.png";
import Dash3 from "../../../assets/Dash3.png";
import Dash4 from "../../../assets/Dash4.png"; 
import UniversalFooter from "../../UniversalFooter";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <section className=" w-full h-120 flex pt-10">
        <div className=" h-100 w-200 pt-20 pl-40">
          <h1 className="font-bold text-5xl text-blue-950">
            Trello Dashboard <br /> view
          </h1>
          <br />
          <p className="text-lg  text-blue-950">
            Easily visualize, comprehend, and <br /> communicate your team’s
            state of work with <br /> Trello’s reporting tool.
          </p>
          <br />
          <Link to="/free-trial" className="h-12 inline-flex items-center justify-center w-30 rounded   border-2 border-violet-300 hover:bg-violet-200">
            Get Started
          </Link>
        </div>
        <img className="h-90 w-150 -ml-25" src={Dash1} alt="" />
      </section>
      <section className=" w-full h-185 items-center text-center bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300  ">
        <br />
        <br />
        <h1 className="font-bold text-4xl text-blue-950">
          Get actionable teamwork insights
        </h1>
        <br />
        <p className="text-blue-950  text-xl ">
          Lead your project successfully with powerful insights into your teams’{" "}
          <br />
          workload. Predict bottlenecks and anticipate team needs before they{" "}
          <br />
          become a problem.
        </p>
        <br />
        <img className="h-110 w-200 ml-90" src={Dash2} alt="" />
      </section>
      <section className=" h-100 w-full ">
        <div className=" h-80 w-140 p-18  ml-20">
          <h1 className="font-bold text-3xl text-blue-950">
            Build reports on specific <br /> data
          </h1>
          <br />
          <p className="text-blue-950  text-xl ">
            Quickly quantify how your team operates and <br /> get to the
            numbers via Dashboard—your <br /> unique project reporting needs all
            in one place <br /> such as due dates, card assignments, and <br />{" "}
            cards per label.
          </p>
        </div>
        <div>
          <img className="ml-180 h-70 -mt-62  w-135" src={Dash3} alt="" />
        </div>
      </section>
      <br />
      <section className=" h-90 w-full flex">
        <div>
          <img className="h-78 ml-35" src={Dash4} alt="" />
        </div>
        <div className="ml-24 mt-15">
          <h1 className="font-bold text-3xl text-blue-950">
            Speed up the decision- <br /> making process with <br /> tailored
            charts
          </h1>
          <br />
          <p className="text-blue-950  text-xl ">
            Customize charts to showcase project <br /> progress and tasks in an
            easy-to-read layout— <br />making decision-making and facilitation quick <br />
            between stakeholders.
          </p>
        </div>
      </section>
      <section className=" h-65 w-full bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 text-center ">
        <br /><br /><br />
      <h1 className="font-bold text-3xl text-blue-950 mt-2">
      Make better business decisions
          </h1>
          <p className="text-blue-950  text-xl mt-3 ">
          Start a free trial today
          </p><br />
          <Link to="/free-trial" className="h-12 bg-white inline-flex items-center justify-center w-30 rounded   border-2 border-violet-300 hover:bg-violet-200">
            Get Started
          </Link>
      </section>
      <UniversalFooter/>
    </div>
  );
};

export default Dashboard;
