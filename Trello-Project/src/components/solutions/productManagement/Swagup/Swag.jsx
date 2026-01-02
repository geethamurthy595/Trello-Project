import React from "react";
import NavBar from "../../../NavBar";
import Swag1 from "../../../../assets/Swag1.png";
import Swaglogo from "../../../../assets/Swaglogo.webp";
import Swag2 from "../../../../assets/Swag2.webp";
import { ImQuotesLeft } from "react-icons/im";
import Swag3 from "../../../../assets/Swag3.webp";
import Coin from "../../../../assets/coinbase.svg";
import John from "../../../../assets/johnDeere.svg";
import Grand from "../../../../assets/Grand1.svg";
import Visa from "../../../../assets/visa.svg";
import Zoom from "../../../../assets/Zoom.webp";
import UniversalFooter from "../../../../components/UniversalFooter"
import ScrollProgressBar from "../scan2Cad/ScrollProgressBar";
const Swag = () => {
  return (
    <div>
      <NavBar />
      <ScrollProgressBar />
      <section
        className=" h-60 w-full bg-cover "
        style={{ backgroundImage: `url(${Swag1})` }}
      >
        <h1 className="text-white font-bold text-4xl text-center p-20">
          SwagUp + Trello
        </h1>
        <p className="text-white  text-xl font-semibold text-center -mt-15">
          Evolving From Innovative Idea To Multi-Million Dollar Business
        </p>
      </section>{" "}
      <br /> <br />
      <section className=" h-1330 w-full flex  flex-col  items-center ">
        <img className="h-15  w-70  " src={Swaglogo} alt="" />
        <br />
        <br />
        <h3 className="font-bold text-xl">
          New business ideas don’t find success without a solid support system.
        </h3>
        <p className="text-xl ml-6 text-gray-800 leading-8">
          Having systems and workflows doing their thing behind the scenes can{" "}
          <br />
          profoundly boost a business’s ability to get off the ground
          and—especially in <br /> the case of startups—to adapt as
          opportunities to innovate emerge. <br /> <br />
          When Michael Martocci set his entrepreneurial sights on the
          promotional <br /> products (AKA swag) industry and founded <a className="underline text-blue-600 hover:text-blue-800" href=""> SwagUp</a>
          (from his mom’s garage <br /> in New Jersey, naturally) he intended to
          build a swag provider for startups. <br /> But as an entrepreneur, he
          was constantly looking for new ideas and <br /> opportunities to
          innovate, and Trello made that possible.
        </p>{" "}
        <br />
        <h3 className="text-2xl font-semibold mr-100">
          SwagUp Finds Its Niche
        </h3>{" "}
        <br />
        <p className="text-xl text-gray-700 ml-10 leading-8">
          While swag has evolved way beyond branded mugs and water bottles—think{" "}
          <br />
          giant Jenga blocks and hoverboards (yes, hoverboards)—industry
          practices <br /> and vendor options have remained unchanged for years.
          “There are 20 or 30 <br /> companies that account for half of the
          revenue, and the other half is divided <br /> among about 30,000
          companies,” Michael says.
          <br />
          <br />
          This fragmentation makes for an unpleasant customer experience, to say{" "}
          <br />
          the least. Some patrons have to work with multiple vendors to get the
          products <br /> they need, making the ordering process time-consuming,
          overly complicated, <br /> and disconnected. Others choose to hire
          marketing agencies to manage the <br /> ordering process, which is
          less painful but more expensive. <br />
          <br />
          The realities of this flawed system crystalized for Michael when a
          company <br /> approached him asking for “a swag pack”—a collection of
          branded items—to <br /> distribute to new hires. "It’s a very
          laborious process to get a pack done, and <br /> it made us think that
          if one customer needed our help in this way, there were <br /> others
          out there that did, too,” he says. <br />
          <br />
          This realization led Michael to rethink his business approach and,
          ultimately, <br /> change course. Instead of ascribing to the
          cumbersome existing model, <br /> SwagUp would streamline the
          experience for customers, offering easy <br /> ordering and
          frictionless e-commerce experiences, in addition to design <br />{" "}
          services and kit assembly. They’d handle storage, fulfillment, and
          shipping <br /> too. In essence, SwagUp would shoulder the logistical
          burden that had <br /> traditionally fallen to customers, doubling
          down on the value of a seamless <br /> experience. <br />
          <br />
          In order to execute this ambitious pivot, Michael had to develop a
          system, <br /> quickly, that could manage the logistical and business
          workflows required to <br /> make his innovative idea a reality.
        </p>{" "}
        <br />
        <br />
        <br />
        <h3 className="text-2xl font-semibold mr-55">
          Building End-to-End Business Workflows
        </h3>{" "}
        <br />
        <h3>
          <ImQuotesLeft className="mr-155  size-10 text-cyan-500" />
        </h3>
        <h2 className="text-xl font-semibold text-gray-700 mr-5 -mt-9 leading-7">
          The minute you go into a Trello board, you understand <br />
          how it works. There’s not really a learning curve.
        </h2>
        <br />
        <br />
        <p className="text-xl text-gray-700 ml-7 leading-8">
          “I tell people I started this company with Wix, Typeform, and Trello.
          These are <br /> three out-of-the-box tools that are easily accessible
          and, to a degree, free,” <br /> Michael says. <br />
          <br />
          The first workflow Michael developed was a sales pipeline system to{" "}
          <br /> manage the entire customer lifecycle, from order submission to
          swag <br /> delivery. He chose Trello for its visual layout and
          process-driven design. He <br /> also knew it would be easy to train
          his employees on Trello—a key factor in <br /> getting his new
          initiative up and running fast. “The minute you go into a <br />{" "}
          Trello board, you understand how it works,” Michael says. “There’s not
          really <br />
          a learning curve.” <br />
          <br />
          Michael automated aspects of his sales pipeline using Zapier to save
          even <br /> more time. When a customer submitted an order on SwagUp’s
          website, <br /> Zapier automated a Trello card, which in turn alerted
          SwagUp. The card was <br /> assigned to a designer, then passed to
          account management, and so forth. <br /> As cards moved across the
          Trello board, the team could visualize where each <br /> customer was
          in the process and what needed to happen next.
        </p>
        <br />
        <img className="h-105" src={Swag2} alt="" />
        <br />
        <p className="text-xl text-gray-700 ml-7 leading-8">
          Once Michael saw how well Trello supported his sales process, he moved{" "}
          <br />
          additional team workflows to the platform. He built an operations
          board to <br /> manage procurement and vendor orders. Swag fulfillment
          is heavy on <br /> details, and Trello served as a central location to
          monitor and manage those <br /> details. “We tracked everything in
          that board—the date we needed an item <br /> by, the colors—all of
          it,” Michael says.
        </p>
        <br />
        <br />
        <h3>
          <ImQuotesLeft className="mr-155  size-10 text-cyan-500" />
        </h3>
        <h2 className="text-2xl font-semibold text-gray-700 -mr-15 -mt-12  leading-8">
          We had checklists in our cards to make sure we had all <br /> the
          information our ordering team needed to do its job.
        </h2>{" "}
        <br />
        <img className="h-105" src={Swag3} alt="" />
        <br />
        <p className="text-xl text-gray-700 ml-7 leading-8">
          From the operations board, order requests were sent to vendors,
          triggering a <br /> fulfillment workflow. Vendors indicated on Trello
          cards whether they had <br /> accepted an order and when the order had
          shipped. Then, as SwagUp’s <br /> fulfillment workflow grew more
          robust, Michael began to see the value of <br /> Power-Ups—which add
          more functionality and integrations with other key <br /> business
          tools to any Trello board. <br />
          <br /> For six months, SwagUp operated on a free version of Trello,
          but Michael <br />
          grew eager to build out its functionality, especially to include
          shipping <br /> information on their cards. The Package Tracker
          Power-Up attaches tracking <br /> numbers from shipments right to
          Trello cards providing up-to-date progress <br /> and delivery dates
          right in Trello. “We have hundreds of packages going in <br /> and out
          every day. It’s helpful to look at a card and see if a package has{" "}
          <br /> arrived or not and understand where it is,” he says.
        </p>
        <br />
        <h3 className="text-2xl font-semibold mr-85">
          SwagUp Gets Their Swagger
        </h3>
        <br />
        <h3>
          <ImQuotesLeft className="mr-155  size-10 text-cyan-500" />
        </h3>
        <h2 className="text-2xl font-semibold text-gray-700 -mr-30 -mt-12  leading-8">
          I don’t know any other way we could’ve done it. We <br /> wouldn’t
          have survived without Trello.
        </h2>
        <br />
        <p className="text-xl text-gray-700 ml-7 leading-8">
          In a little over two years, an innovative business idea has become an{" "}
          <br />
          innovative business, and Michael credits Trello for playing an
          essential role in <br /> that transformation. And the company’s
          investment in a new customer <br /> experience within a static
          industry is returning results: SwagUp has acquired <br /> 800
          customers, is nearing its two-thousandth order, and projects its gross{" "}
          <br /> annual revenue will be between $8MM and $9MM in 2019. <br />
          <br /> "I don’t know any other way we could’ve done it. We wouldn’t
          have survived <br /> without Trello,” Michael says. “Not only did it
          unify our process and help <br /> everyone understand their role, but
          we were able to automate essential <br /> steps of the process so we
          could move a lot faster and grow to a multi- <br />
          million dollar company with a team of ten.”
        </p>
        <br />
        <br />
        <div className="h-100 w-250  flex  justify-center">
          <p className="text-xl font-medium text-gray-700">
            Join over 2,000,000 teams worldwide who are using Trello to get more
            done.
          </p>{" "}
          <br />
          <img className="absolute left-120 mt-20" src={Coin} alt="" />
          <img className="absolute left-167 mt-20" src={John} alt="" />
          <img className="absolute left-218 mt-20" src={Grand} alt="" />
          <img className="absolute mt-50 left-150" src={Visa} alt="" />
          <img className="h-20 absolute  left-200 mt-50" src={Zoom} alt="" />
        </div>{" "}
        <br />
        <div class="bg-blue-950 h-35 w-280 text-white p-6 rounded-lg shadow-md leading-8 ">
          <h3 class="text-sm uppercase tracking-wider font-semibold ml-10">
            Now Available
          </h3>
          <p class="text-[20px] mt-2 ml-10 font-semibold ">
            A 14-Day Free Trial of Premium! <br />
          </p>
          <p className="ml-10">
            Get unlimited boards, Trello views, and limitless automation, plus a
            lot more.
          </p>
          <button class=" -mt-15 float-end bg-white  cursor-pointer hover:bg-blue-200 text-blue-950 ml-220  font-semibold py-2 px-4 rounded-md">
            Try it today
          </button>
        </div>
        <button className="mt-12 cursor-pointer h-13 ml-200 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-800">
          Trello customer case studies
        </button>
      </section>
      <UniversalFooter />
    </div>

  );
};

export default Swag;
