module.exports = (sequelize, DataTypes) => {
    const artist = sequelize.define(
      "artist",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
            type : DataTypes.STRING,
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
            allowNull : false,
        },
        img : {
            type: DataTypes.STRING,
            allowNull : true,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        token:{
          type:DataTypes.TEXT,
                   allowNull:false 
        }
        
      },
    );
    return artist;
  };