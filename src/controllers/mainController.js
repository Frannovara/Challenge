const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// requireing .env
require('dotenv').config()

const controller = {

create: function(req, res) {
    db.Task.create({
        task: req.body.title
    });

    res.redirect("/tasks")
},

delete: function(req, res) {
    db.Task.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect("/")
},

index: function(req, res, next){
    res.render("index.ejs")
},

task: function(req, res, next){
    res.render("tasks.ejs")
},

read: function(req, res){
    db.Task.findAll()
    .then(function(tasks){
        res.render("tasks.ejs", {tasks:tasks})
    })
},

detail: function(req, res){
    db.Task.findByPk(req.params.id)
    .then(function(tasks){
        res.render("detalleTasks.ejs"), {tasks:tasks}
    })
}


}

module.exports = controller;