import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import CreateProject from "./Model/createProject";
import { viewProjects, addProjectBtn } from "./View/renderProjects";
import { viewTodos, addTodosBtn } from "./View/renderTodos";

const folder = new ProjectsFolder("Default");
folder.addProjects("Default", "0");
console.log(folder.findProjectById("0"));
folder.addProjects("New project", "1");
// console.log(folder.projects);
addProjectBtn.addEventListener("click", () => {
  viewProjects.renderProjects(folder.projects[0]);
  // viewProjects.renderProjects(folder.projects[1]);
  const projectsContent = document.querySelectorAll(".projects-content");
  projectsContent.forEach((project) => {
    project.addEventListener("click", (e) => {
      const projectsIds = e.target;
      const saveProjectsIds = projectsIds.getAttribute("projects-id");
      console.log(saveProjectsIds);
      const inboxProject = new CreateProject("Inbox");
      inboxProject.addToDo(
        "testing",
        "shake it like salt shake",
        new Date(),
        "high",
        true
      );
      const todayProject = new CreateProject("Today");
      todayProject.addToDo(
        "new todo",
        "cuz why not",
        new Date(),
        "medium",
        false
      );
      viewTodos.renderTodos(inboxProject.todos[0], saveProjectsIds);
      viewTodos.renderTodos(todayProject.todos[0], saveProjectsIds);
      // console.log(inboxProject.todos);
    });
  });
});
