const express = require('express')
const workoutController = require('./controllers/workoutController');


const app = express();

app.use(express.static('public'));







app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.set('view engine', 'ejs');
app.use(workoutController);



app.listen(4000, () => {
    console.log('app running')
});