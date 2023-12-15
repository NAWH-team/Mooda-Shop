const Brandcontrolleur = require ('../controller/brand_controller.js')
const route = require("express").Router();


route.get("/all", Brandcontrolleur.findAll);
route.post('/signup',Brandcontrolleur.Signup);
route.post('/signin',Brandcontrolleur.Signin)
route.post('/logout',Brandcontrolleur.logout)
route.get('/allproducts',Brandcontrolleur.GetAllProducts)
route.post('/add/:id',Brandcontrolleur.createProduct)

module.exports = route;