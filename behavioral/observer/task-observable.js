const Task = require('../../creational/contructor/task-es6')
const ObserverList = require('./task-observer-list')
const deb = require('../../node_modules/debug')
const debug = deb("taskApp:");

class ObservableTask extends Task {
    constructor(data) {
        super(data);
        this.observers = new ObserverList;
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        debug('Removing observer %O' , observer)
        this.observers.removeAt(this.observers.indexOf(observer, 0))
    }

    notify(task) {
        let count = this.observers.count();
        for (let i=0; i < count; i ++) {
            this.observers.get(i)(task);
        }
    }

    complete() {
        super.complete();
        this.notify(this);
    }

}

module.exports = ObservableTask;