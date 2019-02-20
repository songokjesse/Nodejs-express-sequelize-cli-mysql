const db = require('../models/index')

exports.list_all_tasks = function(req, res) {
    return db.Tasks.findAll()
        .then((tasks) => res.send(tasks))
        .catch((err) => {
            console.log('There was an error querying tasks', JSON.stringify(err))
            return res.send(err)
        })
}


exports.create_a_task = function(req, res) {
    db.Tasks.create({
        name: req.body.name,
        description: req.body.description,
        Userid: req.body.Userid
    }).then(task => {
        // Send created task to client
        res.send(task)
    }).catch((err) => {
        console.log('There was an error creating tasks', JSON.stringify(err))
        return res.send(err)
    })
}


exports.read_a_task = function(req, res) {
    db.Tasks.findById(req.params.taskId).then(task => {
        res.send(task)
    }).catch((err) => {
        console.log('There was an error querying tasks', JSON.stringify(err))
        return res.send(err)
    })
}


exports.update_a_task = function(req, res) {
    // Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    //     if (err)
    //         res.send(err);
    //     res.json(task);
    // });
    const id = req.params.taskId;
    db.Tasks.update( { name: req.body.name, description: req.body.description, Userid: req.body.Userid },
        { where: {id: req.params.taskId} }
    ).then(() => {
        res.status(200).send("updated successfully a task with id = " + id);
    }).catch((err) => {
        console.log('There was an error updating tasks', JSON.stringify(err))
        return res.send(err)
    })
}


exports.delete_a_task = function(req, res) {
    const id = req.params.taskId;
    db.Tasks.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a task with id = ' + id);
    }).catch((err) => {
        console.log('There was an error deleting tasks', JSON.stringify(err))
        return res.send(err)
    })
}

