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
            defaultValue: 'https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg',
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
        },
        bio :{
          type: DataTypes.TEXT,
          allowNull:true,
        },
        cover :{
          type: DataTypes.TEXT,
          allowNull:true,
          defaultValue : "https://t3.ftcdn.net/jpg/05/96/09/62/360_F_596096212_DACXTnAgcHxxJmtyTxKe03SMi7LYrOgJ.jpg",
        }
       
        
      },
    );
    return artist;
  };