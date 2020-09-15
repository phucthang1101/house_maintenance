const express = require('express');
const router = express.Router();
const {
  createCategory,
  listAllCategories,
  read,
  deleteCategory,
  updateCategory,
} = require('../controllers/categoryController');
const {
  adminMiddleware,
  authMiddleware,
  requireSignin,
} = require('../controllers/authController');
const { userById } = require('../controllers/userController');

router.post('/category', requireSignin, adminMiddleware, createCategory);

router.get('/categories', listAllCategories);

router.post('/category/:slug', read);

router.put('/category/:slug', requireSignin, adminMiddleware, updateCategory);

router.delete(
  '/category/:slug',
  requireSignin,
  adminMiddleware,
  deleteCategory
);

module.exports = router;
