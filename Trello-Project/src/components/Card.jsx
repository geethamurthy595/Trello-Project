import wclogo from "../assets/WomenWhoCode_logo.svg"
function Card1() {
    return (
        <>
            <div className="bg-blue-50 h-[500px] w-[85%] ml-30 mr-30 mb-10  mt-5 flex flex-row border-[1px]  border-[#ccc] rounded-[10px] select-none cursor-pointer">
                <div className="inline w-[65%] rounded-[10px]">
                    <p className="text-[#091e42] text-[24px] tracking-[0px] leading-[40px] pt-10 pl-8 pr-20 text-justify mb-20">[Trello is] great for simplifying complex processes .As a manager , I can chunck [processes]  simply down into bite-sized all pieces for my team and then delegate that out,but still keep a bird's-eye view.</p>
                    <div className="pt-10 pl-8 pr-20  border-b border-black w-40 ml-9" ></div>
                    <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Joey Rosenberg</p>
                    <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Global Leadership Director at Womaen Who Code</p>
                    <div className=" flex flex-row justify-between m-10 mt-10 mb-10">
                        <img src={wclogo} alt=" hhh" className="h-8" />
                        <a href="https://www.atlassian.com/blog" className="text-blue-600 underline font-bold">Read the Story</a>
                    </div>
                </div>
                <div className="inline w-[35%] bg-blue-900 rounded-r-[10px]">
                    <p className="text-[36px] text-[#ffffff] pt-10 pl-8 pr-20 pb-12 leading-[45px]">75% of organizations report that Trello delivers value to their business within 30 days</p>
                    <a href="https://www.surveymonkey.com/use-cases/customer-stories-and-advocacy/" className=" text-white underline   mt-60  pl-8 pr-20 font-bold">Trello TechValidate Survey</a>
                </div>

            </div>
        </>
    )

}



import thoughtlogo from "../assets/thoughtworks-logo.svg"
export function Card2() {
    return (<>

        <div className="bg-blue-50 h-[500px] w-[85%] ml-30 mr-30 mb-10  mt-5 flex flex-row border-[1px]  border-[#ccc] rounded-[10px] select-none cursor-pointer">
            <div className="inline w-[65%] rounded-[10px]">
                <p className="text-[#091e42] text-[24px] tracking-[0px] leading-[40px] pt-10 pl-8 pr-20 text-justify mb-20">Whether someone is in the office , working from home  ,or working on-site with a client , everyone can share context and information through Trello.</p>
                <div className="pt-10 pl-8 pr-20  border-b border-black w-40 ml-9 mt-25" ></div>
                <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Sumeet Moghe</p>
                <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Product Manager at ThoughtWorks</p>
                <div className=" flex flex-row justify-between m-10 mt-10">
                    <img src={thoughtlogo} alt=" hhh" className="h-10" />
                    <a href="https://www.atlassian.com/customers/thoughtworks" className="text-blue-600 underline font-bold">Read the Story</a>
                </div>
            </div>
            <div className="inline w-[35%] bg-blue-900 rounded-r-[10px] ">
                <p className="text-[36px] text-[#ffffff] pt-10 pl-8 pr-20 pb-56 leading-[45px] ">81% of customers chose Trello for its ease of use</p>
                <a href="https://www.surveymonkey.com/use-cases/customer-stories-and-advocacy/" className="text-white underline   mb-50  pl-8 pr-20 pt-90 font-bold">Trello TechValidate Survey</a>
            </div>

        </div>
    </>
    )

}




import ptclogo from "../assets/ptc-logo.svg"
export function Card3() {
    return (
        <>

            <div className="bg-blue-50 h-[500px] w-[85%] ml-30 mr-30 mb-10  mt-5 flex flex-row border-[1px]  border-[#ccc] rounded-[10px] select-none cursor-pointer">
                <div className="inline w-[65%] rounded-[10px]">
                    <p className="text-[#091e42] text-[24px] tracking-[0px] leading-[40px] pt-10 pl-8 pr-20 text-justify mb-20">We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language diffrences.</p>
                    <div className="pt-10 pl-8 pr-20  border-b border-black w-40 ml-9" ></div>
                    <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Jefferson Scomacao</p>
                    <p className="text-[#091e42] text-[16px] tracking-[0px] leading-[0px] pt-10 pl-8 pr-20 text-justify font-bold mb-0">Development Manager at IKEA/PTC</p>
                    <div className=" flex flex-row justify-between m-10 mt-15">
                        <img src={ptclogo} alt=" hhh" className="h-8" />
                        <a href="https://www.atlassian.com/customers/ptc" className="text-blue-600 underline font-bold">Read the Story</a>
                    </div>
                </div>
                <div className="inline w-[35%] bg-blue-900 rounded-r-[10px]">
                    <p className="text-[36px] text-[#ffffff] pt-10 pl-8 pr-20  pb-4 leading-[45px]">74% of customers say Trello has improved communication with their co-workers and teams.yy</p>
                    <a href="https://www.surveymonkey.com/use-cases/customer-stories-and-advocacy/" className="text-white underline     pl-8 pr-20  font-bold">Trello TechValidate Survey</a>
                </div>

            </div>
        </>
    )

}

export default Card1