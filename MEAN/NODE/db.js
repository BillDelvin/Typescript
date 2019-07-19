// it requires mongoose package 
const mongoose = require('mongoose'); 

//the function that for pass mode db connection 
mongoose.connect('mongodb://localhost:27017/CrudDB', (err)=>{ //then make a function that for callback if error
    if(!err) {
        console.log('MongoDB connection succesfully...'); //if connection success 
    }
    else{
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined,2)) // if connection fail
    }
} ); 

module.exports = mongoose; //for export the mongoose