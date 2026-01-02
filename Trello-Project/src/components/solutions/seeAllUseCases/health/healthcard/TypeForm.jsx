import React from "react";
import NavBar from "../../../../NavBar";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";

const TypeForm = () => {
  return (
    <div>
      <NavBar />
      <section className="w-[900px] flex flex-row gap-6 m-auto mt-15 ">
        <div id="left" className="h-[750px] pt-10 sticky top-10 -ml-10 transition-all">
          <p>
            <a href="" className="absolute -top-7">
              Power-Ups / TypeForm
            </a>
          </p>
          <img
            src="https://public-assets.typeform.com/public/favicon/favicon-64x64.png"
            alt=""
            className="w-95 mt-2"
          />
          <br />
          <p className="ml-8">Made by Typeform</p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41MDA5IDIuNjU1MTFDMTguNDk2NyAyLjU0NTYgMTkuNTM1MiAyLjgwNzE4IDIwLjM2NCAzLjYzNTk3TDE4Ljk0OTggNS4wNTAxOUMxOC42MTkyIDQuNzE5NTggMTguMjE1MSA0LjU4MzM1IDE3LjcxMDYgNC42Mzg4NEMxNy4xNTkzIDQuNjk5NDcgMTYuNDk1OSA0Ljk2MjQ2IDE1Ljc0ODYgNS4zODU0MUMxNS4wMTIyIDUuODAyMjEgMTQuMjcyIDYuMzI4NTYgMTMuNTY3NSA2Ljg0NTRDMTMuNDYxNCA2LjkyMzI2IDEzLjM1NDggNy4wMDE4NiAxMy4yNDg1IDcuMDgwMzFDMTIuNjc5NSA3LjUwMDA4IDEyLjExNjYgNy45MTUzMiAxMS42NTUyIDguMTg4NzhDMTEuMTYwOCA4LjQ4MTgyIDEwLjYzNjMgOC40Njk3MSAxMC4zMjA0IDguNDM4MTVDOS45ODgzNyA4LjQwNDk4IDkuMTk5MzQgOC4zOTc0OCA3Ljk0MzUzIDguODE4NDlDNy4xNjYxNCA5LjA3OTExIDYuMjE2MTcgOS42OTk1MyA1LjQwNTk3IDEwLjMxNzdMNS4zNDM4NyAxMC4zNjUzQzUuNTkwNzkgMTAuNDE3MSA1Ljg1MTIyIDEwLjQ2NDYgNi4xMTI2MyAxMC41MDc2QzYuNjIwOTkgMTAuNTkxMyA3LjExMTIzIDEwLjY1NDMgNy40NzU5MyAxMC42OTY0QzcuNjU3NzQgMTAuNzE3NCA3LjgwNzA4IDEwLjczMzEgNy45MTAzIDEwLjc0MzRDNy45NjE4OSAxMC43NDg2IDguMDAxODkgMTAuNzUyNSA4LjAyODU4IDEwLjc1NUw4LjA1ODQgMTAuNzU3OEw4LjA2Njg2IDEwLjc1ODVMOC45NjU3OCAxMS44NjAzTDguOTY1MzcgMTEuODY1OEw4Ljk2Mjk2IDExLjg4ODRDOC45NjA3OSAxMS45MDkgOC45NTc1OCAxMS45NDA0IDguOTUzNjYgMTEuOTgxM0M4Ljk0NTggMTIuMDYzMiA4LjkzNTE2IDEyLjE4MjYgOC45MjQ0MSAxMi4zMjg3QzguOTAyOCAxMi42MjI0IDguODgxMzYgMTMuMDE2MyA4Ljg4MDQ4IDEzLjQyNjNDOC44Nzk1OCAxMy44NDI1IDguOTAwMTEgMTQuMjQzNyA4Ljk1MjY1IDE0LjU2M0M4Ljk4OTcgMTQuNzg4MSA5LjAzMDk5IDE0Ljg5NjMgOS4wNDUzMSAxNC45MzM4QzkuMDQ5MjcgMTQuOTQ0MiA5LjA1MDMzIDE0Ljk0OTcgOS4wNTAzMyAxNC45NDk3QzkuMDUwMzMgMTQuOTQ5NyA5LjA1NTgyIDE0Ljk1MDcgOS4wNjYyMSAxNC45NTQ3QzkuMTAzNzEgMTQuOTY5IDkuMjExOSAxNS4wMTAzIDkuNDM3MDIgMTUuMDQ3NEM5Ljc1NjI3IDE1LjA5OTkgMTAuMTU3NSAxNS4xMjA0IDEwLjU3MzcgMTUuMTE5NUMxMC45ODM3IDE1LjExODYgMTEuMzc3NyAxNS4wOTcyIDExLjY3MTQgMTUuMDc1NkwxMi4xMzkxIDE1LjAzNDFMMTMuMjQxNCAxNS45MzNMMTMuMzAzNiAxNi41MjQxQzEzLjM0NTcgMTYuODg4OCAxMy40MDg3IDE3LjM3OSAxMy40OTI0IDE3Ljg4NzRDMTMuNTM1NCAxOC4xNDg4IDEzLjU4MyAxOC40MDkyIDEzLjYzNDcgMTguNjU2MUwxMy42ODIzIDE4LjU5NEMxNC4zMDA1IDE3Ljc4MzggMTQuOTIwOSAxNi44MzM5IDE1LjE4MTUgMTYuMDU2NUMxNS42MDI1IDE0LjgwMDcgMTUuNTk1IDE0LjAxMTYgMTUuNTYxOSAxMy42Nzk2QzE1LjUzMDMgMTMuMzYzNyAxNS41MTgyIDEyLjgzOTIgMTUuODExMiAxMi4zNDQ4QzE2LjA4NDcgMTEuODgzNCAxNi40OTk5IDExLjMyMDYgMTYuOTE5NyAxMC43NTE1QzE2Ljk5ODEgMTAuNjQ1MiAxNy4wNzY3IDEwLjUzODYgMTcuMTU0NiAxMC40MzI1QzE3LjY3MTUgOS43Mjc5OCAxOC4xOTc4IDguOTg3ODQgMTguNjE0NiA4LjI1MTQzQzE5LjAzNzYgNy41MDQxNiAxOS4zMDA1IDYuODQwNjcgMTkuMzYxMiA2LjI4OTM5QzE5LjQxNjcgNS43ODQ4NyAxOS4yODA0IDUuMzgwNzkgMTguOTQ5OCA1LjA1MDE5TDIwLjM2NCAzLjYzNTk3QzIxLjE5MjggNC40NjQ3NyAyMS40NTQ0IDUuNTAzMzQgMjEuMzQ0OSA2LjQ5OTFDMjEuMjQwNSA3LjQ0ODEgMjAuODI0NCA4LjM5MTI0IDIwLjM1MDQgOS4yMjg3N0MxOS44NzAyIDEwLjA3NzIgMTkuMjgxNyAxMC45IDE4Ljc2MiAxMS42MDg0QzE4LjY3NCAxMS43Mjg0IDE4LjU4ODkgMTEuODQzOSAxOC41MDY5IDExLjk1NTJDMTguMDk0NiAxMi41MTQ4IDE3Ljc2MTUgMTIuOTY2OSAxNy41NDM5IDEzLjMyODRDMTcuNTQxMyAxMy4zNTM1IDE3LjU0MDMgMTMuMzk5MSAxNy41NDc3IDEzLjQ3MjdDMTcuNjEwMyAxNC4wOTk3IDE3LjU4IDE1LjE3MjYgMTcuMDczNSAxNi42ODM1QzE2LjcwMTcgMTcuNzkyNSAxNS45MDY0IDE4Ljk2MjMgMTUuMjY2OSAxOS44MDAzQzE0LjkzNzQgMjAuMjMyMiAxNC42MjkzIDIwLjYwMTQgMTQuNDAzNCAyMC44NjI5QzE0LjI5MDIgMjAuOTkzOSAxNC4xOTcxIDIxLjA5ODYgMTQuMTMxNCAyMS4xNzE0QzE0LjA5ODUgMjEuMjA3OCAxNC4wNzI1IDIxLjIzNjMgMTQuMDU0MyAyMS4yNTYxTDE0LjAyNjcgMjEuMjg2TDE0LjAyMzkgMjEuMjg5QzEzLjgzODggMjEuNDg3MSAxMy41ODEzIDIxLjYwMjEgMTMuMzEwOCAyMS42MDczQzEzLjA0MDMgMjEuNjEyNCAxMi43Nzk4IDIxLjUwNzYgMTIuNTg4OSAyMS4zMTY3QzEyLjM3MzEgMjEuMTAwOSAxMi4yMzEzIDIwLjgzMjcgMTIuMTM2MSAyMC42MTc3QzEyLjAzMzkgMjAuMzg2OCAxMS45NDgxIDIwLjEyOTYgMTEuODc1MSAxOS44NzI1QzExLjcyOSAxOS4zNTc2IDExLjYxMjggMTguNzY0OCAxMS41MjMxIDE4LjIxOTdDMTEuNDU2NiAxNy44MTU0IDExLjQwMjcgMTcuNDI1IDExLjM2MTEgMTcuMDkzN0MxMS4xMTk5IDE3LjEwNTggMTAuODQ5NiAxNy4xMTQ2IDEwLjU2OTQgMTcuMTE1MkMxMC4xMDM3IDE3LjExNjIgOS41Nzg5MiAxNy4wOTQ3IDkuMTA0NjggMTcuMDE2NkM4LjY5MjEzIDE2Ljk0ODcgOC4wNTI2MSAxNi43ODA0IDcuNjM2MTEgMTYuMzYzOUM3LjIxOTYyIDE1Ljk0NzQgNy4wNTEyOSAxNS4zMDc5IDYuOTgzNCAxNC44OTUzQzYuOTA1MzUgMTQuNDIxMSA2Ljg4Mzc4IDEzLjg5NjQgNi44ODQ3OCAxMy40MzA2QzYuODg1MzkgMTMuMTUwNCA2Ljg5NDI2IDEyLjg4MDEgNi45MDYzNSAxMi42Mzg5QzYuNTc1MDIgMTIuNTk3NCA2LjE4NDY2IDEyLjU0MzQgNS43ODAyOSAxMi40NzY5QzUuMjM1MjIgMTIuMzg3MiA0LjY0MjM3IDEyLjI3MSA0LjEyNzUxIDEyLjEyNDlDMy44NzA0IDEyLjA1MTkgMy42MTMxNyAxMS45NjYxIDMuMzgyMzEgMTEuODYzOUMzLjE2NzMzIDExLjc2ODcgMi44OTkxNSAxMS42MjY5IDIuNjgzMzIgMTEuNDExMUMyLjQ5MjQ0IDExLjIyMDIgMi4zODc1OCAxMC45NTk3IDIuMzkyNzYgMTAuNjg5MkMyLjM5Nzk0IDEwLjQxODcgMi41MTI3MiAxMC4xNjE0IDIuNzEwODEgOS45NzYzMUwyLjcxNDAxIDkuOTczMzJMMi43MjA2MyA5Ljk2NzE4TDIuNzQzODcgOS45NDU3M0MyLjc2MzczIDkuOTI3NDggMi43OTIyMSA5LjkwMTQ3IDIuODI4NjMgOS44Njg2MkMyLjkwMTQzIDkuODAyOTYgMy4wMDYxMiA5LjcwOTc5IDMuMTM3MTQgOS41OTY2MUMzLjM5ODY2IDkuMzcwNjkgMy43Njc4MSA5LjA2MjYyIDQuMTk5NjkgOC43MzMwOUM1LjAzNzY5IDguMDkzNjcgNi4yMDc1MiA3LjI5ODM2IDcuMzE2NTIgNi45MjY1NkM4LjgyNzQgNi40MjAwNCA5LjkwMDM2IDYuMzg5NyAxMC41MjczIDYuNDUyMzNDMTAuNjAwOSA2LjQ1OTY4IDEwLjY0NjUgNi40NTg3MSAxMC42NzE2IDYuNDU2MTRDMTEuMDMzMSA2LjIzODUzIDExLjQ4NTIgNS45MDU0MyAxMi4wNDQ4IDUuNDkzMTRDMTIuMTU2MSA1LjQxMTE0IDEyLjI3MTYgNS4zMjYwMSAxMi4zOTE2IDUuMjM4MDRDMTMuMSA0LjcxODMzIDEzLjkyMjggNC4xMjk4MiAxNC43NzEyIDMuNjQ5NjNDMTUuNjA4OCAzLjE3NTYgMTYuNTUxOSAyLjc1OTQ4IDE3LjUwMDkgMi42NTUxMVoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGQ9Ik0xNS40MTQzIDguNTg1NzJDMTUuODA0OCA4Ljk3NjI0IDE2LjQzOCA4Ljk3NjI0IDE2LjgyODUgOC41ODU3MkMxNy4yMTkgOC4xOTUyIDE3LjIxOSA3LjU2MjAzIDE2LjgyODUgNy4xNzE1MUMxNi40MzggNi43ODA5OCAxNS44MDQ4IDYuNzgwOTggMTUuNDE0MyA3LjE3MTUxQzE1LjAyMzggNy41NjIwMyAxNS4wMjM4IDguMTk1MiAxNS40MTQzIDguNTg1NzJaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
            className="-mt-6"
            alt=""
          />{" "}
          <br />
          <div className="flex ">
            {" "}
            <p className="bg-gray-100 w-25  rounded-sm">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDE5QzIwLjEwNDYgMyAyMSAzLjg5NTQzIDIxIDVWMTlDMjEgMjAuMTA0NiAyMC4xMDQ2IDIxIDE5IDIxSDVDMy44OTU0MyAyMSAzIDIwLjEwNDYgMyAxOVY1Wk01IDZDNSA1LjQ0NzcyIDUuNDQ3NzIgNSA2IDVIMTBDMTAuNTUyMyA1IDExIDUuNDQ3NzIgMTEgNlYxNkMxMSAxNi41NTIzIDEwLjU1MjMgMTcgMTAgMTdINkM1LjQ0NzcyIDE3IDUgMTYuNTUyMyA1IDE2VjZaTTE0IDVDMTMuNDQ3NyA1IDEzIDUuNDQ3NzIgMTMgNlYxMkMxMyAxMi41NTIzIDEzLjQ0NzcgMTMgMTQgMTNIMThDMTguNTUyMyAxMyAxOSAxMi41NTIzIDE5IDEyVjZDMTkgNS40NDc3MiAxOC41NTIzIDUgMTggNUgxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
                className="-mt-"
                alt=""
              />
              <p className="-mt-6 ml-7">25,000 +</p>{" "}
            </p>
          </div>
          <br />
          <br />
          <hr className="text-gray-400" />
          <h1 className="font-semibold ">Categories</h1>
          <div className="flex">
            <Link
              to="/power-ups/category/automation"
              className="bg-none border-gray-300 border-1 inline-flex items-center justify-center h-8 w-60 rounded-sm mt-5"
            >
              Communication & Collaboration
            </Link>
            <br />
            <Link
              to="/power-ups/category/board-utilities"
              className=" bg-none border-1 inline-flex items-center justify-center border-gray-300 h-8 w-30 rounded-sm mt-15 -ml-60"
            >
              Sales & Support
            </Link>
          </div>
          <br />
          <hr className="text-gray-400" />
          <br />
          <a
            href="https://support.atlassian.com/contact/#/"
            className="hover:underline hover:text-blue-400"
          >
            <CiMail className="size-5" />{" "}
            <aside className="ml-6 -mt-6">Contact Support</aside>
          </a>
          <br />
          <a
            href="https://www.atlassian.com/legal/privacy-policy"
            className="hover:underline hover:text-blue-400"
          >
            <CiCircleInfo className="size-5" />
            <aside className="ml-6 -mt-6">Privacy Policy</aside>
          </a>
          <br />
          <br />
          <hr className="-mt-5 text-gray-400" />
          <img
            src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
            className="size-6 mt-8"
            alt=""
          />
          <p className="-mt-11 mb-5 ml-8">
            Typeform is in compliance with <br />
            <Link
              to="/legal/privacy-policy"
              href="https://www.atlassian.com/legal/privacy-policy"
              className="text-blue-500  underline"
            >
              Trello's data and privacy <br /> practices.
            </Link>
          </p>
          <hr className="text-gray-400" />
        </div>
        <div id="right" className="w-230 ml-5">
          <div className="flex gap-100">
            <h1 className="text-3xl  w-55 font-medium  ">Type Form</h1>
            <Link
              to="/power-ups/57b47fb862d25a30298459b1/enable"
              className="bg-blue-700 rounded-sm h-9 w-32 -ml-25 mb-10 inline-flex items-center justify-center text-white hover:bg-blue-800"
            >
              Add Power-Up
            </Link>
          </div>
          <p>
            Your quiz, survey, or form is out there. People love it. And now the
            responses are rollllling in. <br /> <br /> Maybe you have new leads for your sales
            peeps. Perhaps it’s feedback for customer <br /> support. Or RSVPs to your
            GoT-themed murder mystery party. <br />  <br /> Follow up quickly with this
            Power-Up. <br /> <br />
          </p>
          <p className="text-black font-semibold">Typeform responses will go straight to your Trello board.</p><p className="ml-103 -mt-6"> Here's how it works:</p>
          <ol className="list-decimal ml-10 space-y-1">
            <li>
            Share your typeform with the world.
            </li>
            <li>Each response appears as a card in Trello.</li>
            <li>
            Sort your cards and create a workflow that works for you.
            </li>
          </ol>
          <br />
          <p className="text-gray-800 ml-5">It’s great for teams who want to act quickly on typeform results.</p>

          <br />
        </div>
      </section><br /><br /><br /><br />
      <AtlassianFooter/>
    </div>
  );
};

export default TypeForm;
