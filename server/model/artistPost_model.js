module.exports = (sequelize, DataTypes) => {
    const artistPost = sequelize.define(
      "artistPost",
      {
        title : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        img : {
            type : DataTypes.STRING,
            allowNull : false ,

        },
        description : {
            type : DataTypes.STRING,
            allowNull : true ,
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
    return artistPost;
  };