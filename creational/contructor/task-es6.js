"use strict";

var Repo = require("../module/task-repo"); // module pattern
var TaskCounter = require("../singleton/task-counter"); // module pattern

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
    this.counter1 = TaskCounter.getInstance();
    this.counter2 = TaskCounter.getInstance();

    if (this.counter1 === this.counter2) {
      console.log("Same TaskCounter: " + Object.keys(this.counter1));
      this.counter1.totalCount++;
    } else {
      console.log("Different TaskCounter");
    }
  }

  complete() {
    console.log("Completing task: " + this.name);
    this.completed = true;
    Repo.save(this);
    this.counter1.completedCount++;
  }

  save() {
    console.log("Saving task: " + this.name);
    Repo.save(this);
  }

  printStats() {
    console.log('Total: ' + this.counter1.totalCount + ' Completed: ' + this.counter2.completedCount);
  }
}

module.exports = Task;
