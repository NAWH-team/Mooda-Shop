const { where } = require("sequelize");
const db = require("../model/index.js");
const FAQ = db.faq;
exports.create =async (req,res)=>{
   const {body,userId} = req.body
  try {
    await FAQ.create({body:body,userId:userId})
    res.json('Question posted')
  }catch(err){
    console.log(err);
  }
}

exports.voteUp = async (req,res)=>{
    try {
         
        const {id}=req.body
        const oldVote = await FAQ.findOne({where:{id:id}})
        await FAQ.update({Votes:oldVote.Votes +1},
            {where:{
                id:id
            }})
            res.json('Liked')
        }catch(err){
            res.json(err)
        }
}
exports.voteDown = async (req,res)=>{
    try {
         
        const {id}=req.body
        const oldVote = await FAQ.findOne({where:{id:id}})
        await FAQ.update({Votes:oldVote.Votes -1},
            {where:{
                id:id
            }})
            res.json('Liked')
        }catch(err){
            res.json(err)
        }
}

exports.most = async (req, res) => {
    try {
      const data = await FAQ.findAll({
        limit: 6,
        order: [['Votes', 'DESC']], 
      });
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.all = async (req, res) => {
    try {
      const data = await FAQ.findAll();
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

