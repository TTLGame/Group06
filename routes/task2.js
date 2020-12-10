var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    

    res.render('featured');
})
router.get('/:id',function(req,res){
    var id = req.params.id;
    let ingredient_controller = require('../controllers/ingredient');
    let recipes_controller = require('../controllers/recipes');
    let Direction_controller = require('../controllers/direction');
    getdata();

    async function getdata(){
        var ingredient = await ingredient_controller.getbyID(id);
        var recipe = await recipes_controller.getbyID(id);
        var direction = await Direction_controller.getbyID(id);
        
       console.log(direction);
       
        res.render('featured',{recipe: recipe[0], ingredient:ingredient,direction:direction, footer: "18127141 - Trần Phi Long"});
    }
    
    

})
module.exports = router;