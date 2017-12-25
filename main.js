const Task = require('./creational/contructor/task-es6');  // constructor
// const TaskCounter = require('./creational/singleton/task-counter');  //singleton
const RepoFactory = require('./creational/factory/repo-factory');  //factory
const UrgentTask = require('./structural/decorator/urgent-task'); // decorator

// let counter1 = TaskCounter.getInstance();
// let counter2 = TaskCounter.getInstance();

// if (counter1 === counter2) {
//     console.log('Same TaskCounter');
// }
// else {
//     console.log('Different TaskCounter');
// }

let task1 = new Task(RepoFactory.task.get(1));

task1.complete();

let ut = new UrgentTask(RepoFactory.task.get(2));
ut.complete();

task1.printStats();
ut.printStats();