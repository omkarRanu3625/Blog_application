// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { postValidation } = require('../validations/postValidation');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, postValidation, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', protect, postValidation, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;
