import trashcanSvg from "../svg-icons/trash-can-outline.svg";

const projectsContainer = document.getElementById("project-container");
const addProjectBtn = document.getElementById("add-projects-btn");

// parameter to pass project object title here
const viewProjects = {
  renderProjects(projects) {
    const project = document.createElement("div");
    for (const projectObj of projects) {
      project.textContent = `${projectObj.title}`;
    }
    project.classList.add("projects");
    const trashcanIcon = new Image();
    trashcanIcon.src = trashcanSvg;
    trashcanIcon.classList.add("svg-icons");
    project.appendChild(trashcanIcon);
    projectsContainer.appendChild(project);
  },
};

function addProject() {
  // hide the first button and show this
  // function which users can enter the project name
  // and submit it
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

export { viewProjects, addProject, addProjectBtn };
