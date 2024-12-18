// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const { createComment, getComments, deleteComment } = require('../controllers/commentController');
const { commentValidation } = require('../validations/commentValidation');
const { protect } = require('../middleware/authMiddleware');

router.post('/:postId', protect, commentValidation, createComment);
router.get('/:postId', getComments);
router.delete('/:commentId', protect, deleteComment);

module.exports = router;
