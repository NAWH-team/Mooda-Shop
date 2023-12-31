const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const app = express();

/* Connect database with server  */
const db = require("./model/index.js");

/* Middleware */
app.use(express.json());
app.use(cors());

// user Routes
app.use('/user',require('./routes/user_routes.js'))
app.use('/wallet',require('./routes/wallet_router.js'))

app.use('/favorites',require('./routes/favorites_routes.js'))
// faq routes
app.use('/faq',require('./routes/FAQ_routes.js'))


  // artistpost
  app.use('/post',require('./routes/artistPost_routes.js'))

  app.use('/brand',require('./routes/brand_routes.js'))

  // artist 

  app.use('/artist',require('./routes/artist_routes.js'))



  // Products

  app.use('/product',require('./routes/Products_routers.js'))



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});