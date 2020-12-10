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
            [Op.iLike]: '%'+ele+'%'
          }
        },
        raw: true
      });
    }
//
controller.searchBySummary = (ele) =>{
  return models.Recipe.findAll({
        where: {
          summary: {
            [Op.iLike]: '%'+ele+'%'
          }
        },
        raw: true
      });

    }
//
controller.searchByDescription = (ele) =>{
  return models.Recipe.findAll({
        where: {
          description: {
            [Op.iLike]: '%'+ele+'%'
          }
        },
        raw: true
      });

    }

controller.getbyID = (ele) =>{
    var tmp = parseInt(ele);
    return models.Recipe.findAll({
        where: {
            id: tmp,
        },
        raw: true
      });
}
module.exports=controller;