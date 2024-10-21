import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAddTask, tasks, onDeleteTask }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="mb-4 text-stone-800">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex items-center justify-between p-4 mb-4 rounded-md bg-stone-100"
            >
              <p className="text-stone-800">{task.text}</p>
              <button
                className="text-stone-600 hover:text-stone-900"
                onClick={() => onDeleteTask(task.taskId)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
