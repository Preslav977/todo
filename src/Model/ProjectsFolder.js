/* eslint-disable class-methods-use-this */

const projectsFolderArray = [[]];

class ProjectsFolder {
  // using title to know the projectsFolder
  // and using crypto here for managing the
  // ids of the projectsFolder

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

  // method for creating the projectsFolder class
  createProjects() {}

  // method for reading the projectsFolder class
  readProjects(index) {
    // show in the console, projectFolder
    // what project has in the array ?
    console.log(projectsFolderArray[index]);
  }

  // method for updating the projectsFolder class
  updateProjects(projectName) {
    // add in the array new project ?
    projectsFolderArray.push(projectName);
  }

  // method for deleting the projectsFolder class
  deleteProjects(index) {
    // delete from project name, the following
    // project ?
    projectsFolderArray.splice(index, 1);
  }
}

export default ProjectsFolder;
export { projectsFolderArray };
