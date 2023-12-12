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
        }
      },
    );
    return artistPost;
  };