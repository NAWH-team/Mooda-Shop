const db=require('../model/index')

db.sequelize.sync({alter:true})