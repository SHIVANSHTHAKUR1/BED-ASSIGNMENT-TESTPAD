const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products with pagination and filtering
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 20, category, minPrice, maxPrice } = req.query;

        const query = {};
        if (category) query.category = category;
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        const products = await Product.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(query);

        res.json({
            products,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Product.distinct('category');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
