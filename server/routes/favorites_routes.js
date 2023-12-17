
const favoritesController = require("../controller/favorites_controller");
const route = require("express").Router();



route.get('/:userId/', favoritesController.getbyId)
route.post("/add", favoritesController.addProductToFav);
route.delete('/delete',favoritesController.deleteFromFav)


module.exports = route