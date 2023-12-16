const { QueryError } = require("sequelize");
const db = require("../model/index.js");
const { join } = require("path");



exports.getbyId = async (req, res) => {
    var userId = req.params.userId;
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
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, products: user.likedProductsUser });
    } catch (error) {
        console.error('Error retrieving products for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.addProductForUser = async (req, res) => {
    const userId = req.body.userId;
    const prodId = req.body.prodId; // Assuming the product ID is sent as prodId

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const product = await db.product.findByPk(prodId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Use the correct alias 'likedProductsUser' specified in the association
        await user.addLikedProductsUser(product);

        res.status(201).json({
            user: user,
            success: true,
            message: 'Product added to user successfully',
            product: product
        });
    } catch (error) {
        console.error('Error adding product for user:', error);
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

        // Use the correct alias 'likedProductsUser' specified in the association
        await user.removeLikedProductsUser(productToDelete);

        res.status(200).json({
            success: true,
            message: 'Product deleted for user successfully',
            product: productToDelete
        });
    } catch (error) {
        console.error('Error deleting product for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
exports.deleteAll = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Use the correct alias 'likedProductsUser' specified in the association
        await user.setLikedProductsUser([]);

        res.status(200).json({
            success: true,
            message: 'All products deleted for user successfully'
        });
    } catch (error) {
        console.error('Error deleting all products for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.incrIntqty = async (req, res) => {
    const userId = req.params.userId;
    const prodId = req.params.prodId;

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const productToUpdate = await db.product.findByPk(prodId);
        if (!productToUpdate) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        if (productToUpdate.intQty < productToUpdate.quantity) {
            productToUpdate.intQty = productToUpdate.intQty + 1;

        }
        await productToUpdate.save();
        res.status(200).json({
            success: true,
            message: 'Product updated for user successfully',
            product: productToUpdate,
        });
    } catch (error) {
        console.error('Error updating product quantity for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.decrIntqty = async (req, res) => {
    const userId = req.params.userId;
    const prodId = req.params.prodId;

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const productToUpdate = await db.product.findByPk(prodId);
        if (!productToUpdate) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        if (productToUpdate.intQty > 1) {
            productToUpdate.intQty = productToUpdate.intQty - 1;

        }

        await productToUpdate.save();
        res.status(200).json({
            success: true,
            message: 'Product updated for user successfully',
            product: productToUpdate,
        });
    } catch (error) {
        console.error('Error updating product quantity for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }


};


exports.UpdatIntqty = async (req, res) => {
    const userId = req.params.userId;
    const prodId = req.params.prodId;

    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const productToUpdate = await db.product.findByPk(prodId);
        if (!productToUpdate) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        productToUpdate.intQty = 1;
        await productToUpdate.save();
        res.status(200).json({
            success: true,
            message: 'Product updated for user successfully',
            product: productToUpdate,
        });
    } catch (error) {
        console.error('Error updating product quantity for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



exports.UpQnty = async (req, res) => {
    const userId = req.params.userId;
    const prodId = req.params.prodId;
    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const productToUpdate = await db.product.findByPk(prodId);

        if (!productToUpdate) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        productToUpdate.quantity = productToUpdate.quantity - productToUpdate.intQty;
        productToUpdate.intQty = 1
        await productToUpdate.save();

        res.status(200).json({
            success: true,
            message: 'Product updated for user successfully',
            product: productToUpdate,
        });
    } catch (error) {
        console.error('Error updating product quantity for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};