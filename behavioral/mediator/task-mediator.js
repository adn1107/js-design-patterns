class TaskMediator {
    constructor() {
        this.channels = {};
    }

    subscribe(channel, context, func) {
        if (!this.channels[channel]) {
            this.channels[channel] = []
        }
        this.channels[channel].push({context: context, func: func})
    }

    publish(channel, ...args) {
        if (!this.channels[channel]) {
            return false
        }
        for (let i = 0; i < this.channels[channel].length; i++) {
            let sub = this.channels[channel][i]
            sub.func.apply(sub.context, args)
        }
    }
}

module.exports = new TaskMediator;