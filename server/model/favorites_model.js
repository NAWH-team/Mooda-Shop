module.exports = (sequelize, DataTypes) => {
    const favorites = sequelize.define(
      "favorites",
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
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      }
    }
    );
    return favorites;
  };