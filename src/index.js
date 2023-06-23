import "./style.css";

import ProjectsFolder from "./Model/projectsFolder";
import { renderProjectsButton, viewProject } from "./View/renderProjects";
import { renderTodosButton, viewTodos } from "./View/renderTodos";

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
projectsFolder.addProjects("Default");
viewProject.renderProjects(projectsFolder.projects);

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
  foundProject.addTodo(
    `${getTodoTitle}`,
    `${getTodoDescription}`,
    new Date(),
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

function deleteProject() {
  const projectTrashCan = document.querySelectorAll(".svg-icons-projects");
  projectTrashCan.forEach((projectsTrashCans) => {
    projectsTrashCans.addEventListener("click", (e) => {
      e.stopPropagation();
      const removeProjectBtn = e.target;
      const removeProjectContainer = removeProjectBtn.parentNode;
      const projectContainerId =
        removeProjectContainer.getAttribute("projects-id");
      const findProjectId = projectsFolder.projects.findIndex(
        (project) => project.id === projectContainerId
      );
      console.log(findProjectId);
      projectsFolder.projects.splice(findProjectId, 1);
      console.log(projectsFolder.projects.splice(findProjectId, 1));
      const removeProject = removeProjectContainer.remove();
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
  deleteProject();
  projectTabSwitching();
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
      foundProject.todos.splice(findTodoId, 1);
      const removeTodo = removeTodoContainer.remove();
    });
  });
}

let completedTodoBtn;
let findTodoId;

function findCompletedOrNotTodos(e) {
  completedTodoBtn = e.target;
  const completedTodoBtnContainer = completedTodoBtn.parentNode;
  const completedTodoContainerId =
    completedTodoBtnContainer.getAttribute("todos-id");
  findTodoId = foundProject.findTodoById(completedTodoContainerId);
  if (findTodoId) {
    return findTodoId;
  }
}

function changeTodoCompleteProperty() {
  if (completedTodoBtn.textContent === "undefined") {
    findTodoId.changeCompleteProperty();
    completedTodoBtn.setAttribute("checked", "");
    console.log(findTodoId);
  } else {
    findTodoId.changeCompleteProperty();
    completedTodoBtn.removeAttribute("checked");
    console.log(findTodoId);
  }
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
  const optionEmptyPriority = document.getElementById("empty-priority");
  const optionLowPriority = document.getElementById("low-priority");
  const optionMediumPriority = document.getElementById("medium-priority");
  const optionHighPriority = document.getElementById("high-priority");
  if (priorityOption.value === "low") {
    optionLowPriority.setAttribute("selected", "default");
    findTodoId.changePriorityProperty([0]);
  } else if (priorityOption.value === "medium") {
    optionMediumPriority.setAttribute("selected", "default");
    findTodoId.changePriorityProperty([1]);
  } else if (priorityOption.value === "high") {
    optionHighPriority.setAttribute("selected", "default");
    findTodoId.changePriorityProperty([2]);
  } else {
    optionEmptyPriority.setAttribute("selected", "default");
    findTodoId.changePriorityProperty([3]);
  }
  console.log(findTodoId);
}

userTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoToSelectedProject(e);

  const completedTodoCheckbox = document.querySelectorAll(
    "#completed-todo-checkbox"
  );
  completedTodoCheckbox.forEach((todoCheckbox) => {
    todoCheckbox.addEventListener("click", (e) => {
      findCompletedOrNotTodos(e);
      changeTodoCompleteProperty();
    });
  });

  const priorityTodoDropdown = document.querySelectorAll(
    "#priority-todo-dropdown"
  );
  priorityTodoDropdown.forEach((todoPriority) => {
    todoPriority.addEventListener("change", (e) => {
      findPriorityTodos(e);
      changeTodoPriorityProperty();
    });
  });
  deleteProject();
  deleteTodo();
  userTodoForm.reset();
});
