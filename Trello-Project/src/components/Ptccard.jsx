import Ptccardimg from "../assets/Ptc-card-image.svg";
//  import Card1 from "./Card"
// import { Card2 } from "./Card";
// import { Card3 } from "./Card";
// import Cardbutton from "./Cardbutton";

function Ptccard() {
  return (
    <>
      <div className="flex flex-col  justify-center items-center pt-2 my-10 ">
        <p className="text-[20px] text[#091E42] mb-6 ">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <img src={Ptccardimg} alt="" className="w-220" />
      </div>
    </>
  );
}
export default Ptccard;
