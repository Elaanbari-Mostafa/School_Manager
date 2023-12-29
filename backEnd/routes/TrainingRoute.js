import express from 'express';
import { getAllTrainings } from '../controllers/TrainingsController.js';

const router = express.Router();
router.route('/')
    .get(getAllTrainings)

export default router;