import express from 'express';
import { getPlaces, getPlaceById, createPlace } from '../controllers/placeController.js';

const router = express.Router();

router.route('/').get(getPlaces).post(createPlace);
router.route('/:id').get(getPlaceById);

export default router;