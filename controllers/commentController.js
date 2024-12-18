// controllers/commentController.js
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');

exports.createComment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text } = req.body;
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = new Comment({
      text,
      user: req.user.id,
      post: req.params.postId,
    });

    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('user', 'name');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await comment.remove();
    res.json({ message: 'Comment removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

