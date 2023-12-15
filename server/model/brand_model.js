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
            allowNull : false,
        },
        token:{
          type:DataTypes.STRING(500),
                   allowNull:false 
        }
      },
    );
    return brand;
  };