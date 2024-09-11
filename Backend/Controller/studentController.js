const { sModel } = require('../Model/studentModel')
exports.data = (req, res) => {
    res.send("server is running");
}
exports.savedata = async (req, res) => {
    const smodel = new sModel(req.body);
    await smodel.save();
    res.json({ msg: "data saved" })
}
exports.getdata = async (req, res) => {
    const re = await sModel.findOne({ password: req.body.password, rollno: req.body.rollno })
    if (re) {
        res.json({ msg: true })
    } else {
        res.json({ msg: false })
    }
}
exports.getstudentdata = async (req, res) => {
    const re = await sModel.find()
    res.json(re)

}

