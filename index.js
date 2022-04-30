const express = require('express')
// require('ejs')
const methodOverride= require('method-override');
const workoutController = require('./controllers/workoutController');

const app = express();
const PORT = process.env.PORT || 4000
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
// app.use(ejsLayouts);


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/favicon.ico', (req, res) => {res.send("dummy")})


app.use(workoutController);



app.listen(PORT, () => {
    console.log('app running')
});