const Task = require('./creational/contructor/task-es6');  // constructor
const TaskManager = require('./creational/singleton/task-manager');  //singleton
const RepoFactory = require('./creational/factory/repo-factory');  //factory
const UrgentTask = require('./structural/decorator/urgent-task'); // decorator

let taskManager = TaskManager.getInstance();

let task1 = new Task(RepoFactory.task.get(1));
task1.complete();
let ut = new UrgentTask(RepoFactory.task.get(2));
ut.complete();
let task2 = new Task(RepoFactory.task.get(3));

taskManager.printTasks();
taskManager.printStats();