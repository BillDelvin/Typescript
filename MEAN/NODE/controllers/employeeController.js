const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// add request statement for employee model 
var {Employee} = require('../models/employee');

// get request
// => localhost:3000/employees/
router.get('/', (req, res) => { //req as request and res as respon 
    Employee.find((err, docs) => {
        if (!err){
            res.send(docs); 
        }
        else{
            console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
})

// get request id 
router.get('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No reacord with given id : ${req.params.id}`);
    Employee.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employee : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// post request
// create an object of employee model class 
router.post('/', (req, res) => {
    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    });
    emp.save( (err, doc) => {
        if (!err){
            res.send(doc); 
        }
        else{
            console.log( 'Error in Employees Save :' + JSON.stringify(err, undefined, 2) );
        }
    });
});


router.put('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No reacord with given id : ${req.params.id}`);
    var emp = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, {$set : emp} ,{new: true}, (err, doc) => {
        if (!err){
            res.send(doc); 
        }
        else{
            console.log( 'Error in Employees Update :' + JSON.stringify(err, undefined, 2) );
        }
    });
});

// request for delete
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No reacord with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err){
            res.send(doc); 
        }
        else{
            console.log( 'Error in Employees Update :' + JSON.stringify(err, undefined, 2) );
        }
    });
});


module.exports = router;