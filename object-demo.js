let task = {
  title: "Andy",
  description: " Test task"
};

Object.defineProperty(task, "toString", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: true
});

Object.defineProperty(task, "toString", {
  enumerable: true
});

task.toString = 'hi'
console.log(task.toString());
console.log(Object.keys(task));
console.log(task);



let urgentTask = Object.create(task);
Object.defineProperty(urgentTask, "toString", {
    value: function() {
        return this.title + ' is urgent task';
    }
});
console.log(urgentTask.toString());
console.log(Object.keys(urgentTask));
console.log(urgentTask);

console.log(urgentTask.description);
urgentTask.toString()
task.toString()


