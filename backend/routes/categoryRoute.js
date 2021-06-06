const express = require('express');
const router = express.Router();
const {
  createCategory,
  listAllCategories,
  read,
  deleteCategory,
  updateCategory,
  readCategory
} = require('../controllers/categoryController');
const {
  adminMiddleware,
  authMiddleware,
  requireSignin,
} = require('../controllers/authController');
const { userById } = require('../controllers/userController');

router.post('/admin/category', requireSignin, adminMiddleware, createCategory);

router.get('/categories', listAllCategories);

router.post('/category/:slug', read);
router.get('/category/:slug', readCategory);

router.put('/admin/category/:slug', requireSignin, adminMiddleware, updateCategory);

router.delete(
  '/admin/category/:slug',
  requireSignin,
  adminMiddleware,
  deleteCategory
);

module.exports = router;
