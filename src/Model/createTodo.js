// This class is responsible for the todo/task and
// nothing more than that.

class CreateTodo {
  constructor(title, description, dueDate, priority, complete, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // using crypto random UUID for creating the objects,
    // this is done early in objects creation for
    // easy deletion later from the array and DOM
    this.complete = complete;
    this.id = crypto.randomUUID();
  }

  // read this property
  get title() {
    return this._title;
  }

  // write on this property
  set title(value) {
    if (value.length < 5) {
      console.log(
        "The title of this todo, is too short, 5 characters at least"
      );
      return;
    }
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value.length < 10) {
      console.log(
        "The description of this todo is too short, 10 characters at least"
      );
      return;
    }
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get complete() {
    return this._complete;
  }

  set complete(value) {
    this._complete = value;
  }

  get id() {
    return this.id;
  }

  set id(value) {
    this._id = value;
  }
}

export { CreateTodo };
