import img from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={img}
        alt="Empty task list"
        className="object-contain w-16 h-16 mx-auto"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No project selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
