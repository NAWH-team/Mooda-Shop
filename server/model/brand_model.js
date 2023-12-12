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
            type: DataTypes.STRING,
            allowNull : false,
        }
      },
    );
    return brand;
  };