import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import CreateProject from "./Model/createProject";
import { renderProjectsButton, viewProjects } from "./View/renderProjects";
import { renderTodosButton, viewTodos } from "./View/renderTodos";

// render between the adding new project and submitting an project
renderProjectsButton();
// const projectAddButton = document.querySelector(".project-add-btn");
const projectParagraph = document.querySelector(".project-paragraph");
const projectInput = document.querySelector(".input-text-project");
const projectSubmitBtn = document.querySelector(".submit-button-project");

// event to toggle the button from flex to hiding the element
projectParagraph.addEventListener("click", () => {
  if (
    projectParagraph.style.display === "flex" &&
    projectInput.style.display === "none" &&
    projectSubmitBtn.style.display === "none"
  ) {
    projectParagraph.style.display = "none";
    projectInput.style.display = "block";
    projectSubmitBtn.style.display = "block";
  } else {
    projectParagraph.style.display = "flex";
    projectInput.style.display = "none";
    projectSubmitBtn.style.display = "none";
  }
});

// events to stop from hiding the input and the submit button
projectInput.addEventListener("click", (e) => {
  e.stopPropagation();
});

const projectsFolder = new ProjectsFolder("Folder");
projectsFolder.addProjects("Default");
projectsFolder.addProjects("New project");
// default object project
const defaultProjects = new CreateProject("Default");
defaultProjects.addToDo(
  "do some top",
  "finish some functionality",
  new Date(),
  "high",
  false
);
defaultProjects.addToDo(
  "work at some todo",
  "finish show different todos",
  new Date(),
  "medium",
  true
);
// new project object
const newProject = new CreateProject("New project");
newProject.addToDo(
  "working on my tab switch",
  "to do functionality",
  new Date(),
  "low",
  false
);
newProject.addToDo(
  "trying different stuff",
  "to see how it will look",
  new Date(),
  "high",
  false
);

projectSubmitBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  // render the projects when the submit button is clicked
  // additional conditions to show add new project
  if (
    projectInput.style.display === "block" &&
    projectSubmitBtn.style.display === "block"
  ) {
    projectInput.style.display = "none";
    projectSubmitBtn.style.display = "none";
    projectParagraph.style.display = "flex";
  }

  // render projects
  viewProjects.renderProjects(projectsFolder.projects);
  // select all projects
  const projectsContentDiv = document.querySelectorAll(".projects-content");
  console.log(projectsContentDiv);
  // loop them for an event what will tab switch what todos they have
  projectsContentDiv.forEach((project) => {
    project.addEventListener("click", (e) => {
      const getProjectIds = e.target;
      const saveProjectsIds = getProjectIds.getAttribute("projects-id");
      const todosContentDiv = document.querySelectorAll(".todos-content");
      console.log(todosContentDiv);
      // if todos are found remove them
      todosContentDiv.forEach((todo) => {
        console.log(todo);
        if (todo) {
          todo.remove();
        }
      });

      if (projectsFolder.findProjectById(saveProjectsIds)) {
        viewTodos.renderTodos(defaultProjects.todos);
        // viewTodos.renderTodos(newProject.todos);
      }
      // console.log(projectsFolder.findProjectById(saveProjectsIds));
    });
  });
});

// render between the adding new todo and submitting the project
renderTodosButton();
// const todoAddButton = document.querySelector(".todos-add-btn");
const todoParagraph = document.querySelector(".todo-paragraph");
const todoInput = document.querySelector(".input-text-todo");
const checkCompleteTodo = document.querySelector(".complete-todo-radio");
const priorityTodo = document.querySelector(".todo-content-priority");
const dueDate = document.querySelector(".todo-content-date");
const calendarIcon = document.querySelector(".svg-icons");
const submitBtnTodo = document.querySelector(".submit-btn-todo");

// toggle between adding new todo and submitting it
todoParagraph.addEventListener("click", () => {
  if (
    todoParagraph.style.display === "flex" &&
    todoInput.style.display === "none" &&
    checkCompleteTodo.style.display === "none" &&
    priorityTodo.style.display === "none" &&
    dueDate.style.display === "none" &&
    calendarIcon.style.display === "none" &&
    submitBtnTodo.style.display === "none"
  ) {
    todoParagraph.style.display = "none";
    todoInput.style.display = "block";
    checkCompleteTodo.style.display = "block";
    priorityTodo.style.display = "block";
    dueDate.style.display = "block";
    calendarIcon.style.display = "block";
    submitBtnTodo.style.display = "block";
  } else {
    todoParagraph.style.display = "flex";
    todoInput.style.display = "none";
    checkCompleteTodo.style.display = "none";
    priorityTodo.style.display = "none";
    dueDate.style.display = "none";
    calendarIcon.style.display = "none";
    submitBtnTodo.style.display = "none";
  }
});

// stop bubbling on these elements so it won't toggle the div
checkCompleteTodo.addEventListener("click", (e) => {
  e.stopPropagation();
});

todoInput.addEventListener("click", (e) => {
  e.stopPropagation();
});

priorityTodo.addEventListener("click", (e) => {
  e.stopPropagation();
});

dueDate.addEventListener("click", (e) => {
  e.stopPropagation();
});

calendarIcon.addEventListener("click", (e) => {
  e.stopPropagation();
});

submitBtnTodo.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  // additional conditions to change displaying between block to hide them
  if (
    todoParagraph.style.display === "none" &&
    todoInput.style.display === "block" &&
    checkCompleteTodo.style.display === "block" &&
    priorityTodo.style.display === "block" &&
    dueDate.style.display === "block" &&
    calendarIcon.style.display === "block" &&
    submitBtnTodo.style.display === "block"
  ) {
    todoParagraph.style.display = "flex";
    todoInput.style.display = "none";
    checkCompleteTodo.style.display = "none";
    priorityTodo.style.display = "none";
    dueDate.style.display = "none";
    calendarIcon.style.display = "none";
    submitBtnTodo.style.display = "none";
  }
  // render todos on submit
  viewTodos.renderTodos(defaultProjects.todos);
  viewTodos.renderTodos(newProject.todos);
});
