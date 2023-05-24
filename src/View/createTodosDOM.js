import calendarSvg from "../svg-icons/calendar-month-outline.svg";
import trashcanSvg from "../svg-icons/trash-can-outline.svg";

const todoContainer = document.getElementById("todo-container");

function createTodoDOM() {
  // create the container that will append the other DOM elements
  const todo = document.createElement("div");
  todo.classList.add("todos");
  // create radio button to set the todo's as complete
  const checkCompleteTodo = document.createElement("input");
  checkCompleteTodo.setAttribute("type", "radio");
  // create paragraph to set a title for the todo
  const titleTodo = document.createElement("p");
  titleTodo.textContent = "Testing my todo functionality";
  titleTodo.classList.add("todo-content");
  // create paragraph to set a priority's for todo
  const priorityTodo = document.createElement("select");
  priorityTodo.classList.add("todo-content-priority-menu");
  const optionEmptyPriority = document.createElement("option");
  optionEmptyPriority.text = "";
  const optionLowPriority = document.createElement("option");
  optionLowPriority.text = "low";
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.text = "medium";
  const optionHighPriority = document.createElement("option");
  optionHighPriority.text = "high";
  // create paragraph to dueDate for todo
  const dateTodo = document.createElement("p");
  dateTodo.textContent = "23-05-23";
  dateTodo.classList.add("todo-content");
  // create calendarSVG icon
  const calendarIcon = new Image();
  calendarIcon.src = calendarSvg;
  calendarIcon.classList.add("svg-icons", "todo-content-svg-icons");
  // create trashcanSVG icon
  const trashcanIcon = new Image();
  trashcanIcon.src = trashcanSvg;
  trashcanIcon.classList.add("svg-icons", "todo-content-svg-icons");
  // append radio button
  todo.appendChild(checkCompleteTodo);
  // append paragraph with title
  todo.appendChild(titleTodo);
  // append paragraph with priority's
  priorityTodo.appendChild(optionEmptyPriority);
  priorityTodo.appendChild(optionLowPriority);
  priorityTodo.appendChild(optionMediumPriority);
  priorityTodo.appendChild(optionHighPriority);
  todo.appendChild(priorityTodo);
  // append paragraph with date
  todo.appendChild(dateTodo);
  // append calendar icon
  todo.appendChild(calendarIcon);
  // append trashcan icon
  todo.appendChild(trashcanIcon);
  todoContainer.appendChild(todo);
}

function addNewTodo() {
  const newProjectBtn = document.createElement("div");
  newProjectBtn.textContent = "+ new task";
  newProjectBtn.classList.add("todos");
  todoContainer.appendChild(newProjectBtn);
}

function addTodo() {
  // create the container that will append the other DOM elements
  const todo = document.createElement("div");
  todo.classList.add("todos");
  // create radio button to set the todo's as complete
  const checkCompleteTodo = document.createElement("input");
  checkCompleteTodo.setAttribute("type", "radio");
  // create paragraph to set a title for the todo
  const inputText = document.createElement("input");
  inputText.classList.add("input-text-todo");
  // create select element to set a priority's for todo
  const priorityTodo = document.createElement("select");
  priorityTodo.classList.add("todo-content-priority");
  const optionEmptyPriority = document.createElement("option");
  optionEmptyPriority.text = "";
  const optionLowPriority = document.createElement("option");
  optionLowPriority.text = "low";
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.text = "medium";
  const optionHighPriority = document.createElement("option");
  optionHighPriority.text = "high";
  // create paragraph to dueDate for todo
  const dateTodo = document.createElement("p");
  dateTodo.textContent = "23-05-23";
  dateTodo.classList.add("todo-content-date");
  // create calendarSVG icon
  const calendarIcon = new Image();
  calendarIcon.src = calendarSvg;
  calendarIcon.classList.add("svg-icons", "todo-content-svg-icons");
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("submit-btn-todo");
  submitBtn.textContent = "Submit";
  todo.appendChild(checkCompleteTodo);
  // append paragraph with title
  todo.appendChild(inputText);
  // append select with priority's
  priorityTodo.appendChild(optionEmptyPriority);
  priorityTodo.appendChild(optionLowPriority);
  priorityTodo.appendChild(optionMediumPriority);
  priorityTodo.appendChild(optionHighPriority);
  todo.appendChild(priorityTodo);
  // append paragraph with date
  todo.appendChild(dateTodo);
  // append calendar icon
  todo.appendChild(calendarIcon);
  // append trashcan icon
  todo.appendChild(submitBtn);
  todoContainer.appendChild(todo);
}

export { createTodoDOM, addNewTodo, addTodo };
