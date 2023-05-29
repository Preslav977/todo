import trashcanSvg from "../svg-icons/trash-can-outline.svg";

const projectsContainer = document.getElementById("project-container");
const addProjectBtn = document.getElementById("add-projects-btn");

// parameter to pass project object title here
const viewProjects = {
  renderProjects(projects) {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("projects-id", projects.id);
    projectDiv.textContent = `${projects.title}`;
    projectDiv.classList.add("projects-content");
    const trashcanIcon = new Image();
    trashcanIcon.src = trashcanSvg;
    trashcanIcon.classList.add("svg-icons");
    projectDiv.appendChild(trashcanIcon);
    projectsContainer.appendChild(projectDiv);
  },
};

function renderAddNewProject() {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  projectsDiv.textContent = "+ new project";
  projectsContainer.appendChild(projectsDiv);
}

// hide the first button and show this
// function which users can enter the project name
// and submit it
function renderProjectSubmitBtn() {
  const newProject = document.createElement("div");
  const inputText = document.createElement("input");
  const submitBtn = document.createElement("button");
  newProject.classList.add("projects");
  inputText.setAttribute("type", "submit");
  inputText.setAttribute("type", "text");
  inputText.classList.add("input-text-project");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit-btn-project");
  newProject.appendChild(inputText);
  newProject.appendChild(submitBtn);
  projectsContainer.appendChild(newProject);
}

export {
  viewProjects,
  addProjectBtn,
  renderAddNewProject,
  renderProjectSubmitBtn,
};
