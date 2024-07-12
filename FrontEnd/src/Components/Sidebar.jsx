function Sidebar({ onProjectAddHandler, project, OnSelectProject, SelectProjectId }) {
    return (
      <>
        <aside className="w-[20%] bg-black text-center py-10 mt-5 rounded-r-2xl">
          <h1 className="text-white text-3xl font-semibold">Your Projects</h1>
          <button
            onClick={onProjectAddHandler}
            className="px-6 py-2 bg-stone-700 text-stone-300 text-lg rounded-lg mt-10"
          >
            + Add Projects
          </button>
          <ul className="mt-5 flex flex-col gap-3 ">
            {project.map((project) => {
              let CssClasses = "w-[250px] py-3 m-auto text-left px-2 rounded-md bg-stone-700 text-stone-400 font-semibold";
              if (project.id === SelectProjectId) {
                CssClasses += " bg-stone-900";
              } else {
                CssClasses += " text-stone-400";
              }
              return (
                <button
                  key={project.id}
                  className={CssClasses}
                  onClick={() => OnSelectProject(project.id)}
                >
                  <li>{project.title}</li>
                </button>
              );
            })}
          </ul>
        </aside>
      </>
    );
  }
  
  export default Sidebar;
  