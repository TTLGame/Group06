var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    let ingredient_controller = require('../controllers/ingredient');
    let recipes_controller = require('../controllers/recipes');
    
    getdata();

    async function getdata(){
        var ingredient = await ingredient_controller.getAll();
        var recipe = await recipes_controller.getAll();

        //res.locals.item = {recipe,ingredient};
       
       
        res.render('recipes',{recipe: recipe, ingredient:ingredient, footer: "18127142 - Trịnh Hoàng Long"});
    }
    
    

})

module.exports = router;