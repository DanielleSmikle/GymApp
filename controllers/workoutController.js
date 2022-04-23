const express = require('express');
const WorkOut = require('../models/WorkOut-model');

const router = express.Router();



router.get('/', (req, res) => {
    WorkOut.find({}).then((items) => res.send(items));

});


router.post('/add', (req, res) =>{
    WorkOut.create(req.body).then(items => res.send(items));

});
//     .then((WorkOut) => {
//         res.render('workouts/index',{ workout });
//     })
//     .catch(console.error);
// });

// router.get('/:id', (req, res) => {
//     WorkOut.findById(req.params.id)
//     .then((todo) => {
//         res.render('workout/show', workout);
//     })
//     .catch(console.error);
// });

module.exports = router;