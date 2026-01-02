import Customer from "../../assets/Customer.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";

const CustomerStories = () => {
  return (
    <>
    <NavBar/>
      <div className="site h-full w-full leading-[1.5] bg-blue-950 overflow-hidden ">
        <main className=" w-full h-[1612px] flex flex-col items-center bg-blue-950">
          <section className="  h-[536px] w-[1470px] ">
            <div className="inner-container  w-[1140px] h-[536px] ml-[165px] mr-[165px] pl-[16px] pr-[16px] flex items-center ">
              <div className="first-section  w-[665px] h-[302px] pt-[128px] pb-[16px] pl-[16px] pr-[16px] ">
                <div className="content  w-[633px] h-[158px] text-white ">
                  <h1 className="mb-[8px] text-[3rem] ">
                    Trello Customer Stories
                  </h1>
                  <p className="text-left text-[1.25rem]">
                    Trello is used by thousands of businesses every day. Click on
                    the awesome companies below to see how they've adopted Trello
                    as a vital part of their workflow.
                  </p>
                </div>
              </div>
              {/* Image Section  */}
              <div className="image-div w-[475px] h-[536px]  pt-[128px] pb-[16px] pl-[16px] pr-[16px]">
                <img src={Customer} alt="" />
              </div>
            </div>
          </section>
          {/* Boxes Section  */}
          <section className=" w-full h-[1076px] flex justify-center">
            <div className="inner-div  h-[1076px] w-[1140px]   flex flex-col">
              {/* 1st Row  */}
              <div className="first-row  h-[365px] w-[1140px] flex ">
                {/* Palace Law  */}
                <div className="box h-[365px] w-[383px]  pt-[80px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/2JAuZCHB0aawpz51Izh6qz/3bc4af2dcb8da3c8ef604023cd71d213/PalaceLaw.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          Palace Law
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Justice for working men and women. Thriving with less
                          paper, more revenue, and happier clients.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Instinct  */}
                <div className="box h-[365px] w-[383px]  pt-[80px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/dW06DfsoHNzdjLekQr0Ih/51af6211bb98d1e88b80b397ac96854d/Instinct.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          Instinct
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Dog behaviour & training - Taking a custom approach to
                          top dog care nationwide.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Scan 2 CD */}
                <div className="box h-[365px] w-[383px]  pt-[80px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/1Q15EqkKQNFg5O9SKQtLgW/30d3ff3ba642f2d67cbb5b579b200422/Scan2CAD.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          Scan2CAD{" "}
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Converting customer files and company workflows.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* 2nd Row  */}
              <div className="first-row  h-[300px] w-[1140px] flex ">
                {/* Desk Plants */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/79BsJfstkgq2CqzVnhePMw/c27c311aaabce13a2df78842d3cc6652/DeskPlants.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          Desk Plants
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Sprouting small business success with 30% increase in
                          sales.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* SwagUp */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/77al6wLWTcW1j4Hpl6CzGG/d98a159df83ed3389aef4dae38e0ffbe/SwagUp.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          SwagUp
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Evolving from innovative idea to multi-million dollar
                          business.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>{" "}
                {/* UNICEF */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/4rl9Xws7gWD8z1ENT3WYWh/5a8d1f43a05b3d7a064009712bb1db65/UNICEF.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          UNICEF
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          United Nations Children’s Fund - Helping others when
                          they need it most.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* 3rd Row  */}
              <div className="first-row  h-[300px] w-[1140px] flex ">
                {/* BurgerFi */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5HVsAerBeQFQgyHoODklXx/102c0f0891573d1d26f7906fc59ea98d/BurgerFi.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          BurgerFi
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Growing an on-brand franchise business–fast.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* DoSomething.org  */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/5ovFIvcFx1UhmQkJWjlPWx/3a454c842bf1af9e460126647687e371/DoSomething.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          DoSomething.org
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Enabling social change to happen at scale.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>{" "}
                {/* McCorvey  */}
                <div className="box h-[300x] w-[383px]  pt-[16px] pb-[16px] pr-[16px] pl-[16px] ">
                  <a href="" className="">
                    <div className="inner-box h-[268px] w-[348px]  font-normal">
                      <div className="background-image h-[99px] w-[348px] ">
                        <img
                          src="https://images.ctfassets.net/rz1oowkt5gyp/1uYEOkqLj4OI5eZmD9SJXs/ec04c69e375005c6ec0e0dd6aa9a032c/McCorvey.png"
                          alt=""
                        />
                      </div>
                      <div className="content   h-[170px]  pl-[16px] pr-[16px] pt-[24px] pb-[24px] bg-white ">
                        <h3 className="mb-[8px] text-[1.5rem] underline font-medium">
                          McCorvey
                        </h3>
                        <p className=" text-[1rem] ">
                          {" "}
                          Industrial fabrication - Making history with a paperless
                          manufacturing process.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <UniversalFooter/>
    </>
  );
};
export default CustomerStories;
