// require user controller 

const UserController = require("../controller/user_controller.js");
const route = require("express").Router();


route.get("/all", UserController.findAll);
route.post('/signup',UserController.Signup);
route.get('/signin',UserController.Signin)
route.post('/logout',UserController.logout)

module.exports = route;