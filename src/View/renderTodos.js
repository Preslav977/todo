import { format } from "date-fns";
import calendarSvg from "../svg-icons/calendar-white.svg";
import trashcanSvg from "../svg-icons/trashcan-white.svg";

const todoContainer = document.getElementById("todo-container");

// pass here todo, title, description, dueDate, priority, complete
const viewTodos = {
  renderTodos(todosArray) {
    todosArray.forEach((todo) => {
      // create the container that will append the other DOM element
      const todoDiv = document.createElement("div");
      todoDiv.setAttribute("todos-id", todo._id);
      todoDiv.classList.add("todos-content");
      // create radio button to set the todo's as complete
      const checkCompleteTodo = document.createElement("input");
      checkCompleteTodo.setAttribute("type", "checkbox");
      checkCompleteTodo.setAttribute("value", "true");
      checkCompleteTodo.classList.add("complete-todo-checkbox");
      checkCompleteTodo.setAttribute("id", "completed-todo-checkbox");
      checkCompleteTodo.textContent = `${todo._complete}`;
      if (checkCompleteTodo.textContent === "true") {
        checkCompleteTodo.setAttribute("checked", "");
        checkCompleteTodo.textContent = "";
      } else {
        checkCompleteTodo.removeAttribute("checked");
        checkCompleteTodo.style.fontSize = "0";
      }
      // create paragraph to set a title for the todo
      const titleTodo = document.createElement("p");
      titleTodo.textContent = `${todo._title}`;
      titleTodo.classList.add("todo-content", "todo-text-content");
      const descriptionTodo = document.createElement("p");
      descriptionTodo.textContent = `${todo._description}`;
      descriptionTodo.classList.add("todo-description");
      const priorityTodo = document.createElement("select");
      priorityTodo.classList.add("todo-content-priority-menu");
      priorityTodo.setAttribute("id", "priority-todo-dropdown");
      const optionEmptyPriority = document.createElement("option");
      optionEmptyPriority.setAttribute("value", "");
      optionEmptyPriority.text = "";
      const optionLowPriority = document.createElement("option");
      optionLowPriority.setAttribute("value", "low");
      optionLowPriority.text = "low";
      const optionMediumPriority = document.createElement("option");
      optionMediumPriority.setAttribute("value", "medium");
      optionMediumPriority.text = "medium";
      const optionHighPriority = document.createElement("option");
      optionHighPriority.text = "high";
      priorityTodo.textContent = `${todo._priority}`;
      if (priorityTodo.textContent === "low") {
        optionLowPriority.setAttribute("selected", "default");
      } else if (priorityTodo.textContent === "medium") {
        optionMediumPriority.setAttribute("selected", "default");
      } else if (priorityTodo.textContent === "high") {
        optionHighPriority.setAttribute("selected", "default");
      } else {
        optionEmptyPriority.setAttribute("selected", "default");
      }
      // create paragraph to dueDate for todo
      const dateTodo = document.createElement("p");
      dateTodo.classList.add("todo-date-content");
      dateTodo.textContent = `${todo._dueDate}`;
      if (`${todo.dueDate}` === "") {
        dateTodo.textContent = format(new Date(), "dd-MM-yyyy");
      }
      // create calendarSVG icon
      const todoDateSpan = document.createElement("span");
      todoDateSpan.classList.add("todo-date-span");
      todoDateSpan.setAttribute("todos-id", todo.id);
      const calendarIcon = new Image();
      calendarIcon.src = calendarSvg;
      calendarIcon.classList.add("svg-icons", "todo-calendar-svg-icon");
      const todoDateInput = document.createElement("input");
      todoDateInput.setAttribute("type", "date");
      todoDateInput.classList.add("todo-date-input");
      todoDateInput.addEventListener("change", () => {
        dateTodo.textContent = `${todoDateInput.value}`;
      });
      // create trashcanSVG icon
      const trashcanIcon = new Image();
      trashcanIcon.src = trashcanSvg;
      trashcanIcon.classList.add("svg-icons-todos", "todo-trashcan-svg-icon");
      trashcanIcon.setAttribute("id", "trashcan-icon-todos");
      // append radio button
      todoDiv.appendChild(checkCompleteTodo);
      // append paragraph with title
      todoDiv.appendChild(titleTodo);
      todoDiv.appendChild(descriptionTodo);
      // append paragraph with priority's
      priorityTodo.appendChild(optionEmptyPriority);
      priorityTodo.appendChild(optionLowPriority);
      priorityTodo.appendChild(optionMediumPriority);
      priorityTodo.appendChild(optionHighPriority);
      todoDiv.appendChild(priorityTodo);
      // append paragraph with date
      todoDiv.appendChild(dateTodo);
      todoDateSpan.appendChild(calendarIcon);
      todoDateSpan.appendChild(todoDateInput);
      todoDiv.appendChild(todoDateSpan);
      // append calendar icon
      // todoDiv.appendChild(calendarIcon);
      // append trashcan icon
      todoDiv.appendChild(trashcanIcon);
      todoContainer.appendChild(todoDiv);
    });
  },
};

