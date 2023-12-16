module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
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
        birthDate : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        img : {
            type: DataTypes.STRING,
            allowNull : true,
        },
        token:{
          type:DataTypes.TEXT,
                   allowNull:false 
        }
      },
    );
    return User;
  };