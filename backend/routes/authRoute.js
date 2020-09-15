const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require('../controllers/authController');

const { userSignupValidator } = require('../validator/index');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.post('/signout', signout);

module.exports = router;