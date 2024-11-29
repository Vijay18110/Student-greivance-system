const { adminmodel } = require("../Model/adminmodel");
exports.saveadmindata = async (req, res) => {
    const model = new adminmodel(req.body);
    const data = await model.save();
    res.json({ msg: "registration successfull" });
}
exports.getadmindata = async (req, res) => {
    const result = await adminmodel.findOne({ id: req.body.id, password: req.body.password });
    if (result) {
        res.json({ msg: true });
    }
    else {
        res.json({ msg: false });
    }
}