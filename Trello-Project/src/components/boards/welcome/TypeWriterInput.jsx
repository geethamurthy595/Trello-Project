import React, { useState, useEffect } from "react";

const TypeWriterInput = ({ onComplete }) => {
  const fullText = "What's on your to-do list?";
  const [placeholder, setPlaceholder] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setPlaceholder(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
        onComplete(); // 🔥 notify parent when done typing
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <input
      type="text"
      placeholder={placeholder + (cursorVisible ? "|" : "")}
      className="bg-transparent text-[#B7BAC0] outline-none placeholder:text-[#667A8E]"
    />
  );
};


export default TypeWriterInput;
