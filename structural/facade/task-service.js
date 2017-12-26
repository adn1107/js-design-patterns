
const TaskManager = require('../../creational/singleton/task-manager');  //singleton

class TaskService {
  constructor(taskManager) {
      this.taskManager = taskManager;
  }

  display() {
    this.taskManager.printTasks();
    this.taskManager.printStats();
  }


}

module.exports = TaskService;