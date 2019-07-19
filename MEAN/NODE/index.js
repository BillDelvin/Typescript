// in order to make a conection with mongodb
const express = require('express');
const bodyParser = require('body-parser');

// to separate loacl import and package import 
const {mongoose} = require('./db.js');

// controll employee
var employeeController = require('./controllers/employeeController.js')

// and make import we will establish a connection with mongodb to work with express package we have to call this function express like this
var app = express();

// to send JSON data to this node
app.use(bodyParser.json());

// and call the funciton 
app.listen(3000, ()=>{console.log('server started at port : 3000')}); 

app.use('/employees', employeeController);