function renderTodosButton() {
  // create the container that will append the other DOM elements
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos-add-btn");
  const todoParagraph = document.createElement("paragraph");
  todoParagraph.textContent = "+ new task";
  todoParagraph.style.display = "flex";
  todoParagraph.classList.add("todo-paragraph");
  // create radio button to set the todo's as complete
  const labelCompleteTodo = document.createElement("label");
  labelCompleteTodo.setAttribute("for", "complete-todo");
  const checkCompleteTodo = document.createElement("input");
  checkCompleteTodo.setAttribute("type", "checkbox");
  checkCompleteTodo.setAttribute("name", "complete-todo");
  checkCompleteTodo.setAttribute("value", "true");
  checkCompleteTodo.style.display = "none";
  checkCompleteTodo.classList.add("complete-todo-checkbox");
  // create paragraph to set a title for the todo
  const labelInputTodo = document.createElement("label");
  labelInputTodo.setAttribute("for", "todo-title");
  const inputText = document.createElement("input");
  inputText.classList.add("input-text-todo");
  inputText.setAttribute("name", "todo-title");
  inputText.setAttribute("placeholder", "todo name");
  inputText.style.display = "none";
  const labelDescriptionTodo = document.createElement("label");
  labelDescriptionTodo.setAttribute("for", "description-todo");
  const inputDescription = document.createElement("input");
  inputDescription.classList.add("input-description-todo");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "description-todo");
  inputDescription.setAttribute("placeholder", "todo description");
  inputDescription.style.display = "none";
  // create select element to set a priority's for todo
  const labelPriorityTodo = document.createElement("label");
  labelPriorityTodo.setAttribute("for", "priority-todo");
  const priorityTodo = document.createElement("select");
  priorityTodo.classList.add("todo-content-priority");
  priorityTodo.setAttribute("name", "priority-todo");
  const optionEmptyPriority = document.createElement("option");
  optionEmptyPriority.setAttribute("value", "");
  optionEmptyPriority.text = "";
  const optionLowPriority = document.createElement("option");
  optionLowPriority.setAttribute("value", "low");
  optionLowPriority.setAttribute("selected", "default");
  optionLowPriority.text = "low";
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.setAttribute("value", "medium");
  optionMediumPriority.text = "medium";
  const optionHighPriority = document.createElement("option");
  optionHighPriority.setAttribute("value", "high");
  optionHighPriority.text = "high";
  priorityTodo.style.display = "none";
  // create paragraph to dueDate for todo
  const dateTodo = document.createElement("p");
  dateTodo.textContent = format(new Date(), "dd-MM-yyyy");
  dateTodo.classList.add("todo-content-date");
  dateTodo.style.display = "none";
  // create calendarSVG icon
  const todoDateSpan = document.createElement("span");
  todoDateSpan.classList.add("todo-date-span");
  const calendarIcon = new Image();
  calendarIcon.src = calendarSvg;
  calendarIcon.classList.add("svg-icons", "todo-calendar-svg-icon");
  calendarIcon.style.display = "none";
  const labelTodoDateInput = document.createElement("label");
  labelTodoDateInput.setAttribute("for", "todo-date");
  const todoDateInput = document.createElement("input");
  todoDateInput.setAttribute("type", "date");
  todoDateInput.classList.add("todo-date-input");
  todoDateInput.setAttribute("name", "todo-date");
  todoDateInput.addEventListener("change", () => {
    dateTodo.textContent = `${todoDateInput.value}`;
  });
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("submit-btn-todo");
  submitBtn.textContent = "Submit";
  submitBtn.style.display = "none";
  todoDateSpan.appendChild(calendarIcon);
  todoDateSpan.appendChild(labelTodoDateInput);
  todoDateSpan.appendChild(todoDateInput);
  todoDiv.appendChild(todoParagraph);
  todoDiv.appendChild(labelCompleteTodo);
  todoDiv.appendChild(checkCompleteTodo);
  // append paragraph with title
  todoDiv.appendChild(labelInputTodo);
  todoDiv.appendChild(inputText);
  todoDiv.appendChild(labelDescriptionTodo);
  todoDiv.appendChild(inputDescription);
  // append select with priority's
  todoDiv.appendChild(labelPriorityTodo);
  priorityTodo.appendChild(optionEmptyPriority);
  priorityTodo.appendChild(optionLowPriority);
  priorityTodo.appendChild(optionMediumPriority);
  priorityTodo.appendChild(optionHighPriority);
  todoDiv.appendChild(priorityTodo);
  // append paragraph with date
  todoDiv.appendChild(dateTodo);
  // append calendar icon
  // todoDiv.appendChild(labelTodoDateInput);
  todoDiv.appendChild(todoDateSpan);
  // todoDiv.appendChild(calendarIcon);
  // append trashcan icon
  todoDiv.appendChild(submitBtn);
  todoContainer.appendChild(todoDiv);
}

export { viewTodos, renderTodosButton };
