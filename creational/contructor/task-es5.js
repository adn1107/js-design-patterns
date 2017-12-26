var Repo = require('../module/task-repo')
const deb = require('../../node_modules/debug')
const debug = deb("taskApp:");

var Task = function(data) {
  this.name = data.name;
  this.completed = false;
}

Task.prototype.complete = function() {
  debug("completing task: " + this.name);
  this.completed = true;
  Repo.save(this);
};

Task.prototype.save = function() {
  debug("saving task: " + this.name);
  Repo.save(this);
};

module.exports = Task;
