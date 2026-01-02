import Slider1 from "../../assets/Slider1.svg";
import Slider2 from "../../assets/Slider2.svg";
import Slider3 from "../../assets/Slider3.svg";
import Slider4 from "../../assets/Slider4.svg";
import Slider5 from "../../assets/Slider5.svg";
import Slider6 from "../../assets/Slider6.svg";
import horse from "../../assets/johnDeere.svg";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";

let Automation = () => {
  return (
    <>
      <section>
        <NavBar/>
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-900 to-blue-500 px-45 py-16 rounded-lg h-130 text-white">
          {/* Left Content */}
          <div className="   ">
            <h1 className="text-5xl font-semibold mb-4">
              Automate your workflow <br /> with Trello
            </h1>
            <p className="text-white-900 w-[500px] mb-8 text-lg">
              Powerful no-code automation is built into every Trello board. With
              Automation, you can focus on the work that matters most.
            </p>
            <p className="text-gray-200 mb-6 text-lg">
              Start automating today – It’s free!
            </p>
            <button className="bg-white text-blue-900 font-medium px-5 py-2 rounded-md shadow hover:bg-gray-200  transition">
              Try Butler
            </button>

            <div className="mt-4">
              <a
                href="#"
                className="underline text-gray-300 hover:text-white  text-lg"
              >
                Learn more about Trello's plans and pricing.
              </a>
            </div>

            <img className="absolute  right-46 top-19.5" src={Slider1} alt="" />
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-100 to-white">
          <div className="flex flex-col items-bottom justify-center min-h-screen   ">
            {/* Heading */}
            <h1 className="text-center text-3xl md:text-3xl font-semibold text-gray-800 mb-10">
              Create rules, buttons, and commands to <br />
              automate almost any action in Trello.
            </h1>
            <img className="h-90 w-full" src={Slider2} alt="" />
            /* {/* Cards Container */}
            <div className="flex flex-col md:flex-row items-center gap-6"></div>
          </div>

          <section className=" flex px-[200px] gap-30 h-[500px] ">
            <img
              className="absolute left-40 "
              src={Slider3}
              width={500}
              alt=""
            />
            <div className=" flex items-start"></div>

            <div className=" h-110 w-160  ml-104">
              <h2 className="text-3xl h-3 w-70 font-semibold text-gray-900 ">
                Rule your boards
              </h2>
              <br />
              <br />
              <p className="bg-gradient-to-r from-blue-900 to-blue-500  h-[5px] w-[50%] mt-3"></p>
              <br />

              <p className="text-xl">
                Setting rules means important tasks won’t fall <br /> through
                the cracks. Just set a trigger and the <br /> actions to be
                performed, and let Automation <br /> run the show. Doesn’t that
                rule?
              </p>

              <button className="mt-6 text-2xl font-semibold hover:underlin hover:underline ">
                + How to try it
              </button>
            </div>
          </section>

          <div className="flex items-center gap-[20px] py-10 rounded-xl  ">
            {/* Left Content */}
            <div className="mx-w-md  ml-40">
              <h2 className="text-3xl font-semibold text-gray-900 mb-3 px-[30px]">
                Move work forward
              </h2>
              <div className=" bg-blue-600 my-3 h-[5px] w-[50%] ml-6"></div>

              <p className="text-black-600 text-xl px-[30px] mr-50">
                <br />
                Get to the next step faster with custom card <br /> and board
                buttons. Card buttons appear on <br />
                the back of every card, and board buttons are <br />
                in the top right corner. They both perform a <br /> series of
                actions in a <br />
                single click!
              </p>

              <button className="mt-6 text-2xl font-semibold hover:underline px-[30px]">
                + How to try it
              </button>
            </div>
            <img ClassName="flex mr-39 " src={Slider4} width={500} alt="" />
          </div>

          <div className=" flex px-[200px] gap-30 h-[500px] ">
            <img src={Slider5} width={500} alt="" />
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                  Integrate your favorite apps
                </h2>
                <p className="bg-gradient-to-r from-blue-900 to-blue-500  h-[5px] w-[50%]"></p>
                <br />
                <p className="text-black-600 text-xl ">
                  The power of Trello’s automation can be extended beyond the
                  boundary of your boards with integrations for Slack, Jira, and
                  email. Trello can post messages to Slack channels, create new
                  Jira tickets, post comments to existing tickets, and send
                  automated emails right from your boards.
                </p>

                <button className="mt-6 text-black-600 text-2xl font-semibold hover:underline">
                  + Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[170px] p-10 rounded-xl min-h-screen px-6 py-12">
            {/* Left Content */}
            <div className=" ml-50 ">
              <h2 className="text-3xl font-semibold text-gray-900  mb-3">
                {" "}
                <br />
                Intelligent automation tips
              </h2>
              <p className="bg-gradient-to-r from-blue-900 to-blue-500  h-[5px] w-[50%]"></p>

              <p className="text-black-600 text-xl px-[40]">
                {" "}
                <br />
                As you use a Trello board, Automation will <br /> recognize
                repetitive actions being performed <br /> and suggest
                automations based on those <br />
                actions that can be enabled in a single click.
              </p>
            </div>
            <img className="mr-39" src={Slider6} width={500} alt="" />

              
          </div>

          <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-24 mb-15 px-6 ml-39 text-center rounded-xl w-6xl ">
            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
              <span className="text-4xl font-semibold">coinbase</span>
              <img ClassName="" src={horse} width={100} height={120} alt="" />
              <span className="text-300 font-bold absolute left-155 pt-6 text-center">
                JOHN DEERE
              </span>
              <span className="text-lg font-normal">GRAND | HYATT</span>
              <span className="text-4xl font-semibold">Google</span>
            </div>

            <div className="flex justify-center items-center gap-16 mb-12">
              <span className="text-5xl font-bold">VISA</span>
              <span className="text-6xl font-bold">zoom</span>
            </div>

            {/* Text */}
            <h2 className="text-3xl font-semibold mb-4">
              Companies of all shapes and sizes use Trello.
            </h2>
            <p className="text-white text-lg">
              Check out some of our customer stories{" "}
              <a
                href="#"
                className="text-white  text-2xl underline hover:text-blue-300"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <UniversalFooter/>
      </section>
    </>
  );
};
export default Automation;
