module.exports = (sequelize, DataTypes) => {
    const faq = sequelize.define(
      "faq",
      {
        body: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        response: {
            type : DataTypes.STRING,
            allowNull: true,
        },
        
        
      },
    );
    return faq;
  };