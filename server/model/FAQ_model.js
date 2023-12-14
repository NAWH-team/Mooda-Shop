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
        

        response: {
            type : DataTypes.STRING,
            allowNull: true,
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
    return faq;
  };