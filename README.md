# template-repository

# readme-repository

## 1. Final result of the project Todo

![Screenshot from 2023-07-07 10-24-48](https://github.com/Preslav977/todo/assets/119291608/ac712ab7-f2b6-4b07-8caa-79e7a5a7cb9b)

- About this project

The project idea, was to create a todo which the user can create project with a title, and task, which can choose if the task is complete or not, title, description, different priority's, and date.

## 2. Objective

The first objective of the project, was to create a console versison, with three classes, the first class was for the tasks, with different properties, these properties will be changed later with DOM also.

The second class, was for the projects, which with different methods, create, read, update, delete, this class has task responsibility, which can create a task on it's own.

The third class was folder, which can wrap the projects, this class also has CRUD methods, and can create projects on it's own.

After these classes are created, the console version of the project is created using MVC pattern, to ensure if the console version works, after that is the interface.

The MVC pattern in this project, will have Model with these classes that can create project folder, projects and a tasks.

Controller will handle Model with View, for example if there is an Default project, in the array will render on the screen with DOM the project.

View will cover the interface of the project, so the use can see all the projects and the tasks shown on the screen.

The interface of this project, has different views of the project, how it will looked like after is finished, on the left side of the screen are the projects, and a button.

On the right side of screen, are the todos button and the tasks that are created, also will have a header and a footer.

The interface will handle also deletion of these projects and tasks removed from the screen.

## 3. My personal objectives

My personal objectives to learn more with classes syntax, getter and setter, to improve coding using MVC pattern.

With this pattern to divide the code in different ways, and to working each of these things, to make them work before moving on others.

One of my objectives were to write a understandable, readable code which others can see and read without thinking what this does and etc.

The other objective in the project was to learn, keeping moving forward and if i stumble on a project think of solution that solves the problem.

Instead of using some trick and to go around a problem, that may come back later.

Also to get more knowledgeable using the webpack.

## 4. Notes and lessons learned

The first lesson learned are classes syntax, to get more comfortable.

Understanding better code separation for future projects, that include complete working version of the project like doing MVC pattern before working on the DOM part of the project.

Learned about importing new library, that can format the date, which allowed me to format it into day-month-year.

Also learned about using localStorage, this saves the projects and tasks each time after they are created, that they will still persist on the browser instead of being wiped out after each refresh, localStorage, can save only the arrays and objects which are in JSON because they are strings, numbers and etc.

Using JSON helped to convert these objects to be strings, that way the data will be stored on the browser, to access the data from localStorage.

It needs to be converted back to objects, which then needed to created new instance of these objects to get back the methods, since these methods are lost when they were converted to JSON.

Learned also how to change the objects properties, for example if the object was set to complete, using a setter to change the property to true also to show these changes on the screen.

Getter and setter are methods, that doesn't allow to modify these properties directly, this is why using them is so important.

Getter allows to be read these properties and setter to be write on these properties.

The most important thing, i learned after the elements losing also the eventListeners due to the fact, they are removed like the case using project-tab switch from the Restaurant page, in this case i learned about event delegation, which can add back these eventListeners, for example if the click is removed after tab-switch, using document they are added back.

Which saved time for refactoring code, because the way the logic was implemented, to not be inside of the rendering function, but outside of these functions.

## 5. Things to improve when visiting the project

The first things, i would improve is the naming convection of the variables and some methods names, because some of them can be very misleading.

The second thing, i would reduce the code that the elements for the projects and tasks are created, to be more clean and readable.

And to select in different way the projects/tasks instead of selecting all of them on screen.

In the future i will put these eventListeners in the functions that renders them to save time, and to fix this problem now with the eventListeners instead of later.

I would also add couple of features in the future:

- changing project name and task name
- showing how long the time task, has before the tasks is due
- filter the completed tasks, to show them below the not completed ones
- moving the task from one project to another
- adding a modal that allow to change the tasks name, description, priority, date and etc.
