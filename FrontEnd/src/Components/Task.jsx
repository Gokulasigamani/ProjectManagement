import NewTask from "./NewTask";

function Task({ tasks, onAddTask, onDeleteTask }) {
  return (
    <>
      <label className="text-3xl font-semibold" htmlFor="">Tasks</label>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center mt-4">
            <p className="text-stone-700">{task.title}</p>
            <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p className="my-4 text-stone-400">The project does not have any tasks.</p>
      )}
    </>
  );
}

export default Task;
