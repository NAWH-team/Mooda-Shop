const { QueryError } = require("sequelize");
const db = require("../model/index.js");
const wallet = db.wallet;



exports.addTowallet = async (req, res) => {
    productId = req.body.productId
    userId = req.body.userId
    try {
        const data = await wallet.create({ productId: productId, userId: userId })
        res.send("you add it ")
    } catch (error) {
        console.error('Error deleting record:', error);
    }
}

exports.getbyId = async (req, res) => {
    userId=req.params.userId
    try {
        const alldata = await wallet.findAll({ where: { userId: userId } })
        res.json(alldata)
    } catch (error) {
        console.error('Error deleting record:', error);
    }
}

exports.deleteFromwallet = async (req, res) => {
    userId = req.body.userId
    productId = req.body.productId
    try {
        const data = await wallet.destroy({ where: { userId: userId, productId: productId } });
        res.send("product deleted")
    } catch (error) {
        console.error('Error deleting record:', error);
    }

}