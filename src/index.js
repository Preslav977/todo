import CreateProject from "./Model/createProject";
import ProjectsFolder from "./Model/ProjectsFolder";

const folder = new ProjectsFolder("Inbox");
folder.addProjects(
  "Default",
  "taking a bath",
  "for science",
  new Date(),
  "low"
);

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
