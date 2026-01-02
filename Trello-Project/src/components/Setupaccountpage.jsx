import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa6";

const Setupaccountpage = () => {

  const [verified, setVerified] = useState(false);

  // Password Strength Code
  useEffect(() => {
    const input = document.getElementById("passwordInput");
    const bar = document.getElementById("strengthBar");
    const text = document.getElementById("strengthText");

    input.addEventListener("input", () => {
      const pwd = input.value;
      let score = 0;

      if (pwd.length >= 6) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;

      if (pwd.length === 0) {
        bar.style.width = "0%";
        text.textContent = "";
        return;
      }

      if (score <= 1) {
        bar.style.width = "33%";
        bar.style.background = "#e74c3c";
        text.textContent = "Weak";
        text.style.color = "#e74c3c";
      } 
      else if (score <= 3) {
        bar.style.width = "66%";
        bar.style.background = "#f39c12";
        text.textContent = "Fair";
        text.style.color = "#f39c12";
      } 
      else {
        bar.style.width = "100%";
        bar.style.background = "#2ecc71";
        text.textContent = "Strong";
        text.style.color = "#2ecc71";
      }
    });

  }, []);

  // Handle Continue Button
  const handleSubmit = (e) => {
    e.preventDefault();
    setVerified(true); // Show the success message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello Logo"
            className="h-10"
          />
          <h1 className='text-4xl font-bold pl-2'>Trello</h1>
        </div>

        {/* SHOW ONLY AFTER CLICKING CONTINUE */}
        {verified && (
          <h2 className="text-center text-lg font-semibold text-green-700 mb-2">
            Email address verified ✅
          </h2>
        )}

        <p className="text-center text-sm text-gray-500 mb-6">
          Finish setting up your account
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              required
            />
          </div>

          {/* FULL NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>

            <div className="relative">
              <input
                id="passwordInput"
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Strength Bar */}
            <div className="w-full h-1 bg-gray-200 rounded mt-2">
              <div id="strengthBar" className="h-full rounded transition-all duration-300"></div>
            </div>

            <p id="strengthText" className="text-xs text-right mt-1"></p>
          </div>

          {/* TERMS */}
          <p className="text-xs text-gray-500">
            By signing up, I accept the{" "}
            <a href="#" className="text-blue-600 underline">
              Atlassian Cloud Terms of Service
            </a>{" "}
            and acknowledge the{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>.
          </p>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          >
            Continue
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p><strong>ATLASSIAN</strong></p>
          <p>One account for Trello, Jira, Confluence and more.</p>
          <p className="mt-2">
            Protected by Google{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-blue-600 underline">Terms</a>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Setupaccountpage;
