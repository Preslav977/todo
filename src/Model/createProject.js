class CreateProject {
  todos = [];

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

  addToDo(todo) {
    this.todos.push(todo);
  }

  deleteToDo(index) {
    this.todos.splice(index, 1);
  }
}

export default CreateProject;
