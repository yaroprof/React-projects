import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ValidationForm from "./components/ValidationForm";

const App = () => {
  // Стейт для кожного акордеона
  const [openTask1, setOpenTask1] = useState(false);
  const [openTask2, setOpenTask2] = useState(false);
  const [openTask3, setOpenTask3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Task Manager App
      </h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Перша задача */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenTask1(!openTask1)}
          >
            <h2 className="text-xl font-semibold">Task #1</h2>
            <span className="text-gray-600">{openTask1 ? "-" : "+"}</span>
          </div>
          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              openTask1 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <TodoList />
          </div>
        </div>

        {/* Друга задача */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenTask2(!openTask2)}
          >
            <h2 className="text-xl font-semibold">Task #2</h2>
            <span className="text-gray-600">{openTask2 ? "-" : "+"}</span>
          </div>
          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              openTask2 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <Counter />
          </div>
        </div>

        {/* Третя задача */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenTask3(!openTask3)}
          >
            <h2 className="text-xl font-semibold">Task #3</h2>
            <span className="text-gray-600">{openTask3 ? "-" : "+"}</span>
          </div>
          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              openTask3 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ValidationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
