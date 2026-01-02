import React, { useState } from "react";

export default function Pricingcalculator() {
  const [users, setUsers] = useState(50);
  const [totalPrice, setTotalPrice] = useState(10500);
  const [perUserPrice, setPerUserPrice] = useState(17.5);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10) || 0;
    if (value < 50) value = 50;
    setUsers(value);

    let newTotal = 10500 + (value - 50) * 210;
    setTotalPrice(newTotal);

    let newPerUserPrice = 17.5;
    if (value > 250) {
      newPerUserPrice = 17.5 - (value - 250) * 0.01;
      if (newPerUserPrice < 0) newPerUserPrice = 0;
    }
    setPerUserPrice(newPerUserPrice);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-[500px] border border-gray-300 rounded-xl p-8 shadow-lg bg-white">
        <h2 className="text-[24px] font-semibold text-[#091E42] mb-6 text-center">
          Pricing Calculator
        </h2>

        <label className="block text-[#091E42] text-[20px] font-semibold mb-2">
          How many users?
        </label>
        <input
          type="number"
          value={users}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="50"
        />

        <div className="mt-8 text-center">
          <p className="mb-2 block text-[#091E42] text-[16px] font-semibold">
            Your price:
          </p>

          <div className="flex justify-center items-end gap-8">
            <p className="text-3xl font-bold text-black">
              ${perUserPrice.toFixed(2)} <span className="text-lg">USD</span>
              <br />
              <span className="block text-[#091E42] text-[16px] font-semibold">
                Per user per month
              </span>
            </p>

            <p className="text-3xl font-bold text-black">
              ${totalPrice.toLocaleString()} <span className="text-lg">USD</span>
              <br />
              <span className="block text-[#091E42] text-[16px] font-semibold">
                Total per year*
              </span>
            </p>
          </div>

          <p className="mt-4 block text-[#091E42] text-[16px] font-semibold">
            *$10k minimum spend threshold when purchasing Trello Enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
