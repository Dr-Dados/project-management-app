import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState("");
  function handleChange(e) {
    setTaskInput(e.target.value);
  }

  function handleClick() {
    onAddTask(taskInput);
    setTaskInput("");
  }
  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        value={taskInput}
        onChange={handleChange}
        type="text"
        className="w-64 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
