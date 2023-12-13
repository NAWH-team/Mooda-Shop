module.exports = (sequelize, DataTypes) => {
    const faq = sequelize.define(
      "faq",
      {
        body: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Votes : {
          type: DataTypes.INTEGER,
          defaultValue : 0,
        }
        
      },
    );
    return faq;
  };