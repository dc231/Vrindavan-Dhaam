import express from 'express';
import { createVehicle, getVehicles } from '../controllers/vehicleController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, admin, createVehicle)
  .get(getVehicles);

export default router;