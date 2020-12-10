var express = require('express');
var router = express.Router();
//
router.get('/',function(req,res){
    var seached_word = req.query.search
    
    let recipes_controller = require('../controllers/recipes');
    
    getdata();

    async function getdata(){
        var recipe = await recipes_controller.searchByTitle(seached_word)
        var search_summary = await recipes_controller.searchBySummary(seached_word)
        
        search_summary.forEach((element) =>{
           let temp = recipe.find((ele)=>{
               return ele.id == element.id
           })
           if (temp == undefined){
               recipe.push(element)
           }
       })
       var search_desciption = await recipes_controller.searchByDescription(seached_word)
       search_desciption.forEach((element) =>{
        let temp = recipe.find((ele)=>{
            return ele.id == element.id
        })
        if (temp == undefined){
            recipe.push(element)
        }
    })
        res.render('search',{recipe: recipe, footer:"18127143- Trinh Thanh Long"});
    }
 
})

module.exports = router;