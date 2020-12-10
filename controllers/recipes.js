const controller = {};

const models = require('../models');
controller.getAll = () =>{
    return models.Recipe.findAll();
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