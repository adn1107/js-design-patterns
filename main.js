const Task = require('./creational/contructor/task-es6');  // constructor
const TaskManager = require('./creational/singleton/task-manager');  //singleton
const TaskService = require('./structural/facade/task-service'); // facade
const RepoFactory = require('./creational/factory/repo-factory');  //factory
const UrgentTask = require('./structural/decorator/urgent-task'); // decorator
const TaskFlyweight = require('./structural/flyweight/task-flyweight'); // flyweight
const nsFactory = require('./creational/factory/notification-service-factory');  //factory
const ObservableTask = require('./behavioral/observer/task-observable'); // observer



const deb = require('./node_modules/debug')
const debug = deb("taskApp:");

let taskManager = TaskManager.getInstance();
let taskService = new TaskService(taskManager);

let alertService = new nsFactory('Alerting ');
let loggingService = new nsFactory('Logging ');
let auditService = new nsFactory('Auditing ');

let urgent = [true, false];
let priority = [1, 2, 3, 4, 5];
let assignees = ['Jon', 'Erica', 'Amanda', 'Nathan'];

for (let i=0; i < 20; i++) {
        let newTask= new ObservableTask({
        name: 'task' + i,
        urgent: urgent[Math.floor((Math.random() *2))],
        priority: priority[Math.floor((Math.random() *5))],
        assignees: assignees[Math.floor((Math.random() *4))],
    })
    newTask.addObserver(alertService.update)
    newTask.addObserver(loggingService.update)
    newTask.addObserver(auditService.update)
    newTask.removeObserver(auditService.update)
}

// taskManager.registerObservers(alertService, loggingService, auditService);
taskManager.completeTasks();
taskService.display();
console.log(TaskFlyweight.getCount());

