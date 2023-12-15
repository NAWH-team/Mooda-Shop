const ArtistPostController = require("../controller/artistPost_controlerl");
const route = require("express").Router();


route.post("/create", ArtistPostController.createPost);
route.get("/all/:id",ArtistPostController.getAll) 

module.exports = route;