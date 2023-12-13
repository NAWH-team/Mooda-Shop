// require user controller 

const walletController = require("../controller/wallet_controller.js");
const route = require("express").Router();


route.post("/addwallet", walletController.addTowallet);
route.get('/:userId', walletController.getbyId)
route.delete('/:userId/:productId',walletController.deleteFromwallet)


module.exports = route;