const db = require('../model/index')
const ArtistPost = db.artistPost

exports.createPost= async (req,res)=>{
    const {title,img,description, aritstId} = req.body
try {
    var data = await  ArtistPost.create({title,img,description,artistId:aritstId})
    console.log(data);  
  res.json('post created')
}catch(err){
    res.json(err)
}
}
exports.getAll = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await ArtistPost.findAll({where:{artistId:id}});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};
