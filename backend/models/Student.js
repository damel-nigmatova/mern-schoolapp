const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    course:{type:String, required:true},
    year:{type:Number, required:true}
});

module.exports = Student = mongoose.model('student',StudentSchema);