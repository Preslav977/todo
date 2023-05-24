import trashcanSvg from "../svg-icons/trash-can-outline.svg";

const projectsContainer = document.getElementById("project-container");

// parameter to create all these projects ?
function createProjectsDOM(elementText) {
  const project = document.createElement("div");
  project.textContent = elementText;
  project.classList.add("projects");
  const trashcanIcon = new Image();
  trashcanIcon.src = trashcanSvg;
  trashcanIcon.classList.add("svg-icons");
  project.appendChild(trashcanIcon);
  projectsContainer.appendChild(project);
}

function addNewProject() {
  const newProjectBtn = document.createElement("div");
  newProjectBtn.textContent = "+ new project";
  newProjectBtn.classList.add("projects");
  projectsContainer.appendChild(newProjectBtn);
}

function addProject() {
  const project = document.createElement("div");
  const inputText = document.createElement("input");
  const submitBtn = document.createElement("button");
  project.classList.add("projects");
  inputText.setAttribute("type", "submit");
  inputText.setAttribute("type", "text");
  inputText.classList.add("input-text-project");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit-btn-project");
  project.appendChild(inputText);
  project.appendChild(submitBtn);
  projectsContainer.appendChild(project);
}

export { createProjectsDOM, addNewProject, addProject };
