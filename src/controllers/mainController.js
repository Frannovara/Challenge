const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// requireing .env
require('dotenv').config()

const controller = {

create: function(req, res) {
    db.Tasks.create({
        task: req.body.title
    }).then(respuesta => res.redirect("/tasks"))
},

delete: function(req, res) {
    db.Tasks.destroy({
        where: {
            id: req.params.id
        }
    }).then(respuesta => res.redirect("/tasks"))
},


task: function(req, res){
    db.Tasks.findAll()
    .then(function(tasks){
        res.render("tasks", {tasks:tasks})
    })
},

detail: function(req, res){
    db.Tasks.findByPk(req.params.id)
    .then(function(tasks){
        console.log(tasks)
        res.render("detalleTasks", {tasks:tasks.task})
    })
}


}

module.exports = controller;