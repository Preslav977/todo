import "./style.css";
import CreateProject from "./Model/createProject";
import ProjectsFolder from "./Model/ProjectsFolder";
import { addNewTodo, addTodo, createTodoDOM } from "./View/createTodosDOM";
import {
  addNewProject,
  addProject,
  createProjectsDOM,
} from "./View/createProjectsDOM";

const folder = new ProjectsFolder("Inbox");
folder.addProjects("Default");

const defaultProject = new CreateProject("Default");

defaultProject.addToDo("taking a bath", "for science", new Date(), "low");
defaultProject.addToDo(
  "watching ghost videos",
  "this is so scary",
  new Date(),
  "medium"
);
defaultProject.addToDo(
  "doing some TOP",
  "to continue to learn",
  new Date(),
  "high"
);

console.log(folder.projects);
console.log(defaultProject.todos);

createProjectsDOM("Testing");
addNewProject();
addProject();

createTodoDOM();
addNewTodo();
addTodo();
