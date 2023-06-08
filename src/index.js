import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import CreateProject from "./Model/createProject";
import { renderProjectsButton, viewProjects } from "./View/renderProjects";
import { renderTodosButton, viewTodos } from "./View/renderTodos";
import { CreateTodo } from "./Model/createTodo";

// render between the adding new project and submitting an project
renderProjectsButton();
const projectParagraph = document.querySelector(".project-paragraph");
const projectInput = document.querySelector(".input-text-project");
const projectSubmitBtn = document.querySelector(".submit-button-project");
const userProjectForm = document.querySelector(".project-form");

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

projectSubmitBtn.addEventListener("click", (e) => {
  e.stopPropagation();
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
});

// render only the project
function createProjectsDOM(e) {
  const projects = [];
  const projectFormData = new FormData(e.target);
  const projectObject = Object.fromEntries(projectFormData);
  const getProjectTitle = projectObject["project-title"];
  projectsFolder.addProjects(`${getProjectTitle}`);
  const createNewProject = new CreateProject(`${getProjectTitle}`);
  projects.push(createNewProject);
  console.log(projectsFolder.projects);
}

function removeDuplicatedProject() {
  const duplicatedProjects = document
    .querySelectorAll(".projects-content")
    .forEach((project) => project.remove());
}

userProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createProjectsDOM(e);
  removeDuplicatedProject();
  viewProjects.renderProjects(projectsFolder.projects);
  userProjectForm.reset();
});

// render between the adding new todo and submitting the project
renderTodosButton();
// const todoAddButton = document.querySelector(".todos-add-btn");
const todoParagraph = document.querySelector(".todo-paragraph");
const todoInput = document.querySelector(".input-text-todo");
const checkCompleteTodo = document.querySelector(".complete-todo-radio");
const todoDescription = document.querySelector(".input-description-todo");
const priorityTodo = document.querySelector(".todo-content-priority");
const dueDate = document.querySelector(".todo-content-date");
const calendarIcon = document.querySelector(".svg-icons");
const submitBtnTodo = document.querySelector(".submit-btn-todo");
const userTodoForm = document.querySelector(".todo-form");

// toggle between adding new todo and submitting it
todoParagraph.addEventListener("click", () => {
  if (
    todoParagraph.style.display === "flex" &&
    todoInput.style.display === "none" &&
    todoDescription.style.display === "none" &&
    checkCompleteTodo.style.display === "none" &&
    priorityTodo.style.display === "none" &&
    dueDate.style.display === "none" &&
    calendarIcon.style.display === "none" &&
    submitBtnTodo.style.display === "none"
  ) {
    todoParagraph.style.display = "none";
    todoInput.style.display = "block";
    todoDescription.style.display = "block";
    checkCompleteTodo.style.display = "block";
    priorityTodo.style.display = "block";
    dueDate.style.display = "block";
    calendarIcon.style.display = "block";
    submitBtnTodo.style.display = "block";
  } else {
    todoParagraph.style.display = "flex";
    todoInput.style.display = "none";
    todoDescription.style.display = "none";
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
  // additional conditions to change displaying between block to hide them
  if (
    todoParagraph.style.display === "none" &&
    todoInput.style.display === "block" &&
    todoDescription.style.display === "block" &&
    checkCompleteTodo.style.display === "block" &&
    priorityTodo.style.display === "block" &&
    dueDate.style.display === "block" &&
    calendarIcon.style.display === "block" &&
    submitBtnTodo.style.display === "block"
  ) {
    todoParagraph.style.display = "flex";
    todoInput.style.display = "none";
    todoDescription.style.display = "none";
    checkCompleteTodo.style.display = "none";
    priorityTodo.style.display = "none";
    dueDate.style.display = "none";
    calendarIcon.style.display = "none";
    submitBtnTodo.style.display = "none";
  }
  // render todos on submit
});

// create the project here, and the todo
// render the todo only here
function createTodosDOM(e) {
  const todos = [];
  const todoForm = new FormData(e.target);
  const todoObject = Object.fromEntries(todoForm);
  const getCompleteTodo = todoObject["complete-todo"];
  const getTodoTitle = todoObject["todo-title"];
  const getTodoDescription = todoObject["description-todo"];
  const getTodoPriority = todoObject["priority-todo"];
  const createNewTodo = new CreateTodo(
    `${getTodoTitle}`,
    `${getTodoDescription}`,
    `${new Date()}`,
    `${getTodoPriority}`,
    `${getCompleteTodo}`
  );

  todos.push(createNewTodo);
}

userTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodosDOM(e);
  userTodoForm.reset();
});
