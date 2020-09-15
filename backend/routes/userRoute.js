const express = require('express');
const router = express.Router();
const {
  adminMiddleware,
  authMiddleware,
  requireSignin,
} = require('../controllers/authController');
const { userById,readUser,updateUser } = require('../controllers/userController');

router.get('/secret/:userId', requireSignin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get('/user/:userId',requireSignin,authMiddleware,readUser);

router.put('/user/:userId',requireSignin,authMiddleware,updateUser);

router.param('userId', userById);

module.exports = router;
