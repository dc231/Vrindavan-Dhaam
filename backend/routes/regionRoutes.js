import express from 'express';
import { getRegions, createRegion } from '../controllers/regionController.js';

const router = express.Router();

// Route for getting all regions and creating a new one
router.route('/').get(getRegions).post(createRegion);

export default router;