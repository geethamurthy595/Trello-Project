import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { TbInbox } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import confetti from 'canvas-confetti';
import dog from '../../../assets/welcome/dog.png';
import arrow from '../../../assets/welcome/arrow.png';
import side1 from '../../../assets/welcome/sideeffect1.png';
import side2 from '../../../assets/welcome/sideeffect2.png';
import wink from '../../../assets/welcome/dogwink.png'
import enjoydog from '../../../assets/welcome/enjoydog.png'
import checkit from '../../../assets/welcome/checkitoffdog.png'
import checkitarrow from '../../../assets/welcome/checkitarrow.png'
import { FaCheckCircle } from "react-icons/fa";
import { useTodos } from "./TodoContext";



const Welcompage1 = () => {
  const [showBoard, setShowBoard] = useState(false);
  const [expandCard, setExpandCard] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false);
  const [imagesHidden, setImagesHidden] = useState(false);
  const [showRadios, setShowRadios] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [hideAfterDrop, setHideAfterDrop] = useState(false);
  const [roo, setRoo] = useState(false);
  const [taskChecked, setTaskChecked] = useState(false);
  const [winkdog, setWinkdog] = useState(false);
  const [allowNavigate, setAllowNavigate] = useState(false);
  const [checkedTaskIndex, setCheckedTaskIndex] = useState(null);
  const { todos, setTodos } = useTodos();
  const [todayTasks, setTodayTasks] = useState([]);
  const [thisWeekTasks, setThisWeekTasks] = useState([]);
  const [laterTasks, setLaterTasks] = useState([]);

  const todayCardRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonActive(true);   // enable and color the continue button
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  });


  useEffect(() => {
    const boardTimer = setTimeout(() => setShowBoard(true), 1500);
    return () => clearTimeout(boardTimer);
  }, []);

  // ✅ Continue button logic
  const handleContinue = () => {

    if (allowNavigate) {
      navigate("/home");
      return;
    }

    // 1st click → expand card
    if (!hasExpanded && !expandCard) {
      setExpandCard(true);
      setButtonActive(true);

    }
    // 2nd click → show radios
    else if (hasExpanded && todayTasks.length > 0 && !showRadios) {
      setShowRadios(true);
      setButtonActive(true);
      setWinkdog(false);
      setRoo(true);

    }
  };

  // 🟣 Drag + Drop
  const handleDragStart = (event, task) => {
    event.dataTransfer.setData("text/plain", task);
    setImagesHidden(true);

  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, targetList) => {
    e.preventDefault();

    setHasExpanded(true);
    setHideAfterDrop(true);

    const taskText = e.dataTransfer.getData("text/plain"); // ✔ Correct text

    // remove from global todos
    setTodos(prev => prev.filter(t => t.text !== taskText));

    // ADD to correct list
    if (targetList === "today") {
      setTodayTasks(prev => [...prev, taskText]);
      setButtonActive(false);
      setWinkdog(true);
    }

    if (targetList === "week") {
      setThisWeekTasks(prev => [...prev, taskText]);
    }

    if (targetList === "later") {
      setLaterTasks(prev => [...prev, taskText]);
    }
  };


  // 🎉 Confetti
  const handleTaskCheck = (event) => {
    setRoo(false);
    if (event.target.checked && todayCardRef.current) {
      setTaskChecked(true);
      setAllowNavigate(true);
      const rect = todayCardRef.current.getBoundingClientRect();
      confetti({
        particleCount: 1000,
        spread: 100,
        startVelocity: 100,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#FFC700', '#FF0000', '#2E3192', '#41BBC7']
      });
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className='bg-[#123263] flex p-6 justify-between items-center'>
        <img src="https://trello.com/assets/562260d6c740ba5a0d40.svg" alt="Trello Logo" />
        <div className='flex gap-3 items-center ml-[-50px]'>
          <GoArrowLeft onClick={() => { navigate(-1) }} className='text-white' />
          <p className='h-2 w-15 rounded-2xl bg-[#669DF1]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#669DF1]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#669DF1]'></p>
          <p className='h-2 w-15 rounded-2xl bg-[#1F1F21]'></p>
          <GoArrowRight className='text-white' />
        </div>
        <IoMdClose className='text-white' />
      </nav>

      {/* HEADER */}
      <div className='bg-[#123879] text-center'>
        <h1 className='text-[#B7BAC0] text-4xl font-normal text-center pt-10'>
          Now, here's your first <strong>board</strong>, where you'll organize your to-dos
        </h1>
        <p className='text-[#B7BAC0] text-center p-5'>
          Let's start you off with three <strong>lists</strong>: "Today", "This Week", "Later".
        </p>
        <button
          onClick={handleContinue}
          className={`pl-3 pr-3 pt-2 pb-2 rounded-md w-25 ${buttonActive
              ? 'bg-[#669DF1] text-white'
              : 'bg-[#78a5ff10] text-[#B7BAC0]'
            } ${allowNavigate ? "w-40" : "w-25"} `}
        >
          {allowNavigate ? "One last thing" : "Continue"}
        </button>
      </div>

      {/* MAIN SECTION */}
      <section className='bg-[#123879] flex items-center'>
        <div className='flex mt-15 gap-8 w-full ml-10'>
          {/* INBOX */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className='bg-[#1C2B42] w-[22%] rounded-2xl h-120'
          >
            <nav className='bg-[#242528] rounded-t-2xl flex items-center text-[#B7BAC0] p-3 gap-4 pl-5'>
              <TbInbox />
              <h1>Inbox</h1>
            </nav>

            <div className='p-4 space-y-3'>
              {todos.map((todo) => (
                <p
                  key={todo.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, todo.text)}
                  className="text-white cursor-grab bg-[#242528] p-2 pl-5 rounded-lg shadow hover:bg-[#2e2f33]"
                >
                  {todo.text}
                </p>

              ))}
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "Start using Trello")}
                className="cursor-grab hover:border border-white rounded-lg bg-[#242528] text-[#B7BAC0] py-2.5 px-4 shadow-md hover:bg-[#2F3033]"
              >
                Start using Trello
              </div>

            </div>
          </motion.div>

          {/* BOARD */}
          {showBoard && (
            <motion.div
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='w-[75%] h-120 flex-1'
            >
              <nav className='bg-linear-to-r from-[#C577EB] to-[#964079] rounded-tl-2xl h-14 pl-5 pt-3 flex items-center gap-5 justify-between'>
                <div className='flex items-center gap-3'>
                  <h1 className='text-[14px]'>My Trello Board</h1>
                  <p className='w-20 rounded-2xl bg-[#C178DC] h-4'></p>
                  <p className='w-20 rounded-2xl bg-[#C178DC] h-4'></p>
                </div>
                <div className='flex gap-2 items-center mb-3'>
                  <p className='bg-[#9B4B82] h-8 w-8 rounded-full'></p>
                  <p className='bg-[#9B4B82] h-8 w-8 rounded-full'></p>
                  <p className='bg-[#9B4B82] h-8 w-8 rounded-full'></p>
                </div>
              </nav>

              <div className='h-100 bg-linear-to-br from-[#C577EB] to-[#994380] rounded-bl-2xl p-3'>
                <div className='flex gap-4'>

                  {/* TODAY CARD */}
                  <div
                    ref={todayCardRef}
                    className='bg-[#303134] rounded-2xl w-75 p-4.5'
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "today")}
                  >
                    <div className='flex justify-between text-[#B7BAC0]'>
                      <h1>Today</h1>
                      <BsThreeDots />
                    </div>

                    {todayTasks.map((task, i) => (
                      <div key={i} className='flex items-center gap-2 mt-3 text-[#B7BAC0]'>
                        {showRadios ? (
                          <div
                            className='border-2 w-full border-white flex gap-2 h-8 rounded-lg p-2 items-center cursor-pointer'
                            onClick={() => {
                              setCheckedTaskIndex(i);
                              handleTaskCheck({ target: { checked: true } });
                            }}
                          >
                            {checkedTaskIndex === i ? (
                              <FaCheckCircle className='text-green-400 h-5 w-5' />
                            ) : (
                              <div className='h-4 w-4 border-2 border-white rounded-full'></div>
                            )}

                            <p>{task}</p>
                          </div>
                        ) : (
                          <p>{task}</p>
                        )}
                      </div>
                    ))}

                    {/* Show animation only before drag+drop */}
                    {expandCard && !hideAfterDrop && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 160, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="bg-[#4B4D51] mt-4 rounded-2xl overflow-hidden border-2 border-blue-400"
                      />
                    )}

                    <div className='flex mt-5 items-center justify-between gap-4'>
                      <div className='flex items-center gap-1.5'>
                        <FaPlus className='text-[#B7BAC0]' />
                        <p className='w-50 h-3 bg-[#3C3D3F] rounded-2xl'></p>
                      </div>
                      <p className='w-5 h-5 bg-[#3C3D3F] rounded-full'></p>
                    </div>
                  </div>

                  {/* THIS WEEK CARD */}
                  <div
                    className='bg-[#303134] rounded-2xl w-75 p-4.5 h-30'
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "week")}
                  >
                    <div className='flex justify-between text-[#B7BAC0]'>
                      <h1>This Week</h1>
                      <BsThreeDots />
                    </div>
                    {thisWeekTasks.map((task, i) => (
                      <p key={i} className='mt-3 text-[#B7BAC0]'>{task}</p>
                    ))}
                    <div className='flex mt-5 items-center justify-between gap-4'>
                      <div className='flex items-center gap-1.5'>
                        <FaPlus className='text-[#B7BAC0]' />
                        <p className='w-50 h-3 bg-[#3C3D3F] rounded-2xl'></p>
                      </div>
                      <p className='w-5 h-5 bg-[#3C3D3F] rounded-full'></p>
                    </div>
                  </div>

                  {/* LATER CARD */}
                  <div
                    className='bg-[#303134] rounded-2xl w-75 p-4.5 h-30'
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "later")}
                  >
                    <div className='flex justify-between text-[#B7BAC0]'>
                      <h1>Later</h1>
                      <BsThreeDots />
                    </div>
                    {laterTasks.map((task, i) => (
                      <p key={i} className='mt-3 text-[#B7BAC0]'>{task}</p>
                    ))}
                    <div className='flex mt-5 items-center justify-between gap-4'>
                      <div className='flex items-center gap-1.5'>
                        <FaPlus className='text-[#B7BAC0]' />
                        <p className='w-50 h-3 bg-[#3C3D3F] rounded-2xl'></p>
                      </div>
                      <p className='w-5 h-5 bg-[#3C3D3F] rounded-full'></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ABSOLUTE IMAGES */}
      {!imagesHidden && expandCard && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className='absolute top-90 left-70'>
            <img src={arrow} className='h-40 w-60' alt="" />
          </div>
          <img className='absolute top-93 h-20 w-20 left-165' src={side1} alt="" />
          <img className='absolute top-145 h-20 w-20 left-95' src={side2} alt="" />
          <div className="bg-[#8C52FF] rounded-full w-28 h-28 flex items-center justify-center absolute top-65 left-58">
            <img src={dog} alt="Dog Mascot" className="w-16 h-16" />
          </div>
          <div className="bg-[#303134] w-50 h-14 text-white text-sm px-4 py-2 rounded-xl absolute top-65 left-88">
            Boards and lists are customizable!
            <div className="absolute -left-1.5 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#303134]"></div>
          </div>
        </motion.div>
      )}
      {winkdog && (

        <>
          <div className="bg-[#8C52FF] rounded-full w-28 h-28 flex items-center justify-center absolute top-65 left-58">
            <img src={wink} alt="Dog Mascot" className="w-16 h-16" />
          </div>
          <div className="bg-[#303134] w-20 h-10  text-white text-sm px-4 py-2 rounded-xl absolute top-65 left-88">
            Nice!
            <div className="absolute -left-1.5 top-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#303134]"></div>
          </div>
        </>
      )
      }
      {roo && (

        <>
          <div className="bg-[#8C52FF] rounded-full w-40 h-40 flex items-center justify-center absolute top-140 left-160">
            <img src={checkit} alt="Dog Mascot" className="w-20 h-20" />
          </div>
          <div className="bg-[#303134] w-30 h-10  text-white text-sm px-4 py-2 rounded-xl absolute top-155 left-190">
            Check it off!
            <div className="absolute -left-1.5 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#303134]"></div>
          </div>
          <div className='absolute top-115 left-105'>
            <img className=' h-50 w-50' src={checkitarrow} alt="" />
          </div>
        </>
      )
      }
      {/*rooo! dog */}
      {taskChecked && (

        <>
          <div className="bg-[#8C52FF] rounded-full w-40 h-40 flex items-center justify-center absolute top-140 left-160">
            <img src={enjoydog} alt="Dog Mascot" className="w-20 h-20" />
          </div>
          <div className="bg-[#303134] w-30 h-10  text-white text-sm px-4 py-2 rounded-xl absolute top-155 left-190">
            Roo!
            <div className="absolute -left-1.5 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#303134]"></div>
          </div>
        </>
      )
      }
    </>
  );
};

export default Welcompage1;
