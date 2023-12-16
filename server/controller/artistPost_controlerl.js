const db = require('../model/index')
const ArtistPost = db.artistPost

exports.createPost= async (req,res)=>{
    const { title, img, description, aritstId } = req.body;
    try {
      const data = await ArtistPost.create({ title, img, description,artistId: aritstId });
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'error', error: 'Internal Server Error' });
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


