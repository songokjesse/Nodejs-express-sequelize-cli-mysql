const db = require('../models/index')

exports.list_all_users = function(req, res) {
    return db.User.findAll()
        .then((users) => res.send(users))
        .catch((err) => {
            console.log('There was an error querying users', JSON.stringify(err))
            return res.send(err)
        })
}


exports.create_a_user = function(req, res) {
    db.User.create({
        name: req.body.name,
        description: req.body.description,
        Userid: req.body.Userid
    }).then(user => {
        // Send created user to client
        res.send(user)
    }).catch((err) => {
        console.log('There was an error creating users', JSON.stringify(err))
        return res.send(err)
    })
}


exports.read_a_user = function(req, res) {
    db.User.findById(req.params.userId).then(user => {
        res.send(user)
    }).catch((err) => {
        console.log('There was an error querying users', JSON.stringify(err))
        return res.send(err)
    })
}


exports.update_a_user = function(req, res) {
    const id = req.params.userId;
    db.User.update( { name: req.body.name, description: req.body.description, Userid: req.body.Userid },
        { where: {id: req.params.userId} }
    ).then(() => {
        res.status(200).send("updated successfully a user with id = " + id);
    }).catch((err) => {
        console.log('There was an error updating users', JSON.stringify(err))
        return res.send(err)
    })
}


exports.delete_a_user = function(req, res) {
    const id = req.params.userId;
    db.User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
    }).catch((err) => {
        console.log('There was an error deleting users', JSON.stringify(err))
        return res.send(err)
    })
}

