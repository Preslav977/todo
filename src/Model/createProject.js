/* eslint-disable class-methods-use-this */
const toDoItemArray = [[]];

class CreateProjectToDo {
  // title to know what is project name
  // id is for deleting the project
  // using crypto to generate random UUID
  // instead of generating manually from 0 to ...
  constructor(title) {
    this.title = title;
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

  // method create project class
  createProject() {}

  // method read project class
  readToDoItem(index) {
    // show in the console, project with name,
    // "Inbox", what his toDoItem arrays has ?
    console.log(toDoItemArray[index]);
  }

  // method update project class
  updateToDoItem(todoItem) {
    // update the project with name "Inbox",
    // push new toDoItem ?
    toDoItemArray.push(todoItem);
  }

  // method delete project class
  deleteToDoItem(index) {
    // delete from the array with name "Inbox",
    // the toDoItem with following index ?
    toDoItemArray.splice(index, 1);
  }
}

export default CreateProjectToDo;
export { toDoItemArray };
