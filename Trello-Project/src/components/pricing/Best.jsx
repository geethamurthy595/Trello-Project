import Slide from "../../assets/Slider.png"


const Best = () => {
  return (
    <>
      <section className="h-100 w-full  flex justify-center  items-center  bg-gray-200">
        
        <img className="h-60 pl-30 " src={Slide} alt="" />

        <div className="h-80  w-230  ">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 ">
              Best-in-class security and centralized administration with
              Atlassian <br />
              Guard
            </h2>{" "}
            <br />
            <ul className="list-disc list-inside mt-3 font-medium space-y-1 ">
              <li>SAML single sign-on</li>
              <li>Enforced 2FA</li>
            </ul>{" "}
            <br />
            <p className="mt-3 text-black-600 text-sm leading-relaxed ">
              Atlassian Guard is a separate subscription that your company can
              enable <br /> across all your Atlassian products and starts at{" "}
              <span className="font-medium">$4/month/user</span>. Trello is an{" "}
              <br />
              Atlassian product.
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md border transition border-blue-400  hover:bg-blue-100">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Best;
