import { useState } from "react";

function NewTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleTaskTitleChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleAddTask() {
    if (taskTitle.trim() !== '') {
      onAddTask({ title: taskTitle });
      setTaskTitle('');
    }
  }

  return (
    <>
      <div className="flex gap-5 mt-5">
        <input type="text" value={taskTitle} onChange={handleTaskTitleChange} className="w-[300px] px-3 py-2 bg-stone-300 rounded-md shadow-lg" />
        <button className="px-3 py-1 bg-black rounded-lg text-slate-100" onClick={handleAddTask}>Add Task</button>
      </div>
    </>
  );
}

export default NewTask;
