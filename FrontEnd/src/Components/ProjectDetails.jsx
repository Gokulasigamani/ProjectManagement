import Task from "./Task";

function ProjectDetails({ project, DeleteProject, AddTask, DeleteTask }) {
  let formattedDate = new Date(project.dueDate).toLocaleDateString(
    'en-us',
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  );

  return (
    <>
      <div className=" w-[38rem] ml-40  mt-16">
        <header className="">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-black">{project.title}</h1>
            <button className="px-5 py-1  bg-stone-800 text-slate-100 rounded-lg" onClick={DeleteProject}>Delete</button>
          </div>
        </header>
        <div className="pb-5 mb-4 border-b-2 border-stone-500">
          <p className="mb-2 text-stone-500">{project.description}</p>
          <p className="mb-2 text-stone-700 whitespace-pre-wrap">{formattedDate}</p>
        </div>
        <Task tasks={project.tasks} onAddTask={(task) => AddTask(project.id, task)} onDeleteTask={(taskId) => DeleteTask(project.id, taskId)} />
      </div>
    </>
  );
}

export default ProjectDetails;
