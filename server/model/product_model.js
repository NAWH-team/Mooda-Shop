const { DATE } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
      "product",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        img : {
            type: DataTypes.STRING,
            allowNull : true,
        },
        description : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        category : {
            type : DataTypes.STRING,
            allowNull : false ,
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        collection : {
             type : DataTypes.STRING,
             allowNull: false,
        },
        status : {
         type : DataTypes.BOOLEAN,
         allowNull : false ,
        }
      },
    );
    return product;
  };