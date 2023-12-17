module.exports = (sequelize, DataTypes) => {
    const brand = sequelize.define(
      "brand",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        img : {
            type: DataTypes.STRING(500),
            allowNull : true,
        },
        token:{
          type:DataTypes.STRING(500),
                   allowNull:false}, 
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
    return brand;
  };