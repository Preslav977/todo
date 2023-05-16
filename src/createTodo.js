// Webpack Configuration
// style, css loader, fonts, icons, not sure if there is going be need something else ?

/// ////////////////////////////////////////////////////////////////////////////////////

// TODO planning phase

// Designing the MVC pattern for ToDo structure

// Model, is responsible for creating todo's and deleting todo's.

// Controller is responsible for completing todo's,
// changing priority's from low to medium to high, and managing
// where they can be saved either in projects or task.

// View is responsible for showing a todo,
// when is created either for projects or tasks, removing from DOM, clicking
// on edit to show a modal, which will show what todo has.

// IMPORTANT TO REMEMBER IS FIRST MAKE SURE
// IT'S WORKING IN THE CONSOLE THEN DO THE DOM STUFF, MAKE SURE TO READ THE

// BUILDING A HOUSE INSIDE OUT BEFORE STARTING !!!

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the first phase.

// 1. First step is deciding, what to use for the project,
// either IIFE and factory functions or classes and constructors,
// for TicTacToe i did with IIFE and FF, now it's going to be constructor and classes.

// 1.1. To access something from the class,
// first it needs to be created an object and using dot notation to access other classes
// extend keyword which will inherit all the constructors,
// methods, fields, properties and so on.

// 1.2 Before starting these objects are going to be saved somewhere,
// probably in an array, one dimensional or two dimensional,
// one dimensional can be accessed like - array[0], the two dimensional - array[0][0] ?

// projectsArray, for the projects, taskArray for the tasks

// File structure of the Todo, not done..
/// ////////////////////////////////////////////////////////////////////////////////////

// Things needs to be done in the first step, decide what to use,
// then create file structure that the project will follow
// - createTodo, module for creating and deleting the todo's
// - controllerTodo, module to control all the things that he can change,
// completing todo, changing priority's and etc.
// - interfaceTodo, module that will handle only DOM logic.

// Not sure what should be exported or imported in main.js, too early for that !!!
/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the second phase.

// 2. Minimum features todo's, is going to have are title,
// description, dueDate, priority, notes or checklist, id.

// Unique ID, using loop, custom function or cryptoUUID, hmm ?

// Not sure when the dueDate have to be implemented,
// but judging from the step, that it was introduced, this is going to be
// handled probably in DOM.

// 2.1. For creating todo, this will be in separate module
// that only handles creation and deletion for example,
// class createTodo, with constructor that has all these features,
// then they will be initialized inside the constructor.

// 2.2. Also from preventing accessing directly the parameters of the constructor,
// will have to be implemented some getters and setters.

// Getters will retrieve the title, description, dueDate, priority, notes or checklist,
// since this is going to be done first in the
// console it will show what each todo have, for example:

// get title () { return title }

// 2.3 Setters will be able to write on the these parameters,
// for example since all of these parameters are going to be changed,
// it's going to be needed a setter, that will write on these parameters, for example:

// set title (value) = this.title = value

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the third phase.

// 3. There is going to have some separation of the projects,
// for example save the projects in one place, save the tasks in other
// projectsArray for the projects and taskArray for the tasks.

// That should help dividing the todo's,
// otherwise it would be saved in one array, hmm but how would then know if i have todo
// with two names to know what to delete ?

// If i follow the separation of the arrays that way,
// i could know what array what task/project has, it maybe easier to delete later
// one potential problem, that i have to loop the two array and
// if i found where is the array located to delete it, hmm

// One nice idea, is to use one two dimensional array,
// save each project there and each todo hmmm
// then maybe to delete something i have to access the array[0][0]

// The arrays will be used only for the console version,
// until later there will be saved in localStorage ?

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the fourth phase.

// 4. Separating the logic is a must, that should be easier to read,
// easier to follow the structure of the projects and so on.

// 4.1. createTodo class for create todo,
// maybe in the same class is going to delete a todo, hmm

// 4.2. controllerTodo class for managing todo, to know where are going to be saved,
// for completing todo, class that changes priority.

// The controllerTodo should have the information of the previous class,
// so he can manipulate the objects of the class probably is going

// to extend the create todo's class.

// Not sure how to, decide which project is completed,
// first in the console but maybe using boolean function (variable), that way
// maybe later in DOM,
// i could check if something it's true to say the project/task is completed.

// Changing priority's, can be done with condition if priority's is equal to low,
// create objects wit low priority's and etc
// with the constructor

// The interfaceTodo DOM manipulation class will probably,
// is going need access to the previous class that controls the todo's that way,

// he could show where the projects are saved,
// looping the array, hmm, to delete from DOM can be done with two ways either

// custom HTML attribute or using dataset,
// that way is guaranteed that the todo's are deleted from the array and DOM also !

// 4.3. InterfaceTodo class, that is going to show what happens on the screen,
// where the projects are going to be shown in project or tasks,
// modal for creating the todo, modal for editing the todo, switching tabs logic,
// deleting a todo from DOM, changing priority from
// DOM, changing a todo when is complete.

// The modals can be closed with a click outside them or a button hat closes them,
// maybe use an eventListener to know if an submit button is
// clicked to create an todo otherwise don't

// Switching tabs logic if some DOM elements
// are created with Javascript that shouldn't be a problem

// Changing priority's can be done with condition depending on what is selected,
// then using different class give the elements different colors ?

// 4.4. To recite again the interface should, show all the projects
// view all todo in each project (title, dueDate, changing the priority's colors),
// expanding todo to see the details, delete todo.

// One more crucial thing, how to get data from the form using the variable,
// that get's the value or using FormData ????

// And depending on that create an object and show it with DOM, hmm.

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the five phase.

// 5. Visual inspiration, here for example is the design,
// HTML hardcoded header, footer, some kind of a menu, with js creating the
// modals and maybe more.

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the six phase.

// 6. Adding external library with Webpack
// to handle the formation on the dates and manipulating.

// That way when the projects/task are created,
// the user can choose when it's the dataDue ?

/// ////////////////////////////////////////////////////////////////////////////////////

// Planning steps for the seven phase.

// 7. localStorage to handle all the saving of the todo's.

// 7.1. Function that saves the projects,
// and todo's to localStorage and every time a new projects is created ?

// 7.2 Function that looks for data in localStorage when the project is loaded ?

// 7.3. Important condition,
/// to know if there is not any data in localStorage don't do anything !!!

// 7.4. Since all the data will be stored in JSON,
// there is going to have to be some conversion of the data ?

// Important you cannot store function or JSON,
// figure out how to add methods back to the objects properties they are fetched ?

/// ////////////////////////////////////////////////////////////////////////////////////
