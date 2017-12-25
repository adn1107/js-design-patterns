var taskCounter;

class TaskCounter {
  constructor() {
    this.totalCount = 0;
    this.completedCount = 0;
  }

  createCounter() {
   taskCounter = new TaskCounter;
    return taskCounter;
  }

  getInstance() {
    if (!taskCounter) {
     taskCounter = this.createCounter();
    }
    return taskCounter;
  }
}

module.exports = new TaskCounter;
