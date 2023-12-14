// require user controller 

const walletController = require("../controller/wallet_controller.js");
const route = require("express").Router();



route.get('/:userId/', walletController.getbyId)
route.post("/addwallet", walletController.addProductForUser);
route.put("/inc/:userId/:prodId", walletController.incrIntqty );
route.put("/dec/:userId/:prodId", walletController.decrIntqty );
route.put("/upIntQty/:userId/:prodId", walletController.UpdatIntqty );
route.put("/UpQnty/:userId/:prodId", walletController.UpQnty );
route.delete('/:userId/:prodId',walletController.deleteFromwallet)
route.delete('/:userId',walletController.deleteAll)


module.exports = route