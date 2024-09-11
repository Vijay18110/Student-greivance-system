const { cModel } = require("../Model/complaintsModel")

exports.savecompaints = async (req, res) => {
    const cm = new cModel(req.body)
    await cm.save();
    res.json({ msg: "complaints send" });
}