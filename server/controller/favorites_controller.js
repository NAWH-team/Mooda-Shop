const { QueryError } = require("sequelize");
const db = require("../model/index.js");



exports.getbyId = async (req, res) => {
    var userId = req.params.userId;
    try {
        const user = await db.user.findByPk(userId, {
            include: [
                {
                    model: db.product,
                    as: 'products',
                    attributes: ['id', 'name', 'price', 'img' ],
                },
            ],
        });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, products: user.products });
    } catch (error) {
        console.error('Error retrieving products for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.addFavoritesForUser = async (req, res) => {
    const userId = req.body.userId;
    const prod = req.body.prod;

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const existingProduct = await db.product.findByPk(prod);
        if (!existingProduct) {
            return res.status(404).json({ success: false, message: 'Existing product not found' });
        }
        await user.addProduct(existingProduct);
        res.status(201).json({ success: true, message: 'Existing product added to user successfully', product: existingProduct });
    } catch (error) {
        console.error('Error adding existing product for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.deleteFromwallet = async (req, res) => {
    const userId = req.params.userId;
    const prodId = req.params.prodId;
    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const productToDelete = await db.product.findByPk(prodId);
        if (!productToDelete) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        await user.removeProduct(productToDelete);
        res.status(200).json({ success: true, message: 'Product deleted for user successfully', product: productToDelete });
    } catch (error) {
        console.error('Error deleting product for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.deleteAll= async (req, res) => {
        const userId = req.params.userId;
        try {
            const user = await db.user.findByPk(userId);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            await user.setProducts(null);
            res.status(200).json({ success: true, message: 'All products deleted for user successfully' });
        } catch (error) {
            console.error('Error deleting all products for user:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
};


