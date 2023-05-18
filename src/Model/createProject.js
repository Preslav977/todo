/* eslint-disable no-underscore-dangle */
const projectArray = [];

class CreateProjects {
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
}

// eslint-disable-next-line import/prefer-default-export
export { CreateProjects, projectArray };
