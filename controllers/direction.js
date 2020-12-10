const controller = {};

const models = require('../models');
controller.getAll = () =>{
    return models.Direction.findAll();
}
controller.getbyID = (ele) =>{
    var tmp = parseInt(ele);
    return models.Direction.findAll({
        where: {
            RecipeId: tmp,
            
        },
        order: [
            ['order', 'ASC'],
         
        ],


      });

}

module.exports=controller;