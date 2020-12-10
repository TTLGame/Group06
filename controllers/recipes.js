const controller = {};

const models = require('../models');
controller.getAll = () =>{
    return models.Recipe.findAll();
}
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

controller.searchByTitle = (ele) =>{
    return models.Recipe.findAll({
        where: {
          title: {
            [Op.like]: '%'+ele+'%'
          }
        }
      });


    }
module.exports=controller;