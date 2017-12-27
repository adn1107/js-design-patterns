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

  completeTasks() {
    let i = 0;
    while (i < 10 ) {
      this.tasks[Math.floor((Math.random()*this.tasks.length))].complete();
      i++;
    }
  }

  registerObservers(als, ls, aus) {
    this.tasks.forEach(task => {
      task.addObserver(als.update)
      task.addObserver(ls.update)
      task.addObserver(aus.update)
    })

  }

  printTasks() {
    this.tasks.forEach(element => {
      console.log(
        `Task:  ${element.name} Completed:  ${element.flyweight.completed}  Urgent: ${element.flyweight.urgent} Priority: ${element.flyweight.priority}  Assignee: ${element.flyweight.assignees} Notified: ${element.flyweight.notified}
         `
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
