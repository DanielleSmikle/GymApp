const express = require('express');
const res = require('express/lib/response');
const WorkOut = require('../models/WorkOut-model');

const router = express.Router();



router.get('/', (req, res) => {
    WorkOut
    .find({})
    .then((items) => {
        console.log(items)
        res.render('index', {stuff: items})
    });

});


router.post('/', (req, res) =>{
    WorkOut.create(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
    //new data will not post
});


router.delete('/:id', (req, res) => {
    WorkOut.findByIdAndDelete(req.params.id).then(item => 
        res.send(item)
    );

});
router.put('/:id', (req, res) => {
    WorkOut.findByIdAndUpdate(req.params.id,(req.body)).then(item =>
        res.send(item)
        );
});


router.get('/new', (req, res) => {
    res.render('new');
})


    
module.exports = router;