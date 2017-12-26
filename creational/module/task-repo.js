const deb = require('../../node_modules/debug')
const debug = deb("taskApp:");

var Repo = function() {

    var get = (id) => {
        debug('Getting task ' + id);
        return {
            name: 'task ' + id
        }
    }

    var save = (task) => {
        debug('Saving ' + task.name + ' to the DB');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = Repo();