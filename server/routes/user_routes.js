// require user controller 

const UserController = require("../controller/user_controller");
const route = require("express").Router();
route.get("/all", UserController.findAll);
module.exports = route;