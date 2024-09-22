const { ResolverModel } = require('../Model/Resolvermodel')

exports.saveresolverdata = async (req, res) => {
    const rmodel = new ResolverModel(req.body);
    await rmodel.save();
    res.json({ msg: "data saved" })
}
exports.getresolverdata = async (req, res) => {
    const re = await ResolverModel.findOne({ password: req.body.password, email: req.body.email })
    if (re) {
        res.json({ msg: true })
    } else {
        res.json({ msg: false })
    }
}