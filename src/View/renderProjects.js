import trashcanSvg from "../svg-icons/trashcan-white.svg";

const projectsContainer = document.getElementById("project-container");

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

function renderProjectsButton() {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("project-add-btn");
  const projectParagraph = document.createElement("p");
  projectParagraph.textContent = "+ new project";
  projectParagraph.classList.add("project-paragraph");
  projectParagraph.style.display = "flex";
  const inputText = document.createElement("input");
  inputText.setAttribute("type", "submit");
  inputText.setAttribute("type", "text");
  inputText.classList.add("input-text-project");
  inputText.style.display = "none";
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit-button-project");
  submitBtn.style.display = "none";
  projectsDiv.appendChild(projectParagraph);
  projectsDiv.appendChild(inputText);
  projectsDiv.appendChild(submitBtn);
  projectsContainer.appendChild(projectsDiv);
}

export { viewProjects, renderProjectsButton };
