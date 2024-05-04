// routes/reviews.js

const express = require('express');
const router = express.Router();
const {
    getAllReviews,
    getReviewById,
    createReview,
    updateReviewById,
    deleteReviewById,
} = require('../services/reviews');

// Routes
router.get('/', getAllReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.put('/:id', updateReviewById);
router.delete('/:id', deleteReviewById);

module.exports = router;
