import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { TbInbox } from "react-icons/tb";
import TypeWriterInput from "./TypeWriterInput";
import { AnimatePresence, motion } from "framer-motion";
import dogsmile from '../../../assets/welcome/dogsmile.png'
import rotatedarrow from '../../../assets/welcome/rotatedarrow.png'
import { useTodos } from "./TodoContext";
import { useNavigate } from "react-router-dom";


const Welcompagepart1 = () => {
  let navigate = useNavigate();
  const [typingDone, setTypingDone] = useState(false);

const { todos, setTodos } = useTodos();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

 
  const addTodo = () => {
  if (input.trim() === "") return;
  setTodos([...todos, { id: Date.now(), text: input }]);
  setInput("");
};

  useEffect(() => {
    // Change color after 5 seconds
    const timer = setTimeout(() => {
      setActive(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-[#123263]">
      <nav className="bg-[#123263] flex p-6 justify-between items-center">
        <img src="https://trello.com/assets/562260d6c740ba5a0d40.svg" alt="Trello Logo" />
        <div className="flex gap-3 items-center ml-[-50px]">
          <GoArrowLeft onClick={()=>{navigate(-1)}} className="text-white" />
          <p className="h-2 w-15 rounded-2xl bg-[#669DF1]"></p>
          <p className="h-2 w-15 rounded-2xl bg-[#1F1F21]"></p>
          <p className="h-2 w-15 rounded-2xl bg-[#1F1F21]"></p>
          <p className="h-2 w-15 rounded-2xl bg-[#1F1F21]"></p>
          <GoArrowRight onClick={()=>{navigate('/page2')}} className="text-white" />
        </div>
        <IoMdClose className="text-white" />
      </nav>

      {/* ------------------ FIRST SCREEN ------------------ */}
      {!typingDone && (
        <motion.div
          key="firstPage"
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
          </div>

          <section className="bg-[#123879] flex items-center">
            <section className="flex justify-center mt-15 gap-8 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scaleY: typingDone ? 2 : 1,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-[#1C2B42] w-[25%] rounded-2xl h-130"
              >
                <motion.div
                  animate={{ opacity: typingDone ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <nav className="bg-[#242528] rounded-t-2xl flex items-center text-[#B7BAC0] p-3 gap-4 pl-5 h-15">
                    <TbInbox />
                    <h1>Inbox</h1>
                  </nav>

                  <div className="mt-6 px-4 ">
                    <div className="mt-6">
                      <div className="border-2 border-[#4C637E] rounded-xl p-4 bg-[#242528] flex flex-col gap-3 h-30 text-white">
                        <TypeWriterInput onComplete={() => setTypingDone(true)} />

                        <button className="self-end bg-[#669DF1] text-[#0F1B2D] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#8AB3FF] mt-7">
                          Add card
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 px-4">
                    <button className="w-full bg-[#242528] text-[#B7BAC0] py-2.5 rounded-lg shadow-md hover:bg-[#2F3033]">
                      Start using Trello
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </section>
          </section>
        </motion.div>
      )}
      
      {/* todo */}

      {typingDone && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center pt-15 bg-[#123879] h-screen"
        >
          <h1 className="text-4xl font-semibold text-[#B7BAC0]">
            Add a to-do to <span className="text-[#b8c8ff] font-normal">Inbox</span>
          </h1>

          <p className="text-[#B7BAC0] mt-5">
            Let's get started by adding a few to-dos as cards to your{" "}
            <span className="font-bold">Inbox</span>
          </p>
            <button
              disabled={!active}
              onClick={() => navigate("/page2")}
              className={
                active
                  ? "bg-[#669DF1] text-white px-4 py-2 rounded mt-5"
                  : "bg-[#78a5ff10] text-[#B7BAC0] px-4 py-2 rounded mt-5"
              }
            >
              Continue
            </button>

          <div className="flex justify-center mt-5">
            <div className="bg-[#1C2B42] w-[25%] rounded-2xl h-fit pb-6">
              <nav className="bg-[#242528] rounded-t-2xl flex items-center text-[#B7BAC0] p-3 gap-4 pl-5 h-15">
                <TbInbox />
                <h1>Inbox</h1>
              </nav>

              <div className="mt-6 px-4 h-100">
                <div className="">
                  <div className="border-2 border-[#4C637E] rounded-xl p-4 bg-[#242528] flex flex-col text-white">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Write your to-do"
                      className="outline-none border-0 bg-transparent"
                    />

                    <button
                      onClick={addTodo}
                      className="self-end bg-[#669DF1] text-[#0F1B2D] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#8AB3FF]"
                    >
                      Add card
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4  flex flex-col gap-3 -mt-70 h-60">
                {todos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#242528] hover:border hover:border-white rounded-lg p-3  flex justify-between text-[#B7BAC0] "
                  >
                    <span className="text-center">{todo.text}</span>

                   
                  </motion.div>
                    
                ))}
                    <div className="hover:border border-white rounded-lg">
                    <p className="w-full bg-[#242528] text-[#B7BAC0] py-2.5 rounded-lg shadow-md hover:bg-[#2F3033]">
                      Start using Trello
                    </p>
                  </div>
              </div>
              
            </div>
          </div>
          
        </motion.div>
      )}
        {typingDone && 
            (
              <>
                <div className="bg-[#8C52FF] rounded-full w-32 h-32 flex items-center justify-center absolute top-80 left-70">
                  <img src={dogsmile} alt="Dog Mascot" className="w-20 h-20" />
                </div>
                <img className="absolute top-100 left-96 h-30 w-30" src={rotatedarrow} alt="" />
                <div className="bg-[#303134] w-40 h-15  text-white text-sm px-4 py-2 rounded-xl absolute top-70 left-70">
                        Hey, I'm Taco! Add some to-dos!
                <div className="absolute left-15 top-15 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#303134]"></div>         
              </div>
              </>
            )
        }

    </div>
  );
};

export default Welcompagepart1;
