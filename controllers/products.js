// controllers/products.js

const { Product } = require('../models/products');

// Controller functions

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new product
const createProduct = async (req, res) => {
    const { Name, Quantity, Price, CategoryID } = req.body;
    try {
        const product = await Product.create({ Name, Quantity, Price, CategoryID });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update product by ID
const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { Name, Quantity, Price, CategoryID } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            await product.update({ Name, Quantity, Price, CategoryID });
            res.json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete product by ID
const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
};
