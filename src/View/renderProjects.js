import trashcanSvg from "../svg-icons/trashcan-white.svg";

const projectsContainer = document.getElementById("project-container");

const viewProject = {
  renderProjects(projects) {
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.setAttribute("projects-id", project.id);
      projectDiv.textContent = `${project.title}`;
      projectDiv.classList.add("projects-content");
      const trashcanIcon = new Image();
      trashcanIcon.src = trashcanSvg;
      trashcanIcon.classList.add("svg-icons");
      projectDiv.appendChild(trashcanIcon);
      projectsContainer.appendChild(projectDiv);
    });
  },
};

function renderProjectsButton() {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("project-add-btn");
  const projectParagraph = document.createElement("p");
  projectParagraph.textContent = "+ new project";
  projectParagraph.classList.add("project-paragraph");
  projectParagraph.style.display = "flex";
  const labelInputText = document.createElement("label");
  labelInputText.setAttribute("for", "project-title");
  const inputText = document.createElement("input");
  inputText.setAttribute("name", "project-title");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("placeholder", "project name");
  inputText.classList.add("input-text-project");
  inputText.style.display = "none";
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit-button-project");
  submitBtn.style.display = "none";
  projectsDiv.appendChild(projectParagraph);
  projectsDiv.appendChild(labelInputText);
  projectsDiv.appendChild(inputText);
  projectsDiv.appendChild(submitBtn);
  projectsContainer.appendChild(projectsDiv);
}

export { viewProject, renderProjectsButton, projectsContainer };
