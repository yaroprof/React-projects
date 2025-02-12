import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 ">
      <h1 className="text-3xl mb-6 font-bold">Todolist</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="px-4 py-2 mb-4 border-rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add</button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 mb-2 border rounded-lg ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through to-gray-500" : ""
              }`}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoList;
