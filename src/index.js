import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import CreateProject from "./Model/createProject";
import { viewProjects, addProjectBtn } from "./View/renderProjects";
import { viewTodos, addTodosBtn } from "./View/renderTodos";

const folder = new ProjectsFolder("Folder");
console.log(folder);
console.log(folder.projects);
addProjectBtn.addEventListener("click", () => {
  folder.addProjects("Default");
  folder.addProjects("New project");
  viewProjects.renderProjects(folder.projects[0]);
  // viewProjects.renderProjects(folder.projects[1]);
  console.log(folder.projects);
  console.log(folder.findProject("Default"));
  const projectContent = document.querySelectorAll(".projects-content");
  projectContent.forEach((project) => {
    project.addEventListener("click", () => {
      const newProject = new CreateProject("Default");
      newProject.addToDo(
        "testing",
        "todos cuz why not",
        new Date(),
        "high",
        true
      );
      const anotherProject = new CreateProject("Testing");
      anotherProject.addToDo(
        "another test",
        "to see if this works",
        new Date(),
        "medium",
        false
      );
      viewTodos.renderTodos(newProject.todos[0]);
      viewTodos.renderTodos(anotherProject.todos[0]);
    });
  });
});
