const express = require('express')
const methodOverride= require('method-override');
const workoutController = require('./controllers/workoutController');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/favicon.ico', (req, res) => {res.send("dummy")})


app.use(workoutController);



app.listen(4000, () => {
    console.log('app running')
});