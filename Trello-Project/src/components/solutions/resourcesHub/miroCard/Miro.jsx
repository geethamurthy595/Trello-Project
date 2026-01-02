import rocket from "../../../../assets/mirorocket.svg";
import mirousers from "../../../../assets/mirousers.svg";
import mirosupport from "../../../../assets/mirosupport.svg";
import miroencrypt from "../../../../assets/miroencrypt.svg";
import miroinfo from "../../../../assets/miroinfo.svg";
import NavBar from "../../../NavBar";
import AtlassianFooter from "../../taskManagement/AtlassianFooter";

function Miro() {
  return (
    <>
    <NavBar />
      <section className="w-[900px] flex flex-row gap-6 m-auto mt-15 ">
        <div id="left" className="h-[800px] pt-10 sticky top-10 transition-all">
          <p>
            <a href="" className="hover:underline">
              Power-Ups / Miro
            </a>
          </p>
          <img
            src="https://miro.com/static/images/trello-asset/v1/rounded-miro-icon-144x144.svg"
            alt=""
            className="w-60 mt-10"
          />
          <br />
          <p className="flex gap-2 items-center">
            <img src={rocket} alt="" className="w-4 h-4" />
            Made by Miro
          </p>
          <p className="bg-gray-100 w-25 rounded-sm flex gap-2 items-center justify-center text-gray-500 text-[15px]">
            <img src={mirousers} className="h-4 w-4" alt="" />
            50,000 +
          </p>
          <br />
          <hr />
          <h1 className="font-semibold ">Categories</h1>
          <br />
          <div className="flex flex-col gap-3">
            <button className="border border-gray-400 h-8 w-50 rounded-sm text-[13px] hover:cursor-pointer">
              Communication & Collabaration
            </button>
            <button className="border border-gray-400 h-8 w-30 rounded-sm text-[13px] hover:cursor-pointer">
              Product & Design
            </button>
          </div>
          <br />
          <hr />
          <br />
          <a
            href="https://support.atlassian.com/contact/#/"
            className="flex gap-2 items-center hover:text-blue-500 hover:underline"
          >
            <img src={mirosupport} alt="" className="h-5  " />
            Contact Support
          </a>
          <br />
          <a href="" className="flex items-center gap-2 hover:text-blue-500 hover:underline">
            <img src={miroinfo} alt="" className="h-5" />
            Privacy Policy
          </a>
          <br />
          <br />
          <hr />
          <br />
          <div className="flex gap-3 w-55 items-center">
            <div>
              <img src={miroencrypt} alt="" className="h-7 w-7" />
            </div>
            <div>
              Miro is in compliance with{" "}
              <span className="text-blue-600 underline hover:cursor-pointer">
                Trello's data and privacy practices.
              </span>{" "}
            </div>
          </div>
          <br />
          <hr />
        </div>
        <div id="right" className="w-230 mt-10">
          <div className="flex gap-100">
            <h1 className="text-3xl font-medium ">Miro</h1>
            <button className="bg-blue-500 rounded-sm h-10 w-30 mb-10 text-white hover:cursor-pointer">
              Add Power-Up
            </button>
          </div>
          <p>
            Miro is the online collaborative whiteboard platform that enables
            distributed teams to work effectively together from brainstorming
            with digital sticky notes to planning and managing agile workflows. <br /><br />
            With this Power-Up you can provide better visual context for your
            Trello cards with a bi-directional integration to Miro. Embed and
            access user story maps, customer journey maps, PI planning results,
            brainstorms, architecture designs, flowcharts, UX flows, and more
            and know that wherever you update Miro boards, they’ll be updated
            everywhere. <br /><br /> You can also create new Miro boards from within Trello,
            see which boards have been updated and who is currently online. <br /><br /><span className="text-blue-600 underline hover:cursor-pointer"> Sign
            up for a free Miro account </span> to add better context to your Trello
            cards.
          </p>
          
          <br />

           <h1>Screenshots</h1><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />

      <h1>Screenshots</h1><br />
      <p>[image]</p><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />

      <h1>Screenshots</h1><br />
      <p>[image]</p>
      <p>[image]</p><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />


      <h1>Screenshots</h1><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
      <p>[image]</p>
      <p>[image]</p><br />

       <h1>Screenshots</h1><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
      <p>[image]</p><br />

      <h1>Screenshots</h1><br />
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p>
      <p>[image]</p><br />
      <div className=" w-60 h-50 flex flex-col items-center justify-center bg-gray-100 rounded-5 ml-50">
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#ffab00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"></path></svg>
        <p>Preview unavailable</p>
      </div><br />
          
        </div>
     </section>
      <br />
      <br />
      <br /><br />
      <AtlassianFooter />
    </>
  );
}
export default Miro;
