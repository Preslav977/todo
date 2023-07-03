import "./style.css";

import { format, parseISO } from "date-fns";
import ProjectsFolder from "./Model/projectsFolder";
import { renderProjectsButton, viewProject } from "./View/renderProjects";
import { renderTodosButton, viewTodos } from "./View/renderTodos";

// render between the adding new project and submitting an project
renderProjectsButton();
const projectParagraph = document.querySelector(".project-paragraph");
const projectInput = document.querySelector(".input-text-project");
const projectSubmitBtn = document.querySelector(".submit-button-project");
const userProjectForm = document.getElementById("project-form");

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

const projectsFolder = new ProjectsFolder("Folder");
// projectsFolder.addProjects("Default");
// viewProject.renderProjects(projectsFolder.projects);

function retrieveDataFromLocalStorage() {
  if (localStorage.length !== 0) {
    console.log(localStorage.getItem("projects"));
    console.log(JSON.parse(localStorage.getItem("projects")));
    return JSON.parse(localStorage.getItem("projects"));
  }
}

retrieveDataFromLocalStorage();

function createProject(e) {
  const projectFormData = new FormData(e.target);
  const projectObject = Object.fromEntries(projectFormData);
  const getProjectTitle = projectObject["project-title"];
  projectsFolder.addProjects(`${getProjectTitle}`);
  console.log(projectsFolder.projects);
}

function removeDuplicatedProject() {
  const deleteDuplicatedProjects = document
    .querySelectorAll(".projects-content")
    .forEach((project) => project.remove());
}

let foundProject;

function findAndSelectProject() {
  const selectAllProjects = document.querySelectorAll(".projects-content");
  selectAllProjects.forEach((project) => {
    project.addEventListener("click", (e) => {
      const clickOnProject = e.target;
      const getClickedProjectId = clickOnProject.getAttribute("projects-id");
      foundProject = projectsFolder.findProjectById(getClickedProjectId);
      if (foundProject) {
        return foundProject;
      }
    });
  });
}

function addTodoToSelectedProject(e) {
  const todoForm = new FormData(e.target);
  const todoObject = Object.fromEntries(todoForm);
  const getCompleteTodo = todoObject["complete-todo"];
  const getTodoTitle = todoObject["todo-title"];
  const getTodoDescription = todoObject["description-todo"];
  const getTodoPriority = todoObject["priority-todo"];
  let getTodoDate = todoObject["todo-date"];
  if (getTodoDate === "") {
    getTodoDate = format(new Date(), "dd-MM-yyyy");
  } else {
    getTodoDate = format(parseISO(getTodoDate), "dd-MM-yyyy");
  }
  foundProject.addTodo(
    `${getTodoTitle}`,
    `${getTodoDescription}`,
    `${getTodoDate}`,
    `${getTodoPriority}`,
    `${getCompleteTodo}`
  );
  console.log(foundProject.todos);
  const findAndDeleteDuplicatedTodos =
    document.querySelectorAll(".todos-content");
  findAndDeleteDuplicatedTodos.forEach((todo) => {
    todo.remove();
  });
  viewTodos.renderTodos(foundProject.todos);
}

let tabSwitchProjectId;

function projectTabSwitching() {
  const selectAllExistingProjects =
    document.querySelectorAll(".projects-content");
  selectAllExistingProjects.forEach((project) => {
    project.addEventListener("click", (e) => {
      const clickedProject = e.target;
      const getClickedProjectId = clickedProject.getAttribute("projects-id");
      tabSwitchProjectId = projectsFolder.findProjectById(getClickedProjectId);
      if (tabSwitchProjectId) {
        const tabSwitchProjectsTodos =
          document.querySelectorAll(".todos-content");
        tabSwitchProjectsTodos.forEach((todo) => {
          todo.remove();
        });
      }
      viewTodos.renderTodos(tabSwitchProjectId.todos);
    });
  });
}

// function deleteProject() {
//   const projectTrashCan = document.querySelectorAll(".svg-icons-projects");
//   projectTrashCan.forEach((projectsTrashCans) => {
//     projectsTrashCans.addEventListener("click", (e) => {
//       e.stopPropagation();
//       const removeProjectBtn = e.target;
//       const removeProjectContainer = removeProjectBtn.parentNode;
//       const projectContainerId =
//         removeProjectContainer.getAttribute("projects-id");
//       const findProjectId = projectsFolder.projects.findIndex(
//         (project) => project.id === projectContainerId
//       );
//       projectsFolder.projects.splice(findProjectId, 1);
//       const removeProject = removeProjectContainer.remove();
//     });
//   });
// }

function deleteProjectWithTodos() {
  const projectTrashCanIcons = document.querySelectorAll(".svg-icons-projects");
  projectTrashCanIcons.forEach((projectsTrashCansIcon) => {
    projectsTrashCansIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      const removeProjectBtn = e.target;
      const removeProjectContainer = removeProjectBtn.parentNode;
      const projectContainerId =
        removeProjectContainer.getAttribute("projects-id");
      const findProjectUsingId = projectsFolder.projects.findIndex(
        (project) => project.id === projectContainerId
      );
      projectsFolder.projects.splice(findProjectUsingId, 1);
      const removeProject = removeProjectContainer.remove();
      foundProject.todos.forEach((removedTodos) => {
        foundProject.todos.splice(removedTodos, 10);
        const removeAllTodos = document.querySelectorAll(".todos-content");
        removeAllTodos.forEach((todo) => {
          todo.remove();
        });
      });
    });
  });
}

