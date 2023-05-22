import { CreateTodo } from "./createTodo";

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

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  addToDo(title, description, dueDate, priority, id) {
    const newToDo = new CreateTodo(title, description, dueDate, priority, id);
    this.todos.push(newToDo);
  }

  findToDo(todoTitle) {
    const findTodo = this.todos.find((todo) => todo.title === todoTitle);
    return findTodo;
  }

  editToDo(oldToDoTitle, newToDoTitle) {
    const findTodo = this.todos.find(
      (project) => project.title === oldToDoTitle
    );

    if (findTodo.title !== "") {
      findTodo.title = newToDoTitle;
    }

    return findTodo;
  }

  deleteToDo(index) {
    this.todos.splice(index, 1);
  }
}

export default CreateProject;
