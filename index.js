const express = require('express')
const workoutController = require('./controllers/workoutController');

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended:true}))




app.use(workoutController);



app.listen(4000, () => {
    console.log('app running')
});