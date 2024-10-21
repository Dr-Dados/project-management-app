import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAddTask }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      <p className="mb-4 text-stone-800">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
};

export default Tasks;
