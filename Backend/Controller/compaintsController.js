const { cModel } = require("../Model/complaintsModel")

exports.savecompaints = async (req, res) => {
    const cm = new cModel(req.body)
    await cm.save();
    res.json({ msg: "complaints send" });
}
exports.getcompaints = async (req, res) => {
    const re = await cModel.find()
    res.json(re);

}
exports.deletecom = async (req, res) => {
    const re = await cModel.findOneAndDelete({ _id: req.body.id })
    res.json({ msg: "complaint deleted" });


}