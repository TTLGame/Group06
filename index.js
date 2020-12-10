var express = require('express');
var app = express();


app.use(express.static(__dirname ));
var hbs = require('express-handlebars');
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true
    },

 
}));
app.get('/',function(req,res){
    res.render('index',{footer: "Group 06"});

})

app.set('view engine','hbs');
app.set('port',(process.env.PORT || 5000));

var models = require('./models')
//CReate database
app.get('/sync',function(req,res){
    models.sequelize.sync().then(function(){
        res.send('completed!');
    })
})



// Navigation
// var Navi =[
//     {name: 'index',link: '/' },
//     {name: 'recipes',link: '/recipes' },
//     {name: 'fetured',link: '/fetured' },

// ]




//Question 1
var recipes = require('./routes/task1')
app.use('/recipes',recipes);
//Question 2
var featured = require('./routes/task2')
app.use('/featured',featured);

app.get('/videos', function(req,res){
    res.render('videos');
})
app.get('/about', function(req,res){
    res.render('about');
})
app.get('/blog', function(req,res){
    res.render('blog');
})


// Question 3: search
var search = require('./routes/task3')
app.use('/search',search)
app.listen(app.get('port'),function(){
    console.log("Listenning "+ app.get('port'));
});