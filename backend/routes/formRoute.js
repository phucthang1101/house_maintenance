const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/formController');

// validators
const { runValidation } = require('../validators');
const { contactFormValidator } = require('../validators/formValidator');

router.post('/contact', contactForm);

module.exports = router;