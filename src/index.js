import "./style.css";

import { renderProjectsButton } from "./View/renderProjects";
import { renderTodosButton } from "./View/renderTodos";

renderProjectsButton();

const projectAddButton = document.querySelector(".project-add-btn");
const projectParagraph = document.querySelector(".project-paragraph");
const projectInput = document.querySelector(".input-text-project");
const projectSubmitBtn = document.querySelector(".submit-button-project");

projectAddButton.addEventListener("click", () => {
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

projectSubmitBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (
    projectInput.style.display === "block" &&
    projectSubmitBtn.style.display === "block"
  ) {
    projectInput.style.display = "none";
    projectSubmitBtn.style.display = "none";
    projectParagraph.style.display = "flex";
  }
});

renderTodosButton();
const todoAddButton = document.querySelector(".todos-add-btn");
const todoParagraph = document.querySelector(".todo-paragraph");
const todoInput = document.querySelector(".input-text-todo");
const checkCompleteTodo = document.querySelector(".complete-todo-radio");
const priorityTodo = document.querySelector(".todo-content-priority");
const dueDate = document.querySelector(".todo-content-date");
const calendarIcon = document.querySelector(".svg-icons");
const submitBtnTodo = document.querySelector(".submit-btn-todo");

todoAddButton.addEventListener("click", () => {
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
});
