import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { CiSliderHorizontal } from "react-icons/ci";

const notificationItems = [
  {
    id: "comments",
    title: "Comments",
    desc: "New comments added on cards you're watching",
  },
  {
    id: "due",
    title: "Due dates",
    desc: "Due dates are added, changed, or approaching on a card you’re watching",
  },
  {
    id: "removed",
    title: "You're removed from a card",
    desc: "Someone removes you as a member from a card",
  },
  {
    id: "attachments",
    title: "Attachments added",
    desc: "Files or links added to cards you’re watching",
  },
  {
    id: "created",
    title: "Cards created",
    desc: "New cards created on boards you're watching",
  },
  {
    id: "moved",
    title: "Cards moved",
    desc: "Cards you’re watching are moved between lists or boards",
  },
  {
    id: "archived",
    title: "Cards archived",
    desc: "Cards you’re watching are archived (or unarchived)",
  },
];

export default function Settings2() {
  const [frequency, setFrequency] = useState("Periodically");
  const [checked, setChecked] = useState(
    notificationItems.reduce((a, i) => ({ ...a, [i.id]: true }), {})
  );

  const selectAll = () => {
    const all = {};
    notificationItems.forEach((i) => (all[i.id] = true));
    setChecked(all);
  };

  const selectNone = () => {
    const none = {};
    notificationItems.forEach((i) => (none[i.id] = false));
    setChecked(none);
  };

  return (
    <div className="min-h-screen bg-[#1D2125] text-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold">Settings</h1>

        {/* Info banner */}
        <div className="bg-[#253858] p-4 rounded text-sm">
          <CiCircleInfo className="-ml-2 size-7  " />
          <div className=" -mt-7">
            <span className="ml-7 mt-5">
              Some settings can only be changed from your Atlassian account.{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To make changes,{" "}
            </span>
            <span className="text-blue-400 ml-2 cursor-pointer underline ">
              Go to your Atlassian account{" "}
              <LuArrowUpRight className="ml-82 -mt-4" />
            </span>
          </div>
        </div>

        {/* Account settings */}
        <Section>
          <div className=" h-12 bg-[#2C333A]  p-1.5 ">
            <h1 className="text-white font-bold text-2xl">Account settings</h1>{" "}
          </div>
          <div className="ml-12">
            <Button>
              <h1 className="flex">
                Change language &nbsp; <LuArrowUpRight className="mt-2" />{" "}
              </h1>
            </Button>
          </div>
        </Section>

        {/* Email notifications */}
        <Section>
          <div className=" h-12 bg-[#2C333A]  p-1.5 ">
            <h1 className="text-white font-bold text-2xl">
              Email notifications{" "}
            </h1>{" "}
          </div>
          <p className="text-sm mb-2 ml-10 flex">
            <FaRegClock className="-ml-2 mt-1" />
            &nbsp; Email frequency
          </p>
          <p className="ml-10 text-gray-400">
            Email notifications can be sent ‘Instantly’ (as soon as they occur)
            or ‘Periodically’ (hourly). If you’d like to opt-out of all <br />{" "}
            notification emails, set the frequency as ‘Never’.
          </p>
          <h1 className="ml-10 font-bold text-2xl">Frequency</h1>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="bg-[#2C333A] px-3 py-2 rounded w-60 ml-10 border"
          >
            <option>Instantly</option>
            <option>Periodically</option>
            <option>Never</option>
          </select>
        </Section>
        <div className="flex items-center gap-2 ml-10">
          <CiSliderHorizontal className="text-gray-400" />
          <h2 className="text-lg font-semibold">
            Email notification preferences
          </h2>
        </div>

        <p className="text-sm text-gray-400 ml-10 -mt-6">
          These preferences only apply to email notifications for boards, lists,
          and cards you’re <span className="text-blue-400">watching</span>.
          Select which <br /> notifications you’d like to receive via email.
        </p>

        <p className="text-sm text-gray-400 ml-10 -mt-6">
          Note: You’ll always get emails for invites, direct mentions, and when
          you’re added to a card.
        </p>
        {/* Notification preferences */}
        <Section>
          <div className="flex gap-4 text-blue-400 text-sm mb-4 underline ml-10">
            <button onClick={selectAll}>Select all</button>{" "}
            <h1 className="text-blue-400">|</h1>
            <button onClick={selectNone}>Select none</button>
          </div>

          {notificationItems.map((item) => (
            <div key={item.id} className="flex gap-3 mb-3 ml-10">
              <input
                type="checkbox"
                checked={checked[item.id]}
                onChange={() =>
                  setChecked({ ...checked, [item.id]: !checked[item.id] })
                }
                className="accent-blue-500 mt-1"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </Section>

        <div className="ml-5">
          <Button>Allow desktop notifications</Button>
        </div>

        <Section>
          <div className=" h-12 bg-[#2C333A]  p-1.5 ">
            <h1 className="text-white font-bold text-xl">Sugesstions</h1>{" "}
          </div>
          <div className="ml-10">
            <Button>
              <h1>Disable suggestions</h1>
            </Button>
          </div>
        </Section>

        <Section>
          <div className=" h-12 bg-[#2C333A]  p-1.5 ">
            <h1 className="text-white font-bold text-xl">Marketing emails</h1>{" "}
          </div>
          <div className="ml-10 flex">
            <Button>
              Manage Email Preferences&nbsp;&nbsp;
              <LuArrowUpRight className="ml-50 -mt-4" />
            </Button>
          </div>
        </Section>

        <Section>
          <div className=" h-12 bg-[#2C333A]  p-1.5 ">
            <h1 className="text-white font-bold text-xl">Cookie preferences</h1>{" "}
          </div>
          <div className="ml-10">
            <Button>
              {" "}
              <h1>Manage cookie preferences</h1>
            </Button>
          </div>
        </Section>

        <Section>
          <div className=" h-12 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">Accessibility</h1>{" "}
          </div>
          <div className="ml-10">
            <Button>
              {" "}
              <h1>Enable Color blind Friendly mode</h1>
            </Button>
          </div>
          <div className="ml-10">
            <Button>
              {" "}
              <h1>Disable Keyboard Shortcuts</h1>
            </Button>
          </div>
        </Section>

        {/* Applications */}
        <Section>
          <div className=" h-12 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">Applications</h1>{" "}
          </div>
          <div className="ml-10 p-4 rounded flex justify-between">
            <div>
              <p className="font-medium">Butler</p>
              <p className="text-sm text-gray-400 leading-7">
                App key 446cbc1d6532c596ddc610207ead5576 <br />
                read and write access on your account <br />
                read and write access on all your boards <br />
                read and write access on all your Workspaces <br />
                Approved: Dec 19 at 11:02 AM <br />
                Never expires
              </p>
            </div>
            <button className=" bg-[#2C333A]  h-10 w-20 rounded">Revoke</button>
          </div>
        </Section>

        {/* Sessions */}
        <Section>
          <div className=" h-12 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">Sessions</h1>{" "}
          </div>
          <p className="text-sm text-gray-400 mb-2 ml-10">
            If you need to, you can log out of one or all of your other devices.
          </p>
          <div className="ml-10">
            <Button>Manage your recent devices</Button>
          </div>
        </Section>

        {/* Two-step verification */}
        <Section>
          <div className=" h-10 ml-10 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">
              Two-step verification
            </h1>{" "}
          </div>
          <p className="text-sm text-gray-400 mb-2 ml-10">
            Keep your account extra secure with a second login step.
            <span className="text-blue-400 ml-1 cursor-pointer">
              Learn more
            </span>
          </p>
          <div className="ml-10">
            {" "}
            <Button>Configure two-step verification</Button>
          </div>
        </Section>

        {/* Personal data export */}
        <Section>
          <div className=" h-10 ml-10 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">
              Personal data export
            </h1>{" "}
          </div>
          <p className="text-sm text-gray-400 mb-2 ml-14">
            Clicking this button will generate a .json file containing your
            personal information that's stored in Trello. This includes login{" "}
            <br />
            credentials and settings, paid account information, profile data,
            and board and Workspace settings.
          </p>
          <div className="ml-12">
            <Button>Download personal data</Button>
          </div>
        </Section>

        {/* Trello support */}
        <Section>
          <div className=" h-10 ml-10 bg-[#2C333A] p-1.5 ">
            <h1 className="text-white font-bold text-xl">Trello Support</h1>{" "}
          </div>
          <p className="text-sm text-gray-400 mb-3 ml-12">
            Trello support may ask you to download a support bundle using the
            button below, which generates a .zip file containing <br />{" "}
            diagnostic information for your current session.
          </p>

          <div className="bg-[#3A2F1D] text-yellow-300 p-3 rounded flex gap-2 text-sm mb-3 ml-12">
            ⚠ This .zip may include sensitive information. Only share it with
            Trello support.
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="ml-12"><Button>Download support bundle</Button></div>
           
          </div>
        </Section>

        {/* Footer */}
     
        <div className="flex gap-80">  <Button> Manage or delete your Atlassian account</Button>
        <Button>Privacy policy</Button></div>
      </div>
    </div>
  );
}

/* Reusable components */
const Section = ({ title, children }) => (
  <section className="space-y-3">
    {title && <h2 className="font-semibold text-lg">{title}</h2>}
    {children}
  </section>
);

const Button = ({ children }) => (
  <button className="bg-[#2C333A] px-4 py-2 rounded hover:bg-[#3A4047]">
    {children}
  </button>
);
