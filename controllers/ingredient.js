const controller = {};

const models = require('../models');
controller.getAll = () =>{
    return models.Ingredient.findAll();
}
module.exports=controller;