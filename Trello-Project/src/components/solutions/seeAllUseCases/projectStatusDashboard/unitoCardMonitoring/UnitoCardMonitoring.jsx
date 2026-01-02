import React from "react";
import NavBar from "../../../../NavBar";
import { Link } from "react-router-dom";
import img from "../../../../../assets/Unito-avatar-white-symbol.svg";
import img1 from "../../../../../assets/ae7e63776f2f61b39c2b.svg";
import img2 from "../../../../../assets/Mirror_New.gif";
import small from "../../../../../assets/small2.png"

const UnitoCardMonitoring = () => {
  return (
    <>
      <NavBar />
      <main className="h-full w-full flex">
        <section>
          <div className="w-[500px] ml-[47%] pt-[25px] sticky top-0">
            <h1>
              <Link to="/power-ups" className="hover:underline">
                Power-Ups
              </Link>{" "}
              /{" "}
              <Link className="hover:underline">
                2-Way Card Mirror Plus by Unito
              </Link>
            </h1>
            <img
              src={img}
              alt=""
              className="h-[250px] w-[250px] pt-[20px] leading-nano"
            />
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="pt--2">Made by Unito</div>
            </div>
            <div className="flex gap-2">
              <div className="border-1 border-gray-400  flex rounded-[5px]">
                <svg
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h1>50,000+</h1>
              </div>
              <div className="border-1 border-gray-400  bg-[var(--ds-background-accent-purple-subtlest,#f3f0ff)] rounded-[5px]">
                <h1>❤️Staff pick</h1>
              </div>
            </div>
            <hr class="my-4 h-px bg-current opacity-20 border-0 w-[52%] " />
            <h1 className="text-xl leading-normal font-medium">Categories</h1>
            <div className="flex gap-2">
              <div className="border-1 border-gray-400  flex">
                <Link to="/power-ups/category/board-utilities">
                <h1 className="text-sm text-center p-1">
                  Board Utilities
                </h1>
                </Link>
              </div>
              <div className=" border-gray-400 border-1">
                <Link to="/power-ups/category/automation"><h1 className="text-sm text-center p-1">
                  Automation
                </h1></Link>
              </div>
            </div>
            <hr class="my-4 h-px bg-current opacity-20 border-0 w-[52%] " />
            <div>
              <div className=" h-[25px] w-[52%] flex">
                <svg
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 17V8.831L9.756 13.586C10.973 14.805 12.948 14.805 14.166 13.586L19 8.752V17H5ZM17.924 7L12.752 12.172C12.315 12.609 11.607 12.609 11.169 12.172L5.998 7H17.924ZM19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h1>Contact Support</h1>
              </div>
              <div className="h-[25px] w-[52%] flex">
                <svg
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h1>Privacy Policy</h1>
              </div>
            </div>
            <hr class="my-4 h-px bg-current opacity-20 border-0 w-[52%] " />
            <div className=" h-[25px] w-[52%] flex">
              <img src={img1} alt="" className="h-4 w-4 mt-12" />
              <p className="ml-2">
                2-Way Card Mirror Plus by Unito <br /> stores personal data and
                is in <br /> compliance with <Link to="/legal/privacy-policy" className="underline text-[rgb(0,82,204)]">Trello's data <br /> and privacy
                practices.</Link>
              </p>
            </div>
            <hr class="my-22 h-px bg-current opacity-20 border-0 w-[52%] " />
          </div>
        </section>
        <section className="ml-[5%]">
          <h1 className="mt-[8%] text-3xl leading-realxed font-bold overflow-y-auto">
            2-Way Card Mirror Plus by Unito
          </h1>
          <h1 className="text-2xl font-bold">
            Duplicate cards in just a single click and keep them all in <br />{" "}
            sync automatically.
          </h1>
          <br />
          <p>
            Unito’s one-click mirror solution lets you create multiple copies of
            Trello cards in any other <br /> boards you control and keep them
            all mirrored in a perfect 2-way sync.
            <br />
            <br />
            Whether you’re changing the original or any mirrored card, your
            updates will be reflected <br /> instantly in real-time.
          </p>
          <hr class="my-6 h-px bg-current opacity-20 border-0 w-[700px] " />
          <img src={img2} alt="" className="h-[320px] w-[660px]" />
          <br />
          <p>
            "It has simplified my workflows immensely - I honestly could not run
            my business <br /> without it <br />
            Unito allows me to not only sync all of my tasks in one place, but
            the mirror function <br /> (absolute game changer!) means I don’t
            have to double handle the cards. I can <br /> complete tasks on the
            checklists, add comments, change due dates etc. without having{" "}
            <br /> to leave my main board."
          </p>
          <h1 className="text-xl font-bold">
            — Jessica Lorraine, Lorraine Virtual
          </h1>
          <p>
            "Unito is an amazing integration and tool that allows you to either
            mirror cards or sync <br /> boards, making Trello an even more
            functional and powerful tool to use across clients,
            <br /> projects, functions, and so much more."
          </p>
          <h1 className="text-xl font-bold">— Karina, COO at Right-Size</h1>
          <hr class="my-6 h-px bg-current opacity-20 border-0 w-[700px] " />
          <h1 className="text-2xl font-bold">The challenge</h1>
          <p>
            Each team — and sometimes each person — has their own board. <br />{" "}
            Successful collaboration in project management often requires
            jumping from board to <br /> board and updating cards in multiple
            places, just to keep everyone in the loop.
          </p>

          <h1 className="text-2xl font-bold">How does Mirror Plus work?</h1>
          <p>
            With Mirror Plus by Unito, you don’t need to <br /> manually copy
            paste information from card to card or board to board. Instead you
            can link cards between boards automatically. Then,
            <br /> changes to one card are instantly updated in all other
            mirrored cards.
          </p>
          <br />
          <h1 className="text-2xl font-bold">
            Support for essential Trello fields
          </h1>
          <br />
          <p>
            You can mirror the entire card so everyone has the complete story,
            or you can choose <br /> specific fields to mirror and cater each
            card to the needs of a specific board. Mirror Plus <br /> by Unito
            instantly syncs: <br />
            -Attachments
            <br />
            -Labels
            <br />
            -Due dates
            <br />
            -Checklists
            <br />
            -Custom fields
            <br />
            -Card title
            <br />
            -Description
            <br />
            -Comments
          </p>
          <hr class="my-6 h-px bg-current opacity-20 border-0 w-[700px] " />
          <h1 className="text-2xl font-bold">
            How is this different from Trello's mirrored cards?
          </h1>
          <br />
          <p>
            Trello's mirror cards allow you to copy a Trello card onto a
            different board in just a few <br /> clicks. Think of the
            newly-created card as a preview of the original. They're not really{" "}
            <br /> distinct items. That makes this a simple, easy mirror to set
            up, but it can lead to some <br /> limitations, especially around
            deletion and automation.
          </p>
          <br />
          <p>
            Instead of creating a preview of a mirrored card, Unito’s Mirror
            Plus Power-Up creates <br /> new Trello cards on other boards. This
            is an important distinction for a few reasons: <br />
            -You can use other Power-Ups and automations with cards mirrored
            using Unito’s <br /> Power-Up. <br />
            -A single card can be mirrored to multiple boards at once, with
            changes to the original <br /> card being automatically reflected in
            all boards. <br />
            -Cards mirrored with Unito’s Power-Up can be synced to other tools.{" "}
            <br />
            -Unito’s Power-Up supports syncing labels, custom fields, and more.
          </p>
          <hr class="my-6 h-px bg-current opacity-20 border-0 w-[700px] " />
          <h1>
            Tired of jumping between boards to source information <br /> or copy
            and paste updates? Try Mirror Plus to get the <br /> most out of
            Trello and completely transform the way your <br /> teams
            collaborate.
          </h1>
          <br />
          <p>
            Mirror Plus is a paid Power-Up, but you can try it out free for 14
            days, no credit card <br /> required.
          </p>
          <Link to="">Learn more about Unito Card Mirroring</Link>
        </section>
      </main><br /><br /><br />
      <div className="pt-5  flex justify-center ">
                      <ul className="flex gap-4 mb-2 mt-0">
                          <li><Link to="/templates" className="underline">Templates</Link></li>
                          <li><Link to="/pricing" className="underline">Pricing</Link></li>
                          <li><Link to="/platforms" className="underline">Apps</Link></li>
                          <li><Link to="/company/careers" className="underline">Jobs</Link></li>
                          <li><Link to="/blog" className="underline">Blog</Link></li>
                          <li><Link to="/cloud/trello/" className="underline">Developer</Link></li>
                          <li><Link to="/about" className="underline">About</Link></li>
                          <li><Link to="/trello/" className="underline">Help</Link></li>
                          <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Legal</Link></li>
                          <li><Link to="/legal/privacy-policy" className="underline">Privacy</Link></li>
                          <li><Link to="/integrations" className="underline">Integrations</Link></li>
                          <li><Link to="/contact/" className="underline">Contact us</Link></li>
                          <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Terms</Link></li>
                      </ul>
                  </div>
      <footer>
                      <div className="m-auto flex flex-wrap justify-center w-120">
                          <img src={small} alt="" width={170} />
                          <p className="text-xs font-medium  text-gray-700 pt-1  pl-3"> © Copyright 2025. All rights reserved.</p>
                      </div>
                  </footer><br /><br /><br />
    </>
  );
};

export default UnitoCardMonitoring;
