import { CreateTodo } from "./createTodo";

// passing crypto random UUID as variable
const randomUUID = function b(a) {
  return a
    ? // eslint-disable-next-line no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

class CreateProject {
  todos = [];

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

  addTodo(title, description, dueDate, priority, complete, id = randomUUID()) {
    const newToDo = new CreateTodo(
      title,
      description,
      dueDate,
      priority,
      complete,
      id
    );
    this.todos.push(newToDo);
  }

  findToDoById(todoId) {
    return this.todos.find((todo) => todo.id === todoId);
  }

  findTodos(findFunctionTodos) {
    return this.todos.find(findFunctionTodos);
  }

  findAllTodos(filterFunctionTodos = () => true) {
    return this.todos.filter(filterFunctionTodos);
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
