const FaqController = require("../controller/FAQ_controller");
const route = require("express").Router();


route.post("/ask", FaqController.create);
route.put('/voteup',FaqController.voteUp)
route.put('/votedown',FaqController.voteDown)
route.get('/most',FaqController.most)
route.get('/all',FaqController.all)

module.exports = route;