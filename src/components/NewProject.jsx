import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAddProject, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    if (
      title.current.value !== "" &&
      description.current.value !== "" &&
      dueDate.current.value !== ""
    ) {
      const newProject = {
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
      };
      onAddProject(newProject);
    } else {
      //Show the error modal
      modal.current.open();
      return;
    }
  }

  function handleCancel() {
    // Close
    onCancel();
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid input</h2>
        <p className="mb-4 text-stone-600">
          Oops! looks like you forgot to enter some values
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide some valid values for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
