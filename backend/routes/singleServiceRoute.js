const express = require('express');
const router = express.Router();
const {
  createSingleService,
  listAllSingleService,
  read,
  removeSingleService,
  updateSingleService,
} = require('../controllers/singleServiceController');
const {
  adminMiddleware,
  authMiddleware,
  requireSignin,
} = require('../controllers/authController');
const { userById } = require('../controllers/userController');

router.post('/admin/singleService', requireSignin, adminMiddleware, createSingleService);

router.get('/singleServices', listAllSingleService);

router.get('/singleService/:slug', read);

router.put('/admin/singleService/:slug', requireSignin, adminMiddleware, updateSingleService);

router.delete(
  '/admin/singleService/:slug',
  requireSignin,
  adminMiddleware,
  removeSingleService
);

module.exports = router;
