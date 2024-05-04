// controllers/reviews.js

const { Review } = require('../models/reviews');

// Controller functions

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get review by ID
const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            res.json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new review
const createReview = async (req, res) => {
    const { UserID, Rating, Comment, DateEntered } = req.body;
    try {
        const review = await Review.create({ UserID, Rating, Comment, DateEntered });
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update review by ID
const updateReviewById = async (req, res) => {
    const { id } = req.params;
    const { UserID, Rating, Comment, DateEntered } = req.body;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            await review.update({ UserID, Rating, Comment, DateEntered });
            res.json({ message: 'Review updated successfully' });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete review by ID
const deleteReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            await review.destroy();
            res.json({ message: 'Review deleted successfully' });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReviewById,
    deleteReviewById,
};
