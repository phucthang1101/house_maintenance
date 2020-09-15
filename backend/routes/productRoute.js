const express = require('express');
const router = express.Router();
const {
  createProduct,
  read,
  removeProduct,
  updateProduct,
  list,
  listRelated,
  listBySearch
} = require('../controllers/productController');
const {
  adminMiddleware,
  authMiddleware,
  requireSignin,
} = require('../controllers/authController');
const { userById } = require('../controllers/userController');

router.post(
  '/admin/product',
  requireSignin,
  authMiddleware,
  adminMiddleware,
  createProduct
);

router.get('/product/:slug', read);

router.delete(
  '/admin/product/:slug',
  requireSignin,
  adminMiddleware,
  removeProduct
);

router.put(
  '/admin/product/:slug',
  requireSignin,
  adminMiddleware,
  updateProduct
);

router.get('/products', list);

router.post('/products/related/:slug',listRelated);

router.post("/products/by/search", listBySearch);

router.param('userId', userById);

module.exports = router;
