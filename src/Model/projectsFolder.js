import CreateProject from "./createProject";

const randomUUID = function b(a) {
  return a
    ? // eslint-disable-next-line no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

class ProjectsFolder {
  projects = [];

  constructor(title, id = randomUUID()) {
    this.title = title;
    this.id = id;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length < 5) {
      console.log("Project name is too short, 5 characters at least");
    }
    this._title = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  addProjects(projectName, id = randomUUID()) {
    const newProject = new CreateProject(projectName, id);
    this.projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  findProjectById(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }

  findProjects(findFunctionProjects) {
    return this.projects.find(findFunctionProjects);
  }

  findAllProjects(filterFunctionProjects = () => true) {
    return this.projects.filter(filterFunctionProjects);
  }

  editProject(oldProjectTitle, newProjectTitle) {
    const findProject = this.projects.find(
      (project) => project.title === oldProjectTitle
    );

    if (findProject.title !== "") {
      findProject.title = newProjectTitle;
    }

    return findProject;
  }

  deleteProjects(index) {
    this.projects.splice(index, 1);
  }
}

export default ProjectsFolder;
