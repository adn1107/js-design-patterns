const Task = require('./creational/contructor/task-es6');  // constructor
const TaskManager = require('./creational/singleton/task-manager');  //singleton
const TaskService = require('./structural/facade/task-service'); // facade
const RepoFactory = require('./creational/factory/repo-factory');  //factory
const UrgentTask = require('./structural/decorator/urgent-task'); // decorator
var TaskFlyweight = require("./structural/flyweight/task-flyweight"); // flyweight



const deb = require('./node_modules/debug')
const debug = deb("taskApp:");

let taskManager = TaskManager.getInstance();
let taskService = new TaskService(taskManager);

// let taskCollection = [];

// let completed = [true, false];
let urgent = [true, false];
let priority = [1, 2, 3, 4, 5];
let assignees = ['Jon', 'Erica', 'Amanda', 'Nathan'];

for (let i=0; i < 20; i++) {
    // taskCollection.push({
        new Task({
        name: 'task' + i,
        // completed: completed[Math.floor((Math.random() *2))],
        urgent: urgent[Math.floor((Math.random() *2))],
        priority: priority[Math.floor((Math.random() *5))],
        assignees: assignees[Math.floor((Math.random() *4))],
    })
}

// let task1 = new Task(RepoFactory.task.get(1));
// task1.complete();
// let ut = new UrgentTask(RepoFactory.task.get(2));
// ut.complete();
// let task2 = new Task(RepoFactory.task.get(3));

taskManager.completeTasks();
taskService.display();
console.log(TaskFlyweight.getCount());

