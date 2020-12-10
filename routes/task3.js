var express = require('express');
var router = express.Router();
//
router.get('/',function(req,res){
    var seached_word = req.query.search
    
    let recipes_controller = require('../controllers/recipes');
    
    getdata();

    async function getdata(){
        var recipe = await recipes_controller.searchByTitle(seached_word)
        res.render('search',{recipe: recipe});
    }
 
})

module.exports = router;