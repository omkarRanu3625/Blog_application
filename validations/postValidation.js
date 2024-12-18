// validations/postValidation.js
const { check } = require('express-validator');

exports.postValidation = [
  check('title', 'Title is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
];
