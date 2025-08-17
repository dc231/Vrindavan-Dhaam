import express from 'express';
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile,getUsers  } from '../controllers/userController.js';
import {admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.route('/').get(protect, admin, getUsers);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;