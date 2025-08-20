import express from 'express';
import { createTourPackage, getTourPackages } from '../controllers/tourPackageController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, admin, createTourPackage)
  .get(getTourPackages);

export default router;