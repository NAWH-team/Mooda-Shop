module.exports = (sequelize, DataTypes) => {
    const wallet = sequelize.define(
      "wallet",
      {
        id :{
          type : DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
            type : DataTypes.INTEGER,
            allowNull: false,
      
      },
    }
    );
    return wallet;
  };