module.exports = (sequelize, DataTypes) => {
    const wallet = sequelize.define(
      "wallet",
      {
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        
        
      },
    );
    return wallet;
  };