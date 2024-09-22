const mongoose = require('mongoose')
const Resolverschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,

})
exports.ResolverModel = new mongoose.model('resolver', Resolverschema);
