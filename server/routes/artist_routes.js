// require user controller 

const ArtistController = require("../controller/artist_controller");
const route = require("express").Router();


route.get("/all", ArtistController.findAll);
route.post('/signup',ArtistController.Signup);
route.post('/signin',ArtistController.Signin)
route.post('/logout',ArtistController.logout)
route.put('/update',ArtistController.update)
module.exports = route;