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
    this.projects.push(projectName);
  }

  deleteProjects(index) {
    this.projects.splice(index, 1);
  }
}

export default ProjectsFolder;
