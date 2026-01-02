import React, { useEffect, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { motion } from "framer-motion";
import { TbInbox } from 'react-icons/tb';
import { useTodos } from "./TodoContext";
import { useNavigate } from 'react-router-dom';

import msg from "../../../assets/welcome/msg.png";
import phone from "../../../assets/welcome/phone.png";
import google from "../../../assets/welcome/google.png";
import slack from "../../../assets/welcome/slack.png";

const Welcomepage2 = () => {

  const navigate = useNavigate();
  const { todos } = useTodos();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className='bg-[#123263] flex p-6 justify-between items-center'>
        <img src="https://trello.com/assets/562260d6c740ba5a0d40.svg" alt="Trello Logo" />
        <div className='flex gap-3 items-center ml-[-50px]'>
          <GoArrowLeft onClick={()=>{navigate(-1)}} className='text-white' />
          <p className='h-2 w-15 rounded-2xl bg-[#669DF1]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#669DF1]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#1F1F21]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#1F1F21]'></p>
          <GoArrowRight onClick={()=>{navigate('/page3')}} className='text-white' />
        </div>
        <IoMdClose className='text-white' />
      </nav>

      {/* CENTER SECTION */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-[#123879] text-center">
          <h1 className="text-[#B7BAC0] text-4xl font-normal text-center pt-10">
            Welcome to <span className="font-bold">Trello!</span> Meet your{" "}
            <span className="text-[#b8c8ff] font-bold">Inbox</span>
          </h1>
          <p className="text-[#B7BAC0] text-center p-5">
            This is a space for you to{" "}
            <span className="font-semibold">add to-dos</span> or{" "}
            <span className="font-semibold">import them</span> from other apps.
          </p>

          <button
            onClick={() => navigate("/page3")}
            className="bg-[#669DF1] text-white px-4 py-2 rounded mt-5"
          >
            Continue
          </button>
        </div>
      </motion.div>

      {/* TODO LIST */}
      <section className="bg-[#123879] flex items-center">
        <section className="flex justify-center mt-5 gap-8 w-full">
          <div className="bg-[#1C2B42] w-[25%] rounded-2xl h-130">
            <nav className="bg-[#242528] rounded-t-2xl flex items-center text-[#B7BAC0] p-3 gap-4 pl-5 h-15">
              <TbInbox />
              <h1>Inbox</h1>
            </nav>

            <div className="mt-6 mb-3 px-4 flex flex-col gap-3">
              {todos.map(todo => (
                <div
                  key={todo.id}
                  className="bg-[#242528] rounded-lg p-3 text-[#B7BAC0] text-center"
                >
                  {todo.text}
                </div>
              ))}
            </div>

            <div className="px-4">
              <button className="w-full bg-[#242528] text-[#B7BAC0] py-2.5 rounded-lg shadow-md hover:bg-[#2F3033]">
                Start using Trello
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* IMAGES */}
      <div>
        {/* left side */}
        <motion.div
          initial={{ x: -200, y: -850, opacity: 0 }}
          animate={{ x: 0, y: -850, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 9,
            mass: 0.8,
          }}
        >
          <img className="h-22 w-50 absolute top-85 left-80" src={msg} alt="" />
          <img className="absolute top-120 left-60 h-30" src={slack} alt="" />
        </motion.div>

        {/* right side */}
        <motion.div
          initial={{ x: 200, y: -850, opacity: 0 }}
          animate={{ x: 0, y: -850, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 9,
            mass: 0.2,
          }}
        >
          <img className="h-22 w-50 absolute top-85 right-80" src={phone} alt="" />
          <img className="absolute top-120 right-60 h-30" src={google} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Welcomepage2;
