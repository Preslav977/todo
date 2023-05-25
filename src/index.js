import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import CreateProject from "./Model/createProject";
import { viewProjects, addProjectBtn, addProject } from "./View/renderProjects";
import { addTodosBtn, viewTodos } from "./View/renderTodos";

const projectsContainer = document.querySelector(".projects");
// console.log(projectsContainer);

const folder = new ProjectsFolder("Folder");
addProjectBtn.addEventListener("click", () => {
  folder.addProjects("Default");
  folder.addProjects("New Project");
  viewProjects.renderProjects(folder.projects);
});

// console.log(folder.projects);

const project = new CreateProject("Default");
addTodosBtn.addEventListener("click", () => {
  project.addToDo("testing", "my todo functionality", new Date(), "high", true);
  viewTodos.renderTodos(project.todos);
});
