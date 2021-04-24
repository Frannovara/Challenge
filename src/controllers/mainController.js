const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// requireing .env
require('dotenv').config()

const controller = {

index: (req,res) => {
    res.render('index.ejs')
},

tasks: (req,res) => {
    res.render('tasks.ejs')
}


}

module.exports = controller;