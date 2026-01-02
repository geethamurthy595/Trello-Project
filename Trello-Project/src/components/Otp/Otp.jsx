import React, { useState, useRef } from "react";

import leftImage from "../../assets/trello-left.4f52d13c.svg";
import rightImage from "../../assets/trello-right.e6e102c7.svg";

const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (index < otp.length - 1) inputRefs.current[index + 1].focus();
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    e.preventDefault(); // stop browser default delete behavior

    if (otp[index]) {
      //  Case 1: current box has a value → clear it
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    } else if (index > 0) {
      //  Case 2: current box is empty → move focus back
      inputRefs.current[index - 1].focus();

      // (Optional) also clear the previous box if it had a value
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  }
};


  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="bg-[rgb(250,251,252)] flex flex-col items-center justify-center min-h-screen relative">
      {/* Illustrations */}
      <img
        src={leftImage}
        alt="left illustration"
        className="absolute bottom-0 left-8 h-[368px] opacity-90"
      />
      <img
        src={rightImage}
        alt="right illustration"
        className="absolute bottom-0 right-8 h-[368px] opacity-90"
      />

      {/* Main Card */}
      <div className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-lg p-8 w-full max-w-md text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <span className="h-10">
            {/* Trello logo SVG */}
            <svg height="100%" viewBox="0 0 113 32">
              <path
                fill="#172B4D"
                d="M104.97 25.64c-4.6 0-7.3-3.4-7.3-8s2.7-7.94 7.3-7.94c4.57 0 7.24 3.34 7.24 7.94s-2.67 8-7.24 8m0-13.49c-3.28 0-4.72 2.58-4.72 5.49s1.44 5.55 4.72 5.55c3.25 0 4.66-2.64 4.66-5.55s-1.41-5.49-4.66-5.49M96.21 25.3c-.21.06-.67.12-1.35.12-2.51 0-4.11-1.19-4.11-4.02V3.59h2.64V21.1c0 1.38.92 1.87 2.06 1.87.28 0 .46 0 .77-.03zm-8 0c-.21.06-.67.12-1.35.12-2.51 0-4.11-1.19-4.11-4.02V3.59h2.64V21.1c0 1.38.92 1.87 2.06 1.87.28 0 .46 0 .77-.03zM72.86 12.09c-2.79 0-4.2 1.81-4.48 4.48h8.56c-.15-2.85-1.44-4.48-4.08-4.48m5.89 12.64c-1.26.67-3.19.92-4.75.92-5.73 0-8.25-3.31-8.25-8 0-4.63 2.58-7.94 7.24-7.94 4.72 0 6.62 3.28 6.62 7.94v1.2H68.42c.37 2.61 2.05 4.29 5.67 4.29 1.78 0 3.28-.34 4.66-.83zm-19.48-8.44v9.05h-2.58V10h2.58v2.7c.89-1.81 2.42-3.1 5.43-2.91v2.58c-3.37-.34-5.43.67-5.43 3.93M40.28 5.19h15.09v2.64H49.2v17.51h-2.76V7.82h-6.16z"
              />
              <path
                fill="#1558bc"
                d="M0 8a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
              />
              <path
                fill="white"
                d="M12.9 24c.62 0 1.13-.49 1.13-1.1V9.1c0-.61-.5-1.1-1.13-1.1H8.13C7.51 8 7 8.49 7 9.1v13.8c0 .61.5 1.1 1.13 1.1zm10.97-6.34c.62 0 1.13-.49 1.13-1.1V9.1c0-.61-.5-1.1-1.13-1.1H19.1c-.62 0-1.13.49-1.13 1.1v7.47c0 .61.5 1.1 1.13 1.1z"
              />
            </svg>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          We’ve emailed you a code
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          To complete your account setup, enter the code we’ve sent to:
          <br />
          <span className="font-semibold text-gray-800">email@gmail.com</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 text-center border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none text-lg transition"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Verify
        </button>

        {/* Resend Email */}
        <p className="mt-4 text-sm text-gray-500">
          Didn’t receive an email?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Resend email
          </a>
        </p>

        <hr className="my-6" />

        {/* Footer */}
        <div className="text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 198 32"
            height={32}
            fill="none"
            className="mx-auto mb-1"
          >
            <path
              fill="#6C6F77"
              d="M22.878 24.378 12.293 3.208c-.208-.458-.416-.541-.666-.541..."
            />
          </svg>
          <p>
            One account for Trello, Jira, Confluence and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              more
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otp;
