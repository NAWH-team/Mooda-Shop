// require user controller 

const favoritesController = require("../controller/favorites_controller");
const route = require("express").Router();



route.get('/:userId/', favoritesController.getbyId)
route.post("/add", favoritesController.addProductForUser);
route.delete('/:userId/:prodId',favoritesController.deleteFromwallet)
route.delete('/:userId',favoritesController.deleteAll)


module.exports = route