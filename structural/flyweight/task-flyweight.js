var count = 0;

class TaskFlyweight {

    constructor(urgent, priority, assignees) {
        this.completed = false;
        this.notified = false;
        this.urgent = urgent;
        this.priority = priority;
        this.assignees = assignees;
        this.flyweight = {};
    }

    get(urgent, priority, assignees) {
        if (!this.flyweight[urgent + priority + assignees]) {
            this.flyweight[urgent + priority + assignees] =
            new TaskFlyweight(urgent, priority, assignees);
            count++;
        }
        return this.flyweight[urgent + priority + assignees]
    }

    getCount() {
        return count;
    }

}

module.exports = new TaskFlyweight;
