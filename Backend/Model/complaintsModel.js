const mongoose = require('mongoose')
const complaintsSchema = mongoose.Schema({
    inchargename: String,
    branch: String,
    name: String,
    complaints: String,
    complaintsId: String,
    uid: String,
    adminfwd: String,
    adminview: String,
    resolverview: String,
    resolverstatus: String,
    adminstatus: String
})
exports.cModel = new mongoose.model('complaints', complaintsSchema);
