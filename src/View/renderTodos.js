import calendarSvg from "../svg-icons/calendar-white.svg";
import trashcanSvg from "../svg-icons/trashcan-white.svg";

const todoContainer = document.getElementById("todo-container");

// pass here todo, title, description, dueDate, priority, complete
const viewTodos = {
  renderTodos(todosArray) {
    // eslint-disable-next-line no-restricted-syntax
    for (const todo of todosArray) {
      // create the container that will append the other DOM element
      const todoDiv = document.createElement("div");
      todoDiv.setAttribute("todos-id", todo.id);
      todoDiv.classList.add("todos-content");
      // create radio button to set the todo's as complete
      const checkCompleteTodo = document.createElement("input");
      checkCompleteTodo.setAttribute("type", "radio");
      // create paragraph to set a title for the todo
      const titleTodo = document.createElement("p");
      titleTodo.textContent = `${todo.title}`;
      titleTodo.classList.add("todo-content", "todo-text-content");
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
      dateTodo.textContent = "25/05/23";
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
      todoDiv.appendChild(checkCompleteTodo);
      // append paragraph with title
      todoDiv.appendChild(titleTodo);
      // append paragraph with priority's
      priorityTodo.appendChild(optionEmptyPriority);
      priorityTodo.appendChild(optionLowPriority);
      priorityTodo.appendChild(optionMediumPriority);
      priorityTodo.appendChild(optionHighPriority);
      todoDiv.appendChild(priorityTodo);
      // append paragraph with date
      todoDiv.appendChild(dateTodo);
      // append calendar icon
      todoDiv.appendChild(calendarIcon);
      // append trashcan icon
      todoDiv.appendChild(trashcanIcon);
      todoContainer.appendChild(todoDiv);
    }
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
  const checkCompleteTodo = document.createElement("input");
  checkCompleteTodo.setAttribute("type", "radio");
  checkCompleteTodo.style.display = "none";
  checkCompleteTodo.classList.add("complete-todo-radio");
  // create paragraph to set a title for the todo
  const inputText = document.createElement("input");
  inputText.classList.add("input-text-todo");
  inputText.style.display = "none";
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
  priorityTodo.style.display = "none";
  // create paragraph to dueDate for todo
  const dateTodo = document.createElement("p");
  dateTodo.textContent = "24/05/23";
  dateTodo.classList.add("todo-content-date");
  dateTodo.style.display = "none";
  // create calendarSVG icon
  const calendarIcon = new Image();
  calendarIcon.src = calendarSvg;
  calendarIcon.classList.add("svg-icons", "todo-content-svg-icons");
  calendarIcon.style.display = "none";
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("submit-btn-todo");
  submitBtn.textContent = "Submit";
  submitBtn.style.display = "none";
  todoDiv.appendChild(todoParagraph);
  todoDiv.appendChild(checkCompleteTodo);
  // append paragraph with title
  todoDiv.appendChild(inputText);
  // append select with priority's
  priorityTodo.appendChild(optionEmptyPriority);
  priorityTodo.appendChild(optionLowPriority);
  priorityTodo.appendChild(optionMediumPriority);
  priorityTodo.appendChild(optionHighPriority);
  todoDiv.appendChild(priorityTodo);
  // append paragraph with date
  todoDiv.appendChild(dateTodo);
  // append calendar icon
  todoDiv.appendChild(calendarIcon);
  // append trashcan icon
  todoDiv.appendChild(submitBtn);
  todoContainer.appendChild(todoDiv);
}

export { viewTodos, renderTodosButton, todoContainer };
