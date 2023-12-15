const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");

dotenv.config({ path: "./config.env" });

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbNAME = process.env.DB_NAME;
const dbDIALECT = process.env.DIALECT;

const sequelize = new Sequelize(dbNAME, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDIALECT,
});

sequelize
.authenticate()
.then(() => console.log("Connected to the database "))
.catch((err) =>
console.error("Unable to connect to the database ", err)
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.dotenv = dotenv;
// db.sequelize.sync({alter:true})
/* Start here */
db.user = require('./user_model')(sequelize, DataTypes)
db.artist = require('./artist_model')(sequelize, DataTypes)
db.brand = require('./brand_model')(sequelize, DataTypes)
db.product = require('./product_model')(sequelize, DataTypes)
db.artistPost = require('./artistPost_model')(sequelize, DataTypes)
db.faq = require('./FAQ_model')(sequelize, DataTypes)
// db.wallet = require ('./wallet_model')(sequelize,DataTypes)

// Relations
// faq to user 
db.user.hasMany(db.faq , {
    forgeinKey : 'userId'
 
})
db.faq.belongsTo(db.user)
// wallet

db.user.belongsToMany(db.product, { through: 'wallets', as: 'products', foreignKey: 'user_id' });
db.product.belongsToMany(db.user, { through: 'wallets', as: 'users', foreignKey: 'product_id' });

//  favorites
db.user.belongsToMany(db.product, { through: 'favorites', as: 'products', foreignKey: 'user_id' });
db.product.belongsToMany(db.user, { through: 'favorites', as: 'users', foreignKey: 'product_id' });

// db.sequelize.sync({alter:true})

// brand to product 

db.brand.hasMany(db.product,{
    forgeinKey : 'brandId'
})
db.product.belongsTo(db.brand)

// artist to artistPost 
db.artist.hasMany(db.artistPost,{
    forgeinKey : 'artistId'
})
db.artistPost.belongsTo(db.artist)


// db.sequelize.sync({alter:true})

module.exports = db;