var taskManager;

class TaskManager {
  constructor() {
    this.totalCount = 0;
    this.completedCount = 0;
    this.tasks = [];
  }

  createCounter() {
    taskManager = new TaskManager();
    return taskManager;
  }

  getInstance() {
    if (!taskManager) {
      taskManager = this.createCounter();
    }
    return taskManager;
  }

  printTasks() {
    this.tasks.forEach(element => {
      console.log(
        `Task:  ${element.name}    Completed:  ${element.completed}  Urgent: ${
          element.urgent
        }  Notified: ${element.notified}`
      );
    });
  }

  printStats() {
    console.log(
      `\nTotal:  ${this.totalCount}  Completed: ${this.completedCount}\n`
    );
  }
}

module.exports = new TaskManager();
