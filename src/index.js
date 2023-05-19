import ProjectsFolder, { projectsFolderArray } from "./Model/ProjectsFolder";
import CreateProjectToDo, { toDoItemArray } from "./Model/createProject";

import { CreateTodoItem } from "./Model/createTodoItem";

const createNewFolder = new ProjectsFolder("Default");
// console.log(createProjectsFolder);

const defaultProject = new CreateProjectToDo("Default Project");
// console.log(defaultProject);
createNewFolder.updateProjects(defaultProject);

const todayToDo = new CreateTodoItem(
  "working on todo",
  "working on some implementation",
  "19/5/2024",
  "high"
);

defaultProject.updateToDoItem(todayToDo);

const tomorrowToDo = new CreateTodoItem(
  "working on some additional things",
  "this is for todo also",
  "20/5/2024",
  "medium"
);

defaultProject.updateToDoItem(tomorrowToDo);

const afterTomorrowToDo = new CreateTodoItem(
  "driving the car",
  "to get to the city",
  "21/5/2024",
  "low"
);

defaultProject.updateToDoItem(afterTomorrowToDo);
createNewFolder.updateProjects(toDoItemArray);

console.log(projectsFolderArray);
