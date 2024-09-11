const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    department: String,
    branch: String,
    name: String,
    email: String,
    password: String,
    rollno: Number
})
exports.sModel = new mongoose.model('students', studentSchema);