findAndSelectProject();

userProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  removeDuplicatedProject();
  createProject(e);
  viewProject.renderProjects(projectsFolder.projects);
  findAndSelectProject();
  // deleteProject();
  projectTabSwitching();
  deleteProjectWithTodos();
  userProjectForm.reset();
});

// render between the adding new todo and submitting the project
renderTodosButton();
// const todoAddButton = document.querySelector(".todos-add-btn");
const todoParagraph = document.querySelector(".todo-paragraph");
const todoInput = document.querySelector(".input-text-todo");
const checkCompleteTodo = document.querySelector(".complete-todo-checkbox");
const todoDescription = document.querySelector(".input-description-todo");
const priorityTodo = document.querySelector(".todo-content-priority");
const dueDate = document.querySelector(".todo-content-date");
const calendarIcon = document.querySelector(".svg-icons");
const submitBtnTodo = document.querySelector(".submit-btn-todo");
const userTodoForm = document.getElementById("todo-form");

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
});

// events to hide certain elements if the user
// clicks away from them
document.addEventListener("click", (e) => {
  const projectAddButton = document.querySelector(".project-add-btn");
  const todoAddButton = document.querySelector(".todos-add-btn");
  if (
    !projectAddButton.contains(e.target) &&
    !todoAddButton.contains(e.target)
  ) {
    projectInput.style.display = "none";
    projectSubmitBtn.style.display = "none";
    projectParagraph.style.display = "flex";
    todoInput.style.display = "none";
    checkCompleteTodo.style.display = "none";
    todoDescription.style.display = "none";
    priorityTodo.style.display = "none";
    dueDate.style.display = "none";
    calendarIcon.style.display = "none";
    submitBtnTodo.style.display = "none";
    todoParagraph.style.display = "flex";
  }
});

function deleteTodo() {
  const todoTrashCan = document.querySelectorAll(".svg-icons-todos");
  todoTrashCan.forEach((todosTrashCans) => {
    todosTrashCans.addEventListener("click", (e) => {
      e.stopPropagation();
      const removeTodoBtn = e.target;
      const removeTodoContainer = removeTodoBtn.parentNode;
      const todoContainerId = removeTodoContainer.getAttribute("todos-id");
      const findTodoId = foundProject.todos.findIndex(
        (todo) => todo.id === todoContainerId
      );
      console.log(findTodoId);
      foundProject.todos.splice(findTodoId, 1);
      const removeTodo = removeTodoContainer.remove();
    });
  });
}

let completeOrNotTodoCheckbox;
let findTodoId;

function findCompletedOrNotTodos(e) {
  completeOrNotTodoCheckbox = e.target;
  const completeOrNotTodoBtnContainer = completeOrNotTodoCheckbox.parentNode;
  const completeOrNotTodoContainerId =
    completeOrNotTodoBtnContainer.getAttribute("todos-id");
  findTodoId = foundProject.findTodoById(completeOrNotTodoContainerId);
  if (findTodoId) {
    return findTodoId;
  }
}

function changeTodoCompleteProperty() {
  if (completeOrNotTodoCheckbox.textContent === "undefined") {
    findTodoId.changeCompleteProperty();
    completeOrNotTodoCheckbox.setAttribute("checked", "");
  } else {
    findTodoId.changeCompleteProperty();
    completeOrNotTodoCheckbox.removeAttribute("checked");
  }
  console.log(findTodoId);
}

let priorityOption;

function findPriorityTodos(e) {
  priorityOption = e.target;
  const priorityContainer = priorityOption.parentNode;
  const priorityOptionId = priorityContainer.getAttribute("todos-id");
  findTodoId = foundProject.findTodoById(priorityOptionId);
  if (findTodoId) {
    return findTodoId;
  }
}

function changeTodoPriorityProperty() {
  if (priorityOption.value === "low") {
    findTodoId.changePriorityProperty([0]);
  } else if (priorityOption.value === "medium") {
    findTodoId.changePriorityProperty([1]);
  } else if (priorityOption.value === "high") {
    findTodoId.changePriorityProperty([2]);
  } else {
    findTodoId.changePriorityProperty([3]);
  }
  console.log(findTodoId);
}

let dueDateTodo;
let getDueDate;

function findDateTodos(e) {
  dueDateTodo = e.target;
  getDueDate = format(parseISO(dueDateTodo.value), "dd-MM-yyyy");
  console.log(getDueDate);
  // getDueDate = dueDateTodo.value;
  const dueDateContainer = dueDateTodo.parentNode;
  const dueDateContainerId = dueDateContainer.getAttribute("todos-id");
  findTodoId = foundProject.findTodoById(dueDateContainerId);
  if (findTodoId) {
    return findTodoId;
  }
}

function changeTodoDueDateProperty() {
  if (deleteTodo.value !== "") {
    findTodoId.changeDateProperty(getDueDate);
    console.log(findTodoId);
  }
}

userTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoToSelectedProject(e);
  deleteTodo();
  userTodoForm.reset();
});

document.addEventListener("click", (e) => {
  if (e.target.className === "complete-todo-checkbox") {
    findCompletedOrNotTodos(e);
    changeTodoCompleteProperty();
  }
});

document.addEventListener("change", (e) => {
  if (e.target.className === "todo-content-priority-menu") {
    findPriorityTodos(e);
    changeTodoPriorityProperty();
  }
});

document.addEventListener("change", (e) => {
  if (e.target.className === "todo-date-input") {
    findDateTodos(e);
    changeTodoDueDateProperty(getDueDate);
  }
});
