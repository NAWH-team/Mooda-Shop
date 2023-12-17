const Products_controller = require("../controller/Products_controller");
const route = require("express").Router();



route.get("/getAll",Products_controller.getAll) 
route.get("/getOne/:id",Products_controller.getOne) 
route.get("/getAllStatus/:status",Products_controller.getAllStatus)
route.get("/getAllCollection/:collection",Products_controller.getAllCollection)
route.get("/getAllCategory/:category",Products_controller.getAllCategory)

module.exports = route;