import React from 'react'
import { TbLayoutBoardSplit } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiChevronDown } from 'react-icons/fi';
import { IoSearch } from "react-icons/io5";
import TempletSideBar from '../TempletSideBar';



const RemoteWo = () => {
  return (
    <> <br /> <br />
  

          {/* Main Content */}
      <div className='  '>
      <p>Template gallery / Remote work</p>
      <br />
      <div className='flex gap-3'>
        <img src="https://trello.com/assets/f03ecb89626f72d4a0aa.svg" alt="" className='h-12 rounded w-12' />
        <h1 className='text-xl font-bold mt-1.5'>Remote Work templates</h1>
      </div>
      <br />


      {/* Cards Section */}
   <div className='flex gap-5'>
     <div className='flex gap-6'>
        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/3bb7c04dcf6a14b2351fbd41e219bc8f/photo-1454117096348-e4abbeba002c.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover hover:shadow-2xl"
  />
    <img className=' bg-white border border-gray-200 rounded-full mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13' src="https://trello-logos.s3.amazonaws.com/dd955d422af18db1a6edcb339a5e13b6/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Work From Home Daily Planner </h1>
    <p className='ml-4 text-xs '>by Sarah Costello @ TalentHub <br />Plan,collaborate and monitor your work- <br />from-home schedule.</p>
    <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>
       
       
   </div>

        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/53454f575358c015080ef729/480x480/7007009bc4fc68614e4d8c21dc20c62d/photo-1416592525293-e65266465eb7.jpeg.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover  hover:shadow-2xl "
  />
    <img className=' bg-white-900 border border-gray-200   mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13 ' src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Mr. Rogers : "Watercooler" <br />Vedio chat planner</h1>
    <p className='ml-4 text-xs'>by Trello team <br /> A simple way to build team culture.</p>
     <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>

        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b10c8bd87b80f7abeb56820f50c4db66/photo-1474487548417-781cb71495f3.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover hover:shadow-2xl"
  />
    <img className=' bg-white border border-gray-200  mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13' src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Remote Team Hub </h1>
    <p className='ml-4 text-xs' >by Trello team <br /> A mission control center for your team <br />productivity .</p>
     <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>
  </div>
  <br /><br />
  {/*Cards 2*/}
  <div className='flex gap-6'>
        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1849a4a0cc47bd7f5c6e08a06cf3affa/photo-1516553174826-d05833723cd4.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover hover:shadow-2xl"
  />
     <img className=' bg-white-900 border border-gray-200  mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13 ' src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Remote Team Meetings </h1>
    <p className='ml-4 text-xs '>by Trello team <br />Bring focus and transperency to your <br />remote team meetings.</p>
     <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>

        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/d2a11a39d6209e5b1e892b3a8e3ef576/photo-1458245375131-cf4fd90e78ac.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover hover:shadow-2xl "
  />
    <img className=' bg-white-900 border border-gray-200  mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13 ' src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Mr. Rogers : "Watercooler" <br />Vedio chat planner</h1>
    <p className='ml-4 text-xs'>by Trello team <br /> A better way to brainstrom new ideas.</p>
     <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>

        <div className="w-60">
    <img
    src="https://trello-backgrounds.s3.amazonaws.com/54278ede4ee6b3f180a77287/480x480/3fa86ff5627b63af3d2302a32b9bbe31/beach_times.jpg"
    alt="card"
    className="w-full h-32 rounded object-cover hover:shadow-2xl"
  />
    <img className=' bg-white border border-gray-200  mt-[-30px] ml-3 shadow-sm overflow-hidden cursor-pointer h-13 w-13' src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png" alt="" />
    <h1 className='font-bold  ml-4'>Remote Team Hub </h1>
    <p className='ml-4 text-xs' >by Trello team <br /> Create a space for your team to share <br />experiences for remote activities. </p>
     <div className='flex '>
      <span className='flex gap-2 m-4'>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAxNlY0Ljk5MTg4QzUgMy44OTE4IDUuOTAxOTUgMyA3LjAwODUzIDNIMTQuOTkxNUwxNSAzLjAwMDAyVjVIN1YxNkg1Wk04IDE5QzggMjAuMTA0NiA4Ljg5NTQzIDIxIDEwIDIxSDE4QzE5LjEwNDYgMjEgMjAgMjAuMTA0NiAyMCAxOVY4QzIwIDYuODk1NDMgMTkuMTA0NiA2IDE4IDZIMTBDOC44OTU0MyA2IDggNi44OTU0MyA4IDhWMTlaTTEwIDhWMTlIMThWOEgxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg==" alt="" />
        <h1 className='text-xs'>101.7k</h1>
        <img className='h-5 w-5' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAwNiAxOEM3LjQ2MzY3IDE4IDQuMDAxNDIgMTMuNzQgNC4wMDE0MiAxMkM0LjAwMTQyIDkuOTk5IDcuNDU5NjcgNiAxMi4wMDA2IDZDMTYuMzc3NSA2IDE5Ljk5ODggOS45NzMgMTkuOTk4OCAxMkMxOS45OTg4IDEzLjc0IDE2LjUzNjYgMTggMTIuMDAwNiAxOFpNMTIuMDAwNiA0QzYuNDgwMDMgNCAyLjAwMDEyIDguODQxIDIuMDAwMTIgMTJDMi4wMDAxMiAxNS4wODYgNi41NzcxIDIwIDEyLjAwMDYgMjBDMTcuNDI0MSAyMCAyMi4wMDAxIDE1LjA4NiAyMi4wMDAxIDEyQzIyLjAwMDEgOC44NDEgMTcuNTIxMiA0IDEyLjAwMDYgNFpNMTEuOTc3NSAxMy45ODQ0QzEwLjg3NDUgMTMuOTg0NCA5Ljk3NzUyIDEzLjA4NzQgOS45Nzc1MiAxMS45ODQ0QzkuOTc3NTIgMTAuODgxNCAxMC44NzQ1IDkuOTg0NCAxMS45Nzc1IDkuOTg0NEMxMy4wODA1IDkuOTg0NCAxMy45Nzc1IDEwLjg4MTQgMTMuOTc3NSAxMS45ODQ0QzEzLjk3NzUgMTMuMDg3NCAxMy4wODA1IDEzLjk4NDQgMTEuOTc3NSAxMy45ODQ0Wk0xMS45Nzc1IDcuOTg0NEM5Ljc3MTUyIDcuOTg0NCA3Ljk3NzUyIDkuNzc4NCA3Ljk3NzUyIDExLjk4NDRDNy45Nzc1MiAxNC4xOTA0IDkuNzcxNTIgMTUuOTg0NCAxMS45Nzc1IDE1Ljk4NDRDMTQuMTgzNSAxNS45ODQ0IDE1Ljk3NzUgMTQuMTkwNCAxNS45Nzc1IDExLjk4NDRDMTUuOTc3NSA5Ljc3ODQgMTQuMTgzNSA3Ljk4NDQgMTEuOTc3NSA3Ljk4NDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=" alt="" />
        <h1 className='text-xs'>281k</h1>
      </span>
      </div>
       </div>
  </div>
  <br />
  <hr className='border-thin border-gray-400' />
  <br />
  {/*Content*/}
  <div className='flex gap-15'>
     <div>
       <h1 className='font-bold text-2xl'>What's Trello ?</h1>
       <br />
       <p className='text-40'>Trello lets you work more collaboratively and get more done.<br /> Trello’s boards, lists, and cards enable you to organize and <br />prioritize your projects in a fun, flexible, and rewarding way.</p> 
       
        <div className=''>
        <button className='border-black bg-blue-500 shadow px-6 py-4 rounded m-8 hover:bg-blue-700 '>Sign up-it's free</button>
        <a href="" className='underline decoration-[1px] underline-offset-2'>Learn more</a>
        </div>
    </div>
    <div>
      <img src="https://trello.com/assets/ea5b895d726e6dc287da.svg" alt="" />
    </div>
   </div>
    <hr className='border-thin border-gray-400' />
    <br />
    <div className='flex gap-1 '>
      <p className='text-xs'>Get your team collaborating anywhere, anytime with these remote work templates. Use Trello to set up  effective remote team meetings, brainstorming sessions, and team bonding time. Set up a team mission control for all current work and resources, keeping everyone in the loop no matter where they work. Trello is great for  asynchronous collaboration across time zones, and can be used on the go with our mobile app. Embrace  remote work with Trello, and your team will stay connected and productive—without the commute!</p>
      
      <img className='h-30 w-60 ml-30' src="https://trello.com/assets/f03ecb89626f72d4a0aa.svg" alt="" />
    </div>

</div>
<br />
<hr className='border-thin border-gray-400 ml-10 mr-10' />
<br />
{/* Footer */}

<button className='flex items-center gap-1  m-5 ml-150   border border-gray-300 px-6 py-2 rounded-md text-gray-600 '>English <FiChevronDown className='h-7 w-7'/></button>


  <div class="flex flex-wrap items-center justify-center gap-4 mb-4">
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Templates</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Pricing</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Apps</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Jobs</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Blog</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Developers</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Help</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Legal</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Privacy</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Integrations</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Contact us</a>
    <a href="#" class="underline decoration-[1px] underline-offset-2 hover:text-gray-500">Terms</a>
  </div>

  <div className='flex gap-3 ml-160'>
    <img src="https://trello.com/assets/a84c1127dbd06040faf9.svg" alt="" className='h-5 w=30' />
      <div class="text-25 text-gray-500 mt-1">
    © copyright 2025 All rights reserved.
  </div>

  </div>
  <br /><br />

  








      
    </>
  )
}

export default RemoteWo
