import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState("");
  const [startValue, setStartValue] = useState("");

  const handleSetStartValue = () => {
    const parsedValue = parseInt(startValue, 10);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl mb-6 font-bold">Counter</h1>

      <div className="flex items-center gap-4 mb-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          {" "}
          -{" "}
        </button>

        <span className="text-3xl font-semibold">{count}</span>

        <input
          type="number"
          value={startValue}
          onChange={(e) => setStartValue(e.target.value)}
          placeholder="Enter start value"
          className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSetStartValue}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Set start value
        </button>
      </div>
    </div>
  );
};

export default Counter;
