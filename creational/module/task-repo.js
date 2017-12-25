var Repo = function() {

    var get = (id) => {
        console.log('Getting task ' + id);
        return {
            name: 'new task ' +id + ' from DB'
        }
    }

    var save = (task) => {
        console.log('Saving ' + task.name + ' to the DB');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = Repo();