const db = require('../model/index')
const Products = db.product
// get All 
exports.getAll = async (req, res) => {
    try {
        const data = await Products.findAll({});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};
// get One 

exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Products.findAll({where:{id:id}});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};
// Get ALL Where Status  
 
exports.getAllStatus = async (req, res) => {
    console.log(req.params);
    const { status } = req.params;
    console.log(status);
    try {
        const data = await Products.findAll({where:{status:status}});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};

// Get ALL Where collection  
 
exports.getAllCollection = async (req, res) => {
    const { collection } = req.params;
    console.log(collection);
    try {
        const data = await Products.findAll({where:{collection:collection}});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};
// category

exports.getAllCategory = async (req, res) => {
    const { category } = req.params;
    console.log(category);
    try {
        const data = await Products.findAll({where:{category:category}});
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};