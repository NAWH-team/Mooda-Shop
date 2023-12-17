const { QueryError } = require("sequelize");
const db = require("../model/index.js");



exports.getbyId = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await db.user.findByPk(userId, {
            include: [
                {
                    model: db.product,
                    as: 'likedProductsUser',
                    attributes: ['id', 'name', 'price', 'img'],
                },
            ],
        });
        if (!user) {
            return res.json(null);
        } 
        res.status(200).json(user.likedProductsUser );
    } catch (error) {
        res.json(error);
    }
};


exports.addProductToFav = async (req, res) => {
    const {userId , prodId} = req.body
 

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.json();
        }

        const product = await db.product.findByPk(prodId);
        if (!product) {
            return res.json('no product');
        }

        await user.addLikedProductsUser(product);

        res.status(201).json({
            user: user,
});
    } catch (error) {error}
};



exports.deleteFromFav = async (req, res) => {
    console.log(req.body);
    const {userId, prodId} = req.body 
    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const productToDelete = await db.product.findByPk(prodId);
        if (!productToDelete) {
            return res.status(404).json();
        }

        await user.removeLikedProductsUser(productToDelete);

        res.status(200).json(productToDelete);
    } catch (error) {
        console.error('Error deleting product for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


