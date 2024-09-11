const moongoose = require('mongoose');
const adminSchema = moongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: String,
    position: String
})
const adminmodel = new moongoose.model("sradmin", adminSchema);
exports.adminmodel = adminmodel;