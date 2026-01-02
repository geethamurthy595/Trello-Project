import Image1 from "../../assets/inbox-image1.png";
import Image2 from "../../assets/inbox-mobile.png";
import InstantImage from "../../assets/InstantImage.png";
import Seamless from "../../assets/Seamless.png";
import Intuitive from "../../assets/Intuitive.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";
import { Link } from "react-router-dom";

const Inbox = () => {
  return (
    <section>
      <NavBar/>
      <div className="site  w-full flex flex-col justify-center text-[20px] box-border font-normal">
        {/* Trello Inbox Section  */}
        <div className="trello-inbox w-full h-[418px] bg-gray-100  flex justify-center ">
          <div className="first-section  w-[475px] h-[418px] pt-[128px] pb-[16px] pr-[16px] pl-[16px] flex flex-col  gap-[2px]">
            <div className="heading  w-[443px] h-[98px] flex flex-col justify-between">
              <h1 className="text-[48px] font-medium ">Trello Inbox</h1>
              <p className="mb-[24px]">
                Capture, organize, and conquer every to-do
              </p>
            </div>
            {/* second section  */}
            <div className="button  w-[443px] h-[98px] flex flex-col mt-[20px]">
              <div className="button-inner w-[165px] h-[50px] border-sky-400 border rounded-[4.8px] pt-[11.2px] pb-[12.8px] pr-[16px] pl-[16px] text-[16px] bg-white hover:bg-sky-100 flex items-center">
                Try Inbox for free
              </div>

              <div className="para-section  w-[443px] h-[30px] mt-[10px]">
                <p>
                  {" "}
                  <a href="" className="text-blue-700 underline">
                    Learn more about Trello’s plans and pricing.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="second-section  w-[665px] h-[418px] pt-[48px] pb-[16px] pr-[16px] pl-[16px]">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="space-div w-full h-[64px] "></div>
        {/* capture anywhere section  */}
        <section className=" w-full h-[767px] flex items-center">
          <div className="main-container  w-[1140px] h-[767px] pl-[16px] pr-[16px] ml-[165px] mr-[165px] flex-col items-center">
            <div className="inner-first  w-[760px] h-[304px] pl-[16px] pr-[16px] pt-[80px] pb-[48px] ml-[189.98px] text-center  ">
              <h2 className="text-[2.25rem] leading-[1.333333]  font-medium mb-[8px] ">
                Capture anywhere, anytime
              </h2>
              <p className="text-[1.25rem] w-[728px] h-[120px] ">
                Say goodbye to lost to-dos and scattered ideas! Trello Inbox saves
                you from the chaos of emails, messages, and notes. Jot down
                thoughts as they come or effortlessly snatch snippets from your
                favorite tools—no need to organize <br /> them right away.
              </p>
            </div>
            <div className="inner-image  w-[950px] h-[463px] pt-[16px] pl-[16px] pr-[16px] pb-[80px] ml-[94.98px] flex justify-center">
              <img src={Image2} alt="" width="720" height="367" />
            </div>
          </div>
        </section>
        <div className="space-div w-full h-[64px] "></div>
        {/* Instant Capture  */}
        <div className="instant-capture-container  w-[1140px] h-[335px] ml-[165px] mr-[165px] pl-[16px] pr-[16px] flex">
          <div className="first-section  w-[570px] h-[335px] p-[16px]">
            <div className="inner-section  w-[475px] h-[224px]">
              <div className="instant-capture-heading  w-[443px] h-[64px]">
                <h2 className="mb-[8px] pb-[16px] text-[2.25rem] font-medium">
                  Instant Capture
                </h2>
              </div>
              <div className="para-section  w-[443px] h-[120px] ">
                <p className="text-left text-[1.25rem]">
                  No more missed opportunities! Capture tasks and ideas from
                  emails and your favorite messaging apps—like Slack and Microsoft
                  Teams—so nothing important slips away.
                </p>
              </div>
            </div>
          </div>
          <div className="second-section  w-[570px] h-[335px] p-[16px]">
            <img src={InstantImage} alt="" />
          </div>
        </div>
        {/* Space  */}
        <div className="space-div w-full h-[64px] "></div>
        {/* Seamless Organization  */}
        <div className="instant-capture-container  w-[1140px] h-[282px] ml-[165px] mr-[165px] pl-[16px] pr-[16px] flex">
          <div className="second-section  w-[570px] h-[335px] p-[16px]">
            <div className="inner-image-div w-[443px] h-[250px] ">
              <img src={Seamless} alt="" />
            </div>
          </div>
          <div className="first-section  w-[570px] h-[335px] p-[16px]">
            <div className="inner-section  w-[475px] h-[224px]">
              <div className="instant-capture-heading  w-[443px] h-[64px]">
                <h2 className="mb-[8px] pb-[16px] text-[2.25rem] font-medium">
                  Seamless Organization
                </h2>
              </div>
              <div className="para-section  w-[570px] h-[194px] ">
                <p className="text-left text-[1.25rem]">
                  Ready to tidy up? Simply drag and drop your captured items into
                  the right boards, making organization a <br /> breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Space  */}
        <div className="space-div w-full h-[64px] "></div>
        {/* Intuitive organization */}
        <div className="instant-capture-container  w-[1140px] h-[282px] ml-[165px] mr-[165px] pl-[16px] pr-[16px] flex">
          <div className="first-section  w-[570px] h-[335px] p-[16px]">
            <div className="inner-section  w-[475px] h-[224px]">
              <div className="instant-capture-heading  w-[443px] h-[64px]">
                <h2 className="mb-[8px] pb-[16px] text-[2.25rem] font-medium">
                  Intuitive organization
                </h2>
              </div>
              <div className="para-section  w-[443px] h-[120px] ">
                <p className="text-left text-[1.25rem]">
                  Got quick to-dos? Mark them "Done" straight from the Inbox and
                  keep your momentum going!
                </p>
              </div>
            </div>
          </div>
          <div className="second-section  w-[570px] h-[335px] p-[16px] ml-[120px]">
            <div className="inner-image-div w-[443px] h-[250px] mr-[100px]">
              <img src={Intuitive} alt="" />
            </div>
          </div>
        </div>
        <div className="space-div w-full h-[64px] "></div>
        {/* Join the Trello Inbox Revolution */}
        <section className="w-full h-[286px] bg-blue-600 flex justify-center">
          <div className="inner-container w-[1140px] h-[286px]  ml-[165px] mr-[165px] pl-[16px] pr-[16px]">
            <div className="inner-inner w-[1140px] h-[286px] pl-[16px] pr-[16px] pt-[48px] pb-[48px] flex flex-col items-center justify-between">
              <div className="heading-part w-[1108px] h-[116px]  text-center ">
                <h2 className="text-[2.25rem] leading-[1.333333] text-white">Join the Trello Inbox revolution!</h2>
                <p className="text-white">We’re thrilled to bring you Trello Inbox, and we want your input to make it even better! Try it out, share your feedback, and help us innovate the future of to-do list management.</p>
              </div>
              <Link to="/free-trial" className="get-started-button w-[120px] h-[50px] border flex items-center justify-center rounded-[4.8px] bg-white hover:bg-yellow-100 text-[1rem]"><a>Get started</a></Link>
            </div>
          </div>
        </section>
      </div>
      <UniversalFooter/>
    </section>
  );
};
export default Inbox;
