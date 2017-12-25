"use strict";

var Repo = require("../module/task-repo"); // module pattern
var TaskManager = require("../singleton/task-manager"); // module pattern

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
    this.urgent = false;
    this.notified = false;
    this.manager1 = TaskManager.getInstance();
    this.manager1 = TaskManager.getInstance();

    if (this.manager1 === this.manager1) {
      this.manager1.totalCount++;
      this.manager1.tasks.push(this);
    } else {
      console.log("Error!!! TaskManager is not singleton.");
    }
  }

  complete() {
    // console.log("Completing task: " + this.name);
    this.completed = true;
    Repo.save(this);
    this.manager1.completedCount++;
  }

  save() {
    // console.log("Saving task: " + this.name);
    Repo.save(this);
  }

}

module.exports = Task;