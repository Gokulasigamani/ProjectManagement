import Sidebar from "../Components/Sidebar";
import NewProject from "../Components/NewProject";
import NoProjects from "../Components/NoProjects";
import ProjectDetails from "../Components/ProjectDetails";
import { useState } from "react";

function Home() {
  const [ProjectStatus, SetProjectStatus] = useState({
    SelectedProjectId: undefined,
    projects: []
  });

  function ProjectAddHandler() {
    SetProjectStatus((PrevStatus) => ({
      ...PrevStatus,
      SelectedProjectId: null,
    }));
  }

  function AddingProjectHandler(projectData) {
    SetProjectStatus((PrevStatus) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        tasks: []
      };
      return {
        ...PrevStatus,
        projects: [...PrevStatus.projects, newProject],
        SelectedProjectId: undefined,
      };
    });
  }

  function CancelHandler() {
    SetProjectStatus((PrevStatus) => ({
      ...PrevStatus,
      SelectedProjectId: undefined,
    }));
  }

  function SelectProjectHandler(id) {
    SetProjectStatus((PrevStatus) => ({
      ...PrevStatus,
      SelectedProjectId: id,
    }));
  }

  function DeleteProjectHandler() {
    SetProjectStatus((PrevStatus) => ({
      ...PrevStatus,
      SelectedProjectId: undefined,
      projects: PrevStatus.projects.filter(
        (project) => project.id !== ProjectStatus.SelectedProjectId
      ),
    }));
  }

  function AddTaskHandler(projectId, task) {
    SetProjectStatus((PrevStatus) => {
      const updatedProjects = PrevStatus.projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, { id: Math.random(), ...task }],
          };
        }
        return project;
      });
      return {
        ...PrevStatus,
        projects: updatedProjects,
      };
    });
  }

  function DeleteTaskHandler(projectId, taskId) {
    SetProjectStatus((PrevStatus) => {
      const updatedProjects = PrevStatus.projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });
      return {
        ...PrevStatus,
        projects: updatedProjects,
      };
    });
  }

  const SelectedProject = ProjectStatus.projects.find(
    (project) => project.id === ProjectStatus.SelectedProjectId
  );

  let content;

  if (ProjectStatus.SelectedProjectId === null) {
    content = <NewProject onAdd={AddingProjectHandler} cancelHandler={CancelHandler} />;
  } else if (ProjectStatus.projects.length === 0) {
    content = <NoProjects onProjectAddHandler={ProjectAddHandler} />;
  } else if (SelectedProject) {
    content = (
      <ProjectDetails
        project={SelectedProject}
        DeleteProject={DeleteProjectHandler}
        AddTask={AddTaskHandler}
        DeleteTask={DeleteTaskHandler}
      />
    );
  } else {
    content = <NoProjects onProjectAddHandler={ProjectAddHandler} />;
  }

  return (
    <>
      <main className="h-screen gap-8 flex">
        <Sidebar
          onProjectAddHandler={ProjectAddHandler}
          project={ProjectStatus.projects}
          OnSelectProject={SelectProjectHandler}
        />
        {content}
      </main>
    </>
  );
}

export default Home;
