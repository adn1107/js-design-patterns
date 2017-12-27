class NotificationServiceFactory {
    constructor(message) {
        this.message = message;
        this.update = function (task) {
            console.log(message + task.flyweight.assignees + ' for task ' + task.name );
        }
    }

}

module.exports = NotificationServiceFactory;