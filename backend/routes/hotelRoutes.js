import express from 'express';
import { createHotel, getHotels } from '../controllers/hotelController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, admin, createHotel)
  .get(getHotels);

export default router;