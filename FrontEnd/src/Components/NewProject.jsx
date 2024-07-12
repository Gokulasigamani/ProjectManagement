import { useRef } from "react";
import Infield from "./Infield";
import Modal from './Modal';

function NewProject({ onAdd, cancelHandler }) {
  let title = useRef();
  let Description = useRef();
  let DueDate = useRef();
  const modal = useRef();

  function SaveHandler() {
    let enteredTitle = title.current.value,
      enteredDescription = Description.current.value,
      enteredDueDate = DueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="w-[32rem] m-auto mt-[150px]">
        <menu className="flex items-center justify-end gap-5 font-semibold">
          <button onClick={cancelHandler}>Cancel</button>
          <button
            onClick={SaveHandler}
            className="px-5 py-1 bg-black text-white rounded-lg transition-all hover:bg-stone-200 hover:text-black"
          >
            Save
          </button>
        </menu>
        <div>
          <Infield ref={title} label="Title" />
          <Infield ref={Description} label="Description" textarea />
          <Infield ref={DueDate} type="date" label="Due Date" />
        </div>
        <Modal ref={modal} buttoncaption="Okay">
          <div className=''>
            <h1 className="text-xl text-stone-500 font-bold">Invalid input</h1>
            <p className="mt-2 text-stone-400">Make sure, all the fields are required.</p>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default NewProject;
