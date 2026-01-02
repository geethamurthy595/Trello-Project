

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-200 flex flex-col justify-center m-0 p-0 items-center gap-5">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto px-6 py-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 p-3 m-0">
            Get started with Trello today
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 m-0">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              className="w-full sm:w-80 px-4 py-3 bg-white border-2 border-gray-200 rounded-md focus:outline-2 focus:ring-4 hover:border-black"
            />
            <Link to="/signUp" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md border-0 flex items-center justify-center whitespace-nowrap p-3">
              Sign up - it’s free!
            </Link>
          </div>

          <p className="text-gray-600 text-sm p-3 m-0">
            By entering my email, I acknowledge the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Atlassian Privacy Policy
            </a>
          </p>
        </div>

        {/* Footer Section */}
        
      </section>
    </>
  );
};

export default Footer;
