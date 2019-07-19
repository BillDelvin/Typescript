// implemenet crack operation insert, update, delete and read or
// view using post, update, delete and get web method respectively
const mongoose = require('mongoose');

// create model employe
var Employee = mongoose.model('Employee', {
    //implement quirk operation using employee detail 
    name: {type: String},
    position: {type: String},
    office: {type:String},
    salary: {type: Number}
});

module.exports = {Employee};