var Task = require('../../creational/contructor/task-es6')
const deb = require('../../node_modules/debug')
const debug = deb("taskApp:");

class UrgentTask extends Task {
    constructor(data) {
        super(data);
        // this.urgent = true;
    }

    save() {
        super.save();
    }

    complete() {
        debug('Handling urgent task');
        super.complete();
        this.notify();
    }

    notify() {
        this.flyweight.notified = true;
        debug('Notifying people');
    }

}

module.exports = UrgentTask;