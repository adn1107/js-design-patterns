"use strict";

var Repo = require("../module/task-repo"); // module pattern
var TaskManager = require("../singleton/task-manager"); // module pattern
var TaskFlyweight = require("../../structural/flyweight/task-flyweight"); // flyweight

const deb = require('../../node_modules/debug')
const debug = deb("taskApp:");


class Task {
  constructor(data) {
    this.flyweight = TaskFlyweight.get(data.urgent, data.priority, data.assignees);
    this.name = data.name;
    // this.completed = false;
    // this.urgent = false;
    // this.notified = false;
    this.manager1 = TaskManager.getInstance();
    this.manager2 = TaskManager.getInstance();

    if (this.manager1 === this.manager2) {
      this.manager1.totalCount++;
      this.manager1.tasks.push(this);
    } else {
      console.log("Error!!! TaskManager is not singleton.");
    }
  }

  complete() {
    debug("Completing task: " + this.name);
    this.flyweight.completed = true;
    Repo.save(this);
    this.manager1.completedCount++;
    if (this.flyweight.urgent) {
      this.flyweight.notified = true;
    }
  }

  save() {
    debug("Saving task: " + this.name);
    Repo.save(this);
  }

}

module.exports = Task;
