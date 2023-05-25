import CreateProject from "./createProject";

class ProjectsFolder {
  projects = [];

  constructor(title, id) {
    this.title = title;
    this.id = crypto.randomUUID();
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

  addProjects(projectName) {
    const newProject = new CreateProject(projectName);
    this.projects.push(newProject);
  }

  findProject(projectName) {
    const findProject = this.projects.find(
      (project) => project.title === projectName
    );
    return findProject;
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
