// validations/commentValidation.js
const { check } = require('express-validator');

exports.commentValidation = [
  check('text', 'Text is required').not().isEmpty(),
];
