var Task = require('../../creational/contructor/task-es6')

class UrgentTask extends Task {
    constructor(data) {
        super(data);
        this.urgent = true;
    }

    save() {
        super.save();
    }

    complete() {
        // console.log('Handling urgent task');
        super.complete();
        this.notify();
    }

    notify() {
        this.notified = true;
        // console.log('Notifying people');
    }

}

module.exports = UrgentTask;