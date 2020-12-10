const controller = {};

const models = require('../models');
controller.getAll = () =>{
    return models.Ingredient.findAll();
}

controller.getbyID = (ele) =>{
    var tmp = parseInt(ele);
    return models.Ingredient.findAll({
        where: {
            RecipeId: tmp,
        }
      });
}
module.exports=controller;