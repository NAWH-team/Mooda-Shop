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
        intQty : {
          type : DataTypes.INTEGER,
          allowNull : false,
          defaultValue : 1,
      },
        collection : {
             type : DataTypes.STRING,
             allowNull: false,
        },
        status : {
         type : DataTypes.BOOLEAN,
         allowNull : false ,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        }
      },
    );
    return product;
  };