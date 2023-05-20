import { CreateTodo } from "./Model/createTodo";
import CreateProject from "./Model/createProject";
import ProjectsFolder from "./Model/ProjectsFolder";

// this folder wraps the projects
const defaultFolder = new ProjectsFolder("Default");
defaultFolder.addProjects(defaultFolder);
console.log(defaultFolder.projects);

// first users has to create mew project
const defaultProject = new CreateProject("Default");

// then inside the project they can create todos/tasks
const todo1 = new CreateTodo(
  "fixing bugs",
  "on my todo class",
  "20/5/2024",
  "high"
);

const todo2 = new CreateTodo(
  "fixing other stuff",
  "on my other class",
  "22/5/2024",
  "medium"
);

const todo3 = new CreateTodo(
  "taking a break",
  "after fixing the errors",
  "20/5/2024",
  "low"
);

defaultProject.addToDo(todo1);
defaultProject.addToDo(todo2);
defaultProject.addToDo(todo3);
console.log(defaultProject.todos);
