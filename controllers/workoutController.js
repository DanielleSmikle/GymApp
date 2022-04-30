const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const WorkOut = require('../models/WorkOut-model');

const router = express.Router();



router.get('/', (req, res) => {
    WorkOut
    .find({})
    .then((items) => {
        // console.log(items)
        res.render('index', {stuff: items})
    });

});


router.post('/', (req, res) =>{
    console.log(req.body)
req.body.excercise={
    name:req.body.name, 
    sets:req.body.sets,
    description:req.body.description

}
    WorkOut.create(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
    //new data will not post
});


router.delete('/:id', (req, res) => {
    WorkOut.findByIdAndDelete(req.params.id).then(item => 
        res.redirect('/')
    );

});
router.put('/:id', (req, res) => {
    WorkOut.findByIdAndUpdate(req.params.id,(req.body)).then(item =>
        res.redirect('/')
        );
});


router.get('/new', (req, res) => {
    res.render('new');
})

router.get('/:id/edit', (req, res) => {
    WorkOut.findById(req.params.id).then(items =>{
        res.render('edit', items)
    })
})

router.get('/:id', (req, res) => {
    WorkOut.findById(req.params.id).then(items =>{
        // console.log(items)  
        res.render('show',{item: items})
    })
})
 
module.exports = router;